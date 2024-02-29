import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { OtpInput } from "@/components/ui/input-otp"
import { AlertMessage } from "@/components/views/auth/alert-message"
import { AuthButton } from "@/components/views/auth/auth-button"
import { AuthTitle } from "@/components/views/auth/auth-title"
import { registerAction, registerSelector } from "@/features/register/slice"
import { type OtpDto, otpDto } from "@/features/auth/auth-dto"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"

export function OtpPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const step = useAppSelector(registerSelector.getStep)
  const phoneNumber = useAppSelector(registerSelector.getPhoneNumber)

  const { setValue, getValues, watch, handleSubmit, formState } =
    useForm<OtpDto>({
      resolver: zodResolver(otpDto),
      defaultValues: { otp: "" },
      mode: "all",
    })

  if (step !== "otp" || !phoneNumber) {
    return <Navigate to="/auth/register" />
  }

  const handleOnSubmitOtp = handleSubmit(data => {
    dispatch(registerAction.validateOtp(data))
    navigate("/auth/login")
  })

  const { errors } = formState

  return (
    <>
      <AuthTitle
        title="Enter OTP Verification"
        desc={
          <>
            We’ve sent an OTP code to
            <span className="whitespace-nowrap">{phoneNumber}</span>
          </>
        }
      />
      <form onSubmit={handleOnSubmitOtp} className="flex flex-col gap-2 mt-6">
        <div className="my-4">
          <OtpInput
            onChange={val => setValue("otp", val?.toLowerCase()) as void}
            value={getValues("otp")}
          />
        </div>

        <p className="text-sm text-neutral-200">
          Didn’t receive code ?
          <span className="ml-1 text-primary">Resend Code</span>
        </p>

        <AlertMessage msg={errors.root?.message} className="my-2" />

        <AuthButton disabled={watch("otp")?.length !== 4} type="submit">
          Submit
        </AuthButton>
      </form>
    </>
  )
}
