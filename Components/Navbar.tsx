import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className="flex justify-around py-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
        <Logo />
        <div className="flex justify-around text-xl text-[#24272B] pt-4 ml-44 font-sans">
          <h3 className="mx-6">Home</h3>
          <h3 className="mx-6">Progress</h3>
          <h3 className="mx-6">About Us</h3>
          <h3 className="mx-6">Profile</h3>
        </div>
      </div>
    </div>
  );
}
