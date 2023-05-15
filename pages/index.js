import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja Listing | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          assumenda cupiditate, perferendis expedita voluptas molestiae
          voluptatem sequi libero officiis nulla, fugit consequuntur ratione
          inventore temporibus quod accusantium eligendi nostrum quibusdam!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas
          ullam recusandae eos similique ratione quos aspernatur porro veritatis
          necessitatibus?
        </p>
        <Link href="/ninja" className={styles.btn}>
          See ninja listing
        </Link>
      </div>
    </>
  );
}
