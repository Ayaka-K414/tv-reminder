import { useEffect, useState } from "react";
import axios from "axios";

export const FetchPrograms = () => {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const API_KEY = import.meta.env.VITE_NHK_API_KEY;
  const area: string = "130"; //以下4行、パラメーターの定義。後にstateで置き換えて検索機能を作成。
  const service: string = "e1";
  const genre: string = "0700";
  const date: string = "2025-02-26";
  const url = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setPrograms(res.data.list.e1);
      } catch (error) {
        console.error("データ取得エラー:", error);
      } finally {
        setLoading(false); // エラーでもロード完了にする
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <h1>NHK 番組一覧</h1>
      {loading ? <p>ロード中・・・</p> : <p>ロード完了</p>}
      {programs.map((program, index) => (
        <div className="programCardContainer" key={index}>
          <p>{program.title}</p>
          <p>{program.start_time}</p>
          <p>{program.end_time}</p>
          <p>{program.subtitle}</p>
          <p>{program.content}</p>
          <p>{program.act}</p>
        </div>
      ))}
    </div>
  );
};
