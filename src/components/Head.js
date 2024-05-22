import React, { useEffect, useState } from "react";
import Logo from "../assets/youtube-logo.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searCache[searchQuary]) {
        setSuggestion(searCache[searchQuary]);
      } else {
        getSearchSugession();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuary]);

  const getSearchSugession = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuary);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(cacheResults({
      [searchQuary]: json[1],
    }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 z-10  ">
      <div className="flex shadow-lg bg-slate-50 w-[100%] h-[60px]">
        <div className=" flex max-md:w-[50%]">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-[25px] mt-[10px] w-[20%] cursor-pointer lg:ml-4"
            alt="Menu"
            src="https://cdn-icons-png.flaticon.com/128/10197/10197912.png"
          />
          <img className="h-12 w-[80%]  ml-4" alt="YT-Logo" src={Logo} />
        </div>
        <div className="w-[50%] mt-2 max-md:w-[50%]">
          <div>
            <input
              className="w-[70%] border border-gray-400 p-2 rounded-l-full pl-4 "
              placeholder="Search Anything"
              type="text"
              value={searchQuary}
              onChange={(e) => {
                setSearchQuary(e.target.value);
              }}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-200 ">
              🔍
            </button>
          </div>
          {showSuggestion && (
            <div className="fixed py-2 px-5 w-[33rem] shadow-lg rounded-lg bg-white">
              <ul>
                {suggestion.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="max-md:w-[10%]">
          <img
            className="h-8 mt-2"
            alt="user"
            src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
