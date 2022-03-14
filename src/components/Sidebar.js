import React, { useState } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow_short.svg";

function Sidebar({ data, setData }) {
  const [showList, setShowList] = useState(Array(data.length).fill(false));

  const onClickChildren = (parent_index, child_index) => {
    data[parent_index].children[child_index].current =
      !data[parent_index].children[child_index].current;
    setData([...data]);
  };

  const onHandleSidebar = (parent_index, disabled) => {
    if (!disabled) {
      showList[parent_index] = !showList[parent_index];
      setShowList([...showList]);
    }
  };

  return (
    <div className="flex flex-col flex-grow border-gray-30 rounded-2.5xl w-fit pl-4 pr-8 py-4 overflow-y-auto font-lato border-r">
      <div className="font-commuter flex-grow flex flex-col">
        <nav className="flex-1 space-y-6" aria-label="Sidebar">
          <div className="text-2xl text-gray-95 font-semibold">Platforms</div>

          {data.map((item, item_idx) =>
            !item.children.length ? (
              <div
                key={item.name}
                className={`${
                  item.icon
                    ? "inline-grid w-full items-center grid-cols-icon-tab"
                    : "flex"
                }`}
              >
                {item.icon && (
                  <img src={item.icon} alt={item.name} className="min-w" />
                )}
                <a
                  className={`font-normal text-xl ${
                    item.disabled
                      ? "text-gray-60 cursor-not-allowed"
                      : "cursor-pointer "
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ) : (
              <div key={item.name}>
                {
                  <>
                    <button
                      className={`flex min-w-full items-center font-normal text-xl ${
                        showList[item_idx] ? "mb-6" : ""
                      } ${
                        item.disabled
                          ? "text-gray-60 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() => onHandleSidebar(item_idx, item.disabled)}
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="mr-1 w-5 h-5"
                        />
                      )}
                      <p>{item.name}</p>
                      <ArrowRight
                        className={`transform duration-100 ml-auto ${
                          showList[item_idx] ? "rotate-90" : "rotate-0"
                        }`}
                        fill={`${item.disabled ? "#4F4F4F" : "white"}`}
                      />
                    </button>
                    {showList[item_idx] && (
                      <div className="space-y-6">
                        {item.children.map((subItem, subitem_idx) => (
                          <div
                            key={"tree-item-" + subitem_idx}
                            className="group flex items-center font-light text-sm mx-7 text-gray-600 cursor-pointer"
                            onClick={() =>
                              onClickChildren(item_idx, subitem_idx)
                            }
                          >
                            <input
                              type="checkbox"
                              name="Tree-sub-item"
                              checked={subItem.current}
                              className="opacity-0 absolute w-3.5 h-3.5 cursor-pointer"
                            />
                            <div className="border-2 rounded-sm border-white w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center mr-2.5">
                              <svg
                                width="8"
                                height="7"
                                viewBox="0 0 8 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden"
                              >
                                <path
                                  d="M2.9958 3.55606L1.6998 2.28506L0.299805 3.71506L3.0038 6.36206L7.7028 1.71106L6.2968 0.289062L2.9958 3.55606Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p className=" text-p6">{subItem.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                }
              </div>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
