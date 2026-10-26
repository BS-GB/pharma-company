import { ArrowLeft, ArrowRight, ChevronDown, ShieldCheck, FlaskConical, UsersRound, HeartHandshake } from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"

const highlights = {
  ar: [
    { icon: ShieldCheck, title: "جودة موثوقة", text: "التزام بالجودة في مختلف مراحل العمل" },
    { icon: FlaskConical, title: "تطوير مستمر", text: "مواكبة التطورات العلمية والتكنولوجية" },
    { icon: UsersRound, title: "كفاءات وطنية", text: "الاستعانة بالكفاءات الصيدلانية والفنية" },
    { icon: HeartHandshake, title: "مسؤولية وطنية", text: "دعم الصناعة والمجتمع اليمني" },
  ],
  en: [
    { icon: ShieldCheck, title: "Trusted Quality", text: "Commitment to quality throughout our work" },
    { icon: FlaskConical, title: "Continuous Development", text: "Keeping pace with scientific and technological progress" },
    { icon: UsersRound, title: "National Expertise", text: "Qualified pharmaceutical and technical teams" },
    { icon: HeartHandshake, title: "National Responsibility", text: "Supporting local industry and the community" },
  ],
}

export default function HeroSection() {
  const { isArabic } = useLanguage()
  const items = isArabic ? highlights.ar : highlights.en
  const Arrow = isArabic ? ArrowLeft : ArrowRight

  return (
    <section className="raidah-hero" aria-labelledby="hero-title">
      <div className="raidah-hero__media" aria-hidden="true">
        <img
          src="/images/alraidah-com.jpg"
          alt={
            isArabic
              ? "الرائدة للصناعات الدوائية"
              : "AL-Raidah Pharmaceutical Industries"
          }
        />
        <div className="raidah-hero__image-overlay" />
        <div className="raidah-hero__image-glow" />
      </div>

      <div className="raidah-hero__pattern" aria-hidden="true" />
      <div className="raidah-hero__shape" aria-hidden="true" />

      <div className="container-site raidah-hero__inner">
        <div className="raidah-hero__content">
          <div className="raidah-hero__eyebrow">
            <span />
            <span>{isArabic ? "شركة وطنية في صناعة الأدوية" : "A national pharmaceutical company"}</span>
          </div>

          <h1 id="hero-title">
            {isArabic ? "الرائدة للصناعات الدوائية" : "AL-Raidah Pharmaceutical Industries"}
          </h1>

          <p className="raidah-hero__tagline">
            {isArabic ? "جودة تُبنى عليها الثقة" : "Quality that builds trust"}
          </p>

          <p className="raidah-hero__description">
            {isArabic
              ? "نسعى إلى الإسهام في تطوير قطاع الرعاية الصحية في الجمهورية اليمنية من خلال تقديم منتجات دوائية ذات جودة وفعالية، مع الالتزام بالجودة والثقة والمسؤولية."
              : "We contribute to the development of healthcare in Yemen by providing quality and effective pharmaceutical products, with a commitment to quality, trust, and responsibility."}
          </p>

          <div className="raidah-hero__actions">
            <Link to="/products" className="raidah-hero__primary">
              <span>{isArabic ? "اكتشف منتجاتنا" : "Explore our products"}</span>
              <Arrow size={18} strokeWidth={2.2} />
            </Link>
            <Link to="/about" className="raidah-hero__secondary">
              <span>{isArabic ? "من نحن" : "About us"}</span>
              <span className="raidah-hero__play">›</span>
            </Link>
          </div>
        </div>

        <div className="raidah-hero__bottom">
          <div className="raidah-hero__highlights">
            {items.map(({ icon: Icon, title, text }) => (
              <div className="raidah-hero__highlight" key={title}>
                <div className="raidah-hero__icon"><Icon size={23} strokeWidth={1.8} /></div>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>

          <a className="raidah-hero__scroll" href="#home-next">
            <span>{isArabic ? "اكتشف المزيد" : "Discover more"}</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
