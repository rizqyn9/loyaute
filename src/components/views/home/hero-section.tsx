import { IconAppStore } from "@/components/icon/app-store"
import { IconPlayStore } from "@/components/icon/play-store"
import { ButtonIcon } from "@/components/ui/button/button-icon"

export function HomeHeroSection() {
  return (
    <div
      className="relative max-w-full min-h-[710px] grid place-content-center"
      style={{
        background: "url(/img/banner.png) no-repeat center",
      }}
    >
      <div className="mx-auto relative z-20 w-2/4 text-center text-white flex flex-col gap-4">
        <h1 className="text-[60px] font-semibold">
          Welcome to <span className="text-[#007DFC]">Loyauté</span>
        </h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex gap-4 items-center justify-center mt-8">
          <ButtonIcon icon={<IconPlayStore />}>Play Store</ButtonIcon>
          <ButtonIcon icon={<IconAppStore />}>App Store</ButtonIcon>
        </div>
      </div>
    </div>
  )
}
