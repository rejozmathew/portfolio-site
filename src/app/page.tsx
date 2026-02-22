// Import the Client Component wrapper that now handles all sections
import ClientSections from "@/components/ClientSections";
import { getPortfolioData } from "@/lib/getPortfolioData";

export default function Home() {
  const portfolioProjects = getPortfolioData();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Render the single Client Component which orchestrates sections and animations */}
      <ClientSections portfolioProjects={portfolioProjects} />
    </main>
  );
}
