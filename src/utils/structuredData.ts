import type { CollectionEntry } from "astro:content";
import type { Article, Person, WebSite, WithContext } from "schema-dts";
import avatar from "../../public/thekorn.png";

export const blogWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${import.meta.env.SITE}/`,
  name: "thekorn.dev",
  description: "Personal blog of Markus Korn",
  inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: import.meta.env.SITE,
  name: "Markus Korn - Personal page",
  description: "Markus Korn's contact page, portfolio and blog",
  inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Markus Korn",
  url: "https://www.thekorn.dev",
  image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    "https://github.com/thekorn",
    "https://www.linkedin.com/in/markuskorn/",
    // todo: add instagram
  ],
  jobTitle: "Principal Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "BurdaForward GmbH",
    url: "https://www.burda-forward.de",
  },
};

export function getArticleSchema(post: CollectionEntry<"blog">) {
  const articleStructuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    url: `${import.meta.env.SITE}/blog/${post.slug}/`,
    //image: {
    //  '@type': 'ImageObject',
    //  url: `${import.meta.env.SITE}${post.data.cover.src}/`,
    //},
    description: post.data.title,
    datePublished: post.data.pubDate.toString(),
    publisher: {
      "@type": "Person",
      name: "Markus Korn",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
    author: {
      "@type": "Person",
      name: "Markus Korn",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
  };
  return articleStructuredData;
}
