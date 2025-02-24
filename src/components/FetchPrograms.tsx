import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_KEY: string = import.meta.env.VITE_NHK_API_KEY;
const area: string = "130"; //以下4行、パラメーターの定義。後にstateで置き換えて検索機能を作成。
const service: string = "e1";
const genre: string = "0700";
const date: string = "2025-02-26";
const url: string = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`;
const options: AxiosRequestConfig = {
  url: `${url}`,
  method: "GET",
};
type program = {
  title: string;
  start_time: string;
  end_time: string;
  subtitle?: string;
  content?: string;
  act?: string;
};
export const FetchPrograms = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [programs, setPrograms] = useState<program[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<{ list: { e1: program[] } }> = await axios(
          options
        );
        setPrograms(res.data.list.e1);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // AxiosErrorであればmessageにアクセス
          setError(`エラーが発生しました: ${error.message}`);
          console.log("エラー内容:", error.message);
        } else {
          // Axios以外のエラーが発生した場合
          setError("予期しないエラーが発生しました");
          console.log("予期しないエラー:", error);
        }
      } finally {
        setLoading(false); // エラーでもロード完了にする
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>ロード中・・・</p> : <p>ロード完了</p>}
      {error && <p className="error-message">{error}</p>}
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
