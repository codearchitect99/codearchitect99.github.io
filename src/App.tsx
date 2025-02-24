import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import Sidebar from "./Sidebar";
import { Profile, UserProfile } from "./ResumeTypes";
import resumeData from "./resume.json";
import Panel from "./Panel";


const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"ko" | "en">("en");
  const data: UserProfile = resumeData;
  const profile: Profile = data[lang];

  useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-4">
      <div className="w-full flex justify-end">
        <Panel theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      </div>
      <div className="flex">
        <div>
          <Sidebar profile={profile}/>
        </div>
        <div>
          <Contents profile={profile}/>
        </div>
      </div>
    </div>
  );
};

export default App;
