import { useState } from "react";

export const AccordionCard = ({ list }) => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="border  rounded-2xl shadow-md mb-4 cursor-pointer transition-all duration-300">
      <div
        onClick={() => handleClick(list.id)}
        className="flex items-center justify-between p-4 bg-gray-100 rounded-t-2xl"
      >
        <span className="text-lg font-medium text-gray-800">{list.title}</span>
        <span className={`text-xl font-bold transition-transform duration-300`}>
          +
        </span>
      </div>

      {activeId === list.id && (
        <div className="p-4 bg-white text-gray-600 border-t border-gray-200 rounded-b-2xl">
          {list.description}
        </div>
      )}
    </div>
  );
};
