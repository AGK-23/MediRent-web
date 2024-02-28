import Navigation from "./components/Navigation.jsx";
// import DropdownMenu from "./component/Dropdown.jsx";
import Dropdown_sec from "./components/Dropdown_sec.jsx";
import Dropdown_Thrd from "./components/Dropdown_Thrd.jsx";
import Price from "./components/Price.jsx";
import BLog from "./components/BLog.jsx";
import SearchButton from "./components/SearchButton.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Adds from "./components/Adds.jsx";

import Faq from "./components/Faq.jsx";
import Dropdown from "./components/Dropdown.jsx";
import MenuIcon from "./components/MenuIcon.jsx";
const Nav = () => {
  return (
    <>
      <div className="">
        <div className="pt-4">
        <Navigation />
        <MenuIcon />

        </div>
        <div className="mt-3 flex justify-between w-full">
          <div className="mx-5 flex flex-row justify-between w-full ">
            <div className="mr-4 w-fit  text-[13px] text-start flex items-center justify-start px-3 whitespace-nowrap">
              <Dropdown />

            </div>
            <div className="mr-4 w-fit  text-[13px] text-start flex items-center justify-start px-4 whitespace-nowrap">
              <Dropdown_sec />

            </div>
            <div className="mr-4 w-fit  text-[13px] text-start flex items-center justify-start pr-1 whitespace-nowrap">
              <Dropdown_Thrd />
            </div>
            <div className="mr-4 w-fit  text-[13px] text-start flex items-center justify-start px-4 whitespace-nowrap">
              <Price />

            </div>
            <div className="mr-4 px-4 w-fit  text-[13px] text-start flex items-center justify-start whitespace-nowrap">
              <Faq />

            </div>
            <div className="mr-4 px-4 w-fit  text-[13px] text-start flex items-center justify-start whitespace-nowrap">
              <BLog />

            </div>
            <div className="mr-4 px-4 w-fit  text-[13px] text-start flex items-center justify-start whitespace-nowrap">
              <AboutUs />

            </div>
            <div className="mr-4 px-4 w-fit  text-[13px] text-start flex items-center justify-start whitespace-nowrap">
              <Adds />

            </div>
          </div>

          <div className="w-full">
            <SearchButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
