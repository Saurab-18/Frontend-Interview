import { useState } from "react";
import "./App.css";
import { AccordionCard } from "./components/AccordionCard";

function App() {
  const accordionList = [
    {
      id: 1,
      title: "HTML",
      description:
        "HTML is the standard markup language used to create web pages.",
    },
    {
      id: 2,
      title: "CSS",
      description:
        "CSS is used to style and layout web pages—for example, to alter fonts, colors, and spacing.",
    },
    {
      id: 3,
      title: "JavaScript",
      description:
        "JavaScript allows you to create dynamically updating content, control multimedia, animate images, and much more.",
    },
    {
      id: 4,
      title: "Python",
      description:
        "Python is a popular general-purpose programming language known for its readability and versatility.",
    },
    {
      id: 5,
      title: "Java",
      description:
        "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
  ];

  const [list] = useState(accordionList);

  return (
    <>
      {list &&
        list.map((item) => {
          return <AccordionCard className="w-75" key={item.id} list={item} />;
        })}
    </>
  );
}

export default App;
