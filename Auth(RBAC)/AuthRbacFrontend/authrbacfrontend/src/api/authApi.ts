import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth";
import api from "./axios";



export const registerUser = async (data: RegisterRequest): Promise<string> => {

     const response = await api.post("/auth/register", data);

       return response.data;
}


export const loginUser = async (data : LoginRequest): Promise<AuthResponse> => {

    const response = await api.post("/auth/login", data);

    return response.data;
}