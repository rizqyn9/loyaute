import { useForm } from "react-hook-form"
import { Logo } from "@components/ui/logo"
import { useAppDispatch } from "@/app/hooks"
import { type RegisterDto, registerDto } from "@/model/register"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerAction } from "@/features/register/slice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<RegisterDto>({
    resolver: zodResolver(registerDto),
    defaultValues: {
      phoneNumber: {
        prefix: "+62",
      },
    },
  })

  const handleOnSubmit = handleSubmit(data => {
    dispatch(registerAction.submit(data))
    navigate("/auth/otp")
  }, console.error)

  useEffect(() => {
    dispatch(registerAction.reset())
  }, [dispatch])

  return (
    <>
      <Logo />
      <div className="text-center mt-8">
        <h1 className="text-[29px] font-bold">Create an account</h1>
        <p className="text-sm text-[#9A9A9A] leading-6 w-4/6 mx-auto">
          New around here? Awesome choice! Let's make it official.
        </p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-4 mt-6">
          <input
            placeholder="Name"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
            {...register("name")}
          />
          <input
            placeholder="Email"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
            {...register("email")}
          />
          <input
            placeholder="Phone Number"
            className="border border-[#D9D9D9] w-full px-4 rounded-lg h-[56px]"
            {...register("phoneNumber.value")}
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
            type="submit"
            className="bg-[#007DFC] h-10 rounded-lg text-base text-white mt-6"
          >
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
