import { IconPlayStore } from "@/components/icon/play-store"
import { ButtonIcon } from "@/components/ui/button/button-icon"
import { Container } from "@/components/ui/container"
import { IconAppStore } from "@/components/icon/app-store"

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
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex items-center gap-2">
            <img src="/img/logo-inverse.png" alt="logo" />
            <p className="text-2xl font-semibold">Loyauté</p>
          </div>
          <h2 className="text-[40px] font-semibold w-3/4">
            Get Instant Access: Download Now!
          </h2>
          <p className="text-[16px] w-3/4">
            Download our <strong>Loyauté </strong>now to unlock exclusive
            promotions and explore exciting features
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonIcon icon={<IconPlayStore />}>Play Store</ButtonIcon>
            <ButtonIcon icon={<IconAppStore />}>App Store</ButtonIcon>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden"></div>
        <img
          alt="footer"
          src="/img/bg-footer.png"
          className="top-0 right-0 absolute h-full object-cover"
        />
      </div>
    </Container>
  )
}
