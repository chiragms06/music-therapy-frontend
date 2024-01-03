"use client";

import React, { FormEvent } from "react";
import Logo from "@/Components/Logo";

export default function LoginPage() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-signup.jpg')" }}>
      <div className="p-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mb-8 border-2 border-gray-200 rounded-lg px-4 py-2 font-sans"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="mb-2 border-2 border-gray-200 rounded-lg px-4 py-2 font-sans"
            />
            <div className="text-right">
              {/* not functional */}
              <a href="/forgot-password" className="text-blue-600 text-sm">
                Forgot password?
              </a>
            </div>

            <div>
              <p className="mt-8 text-xs text-center text-slate-500">
                By continuing, you agree to our{" "}
                <a href="/terms" className="text-blue-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#7586FC] hover:bg-[#5c6dd9] text-white hover:text- rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div>
          <p className="mt-8 text-center text-slate-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 underline underline-offset-2"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
