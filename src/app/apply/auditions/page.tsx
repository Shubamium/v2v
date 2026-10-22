import { fetchData, urlFor } from "../../services/db";
import AuditionContent, { type AuditionPageData } from "./AuditionContent";

type AuditionsDocument = {
  statusText?: string;
  mainVideo?: string;
  leftArt?: unknown;
  rightArt?: unknown;
  benefits?: { _key?: string; title?: string; description?: string }[];
  requirementsSectionArt?: unknown;
  requirements?: { _key?: string; title?: string; description?: string }[];
  faqSectionArt?: unknown;
  faq?: { _key?: string; question?: string; answer?: string }[];
  auditionApplyLink?: string;
  applyBackgroundArt?: unknown;
} | null;

export default async function AuditionPage() {
  const auditions = await fetchData<AuditionsDocument>(`
    *[_type == "auditions" && preset == "main"][0]{
      statusText,
      mainVideo,
      leftArt,
      rightArt,
      benefits[]{_key, title, description},
      requirementsSectionArt,
      requirements[]{_key, title, description},
      faqSectionArt,
      faq[]{_key, question, answer},
      auditionApplyLink,
      applyBackgroundArt
    }
  `);

  const pageData: AuditionPageData = {
    statusText: auditions?.statusText || "CLOSED",
    videoId: auditions?.mainVideo || "mc41FLYWPIQ",
    leftArt: auditions?.leftArt
      ? urlFor(auditions.leftArt).url()
      : "/g/char4.png",
    rightArt: auditions?.rightArt
      ? urlFor(auditions.rightArt).url()
      : "/g/char2.png",
    benefits: auditions?.benefits ?? [],
    requirements: auditions?.requirements ?? [],
    requirementsArt: auditions?.requirementsSectionArt
      ? urlFor(auditions.requirementsSectionArt).url()
      : "/g/char3.png",
    faq: auditions?.faq ?? [],
    faqArt: auditions?.faqSectionArt
      ? urlFor(auditions.faqSectionArt).url()
      : "/g/char4.png",
    applyLink: auditions?.auditionApplyLink || "/apply",
    applyBackgroundArt: auditions?.applyBackgroundArt
      ? urlFor(auditions.applyBackgroundArt).url()
      : "/g/art1.png",
  };

  return <AuditionContent data={pageData} />;
}
