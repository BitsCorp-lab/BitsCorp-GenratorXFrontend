import { genratorXApiUrls } from "../../../ApiEndpoints/GenratorXApiUrls";
import {
  handleLoding,
  downloadBtnState,
  handleResponse,
} from "./genratorXSlice";
import http from "../../../Services/Axios/AxiosInstance";
import { getBaseUrl } from "../../../Services/Axios/AxiosInstance";

export const genrateApplication =
  (projectName, collectionNames) => async (dispatch) => {
    try {
      dispatch(handleLoding("loading"));
      dispatch(handleResponse("Generating..."));
      let data = {
        projectName: projectName,
        collectionNames: collectionNames,
      };

      let config = {
        method: "post",
        url: genratorXApiUrls().createApplication,
        data: data,
      };

      const response = await http(config);
      if (response.status === 200) {
        dispatch(downloadBtnState(false));
        dispatch(handleResponse("Generated..."));
        dispatch(handleLoding("idle"));
      }
    } catch (error) {
      dispatch(handleResponse("Error"));
      dispatch(handleLoding("idle"));
    }
  };

export const downloadApplication = (projectName) => async (dispatch) => {
  try {
    let baseURL = getBaseUrl();
    let downloadUrl = `${baseURL}${
      genratorXApiUrls(projectName).downloadApplication
    }`;
    window.open(downloadUrl);
  } catch (error) {
    console.log(error);
  }
};
