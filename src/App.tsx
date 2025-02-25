import React, { useEffect, useState } from "react";
import Contents from "./component/Contents";
import Sidebar from "./component/Sidebar";
import { Profile, UserProfile } from "./ResumeTypes";
import resumeData from "./resume.json";
import ControlPanel from "./component/ControlPanel";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"ko" | "en">("en");
  const data: UserProfile = resumeData;
  const profile: Profile = data[lang];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex flex-col min-h-screen items-center py-6 transition-colors ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Control Panel */}
      <div className="w-full max-w-screen-lg flex justify-end px-4">
        <ControlPanel theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      </div>

      {/* 메인 레이아웃 */}
      <div className="flex flex-col md:flex-row max-w-screen-lg w-full gap-6 mt-6 px-4">
        {/* 사이드바 */}
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Sidebar profile={profile} />
        </aside>

        {/* 콘텐츠 영역 */}
        <main className="w-full md:w-2/3 lg:w-3/4">
          <Contents profile={profile} />
        </main>
      </div>
    </div>
  );
};

export default App;
