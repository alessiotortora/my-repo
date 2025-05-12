import Link from "next/link";

export function WritingSection() {
  const writings = [
    {
      label: "My Stack",
      description: "A list of my favorite tools and technologies",
      href: "/writing/stack",
    },
    {
      label: "Rise of AI",
      description: "A collection of my thoughts on the rise of AI",
      href: "/writing/ai",
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-8 md:mt-14">
      <h2 className="font-medium text-[0.940rem] md:text-[0.985rem]">Writing</h2>
      <div className="flex gap-2 flex-col">
        {writings.map((writing) => (
          <Link
            key={writing.label}
            href={writing.href}
            className="hover:bg-muted-foreground/5 rounded-md -mx-2 p-2"
          >
            <div className="flex flex-col gap-0">
              <p className="font-normal">{writing.label}</p>
              <p>{writing.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
