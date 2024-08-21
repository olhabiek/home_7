import { useContext } from "react";
import LanguageContext from "../languageContext";
import styles from "./styles.module.css";

function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);
  function toggleLanguage() {
    const newLanguage = language === "en" ? "de" : "en";
    changeLanguage(newLanguage);
  }
  const buttonText = language === "en" ? "Switch language" : "Sprache wechseln";
  return (
    <div>
      <button className={styles.switcherBtn} onClick={toggleLanguage}>
        {buttonText}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
