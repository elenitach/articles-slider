type Props = { size: "small" | "large" };

export default function RoundCornersSquare({ size }: Props) {
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
          d="M120 0C53.7258 0 0 53.7258 0 120V344H344H568C634.274 344 688 290.274 688 224V0H344H120Z"
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
        d="M0 120C0 53.7258 53.7258 0 120 0H344V224C344 290.274 290.274 344 224 344H0V120Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
