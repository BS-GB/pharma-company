import {
    ArrowUpLeft,
    ArrowUpRight,
    HeartHandshake,
    Sparkles,
} from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"
import "./social-responsibility-preview.css"

const socialSections = [
    {
        number: "01",
        titleAr: "النشاطات",
        titleEn: "Activities",
        textAr:
            "مساحة مخصصة لعرض الأنشطة والمبادرات التي تعكس التزام الرائدة تجاه المجتمع.",
        textEn:
            "A dedicated space to showcase activities and initiatives reflecting AL-Raidah's commitment to the community.",
        active: true,
    },
    {
        number: "02",
        titleAr: "سيتم تحديد المحتوى",
        titleEn: "Content to be Defined",
        textAr:
            "سيتم تحديد محتوى هذا القسم وإضافته وفق المعلومات الرسمية المعتمدة.",
        textEn:
            "The content of this section will be defined and added based on approved official information.",
        active: false,
    },
    {
        number: "03",
        titleAr: "سيتم تحديد المحتوى",
        titleEn: "Content to be Defined",
        textAr:
            "سيتم تحديد محتوى هذا القسم وإضافته في المرحلة القادمة.",
        textEn:
            "The content of this section will be defined and added in a later stage.",
        active: false,
    },
]

export default function SocialResponsibilityPreview() {
    const { isArabic } = useLanguage()

    const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight

    return (
        <section
            className="raidah-social-preview"
            aria-labelledby="social-preview-title"
        >
            <div className="raidah-social-preview__container">

                {/* Header */}
                <header className="raidah-social-preview__header">

                    <div className="raidah-social-preview__eyebrow">
                        <span className="raidah-social-preview__eyebrow-line" />

                        <span>
                            {isArabic
                                ? "المسؤولية الاجتماعية"
                                : "Social Responsibility"}
                        </span>
                    </div>

                    <div className="raidah-social-preview__heading">

                        <div>
                            <h2 id="social-preview-title">
                                {isArabic
                                    ? "نؤمن أن المسؤولية تبدأ من الإنسان."
                                    : "We believe responsibility begins with people."}
                            </h2>
                        </div>

                        <p>
                            {isArabic
                                ? "نعتز بمسؤوليتنا تجاه المجتمع، ونسعى إلى أن يكون حضور الرائدة ممتدًا بما يتجاوز العمل الدوائي."
                                : "We value our responsibility toward society and seek to make AL-Raidah's presence extend beyond pharmaceutical work."}
                        </p>

                    </div>
                </header>

                {/* Main Content */}
                <div className="raidah-social-preview__main">

                    {/* Visual */}
                    <div className="raidah-social-preview__visual">

                        <div
                            className="raidah-social-preview__visual-pattern"
                            aria-hidden="true"
                        />

                        <div className="raidah-social-preview__visual-circle">
                            <HeartHandshake
                                size={62}
                                strokeWidth={1.1}
                            />
                        </div>

                        <div className="raidah-social-preview__visual-content">
                            <span>
                                {isArabic
                                    ? "الرائدة والمجتمع"
                                    : "AL-Raidah & Community"}
                            </span>

                            <strong>
                                {isArabic
                                    ? "مسؤولية نعتز بها"
                                    : "A responsibility we value"}
                            </strong>
                        </div>

                        <Sparkles
                            className="raidah-social-preview__sparkle"
                            size={28}
                            strokeWidth={1.25}
                        />

                    </div>

                    {/* Sections */}
                    <div className="raidah-social-preview__sections">

                        {socialSections.map((item) => (
                            <article
                                key={item.number}
                                className={`raidah-social-preview__section ${item.active
                                        ? "raidah-social-preview__section--active"
                                        : "raidah-social-preview__section--pending"
                                    }`}
                            >

                                <div className="raidah-social-preview__section-number">
                                    {item.number}
                                </div>

                                <div className="raidah-social-preview__section-content">

                                    <div className="raidah-social-preview__section-title">
                                        <h3>
                                            {isArabic
                                                ? item.titleAr
                                                : item.titleEn}
                                        </h3>

                                        {item.active && (
                                            <span className="raidah-social-preview__status">
                                                {isArabic
                                                    ? "متاح"
                                                    : "Available"}
                                            </span>
                                        )}
                                    </div>

                                    <p>
                                        {isArabic
                                            ? item.textAr
                                            : item.textEn}
                                    </p>

                                </div>

                                <span className="raidah-social-preview__section-arrow">
                                    <Arrow
                                        size={18}
                                        strokeWidth={1.7}
                                    />
                                </span>

                            </article>
                        ))}

                    </div>

                </div>

                {/* Footer */}
                <div className="raidah-social-preview__footer">

                    <p>
                        {isArabic
                            ? "اكتشف جانبًا آخر من التزام الرائدة."
                            : "Discover another side of AL-Raidah's commitment."}
                    </p>

                    <Link
                        to="/social-responsibility"
                        className="raidah-social-preview__link"
                    >
                        <span>
                            {isArabic
                                ? "المسؤولية الاجتماعية"
                                : "Social Responsibility"}
                        </span>

                        <Arrow
                            size={19}
                            strokeWidth={1.8}
                        />
                    </Link>

                </div>

            </div>
        </section>
    )
}