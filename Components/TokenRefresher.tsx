"use client";

import React from "react";
import { useEffect } from "react";
import { refreshToken } from "@/services/api";

export default function TokenRefresher() {
  useEffect(() => {
    setInterval(async () => {
      await refreshToken();
      console.log("Token refreshed");
    }, 10000);
  }, []);
  return <></>;
}
