import Hero from "@/components/hero";
import homeImg from "public/images/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      title="Professional Cloud Hosting"
      imgAlt="Hero Image"
    />
  );
}
