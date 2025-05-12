import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";

const links = [
  { label: "Email", href: "mailto:hello@alessiotortora.com" },
  { label: "CV", href: "https://cv.alessiotortora.com" },
  { label: "GitHub", href: "https://github.com/alessiotortora" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alessiotortora" },
  { label: "X", href: "https://x.com/alessiotortora_" },
];

export function LinkSection() {
  return (
    <div className="flex flex-col gap-3 mt-8 md:mt-14">
      <h2 className="text-[0.940rem] md:text-[0.985rem] font-medium">Let's get in touch</h2>
      <div className="flex items-center gap-3 flex-wrap">
        {links.map((link) => (
          <Button
            key={link.label}
            variant="link"
            icon={<ArrowTopRightIcon className="size-4" />}
            className="font-light"
          >
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
