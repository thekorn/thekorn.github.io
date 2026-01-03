import { splitProps, type Component, type JSX } from 'solid-js';

interface CTAButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: Component<{ class?: string }>;
  hoverColor?: 'blue' | 'purple';
}

const CTAButton: Component<CTAButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['icon', 'hoverColor', 'children']);

  const hoverClass = () =>
    local.hoverColor === 'purple'
      ? 'hover:border-(--color-accent-purple) hover:text-(--color-accent-purple)'
      : 'hover:border-(--color-accent-blue) hover:text-(--color-accent-blue)';

  return (
    <a
      class={`inline-flex items-center gap-2 px-4 py-2 bg-(--color-bg-dim) border border-(--color-border) rounded text-sm text-(--color-fg) no-underline transition-all duration-150 ${hoverClass()}`}
      {...others}
    >
      <local.icon class="w-4 h-4" />
      <span class="text-(--color-fg-dim)">{local.children}</span>
    </a>
  );
};

export default CTAButton;
