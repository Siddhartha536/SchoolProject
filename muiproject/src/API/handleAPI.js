import axios from "axios";
import {URL} from "../variable"
export const handleAPI = (url, payload) =>
  new Promise((resolve, reject) => {
    console.log("URL :", url);
    console.log("Payload :", payload);

    axios
      .post(URL.BACKEND_URL + url, { data: payload })
      .then((result) => {
        console.log("Result in handleAPI :", result.data);
        let outputData = result.data.data;
        let decryptedMessage = result.data.message;
        let decryptedStatus = result.data.status;
        // let decryptedData = result.data.data;
        console.log("Output Data", outputData);
        resolve({
          data: outputData,
          code: 200,
          message: decryptedMessage,
          status: decryptedStatus,
        });
      })
      .catch((error) => {
        console.log(`Error fetching data from ${url}: ${error}`);
        console.log("ERROR--", error.response);
        reject({
          error: true,
          errorMessage: error.response.message,
          errorStatus: error.response.status,
        });
      });
  });
