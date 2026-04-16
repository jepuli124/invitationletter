import { useState } from "react";

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return { pos, onMouseMove };
}
export default useMousePosition