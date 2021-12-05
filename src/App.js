import "./App.css";
import Kirb from "./kirb";
import { useState } from "react";
import { Howl } from "howler";
import useSound from "use-sound";

import Haaaiiiii from "./kirbSVGmedia/Haaaiiiiii.mp3";
import KirbHuh from "./kirbSVGmedia/KirbHuh.mp3";
import KirbSleep from "./kirbSVGmedia/KirbSleep.mp3";
import KirbInhale from "./kirbSVGmedia/KirbInhale.mp3";

function App() {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMouthClicked, setIsMouthClicked] = useState(false);

  const sound = new Howl({
    src: Haaaiiiii,
    volume: 0.35,
    loop: false,
  });

  const huh = new Howl({
    src: KirbHuh,
    volume: 0.35,
    loop: false,
  });

  const inhale = new Howl({
    src: KirbInhale,
    volume: 0.35,
    loop: false,
  });

  const [play, { stop }] = useSound(KirbSleep, { volume: 0.05, loop: true });

  return (
    <div className="App">
      <div className="bubbleHeader">ZZZZ...</div>
      <Kirb
        isHover={isHover}
        setIsHover={setIsHover}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isMouthClicked={isMouthClicked}
        setIsMouthClicked={setIsMouthClicked}
        sound={sound}
        huh={huh}
        inhale={inhale}
        play={play}
        stop={stop}
      />
      {console.log(isMouthClicked, "butts")}
    </div>
  );
}

export default App;