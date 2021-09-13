import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./components/CardList";
import Gambar from "./assets/images/photo.jpg";
import bg1 from "./assets/images/gunung.jfif";
import bg2 from "./assets/images/pantai.jfif";

import Heeader from "./components/Header";
const data = [
    { user:"member", bg:bg1, judul:"Mountain", desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", image: Gambar, auth:"jolan", date:"Sept 13 2021"},
    { user:"member", bg:bg2, judul:"Beach", desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", image: Gambar, auth:"jolan", date:"Sept 13 2021"},
    ];
 
ReactDOM.render(
<React.StrictMode>

    <Heeader nama="Trip Adventure" a1="Hope" a2="You Enjoyed" />
<CardList data={data}
/>
</React.StrictMode>,
document.getElementById("root")
);
