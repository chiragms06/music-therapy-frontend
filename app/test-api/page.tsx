'use client';

import { fetchEcho, fetchVersion, fetchWithAuth, signup, login, fetchQuestions } from "@/services/api"; // Import your api.ts file
import { QuestionType } from "@/app/interfaces/interfaces";

export default function TestPage() {
  function testEcho() {
    const fetchData = async () => {
      try {
        const response = await fetchEcho("Shubham");
        console.log("Echo Response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  function testVersion() {
    const fetchData = async () => {
      try {
        const response = await fetchVersion();
        console.log("Version Response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  function testAuth() {
    const fetchData = async () => {
      try {
        const response = await fetchWithAuth();
        console.log("Authenticated Response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  function testSignup() {
    const fetchData = async () => {
      try {
        const response = await signup("ashwin02@mail.com", "123");
        console.log("Signup Response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  function testLogin() {
    const fetchData = async () => {
      try {
        const response = await login("ashwin02@mail.com", "123");
        console.log("Login Response:", response);

        sessionStorage.setItem("accessToken", response.token);
        sessionStorage.setItem("refreshToken", response.refreshToken);

        console.log("Session token:", sessionStorage.getItem("accessToken"));

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }
  
  function testQuestions() {
    const fetchData = async () => {
      try {
        const response : QuestionType[] = await fetchQuestions();
        console.log("Questions response:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  return (
    <div>
      <h1>This is testing environment</h1>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testEcho}
      >
        Echo
      </button>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testVersion}
      >
        Version
      </button>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testAuth}
      >
        Auth
      </button>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testSignup}
      >
        Signup
      </button>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testLogin}
      >
        Login
      </button>
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40 m-2"
        onClick={testQuestions}
      >
        Questions
      </button>
    </div>
  );
}
