import { FaSun, FaMoon } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

interface PanelProps {
    theme: "light" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
    lang: "ko" | "en";
    setLang: React.Dispatch<React.SetStateAction<"ko" | "en">>;
  }

const Panel: React.FC<PanelProps> = ({theme, setTheme, lang, setLang}) => {
      return (
      <div className="flex gap-2 mb-2 w-full">
        <label className="swap swap-rotate text-sm">
          <input 
            type="checkbox" 
            onChange={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))} 
            checked={theme === "dark"} 
          />
          <FaSun className="swap-on w-5 h-5 text-yellow-500" />
          <FaMoon className="swap-off w-5 h-5 text-gray-400" />
        </label>

        <button 
          onClick={() => setLang((prev) => (prev === "ko" ? "en" : "ko"))}
          className="btn btn-xs btn-primary flex items-center gap-1 text-sm"
        >
          <BiWorld className="w-4 h-4" /> {lang === "ko" ? "EN" : "KR"}
        </button>
      </div>
    )
}

export default Panel;