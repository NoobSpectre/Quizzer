import { createRoot } from "react-dom/client";
import { MainProvider } from "./providers";

// Supports weights 100-900
import "@fontsource-variable/noto-serif/wdth-italic.css";
import "@fontsource-variable/noto-serif/wdth.css";

// main css
import "./globals.css";


createRoot(document.getElementById("root")!).render(<MainProvider />);
