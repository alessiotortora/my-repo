import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface SectionItemProps {
  label: string;
  value: string;
  href?: string;
}

export function SectionItem({ label, value, href }: SectionItemProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 text-sm pl-4 md:pl-0">
      <span className="text-muted-foreground w-24 md:w-32 shrink-0">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-foreground hover:underline"
        >
          <span>{value}</span>
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      ) : (
        <span className="text-foreground">{value}</span>
      )}
    </div>
  );
}
