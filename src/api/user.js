import req from "./instance";

export const userTest = () => {
  return req("get", "test.json");
};
