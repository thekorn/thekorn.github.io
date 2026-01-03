const ColorBox = (props: { color: string }) => {
  return (
    <span
      class="before:h-4 before:aspect-square before:bg-(--color) before:mr-2 before:inline-block before:align-middle before:border before:border-(--tw-prose-body)"
      style={`--color:${props.color}`}
    >
      {props.color}
    </span>
  );
};

export default ColorBox;
