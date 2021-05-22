import { Asia } from "./continents/Asia";
import { Australia } from "./continents/Australia";
import { Europe } from "./continents/Europe";
import { America } from "./continents/America";
import { Africa } from "./continents/Africa";
import { useRef } from "react";
import "./App.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// import "sweetalert2/src/sweetalert2.scss";

function App() {
  const onContinentClick = () => {
    Swal.fire({
      title: "ASIA!!",
      text: "Counterfeiting products.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5c6a2f28799005.55d319404eac0.jpg",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className="maincontainer">
      <div className="continents">
        <div onClick={onContinentClick}>
          <Asia />
        </div>
        <Australia />
        <Europe />
        <America />
        <Africa />
      </div>
      <div className="countdown">120312093102312</div>
    </div>
  );
}

export default App;
