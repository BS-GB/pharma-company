import { useMemo, useState, useEffect, useRef } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Search,
    SlidersHorizontal,
    Package,
    Pill,
    Droplets,
    FlaskConical,
    X,
} from "lucide-react";
import useLanguage from "../../hooks/useLanguage";
import "./ProductsPage.css";

const products = [
    {
        id: "dicloraid-fast",
        name: { ar: "ديكلورايد فاست", en: "Dicloraid Fast" },
        image: "/images/products-page/Dicloraid-Fast.jpg",
        form: "tablets",
    },
    {
        id: "pararaid",
        name: { ar: "بارارايد", en: "Pararaid" },
        image: "/images/products/pararaid.jpg",
        form: "tablets",
    },
    {
        id: "flazo-raid",
        name: { ar: "فلازو رايد", en: "Flazo Raid" },
        image: "/images/products-page/Flazo-Raid.jpg",
        form: "tablets",
    },
    {
        id: "pararaid-extra",
        name: { ar: "بارارايد إكسترا", en: "Pararaid Extra" },
        image: "/images/products-page/Pararaid-Extra.jpg",
        form: "tablets",
    },
    {
        id: "panto-raid",
        name: { ar: "بانتو رايد", en: "Panto Raid" },
        image: "/images/products-page/Panto-Raid.jpg",
        form: "tablets",
    },
    {
        id: "lanso-raid",
        name: { ar: "لانسو رايد", en: "Lanso Raid" },
        image: "/images/products-page/Lanso-Raid.jpg",
        form: "capsules",
    },
    {
        id: "Alben-Raid",
        name: { ar: "البين رايد", en: "Alben Raid" },
        image: "/images/products-page/Alben-Raid.jpg",
        form: "capsules",
    },
    {
        id: "Azith-Raid",
        name: { ar: "ازيث رايد", en: "Azith Raid" },
        image: "/images/products-page/Azith-Raid.jpg",
        form: "capsules",
    },
    {
        id: "Secna-Raid",
        name: { ar: "لانسو رايد", en: "Secna Raid" },
        image: "/images/products-page/Secna-Raid.jpg",
        form: "capsules",
    },
    {
        id: "Omep-Raid",
        name: { ar: "أوميب رايد", en: "Omep Raid" },
        image: "/images/products-page/Omep-Raid.jpg",
        form: "capsules",
    }
];

const categories = [
    { id: "all", ar: "جميع المنتجات", en: "All products", icon: Package },
    { id: "tablets", ar: "الأقراص", en: "Tablets", icon: Pill },
    { id: "capsules", ar: "الكبسولات", en: "Capsules", icon: Pill },
    { id: "syrup", ar: "الشراب", en: "Syrup", icon: FlaskConical },
    { id: "drops", ar: "القطرات", en: "Drops", icon: Droplets },
    { id: "suspension", ar: "المعلّقات", en: "Suspensions", icon: FlaskConical },
    { id: "sachet", ar: "الأكياس", en: "Sachets", icon: Package },
    { id: "odt", ar: "الأقراص المتحللة فمويًا", en: "ODT", icon: Pill },
];

