// import { useEffect } from "react";
// import { FetchPrograms } from "../api/FetchPrograms";

// export const ProgramList = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const area: string = "130"; //以下4行、パラメーターの定義。後にstateで置き換えて検索機能を作成。
//       const service: string = "e1";
//       const genre: string = "0700";
//       const date: string = "2025-02-26";

//       const data = await FetchPrograms(area, service, genre, date);

//       console.log(data.list);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>NHK 番組一覧</h1>
//       <p>{data}</p>
//     </div>
//   );
// };
