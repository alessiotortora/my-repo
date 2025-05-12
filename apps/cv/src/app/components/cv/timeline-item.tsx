interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  href?: string;
  details?: string[];
}

export function TimelineItem({ period, title, subtitle, href, details }: TimelineItemProps) {
  return (
    <div className="text-sm flex flex-col md:flex-row md:gap-4 pl-4 md:pl-0">
      <p className="text-muted-foreground w-24 md:w-32 shrink-0">{period}</p>
      <div className="flex-2">
        <p className="font-medium">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </p>
        <p className="text-muted-foreground">{subtitle}</p>
        {details && details.length > 0 && (
          <ul className="mt-2 list-disc list-inside mb-5">
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
