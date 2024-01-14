import Image from "next/image";
import styles from "./Slide.module.css";
import clsx from "clsx";
import React from "react";

export const shapes = [
  "circle",
  "leafLTRB",
  "leafRTLB",
  "roundCornersSquare",
] as const;

export type Props = {
  id: number;
  shape: (typeof shapes)[number];
  title: string;
  date: string;
  imageSrc: string; 
};

const Slide = React.forwardRef<HTMLDivElement, Props>(function Slide(
  { shape, title, date, imageSrc },
  ref
) {
  const size = title.length > 35 ? "large" : "small";
  return (
    <div ref={ref}>
      <div
        className={clsx(styles.imageWrapper, {
          [styles.imageWrapperLarge]: size === "large",
        })}
      >
        <Image
          className={clsx(styles.image, styles[shape])}
          fill
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
});

export default Slide;
