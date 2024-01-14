import clsx from "clsx";
import styles from "./Arrow.module.css";

type Props = {
  size: "small" | "large";
  direction: "left" | "right";
};

export default function Arrow({ size, direction }: Props) {
  if (size === "large") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="23"
        viewBox="0 0 173 23"
        fill="none"
        className={clsx({ [styles.leftArrow]: direction === "left" })}
      >
        <rect
          width="172"
          height="2.99998"
          transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 10)"
          fill="currentColor"
        />
        <path
          d="M161 0V0C161 6.07513 165.925 11 172 11L173 11"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M161 23V23C161 16.9249 165.925 12 172 12L173 12"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx({ [styles.leftArrow]: direction === "left" })}
    >
      <rect
        width="24"
        height="3.13043"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 10.4348)"
        fill="currentColor"
      />
      <path
        d="M12 3.05176e-05V3.05176e-05C12 6.3393 17.139 11.4783 23.4783 11.4783L24 11.4783"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M12 24V24C12 17.6608 17.139 12.5218 23.4783 12.5218L24 12.5218"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
