import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { AlertMessage } from "@/components/views/auth/alert-message"
import { AuthButton } from "@/components/views/auth/auth-button"
import { InputAuth } from "@/components/views/auth/auth-input"
import { AuthTitle } from "@/components/views/auth/auth-title"
import { type LoginDto, loginDto } from "@/features/auth/auth-dto"
import { authAction } from "@/features/auth/auth-slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authState = useAppSelector(state => state.auth)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const { formState, register, handleSubmit, reset, setError } =
    useForm<LoginDto>({
      resolver: zodResolver(loginDto),
      mode: "onChange",
    })

  const handleOnSubmit = handleSubmit(data => {
    dispatch(authAction.login(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch(() => {
        toast("Invalid account")
        reset()
        setError(`root`, { message: "Invalid account" })
      })
  })

  const { isDirty, isValid, errors } = formState
  const isSubmitDisable = !isDirty || !isValid || authState.state === "loading"

  return (
    <>
      <AuthTitle
        title="Let’s sign You in."
        desc="Hey there, fabulous! Ready to kick back and explore? Just a quick sign-in away from unlocking a world of fun."
      />
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2 mt-6">
          <InputAuth
            label="Email"
            error={errors.email?.message}
            autoComplete="off"
            {...register("email")}
          />
          <InputAuth
            label="Password"
            {...register("password")}
            type={passwordVisible ? "text" : "password"}
            className="pr-12"
            error={errors.password?.message}
          >
            <button
              type="button"
              onClick={() => setPasswordVisible(x => !x)}
              className="absolute right-3 top-0 translate-y-9 text-[#9A9A9A]"
            >
              {passwordVisible ? <Eye /> : <EyeOff />}
            </button>
          </InputAuth>

          <p className="text-sm text-neutral-200 mt-3">
            Forgot password?
            <span className="ml-1 text-primary">Reset Password</span>
          </p>

          <AlertMessage msg={errors.root?.message} className="my-2" />

          <AuthButton disabled={isSubmitDisable} type="submit">
            Sign In
          </AuthButton>

          <p className="text-sm text-center text-neutral-200">
            Haven’t registered yet?
            <Link
              to="/auth/register"
              className="ml-2 text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}
