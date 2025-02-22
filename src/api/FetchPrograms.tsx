// import axios from "axios";

// export const FetchPrograms = async (
//   area: string,
//   service: string,
//   genre: string,
//   date: string
// ) => {
//   const API_KEY = import.meta.env.VITE_NHK_API_KEY;
//   const url = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${API_KEY}`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error("通信に失敗しました。", error);
//     return null;
//   }
// };
