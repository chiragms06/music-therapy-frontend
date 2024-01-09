import { login } from "@/services/api";

export default function Login() {
  function loginHandler() {
    const fetchData = async () => {
      try {
        const response = await login("ashwin02@mail.com", "123");
        // console.log("Login Response:", response);

        sessionStorage.setItem("accessToken", response.token);
        sessionStorage.setItem("refreshToken", response.refreshToken);

        // console.log("Session token:", sessionStorage.getItem("accessToken"));
        console.log("Logged in successfully!")
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }
  return (
    <>
      <button
        className="bg-white hover:bg-slate-100 text-[#100B00] rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40"
        onClick={loginHandler}
      >
        Login
      </button>
    </>
  );
}
