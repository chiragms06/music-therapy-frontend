import axios from "axios";
import { QuestionType } from "@/app/interfaces/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your base URL
  // You can set headers or other configurations here if needed
});

// Test environment
export const fetchEcho = async (name: string) => {
  try {
    const response = await axiosInstance.get(`test/echo/${name}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchEcho = async (req: NextApiRequest,
//   res: NextApiResponse) => {
//     const { name } = req.body as { name: string };
//   try {
//     const response = await axiosInstance.get(`test/echo/${name}`);
//     res.redirect(200, '/login');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: 'Failed to fetch data' })
//   }
// };

export const fetchVersion = async () => {
  try {
    const response = await axiosInstance.get("/test/version");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWithAuth = async () => {
  try {
    // Replace 'token' with your actual token
    const token = sessionStorage.getItem("accessToken");
    const response = await axiosInstance.get("/test/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Authentication environment
export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = async () => {
  try {
    const refreshtoken = sessionStorage.getItem("refreshToken");
    const response = await axiosInstance.post(
      "/auth/token",
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshtoken}`,
        },
      }
    );
    sessionStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuestions = async (): Promise<Array<QuestionType>> => {
  try {
    const token = sessionStorage.getItem("accessToken");
    const response = await axiosInstance.get("/questions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const registerTherapist = async (
  fname: string,
  lname: string,
  email: string,
  contact: string
) => {
  try {
    // api call to register therapist
    const therapistObject = {
      fname,
      lname,
      email,
      contact,
    };

    return therapistObject;
  } catch (error) {
    console.log(error);
    return [];
  }
};
