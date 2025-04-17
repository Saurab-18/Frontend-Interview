import "./App.css";
import { useState } from "react";

function App() {
  const btnInfo = [
    {
      id: 1,
      btnTag: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      btnTag: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      btnTag: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const [tabs] = useState(btnInfo);
  const [data, setData] = useState("");
  const [activeId, setActiveId] = useState(null);

  const handleClick = (item) => {
    setData(item?.description);
    setActiveId(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Tabs
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          {tabs.map((item) => (
            <button
              onClick={() => handleClick(item)}
              key={item.id}
              className={`font-medium py-2 px-4 rounded-full transition-all duration-300 ${
                activeId === item.id
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {item.btnTag}
            </button>
          ))}
        </div>

        <div className="text-gray-700 text-md bg-gray-50 p-4 rounded-md border border-gray-200 min-h-[100px]">
          {data || "Click a tab to see the description."}
        </div>
      </div>
    </div>
  );
}

export default App;
