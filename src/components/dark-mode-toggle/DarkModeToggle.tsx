import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { Moon, Sun, Target } from "react-feather";

export default function DarkModeToggle() {
  const [theme, setTheme] = useLocalStorage<"dark" | "light" | undefined>(
    "theme",
    undefined,
  );

  useEffect(() => {
    theme === "dark" ||
    (theme === undefined &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button
      type="button"
      className="fixed right-0 top-0 p-4"
      onClick={() =>
        setTheme((current) => {
          switch (current) {
            case "dark":
              return undefined;
            case "light":
              return "dark";
            default:
              return "light";
          }
        })
      }
    >
      {theme === "dark" ? <Moon /> : theme === "light" ? <Sun /> : <Target />}
    </button>
  );
}
