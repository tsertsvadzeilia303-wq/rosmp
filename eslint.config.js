import { useEffect, useState } from "react";

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          setActions((prev) => ({ ...prev, moveForward: true }));
          break;
        case "KeyS":
        case "ArrowDown":
          setActions((prev) => ({ ...prev, moveBackward: true }));
          break;
        case "KeyA":
        case "ArrowLeft":
          setActions((prev) => ({ ...prev, moveLeft: true }));
          break;
        case "KeyD":
        case "ArrowRight":
          setActions((prev) => ({ ...prev, moveRight: true }));
          break;
        case "Space":
          setActions((prev) => ({ ...prev, jump: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          setActions((prev) => ({ ...prev, moveForward: false }));
          break;
        case "KeyS":
        case "ArrowDown":
          setActions((prev) => ({ ...prev, moveBackward: false }));
          break;
        case "KeyA":
        case "ArrowLeft":
          setActions((prev) => ({ ...prev, moveLeft: false }));
          break;
        case "KeyD":
        case "ArrowRight":
          setActions((prev) => ({ ...prev, moveRight: false }));
          break;
        case "Space":
          setActions((prev) => ({ ...prev, jump: false }));
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};
