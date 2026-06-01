import "./styles.css";
import { useState } from "react";

function App() {
  const [petMood, setPetMood] = useState("smiling");
  const [moodText, setMoodText] = useState("Just existing");
  const [petCount, setPetCount] = useState(0);
  const [feedCount, setFeedCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const imageList = [
    "Annoyed",
    "fed",
    "fedTooMuch",
    "ignored",
    "NoPetting",
    "TooManyPets",
    "smiling",
    "Pet",
    "petting",
  ];
  imageList.forEach((image) => {
    const img = new Image();
    img.src = `/images/${image}.png`;
  });

  return (
    <div>
      {/* <h1>{petMood}</h1> */}
      <img
        src={`/images/${petMood}.png`}
        alt="cat"
        className={petMood}
        style={{ width: "200px" }}
      />
      <h2>{moodText}</h2>
      <button
        onClick={() => {
          setFeedCount(feedCount + 1);
          setShowHint(true);
          if (feedCount >= 3) {
            setPetMood("fedTooMuch");
            setMoodText("You fed me too much, Hooman");
          } else {
            setPetMood("fed");
            setMoodText("I LOVE FOOD");
          }
        }}
      >
        Feed 🍗
      </button>
      <button
        onClick={() => {
          setPetCount(petCount + 1);
          setShowHint(true);

          if (petCount >= 3 && petCount <= 6) {
            setPetMood("Petting");
            setMoodText("ILY HOOMAN");
          } else if (petCount >= 7 && petCount <= 10) {
            setPetMood("NoPetting");
            setMoodText("THATS ENOUGH. Enough pets for now");
          } else if (petCount >= 11) {
            setPetMood("TooManyPets");
            setMoodText("I'M OVERSTIMULATED. STOP PETTING ME");
          } else {
            setPetMood("Pet");
            setMoodText("You're my favorite, hooman");
          }
        }}
      >
        Pet 🩷
      </button>
      <button
        onClick={() => {
          setPetMood("ignored");
          setMoodText("...");
          setShowHint(false);
        }}
      >
        Ignore 💔
      </button>
      <button
        onClick={() => {
          setPetMood("Annoyed");
          setMoodText("I will remember this.");
          setShowHint(false);
        }}
      >
        Annoy 😈
      </button>
      <button
        onClick={() => {
          setFeedCount(0);
          setPetCount(0);
          setPetMood("smiling");
          setMoodText("Just existing");
          setShowHint(false);
        }}
      >
        {" "}
        Reset{" "}
      </button>

      {showHint && (
        <p className="hint-text">💡 Try clicking the button multiple times…</p>
      )}
    </div>
  );
}

export default App;
