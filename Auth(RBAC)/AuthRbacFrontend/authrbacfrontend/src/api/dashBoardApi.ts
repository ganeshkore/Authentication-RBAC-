import api from "./axios";



export const getUserContent = async () => {
  const res = await api.get("/api/user");
  return res.data;
};

export const getAdminContent = async () => {
  const res = await api.get("/api/admin");
  return res.data;
};


export const getPublicContent = async () => {
  const res = await api.get("/api/public");
  return res.data;
};