import { type FC,  useEffect,  useState } from "react";

export const HeadText: FC = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    alert(count);
    setCount(count + 1);
  };

  useEffect(() => console.log("re-rendered"), [count]);

  return (
    <h1 onClick={handleClick}>
      Welcome to <span className="text-gradient">Astro</span>
    </h1>
  );
};
