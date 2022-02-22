import type { NextPage } from "next";
import styles from "../styles/PageStyles/Home.module.scss";
import Navigation from "../components/reusables/Navigation";
import Dropdown from "../components/Nav/Dropdown";
import Searchbox from "../components/Nav/Searchbox";
import { useEffect } from "react";
import { logout } from "../firebase/authFunctions";

const Notice: NextPage = () => {
  useEffect(() => {
    logout();
  });
  return (
    <>
      <Navigation />
    </>
  );
};

export default Notice;
