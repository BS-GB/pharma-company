import { Link } from "react-router-dom"
import {
    ArrowUp,
    ChevronLeft,
    ChevronRight,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
} from "lucide-react"

import { siteConfig } from "../../config/site"
import { navigation } from "../../data/navigation"
import useLanguage from "../../hooks/useLanguage"

export default function Footer() {
    const { language, isArabic } = useLanguage()
    const navItems = navigation[language] || []
    const currentYear = new Date().getFullYear()

    const ArrowIcon = isArabic ? ChevronLeft : ChevronRight

    const scrollToTop = () => {
        const startPosition = window.scrollY || document.documentElement.scrollTop
        if (startPosition === 0) return

        const duration = 850 // مدة الصعود بالمللي ثانية (يمكنك زيادتها لنعومة أكبر)
        let startTime = null

        const easeOutCubic = (t) => --t * t * t + 1

        const animationStep = (currentTime) => {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            const ease = easeOutCubic(progress)

            window.scrollTo(0, startPosition * (1 - ease))

            if (timeElapsed < duration) {
                requestAnimationFrame(animationStep)
            }
        }

        requestAnimationFrame(animationStep)
    }

    const quickLinks = [
        {
            path: "/products",
            label: isArabic ? "الأشكال والمنتجات الدوائية" : "Pharmaceutical Products",
        },
        {
            path: "/about",
            label: isArabic ? "عن المنشأة والمختبرات" : "About & Laboratories",
        },
        {
            path: "/production-knowledge",
            label: isArabic ? "معرفة الإنتاج والجودة" : "Production & Quality",
        },
        {
            path: "/training",
            label: isArabic ? "برامج التدريب المستمر" : "Continuous Training",
        },
        {
            path: "/social-responsibility",
            label: isArabic ? "المسؤولية الاجتماعية" : "Social Responsibility",
        },
        {
            path: "/news",
            label: isArabic ? "الأخبار والمستجدات" : "News & Media",
        },
    ]

    return (
        <footer
            className="relative isolate overflow-hidden border-t border-slate-200/80 bg-slate-950 text-slate-100 transition-colors duration-500 dark:border-slate-800/80"
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* خط إضاءة ليزري علوي رفيع ودقيق */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#189ad0]/70 to-transparent" />

            {/* وهج محيطي هادئ في المنتصف */}
            <div
                className="pointer-events-none absolute -top-40 start-1/2 -z-10 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(24,154,208,0.12),_transparent_70%)] blur-3xl"
                aria-hidden="true"
            />

            <div className="container-site mx-auto px-4 sm:px-6 lg:px-8">
                {/* 1. الترويسة العلوية: الشعار والهوية والزر السريع */}
                <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-800/80 py-8 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="group inline-flex items-center transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={siteConfig.logo}
                                alt={
                                    isArabic
                                        ? "الشركة الرائدة للأدوية"
                                        : "AL-Raidah Pharmaceutical"
                                }
                                className="h-12 w-auto rounded-xl bg-white p-1.5 shadow-md shadow-sky-950/40 object-contain ring-1 ring-white/10"
                            />
                        </Link>
                        <div className="flex flex-col">
                            <span className="text-base font-extrabold tracking-tight text-white">
                                {isArabic ? "الشركة الرائدة للصناعات الدوائية" : "AL-Raidah Pharmaceutical Industries"}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#42b5e3]">
                                <ShieldCheck size={14} />
                                {isArabic ? "معايير تصنيع دوائي متقدمة" : "Advanced Pharmaceutical Standards"}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label={isArabic ? "الرجوع لأعلى الصفحة" : "Back to top"}
                        className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-xs font-bold text-slate-300 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#189ad0] hover:bg-[#189ad0] hover:text-white"
                    >
                        <span>{isArabic ? "إلى الأعلى" : "Back to top"}</span>
                        <ArrowUp
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                    </button>
                </div>

                {/* 2. الشبكة الرباعية المتناسقة بالتساوي */}
                <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* العمود 1: النبذة وروابط التواصل */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                                {isArabic ? "رؤية المنظومة" : "Our Commitment"}
                            </h3>
                            <p className="mt-4 text-xs leading-relaxed text-slate-300/85">
                                {isArabic
                                    ? "نعمل على تقديم منتجات دوائية موثوقة وعالية الفعالية تدعم منظومة الرعاية الصحية، مع التزامنا الدقيق بمعايير الجودة والتصنيع العالمي."
                                    : "Committed to delivering reliable, high-efficacy pharmaceutical solutions supporting healthcare systems with strict adherence to global manufacturing standards."}
                            </p>
                        </div>

                        {/* أيقونات التواصل الاجتماعي */}
                        <div className="mt-6 flex items-center gap-2.5">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#189ad0] hover:bg-[#189ad0] hover:text-white"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                                    <path d="M14 8h3V4.5c-.52-.07-1.74-.17-3.3-.17-3.27 0-5.51 2-5.51 5.7V13H4v4h4.19v7h4.02v-7h3.57l.57-4h-4.14v-2.56c0-1.16.32-1.94 1.79-1.94Z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#189ad0] hover:bg-[#189ad0] hover:text-white"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current transition-transform duration-300 group-hover:scale-110" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#189ad0] hover:bg-[#189ad0] hover:text-white"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                                    <path d="M6.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM4.5 10h4v10h-4V10Zm6 0h3.84v1.37h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V20h-4v-3.98c0-.95-.02-2.17-1.32-2.17-1.32 0-1.52 1.03-1.52 2.1V20h-4V10Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* العمود 2: روابط التصفح */}
                    <div>
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                            {isArabic ? "صفحات الموقع" : "Navigation"}
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {navItems.slice(0, 5).map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="group inline-flex items-center gap-1.5 text-xs text-slate-300 transition-all duration-300 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1"
                                    >
                                        <ArrowIcon
                                            size={13}
                                            className="text-slate-500 transition-colors duration-300 group-hover:text-[#189ad0]"
                                        />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* العمود 3: مجالات واكتشافات */}
                    <div>
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                            {isArabic ? "مجالات واكتشاف" : "Explore Areas"}
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {quickLinks.slice(0, 5).map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group inline-flex items-center gap-2 text-xs text-slate-300 transition-all duration-300 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-[#189ad0]" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* العمود 4: بيانات التواصل المباشرة (متناسقة ونظيفة) */}
                    <div>
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                            {isArabic ? "قنوات التواصل" : "Contact Channels"}
                        </h3>

                        <div className="mt-4 space-y-3">
                            {/* العنوان */}
                            <div className="flex items-start gap-2.5 text-xs text-slate-300">
                                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#189ad0]/10 text-[#189ad0]">
                                    <MapPin size={14} />
                                </span>
                                <div>
                                    <span className="block font-bold text-slate-200">
                                        {isArabic ? "الجمهورية اليمنية" : "Yemen"}
                                    </span>
                                    <span className="text-slate-400">
                                        {isArabic ? "صنعاء — مسيب — بني مطر" : "Sana'a — Bani Matar"}
                                    </span>
                                </div>
                            </div>

                            {/* الهاتف */}
                            <a
                                href="tel:+967"
                                className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-white"
                            >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#189ad0]/10 text-[#189ad0] transition-colors group-hover:bg-[#189ad0] group-hover:text-white">
                                    <Phone size={14} />
                                </span>
                                <span dir="ltr" className="font-semibold text-slate-200 group-hover:text-[#42b5e3]">
                                    +967 1 000 000
                                </span>
                            </a>

                            {/* البريد الإلكتروني */}
                            <a
                                href="mailto:info@alraidah.com"
                                className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-white"
                            >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#189ad0]/10 text-[#189ad0] transition-colors group-hover:bg-[#189ad0] group-hover:text-white">
                                    <Mail size={14} />
                                </span>
                                <span className="font-semibold text-slate-200 group-hover:text-[#42b5e3]">
                                    info@alraidah.com
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* 3. الشريط السفلي النهائي للحقوق والشعار المعتمد */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 py-6 text-[11px] text-slate-400 sm:flex-row">
                    <p className="text-center sm:text-start">
                        © {currentYear}{" "}
                        <span className="font-semibold text-slate-200">
                            {isArabic
                                ? "الشركة الرائدة للصناعات الدوائية"
                                : "AL-Raidah Pharmaceutical Industries"}
                        </span>
                        . {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
                    </p>

                    <div className="flex items-center gap-4 text-slate-300 font-medium">
                        <span className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#189ad0]" />
                            {isArabic
                                ? "الجودة • الموثوقية • الابتكار"
                                : "Quality • Reliability • Innovation"}
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    )
}