export default function ProductsPage() {
    const { language, isRTL } = useLanguage();
    const isArabic = language === "ar";
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const containerRef = useRef(null);

    const t = (ar, en) => (isArabic ? ar : en);
    const DirectionIcon = isRTL ? ArrowLeft : ArrowRight;

    const filteredProducts = useMemo(() => {
        const query = search.trim().toLocaleLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "all" || product.form === activeCategory;

            const matchesSearch =
                !query ||
                product.name.ar.toLocaleLowerCase().includes(query) ||
                product.name.en.toLocaleLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);

    // إعادة رصد البطاقات عند كل تغيير في القائمة أو اللغة
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // إزالة حالة الحركة القديمة قبل إعادة الرصد
        const cards = container.querySelectorAll(".product-card");
        cards.forEach((card) => card.classList.remove("card-animated"));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("card-animated");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
        );

        const raf = requestAnimationFrame(() => {
            container
                .querySelectorAll(".product-card:not(.card-animated)")
                .forEach((card) => observer.observe(card));
        });

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, [filteredProducts, isRTL]);

    return (
        <div className="products-page" dir={isRTL ? "rtl" : "ltr"}>
            <section className="products-hero">
                <div className="products-hero__glow products-hero__glow--one" />
                <div className="products-hero__glow products-hero__glow--two" />

                <div className="products-container products-hero__content">
                    <span className="products-eyebrow">
                        <span className="products-eyebrow__dot" />
                        {t("منتجات الرائدة", "AL-RAIDAH PRODUCTS")}
                    </span>

                    <h1>
                        {t("منتجاتنا", "Our Products")}
                        <span className="products-hero__period">.</span>
                    </h1>

                    <p>
                        {t(
                            "اكتشف مجموعة منتجات الرائدة، وتعرّف على المنتجات المتاحة وتفاصيلها المعتمدة.",
                            "Explore AL-RAIDAH products and discover available product information and approved details."
                        )}
                    </p>

                    <div className="products-hero__stats">
                        <div>
                            <strong>{String(products.length).padStart(2, "0")}</strong>
                            <span>{t("منتجات معروضة", "Listed products")}</span>
                        </div>
                        <span className="products-hero__divider" />
                        <div>
                            <Package size={22} />
                            <span>{t("تعرّف على منتجاتنا", "Explore our products")}</span>
                        </div>
                    </div>
                </div>

                <div className="products-hero__decoration" aria-hidden="true">
                    <div className="products-hero__ring products-hero__ring--outer" />
                    <div className="products-hero__ring products-hero__ring--inner">
                        <Package size={66} strokeWidth={1.15} />
                    </div>
                    <span className="products-hero__spark products-hero__spark--one" />
                    <span className="products-hero__spark products-hero__spark--two" />
                </div>
            </section>

            <section className="products-catalog">
                <div className="products-container" ref={containerRef}>
                    <div className="products-section-heading">
                        <div>
                            <span className="products-section-heading__eyebrow">
                                {t("كتالوج المنتجات", "PRODUCT CATALOG")}
                            </span>
                            <h2>{t("استكشف منتجاتنا", "Explore Our Products")}</h2>
                            <p>
                                {t(
                                    "استخدم البحث أو اختر الشكل الصيدلاني للوصول إلى المنتج المطلوب.",
                                    "Search or choose a dosage form to find the product you need."
                                )}
                            </p>
                        </div>

                        <span className="products-count">
                            {filteredProducts.length}{" "}
                            {t("منتجات", "products")}
                        </span>
                    </div>

                    <div className="products-toolbar">
                        <label className="products-search">
                            <Search size={20} aria-hidden="true" />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder={t("ابحث باسم المنتج...", "Search products...")}
                                aria-label={t("البحث عن منتج", "Search products")}
                            />
                            {search && (
                                <button
                                    type="button"
                                    className="products-search__clear"
                                    onClick={() => setSearch("")}
                                    aria-label={t("مسح البحث", "Clear search")}
                                >
                                    <X size={17} />
                                </button>
                            )}
                        </label>

                        <div className="products-toolbar__label">
                            <SlidersHorizontal size={18} />
                            <span>{t("التصنيف", "Filter")}</span>
                        </div>
                    </div>

                    <div
                        className="products-categories"
                        role="group"
                        aria-label={t("تصنيف المنتجات", "Product categories")}
                    >
                        {categories.map((category) => {
                            const CategoryIcon = category.icon;
                            const active = activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={`products-category ${active ? "is-active" : ""}`}
                                    onClick={() => setActiveCategory(category.id)}
                                    aria-pressed={active}
                                >
                                    <CategoryIcon size={17} />
                                    <span>{t(category.ar, category.en)}</span>
                                </button>
                            );
                        })}
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="products-grid">
                            {filteredProducts.map((product, index) => (
                                <article
                                    className="product-card"
                                    key={product.id}
                                    style={{ "--card-index": index }}
                                >
                                    <div className="product-card__image">
                                        <img
                                            src={product.image}
                                            alt={product.name[isArabic ? "ar" : "en"]}
                                            loading="lazy"
                                            onError={(event) => {
                                                event.currentTarget.style.visibility = "hidden";
                                                event.currentTarget.parentElement.classList.add(
                                                    "has-image-error"
                                                );
                                            }}
                                        />
                                        <div className="product-card__fallback">
                                            <Package size={40} strokeWidth={1.2} />
                                            <span>{t("صورة المنتج غير متاحة", "Image unavailable")}</span>
                                        </div>
                                        <span className="product-card__number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="product-card__body">
                                        <span className="product-card__category">
                                            {t(
                                                categories.find((item) => item.id === product.form)?.ar ??
                                                "منتج دوائي",
                                                categories.find((item) => item.id === product.form)?.en ??
                                                "Pharmaceutical product"
                                            )}
                                        </span>

                                        <h3>{product.name[isArabic ? "ar" : "en"]}</h3>

                                        <a
                                            className="product-card__link"
                                            href={`/products/${product.id}`}
                                        >
                                            <span>{t("عرض التفاصيل", "View details")}</span>
                                            <DirectionIcon size={18} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="products-empty">
                            <Search size={34} />
                            <h3>{t("لم نعثر على منتجات", "No products found")}</h3>
                            <p>
                                {t(
                                    "جرّب تغيير كلمات البحث أو اختيار تصنيف آخر.",
                                    "Try a different search term or category."
                                )}
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setActiveCategory("all");
                                }}
                            >
                                {t("عرض جميع المنتجات", "Show all products")}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}