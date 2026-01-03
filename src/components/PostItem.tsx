import { Show } from 'solid-js';
import type { CollectionEntry } from 'astro:content';
import Icon from './Icon';

interface PostItemProps {
  post: CollectionEntry<'blog'>;
}

const PostItem = (props: PostItemProps) => {
  const formattedDate = () =>
    props.post.data.pubDate.toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  const formattedTime = () =>
    props.post.data.pubDate.toLocaleTimeString('en-gb', {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <li class="mb-2">
      <a
        href={`/blog/${props.post.slug}/`}
        class="flex items-center gap-3 p-3 bg-(--color-bg) border border-transparent rounded text-no-underline transition-all duration-150 hover:border-(--color-accent) hover:bg-(--color-bg-dim)"
      >
        <span class="text-gruvbox-yellow">thekorn</span>
        <span class="text-sm text-gruvbox-blue">
          {formattedDate()} {formattedTime()}
        </span>
        <Show when={props.post.data.icon}>
          {/* @ts-expect-error fixme */}
          <Icon name={props.post.data.icon} size={16} />
        </Show>
        <span class="flex-1 text-(--color-fg1)">{props.post.data.title}</span>
      </a>
    </li>
  );
};

export default PostItem;
