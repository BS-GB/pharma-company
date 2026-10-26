import { ArrowUpLeft, ArrowUpRight, PackageOpen } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import useLanguage from "../../hooks/useLanguage"
import "./products-preview.css"

const featuredProducts = [
    { id: "dicloraid-fast", name: "Dicloraid Fast", image: "/images/products/dicloraid-fast.jpg" },
    { id: "pararaid", name: "Pararaid", image: "/images/products/pararaid.jpg" },
    { id: "flazo-raid", name: "Flazo Raid", image: "/images/products/flazo-raid.jpg" },
    { id: "pararaid-extra", name: "Pararaid Extra", image: "/images/products/pararaid-extra.jpg" },
    { id: "panto-raid", name: "Panto Raid", image: "/images/products/panto-raid.jpg" },
    { id: "lanso-raid", name: "Lanso Raid", image: "/images/products/lanso-raid.jpg" },
]

export default function ProductsPreview() {
    const { isArabic } = useLanguage()
    const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight
    const showcaseRef = useRef(null)

    useEffect(() => {
        const container = showcaseRef.current
        if (!container) return

        const cards = container.querySelectorAll(".raidah-product-card")
        if (!cards.length) return

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        obs.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        )

        cards.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="raidah-products-preview" aria-labelledby="products-preview-title">
            <div className="raidah-products-preview__ambient" aria-hidden="true" />
            <div className="raidah-products-preview__container">
                <header className="raidah-products-preview__header">
                    <div className="raidah-products-preview__eyebrow">
                        <span className="raidah-products-preview__eyebrow-line" />
                        <span>{isArabic ? "منتجات الرائدة" : "AL-Raidah Products"}</span>
                    </div>

                    <div className="raidah-products-preview__heading-row">
                        <div>
                            <h2 id="products-preview-title">
                                {isArabic ? "مجموعة مختارة من منتجاتنا" : "A selection from our products"}
                            </h2>
                            <p>
                                {isArabic
                                    ? "نستعرض هنا مجموعة مختارة من منتجات الرائدة، مع إمكانية استكشاف المجموعة الكاملة من خلال صفحة المنتجات."
                                    : "Explore a selection of AL-Raidah products, with the complete portfolio available through our products page."}
                            </p>
                        </div>

                        <Link to="/products" className="raidah-products-preview__top-link">
                            <span>{isArabic ? "جميع المنتجات" : "All products"}</span>
                            <Arrow size={18} strokeWidth={1.8} />
                        </Link>
                    </div>
                </header>

                <div className="raidah-products-preview__showcase" ref={showcaseRef}>
                    {featuredProducts.map((product, index) => (
                        <article
                            className={`raidah-product-card raidah-product-card--${index + 1}`}
                            key={product.id}
                            style={{ "--card-index": index }}
                        >
                            <Link to={`/products/${product.id}`} className="raidah-product-card__link">
                                <div className="raidah-product-card__visual">
                                    <div className="raidah-product-card__halo" aria-hidden="true" />
                                    <div className="raidah-product-card__image-wrap">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none"
                                                event.currentTarget.parentElement?.classList.add("raidah-product-card__image-wrap--fallback")
                                            }}
                                        />
                                        <div className="raidah-product-card__fallback" aria-hidden="true">
                                            <PackageOpen size={42} strokeWidth={1.35} />
                                        </div>
                                    </div>
                                    <span className="raidah-product-card__index">{String(index + 1).padStart(2, "0")}</span>
                                </div>

                                <div className="raidah-product-card__info">
                                    <span className="raidah-product-card__label">
                                        {isArabic ? "منتج من الرائدة" : "AL-Raidah product"}
                                    </span>
                                    <h3>{product.name}</h3>
                                    <div className="raidah-product-card__footer">
                                        <span>{isArabic ? "عرض المنتج" : "View product"}</span>
                                        <span className="raidah-product-card__arrow">
                                            <Arrow size={16} strokeWidth={2} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="raidah-products-preview__bottom">
                    <span className="raidah-products-preview__bottom-line" />
                    <Link to="/products" className="raidah-products-preview__cta">
                        <span>{isArabic ? "استكشف مجموعة المنتجات كاملة" : "Explore the full product portfolio"}</span>
                        <span className="raidah-products-preview__cta-icon"><Arrow size={18} strokeWidth={2} /></span>
                    </Link>
                    <span className="raidah-products-preview__bottom-line" />
                </div>
            </div>
        </section>
    )
}