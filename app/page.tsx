import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import KeyIssuesSection from "@/components/home/KeyIssuesSection";
import TimelineSection from "@/components/home/TimelineSection";
import ImpactStats from "@/components/home/ImpactStats";
import WorkshopHighlight from "@/components/home/WorkshopHighlight";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import PublicationsPreview from "@/components/home/PublicationsPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <KeyIssuesSection />
      <ImpactStats />
      <TimelineSection />
      <WorkshopHighlight />
      <LeadershipPreview />
      <PublicationsPreview />
      <CTASection />
    </>
  );
}
