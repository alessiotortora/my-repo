import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export function Header({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-start mb-8 md:mb-12">
      <ViewTransition>
        <Link href="/" className="font-medium inline-block text-base">
          <h1>{title}</h1>
        </Link>
      </ViewTransition>
      <span className="text-sm leading-none font-light">{description}</span>
    </div>
  );
}
