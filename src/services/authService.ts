import api from "./api";

export const loginApi = async (username: string, password: string, rememberMe: boolean) => {
    const res = await api.post("/login", { username, password, rememberMe });
    return res.data;
};