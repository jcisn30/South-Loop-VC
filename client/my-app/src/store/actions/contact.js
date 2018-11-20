import {SEND_CONTACT} from "../actionTypes";
import axios from "axios";

export function setContact(message) {
  return {
    type: SEND_CONTACT,
    message,
  };
}

