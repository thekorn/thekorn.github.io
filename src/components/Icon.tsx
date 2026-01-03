import { icons, type LucideProps } from 'lucide-solid';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export type LucidIconNames = keyof typeof icons;

interface IconProps extends LucideProps {
  name: LucidIconNames;
}

export const isLucidIcon = (name: string): name is LucidIconNames => name in icons;

const Icon = (props: IconProps) => {
  const [local, others] = splitProps(props, ['name']);

  return <Dynamic component={icons[local.name]} {...others} />;
};

export default Icon;
