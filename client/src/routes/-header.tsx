import { ThemeToggle } from "@/components/custom-ui";
import {
  CircleHelpIcon,
  HomeIcon,
  InfoIcon,
  PlusIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  {
    label: "Home",
    Icon: HomeIcon,
    path: "/",
    isProtected: false,
  },
  {
    label: "Room",
    Icon: PlusIcon,
    path: "/room",
    isProtected: false,
  },
  {
    label: "About",
    Icon: InfoIcon,
    path: "/about",
    isProtected: false,
  },
  {
    label: "Help",
    Icon: CircleHelpIcon,
    path: "/help",
    isProtected: false,
  },
];

export function Header() {
  return (
    <header className="">
      <div className="wrapper bg-background py-3 flex items-center justify-between">
        <Link className="text-3xl">Quizzer</Link>

        <nav className="max-md:hidden border-border rounded bg-secondary p-2 flex items-center gap-1.5">
          {NAV_LINKS.map(({ label, path, Icon, isProtected }) => (
            <Link
              key={label}
              to={path}
              className={cn(
                "bg-background rounded px-3 py-2 flex items-center gap-2 text-xs font-medium",
                { hidden: isProtected }
              )}
            >
              <Icon size={14} strokeWidth={2.5} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
