import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { existsSync } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = (
    await readMdFile(getPublicPath(`md/projects/${params.slug}.mdx`)).catch(
      (e) => console.error(e),
    )
  )?.frontmatter.title;
  return {
    title: title ? `${title} | Projects` : "Project Not Found",
  };
}
export default async function Page({ params }: Props) {
  const file = getPublicPath(`md/projects/${params.slug}.mdx`);

  if (!existsSync(file))
    return (
      <p className="text-center w-full mt-20 text-4xl">Project not Found</p>
    );

  const project = await readMdFile(file);

  const matter = projectMatterSchema.parse(project.frontmatter);
  return (
    <article className="max-w-3xl mx-auto px-4 mt-4 sm:mt-20 flex flex-col gap-3 text-lg">
      <h1 className="text-4xl sm:text-5xl font-bold">{matter.title}</h1>
      <p>{matter.summary}</p>
      <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
        {matter.skills.map((skill) => (
          <li key={skill}>
            <Badge variant="outline" className="bg-muted text-sm sm:text-lg">
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
      <Image
        width={720}
        height={480}
        priority
        className="rounded-md w-full mx-auto"
        sizes="(max-width: 768px) 100vw, 70vw"
        src={matter.largeCover}
        alt="project's home page"
      />
      <div className="p-10 max-w-full prose-lg prose prose-h2:text-3xl sm:prose-h2:text-4xl prose-img:rounded-sm dark:prose-invert prose-p:text-foreground">
        <MDXRemote {...project} />
      </div>
    </article>
  );
}
