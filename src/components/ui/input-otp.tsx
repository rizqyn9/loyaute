import BaseOtpInput from "react-otp-input"

type OtpInputProps = {
  onChange(val: string): void
  value: string
}

export function OtpInput({ onChange, value }: OtpInputProps) {
  return (
    <BaseOtpInput
      numInputs={4}
      onChange={onChange}
      inputType={"text"}
      renderInput={props => (
        <div className="w-[4rem] rounded-md aspect-[1/1] border border-[#D9D9D9] flex items-center justify-center">
          <input
            {...props}
            className="mx-auto w-[1rem] text-black text-2xl focus:outline-none"
          />
        </div>
      )}
      value={value}
      containerStyle={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
      shouldAutoFocus
    />
  )
}
