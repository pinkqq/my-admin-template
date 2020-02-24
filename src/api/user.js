import requset from "@/utils/request";

export function login(data) {
  return requset.post({
    url: "/login",
    method: "post",
    data
  });
}
