import { Profile } from "../ResumeTypes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SidebarProps {
  profile: Profile;
}

const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
  return (
    <aside className="w-full md:w-72 border h-full p-6 rounded-lg">
      {/* 연락처 정보 */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-2">Contact</h2>
        <p>Email: {profile.basic_info.contact.email}</p>
        <p>Phone: {profile.basic_info.contact.phone}</p>
        <div className="mt-2 space-y-1">
          <p className="flex items-center gap-2">
            <FaGithub className="inline-block" />
            <a href={profile.basic_info.github} className="text-blue-500 hover:underline">{profile.basic_info.github}</a>
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="inline-block" />
            <a href={profile.basic_info.linkedin} className="text-blue-500 hover:underline">{profile.basic_info.linkedin}</a>
          </p>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-2">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(profile.tech_stack).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {items.map((item: string, idx: number) => (
                  <span key={idx} className="badge badge-primary badge-outline">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 학력 */}
      <section>
        <h2 className="text-lg font-semibold border-b pb-2 mb-2">Education</h2>
        <p className="font-medium">{profile.education.university}</p>
        <p className="text-gray-500">
          {profile.education.major} {profile.education.double_major ? `/ ${profile.education.double_major}` : ""}
        </p>
        <p>GPA: {profile.education.gpa}</p>
        <p className="text-gray-500">{profile.education.period}</p>
      </section>
    </aside>
  );
};

export default Sidebar;
