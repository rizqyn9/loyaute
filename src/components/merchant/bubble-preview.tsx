export function MerchantBubblePreview(props: { avatar: string; name: string }) {
  const { avatar, name } = props
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="rounded-full w-full aspect-[1/1]">
        <img src={avatar} alt={name} className="w-full" />
      </div>
      <p className="mt-2 text-base text-center whitespace-nowrap line-clamp-1 w-full">
        {name}
      </p>
    </div>
  )
}
