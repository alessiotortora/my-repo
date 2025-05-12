import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";
import { Badge } from "@repo/ui/components/badge";
import Link from "next/link";

export function Header({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-row gap-4 items-center mb-8 md:mb-12">
      <Avatar className="size-20 md:size-24 hover:animate-spin">
        <AvatarImage src="https://github.com/alessiotortora.png" />
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col items-start">
          <Link href="/" className="font-medium inline-block text-base">
            <h1>{title}</h1>
          </Link>
          <span className="text-sm leading-none font-light">{description}</span>
        </div>

        <div className="flex flex-row gap-2 wrap">
          <Badge variant="secondary">
            <Link href="https://www.alessiotortora.com/">alessiotortora.com</Link>
          </Badge>
          <Badge variant="default" icon={<EnvelopeClosedIcon />}>
            <Link href="mailto:hello@alessiotortora.com">contact me</Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}
