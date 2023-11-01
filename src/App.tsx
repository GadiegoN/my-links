import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./lib/i18n";

import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Github, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import { Skeleton } from "./components/ui/skeleton";

export function App() {
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const [randomQuote, setRandomQuote] = useState("");

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const githubUrl = "https://github.com/gadiegon";
  const linkedinUrl = "https://www.linkedin.com/in/gadiego-nogueira";
  const emailUrl = "mailto:ngadiego@gmail.com";
  const instagramUrl = "https://www.instagram.com/gadiego_front/";
  const designSystem = "https://gadiegon.github.io/05-design-system/";
  const cvPDF = "/curriculo.pdf";

  const { t } = useTranslation();

  const motivationalQuoteKeys = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "quote5",
    "quote6",
    "quote7",
    "quote8",
    "quote9",
    "quote10",
  ];

  const storedLanguage = localStorage.getItem("language") || "pt";

  useEffect(() => {
    i18n.changeLanguage(storedLanguage);
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);

    localStorage.setItem("language", language);
  };

  
  useEffect(() => {
    const lastChosenQuote = localStorage.getItem("lastChosenQuote");
    let newRandomQuoteKey =
    motivationalQuoteKeys[
      Math.floor(Math.random() * motivationalQuoteKeys.length)
    ];
    
    const newRandomQuote = t(`motivationalQuotes.${newRandomQuoteKey}`);
    
    while (newRandomQuoteKey === lastChosenQuote) {
      newRandomQuoteKey =
        motivationalQuoteKeys[
          Math.floor(Math.random() * motivationalQuoteKeys.length)
        ];
    }


    setRandomQuote(newRandomQuote);
      localStorage.setItem("lastChosenQuote", newRandomQuoteKey);
  }, [t]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-screen h-screen flex justify-center">
      <Button
        variant="outline"
        onClick={toggleDarkMode}
        className="fixed end-4 top-4 flex lg:end-auto lg:start-auto lg:ml-80 text-primary"
      >
        {darkMode ? <Sun className="h4 w-4" /> : <Moon className="h4 w-4" />}
      </Button>
      <div className=" mt-8 flex flex-col items-center">
        <Avatar className="h-40 w-40 rounded-full border border-primary hover:border-4">
          <AvatarImage src="https://github.com/gadiegon.png" />
          <AvatarFallback className="text-2xl hover:text-[40px]">
            <Skeleton className="h-40 w-40 rounded-full bg-card" />
          </AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-2xl mt-4 text-secondary-foreground">
          {t("name")}
        </h1>
        <span className="text-base text-primary">{t("title")}</span>

        <div className="w-full flex justify-around mt-5">
          <Button
            variant="ghost"
            className=""
            onClick={() => window.open(instagramUrl, "_blank")}
          >
            <Instagram />
          </Button>
          <Button
            variant="ghost"
            className=""
            onClick={() => window.open(linkedinUrl, "_blank")}
          >
            <Linkedin />
          </Button>
          <Button
            variant="ghost"
            className=""
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github />
          </Button>
        </div>

        <div className="mt-8 h-screen space-y-5 w-80">
          <Button
            onClick={() => window.open(emailUrl, "_blank")}
            className="w-full h-12"
          >
            E-mail
          </Button>
          <Button
            onClick={() => window.open(designSystem, "_blank")}
            className="w-full h-12"
          >
            Design System
          </Button>
          <Button
            onClick={() => window.open(cvPDF, "_blank")}
            className="w-full h-12"
          >
            Baixar Curriculo
          </Button>

          <p className="mt-10 text-center text-base font-semibold">
            "{randomQuote}"
          </p>
        </div>
        <span className="mb-2">
          {t("copy")}{" "}
          <span className="text-primary font-bold">{t("name")}</span>
        </span>
        <div className="flex mb-5 space-x-1">
          <Button variant={"ghost"} onClick={() => changeLanguage("pt")}>
            Português
          </Button>
          <Button variant={"ghost"} onClick={() => changeLanguage("en")}>
            English
          </Button>
        </div>
        <span className="opacity-50 pb-4">{t("update")}</span>
      </div>
    </div>
  );
}
