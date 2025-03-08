import { createRoot } from "react-dom/client";
import "./index.css"
import Home from "./Views/home";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Home/>
    </>
);