"use client";

import React from "react";
import mockData from "@/app/mockData";
import { mapRowData, selectRandomValue } from "@/app/utils";
import Slide, { shapes as imageShapes } from "../Slide/Slide";
import { Props as SlideProps } from "../Slide/Slide";
import styles from "./Slider.module.css";
import Arrow from "../Icons/Arrow/Arrow";
import clsx from "clsx";

export default function Slider() {
  const [firstSlideIndex, setFirstSlideIndex] = React.useState<number>(0);
  const [scrollOffsets, setScrollOffsets] = React.useState<number[]>([]);
  const slidesRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setScrollOffsets(
      slidesRefs.current.reduce<number[]>(
        (res, offset) => {
          res.push((res.at(-1) || 0) + (offset?.offsetWidth || 0));
          return res;
        },
        [0]
      )
    );
  }, []);

  const data = React.useMemo(
    () =>
      mockData.reduce<SlideProps[]>((res, item) => {
        while (true) {
          const newShape = selectRandomValue(imageShapes);
          if (res.length === 0 || res.at(-1)?.shape !== newShape) {
            res.push({
              ...mapRowData(item),
              shape: newShape,
            });
            return res;
          }
        }
      }, []),
    []
  );

  const handleBackClick = React.useCallback(() => {
    if (!sliderRef.current) return;

    let diff = 0;

    for (let i = 0; i < mockData.length; i++) {
      if (scrollOffsets[i + 1] > sliderRef.current.scrollLeft) {
        setFirstSlideIndex(i);
        diff = sliderRef.current.scrollLeft - scrollOffsets[i];
        break;
      }
    }

    if (diff > 1) {
      sliderRef.current.scrollLeft -= diff;
      return;
    }

    if (firstSlideIndex > 0 && slidesRefs.current[firstSlideIndex - 1]) {
      const slideWidth = slidesRefs.current[firstSlideIndex - 1]?.offsetWidth;
      if (slideWidth) {
        sliderRef.current.scrollLeft -= slideWidth;
        setFirstSlideIndex((index) => index - 1);
      }
    }
  }, [firstSlideIndex]);

  const handleForwardClick = React.useCallback(() => {
    if (!sliderRef.current) return;

    let diff = 0;

    for (let i = 0; i < mockData.length; i++) {
      if (scrollOffsets[i] >= sliderRef.current.scrollLeft) {
        setFirstSlideIndex(i);
        diff = scrollOffsets[i] - sliderRef.current.scrollLeft;
        break;
      }
    }

    if (diff > 1) {
      sliderRef.current.scrollLeft += diff;
      return;
    }

    if (firstSlideIndex < data.length - 1 && slidesRefs.current[firstSlideIndex]) {
      const slideWidth = slidesRefs.current[firstSlideIndex]?.offsetWidth;
      if (slideWidth) {
        sliderRef.current.scrollLeft += slideWidth;
        setFirstSlideIndex((index) => index + 1);
      }
    }
  }, [firstSlideIndex]);

  return (
    <div className={styles.root}>
      <div className={styles.slides} ref={sliderRef}>
        {data.map((item, index) => (
          <Slide
            key={item.id}
            ref={(elem) => {
              slidesRefs.current[index] = elem;
            }}
            {...item}
          />
        ))}
      </div>
      <nav className={styles.arrows}>
        <button
          className={clsx(styles.arrow, styles.arrowLarge)}
          onClick={handleBackClick}
        >
          <Arrow size="large" direction="left" />
        </button>
        <button
          className={clsx(styles.arrow, styles.arrowLarge)}
          onClick={handleForwardClick}
        >
          <Arrow size="large" direction="right" />
        </button>

        <button
          className={clsx(styles.arrow, styles.arrowSmall)}
          onClick={handleBackClick}
        >
          <Arrow size="small" direction="left" />
        </button>
        <button
          className={clsx(styles.arrow, styles.arrowSmall)}
          onClick={handleForwardClick}
        >
          <Arrow size="small" direction="right" />
        </button>
      </nav>
    </div>
  );
}
