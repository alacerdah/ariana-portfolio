import { content } from "./data/content";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Nichos from "./components/Nichos";
import Videos from "./components/Videos";
import Fotos from "./components/Fotos";
import Processo from "./components/Processo";
import Marcas from "./components/Marcas";
import Contato from "./components/Contato";

export default function App() {
  useScrollReveal();

  return (
    <div className="relative w-full overflow-x-hidden bg-paper text-ink">
      <Nav name={content.name} links={content.nav} />
      <Hero photo={content.heroPhoto} subheadline={content.heroSubheadline} />
      <Sobre
        heading={content.about.heading}
        text={content.about.text}
        photo={content.about.photo}
        stats={content.about.stats}
        trustedBrands={content.brands.slice(0, 4)}
      />
      <Nichos
        heading={content.niches.heading}
        items={content.niches.items}
        photo={content.niches.photo}
        text={content.niches.text}
        miniStats={content.niches.miniStats}
      />
      <Videos items={content.videos} />
      <Fotos items={content.photos} filters={content.photoFilters} />
      <Processo steps={content.process} />
      <Marcas brands={content.brands} />
      <Contato
        heading={content.contact.heading}
        text={content.contact.text}
        email={content.contact.email}
        instagram={content.contact.instagram}
        tiktok={content.contact.tiktok}
        whatsapp={content.contact.whatsapp}
        name={content.name}
      />
    </div>
  );
}
