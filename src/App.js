import { Asia } from "./continents/Asia";
import { Australia } from "./continents/Australia";
import { Europe } from "./continents/Europe";
import { America } from "./continents/America";
import { Africa } from "./continents/Africa";
import { Countdown } from "./countdown/Countdown";
import "./App.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
// import Swal from "sweetalert2/src/sweetalert2.js";

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
      background: "#242424",
      confirmButtonColor: "white",
      buttonsStyling: false,
      customClass: {
        confirmButton: "confirm_btn",
      },
    });
  };

  return (
    <div className="maincontainer">
      <div className="continents">
        <div onClick={onContinentClick}>
          <Asia />
        </div>
        <div onClick={onContinentClick}>
          <Australia />
        </div>
        <div onClick={onContinentClick}>
          <Europe />
        </div>
        <div onClick={onContinentClick}>
          <America />
        </div>
        <div onClick={onContinentClick}>
          <Africa />
        </div>
      </div>
      <span id="hawkeye-main-logo">HAWKEYE</span>
      <div id="hawkeye-countdown-div">
        <span id="hawkeye-main-subheading">THE HAWK LANDS IN</span>
        <Countdown />
      </div>
    </div>
  );
}

export default App;
