import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import "./Nav.css";

function Nav() {
  return (
    <div className="wrapper">
      <Link to="/">
        <div className="logoContainer">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmeYuyNj6JwtNspPTqabkS3MBi7zDe6dAob957b61X5XJn"
            width="40"
            height="40"
            alt=""
            // ๐ ๋ฉ์ธ ํ์ด์ง์ ํ๋งค์ค์ธ ์ด๋ฏธ์ง ๋์ฐ๊ธฐ
          />
          {/* ๐ import ํด์จ ๋ก๊ณ ์ด๋ฏธ์ง ์ฌ์ด์ฆ๋ 40x40 ์ ์ฉ */}
          <div className="logoText">Closesea</div>
          {/* ๐ Closesea ๋ก๊ณ  ์์ ๊ธ์ CSS ์ ์ฉ */}
        </div>
      </Link>
      <div className="searchBar">
        {/* ๐ ๊ฒ์์ฐฝ CSS ํจ๊ณผ ์ ์ฉ */}
        <div className="searchIcon">
          <AiOutlineSearch />
          {/* ๐ ๊ฒ์์ฐฝ ์์ด์ฝ ์ ์ฉ ๐ npm install react-icons ์ค์น */}
        </div>
        <input
          className="searchInput"
          placeholder="Search items, collections, and accounts"
          // ๊ฒ์์ฐฝ์ ๊ธฐ๋ณธ์ผ๋ก ๋์์ฃผ๋ ๋ฌธ๊ตฌ
          // ๋ง์ฐ์ค ๊ฐ์ ธ๋ค์ฌ๋ฆฌ๋ฉด hoverํจ๊ณผ ์ ์ฉ
        />
      </div>
      <div className="headerItems">
        <Link to="/explore">
          <div className="headerItem">Explore</div>
        </Link>
        <Link to="/stats">
          <div className="headerItem">Stats</div>
        </Link>
        <Link to="/resources">
          <div className="headerItem">Resources</div>
        </Link>
        <Link to="/create">
          <div className="headerItem">Create</div>
        </Link>
        <Link to="/profile">
          <div className="profileIcon">
            <CgProfile />
            {/* ๐ Opensea ํํ์ด์ง์ ๋์ผํ ํ๋กํ ์ฌ์ง ์ด๋ฏธ์ง */}
          </div>
        </Link>
        <Link to="/wallet">
          <div className="walletIcon">
            <MdOutlineAccountBalanceWallet />
            {/* ๐ Opensea ํํ์ด์ง์ ๋์ผํ ์ง๊ฐ ์ฌ์ง ์ด๋ฏธ์ง */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
