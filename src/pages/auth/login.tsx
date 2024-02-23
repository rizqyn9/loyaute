export function LoginPage() {
  return (
    <>
      <div className="flex items-center gap-2 justify-center">
        <div>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <p className="text-2xl">Loyauté</p>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-[29px] font-bold">Create an account</h1>
        <p className="text-sm text-[#9A9A9A] leading-6">
          Hey there, fabulous! Ready to kick back and explore? Just a quick
          sign-in away from unlocking a world of fun.
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-4 mt-6">
          <input
            placeholder="Email"
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
            Sign In
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
