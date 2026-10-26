import { useEffect, useRef } from "react"
import {
    ArrowDownLeft,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    Building2,
    CheckCircle2,
    Droplets,
    Factory,
    FlaskConical,
    Globe2,
    Handshake,
    Leaf,
    Microscope,
    ShieldCheck,
    Target,
    TrendingUp,
    UsersRound,
    Wind,
} from "lucide-react"
import useLanguage from "../../hooks/useLanguage"
import "./about-page.css"

const content = {
    ar: {
        eyebrow: "من نحن",
        heroTitle: "نصنع الجودة، ونضع صحة الإنسان أولًا.",
        heroDescription:
            "شركة دوائية وطنية تأسست عام 2022م، تسعى إلى تطوير صناعة الدواء وتقديم منتجات تلتزم بمتطلبات الجودة والسلامة.",
        heroTag: "الرائدة للصناعات الدوائية",
        explore: "اكتشف قصتنا",
        founded: "سنة التأسيس",
        products: "الأشكال الصيدلانية",
        employees: "عدد الموظفين",
        facilities: "المرافق والإنتاج",
        aboutEyebrow: "قصتنا",
        aboutTitle: "مسؤولية تبدأ من جودة الدواء",
        aboutParagraphs: [
            "الشركة الرائدة للصناعات الدوائية هي شركة دوائية وطنية تسعى إلى الإسهام في تطوير قطاع الرعاية الصحية في الجمهورية اليمنية، من خلال تقديم منتجات دوائية ذات جودة وفعالية، تلبي احتياجات المرضى ومقدمي الرعاية الصحية، وتواكب التطورات المتسارعة في صناعة الدواء.",
            "نؤمن بأن صناعة الدواء مسؤولية تتجاوز إنتاج المنتجات الدوائية، لتشمل حماية صحة الإنسان، وبناء الثقة، والالتزام بالجودة، ودعم المجتمع. ومن هذا المنطلق، نعمل على توفير مجموعة من الأدوية التي تغطي مختلف المجالات الطبية، مع الحرص على إتاحتها بأسعار مناسبة والوصول بها إلى مختلف مناطق الجمهورية اليمنية.",
            "نعتمد على مصادر موثوقة للمواد الخام ومدخلات الإنتاج، والرقابة في مراحل التصنيع، والاستعانة بالكفاءات الصيدلانية والفنية، مع الحرص على التطوير ومواكبة احتياجات السوق.",
        ],
        visionEyebrow: "وجهتنا",
        visionTitle: "رؤيتنا وقيمنا",
        vision: "رؤيتنا",
        visionText:
            "تبني أعلى المعايير الدولية والتقنيات الحديثة والمواصفات عالية الجودة في جميع وحدات الإنتاج لضمان سلامة وفعالية المنتجات الدوائية.",
        values: "قيمنا",
        valuesText:
            "الجودة أساس النجاح التجاري ومحور الإنتاجية والتنافسية، مع الالتزام بالمعايير البيئية وتلبية متطلبات العملاء.",
        mission: "رسالتنا",
        missionText:
            "الإسهام في تطوير الرعاية الصحية في اليمن من خلال العمل على توفير منتجات دوائية موثوقة، وتطبيق ممارسات الجودة، وتعزيز التطوير المستمر والاستجابة لاحتياجات العملاء.",
        goalsEyebrow: "طموحنا",
        goalsTitle: "أهدافنا الاستراتيجية",
        goals: [
            {
                title: "الثقة والموثوقية",
                description: "ترسيخ مكانة الشركة بوصفها جهة دوائية ناجحة وموثوقة.",
            },
            {
                title: "التوسع",
                description: "العمل على دخول أسواق جديدة وتطوير نطاق الوصول.",
            },
            {
                title: "الجودة من البداية",
                description: "بناء الجودة داخل المنتجات منذ مراحل التطوير الأولى.",
            },
        ],
        timelineEyebrow: "رحلة التطور",
        timelineTitle: "محطات في مسيرة الرائدة",
        timeline: [
            {
                year: "2022",
                title: "التأسيس والانطلاق",
                description:
                    "تأسيس مختبرات البحث والتطوير وضبط الجودة والمختبر الميكروبي، وإنتاج أول دفعة، وبدء دراسات الثبات وإجراءات التسجيل.",
            },
            {
                year: "2024",
                title: "تطور تسجيل المنتجات",
                description:
                    "تسجيل منتجات وفق المعايير المشار إليها في بيانات الشركة، بما يشمل GMP والمعايير الأمريكية والأوروبية.",
            },
            {
                year: "المستقبل",
                title: "خطط التوسع",
                description:
                    "خطة لتوسيع الطاقة الإنتاجية وإضافة خطوط لمجموعات علاجية تشمل المسكنات والمضادات الحيوية والفطريات وأدوية القلب والسكري والجهاز الهضمي.",
            },
        ],
        qualityEyebrow: "منهج العمل",
        qualityTitle: "الجودة جزء من كل مرحلة",
        qualityDescription:
            "تشمل منهجية الجودة المعلنة ممارسات التصنيع الجيد، وإجراءات التشغيل القياسية، والرقابة خلال مراحل التصنيع والفحص النهائي قبل التوزيع.",
        qualityItems: [
            { title: "cGMP", description: "ممارسات التصنيع الجيد الحالية." },
            { title: "SOPs", description: "إجراءات التشغيل القياسية." },
            { title: "ICH Q8", description: "التطوير الصيدلاني والتحكم بالتصميم." },
            { title: "ICH Q9", description: "إدارة مخاطر الجودة." },
            { title: "ICH Q10", description: "نظام الجودة الصيدلاني." },
        ],
        standardsTitle: "المعايير المذكورة في ملف الشركة",
        standardsDescription:
            "تشمل البيانات المقدمة GMP، ومعايير WHO، وISO 9001:2008، وISO 14001:2004، ومواصفات دستور الأدوية الأوروبي للمياه. يختلف عرض هذه المعايير عن تأكيد سريان شهادة بعينها.",
        facilityEyebrow: "البنية التحتية",
        facilityTitle: "المرافق والإمكانات الفنية",
        facilityDescription:
            "تعكس البيانات التالية المعلومات المقدمة عن موقع المنشأة ومساحاتها وبعض أنظمتها الفنية.",
        location: "الموقع",
        locationValue: "مسيب — بني مطر — صنعاء، اليمن",
        totalArea: "المساحة الإجمالية",
        productionArea: "مساحة الإنتاج",
        hvac: "نظام التكييف HVAC",
        hvacValue: "28 وحدة مع فلاتر HEPA",
        water: "محطة معالجة المياه",
        waterValue: "1,000 لتر/ساعة",
        waterDescription: "تقنيتا RO وEDI وفق البيانات المقدمة.",
        partnershipEyebrow: "التعاون",
        partnershipTitle: "شراكات تدعم فحص الجودة",
        partnershipDescription:
            "تشير المعلومات المقدمة إلى اتفاقية تعاون لفحص الجودة مع معهد الصحة العامة في جمهورية مقدونيا. ينبغي مطابقة الاسم الرسمي للجهة ونطاق التعاون مع وثائق الاتفاقية قبل النشر النهائي.",
        workforceEyebrow: "فريق العمل",
        workforceTitle: "كفاءات تدعم العمل",
        workforceDescription:
            "التوزيع الوظيفي المذكور في البيانات المقدمة للشركة.",
        workforce: [
            { title: "الإنتاج", count: 35 },
            { title: "توكيد الجودة", count: 1 },
            { title: "ضبط الجودة", count: 1 },
            { title: "المستودعات", count: 2 },
            { title: "الدعم الفني والهندسي", count: 1 },
        ],
        dosageEyebrow: "الأشكال الصيدلانية",
        dosageTitle: "أربعة أشكال صيدلانية مذكورة",
        dosage: [
            { title: "الأقراص", en: "Tablets", icon: FlaskConical },
            { title: "الكبسولات", en: "Capsules", icon: ShieldCheck },
            {
                title: "الكبسولات الجيلاتينية الرخوة",
                en: "Softgel Capsules",
                icon: Droplets,
            },
            { title: "الأكياس", en: "Sachets", icon: Building2 },
        ],
        ctaTitle: "هل ترغب في معرفة المزيد عن الرائدة؟",
        ctaDescription: "تواصل معنا للاستفسار عن الشركة ومنتجاتها وخدماتها.",
        contact: "تواصل معنا",
    },
    en: {
        eyebrow: "ABOUT US",
        heroTitle: "Building quality. Putting human health first.",
        heroDescription:
            "A Yemeni pharmaceutical company established in 2022, working to develop pharmaceutical manufacturing and provide products with a focus on quality and safety requirements.",
        heroTag: "AL-Raidah Pharmaceutical Industries",
        explore: "Discover our story",
        founded: "Year established",
        products: "Dosage forms",
        employees: "Employees",
        facilities: "Facility & production",
        aboutEyebrow: "OUR STORY",
        aboutTitle: "A responsibility that begins with medicine quality",
        aboutParagraphs: [
            "AL-Raidah Pharmaceutical Industries is a Yemeni pharmaceutical company seeking to contribute to the development of healthcare in Yemen by providing quality and effective pharmaceutical products that address the needs of patients and healthcare providers while keeping pace with developments in the pharmaceutical industry.",
            "We believe that pharmaceutical manufacturing extends beyond producing medicines. It includes protecting human health, building trust, committing to quality, and supporting the community. We work to provide medicines across different medical fields at appropriate prices and to improve access across Yemen.",
            "Our stated approach includes selecting trusted sources for raw materials and production inputs, applying controls throughout manufacturing, relying on qualified pharmaceutical and technical personnel, and pursuing continuous development in response to market needs.",
        ],
        visionEyebrow: "OUR DIRECTION",
        visionTitle: "Our vision and values",
        vision: "Our Vision",
        visionText:
            "To adopt the highest international standards, modern technologies, and high-quality specifications across production units to ensure the safety and efficacy of pharmaceutical products.",
        values: "Our Values",
        valuesText:
            "Quality as a foundation of commercial success, productivity, and competitiveness, alongside environmental responsibility and meeting customer requirements.",
        mission: "Mission",
        missionText:
            "To contribute to healthcare development in Yemen by working to provide reliable pharmaceutical products, applying quality practices, encouraging continuous development, and responding to customer needs.",
        goalsEyebrow: "OUR AMBITION",
        goalsTitle: "Strategic objectives",
        goals: [
            {
                title: "Trust and reliability",
                description:
                    "Establish the company as a successful and trusted pharmaceutical business.",
            },
            {
                title: "Expansion",
                description: "Work toward entering new markets and extending reach.",
            },
            {
                title: "Quality from the start",
                description:
                    "Build quality into products from the earliest development stages.",
            },
        ],
        timelineEyebrow: "OUR DEVELOPMENT",
        timelineTitle: "Milestones in AL-Raidah's journey",
        timeline: [
            {
                year: "2022",
                title: "Establishment and launch",
                description:
                    "Establishment of R&D, quality-control, and microbiology laboratories; production of the first batch; and commencement of stability studies and registration procedures.",
            },
            {
                year: "2024",
                title: "Product registration development",
                description:
                    "Products registered according to standards referenced in the company's information, including GMP and American and European standards.",
            },
            {
                year: "Future",
                title: "Expansion plans",
                description:
                    "Plans to expand production capacity and add lines for analgesics, antibiotics and antifungals, cardiovascular medicines, diabetes medicines, and gastrointestinal medicines.",
            },
        ],
        qualityEyebrow: "OUR APPROACH",
        qualityTitle: "Quality across every stage",
        qualityDescription:
            "The stated quality approach includes current Good Manufacturing Practices, standard operating procedures, in-process controls, and final inspection before distribution.",
        qualityItems: [
            { title: "cGMP", description: "Current Good Manufacturing Practices." },
            { title: "SOPs", description: "Standard operating procedures." },
            { title: "ICH Q8", description: "Pharmaceutical development and design." },
            { title: "ICH Q9", description: "Quality risk management." },
            { title: "ICH Q10", description: "Pharmaceutical quality system." },
        ],
        standardsTitle: "Standards referenced in company information",
        standardsDescription:
            "The supplied information references GMP, WHO standards, ISO 9001:2008, ISO 14001:2004, and European Pharmacopoeia specifications for water. Listing a standard does not confirm that a specific certificate is currently valid.",
        facilityEyebrow: "INFRASTRUCTURE",
        facilityTitle: "Facilities and technical capabilities",
        facilityDescription:
            "The following details reflect information supplied about the facility location, areas, and selected technical systems.",
        location: "Location",
        locationValue: "Maseeb, Bani Matar, Sana'a, Yemen",
        totalArea: "Total area",
        productionArea: "Production area",
        hvac: "HVAC system",
        hvacValue: "28 units with HEPA filters",
        water: "Water treatment plant",
        waterValue: "1,000 litres/hour",
        waterDescription: "RO and EDI technologies, according to the supplied information.",
        partnershipEyebrow: "COLLABORATION",
        partnershipTitle: "Cooperation supporting quality testing",
        partnershipDescription:
            "The supplied information references a quality-testing cooperation agreement with the Institute of Public Health in the Republic of Macedonia. The institution's official name and the scope of cooperation should be verified against the agreement before final publication.",
        workforceEyebrow: "OUR TEAM",
        workforceTitle: "People supporting our work",
        workforceDescription:
            "The functional distribution below reflects the employee information supplied for the company.",
        workforce: [
            { title: "Production", count: 35 },
            { title: "Quality assurance", count: 1 },
            { title: "Quality control", count: 1 },
            { title: "Warehousing", count: 2 },
            { title: "Technical and engineering support", count: 1 },
        ],
        dosageEyebrow: "DOSAGE FORMS",
        dosageTitle: "Four dosage forms referenced",
        dosage: [
            { title: "Tablets", en: "Tablets", icon: FlaskConical },
            { title: "Capsules", en: "Capsules", icon: ShieldCheck },
            {
                title: "Softgel capsules",
                en: "Softgel Capsules",
                icon: Droplets,
            },
            { title: "Sachets", en: "Sachets", icon: Building2 },
        ],
        ctaTitle: "Would you like to learn more about AL-Raidah?",
        ctaDescription:
            "Contact us with questions about the company, its products, and services.",
        contact: "Contact us",
    },
}

