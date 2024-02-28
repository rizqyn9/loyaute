import { Link } from "react-router-dom"
import { Logo } from "../ui/logo"
import { Button } from "../ui/button"

const CATEGORIES = [
  { label: "Latests Promo", to: "#latest-promo" },
  { label: "Popular Merchant", to: "#popular-merchant" },
  { label: "Popular Rewards", to: "#popular-rewards" },
]

const QUICK_LINKS = [
  { label: "Home", to: "#" },
  { label: "History", to: "#" },
  { label: "rofile", to: "#" },
]

const SOCIALS = [
  { label: "Twitter", icon: "/img/icon/twitter.png", to: "#" },
  { label: "Linkedin", icon: "/img/icon/linkedin.png", to: "#" },
  { label: "Facebook", icon: "/img/icon/facebook.png", to: "#" },
]

export function Footer() {
  return (
    <footer className="max-w-design mx-auto bg-[#0A142F] min-h-[529px] text-white">
      <div className="max-w-content mx-auto py-16 grid grid-cols-6">
        <div className="col-span-2">
          <Logo classNameText="text-white font-bold text-[41px]" />
        </div>
        <div className="flex flex-col gap-12 text-sm">
          <h3 className="font-semibold">Quick Links</h3>
          {QUICK_LINKS.map(category => (
            <Link
              to={`${category.to}`}
              className="text-white/70"
              key={category.label}
            >
              {category.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-12 text-sm">
          <h3 className="font-semibold">Categorías</h3>
          {CATEGORIES.map(category => (
            <Link
              to={`${category.to}`}
              className="text-white/70"
              key={category.label}
            >
              {category.label}
            </Link>
          ))}
        </div>
        <div className="col-span-2 text-sm">
          <h3 className="font-semibold">Download Apps</h3>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="h-[30px] bg-transparent p-0">
              <img src="/img/download-appstore.png" className="h-full" alt="" />
            </Button>
            <Button className="h-[30px] bg-transparent p-0">
              <img src="/img/download-gstore.png" className="h-full" alt="" />
            </Button>
          </div>
        </div>

        <hr className="border border-white/25 col-span-full my-16" />

        <div className="col-span-full flex justify-between text-sm">
          <div className="flex gap-4">
            {SOCIALS.map(social => {
              return (
                <a
                  href={social.to}
                  target="_blank"
                  rel="noreferrer"
                  key={social.label}
                >
                  <img
                    className="w-20px"
                    src={social.icon}
                    title={social.label}
                    alt={social.label}
                  />
                </a>
              )
            })}
          </div>
          <div className="flex gap-8">
            {[
              "Política de Privacidad",
              "Términos y Condiciones",
              "Código de Conducta",
            ].map(txt => (
              <p className="text-white/70" key={txt}>
                {txt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
