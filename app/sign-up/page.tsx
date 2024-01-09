"use client";

import { FormEvent, useState } from "react";
import Logo from "@/Components/Logo";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(email, password);
      console.log(response);

      if (response) {
        sessionStorage.setItem("user", "true");
        router.push("/registration");
      } else {
        throw new Error("User not created!");
      }

      console.log("Signed in successfully!");
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
      setIsSignedIn(false);
      alert("Sign Up failed!");
    } finally {
      setIsLoading(false);
    }
  }

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await handleSignUp(
      formData.get("email") as string,
      formData.get("password") as string
    );

    console.log(response);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-signup.jpg')" }}
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
              className="mt-4 bg-[#7586FC] hover:bg-[#5c6dd9] text-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40"
              disabled={isLoading}
              hidden={isSignedIn}
            >
              {isLoading ? (
                <span className="text-slate-400">Sign Up</span>
              ) : (
                "Sign Up"
              )}
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
