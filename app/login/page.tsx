"use client";

import { useState, useEffect, FormEvent } from "react";
import Logo from "@/Components/Logo";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  async function loginHandler(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(email, password);
      console.log(response);

      // sessionStorage.setItem("accessToken", response.token);
      // sessionStorage.setItem("refreshToken", response.refreshToken);

      console.log("Logged in successfully!");
      setIsLoggedIn(true);

      if (response) {
        sessionStorage.setItem("user", "true");
        router.push("/dashboard");
      } else {
        throw new Error("User not logged in!");
      }
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      alert("Login failed!");
    } finally {
      setIsLoading(false);
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await loginHandler(
      formData.get("email") as string,
      formData.get("password") as string
    );

    console.log(response);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
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

            <button
              type="submit"
              className="mt-8 bg-[#7586FC] hover:bg-[#5c6dd9] text-white hover:text- rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="text-slate-400">Login</span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <div>
          <p className="mt-8 text-center text-slate-500">
          {"Don't have an account?"}{" "}
            <a
              href="/sign-up"
              className="text-blue-600 underline underline-offset-2"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
