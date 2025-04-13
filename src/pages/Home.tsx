import { FetchPrograms } from "../api/FetchPrograms";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <FetchPrograms />
    </>
  );
};
