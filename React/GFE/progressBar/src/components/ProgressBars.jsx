import { useState } from "react";

export const ProgressBars = () => {
  const [progressBars, setProgressBars] = useState([]);

  const handleAdd = () => {
    const newIndex = progressBars.length;
    setProgressBars([...progressBars, 0]);
    setTimeout(() => {
      setProgressBars((prev) => {
        const updated = [...prev];
        updated[newIndex] = 100;
        return updated;
      }, 50);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Progress Bars</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {progressBars.map((percentage, index) => {
          return (
            <div
              key={index}
              style={{
                width: "800px",
                border: "1px solid black",
                height: "15px",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  height: "15px",
                  background: "green",
                  transition: "width 2s ease-in-out",
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleAdd}
        style={{
          width: "100px",
          height: "30px",
          marginTop: "20px",
        }}
      >
        Add
      </button>
    </div>
  );
};
