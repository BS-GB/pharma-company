import {
    BadgeCheck,
    Factory,
    GraduationCap,
    RefreshCw,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import useLanguage from "../../hooks/useLanguage"
import "./why-alraidah.css"

const advantages = [
    {
        number: "01",
        icon: BadgeCheck,
        titleAr: "الجودة أولاً",
        titleEn: "Quality First",
        textAr:
            "نضع الجودة في صلب قراراتنا، بدءاً من اختيار المصادر وصولاً إلى مراجعة المنتجات واعتمادها.",
        textEn:
            "We place quality at the heart of our decisions, from source selection to product review and approval.",
    },
    {
        number: "02",
        icon: Factory,
        titleAr: "مصادر موثوقة",
        titleEn: "Trusted Sourcing",
        textAr:
            "نختار شركاءنا وموردينا بعناية فائقة لضمان أعلى مستويات الأمان والموثوقية.",
        textEn:
            "We carefully select our partners and suppliers to ensure the highest levels of safety and reliability.",
    },
    {
        number: "03",
        icon: GraduationCap,
        titleAr: "كفاءات متخصصة",
        titleEn: "Specialized Expertise",
        textAr:
            "كوادر صيدلانية وفنية متمرسة تجمع بين المعرفة العلمية الدقيقة والخبرة الميدانية.",
        textEn:
            "Experienced pharmaceutical and technical teams combining rigorous scientific knowledge with practical field expertise.",
    },
    {
        number: "04",
        icon: RefreshCw,
        titleAr: "تطوير مستمر",
        titleEn: "Continuous Growth",
        textAr:
            "نواصل تنمية محفظتنا وتوفير حلول ومنتجات مبتكرة تلبي متطلبات واحتياجات السوق.",
        textEn:
            "We consistently expand our portfolio, introducing innovative products and solutions to meet market demands.",
    },
]

const statistics = [
    {
        value: 70,
        suffix: "+",
        labelAr: "منتج دوائي",
        labelEn: "Pharmaceutical Products",
    },
    {
        value: 2,
        suffix: "",
        labelAr: "سنوات خبرة",
        labelEn: "Years of Experience",
    },
    {
        value: 40,
        suffix: "+",
        labelAr: "موظف ومتخصص",
        labelEn: "Team Members",
    },
]

function Counter({ value, suffix, active }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!active) return

        const duration = 1800
        const startTime = performance.now()
        let animationFrame

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)

            setCount(Math.round(value * eased))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [active, value])

    return (
        <>
            <strong>{count}</strong>
            {suffix && <span>{suffix}</span>}
        </>
    )
}

export default function WhyAlRaidah() {
    const { isArabic } = useLanguage()
    const sectionRef = useRef(null)
    const [counterStarted, setCounterStarted] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCounterStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="raidah-why"
            aria-labelledby="why-alraidah-title"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="raidah-why__background" aria-hidden="true">
                <span className="raidah-why__background-circle" />
                <span className="raidah-why__background-glow" />
            </div>

            <div className="raidah-why__container">
                {/* Section Header */}
                <header className="raidah-why__header">
                    <div className="raidah-why__eyebrow">
                        <span />
                        <span>
                            {isArabic ? "ما يميز الرائدة" : "What Sets AL-Raidah Apart"}
                        </span>
                    </div>

                    <div className="raidah-why__header-content">
                        <h2 id="why-alraidah-title">
                            {isArabic
                                ? "جودة تُبنى عليها الثقة"
                                : "Quality Built on Trust"}
                        </h2>

                        <p>
                            {isArabic
                                ? "نلتزم بأعلى معايير الجودة والمصادر الموثوقة والكوادر المؤهلة، لتقديم قيمة حقيقية في القطاع الدوائي."
                                : "We commit to the highest standards of quality, trusted sourcing, and specialized talent to deliver real value to the pharmaceutical sector."}
                        </p>
                    </div>
                </header>

                {/* Advantages Grid */}
                <div className="raidah-why__grid">
                    {advantages.map((item) => {
                        const Icon = item.icon

                        return (
                            <article className="raidah-why__feature" key={item.number}>
                                <div className="raidah-why__feature-top">
                                    <div className="raidah-why__feature-icon">
                                        <Icon size={27} strokeWidth={1.45} />
                                    </div>

                                    <span className="raidah-why__feature-number">
                                        {item.number}
                                    </span>
                                </div>

                                <div className="raidah-why__feature-content">
                                    <h3>{isArabic ? item.titleAr : item.titleEn}</h3>
                                    <p>{isArabic ? item.textAr : item.textEn}</p>
                                </div>

                                <div className="raidah-why__feature-line" aria-hidden="true" />
                            </article>
                        )
                    })}
                </div>

                {/* Statistics Header */}
                <div className="raidah-why__numbers-header">
                    <span>
                        {isArabic ? "أرقام وإنجازات" : "AL-Raidah in Numbers"}
                    </span>
                    <i />
                </div>

                {/* Statistics Grid */}
                <div className="raidah-why__numbers">
                    {statistics.map((stat) => (
                        <div className="raidah-why__number-item" key={stat.labelEn}>
                            <div className="raidah-why__number-value">
                                <Counter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    active={counterStarted}
                                />
                            </div>

                            <p>{isArabic ? stat.labelAr : stat.labelEn}</p>
                        </div>
                    ))}

                    {/* عنصر الوصول */}
                    <div className="raidah-why__number-item raidah-why__number-item--reach">
                        <div className="raidah-why__reach-value">
                            <span className="raidah-why__reach-dot" aria-hidden="true" />
                            <strong>{isArabic ? "الوصول" : "Reach"}</strong>
                        </div>

                        <p>
                            {isArabic
                                ? "تغطية شاملة لجميع محافظات ومناطق الجمهورية اليمنية"
                                : "Comprehensive coverage across all regions of Yemen"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}