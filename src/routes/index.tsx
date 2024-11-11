import { A } from "@solidjs/router";
import { For } from "solid-js";

export default function Home() {
  const links = [
    "https://github.com/thekorn",
    "https://www.linkedin.com/in/markuskorn/",
  ];
  return (
    <main class="mt-1 flex-auto">
      <h1 class="max-6 text-6xl font-bold uppercase my-16">thekorn.dev</h1>
      <section class="flex flex-col sm:flex-row gap-6 sm:gap-3">
        <div class="font-medium">
          <p class="mb-1">
            Welcome to my personal website. I'm a software engineer and I love
            building things for the web.
          </p>
          <p>
            Connect with me on{" "}
            <a
              class="underline"
              target="_blank"
              rel="noreferrer"
              href="mailto:contact@thekorn.dev"
            >
              contact@thekorn.dev
            </a>
          </p>
        </div>
        <ul class="sm:mt-3 text-slate-600 dark:text-slate-200 text-base sm:text-sm leading-1">
          <For each={links}>
            {(link) => (
              <li class="list-square hover:text-black dark:hover:text-white ml-2 ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                  class="underline"
                >
                  {link}
                </a>
              </li>
            )}
          </For>
        </ul>
      </section>
    </main>
  );
}
