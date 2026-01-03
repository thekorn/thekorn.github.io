import type { ParentComponent } from 'solid-js';

const ShellLine: ParentComponent = ({ children }) => {
  return (
    <p class="mb-2 text-(--color-accent)">
      <span class="text-(--color-accent-purple) mr-1">$</span>
      {children}
    </p>
  );
};

export default ShellLine;
