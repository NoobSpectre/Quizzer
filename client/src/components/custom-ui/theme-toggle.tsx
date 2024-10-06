import {
  Theme,
  ThemeProviderState,
  useTheme,
} from "@/providers/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";
import { ReactElement } from "react";
import { Button } from "../ui";

const ThemeIcons = {
  dark: <MoonIcon />,
  light: <SunIcon />,
} satisfies Record<Theme, ReactElement>;

type ToggleTheme = (state: ThemeProviderState) => void;

const toggleTheme: ToggleTheme = ({ theme, setTheme }) => {
  switch (theme) {
    case "dark":
      setTheme("light");
      break;
    case "light":
      setTheme("dark");
      break;
  }
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      className="border-current rounded text-primary hover:text-primary"
      onClick={() => toggleTheme({ setTheme, theme })}
    >
      {ThemeIcons[theme]}
    </Button>
  );
}
