import { notFound } from "next/navigation";
import ClientSections from "@/components/ClientSections";
import { getPortfolioData } from "@/lib/getPortfolioData";

const sectionIds = [
  "about",
  "expertise",
  "experience",
  "portfolio",
  "education",
  "certifications",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

function isSectionId(value: string): value is SectionId {
  return sectionIds.includes(value as SectionId);
}

export function generateStaticParams() {
  return sectionIds.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!isSectionId(section)) {
    notFound();
  }

  const portfolioProjects = getPortfolioData();

  return (
    <main className="flex min-h-screen flex-col">
      <ClientSections portfolioProjects={portfolioProjects} initialSectionId={section} />
    </main>
  );
}
