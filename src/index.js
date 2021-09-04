import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/photo.jpg";
const quotes =
"Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";
ReactDOM.render(
<React.StrictMode>
<App />
<CardList
name="zolan"
nim="21120118130048"
kelompok="01"
isNameBold
image={Gambar}
/>
<Quotes author="Orang" quotes={quotes} />
</React.StrictMode>,
document.getElementById("root")
);
