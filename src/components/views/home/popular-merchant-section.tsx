import { MerchantBubblePreview } from "@/components/merchant/bubble-preview"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"
import { MERCHANT } from "@mocks/merchant"

export function PopularMerchantSection() {
  return (
    <section id="popular-merchant" className="mt-16">
      <Container>
        <div className="flex justify-between items-center">
          <Title title="Popular Merchant" />
          <button className="text-primary-1 hover:underline underline-offset-4">
            View more
          </button>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-4 gap-14 mt-8">
          {MERCHANT.map(merchant => (
            <MerchantBubblePreview key={merchant.name} {...merchant} />
          ))}
        </div>
      </Container>
    </section>
  )
}
