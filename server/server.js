
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
 

 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'c9'
});
 
// connect to database
mc.connect();
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

 
// Retrieve all messages 
app.get('/messages', function (req, res) {
    mc.query('SELECT * FROM words', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'messages list.' });
    });
});
 
// Search for messages with ‘bug’ in their name
app.get('/messages/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM words WHERE task LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'messages search list.' });
    });
});
 
// Retrieve message with id 
app.get('/message/:id', function (req, res) {
 
    let task_id = req.params.id;
 
    mc.query('SELECT * FROM words where id=?', task_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'messages list.' });
    });
 
});
 
// Add a new message  
app.post('/message', function (req, res) {
 
    let task = req.body.task;
 
    if (!task) {
        return res.status(400).send({ error:true, message: 'Please provide task' });
    }
 
    mc.query("INSERT INTO words SET ? ", { task: task }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
    });
});
 
//  Update message with id
app.put('/message', function (req, res) {
 
    let task_id = req.body.task_id;
    let task = req.body.task;
 
    if (!task_id || !task) {
        return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
    }
 
    mc.query("UPDATE words SET task = ? WHERE id = ?", [task, task_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
    });
});
 
//  Delete message
app.delete('/message/:id', function (req, res) {
 
    let task_id = req.params.id;
 
    mc.query('DELETE FROM words WHERE id = ?', [task_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
    });
 
});
 
// all other requests redirect to 404
app.all("*", function (req, res, next) {
    return res.send('page not found');
    next();
});
 
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8081, function () {
    console.log('Node app is running on port 8081');
});

// allows "grunt dev" to create a development server with livereload
module.exports = app;