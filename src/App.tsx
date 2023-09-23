import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  const githubUrl = 'https://github.com/gadiegon';
  const linkedinUrl = 'https://www.linkedin.com/in/gadiego-nogueira';
  const emailUrl = 'mailto:ngadiego@gmail.com';
  const instagramUrl = 'https://www.instagram.com/gadiego_front/';
  const menuUrl = 'https://gadiegon.github.io/menu/';

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
        className="fixed end-1 text-primary"
      >
        {darkMode == true ? 
          <Sun className="h4 w-4" /> :
          <Moon className="h4 w-4" />
        }
      </Button>
      <div className=" mt-8 flex flex-col items-center">
        <img src="https://github.com/gadiegon.png" alt="" className="h-40 w-40 rounded-full border border-primary" />
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
        <span className="mb-10">Feito com ❤️ por Gadiego Nogueira</span>
      </div>
    </div>
  )
}
