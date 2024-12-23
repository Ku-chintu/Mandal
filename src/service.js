import axios from "axios";
import { ENV } from "./config";

async function postData(url, body, headers) {
  try {
    let _r = await axios.post(url, body);
    return _r;
  } catch (e) {
    console.log(e);
    return e;
  }
}


const requestApi = {
  contactUs: async (body) => {
    const url = ENV.WEB_URL + `/api/Web/ContactUs`;
    let r = await postData(url, body);
    return r;
  },
  fetchJobs: async (body) => {
    const url = ENV.WEB_URL + `/api/Web/Search`;
    let r = await postData(url, body, {
        headers: {
           "Content-Type": "application/json",
           "accept":"text/plain",
        },
      });
    return r;
  },
  applyToJob: async (body) => {
    const url = ENV.WEB_URL + `/api/Web/Apply`;
    let r = await postData(url, body);
    return r;
  },
  
};

export default {
  requestApi,
};
