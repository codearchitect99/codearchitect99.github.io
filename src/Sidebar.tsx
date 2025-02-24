import { Profile } from "./ResumeTypes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SidebarProps {
  profile: Profile;
}

const Sidebar: React.FC<SidebarProps> = ({profile}) => {
    return (
        <div className="border h-full w-full flex flex-col">
            {/* 연락처 정보 */}
            <div className="space-y-1">
              <p>Email: {profile.basic_info.contact.email}</p>
              <p>Phone: {profile.basic_info.contact.phone}</p>
              <p>
                <FaGithub className="inline-block mr-2" />
                <a href={profile.basic_info.github} className="text-blue-500">{profile.basic_info.github}</a>
              </p>
              <p>
                <FaLinkedin className="inline-block mr-2" />
                <a href={profile.basic_info.linkedin} className="text-blue-500">{profile.basic_info.linkedin}</a>
              </p>
            </div>
        </div>
    )
}

export default Sidebar;