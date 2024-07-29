import { refreshToken } from "./user";

export const createPost = (formData) => {
    const URL = "https://studapi.teachmeskills.by/blog/posts/";
    const token = localStorage.getItem("accessToken");
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    return fetch(URL, options).then((response) => {
      if (response.status === 401) {
        return refreshToken(URL, options);
      }
  
      return response.json();
    });
  };