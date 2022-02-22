import type { NextPage } from "next";
import styles from "../styles/PageStyles/Home.module.scss";
import Navigation from "../components/reusables/Navigation";
import Dropdown from "../components/Nav/Dropdown";
import Searchbox from "../components/Nav/Searchbox";

const Notice: NextPage = () => {
  return (
   <>
   <Navigation />
   </>
  );
};

export default Notice;
