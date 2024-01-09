"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    }
  },[]);

  const handleLogout = () => {
    setLoggedIn(false);
    signOut(auth);
    sessionStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="flex items-center justify-around bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
        <Logo />
        <div className="grid grid-cols-4 gap-4 text-lg text-[#24272B] font-sans">
          <Link href="/" passHref>
            <h3 className="">Home</h3>
          </Link>
          <Link href="/registration" passHref>
            <h3 className="">Register</h3>
          </Link>
          <Link href="/dashboard" passHref>
            <h3 className="">Dashboard</h3>
          </Link>
          {/* <h3 className="">Profile</h3> */}
          <button
            className="flex items-center ml-8"
            onClick={handleLogout}
            hidden={!loggedIn}
          >
            Log Out{" "}
            <span className="ml-2">
              <Image
                src="/logout.svg"
                alt="logout"
                width={20}
                height={20}
              ></Image>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
