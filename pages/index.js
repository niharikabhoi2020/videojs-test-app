import Head from "next/head";
import styles from "../styles/Home.module.css";
import Video from "../src/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Video
        controls
        poster="https://channels-dev-thumbnail.s3.ap-south-1.amazonaws.com/uploads/clipp/5/thumbnail.png"
        sources={[
          {
            src:
              "https://channels-dev.s3.ap-south-1.amazonaws.com/playlists/54_183986.m3u8",
            type: "application/x-mpegURL",
          },
        ]}
      />
    </div>
  );
}
