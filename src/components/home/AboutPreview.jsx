import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"

const content = {
    ar: {
        eyebrow: "من نحن",
        title: "نصنع الثقة من خلال الجودة والمسؤولية",
        description:
            "الشركة الرائدة للصناعات الدوائية هي شركة دوائية وطنية تسعى إلى الإسهام في تطوير قطاع الرعاية الصحية في الجمهورية اليمنية، من خلال تقديم منتجات دوائية ذات جودة وفعالية تلبي احتياجات المرضى ومقدمي الرعاية الصحية.",
        secondary:
            "نعتمد في أعمالنا على مصادر موثوقة للمواد الخام ومدخلات الإنتاج، ومعايير الجودة والرقابة، والكفاءات الصيدلانية والفنية المؤهلة، مع الحرص على التطوير المستمر ومواكبة التطورات في الصناعة الدوائية.",
        features: [
            {
                icon: ShieldCheck,
                title: "الجودة",
                text: "الالتزام بالجودة والرقابة في مختلف مراحل العمل.",
            },
            {
                icon: Users,
                title: "الكفاءات",
                text: "الاستعانة بالكفاءات الصيدلانية والفنية المؤهلة.",
            },
            {
                icon: TrendingUp,
                title: "التطوير المستمر",
                text: "مواكبة التطورات العلمية والتكنولوجية في الصناعة الدوائية.",
            },
        ],
        button: "اكتشف المزيد",
    },

    en: {
        eyebrow: "About Us",
        title: "Building trust through quality and responsibility",
        description:
            "AL-Raidah Pharmaceutical Industries is a national pharmaceutical company committed to contributing to the development of healthcare in Yemen by providing quality and effective pharmaceutical products that meet the needs of patients and healthcare providers.",
        secondary:
            "Our work relies on trusted sources for raw materials and production inputs, quality and control standards, and qualified pharmaceutical and technical professionals, while maintaining a strong focus on continuous development and keeping pace with advances in the pharmaceutical industry.",
        features: [
            {
                icon: ShieldCheck,
                title: "Quality",
                text: "Commitment to quality and control throughout our operations.",
            },
            {
                icon: Users,
                title: "Expertise",
                text: "Working with qualified pharmaceutical and technical professionals.",
            },
            {
                icon: TrendingUp,
                title: "Continuous Development",
                text: "Keeping pace with scientific and technological developments.",
            },
        ],
        button: "Discover More",
    },
}

export default function AboutPreview() {
    const { isArabic } = useLanguage()

    const data = isArabic ? content.ar : content.en
    const Arrow = isArabic ? ArrowLeft : ArrowRight

    return (
        <section
            className="raidah-about-preview"
            aria-labelledby="raidah-about-preview-title"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="raidah-about-preview__grid">

                    {/* =====================================================
              VISUAL SIDE
          ===================================================== */}

                    <div className="raidah-about-preview__visual">

                        <div className="raidah-about-preview__visual-glow" />

                        <div className="raidah-about-preview__image-wrap">
                            <div className="raidah-about-preview__image">
                                <img
                                    src="/images/about-alraidah.jpg"
                                    alt={
                                        isArabic
                                            ? "الرائدة للصناعات الدوائية"
                                            : "AL-Raidah Pharmaceutical Industries"
                                    }
                                />

                                <div className="raidah-about-preview__image-overlay" />

                                <div className="raidah-about-preview__image-content">
                                    <span>
                                        {isArabic
                                            ? "الرائدة للصناعات الدوائية"
                                            : "AL-Raidah Pharmaceutical Industries"}
                                    </span>

                                    <strong>
                                        {isArabic
                                            ? "جودة تُبنى عليها الثقة"
                                            : "Quality that builds trust"}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="raidah-about-preview__floating">
                            <div className="raidah-about-preview__floating-icon">
                                <CheckCircle2
                                    size={22}
                                    strokeWidth={2}
                                />
                            </div>

                            <div>
                                <strong>
                                    {isArabic
                                        ? "الجودة والثقة"
                                        : "Quality & Trust"}
                                </strong>

                                <span>
                                    {isArabic
                                        ? "أساس عملنا"
                                        : "At the heart of our work"}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* =====================================================
              CONTENT SIDE
          ===================================================== */}

                    <div className="raidah-about-preview__content">

                        <div className="raidah-about-preview__eyebrow">
                            <span />
                            <span>{data.eyebrow}</span>
                        </div>

                        <h2 id="raidah-about-preview-title">
                            {data.title}
                        </h2>

                        <p className="raidah-about-preview__description">
                            {data.description}
                        </p>

                        <p className="raidah-about-preview__secondary">
                            {data.secondary}
                        </p>

                        <div className="raidah-about-preview__features">
                            {data.features.map((feature) => {
                                const Icon = feature.icon

                                return (
                                    <div
                                        className="raidah-about-preview__feature"
                                        key={feature.title}
                                    >
                                        <div className="raidah-about-preview__feature-icon">
                                            <Icon
                                                size={21}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div>
                                            <h3>{feature.title}</h3>

                                            <p>{feature.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <Link
                            to="/about"
                            className="raidah-about-preview__button"
                        >
                            <span>{data.button}</span>

                            <span className="raidah-about-preview__button-icon">
                                <Arrow
                                    size={18}
                                    strokeWidth={2}
                                />
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    )
}