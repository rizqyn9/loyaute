import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { Link } from "react-router-dom"

export function PageNotFound() {
  return (
    <Container className="w-screen h-screen grid place-content-center gap-4">
      <Logo className="mx-auto" />
      <p className="text-center">Not Found</p>
      <Link to={"/"}>
        <Button>Back to homepage</Button>
      </Link>
    </Container>
  )
}
