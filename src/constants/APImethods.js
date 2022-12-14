import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

export function signUp(email, name, image, password) {
  const payload = {
    email: email,
    name: name,
    image: image,
    password: password,
  };
  const res = axios.post(`${URL}/auth/sign-up`, payload);
  res.then((res) => console.log(res.status, res.data));
  res.catch((res) => console.log(res.status));
}

export function login(email, password) {
  const payload = {
    email: email,
    password: password,
  };
  const res = axios.post(`${URL}/auth/login`, payload);
  res.then((res) => console.log(res.status, res.data));
  res.catch((res) => console.log(res.status));
}
