export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 min-h-[10rem] text-white">
      <div className="max-w-content mx-auto relative z-20 flex justify-between">
        <div className="flex gap-4 text-4xl col-span-2 items-center mb-auto">
          <img
            src="/img/logo.png"
            alt="logo"
            className="w-[1em] aspect-[1/1]"
          />
          <p className="font-semibold">Loyauté</p>
        </div>
      </div>
    </header>
  )
}
