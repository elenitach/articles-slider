type Props = { size: "small" | "large" };

export default function LeafLTRB({ size }: Props) {
  if (size === "large") {
    return (
      <svg
        width="688"
        height="344"
        viewBox="0 0 688 344"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M468 -0.000488281C589.503 -0.000488281 688 98.4969 688 219.999V343.999L344 343.999H220C98.4977 343.999 0.000285149 245.502 0.000285149 124V-0.000488281L344 -0.000488281L468 -0.000488281Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  }
  return (
    <svg
      width="344"
      height="344"
      viewBox="0 0 344 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H115C241.473 0 344 102.527 344 229V344H229C102.527 344 0 241.473 0 115V0Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
