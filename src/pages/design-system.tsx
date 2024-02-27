import { Input } from "@/components/ui/input-v2"
import { LogoIcon } from "@/components/icon/logo"
import { Logo } from "@/components/ui/logo"

export function DesignSystem() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <Input placeholder="asd" />
      <Input placeholder="asd" isError />
      {/* <InputFloating /> */}
      <LogoIcon />
      <LogoIcon invert />
      <Logo />
    </div>
  )
}
