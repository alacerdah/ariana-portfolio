import type { PortfolioContent } from "../types";

/** Conteúdo editável do template. Troque os textos entre [colchetes] e as listas
 * abaixo pelo conteúdo real — o resto do layout se adapta sozinho. */
export const content: PortfolioContent = {
  name: "Ariana",
  heroPhoto: "/images/sections/banner.png",
  heroSubheadline:
    "Crio conteúdo UGC em foto e vídeo que ajuda marcas a construir confiança e gerar resultado de verdade.",
  nav: [
    { label: "Trabalhos", href: "#fotos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Como trabalho", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
  about: {
    heading: "Oi, eu sou Ariana",
    text: "Crio conteúdo UGC autêntico há mais de 4 anos para marcas de beleza, moda, lifestyle e bem-estar. Acredito que o melhor conteúdo é aquele que parece real — porque é.",
    photo: "/images/sections/about.jpg",
    stats: [
      { value: "4+", label: "anos" },
      { value: "30+", label: "marcas" },
      { value: "16M+", label: "alcance total" },
    ],
  },
  niches: {
    heading: "Nichos de conteúdo",
    items: [
      { icon: "skincare", label: "Skincare" },
      { icon: "beleza", label: "Beleza" },
      { icon: "fitness", label: "Fitness" },
      { icon: "lifestyle", label: "Lifestyle" },
      { icon: "wellness", label: "Wellness" },
    ],
    photo: "/images/sections/nicho.webp",
    text: "Como criadora de UGC, eu trago uma perspectiva autêntica e confiável que conecta com um público amplo. Já colaborei com marcas de pequenos negócios a grandes players do mercado, sempre com a mesma criatividade e dedicação em cada projeto.",
    miniStats: [
      { value: "30+", label: "marcas colaboradas" },
      { value: "150+", label: "campanhas criadas" },
      { value: "100%", label: "conteúdo autêntico" },
    ],
  },
  videos: [
    { id: "v1", label: "VÍDEO 01", tag: "REELS" },
    { id: "v2", label: "VÍDEO 02", tag: "TIKTOK" },
    { id: "v3", label: "VÍDEO 03", tag: "REELS" },
    { id: "v4", label: "VÍDEO 04", tag: "TIKTOK" },
    { id: "v5", label: "VÍDEO 05", tag: "REELS" },
  ],
  photos: [
    { id: "p1", src: "/images/sections/galeria1.jpg", label: "Galeria 01" },
    { id: "p2", src: "/images/sections/galeria2.jpg", label: "Galeria 02" },
    { id: "p3", src: "/images/sections/galeria3.jpg", label: "Galeria 03" },
    { id: "p4", src: "/images/sections/galeria4.jpg", label: "Galeria 04" },
    { id: "p5", src: "/images/sections/galeria5.jpg", label: "Galeria 05" },
    { id: "p6", src: "/images/sections/galeria6.jpg", label: "Galeria 06" },
    { id: "p7", src: "/images/sections/galeria7.jpg", label: "Galeria 07" },
    { id: "p8", src: "/images/sections/galeria8.jpg", label: "Galeria 08" },
  ],
  photoFilters: ["Todas", "Vídeos UGC", "Fotografia", "Lifestyle", "Ads"],
  process: [
    { n: "01", title: "Briefing", desc: "Entendo a marca, o produto e o objetivo da campanha." },
    { n: "02", title: "Roteiro", desc: "Crio um roteiro autêntico, aprovado antes de gravar." },
    { n: "03", title: "Gravação", desc: "Produção de fotos e vídeos com luz, cenário e edição própria." },
    { n: "04", title: "Entrega", desc: "Arquivos finais no prazo, com direito a 1 ajuste." },
  ],
  brands: [
    { id: "nivea", label: "Nivea", logoSrc: "/images/brands/Nivea_logo.svg.webp" },
    { id: "dove", label: "Dove", logoSrc: "/images/brands/dove.png" },
    { id: "chanel", label: "Chanel", logoSrc: "/images/brands/chanel.png" },
    { id: "philips", label: "Philips", logoSrc: "/images/brands/philips.png" },
    { id: "cea", label: "C&A", logoSrc: "/images/brands/cea.svg" },
    { id: "fenty", label: "Fenty Beauty", logoSrc: "/images/brands/fenty-beauty.jpg" },
    { id: "loreal", label: "L'Oréal", logoSrc: "/images/brands/lorealistart.jpg" },
    { id: "beyoung", label: "Beyoung", logoSrc: "/images/brands/beyoung.jpg" },
    { id: "weza", label: "Weza", logoSrc: "/images/brands/weza.jpg" },
  ],
  contact: {
    heading: "Vamos criar juntos?",
    text: "Me conta sobre sua marca e seu próximo lançamento — respondo em até 24h.",
    email: "contato@seudominio.com.br",
    instagram: "#",
    tiktok: "#",
    whatsapp: "#",
  },
};
