import { Logo } from "@components/ui/logo"

export function RegisterPage() {
  return (
    <>
      <Logo />
      <div className="text-center mt-8">
        <h1 className="text-[29px] font-bold">Create an account</h1>
        <p className="text-sm text-[#9A9A9A] leading-6 w-4/6 mx-auto">
          New around here? Awesome choice! Let's make it official.
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-4 mt-6">
          <input
            placeholder="Name"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
          />
          <input
            placeholder="Email"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
          />
          <input
            placeholder="Phone Number"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
          />
          <input
            placeholder="Password"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
          />

          <p className="text-sm text-[#9A9A9A]">
            Forgot password?
            <span className="ml-1 text-[#007DFC]">Reset Password</span>
          </p>
          <button className="bg-[#007DFC] h-10 rounded-lg text-base text-white mt-6">
            Create Account
          </button>
          <p className="text-sm text-center text-[#9A9A9A]">
            Haven’t registered yet?
            <span className="ml-2 text-[#007DFC]">Register</span>
          </p>
        </div>
      </form>
    </>
  )
}
