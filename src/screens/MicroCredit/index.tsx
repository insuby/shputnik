import { AnalyticsSection } from "./sections/AnalyticsSection";
import { ClientWorkSection } from "./sections/ClientWorkSection";
import { EmployeeWorkSection } from "./sections/EmployeeWorkSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { IntegrationSection } from "./sections/IntegrationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ReportingSection } from "./sections/ReportingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TrustSection } from "./sections/TrustSection";
import { HeroSection } from './sections/HeroSection.tsx';

export const MicroCredit = () => {
  return (
    <main className="flex flex-col items-start gap-6 p-6 relative bg-white">
      <HeroSection/>
      <MainContentSection />
      <ClientWorkSection />
      <FeaturesSection />
      <OverviewSection />
      <AnalyticsSection />
      <EmployeeWorkSection />
      <IntegrationSection />
      <ReportingSection />
      <TrustSection />
      <ServicesSection />
    </main>
  );
};
