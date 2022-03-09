import React, { useState } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow_short.svg";

function Sidebar({ data, setData }) {
  const [showList, setShowList] = useState(Array(data.length).fill(false));

  const onClickParent = (e, parent_index) => {
    setData((prevData) => {
      const data = [...prevData];
      data[parent_index].current = e.target.checked;
      data[parent_index].children.map((item) => {
        item.current = e.target.checked;
      });
      return data;
    });
  };

  const onClickChildren = (e, parent_index, child_index) => {
    data[parent_index].children[child_index].current = e.target.checked;
    setData([...data]);
  };

  const onHandleSidebar = (parent_index) => {
    showList[parent_index] = !showList[parent_index];
    setShowList([...showList]);
  };

  return (
    <div className="flex flex-col flex-grow border-gray-30 rounded-2.5xl w-fit px-4 pt-4 pb-4 overflow-y-auto font-lato border-r">
      <div className="flex-grow flex flex-col">
        <nav className="flex-1 space-y-6" aria-label="Sidebar">
          {data.map((item, item_idx) =>
            !item.children.length ? (
              <div key={item.name}>
                <a
                  className={`font-commuter text-xl hover:cursor-pointer ${
                    item.disabled ? "text-gray-60" : ""
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
                      className={`flex min-w-full items-center font-commuter text-xl hover:cursor-pointer mb-6 ${
                        item.disabled ? "text-gray-60" : ""
                      }`}
                      onClick={() => onHandleSidebar(item_idx)}
                    >
                      <p>{item.name}</p>
                      <div
                        className={`transition-transform duration-500 ml-auto mr-10 ${
                          showList[item_idx] ? "rotate-90" : "rotate-0"
                        }`}
                      >
                        <ArrowRight />
                      </div>
                    </button>
                    {showList[item_idx] && (
                      <div className="space-y-6">
                        {item.children.map((subItem, subitem_idx) => (
                          <button
                            key={"tree-item-" + subitem_idx}
                            className="group flex items-center font-light text-sm mx-7 text-gray-600"
                          >
                            <input
                              type="checkbox"
                              name="Tree-sub-item"
                              checked={subItem.current}
                              onChange={(e) =>
                                onClickChildren(e, item_idx, subitem_idx)
                              }
                              className="opacity-0 absolute w-3.5 h-3.5 hover:cursor-pointer"
                            />
                            <div className="border-2 rounded-sm border-white w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center mr-2.5">
                              <svg
                                width="8"
                                height="7"
                                viewBox="0 0 8 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.9958 3.55606L1.6998 2.28506L0.299805 3.71506L3.0038 6.36206L7.7028 1.71106L6.2968 0.289062L2.9958 3.55606Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p className=" text-p6">
                              {subItem.name}
                            </p>
                          </button>
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
