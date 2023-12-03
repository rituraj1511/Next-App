import Hero from "@/components/hero";
import scaleImg from "public/images/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      title="Scale your app to infinity"
      imgAlt="steel factory"
    />
  );
}
