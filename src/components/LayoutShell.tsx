import type { ParentComponent } from 'solid-js';
import ThemeToggle from './ThemeToggle';

const LayoutShell: ParentComponent<{ path: string }> = ({ path, children }) => {
  return (
    <div class="bg-(--color-bg-dim) border border-(--color-border) rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div class="bg-(--color-bg-dimmer) px-4 py-2.5 flex items-center gap-2 border-b border-(--color-border)">
        <span class="w-3 h-3 rounded-full bg-[#cc241d]"></span>
        <span class="w-3 h-3 rounded-full bg-[#d79921]"></span>
        <span class="w-3 h-3 rounded-full bg-[#98971a]"></span>
        <span class="ml-auto flex items-center gap-3 text-xs text-(--color-fg-dim)">
          <ThemeToggle client:load />
          <span>thekorn.dev: {path}</span>
        </span>
      </div>
      {children}
    </div>
  );
};

export default LayoutShell;
