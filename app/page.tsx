import Slider from './components/Slider/Slider';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.header}>Полезные материалы</h1>
        <p className={styles.description}>
          Собрали для вас полезные исследования схемы кормления и другие
          материалы, которые пригодятся для лучших результатов на вашем
          хозяйстве
        </p>
      </div>
      <Slider />
    </main>
  );
}
