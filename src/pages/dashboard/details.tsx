import { IconCalendar } from "@/components/icon/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EmblaCarousel } from "@/components/ui/carousel"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"

export function DetailsPage() {
  return (
    <>
      <Container type="featured" wrapNav className="px-0">
        <div className="relative w-full">
          <img
            src="/img/banner-details.png"
            className="w-full absolute top-0 inset-x-0"
            alt=""
          />
        </div>
      </Container>
      <Container>
        <div className="bg-white rounded-lg mt-[20.1vw] design:mt-[289px] min-h-screen w-full z-20 relative p-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/img/merchant/sb.png" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              <p>Starbuck</p>
            </div>
            <h1 className="capitalize font-semibold text-xl">
              STARBUCKS BUY ONE GET ONE
            </h1>
            <div className="flex items-center gap-2">
              <div className="bg-[#FAFAFA] w-10 h-10 flex items-center justify-center rounded-lg">
                <IconCalendar className="w-6 h-6" />
              </div>
              <div className="text-xs flex h-10 flex-col justify-between">
                <p className="text-[#D9D9D9]">Expiry date</p>
                <p className="font-medium">30 Februray 2024 - 07 March 2024</p>
              </div>
            </div>
            <p className="text-xs leading-[23px]">
              Indulge in the ultimate coffee experience with our exclusive
              Starbucks Buy One Get One (BOGO) offer! Savor the rich flavors of
              your favorite handcrafted beverages while enjoying the delightful
              perk of getting a second one on the house. Embrace the joy of
              sharing and make every sip a moment to remember. Hurry, this
              limited-time offer is your perfect excuse to treat yourself and a
              friend to the comforting warmth and deliciousness of Starbucks.
              Terms and conditions apply; visit our stores or website for more
              details. Cheers to twice the enjoyment at Starbucks!
            </p>

            <hr className="border-dashed border-[#E9E9E9]" />

            <p className="font-bold text-sm">Benefit</p>
            <ul className="list-disc list-outside pl-4 text-xs flex flex-col gap-4 leading-[23px]">
              <li>
                <strong>Double the Enjoyment:</strong>
                <p>
                  With the BOGO voucher, you get the opportunity to enjoy two
                  Starbucks beverages for the price of one. This means you can
                  savor your favorite coffee or try a new drink without worrying
                  about the additional cost.
                </p>
              </li>
              <li>
                <strong>Perfect for Sharing Moments:</strong>
                <p>
                  The BOGO voucher is ideal for sharing moments with friends,
                  family, or colleagues. Whether it's catching up over coffee or
                  surprising a loved one with their favorite Starbucks drink,
                  the voucher enhances the social aspect of enjoying Starbucks
                  together.
                </p>
              </li>
              <li>
                <strong>Exploration of Flavors:</strong>
                <p>
                  Use the BOGO voucher to explore a variety of flavors and
                  beverages. Try a different coffee blend, experiment with
                  various syrups, or opt for a seasonal specialty drink. This
                  promotion encourages customers to broaden their taste
                  preferences
                </p>
              </li>
            </ul>

            <p className="font-bold text-sm">How to get</p>
            <ul className="list-outside list-decimal pl-4 text-xs flex flex-col gap-4 leading-[23px]">
              <li>
                <strong>Visit Starbucks:</strong>
                <p>Swing by any participating Starbucks store.</p>
              </li>
              <li>
                <strong>Order Your Favorite:</strong>
                <p>Choose your go-to handcrafted beverage from the menu.</p>
              </li>
              <li>
                <strong>Mention BOGO at Checkout:</strong>
                <p>
                  Inform the barista you're here for the Buy One Get One deal
                  when placing your order.
                </p>
              </li>
              <li>
                <strong>Enjoy the Extra Treat:</strong>
                <p>
                  Pay for one drink and savor a second one for free. Limited
                  time only, so seize the moment!
                </p>
              </li>
            </ul>

            <p className="font-bold text-sm">Terms and conditions</p>
            <ul className="list-outside list-decimal pl-4 text-xs flex flex-col gap-2 leading-[23px]">
              <li>
                This promotion is valid for a limited time only and is subject
                to change without notice.
              </li>
              <li>
                To avail of the Buy One Get One (BOGO) offer, customers must
                purchase a qualifying beverage at the regular price to receive a
                second beverage of equal or lesser value at no additional cost.
              </li>
              <li>
                The BOGO offer is applicable to select handcrafted beverages and
                sizes, as determined by Starbucks. Exclusions may apply.
              </li>
              <li>
                This promotion is valid at participating Starbucks stores only.
                Please check with your local store to confirm participation.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-12 mb-24">
        <Title
          title="Promo you might like"
          desc="Don't miss out! Limited time offer inside!"
        />
        <div className="mt-8">
          <EmblaCarousel />
        </div>
      </Container>
    </>
  )
}
