import { ClientLogosSection } from "./sections/ClientLogosSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { StatisticsSection } from "./sections/StatisticsSection";

export const About = () => {
  return (
    <main className="flex flex-col w-full bg-white max-w-[1440px] m-auto">
      <StatisticsSection />
      <ClientLogosSection />
      <ContactInfoSection />
    </main>
  );
};
