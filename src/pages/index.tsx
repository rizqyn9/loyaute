import { EmblaCarousel } from "@/components/ui/carousel"
import { MERCHANT } from "@mocks/merchant"
import { REWARDS } from "@mocks/reward"
import { TAGS } from "@mocks/tags"

export function IndexPage() {
  return (
    <div className="max-w-design mx-auto">
      <div
        className="-z-10"
        style={{
          background: "transparent url(/img/home-bg.png) repeat fixed center",
        }}
      >
        <div className="relative max-w-full min-h-[710px] grid place-content-center">
          <img
            className="absolute top-0 inset-x-0"
            src="/img/banner.png"
            alt="banner"
          />
          <div className="mx-auto relative z-20 w-2/4 text-center text-white flex flex-col gap-4">
            <h1 className="text-[60px] font-semibold">
              Welcome to <span className="text-[#007DFC]">Loyauté</span>
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex gap-4 items-center justify-center">
              <button>Play Store</button>
              <button>App Store</button>
            </div>
          </div>
        </div>

        <section id="latest-promo" className="py-16">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="font-semibold text-3xl">Latest Promo 🔥</h1>
            <p className="text-base mt-3 text-[#959595]">
              Don't miss out! Limited time offer inside!
            </p>
          </div>
          <div>
            <EmblaCarousel />
          </div>
        </section>
      </div>

      <section id="popular-merchant" className="w-content mx-auto mt-16">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Popular Merchant</h1>
          <button className="">View more</button>
        </div>
        <div className="grid grid-cols-6 gap-12 mt-8">
          {MERCHANT.map(merchant => (
            <MerchantPreview key={merchant.name} {...merchant} />
          ))}
        </div>
      </section>

      <section id="popular-rewards" className="w-content mx-auto mt-16">
        <div>
          <h1 className="font-semibold text-3xl">Popular Rewards</h1>
          <p className="text-base mt-3 text-[#959595]">
            Explore our latest popular rewards!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {[{ label: "All" }, ...TAGS].map(tag => (
            <BadgeFilter key={tag.label} {...tag} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          {Array.from({ length: 8 }, (_, i) => REWARDS[0]).map(
            (reward, idx) => (
              <CardReward key={idx} {...reward} />
            ),
          )}
        </div>
      </section>

      <section
        className="relative mt-8 h-[512px] max-w-design"
        style={{
          backgroundColor: "#017BF7",
          backgroundImage: "url(/img/bg-pattern.png)",
        }}
      >
        <div className="grid grid-cols-2 w-content mx-auto text-white h-full">
          <div className="flex justify-center flex-col">
            <div className="flex items-center gap-2">
              <img src="/img/logo-inverse.png" alt="logo" />
              <p className="text-2xl font-semibold">Loyauté</p>
            </div>
            <h2 className="text-[40px] font-semibold w-3/4 mt-4">
              Get Instant Access: Download Now!
            </h2>
            <p className="text-[16px] w-3/4 mt-4">
              Download our <strong>Loyauté </strong>now to unlock exclusive
              promotions and explore exciting features
            </p>
            <div>{/* Button */}</div>
          </div>
          <div className="relative h-full w-full overflow-hidden"></div>
          <img
            alt="footer"
            src="/img/bg-footer.png"
            className="top-0 right-0 absolute h-full object-cover"
          />
        </div>
      </section>

      <section id="footer"></section>
    </div>
  )
}

function BadgeFilter(props: { label: string; icon?: string }) {
  const { label, icon } = props
  return (
    <button className="rounded-full flex p-4 bg-[#F6F7FB] min-w-[4rem] items-center justify-center gap-2">
      {icon && (
        <div className="w-[18px] aspect-[1/1]">
          <img width={16} height={16} src={icon} alt={label} />
        </div>
      )}
      <span className="text-xs">{label}</span>
    </button>
  )
}

function MerchantPreview(props: { avatar: string; name: string }) {
  const { avatar, name } = props
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="rounded-full w-full aspect-[1/1]">
        <img src={avatar} alt={name} className="w-full" />
      </div>
      <p className="mt-2">{name}</p>
    </div>
  )
}

type RewardProps = {
  name: string
  thumbnail: string
  point: number
  merchant: {
    name: string
    icon?: string
  }
}

function CardReward(props: RewardProps) {
  const { name, thumbnail, point, merchant } = props
  return (
    <div className="flex flex-col gap-1">
      <img
        className="w-full aspect-[1/1] object-cover"
        src={thumbnail}
        alt={name}
      />
      <div className="flex gap-2 items-center mt-4">
        {merchant.icon && (
          <img
            src={merchant.icon}
            className="w-[24px] aspect-[1/1]"
            alt={merchant.name}
          />
        )}
        <p>{merchant.name}</p>
      </div>
      <p className="line-clamp-1 font-semibold text-xl">{name}</p>
      <p className="text-[#979797]">Point Earned</p>
      <div className="flex gap-2 items-center">
        <img className="w-[20px]" src="/img/icon/point.png" alt="point" />
        <p>{point}</p>
      </div>
    </div>
  )
}
