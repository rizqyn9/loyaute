import { useForm } from "react-hook-form"
import { useAppDispatch } from "@/app/hooks"

import { zodResolver } from "@hookform/resolvers/zod"
import { registerAction } from "@/features/register/slice"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { AuthTitle } from "@/components/views/auth/auth-title"
import { InputAuth } from "@/components/views/auth/auth-input"
import { Eye, EyeOff } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AuthButton } from "@/components/views/auth/auth-button"
import { AlertMessage } from "@/components/views/auth/alert-message"
import { type RegisterDto, registerDto } from "@/features/auth/auth-dto"

export function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const { register, handleSubmit, formState, setValue, getValues } =
    useForm<RegisterDto>({
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

  const { isDirty, isValid, errors } = formState
  const isSubmitDisable = !isDirty || !isValid

  return (
    <>
      <AuthTitle
        title="Create an account"
        desc="New around here? Awesome choice! Let's make it official."
      />
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2 mt-6">
          <InputAuth
            label="Name"
            error={errors.name?.message}
            autoComplete="off"
            {...register("name")}
          />
          <InputAuth
            label="Email"
            error={errors.email?.message}
            autoComplete="off"
            {...register("email")}
          />
          <InputAuth
            label="Phone Number"
            labelClassName="peer-placeholder-shown:translate-x-[4.5rem]"
            className="pl-[4.5rem]"
            error={errors.phoneNumber?.value?.message}
            {...register("phoneNumber.value", {
              setValueAs(value) {
                return value.replace(/\D/g, "")
              },
            })}
          >
            <Select
              onValueChange={val => setValue("phoneNumber.prefix", val)}
              value={getValues("phoneNumber.prefix")}
            >
              <SelectTrigger className="w-[48px] p-0 absolute top-0 translate-y-7 left-3 border-none">
                <SelectValue className="text-sm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+62">+62</SelectItem>
              </SelectContent>
            </Select>
          </InputAuth>
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
            Create Account
          </AuthButton>

          <p className="text-sm text-center text-neutral-200">
            Already have account ?
            <Link
              to="/auth/login"
              className="ml-2 text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}
