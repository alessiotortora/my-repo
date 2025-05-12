import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => <h1 className="font-medium pt-12 mb-5" {...props} />,
  h2: (props: HeadingProps) => (
    <h2 className="font-medium text-[0.875rem] md:text-[] mt-8 mb-3" {...props} />
  ),
  h3: (props: HeadingProps) => <h3 className="font-medium text-[0.875rem] mt-8 mb-3" {...props} />,
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => <p className="leading-snug" {...props} />,
  ol: (props: ListProps) => <ol className="list-decimal pl-5 space-y-2" {...props} />,
  ul: (props: ListProps) => <ul className="list-disc pl-5 space-y-1" {...props} />,
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-normal" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-normal" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "underline-offset-4 underline decoration-dashed";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },

  blockquote: (props: BlockquoteProps) => (
    <blockquote className="ml-[0.075em] border-l-3 border-gray-300 pl-4" {...props} />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
