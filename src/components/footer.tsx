import { Link } from "react-router-dom"

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
        <div className="flex gap-4 text-4xl col-span-2 items-center mb-auto">
          <img
            src="/img/logo.png"
            alt="logo"
            className="w-[1em] aspect-[1/1]"
          />
          <p className="font-semibold text-white">Loyauté</p>
        </div>
        <div className="flex flex-col gap-12">
          <h3 className="font-semibold">Quick Links</h3>
          {QUICK_LINKS.map(category => (
            <Link to={`${category.to}`} className="text-white/70">
              {category.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-12">
          <h3 className="font-semibold">Categorías</h3>
          {CATEGORIES.map(category => (
            <Link to={`${category.to}`} className="text-white/70">
              {category.label}
            </Link>
          ))}
        </div>
        <div className="col-span-2">
          <h3 className="font-semibold">Download Apps</h3>
        </div>

        <hr className="border border-white/25 col-span-full my-16" />
        <div className="col-span-full flex justify-between">
          <div className="flex gap-4">
            {SOCIALS.map(social => {
              return (
                <a href={social.to} target="_blank" rel="noreferrer">
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
              <p className="text-white/70">{txt}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
