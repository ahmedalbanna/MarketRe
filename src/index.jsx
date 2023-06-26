import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomepageDesktop } from "./screens/HomepageDesktop";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomepageDesktop />);
