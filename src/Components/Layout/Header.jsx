import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Meals from "../../Assets/meals.jpg";

const Header = ({ onSetCartModalHeader }) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 z-50 flex w-full flex-col items-center gap-y-2 bg-[#8a2b06] py-4 px-12 md:flex-row md:justify-between md:gap-y-0">
        <h1 className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl">
          <a href="/">ReactMeals</a>
        </h1>
        <HeaderCartButton onClickCart={onSetCartModalHeader} />
      </header>
      <div className="z-0 h-[25rem] w-full overflow-hidden lg:mb-14">
        <img src={Meals} alt="Meals" className="h-full w-[110%] object-cover" />
      </div>
    </Fragment>
  );
};

export default Header;
