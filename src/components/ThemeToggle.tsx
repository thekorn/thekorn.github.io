import { createSignal, onMount, Show } from 'solid-js';
import { splitProps } from 'solid-js';
import Icon from './Icon';

type Theme = 'dark' | 'light';

interface ThemeToggleProps {
  class?: string;
}

const ThemeToggle = (props: ThemeToggleProps) => {
  const [local, others] = splitProps(props, ['class']);
  const [theme, setTheme] = createSignal<Theme>('dark');

  const toggleTheme = () => {
    const newTheme = theme() === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  });

  return (
    <button
      onClick={toggleTheme}
      class={`p-1.5 rounded cursor-pointer transition-colors hover:bg-(--color-bg-dimmer) ${local.class}`}
      aria-label={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
      {...others}
    >
      <Show
        when={theme() === 'dark'}
        fallback={<Icon name="Sun" class="w-4 h-4 text-[var(--color-fg)]" />}
      >
        <Icon name="Moon" class="w-4 h-4 text-[var(--color-fg)]" />
      </Show>
    </button>
  );
};

export default ThemeToggle;
