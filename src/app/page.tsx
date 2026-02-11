import { Connected } from "@/components/home/connected";
import { Deploy } from "@/components/home/deploy";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Deploy />
      <Connected />
    </div>
  );
}
