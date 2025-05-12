import Link from "next/link";

export function ProjectSection() {
  const projects = [
    {
      label: "Projects",
      description: "A mix of things I’ve built and ongoing work",
      href: "/building/projects",
    },
    {
      label: "Animations",
      description:
        "Currently exploring animations to create smoother, more intuitive user experiences",
      href: "/building/animations",
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-10 md:mt-16">
      <h2 className="font-medium text-[0.940rem] md:text-[0.985rem]">
        What I’ve Built & What I’m Exploring
      </h2>
      <div className="flex gap-2 flex-col">
        {projects.map((project) => (
          <Link
            key={project.label}
            href={project.href}
            className="hover:bg-muted-foreground/10 rounded-md -mx-2 p-2"
          >
            <div className="flex flex-col gap-0">
              <p className="font-normal">{project.label}</p>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
