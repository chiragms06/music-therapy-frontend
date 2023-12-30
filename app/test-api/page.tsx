"use client";

import { useEffect } from "react";
import { fetchEcho, fetchVersion, fetchWithAuth } from "@/services/api"; // Import your api.ts file

export default function Test() {
  function TestAll() {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const echoResponse = await fetchEcho("Shubham");
          console.log("Echo Response:", echoResponse);

          const versionResponse = await fetchVersion();
          console.log("Version Response:", versionResponse);

          const authResponse = await fetchWithAuth();
          console.log("Authenticated Response:", authResponse);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    return <div>Success</div>;
  }

  return (
    <div>
      <h1>This is testing environment</h1>
      <br />
      <button
        className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40"
        onClick={TestAll}
      >
        Test All
      </button>
      <br />
    </div>
  );
}
