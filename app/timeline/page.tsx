import type { Metadata } from "next";
import SiteHeader from "@/components/Navigation/SiteHeader";
import Timeline from "@/components/Timeline/timeline";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <main
      className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black font-sans text-white"
      data-layout-shell="figma"
    >
      <div
        data-timeline-header="compact-edge"
        data-timeline-nav-size="uniform"
        className="contents min-[900px]:[&>header]:h-[4.5rem] min-[900px]:[&>header]:p-0 min-[900px]:[&>header_nav]:px-0 min-[900px]:[&>header_nav>div>a>div]:!h-5"
      >
        <SiteHeader />
      </div>
      <div className="absolute inset-0">
        <Timeline />
      </div>
    </main>
  );
}
