import Features from "@/components/Home/Features";
import Highlight from "@/components/Home/Highlight";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import CTABanner from "@/components/Home/CTABanner";
import Faq from "@/components/Home/FAQ";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
      <div className="space-y-20">
          <Hero />
          <Features />
          <Highlight />
          <Testimonials />
          <CTABanner />
          <Faq />
          <Contact />
      </div>
  );
}
