import "./styles/Career.css";

const careerItems = [
  {
    role: "Software Developer",
    organization: "SoftwareEra Technology",
    period: "NOW",
    details:
      "Jul 2025–Present · Pune. Built a leave-management module that reduced manual errors by 30% and approval turnaround by 20%. Delivered a responsive React and Tailwind interface, lowering bounce rate by 15%, and Node.js/Express microservices for employee onboarding handling 2,500+ daily requests while reducing response time by 25%.",
  },
  {
    role: "Jr. Software Developer",
    organization: "ThinkQuotient Software Pvt. Ltd.",
    period: "2023 — 25",
    details:
      "Jun 2023–Jan 2025 · Pune. Developed an Aadhaar-based eSign platform with Java and Spring Boot, supporting 10,000+ daily transactions at 99.9% uptime. Implemented LDAP authentication with Spring Security, reducing authentication issues by 30%, optimized MySQL queries by 40%, and built React components integrated with REST APIs.",
  },
  {
    role: "Bachelor of Engineering",
    organization: "AISSMS College of Engineering",
    period: "2022",
    details: "Aug 2022 · Pune · 7.78/10",
  },
  {
    role: "Full Stack Web Development",
    organization: "Apna College · Certification",
    period: "2022",
    details: "Aug 2022 · Pune",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerItems.map((item) => (
            <div className="career-info-box" key={item.organization}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.organization}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
