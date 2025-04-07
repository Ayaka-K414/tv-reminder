import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_KEY: string = import.meta.env.VITE_NHK_API_KEY;

type program = {
  title: string;
  start_time: string;
  end_time: string;
  subtitle?: string;
  content?: string;
  act?: string;
};
export const FetchPrograms = () => {
  const [area, setArea] = useState("");
  const [service, setService] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState<boolean>(false);
  const [programs, setPrograms] = useState<program[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const url: string = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`;
    const options: AxiosRequestConfig = {
      url: `${url}`,
      method: "GET",
    };

    try {
      const res: AxiosResponse<{ list: { [key: string]: program[] } }> =
        await axios(options);
      const programLists = res.data.list[service];
      setPrograms(programLists);
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
  }, [area, service, genre, date]);

  return (
    <div>
      <label htmlFor="area">地域：</label>
      <select name="area" id="area" onChange={(e) => setArea(e.target.value)}>
        <option value="">選択してください</option>
        <option value="130">東京</option>
        <option value="140">大阪</option>
      </select>
      <label htmlFor="service">サービス：</label>
      <select
        name="service"
        id="service"
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">選択してください</option>
        <option value="g1">NHK総合1</option>
        <option value="g2">NHK総合2</option>
        <option value="e1">NHKEテレ1</option>
      </select>
      <label htmlFor="genre">ジャンル：</label>
      <select
        name="genre"
        id="genre"
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">選択してください</option>
        <option value="0000">ニュース／報道 (定時・総合)</option>
        <option value="0100">スポーツ (スポーツニュース)</option>
        <option value="0700">アニメ／特撮 (国内アニメ)</option>
      </select>
      <label htmlFor="date">放送日：</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        onClick={fetchData}
        disabled={loading || !area || !service || !genre || !date}
      >
        {loading ? "検索中" : "検索"}
      </button>

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
