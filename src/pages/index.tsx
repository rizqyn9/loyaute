import { Container } from "@/components/ui/container"
import { BannerFooterSection } from "@/components/views/home/banner-footer-section"
import { HomeHeroSection } from "@/components/views/home/hero-section"
import { HomeLatestPromoSection } from "@/components/views/home/latest-promo-section"
import { PopularMerchantSection } from "@/components/views/home/popular-merchant-section"
import { PopularRewardSection } from "@/components/views/home/popular-reward-section"

export function IndexPage() {
  return (
    <>
      <Container
        className="px-0 -z-10"
        type="featured"
        style={{
          background: "transparent url(/img/home-bg.png) repeat fixed center",
        }}
      >
        <HomeHeroSection />
        <HomeLatestPromoSection />
      </Container>
      <PopularMerchantSection />
      <PopularRewardSection />
      <BannerFooterSection />
    </>
  )
}
