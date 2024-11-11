import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="">
      <ul class="container flex items-center p-3">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
}
