type Props = { size: "small" | "large" };

export default function LeafRTLB({ size }: Props) {
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
          d="M220 0C98.4973 0 0 98.4974 0 220V344H344H468C589.503 344 688 245.503 688 124V0H344H220Z"
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
        d="M0 220C0 98.4974 98.4974 0 220 0H344V124C344 245.503 245.503 344 124 344H0V220Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
