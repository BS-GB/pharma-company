import {
    ArrowUpLeft,
    ArrowUpRight,
    BookOpenCheck,
    Presentation,
    UsersRound,
} from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"
import "./training-preview.css"

const trainingItems = [
    {
        icon: Presentation,
        number: "01",
        titleAr: "التدريب المستمر",
        titleEn: "Continuous Training",
        textAr:
            "نحرص على تطوير المعرفة والمهارات من خلال برامج تدريبية مستمرة.",
        textEn:
            "We focus on developing knowledge and skills through continuous training programs.",
    },
    {
        icon: BookOpenCheck,
        number: "02",
        titleAr: "المواد التسويقية",
        titleEn: "Marketing Materials",
        textAr:
            "نوفر مواد ومحتوى يساعد فرقنا وشركاءنا على تقديم المعلومات بصورة مهنية.",
        textEn:
            "We provide materials and content that support professional communication and product knowledge.",
    },
    {
        icon: UsersRound,
        number: "03",
        titleAr: "قاعة التدريب",
        titleEn: "Training Hall",
        textAr:
            "مساحة مخصصة لدعم الأنشطة التدريبية وتبادل المعرفة والخبرات.",
        textEn:
            "A dedicated space supporting training activities and knowledge exchange.",
    },
]

export default function TrainingPreview() {
    const { isArabic } = useLanguage()

    const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight

    return (
        <section
            className="raidah-training-preview"
            aria-labelledby="training-preview-title"
        >
            <div className="raidah-training-preview__container">

                {/* Header */}
                <div className="raidah-training-preview__header">

                    <div className="raidah-training-preview__eyebrow">
                        <span className="raidah-training-preview__eyebrow-line" />

                        <span>
                            {isArabic
                                ? "التدريب والتطوير"
                                : "Training & Development"}
                        </span>
                    </div>

                    <div className="raidah-training-preview__heading">
                        <h2 id="training-preview-title">
                            {isArabic
                                ? "نطوّر المعرفة، ونبني الكفاءة."
                                : "Developing knowledge. Building expertise."}
                        </h2>

                        <p>
                            {isArabic
                                ? "نؤمن بأن التطوير المستمر للمعرفة والمهارات جزء أساسي من بناء بيئة دوائية أكثر كفاءة واحترافية."
                                : "We believe continuous development of knowledge and skills is essential to building a more efficient and professional pharmaceutical environment."}
                        </p>
                    </div>
                </div>

                {/* Main Visual */}
                <div className="raidah-training-preview__main">

                    <div className="raidah-training-preview__visual">
                        <div className="raidah-training-preview__visual-grid" />

                        <div className="raidah-training-preview__visual-content">
                            <span className="raidah-training-preview__visual-label">
                                {isArabic
                                    ? "تطوير مستمر"
                                    : "Continuous Development"}
                            </span>

                            <strong>
                                {isArabic
                                    ? "المعرفة جزء من رحلتنا"
                                    : "Knowledge is part of our journey"}
                            </strong>
                        </div>

                        <div className="raidah-training-preview__visual-mark">
                            <Presentation size={34} strokeWidth={1.25} />
                        </div>
                    </div>

                    {/* Items */}
                    <div className="raidah-training-preview__items">
                        {trainingItems.map((item) => {
                            const Icon = item.icon

                            return (
                                <article
                                    className="raidah-training-preview__item"
                                    key={item.number}
                                >
                                    <div className="raidah-training-preview__item-top">
                                        <span>
                                            {item.number}
                                        </span>

                                        <Icon
                                            size={24}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <h3>
                                        {isArabic
                                            ? item.titleAr
                                            : item.titleEn}
                                    </h3>

                                    <p>
                                        {isArabic
                                            ? item.textAr
                                            : item.textEn}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="raidah-training-preview__footer">

                    <p>
                        {isArabic
                            ? "اكتشف برامج التدريب والتطوير في الرائدة."
                            : "Explore training and development at AL-Raidah."}
                    </p>

                    <Link
                        to="/training"
                        className="raidah-training-preview__link"
                    >
                        <span>
                            {isArabic
                                ? "استكشف التدريب"
                                : "Explore Training"}
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