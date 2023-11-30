import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { readdirSync } from "fs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Islam Naasani",
};
export default async function Page() {
  const files = readdirSync(getPublicPath("md/projects"), "utf8");
  const projects = (
    await Promise.all(
      files.map((file) => readMdFile(getPublicPath(`md/projects/${file}`))),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .sort((a, b) => a.rank - b.rank);
  return (
    <>
      <h1 className="text-5xl pt-32 text-center">Projects</h1>
      <p className="text-center text-lg p-1">
        Projects I&apos;ve worked on, either for work, university or personal.
      </p>
      <div className="flex flex-col gap-3 max-w-xl mx-auto p-8">
        {projects.map((project) => (
          <Card key={project.slug} className="bg-card/70">
            <Link
              href={`/projects/${project.slug}`}
              className="p-5 flex flex-col gap-1"
            >
              <h3 className="font-bold text-2xl">{project.title}</h3>
              <div className="relative h-60 my-2">
                <Image
                  src={project.smallCover}
                  className="object-contain"
                  fill
                  alt="project logo"
                />
              </div>
              <p className="text-lg">{project.summary}</p>
              <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
                {project.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="outline" className="bg-muted">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