/* =========================================================
   Reveal — يدعم variants + stagger + delay
========================================================= */
function Reveal({
    children,
    className = "",
    variant = "up",
    delay = 0,
    stagger = 0,
}) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            element.classList.add("is-visible")
            return
        }

        if (!("IntersectionObserver" in window)) {
            element.classList.add("is-visible")
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const total = delay + stagger
                        if (total > 0) {
                            element.style.setProperty("--reveal-delay", `${total}ms`)
                        }
                        element.classList.add("is-visible")
                        observer.unobserve(element)
                    }
                })
            },
            { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
        )

        const raf = requestAnimationFrame(() => observer.observe(element))

        return () => {
            cancelAnimationFrame(raf)
            observer.disconnect()
        }
    }, [delay, stagger])

    return (
        <div
            ref={ref}
            className={`raidah-about-reveal raidah-about-reveal--${variant} ${className}`}
        >
            {children}
        </div>
    )
}

function SectionHeading({ eyebrow, title, description, light = false }) {
    return (
        <div
            className={`raidah-about-heading ${light ? "raidah-about-heading--light" : ""}`}
        >
            <span className="raidah-about-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    )
}

export default function AboutPage() {
    const { isArabic } = useLanguage()
    const t = isArabic ? content.ar : content.en
    const DirectionArrow = isArabic ? ArrowLeft : ArrowRight
    const DownArrow = isArabic ? ArrowDownLeft : ArrowDownRight

    const stats = [
        { value: "2022", label: t.founded, icon: TrendingUp },
        { value: "4", label: t.products, icon: FlaskConical },
        { value: "40", label: t.employees, icon: UsersRound },
    ]

    return (
        <main className="raidah-about-page" dir={isArabic ? "rtl" : "ltr"}>
            <section className="raidah-about-hero">
                <div className="raidah-about-hero__image" aria-hidden="true" />
                <div className="raidah-about-hero__grid" aria-hidden="true" />

                <div className="container-site raidah-about-hero__inner">
                    <Reveal className="raidah-about-hero__copy" variant="up">
                        <span className="raidah-about-eyebrow">
                            <span className="raidah-about-eyebrow__dot" />
                            {t.eyebrow}
                        </span>

                        <h1>{t.heroTitle}</h1>
                        <p>{t.heroDescription}</p>

                        <a href="#our-story" className="raidah-about-button">
                            {t.explore}
                            <DirectionArrow size={18} />
                        </a>

                        <span className="raidah-about-hero__tag">{t.heroTag}</span>
                    </Reveal>

                    <Reveal
                        className="raidah-about-hero__visual"
                        variant={isArabic ? "left" : "right"}
                        delay={140}
                    >
                        <div className="raidah-about-hero__visual-frame">
                            <img
                                src="/images/about-alraidah.jpg"
                                alt={
                                    isArabic
                                        ? "صورة تعريفية مرتبطة بشركة الرائدة"
                                        : "Image representing AL-Raidah"
                                }
                            />
                            <div className="raidah-about-hero__image-caption">
                                <span className="raidah-about-hero__caption-mark">
                                    <ShieldCheck size={23} />
                                </span>
                                <span>{t.heroTag}</span>
                            </div>
                        </div>
                        <span className="raidah-about-hero__orbit" aria-hidden="true" />
                    </Reveal>
                </div>

                <a
                    href="#our-story"
                    className="raidah-about-scroll"
                    aria-label={t.explore}
                >
                    <DownArrow size={20} />
                </a>
            </section>

            <section className="raidah-about-stats" aria-label={t.eyebrow}>
                <div className="container-site raidah-about-stats__grid">
                    {stats.map(({ value, label, icon: Icon }, index) => (
                        <Reveal
                            key={label}
                            variant="up"
                            stagger={index * 110}
                        >
                            <div className="raidah-about-stat">
                                <span className="raidah-about-stat__icon">
                                    <Icon size={23} />
                                </span>
                                <div>
                                    <strong>{value}</strong>
                                    <span>{label}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section id="our-story" className="raidah-about-story raidah-about-section">
                <div className="container-site raidah-about-story__grid">
                    <Reveal className="raidah-about-story__side" variant="up">
                        <span className="raidah-about-story__index">01 /</span>
                        <span className="raidah-about-eyebrow">{t.aboutEyebrow}</span>
                        <h2>{t.aboutTitle}</h2>
                        <span className="raidah-about-story__rule" />
                    </Reveal>

                    <Reveal
                        className="raidah-about-story__body"
                        variant={isArabic ? "right" : "left"}
                        delay={120}
                    >
                        {t.aboutParagraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="raidah-about-direction raidah-about-section">
                <div className="container-site">
                    <Reveal variant="up">
                        <SectionHeading
                            eyebrow={t.visionEyebrow}
                            title={t.visionTitle}
                        />
                    </Reveal>

                    <div className="raidah-about-direction__grid">
                        <Reveal variant="up" stagger={0}>
                            <article className="raidah-about-direction__item raidah-about-direction__item--vision">
                                <span className="raidah-about-direction__icon">
                                    <Globe2 size={29} />
                                </span>
                                <span className="raidah-about-direction__number">01</span>
                                <h3>{t.vision}</h3>
                                <p>{t.visionText}</p>
                            </article>
                        </Reveal>

                        <Reveal variant="up" stagger={120}>
                            <article className="raidah-about-direction__item">
                                <span className="raidah-about-direction__icon">
                                    <Leaf size={29} />
                                </span>
                                <span className="raidah-about-direction__number">02</span>
                                <h3>{t.values}</h3>
                                <p>{t.valuesText}</p>
                            </article>
                        </Reveal>

                        <Reveal variant="up" stagger={240}>
                            <article className="raidah-about-direction__item raidah-about-direction__item--draft">
                                <span className="raidah-about-direction__icon">
                                    <Target size={29} />
                                </span>
                                <span className="raidah-about-direction__number">03</span>
                                <h3>{t.mission}</h3>
                                <p>{t.missionText}</p>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="raidah-about-goals raidah-about-section">
                <div className="container-site raidah-about-goals__grid">
                    <Reveal variant="up">
                        <SectionHeading
                            eyebrow={t.goalsEyebrow}
                            title={t.goalsTitle}
                            light
                        />
                    </Reveal>

                    <div className="raidah-about-goals__list">
                        {t.goals.map((goal, index) => (
                            <Reveal
                                key={goal.title}
                                variant={isArabic ? "left" : "right"}
                                stagger={index * 120}
                            >
                                <article className="raidah-about-goal">
                                    <span className="raidah-about-goal__number">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h3>{goal.title}</h3>
                                        <p>{goal.description}</p>
                                    </div>
                                    <DirectionArrow size={21} />
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="raidah-about-timeline raidah-about-section">
                <div className="container-site">
                    <Reveal variant="up">
                        <SectionHeading
                            eyebrow={t.timelineEyebrow}
                            title={t.timelineTitle}
                        />
                    </Reveal>

                    <div className="raidah-about-timeline__list">
                        {t.timeline.map((item, index) => (
                            <Reveal
                                key={item.year}
                                variant={isArabic ? "right" : "left"}
                                stagger={index * 130}
                            >
                                <article className="raidah-about-timeline__item">
                                    <div className="raidah-about-timeline__year">
                                        <span>{item.year}</span>
                                    </div>
                                    <div className="raidah-about-timeline__body">
                                        <span className="raidah-about-timeline__dot" />
                                        <span className="raidah-about-timeline__step">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="raidah-about-quality raidah-about-section">
                <div className="container-site">
                    <div className="raidah-about-quality__intro">
                        <Reveal variant="up">
                            <SectionHeading
                                eyebrow={t.qualityEyebrow}
                                title={t.qualityTitle}
                                description={t.qualityDescription}
                                light
                            />
                        </Reveal>

                        <Reveal
                            className="raidah-about-quality__symbol"
                            variant="scale"
                            delay={150}
                        >
                            <div className="raidah-about-quality__symbol-inner">
                                <Microscope size={58} strokeWidth={1.2} />
                                <span>QUALITY</span>
                            </div>
                        </Reveal>
                    </div>

                    <div className="raidah-about-quality__items">
                        {t.qualityItems.map((item, index) => (
                            <Reveal
                                key={item.title}
                                variant="up"
                                stagger={index * 90}
                            >
                                <article className="raidah-about-quality__item">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <CheckCircle2 size={20} />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal variant="up" delay={80}>
                        <div className="raidah-about-standards">
                            <ShieldCheck size={26} />
                            <div>
                                <h3>{t.standardsTitle}</h3>
                                <p>{t.standardsDescription}</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="raidah-about-facility raidah-about-section">
                <div className="container-site">
                    <Reveal variant="up">
                        <SectionHeading
                            eyebrow={t.facilityEyebrow}
                            title={t.facilityTitle}
                            description={t.facilityDescription}
                        />
                    </Reveal>

                    <div className="raidah-about-facility__grid">
                        <Reveal
                            className="raidah-about-facility__location"
                            variant="scale"
                        >
                            <div className="raidah-about-facility__location-mark">
                                <Building2 size={34} />
                            </div>
                            <span>{t.location}</span>
                            <h3>{t.locationValue}</h3>
                            <div className="raidah-about-facility__location-line" />
                        </Reveal>

                        <Reveal variant="up" stagger={80}>
                            <article className="raidah-about-facility__metric">
                                <Factory size={25} />
                                <span>{t.totalArea}</span>
                                <strong>
                                    12,443.2 <small>m²</small>
                                </strong>
                            </article>
                        </Reveal>

                        <Reveal variant="up" stagger={160}>
                            <article className="raidah-about-facility__metric">
                                <Building2 size={25} />
                                <span>{t.productionArea}</span>
                                <strong>
                                    354.2 <small>m²</small>
                                </strong>
                            </article>
                        </Reveal>

                        <Reveal variant="up" stagger={240}>
                            <article className="raidah-about-facility__metric">
                                <Wind size={25} />
                                <span>{t.hvac}</span>
                                <strong className="raidah-about-facility__text-value">
                                    {t.hvacValue}
                                </strong>
                            </article>
                        </Reveal>

                        <Reveal variant="up" stagger={320}>
                            <article className="raidah-about-facility__metric">
                                <Droplets size={25} />
                                <span>{t.water}</span>
                                <strong className="raidah-about-facility__text-value">
                                    {t.waterValue}
                                </strong>
                                <p>{t.waterDescription}</p>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="raidah-about-partnership raidah-about-section">
                <div className="container-site">
                    <Reveal variant="scale">
                        <div className="raidah-about-partnership__panel">
                            <span className="raidah-about-partnership__icon">
                                <Handshake size={34} />
                            </span>
                            <div>
                                <span className="raidah-about-eyebrow">
                                    {t.partnershipEyebrow}
                                </span>
                                <h2>{t.partnershipTitle}</h2>
                                <p>{t.partnershipDescription}</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="raidah-about-workforce raidah-about-section">
                <div className="container-site">
                    <Reveal variant="up">
                        <SectionHeading
                            eyebrow={t.workforceEyebrow}
                            title={t.workforceTitle}
                            description={t.workforceDescription}
                        />
                    </Reveal>

                    <div className="raidah-about-workforce__grid">
                        {t.workforce.map((item, index) => (
                            <Reveal
                                key={item.title}
                                variant="up"
                                stagger={index * 90}
                            >
                                <article className="raidah-about-workforce__item">
                                    <span className="raidah-about-workforce__index">
                                        0{index + 1}
                                    </span>
                                    <span className="raidah-about-workforce__count">
                                        {item.count}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <div className="raidah-about-workforce__bar">
                                        <span
                                            style={{
                                                "--bar-width": `${(item.count / 35) * 100}%`,
                                                "--bar-delay": `${index * 90 + 200}ms`,
                                            }}
                                        />
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="raidah-about-dosage raidah-about-section">
                <div className="container-site">
                    <Reveal variant="up">
                        <SectionHeading eyebrow={t.dosageEyebrow} title={t.dosageTitle} />
                    </Reveal>

                    <div className="raidah-about-dosage__grid">
                        {t.dosage.map(({ title, en, icon: Icon }, index) => (
                            <Reveal
                                key={en}
                                variant="up"
                                stagger={index * 110}
                            >
                                <article className="raidah-about-dosage__item">
                                    <span className="raidah-about-dosage__index">
                                        0{index + 1}
                                    </span>
                                    <span className="raidah-about-dosage__icon">
                                        <Icon size={30} strokeWidth={1.5} />
                                    </span>
                                    <h3>{title}</h3>
                                    <span className="raidah-about-dosage__english">{en}</span>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="raidah-about-cta">
                <div className="container-site raidah-about-cta__inner">
                    <Reveal variant="up">
                        <div>
                            <span className="raidah-about-eyebrow">{t.eyebrow}</span>
                            <h2>{t.ctaTitle}</h2>
                            <p>{t.ctaDescription}</p>
                        </div>
                    </Reveal>
                    <Reveal variant="scale" delay={120}>
                        <a href="/contact" className="raidah-about-button">
                            {t.contact}
                            <DirectionArrow size={19} />
                        </a>
                    </Reveal>
                </div>
            </section>
        </main>
    )
}