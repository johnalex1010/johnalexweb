import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { faqs } from "@/data/faqs";
import { createFaqSchema, createWebPageSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageSchema({
            path: "/",
            name: "JohnAlex | Desarrollo web, SEO y consultoría digital",
            description:
              "Desarrollo sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
          }),
          createFaqSchema(faqs),
        ]}
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
      </main>
    </>
  );
}
