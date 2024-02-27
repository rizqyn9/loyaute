import { InputFloating } from "@/components/ui/input-floating"
import { type LoginDto, loginDto } from "@/model/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export function LoginPage() {
  const { formState, register, handleSubmit } = useForm<LoginDto>({
    resolver: zodResolver(loginDto),
    mode: "onChange",
  })

  const handleOnSubmit = handleSubmit(data => {
    console.log({ data })
  })

  const { isDirty, isValid } = formState
  const isSubmitDisable = !isDirty || !isValid

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
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-4 mt-6">
          <InputFloating label="Email" {...register("email")} />
          <input
            placeholder="Email"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
            {...register("email")}
          />
          <input
            placeholder="Password"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
            {...register("password")}
          />

          <p className="text-sm text-[#9A9A9A]">
            Forgot password?
            <span className="ml-1 text-[#007DFC]">Reset Password</span>
          </p>
          <button
            disabled={isSubmitDisable}
            className="bg-[#007DFC] disabled:bg-gray-600 h-10 rounded-lg text-base text-white mt-6"
          >
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
