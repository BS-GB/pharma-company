import { ArrowLeft, ArrowRight, Eye, HeartHandshake, Target } from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"

const content = {
    ar: {
        eyebrow: "من نحن",
        title: "رؤية واضحة، رسالة مسؤولة، وقيم نبني بها الثقة",
        description:
            "نعمل في الرائدة للأدوية انطلاقًا من مسؤوليتنا تجاه صحة الإنسان، ونؤمن بأن الجودة والثقة والتطوير المستمر هي أساس بناء مستقبل دوائي أكثر استدامة.",
        cards: [
            {
                icon: Eye,
                title: "رؤيتنا",
                text:
                    "أن نكون شريكاً موثوقاً في صحة الإنسان، وأن نبني علامة دوائية وطنية تجمع بين الجودة والابتكار والثقة والمسؤولية.",
            },
            {
                icon: Target,
                title: "رسالتنا",
                text:
                    "الإسهام في تطوير قطاع الرعاية الصحية في الجمهورية اليمنية من خلال تقديم منتجات دوائية ذات جودة وفعالية تلبي احتياجات المرضى ومقدمي الرعاية الصحية.",
            },
            {
                icon: HeartHandshake,
                title: "قيمنا",
                text:
                    "الجودة، الثقة، المسؤولية، الشفافية، المصداقية، التطوير المستمر، ودعم المجتمع والصناعة الدوائية المحلية.",
            },
        ],
        more: "اكتشف المزيد",
    },

    en: {
        eyebrow: "Who We Are",
        title: "A clear vision, a responsible mission, and values built on trust",
        description:
            "At AL-Raidah Pharmaceutical, we operate with a strong responsibility toward human health and believe that quality, trust, and continuous development are the foundation of a sustainable pharmaceutical future.",
        cards: [
            {
                icon: Eye,
                title: "Our Vision",
                text:
                    "To be a trusted partner in human health and build a national pharmaceutical brand that brings together quality, innovation, trust, and responsibility.",
            },
            {
                icon: Target,
                title: "Our Mission",
                text:
                    "To contribute to the development of healthcare in Yemen by providing quality and effective pharmaceutical products that meet the needs of patients and healthcare providers.",
            },
            {
                icon: HeartHandshake,
                title: "Our Values",
                text:
                    "Quality, trust, responsibility, transparency, credibility, continuous development, community support, and strengthening local pharmaceutical manufacturing.",
            },
        ],
        more: "Discover More",
    },
}

export default function VisionMissionValues() {
    const { isArabic } = useLanguage()
    const data = isArabic ? content.ar : content.en
    const Arrow = isArabic ? ArrowLeft : ArrowRight

    return (
        <section
            className="raidah-vmv"
            dir={isArabic ? "rtl" : "ltr"}
            style={{ "--dir-factor": isArabic ? -1 : 1 }}
            aria-labelledby="raidah-vmv-title"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="raidah-vmv__header">
                    <div className="raidah-vmv__eyebrow">
                        <span />
                        <span>{data.eyebrow}</span>
                    </div>

                    <h2 id="raidah-vmv-title">
                        {data.title}
                    </h2>

                    <p>
                        {data.description}
                    </p>
                </div>

                <div className="raidah-vmv__grid">
                    {data.cards.map((card, index) => {
                        const Icon = card.icon

                        return (
                            <article
                                key={card.title}
                                className="raidah-vmv__card"
                                style={{
                                    "--raidah-card-index": index,
                                }}
                            >
                                <div className="raidah-vmv__card-top">
                                    <div className="raidah-vmv__icon">
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <span className="raidah-vmv__number">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3>{card.title}</h3>

                                <p>{card.text}</p>

                                <Link
                                    to="/about"
                                    className="raidah-vmv__link"
                                    aria-label={`${data.more} - ${card.title}`}
                                >
                                    <span>{data.more}</span>
                                    <Arrow size={17} strokeWidth={2} />
                                </Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}