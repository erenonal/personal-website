import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const specificPageViews = [120, 85, 230, 152, 90, 71, 101, 50, 200, 44];
  const views =
    specificPageViews[
      allProjects.findIndex((p) => p.slug === slug) % specificPageViews.length
    ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless text-justify">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
