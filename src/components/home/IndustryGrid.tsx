import { IndustryCard } from "@/components/ui/Cards";

type Item = {
  href: string;
  icon: string;
  title: string;
  tagline: string;
};

export function IndustryGrid({ items }: { items: Item[] }) {
  return (
    <>
      <style>{industrySlideCss}</style>
      <div className="industry-grid mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.href}
            className="industry-slide h-full"
            style={{ animationDelay: `${(i % 4) * 0.07}s` }}
          >
            <IndustryCard href={item.href} icon={item.icon} title={item.title} tagline={item.tagline} />
          </div>
        ))}
      </div>
    </>
  );
}

const industrySlideCss = `
.industry-grid .industry-slide {
  animation: industry-slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes industry-slide-up {
  from {
    opacity: 0;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@supports (animation-timeline: view()) {
  .industry-grid .industry-slide {
    animation-delay: 0s;
    animation-timeline: view();
    animation-range: entry 0% entry 42%;
  }
  .industry-grid .industry-slide:nth-child(4n + 2) {
    animation-range: entry 8% entry 50%;
  }
  .industry-grid .industry-slide:nth-child(4n + 3) {
    animation-range: entry 16% entry 58%;
  }
  .industry-grid .industry-slide:nth-child(4n + 4) {
    animation-range: entry 24% entry 66%;
  }
}
@media (prefers-reduced-motion: reduce) {
  .industry-grid .industry-slide {
    animation-duration: 0.28s;
  }
}
`;
