import requset from "@/utils/request";

export function login(data) {
  return requset({
    url: "/login",
    method: "post",
    data
  });
}
