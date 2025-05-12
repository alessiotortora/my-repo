import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type { CVData, EducationEntry, TimelineEntry } from "../../types/cv";
import { Section } from "./section";
import { SectionItem } from "./section-item";
import { TimelineItem } from "./timeline-item";

import cvData from "../../data/cv.json";

export function Profile({ data = cvData }: { data?: CVData }) {
  return (
    <div className="space-y-12">
      <Section title="About">
        <div className="pl-4 md:pl-0 space-y-4">
          {(() => {
            const [firstPart, ...rest] = data.about.summary.split(/\. /);
            return [<p key="first">{firstPart}.</p>, <p key="second">{rest.join(". ")}</p>];
          })()}
        </div>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        {data.languages.map(({ language, level }) => (
          <SectionItem key={language} label={language} value={level} />
        ))}
      </Section>

      <Section title="Soft Skills">
        {Object.entries(data.soft).map(([key, value]) => (
          <SectionItem key={key} label={key} value={value} />
        ))}
      </Section>
      {/* Skills */}
      <Section title="Skills">
        <ul className="flex flex-wrap gap-2 text-sm text-foreground pl-4 md:pl-0">
          {data.skills.map((skill) => (
            <li key={skill} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Projects">
        <p className="pl-4 md:pl-0">
          {data.projects.summary.replace("Website.", "")}{" "}
          <a href={data.projects.link} className="hover:underline inline-flex items-center gap-1">
            website
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </p>
      </Section>

      {/* Experience and Volunteering */}
      {[
        { key: "experience" as const, title: "Experience" },
        { key: "volunteering" as const, title: "Volunteering" },
      ].map(({ key, title }) => (
        <Section title={title} key={key}>
          {data[key].map((item: TimelineEntry) => (
            <TimelineItem
              key={item.period + item.role}
              period={item.period}
              title={item.role}
              subtitle={item.location}
              href={item.link}
              details={item.details}
            />
          ))}
        </Section>
      ))}

      {/* Education */}
      <Section title="Education">
        {data.education.map((item: EducationEntry) => (
          <TimelineItem
            key={item.period + item.school}
            period={item.period}
            title={item.degree}
            subtitle={item.school}
            href={item.link}
          />
        ))}
      </Section>

      {/* Contact */}
      <Section title="Contact">
        {Object.entries(data.contact).map(([label, handle]) => {
          let url: string;
          switch (label) {
            case "x":
              url = `https://x.com/${handle.replace(/^@/, "")}`;
              break;
            case "github":
              url = `https://github.com/${handle}`;
              break;
            case "linkedin":
              url = `https://linkedin.com/in/${handle}`;
              break;
            default:
              url = `https://${handle}`;
          }
          return <SectionItem key={label} label={capitalize(label)} value={handle} href={url} />;
        })}
      </Section>
    </div>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
