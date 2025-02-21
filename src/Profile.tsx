import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const profileData = {
  avatar: "https://via.placeholder.com/150", // 임시 프로필 이미지
  name: "Seongwon Kim",
  job: "Frontend Developer",
  email: "seongwon@example.com",
  blog: "https://seongwon.dev",
  github: "https://github.com/seongwon",
  linkedin: "https://linkedin.com/in/seongwon",
  education: "B.S. in Computer Science",
};

const Profile: React.FC = () => {
  return (
    <div className="flex p-6">
      <div className="w-full max-w-sm bg-white text-black shadow-lg rounded-lg p-6 border border-gray-200">
        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
            <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-semibold mt-4">{profileData.name}</h2>
          <p className="text-sm text-gray-500">{profileData.job}</p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* 프로필 정보 */}
        <div className="text-sm space-y-2">
          <p>
            <span className="font-medium text-gray-700">Email:</span> {profileData.email}
          </p>
          <p>
            <span className="font-medium text-gray-700">Education:</span> {profileData.education}
          </p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* 링크 버튼 */}
        <div className="flex flex-col gap-3">
          <a
            href={profileData.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md shadow-md"
          >
            <FaGlobe className="text-lg" /> Visit Blog
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition px-4 py-2 rounded-md shadow-md"
          >
            <FaGithub className="text-lg" /> View GitHub
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition px-4 py-2 rounded-md shadow-md"
          >
            <FaLinkedin className="text-lg" /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
