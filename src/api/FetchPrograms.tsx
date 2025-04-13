import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AREA_LIST } from "../constants/areaList";
import { SERVICE_LIST } from "../constants/serviceList";
import { GENRE_LIST } from "../constants/genreList";
import "../styles/_card.scss";
import "../styles/_search.scss";
import "../styles/_utility.scss";
import { BroadcastTime } from "../components/BroadcastTime";

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
    <div className="search">
      <div className="search-container">
        <div className="search-container-inner">
          <div className="search-select">
            <label htmlFor="area"><span className="mgr-3rem">地域</span>：</label>
            <select
              name="area"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">選択してください</option>
              {AREA_LIST.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="search-select">
            <label htmlFor="service">サービス：</label>
            <select
              name="service"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">選択してください</option>
              {SERVICE_LIST.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="search-select">
            <label htmlFor="genre">ジャンル：</label>
            <select
              name="genre"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">選択してください</option>
              {GENRE_LIST.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="search-select">
            <label htmlFor="date"><span className="mgr-2rem">放送日</span>：</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="search-button">
            <button
              className="btn btn--primary btn--radius"
              onClick={fetchData}
              disabled={loading || !area || !service || !genre || !date}
            >
              {loading ? "検索中" : "検索"}
            </button>
          </div>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
      {programs.map((program, index) => (
        <div className="program-card-container" key={index}>
          <h3>{program.title}</h3>
          <BroadcastTime
            startIso={program.start_time}
            endIso={program.end_time}
          />
          {program.subtitle && <p>{program.subtitle}</p>}
          {program.content && <p>{program.content}</p>}
          {/* {program.act && <p>{program.act}</p>} */}
        </div>
      ))}
    </div>
  );
};
