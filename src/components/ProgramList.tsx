import { useEffect } from "react";
import { FetchPrograms } from "../api/FetchPrograms";

export const ProgramLists = () => {
  useEffect(() => {
    const fetchData = async () => {
      const area: string = "130"; //以下4行、パラメーターの定義。後にstateで置き換えて検索機能を作成。
      const service: string = "g1";
      const genre: string = "0100";
      const date: string = "2025-02-20";

      const data = await FetchPrograms(area, service, genre, date);

      console.log(data.list.g1[0]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NHK 番組一覧</h1>
      <p></p>
    </div>
  );
};
