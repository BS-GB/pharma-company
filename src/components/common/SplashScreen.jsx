import { useEffect, useState, useMemo } from "react"
import { siteConfig } from "../../config/site"
import useLanguage from "../../hooks/useLanguage"

export default function SplashScreen() {
    const { isArabic } = useLanguage()

    const [visible, setVisible] = useState(true)
    const [isFused, setIsFused] = useState(false)
    const [closing, setClosing] = useState(false)

    // الكلمة المتصلة النهائية
    const brandName = isArabic ? "الرائدة" : "AL-Raidah"

    // مصفوفة الحروف المنفصلة التي ستنبثق حرفاً تلو الآخر
    const letters = useMemo(() => {
        if (isArabic) {
            // أحرف منفصلة صريحة تظهر بشكل: ا ل ر ا ئ د ة
            return ["ا", "ل", "ر", "ا", "ئ", "د", "ة"]
        }
        return Array.from("AL-Raidah")
    }, [isArabic])

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("alraidah-splash-seen")

        if (hasSeenSplash) {
            setVisible(false)
            return
        }

        // 1. تفعيل اندماج الحروف لتصبح "الرائدة" المتصلة (بعد خروج واستقرار الحرف الأخير)
        const fuseTimer = setTimeout(() => {
            setIsFused(true)
        }, 1850)

        // 2. بدء خروج شاشة الـ Splash وفتح الستار لدخول الموقع
        const closeTimer = setTimeout(() => {
            setClosing(true)
            document.body.classList.add("raidah-splash-complete")
        }, 3300)

        // 3. إزالة الـ Splash نهائياً من الـ DOM
        const removeTimer = setTimeout(() => {
            sessionStorage.setItem("alraidah-splash-seen", "true")
            setVisible(false)
        }, 4200)

        return () => {
            clearTimeout(fuseTimer)
            clearTimeout(closeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!visible) {
        return null
    }

    return (
        <div
            className={`raidah-splash ${closing ? "raidah-splash--closing" : ""}`}
            dir={isArabic ? "rtl" : "ltr"}
            style={{ "--dir-factor": isArabic ? -1 : 1 }}
            aria-label={brandName}
        >
            {/* ستائر الانسحاب العمودي لفتح الموقع */}
            <div className="raidah-splash__shutter raidah-splash__shutter--top" />
            <div className="raidah-splash__shutter raidah-splash__shutter--bottom" />

            {/* الخلفية والإضاءة المحيطية */}
            <div className="raidah-splash__background">
                <span className="raidah-splash__glow raidah-splash__glow--main" />
                <span className="raidah-splash__glow raidah-splash__glow--top" />
                <span className="raidah-splash__glow raidah-splash__glow--bottom" />
                <div className="raidah-splash__grid" />
                <div className="raidah-splash__lines">
                    <span />
                    <span />
                </div>
            </div>

            {/* منصة العرض المركزية */}
            <div className="raidah-splash__stage">
                <span className="raidah-splash__orbit raidah-splash__orbit--one" />
                <span className="raidah-splash__orbit raidah-splash__orbit--two" />

                {/* الشعار */}
                <div className="raidah-splash__logo-frame">
                    <div className="raidah-splash__logo-glow" />
                    <div className="raidah-splash__logo">
                        <img
                            src={siteConfig.logo}
                            alt={isArabic ? "شعار الرائدة" : "AL-Raidah Logo"}
                        />
                    </div>
                </div>

                {/* منطقة الحروف المنبثقة ثم المندمجة */}
                <div className={`raidah-splash__brand ${isFused ? "raidah-splash__brand--fused" : ""}`}>
                    {/* الحروف المنفصلة أثناء الانبثاق: ا ل ر ا ئ د ة */}
                    <div className="raidah-splash__letters-rail" aria-hidden={isFused}>
                        {letters.map((char, index) => (
                            <span
                                key={index}
                                className="raidah-splash__char"
                                style={{
                                    "--char-index": index,
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>

                    {/* الكلمة الكاملة المندمجة المتصلة كتابياً: "الرائدة" */}
                    <div className="raidah-splash__word-fused" aria-hidden={!isFused}>
                        {brandName}
                    </div>

                    {/* خط الإضاءة التابع */}
                    <div className="raidah-splash__brand-line">
                        <span />
                        <span />
                    </div>

                    <div className="raidah-splash__brand-subtitle">
                        {isArabic ? "للصناعات الدوائية" : "Pharmaceutical Industries"}
                    </div>

                    <div className="raidah-splash__statement">
                        <span className="raidah-splash__statement-line" />
                        <p>
                            {isArabic
                                ? "جودة تُبنى عليها الثقة"
                                : "Quality that builds trust"}
                        </p>
                        <span className="raidah-splash__statement-line" />
                    </div>
                </div>
            </div>

            {/* شريط التحميل السفلي */}
            <div className="raidah-splash__loading">
                <span>{isArabic ? "جاري تهيئة المنصة..." : "Initializing Platform..."}</span>
                <div className="raidah-splash__loading-track">
                    <div />
                </div>
            </div>
        </div>
    )
}