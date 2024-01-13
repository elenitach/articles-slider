import mockData from "@/app/mockData";
import { mapRowData, selectRandomValue } from "@/app/utils";
import Slide, { shapes as imageShapes } from "../Slide/Slide";
import { Props as SlideProps } from "../Slide/Slide";
import styles from './Slider.module.css';

export default function Slider() {
  const data = mockData.reduce<SlideProps[]>((res, item) => {
    while (true) {
      const newShape = selectRandomValue(imageShapes);
      if (res.length === 0 || res.at(-1)?.shape !== newShape) {
        res.push({ ...mapRowData(item), shape: newShape });
        return res;
      }
    }
  }, []);
  
  return (
    <div className={styles.root}>
      <div className={styles.slides}>
        {data.map((item) => (
          <Slide key={item.id} {...item} />
        ))}
      </div>
      
    </div>
  );
}
