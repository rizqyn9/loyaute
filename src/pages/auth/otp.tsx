import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { OtpInput } from "@/components/ui/input-otp"
import { Logo } from "@/components/ui/logo"
import { registerAction, registerSelector } from "@/features/register/slice"
import { type OtpDto, otpDto } from "@/model/otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"

export function OtpPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const step = useAppSelector(registerSelector.getStep)
  const phoneNumber = useAppSelector(registerSelector.getPhoneNumber)

  const { setValue, getValues, watch, handleSubmit } = useForm<OtpDto>({
    resolver: zodResolver(otpDto),
    defaultValues: { otp: "" },
    mode: "all",
  })

  if (step !== "otp" || !phoneNumber) {
    return <Navigate to="/auth/register" />
  }

  const handleOnSubmitOtp = handleSubmit(data => {
    console.log({ data })
    dispatch(registerAction.validateOtp(data))
    navigate("/auth/login")
  })

  return (
    <>
      <Logo />
      <div className="text-center mt-8">
        <h1 className="text-[29px] font-bold">Enter OTP Verification</h1>
        <p className="text-sm text-[#9A9A9A] leading-6 mx-auto">
          We’ve sent an OTP code to{" "}
          <span className="whitespace-nowrap">{phoneNumber}</span>
        </p>
      </div>
      <form onSubmit={handleOnSubmitOtp}>
        <div className="my-8">
          <OtpInput
            onChange={val => setValue("otp", val?.toLowerCase()) as void}
            value={getValues("otp")}
          />
        </div>

        <p className="text-sm text-center text-[#9A9A9A]">
          Didn’t receive code ?
          <span className="ml-2 text-[#007DFC]">Resend Code</span>
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <button
            type="submit"
            className="bg-[#007DFC] disabled:bg-[#D9D9D9] h-10 rounded-lg text-base text-white "
            disabled={watch("otp")?.length !== 4}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
