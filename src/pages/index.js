import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState();

  // 第二引数が空のuseEffectはページの読み込みが完了したら実行される
  useEffect(() => {
    // バックグラウンドでの通信は非同期処理になるため、async/awaitを使う
    // thenを使う書き方もあるが、async/awaitの方が見やすい
    const getJsonData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setData(data);
    };
    getJsonData();
  }, []);

  return (
    <main>
      <h1 className={styles.title}>JSON GET TEST</h1>
      <div>
        {data && // dataが存在するかチェックする
          // dataは配列なのでmapで回す
          data.map((item, index) => {
            return (
              <div key={index} className={styles.tweet}>
                <h3>name: {item.name}</h3>
                <h4>id: {item.id}</h4>
                <a href={`mailto:${item.email}`}>{item.email}</a>
                <p>{item.body}</p>
                <a href={`/posts/${item.id}`}>詳細</a>
              </div>
            );
          })}
      </div>
    </main>
  );
}
