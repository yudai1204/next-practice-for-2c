import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Next.jsのDynamic Routingという機能を使うと、ファイル名を[id].jsとすることで、
// そのページのURLが/posts/1のようになったときに、ファイル内からURLに含まれるidを取得できるようになる

export default function Post() {
  const router = useRouter();

  // 分割代入を行っている
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // const id = router.query.id; と同義
  const { id } = router.query;

  const [data, setData] = useState();

  // 第二引数にidを指定することで、idが代入されたときだけ実行される
  useEffect(() => {
    const getJsonData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setData(data[Number(id) - 1]);
      console.log(data);
    };
    if (id) getJsonData();
  }, [id]);

  return (
    <main>
      {data && (
        <div>
          <h3>name: {data.name}</h3>
          <h4>id: {data.id}</h4>
          <a href={`mailto:${data.email}`}>{data.email}</a>
          {/* 本文を改行コードで区切ってそれぞれ別の段落にしている。HTML内では\nは改行にならず、<br>タグを入れるか別の段落(p)にする必要がある */}
          {data.body.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <a href="/">一覧へ</a>
        </div>
      )}
    </main>
  );
}
