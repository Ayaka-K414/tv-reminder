import { Link } from "react-router-dom";
import { logout } from "./Auth";
import { useNavigate } from "react-router-dom";
import "../styles/_header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1><Link to="/">NHK番組検索</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/mypage">マイページ</Link>
          </li>
          <li>
            <Link to="/" onClick={() => logout(navigate)}>ログアウト</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
