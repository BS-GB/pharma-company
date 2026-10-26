import {
    ArrowUpLeft,
    ArrowUpRight,
    Newspaper,
    PlayCircle,
    ShieldCheck,
} from "lucide-react"
import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"
import "./production-knowledge-preview.css"

const productionItems = [
    {
        id: "01",
        key: "video",
        titleAr: "الرائد فيديو",
        titleEn: "Al-Raidah Video",
        descriptionAr: "مساحة مخصصة لعرض المحتوى المرئي والمعرفي الخاص بالرائدة.",
        descriptionEn:
            "A dedicated space for AL-Raidah's visual and knowledge-based content.",
        icon: PlayCircle,
        path: "/production-knowledge",
        featured: true,
    },
    {
        id: "02",
        key: "quality",
        titleAr: "الرائدة الجودة",
        titleEn: "AL-Raidah Quality",
        descriptionAr:
            "مساحة لعرض المحتوى المرتبط بالجودة والمعرفة في العمل الدوائي.",
        descriptionEn:
            "A space for content related to quality and pharmaceutical knowledge.",
        icon: ShieldCheck,
        path: "/production-knowledge",
        featured: false,
    },
    {
        id: "03",
        key: "news",
        titleAr: "الرائدة أخبار",
        titleEn: "AL-Raidah News",
        descriptionAr: "مساحة مخصصة للأخبار والمستجدات الرسمية للرائدة.",
        descriptionEn:
            "A dedicated space for AL-Raidah's official news and updates.",
        icon: Newspaper,
        path: "/news",
        featured: false,
    },
]

export default function ProductionKnowledgePreview() {
    const { isArabic } = useLanguage()

    return (
        <section
            className="raidah-production"
            dir={isArabic ? "rtl" : "ltr"}
            aria-labelledby="production-knowledge-title"
        >
            <div className="container-site">
                <div className="raidah-production__header">
                    <div className="raidah-production__heading">
                        <span className="raidah-production__eyebrow">
                            {isArabic ? "معرفة الإنتاج" : "Production Knowledge"}
                        </span>

                        <h2 id="production-knowledge-title">
                            {isArabic
                                ? "نشارك المعرفة، ونصنع أثرًا."
                                : "Sharing knowledge. Creating impact."}
                        </h2>

                        <p>
                            {isArabic
                                ? "نوافذ معرفية وإعلامية تسلط الضوء على جوانب مختلفة من أعمال الرائدة."
                                : "Knowledge and media spaces highlighting different aspects of AL-Raidah's work."}
                        </p>
                    </div>

                    <Link
                        to="/production-knowledge"
                        className="raidah-production__main-link"
                    >
                        <span>
                            {isArabic
                                ? "استكشف معرفة الإنتاج"
                                : "Explore Production Knowledge"}
                        </span>

                        {isArabic ? (
                            <ArrowUpLeft size={19} strokeWidth={1.8} />
                        ) : (
                            <ArrowUpRight size={19} strokeWidth={1.8} />
                        )}
                    </Link>
                </div>

                <div className="raidah-production__layout">
                    {productionItems.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.key}
                                to={item.path}
                                className={`raidah-production__item ${item.featured ? "raidah-production__item--featured" : ""
                                    }`}
                                style={{ "--item-delay": `${index * 100}ms` }}
                            >
                                <div className="raidah-production__visual">
                                    <span className="raidah-production__number">
                                        {item.id}
                                    </span>

                                    <div className="raidah-production__icon">
                                        <Icon size={34} strokeWidth={1.45} />
                                    </div>

                                    <span className="raidah-production__line" />
                                </div>

                                <div className="raidah-production__content">
                                    <span className="raidah-production__label">
                                        {isArabic ? "معرفة الإنتاج" : "Production Knowledge"}
                                    </span>

                                    <h3>{isArabic ? item.titleAr : item.titleEn}</h3>

                                    <p>
                                        {isArabic
                                            ? item.descriptionAr
                                            : item.descriptionEn}
                                    </p>

                                    <span className="raidah-production__arrow">
                                        {isArabic ? (
                                            <ArrowUpLeft size={18} strokeWidth={1.8} />
                                        ) : (
                                            <ArrowUpRight size={18} strokeWidth={1.8} />
                                        )}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}