type Props = { size: "small" | "large" };

export default function Circle({ size }: Props) {
    if (size === 'large') {
        return (
          <svg
            width="688"
            height="344"
            viewBox="0 0 688 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="688" height="344" rx="172" fill="#D9D9D9" />
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
        <rect width="344" height="344" rx="172" fill="#D9D9D9" />
      </svg>
    );
}