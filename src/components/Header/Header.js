import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <h1>Best Smart Speakers Under Rs.5,000 (January 2023)</h1>
      <div className="owner">
        <a href="https://github.com/mdsamir8863" target="_blank">
          <img
            src="https://i.postimg.cc/PP8K0w5c/boyImg.png"
            border="0"
            alt="ownerImg"
          />
        </a>
        <button>
          <a href="https://github.com/mdsamir8863" target="_blank">
            Samir Ansari
          </a>
        </button>
        <p>Last updated on February 25, 2023</p>
      </div>
    </header>
  );
};

export default Header;
