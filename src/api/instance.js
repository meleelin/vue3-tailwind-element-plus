import axios from "axios";

// baseURL是你API的主要Domain，之後發請求時只要填相對路徑就可以了
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 此處的instance為我們create的實體
instance.interceptors.response.use(
  (response) => {
    // 透過 axios 攔截器，可以在送出 request 之前、收到 response 後，
    // 還沒進入 then() 或 catch() 處理之前，將一切動作攔截下，處理一些事情。
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404: // go to 404 page
          console.log("你要找的頁面不存在");
          break;
        case 500: // go to 500 page
          console.log("程式發生問題");
          break;
        default:
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

/**
 * Description
 * @param {any} method
 * @param {any} url
 * @param {any} data=null
 * @param {any} config
 * @returns {any}
 */
// 此處的instance為我們create的實體
export default function (method, url, data = null, config) {
  method = method.toLowerCase();
  switch (method) {
    case "post":
      return instance.post(url, data, config);
    case "get":
      return instance.get(url, { params: data });
    case "delete":
      return instance.delete(url, { params: data });
    case "put":
      return instance.put(url, data);
    case "patch":
      return instance.patch(url, data);
    default:
      console.log(`未知的 method: ${method}`);
      return false;
  }
}
