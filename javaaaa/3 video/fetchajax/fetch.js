//Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax

const requestUrl = "https://jsonplaceholder.typicode.com/users";
function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("sosal");
      e.data = error;
      throw e;
    });
  });
}

// sendRequest("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(e));
body = {
  name: "Vladilen",
  age: 26,
};
sendRequest("POST", requestUrl, body)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
