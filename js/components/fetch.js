import { showLoader } from "./loader.mjs";
import { hideLoader } from "./loader.mjs";

//  Post url: https://v2.api.noroff.dev/blog/posts/Tompe  //
//  Register url: https://v2.api.noroff.dev/auth/register  //

export const doFetch = async (method, noroffapi, body) => {
  console.log("Doing fetch call towards: ", noroffapi);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let accessToken = "";
  if (userInfo) {
    accessToken = userInfo.accessToken;
  }
    showLoader();
    try {
      const response = await fetch(noroffapi, {
        method: method,
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
    }finally{
      hideLoader()
    }
  
};
