import { IconPlayStore } from "@/components/icon/play-store"
import { ButtonIcon } from "@/components/ui/button/button-icon"
import { Container } from "@/components/ui/container"
import { IconAppStore } from "@/components/icon/app-store"
import { Logo } from "@/components/ui/logo"

export function BannerFooterSection() {
  return (
    <Container
      as="section"
      type="featured"
      className="relative mt-16 h-[512px]"
      style={{
        backgroundColor: "#017BF7",
        backgroundImage: "url(/img/bg-pattern.png)",
      }}
    >
      <div className="grid grid-cols-2 w-content mx-auto text-white h-full">
        <div className="flex flex-col gap-5 my-auto">
          <Logo invert classNameText="text-[30px] font-medium" />
          <h2 className="text-[40px] font-semibold w-5/6">
            Get Instant Access: Download Now!
          </h2>
          <p className="text-[16px] font-normal w-3/4">
            Download our <strong className="font-bold">Loyauté </strong>now to
            unlock exclusive promotions and explore exciting features
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <ButtonIcon className="border-2" icon={<IconPlayStore />}>
              Play Store
            </ButtonIcon>
            <ButtonIcon className="border-2" icon={<IconAppStore />}>
              App Store
            </ButtonIcon>
          </div>
        </div>
        <img
          alt="footer"
          src="/img/bg-footer.png"
          className="top-0 right-0 absolute h-full object-cover"
        />
      </div>
    </Container>
  )
}
