import { useEffect, useState } from "react"
import {
    Globe,
    Menu,
    X,
    ChevronDown,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import { navigation } from "../../data/navigation"
import { siteConfig } from "../../config/site"
import useLanguage from "../../hooks/useLanguage"
import ThemeToggle from "../common/ThemeToggle"

export default function Navbar() {
    const {
        language,
        toggleLanguage,
        isArabic,
    } = useLanguage()

    const location = useLocation()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navItems = navigation[language]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (!mobileMenuOpen) return

        const originalOverflow = document.body.style.overflow

        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [mobileMenuOpen])

    const logoAlt = isArabic
        ? "شعار الرائدة للأدوية"
        : "AL-Raidah Pharmaceutical Logo"

    return (
        <>
            <header
                className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${scrolled
                        ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95"
                        : "bg-white/80 backdrop-blur-md dark:bg-slate-950/80"
                    }
        `}
            >
                <div className="container-site">
                    <div className="flex h-20 items-center justify-between gap-6 lg:h-24">

                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="group flex shrink-0 items-center"
                            aria-label={isArabic ? "الرائدة" : "AL-Raidah"}
                        >

                            <img
                                src={siteConfig.logo}
                                alt={logoAlt}
                                className="
                            block
                            h-9
                            w-auto
                            max-w-[120px]
                            object-contain
                            object-center
                            transition-transform
                            duration-300
                            group-hover:scale-[1.02]
                            sm:h-10
                            lg:h-11
                            lg:max-w-[145px]
                    "
                            />
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav
                            className="
                hidden
                flex-1
                items-center
                justify-center
                lg:flex
              "
                            aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}
                        >
                            <div className="flex items-center gap-1 xl:gap-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) => `
                      relative
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      xl:px-3.5
                      ${isActive
                                                ? "text-primary"
                                                : "text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary"
                                            }
                    `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span>{item.label}</span>

                                                <span
                                                    className={`
                            absolute
                            bottom-0
                            start-1/2
                            h-0.5
                            -translate-x-1/2
                            rounded-full
                            bg-primary
                            transition-all
                            duration-300
                            ${isActive
                                                            ? "w-5/6 opacity-100"
                                                            : "w-0 opacity-0"
                                                        }
                          `}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden items-center gap-2 lg:flex">

                            <button
                                type="button"
                                onClick={toggleLanguage}
                                className="
                  flex
                  h-10
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary
                  hover:text-primary
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                  dark:hover:border-primary
                  dark:hover:text-primary
                "
                                aria-label={
                                    isArabic
                                        ? "التبديل إلى الإنجليزية"
                                        : "Switch to Arabic"
                                }
                            >
                                <Globe size={17} strokeWidth={2} />

                                <span>
                                    {isArabic ? "EN" : "ع"}
                                </span>

                                <ChevronDown
                                    size={14}
                                    className="opacity-50"
                                />
                            </button>

                            <ThemeToggle />

                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-2 lg:hidden">

                            <ThemeToggle />

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen((value) => !value)}
                                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                "
                                aria-label={
                                    mobileMenuOpen
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <X size={20} />
                                ) : (
                                    <Menu size={20} />
                                )}
                            </button>

                        </div>

                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`
          fixed
          inset-0
          z-40
          lg:hidden
          ${mobileMenuOpen
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }
        `}
            >
                {/* Overlay */}
                <button
                    type="button"
                    aria-label="Close mobile menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
            absolute
            inset-0
            bg-slate-950/40
            backdrop-blur-sm
            transition-opacity
            duration-300
            ${mobileMenuOpen
                            ? "opacity-100"
                            : "opacity-0"
                        }
          `}
                />

                {/* Panel */}
                <div
                    className={`
            absolute
            top-20
            bottom-0
            w-[min(90%,420px)]
            overflow-y-auto
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            dark:bg-slate-950
            ${isArabic
                            ? "right-0"
                            : "left-0"
                        }
            ${mobileMenuOpen
                            ? "translate-x-0"
                            : isArabic
                                ? "translate-x-full"
                                : "-translate-x-full"
                        }
          `}
                >
                    <div className="flex min-h-full flex-col p-5">

                        {/* Mobile Navigation */}
                        <nav
                            className="flex flex-col gap-1"
                            aria-label={
                                isArabic
                                    ? "قائمة الهاتف"
                                    : "Mobile navigation"
                            }
                        >
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) => `
                    rounded-xl
                    px-4
                    py-4
                    text-base
                    font-semibold
                    transition-all
                    duration-300
                    ${isActive
                                            ? "bg-primary-soft text-primary dark:bg-primary/10 dark:text-primary"
                                            : "text-slate-700 hover:bg-slate-50 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-primary"
                                        }
                  `}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile Bottom Actions */}
                        <div className="mt-auto border-t border-slate-200 pt-5 dark:border-slate-800">

                            <button
                                type="button"
                                onClick={toggleLanguage}
                                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-slate-200
                  px-4
                  py-4
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  hover:border-primary
                  hover:text-primary
                  dark:border-slate-700
                  dark:text-slate-200
                "
                            >
                                <span className="flex items-center gap-3">
                                    <Globe size={18} />
                                    {isArabic
                                        ? "English"
                                        : "العربية"}
                                </span>

                                <span className="text-primary">
                                    {isArabic ? "EN" : "ع"}
                                </span>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}