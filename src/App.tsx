import { useEffect } from "react";
import "./App.css";

function App() {
  const inicialURL =
    "https://api.nhk.or.jp/v2/pg/genre/{area}/{service}/{genre}/{date}.json?key={apikey}";
  const apikey = "Fb9cw9AkX1bx5GPytNVXnKJdIhOF9OVb";
  const area = "130";
  const service = "g1";
  const genre = "0000";
  const date = "2025-01-01";

  useEffect(() => {
    const url = inicialURL
      .replace("{area}", area)
      .replace("{service}", service)
      .replace("{genre}", genre)
      .replace("{date}", date)
      .replace("{apikey}", apikey);
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [area, service, genre, date, apikey]);

  return <></>;
}

export default App;
