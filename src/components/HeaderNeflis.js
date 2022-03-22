import { Link } from "react-router-dom";
import style from "../modules/HeaderNeflis.module.css"
import { Search } from "./Search";

export  function HeaderNeflis() {
  return (
    <div className={style.app}>
      <Link to="/"><h1 className={style.title}>neflis</h1></Link>
      <Search />
    </div>
  );   
}