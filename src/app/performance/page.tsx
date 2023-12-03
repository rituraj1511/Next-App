import Hero from "@/components/hero";
import performanceImg from "public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      title="We serve high performance applications"
      imgAlt="welding"
    />
  );
}
