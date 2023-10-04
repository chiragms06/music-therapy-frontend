import React from "react";
import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex justify-around py-4 bg-white bg-opacity-50">
      <Logo />
      <div className="flex gap-16 text-2xl text-[#24272B] pt-4 ml-44 font-sans">
        <h3>Home</h3>
        <h3>Progress</h3>
        <h3>Explore</h3>
        <h3>Profile</h3>
      </div>
    </div>
  );
}
