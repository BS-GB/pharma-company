import { Moon, Sun } from "lucide-react"
import useTheme from "../../hooks/useTheme"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    const isDark = theme === "dark"

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="
        relative
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
        hover:-translate-y-0.5
        hover:border-primary
        hover:text-primary
        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200
        dark:hover:border-primary
        dark:hover:text-primary
      "
        >
            {isDark ? (
                <Sun size={18} strokeWidth={2} />
            ) : (
                <Moon size={18} strokeWidth={2} />
            )}
        </button>
    )
}