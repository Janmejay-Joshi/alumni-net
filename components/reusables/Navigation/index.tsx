import React, { useState } from "react";
import styles from "./Navigation.module.scss";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../../Nav/Dropdown";
import Searchbox from "../../Nav/Searchbox";

/* 
const [dropdown, setDropdown] = useSatte(false)

const handleClick = () =>{
  setDropdown(!dropdown)
}


conditional rendering

{
  dropdown && (
    <Dropdown />
  )
}

*/

/* 

export const dat = [
  {
    name : "Home",
    link  : "/",
    icone : " " 

  },
  {

  }, 
  {

  }
]
*/

/* 
{data.map((val )=>(
  return(
    <div >{val.name}</div>

  )
))}
*/

export default function Navigation() {
  const [dropdown, setDropdown] = useState(false);
  const [searchbox, setSearchbox] = useState(false);

  

  const handleSearchClick = () => {
    setSearchbox(!searchbox);
  };
  const handleProfileClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block1}></div>
      <div className={styles.block2}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/notification">Notification</Link>
        </div>
      </div>
      <div className={styles.block3}>
        <svg
          width="200"
          height="33"
          viewBox="0 0 200 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_75_2400)">
            <path
              d="M66.6808 23.8684L67.8644 20.0418H75.3722L76.5558 23.8684H82.0202L75.0964 2.10781H68.4968L61.1675 23.8684H66.6808ZM74.1886 16.1988H69.1776L71.7237 8.23711L74.1886 16.1988ZM90.5327 23.8684V1.49219H85.344V23.8687L90.5327 23.8684ZM101.235 31.6191V23.1961L101.25 23.2105C101.414 23.3613 101.588 23.4961 101.774 23.6156L101.867 23.6738C102.657 24.1496 103.64 24.3871 104.818 24.3871C106.17 24.3871 107.437 24.0523 108.621 23.382C109.804 22.7117 110.761 21.7441 111.491 20.4797C112.22 19.2148 112.585 17.6852 112.585 15.8906C112.585 14.0855 112.226 12.5504 111.507 11.2855C110.788 10.0207 109.856 9.05351 108.71 8.3832C107.564 7.71289 106.353 7.37773 105.078 7.37773C104.116 7.37773 103.208 7.62383 102.353 8.11562C101.739 8.46953 101.209 8.9793 100.766 9.64453L100.701 9.74219L100.278 7.89648H96.046V31.6191H101.235ZM103.991 19.6523C103.494 19.6523 103.034 19.5605 102.613 19.377C102.191 19.1934 101.856 18.9391 101.608 18.6148C101.359 18.2906 101.235 17.9121 101.235 17.4797V14.8527L101.236 14.7414C101.25 14.2625 101.356 13.8391 101.553 13.4695L101.6 13.3855C101.838 12.9736 102.19 12.6388 102.613 12.4207C103.045 12.1937 103.537 12.0801 104.089 12.0801C104.769 12.0801 105.356 12.2367 105.848 12.5504C106.34 12.8637 106.721 13.307 106.991 13.8801C107.261 14.4527 107.396 15.123 107.396 15.8906C107.396 16.7988 107.216 17.5285 106.853 18.0797C106.491 18.6309 106.048 19.0309 105.524 19.2797C104.999 19.5281 104.489 19.6523 103.991 19.6523ZM119.801 5.8375C120.752 5.8375 121.503 5.58594 122.055 5.08359C122.606 4.58086 122.882 3.86992 122.882 2.95078C122.882 2.05391 122.606 1.3375 122.055 0.802344C121.504 0.267578 120.752 0 119.801 0C118.817 0 118.058 0.267578 117.523 0.802734C116.987 1.33789 116.72 2.05391 116.72 2.95117C116.72 3.86992 116.987 4.58086 117.523 5.0832C118.058 5.58594 118.817 5.8375 119.801 5.8375ZM122.395 23.8687V7.79883H117.207V23.868L122.395 23.8687ZM133.551 23.8687V17.1387L133.552 16.9738C133.564 15.8832 133.7 14.9914 133.957 14.298L133.997 14.1957C134.294 13.4555 134.692 12.9176 135.189 12.5824C135.671 12.2519 136.242 12.0765 136.826 12.0797C137.41 12.0797 137.907 12.2824 138.319 12.6879C138.729 13.0934 138.934 13.7176 138.934 14.5605V23.868H144.156V14.5609C144.156 13.1664 143.95 11.9289 143.539 10.8477C143.129 9.7668 142.489 8.91797 141.618 8.30195C140.748 7.68594 139.626 7.37773 138.253 7.37773C137.053 7.37773 135.981 7.71289 135.035 8.3832C134.448 8.79922 133.938 9.36289 133.505 10.0746L133.46 10.1492L132.935 7.89648H128.362V23.8684L133.551 23.8687ZM155.619 24.3871C156.939 24.3871 158.103 24.1496 159.114 23.6738C160.125 23.198 160.946 22.5551 161.579 21.7441C162.211 20.9336 162.608 20.0309 162.77 19.0363H157.614C157.473 19.4582 157.225 19.766 156.868 19.9605C156.512 20.1551 156.095 20.2523 155.619 20.2523C155.036 20.2523 154.552 20.1145 154.168 19.8391C153.785 19.5633 153.496 19.177 153.301 18.6797C153.106 18.1824 153.009 17.5934 153.009 16.9121L153.009 16.9445H162.608C162.864 15.7977 162.914 14.682 162.758 13.598L162.73 13.418C162.541 12.2773 162.141 11.2531 161.53 10.3453C160.919 9.43711 160.117 8.71562 159.122 8.18047C158.128 7.64531 156.96 7.37773 155.619 7.37773C154.268 7.37773 153.004 7.71289 151.825 8.3832C150.647 9.05351 149.696 10.018 148.971 11.2777C148.247 12.5367 147.885 14.0473 147.885 15.8094C147.885 17.5715 148.25 19.0957 148.98 20.382C149.709 21.6687 150.663 22.6578 151.842 23.3496C153.02 24.041 154.279 24.3871 155.619 24.3871ZM158.084 14.318H153.032V14.3133C153.072 13.8699 153.161 13.4758 153.299 13.1309L153.342 13.0285C153.563 12.5262 153.877 12.1422 154.282 11.8773C154.687 11.6125 155.166 11.4801 155.717 11.4801C156.214 11.4801 156.622 11.5801 156.941 11.7801C157.254 11.9737 157.509 12.2482 157.679 12.5746C157.854 12.9121 157.972 13.2765 158.028 13.6527C158.057 13.8477 158.076 14.0406 158.082 14.2328L158.084 14.318ZM168.283 24.1602C169.31 24.1602 170.159 23.8496 170.829 23.2277C171.5 22.6066 171.835 21.8145 171.835 20.8527C171.835 19.8902 171.5 19.0902 170.829 18.4527C170.159 17.8148 169.31 17.4957 168.283 17.4957C167.257 17.4957 166.421 17.8148 165.778 18.4527C165.135 19.0902 164.814 19.8902 164.814 20.8523C164.814 21.8035 165.135 22.593 165.778 23.2195C166.421 23.8469 167.257 24.1602 168.283 24.1602ZM178.191 5.8375C179.142 5.8375 179.893 5.58594 180.445 5.08359C180.996 4.58086 181.272 3.86992 181.272 2.95078C181.272 2.05391 180.996 1.3375 180.445 0.802344C179.893 0.267578 179.142 0 178.191 0C177.239 0 176.483 0.267578 175.921 0.802734C175.358 1.33789 175.078 2.05391 175.078 2.95117C175.078 3.86992 175.359 4.58086 175.921 5.0832C176.483 5.58594 177.239 5.8375 178.191 5.8375ZM175.094 32.1867C176.985 32.1867 178.418 31.6703 179.391 30.6383C180.364 29.6059 180.85 27.8625 180.85 25.409V7.83164H175.629V25.3113C175.629 26.241 175.464 26.8629 175.134 27.1762C174.805 27.4898 174.305 27.6465 173.634 27.6465C173.116 27.6465 172.553 27.5707 171.948 27.4195C171.342 27.268 170.807 27.1004 170.342 26.9168V31.3758C171.079 31.5787 171.82 31.7652 172.564 31.9352C173.299 32.1031 174.142 32.1867 175.094 32.1867ZM192.979 24.3871C194.319 24.3871 195.519 24.1387 196.578 23.641C197.638 23.1441 198.473 22.498 199.084 21.7035C199.694 20.909 200 20.0687 200 19.1824C200 18.2094 199.686 17.3984 199.059 16.75C198.432 16.1016 197.573 15.5609 196.481 15.1285L192.071 13.3609C191.39 13.1234 191.049 12.7988 191.049 12.3883C191.049 12.0855 191.211 11.8422 191.536 11.6586C191.86 11.475 192.303 11.3828 192.865 11.3828C193.546 11.3828 194.033 11.5098 194.325 11.7641C194.617 12.018 194.762 12.318 194.762 12.6637H199.514C199.503 11.1285 198.924 9.86406 197.778 8.86953C196.633 7.875 194.995 7.37773 192.865 7.37773C190.596 7.37773 188.807 7.81523 187.498 8.69102C186.19 9.5668 185.536 10.7125 185.536 12.1285C185.536 13.134 185.847 14.0016 186.469 14.7312C187.09 15.4609 187.974 16.0633 189.12 16.5391L192.995 18.0469C193.406 18.2094 193.708 18.3715 193.903 18.5336C194.098 18.6957 194.195 18.9121 194.195 19.182C194.195 19.3875 194.125 19.5797 193.984 19.7578C193.843 19.9363 193.633 20.0797 193.352 20.1875C193.071 20.2957 192.714 20.3496 192.282 20.3496C191.568 20.3496 191.003 20.2418 190.587 20.0254C190.171 19.8094 189.952 19.4199 189.931 18.8578H185.244C185.234 20.1012 185.555 21.1309 186.209 21.9469C186.863 22.7633 187.774 23.3738 188.941 23.7789C190.109 24.1848 191.455 24.3871 192.979 24.3871Z"
              fill="#2D3441"
            />
            <path
              d="M41.1428 0.667175L52.8975 12.3707L41.1428 24.0738L29.3877 12.3707L41.1428 0.667175Z"
              fill="#77C1D2"
            />
            <path
              d="M11.7551 0.667175L36.1246 24.9297H12.6145L0 12.3707L11.7551 0.667175Z"
              fill="#2D3441"
            />
          </g>
          <defs>
            <clipPath id="clip0_75_2400">
              <rect width="200" height="32.4219" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.block4}>
        <div>Colleges</div>
        <div>Messenger</div>
      </div>
      <div className={styles.block5}>
        <div className={styles.searchicon}>
          <FontAwesomeIcon icon={faMagnifyingGlass}
          onClick={handleSearchClick}
          />
        </div>
        <div className={styles.profile}>
          <img
            src="/assets/images/Nav/profile.svg"
            className={styles.profilepic}
            onClick={handleProfileClick}
            alt="profilepic"
          />
        </div>
        {
            dropdown&&(
              <Dropdown />
            )
        }
        {
            searchbox&&(
              <Searchbox />
            )
        }
      </div>
    </div>
  );
}
