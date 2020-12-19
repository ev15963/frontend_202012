import axios from "axios"; //엑시오스

export default function customAxios(url, callback) {
  axios({
    url: "/api" + url,
    method: "post",

    /**
     * 개발 환경에서의 크료스 도메인 이슈를 해결하기 위한 코드로
     * 운영 환경에 배포할 경우 15~16
     */
    // baseURL: "http://localhost:8282",
    // withCredentials: true,
  })
    .then(function (response) {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e + " console err");
    });

  // 간단한 HTTP GET Request
  // const http_req = new XMLHttpRequest();

  // http_req.open("GET", "http://localhost:8282/");
  // http_req.send();

  // http_req.onload = () =>
  //   console.log("Flask 서버로 부터의 응답은: " + http_req.responseText);
}
