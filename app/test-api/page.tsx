"use client";

import { useEffect } from "react";
import { fetchEcho, fetchVersion, fetchWithAuth } from "@/services/api"; // Import your api.ts file

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
    </div>
  );
}
