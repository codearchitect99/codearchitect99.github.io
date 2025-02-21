import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

const data = {
  techStack: [
    { name: "Java 21 & Spring Boot 3.3", description: "최신 Java 기능 활용, 대규모 트래픽 처리 경험" },
    { name: "MariaDB & JPA(Hibernate)", description: "복잡한 쿼리 최적화 및 성능 튜닝 경험" },
    { name: "AWS & Docker", description: "EC2, RDS, S3 등을 활용한 배포 및 운영 경험" },
    { name: "CI/CD", description: "GitHub Actions 및 CircleCI를 활용한 배포 자동화" },
    { name: "Testing", description: "JUnit 및 Testcontainers를 이용한 통합 테스트 구축" }
  ],
  projects: [
    { name: "Taskory", description: "개인 일정 및 태스크 관리 웹 애플리케이션", details: "AWS Lambda와 WebSocket을 활용하여 실시간 업데이트 기능을 구현" },
    { name: "BattleCMD", description: "LoL 전적 분석 및 챔피언 매칭 서비스", details: "Kafka를 활용한 비동기 이벤트 처리 및 데이터 스트리밍 구현" }
  ]
};

const Contents = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 p-6">
      {/* Hero Section */}
      <section className="w-full text-center py-16 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold">Seongwon's Portfolio</h1>
        <p className="mt-2 text-gray-600">Backend Developer | Java | Spring Boot | AWS</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
          </a>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="w-full my-10">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <ul className="mt-4 space-y-2">
          {data.techStack.map((tech, index) => (
            <li key={index}>🛠 <b>{tech.name}:</b> {tech.description}</li>
          ))}
        </ul>
      </section>

      {/* 프로젝트 */}
      <section className="w-full my-10">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-4 space-y-4">
          {data.projects.map((project, index) => (
            <div key={index} className="w-full p-4 border rounded-lg border-gray-300">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="mt-2 text-sm">{project.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contents;
