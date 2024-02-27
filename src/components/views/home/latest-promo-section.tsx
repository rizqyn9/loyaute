import { EmblaCarousel } from "@/components/ui/carousel"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"

export function HomeLatestPromoSection() {
  return (
    <Container type="featured" className="px-0">
      <section id="latest-promo" className="py-16">
        <div className="pl-28">
          <Title
            title="Latest Promo 🔥"
            desc="Don't miss out! Limited time offer inside!"
          />
        </div>

        <div className="mt-8">
          <EmblaCarousel />
        </div>
      </section>
    </Container>
  )
}
