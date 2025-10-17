

// // component/Pages/WorkDetail.jsx
import { useParams } from "react-router-dom";

import WorksData from "./WorksData";
import { HeroSection } from "../HeroSection";
import { OverviewSection } from "../Overview";
import { ServicesProvided } from "../ServicesProvided";
import { ChallengeSection } from "../Challenge";
import { ApproachSection } from "../Approach";
import { Strategic } from "../KeyStrategy";
import { CuriousSection } from "../CuriousAbout";
import { CaseStudiesSections } from "../OtherCaseStudy";
import { Sidebar } from "../Sidebar";
import Contact from "../Contact";



const WorkDetail = () => {
  
const { companyName } = useParams();
console.log("companyName from URL:", companyName); // ✅ Debug this
const company = WorksData.find((item) => item.slug === companyName);

  if (!company) return <div className="p-10">Company not found</div>;

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section: Full Width on Top */}
      <HeroSection data={company.heroSection} />

      {/* Content Section: Sidebar Left, Main Right */}
      <div className="flex flex-col lg:flex-row mt-8 px-4 bg-gray-50 lg:px-12 gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-1/4">
          <Sidebar sections={[
            "Overview",
            "Services Provided",
            "Challenge",
            "Approach",
            "Key Strategy",
            "Curious About Our Approach",
          ]} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          <OverviewSection data={company.overview} />
          <ServicesProvided data={company.servicesProvided} />
          <ChallengeSection data={company.challenge} />
          <ApproachSection data={company.approach} />
          <Strategic data={company.keyStrategies} />
          <CuriousSection data={company.cta} />
          
        </main>
        
      </div>
          <Contact />
          <CaseStudiesSections data={company.otherCaseStudies} />
    </div>
  );
}

export default WorkDetail;


