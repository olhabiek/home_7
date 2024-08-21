import { useContext } from "react";
import LanguageContext from "../languageContext";
import styles from "./styles.module.css";

function TextDisplay() {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: "English language was chosen",
    de: "Als Sprache wurde die deutsche Sprache gewählt",
  };
  return <h1 className={styles.textDisplay}>{texts[language]}</h1>;
}

export default TextDisplay;
