import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-[100px] fixed bg-white h-[100%] mt-0">
      <ul className="flex flex-col gap-10 pb-5">
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" /></Link>
        </li>
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/5856/5856419.png" /></Link>
        </li>
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png" /></Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-10">
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/651/651717.png" /></Link>
        </li>
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/763/763891.png" /></Link>
        </li>
        <li>
          <Link to="/"><img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/686/686589.png" /></Link>
        </li>
       
      </ul>

    </div>
  );
};

export default Sidebar;
