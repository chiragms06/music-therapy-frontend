import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex items-center justify-around bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
        <Logo />
        <div className="flex justify-around text-lg text-[#24272B] font-sans">
          <h3 className="mx-6">Home</h3>
          <h3 className="mx-6">Progress</h3>
          <h3 className="mx-6">About Us</h3>
          <h3 className="mx-6">Profile</h3>
        </div>
      </div>
    </div>
  );
}
