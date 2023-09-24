import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "./lib/i18n";


export function App() {
  const [darkMode, setDarkMode] = useState(true);

  const githubUrl = 'https://github.com/gadiegon';
  const linkedinUrl = 'https://www.linkedin.com/in/gadiego-nogueira';
  const emailUrl = 'mailto:ngadiego@gmail.com';
  const instagramUrl = 'https://www.instagram.com/gadiego_front/';
  const menuUrl = 'https://gadiegon.github.io/menu/';

  const { t } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

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
        onClick={() => setDarkMode(!darkMode)}
        className="fixed end-4 top-4 flex lg:end-auto lg:start-auto lg:ml-80 text-primary"
      >
        {darkMode == true ? 
          <Sun className="h4 w-4" /> :
          <Moon className="h4 w-4" />
        }
      </Button>
      <div className=" mt-8 flex flex-col items-center">
        <img src="https://github.com/gadiegon.png" alt="" className="h-40 w-40 rounded-full border border-primary" />
        <h1 className="font-bold text-2xl mt-4 text-secondary-foreground">{t('name')}</h1>
        <span className="text-base text-primary">{t('title')}</span>

        <div className="mt-8 h-screen space-y-5 w-80">
          <Button
            onClick={() => window.open(githubUrl, '_blank')}
            className="w-full h-12 text-foreground"
          >
            Github
          </Button>
          <Button
            onClick={() => window.open(linkedinUrl, '_blank')}
            className="w-full h-12 text-foreground"
          >
            Linkedin
          </Button>
          <Button
            onClick={() => window.open(instagramUrl, '_blank')}
            className="w-full h-12 text-foreground"
          >
            Instagram
          </Button>
          <Button
            onClick={() => window.open(emailUrl, '_blank')}
            className="w-full h-12 text-foreground"
          >
            E-mail
          </Button>
          <Button
            onClick={() => window.open(menuUrl, '_blank')}
            className="w-full h-12 text-foreground"
          >
            Cardápio Online
          </Button>
        </div>
        <span className="mb-2">{t('copy')} <span className="text-primary font-bold">{t('name')}</span></span>
        <div className="flex mb-5 space-x-1">
          <Button variant={"ghost"} onClick={() => changeLanguage('pt')}>Portugues</Button>
          <Button variant={"ghost"} onClick={() => changeLanguage('en')}>English</Button>
        </div>
      </div>
    </div>
  )
}
