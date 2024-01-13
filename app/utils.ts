import { Props as SlideProps } from "./components/Slide/Slide";

export const mapRowData = (item: {
  id: number;
  types?: string;
  img: string;
  title: string;
  date: string;
}): Omit<SlideProps, "shape"> => {
  return {
    id: item.id,
    imageSrc: item.img,
    title: item.title,
    date: item.date,
  };
};

export const selectRandomValue = (arr: any[] | readonly any[]) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}