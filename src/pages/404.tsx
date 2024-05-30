import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/pages/404";
import PageNotFoundSvg from "../assets/not-found.svg"

export default function Custom404() {
  return (
    <Container>
      <Image 
        src={PageNotFoundSvg} 
        alt="Page not found image" 
        height={128}
        width={128}
      />
      <h2>This page does not exist</h2>
      <span>
        Click <Link href="/">here</Link> to back to the home page
      </span>
    </Container>
  )
}
