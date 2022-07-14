import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    testcommonvalue: "sadasdsd",
    testcoomonheader: JSON.parse(localStorage.getItem("test local data")),
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getUsers = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://627a0b8e4a5ef80e2c12b0d4.mockapi.io/api/v1/users`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const postUsers = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://627a0b8e4a5ef80e2c12b0d4.mockapi.io/api/v1/users`,
    method: "post",
    params: { sdasd: "asdasd", ...params },
    headers: { "Content-type": "application/json", ...headers },
    data: {
      name: { firstname: "nirali", lastname: "aandani" },
      address: "test address",
      dropdown: "sd",
      std: 12,
      checkbox: true,
      radio: true,
      falsecheckbox: false,
      array: ["bhjvd", "dfdsf", "dfdff"],
      ddff: { dfsd: { sdds: "sdfsd" } },
      dp1: "test address",
      dp2: "test address",
      dp3: "test address",
      dp4: "test address",
      switch: false,
      radiogroup: "",
      ...data,
    },
  });
};
