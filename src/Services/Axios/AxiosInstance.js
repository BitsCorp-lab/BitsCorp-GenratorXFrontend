import axios from "axios"
 import { applicationEnv } from "../../Config/AppConfig";

export const getBaseUrl = () => {
    let url;
    if(applicationEnv === "Development")
    {
      url = "http://localhost:5000/api/v1/"
    }else{
      url = "https://genratorxbackend.onrender.com/api/v1/"
    }
    return url;
  }

export default axios.create({
    baseURL: getBaseUrl(),
})