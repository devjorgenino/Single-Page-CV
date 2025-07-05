import { useLanguage } from "../../context/languageContext";
import SubTitle from "../Subtitle/subtitle";
import Title from "../Title/title";

type Language = "es" | "en";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const subtitleLabel =
    language === "es" ? "Desarrollador Frontend" : "Frontend Developer";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <nav>
      <div className="header">
        <div>
          <Title label="Jorge Niño" />
          <SubTitle label={subtitleLabel} />
        </div>
        <select
          className="buttonHeader"
          value={language}
          onChange={handleChange}
          style={{ cursor: "pointer" }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
