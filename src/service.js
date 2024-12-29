import axios from "axios";
import { ENV } from "./config";
import ResumeUpload from "./components/ResumeUpload";

async function postData(url, body, headers) {
  try {
    let _r = await axios.post(url, body, headers);
    return _r;
  } catch (e) {
    console.log(e);
    return e;
  }
}


const requestApi = {
  contactUs: async (body) => {
    const url = `https://app.mandalsolution.com/api/Web/ContactUs`;
    let r = await postData(url, body, {
      headers: {
         "Content-Type": "application/json"
      },
    });
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
  resumeUpload: async (body, config) => {
    let url = ENV.WEB_URL + `/api/Web/ResumeApply` + (config.jobId > 0 ? `?jobid=`+ config.jobId   : '');
    let r = await postData(url, body, config.headers);
    return r;
  },
  applyToJob: async (body) => {
    const url = ENV.WEB_URL + `/api/Web/Apply`;
    let r = await postData(url, body);
    return r;
  },
  subscribeForUpdate: async (body) => {
    const url = ENV.WEB_URL + `/api/Web/Subscribe`;
    let r = await postData(url, body, {
      headers: {
         "Content-Type": "application/json"
      },
    });
    return r;
  },
  
};

export default {
  requestApi,
};
