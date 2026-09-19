import {
  A,
  Blockquote,
  Code,
  CodeBlock,
  H1,
  H2,
  H3,
  H4,
  HR,
  Image,
  LI,
  OL,
  P,
  Source,
  Strong,
  UL,
} from "@/components/ui/md";
import { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
export async function readMdFile(filePath: string) {
  const fileContents = readFileSync(filePath, "utf8");
  const mdxSource = await serialize(fileContents, { parseFrontmatter: true });

  return mdxSource;
}

/**
 * The same map as the MDXProvider's, rebuilt here from named imports.
 *
 * A server component may pass client components along, but it may not read
 * properties off a client module — and MDX dots into this object to look for a
 * `wrapper`, so the default export can't be handed over as-is.
 */
const components = {
  img: Image,
  Image,
  Source,
  p: P,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  hr: HR,
  code: Code,
  Code,
  pre: CodeBlock,
};

/**
 * Compiles an MDX file into a renderable server component.
 *
 * The App Router needs `next-mdx-remote/rsc`: the client `MDXRemote` fails to
 * resolve through the server boundary and takes the whole page down with it.
 */
export async function readMdContent(filePath: string) {
  const source = readFileSync(filePath, "utf8");
  return compileMDX<Record<string, unknown>>({
    source,
    components: components as never,
    options: { parseFrontmatter: true },
  });
}
