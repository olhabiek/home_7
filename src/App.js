import "./App.css";
import { LanguageProvider } from "./components/languageContext";
import LanguageSwitcher from "./components/languageSwitcher";
import TextDisplay from "./components/textDisplay";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="mainContainer">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
