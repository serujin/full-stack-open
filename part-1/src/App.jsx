import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;
const Text = ({ text }) => <p>{text}</p>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Display = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ goodData, neutralData, badData }) => {
  const allFeedback = goodData.value + neutralData.value + badData.value;
  const average = goodData.value / allFeedback - badData.value / allFeedback;
  const positivePercentage = (goodData.value / allFeedback) * 100;
  const positivePercentageText = `${positivePercentage} %`;
  const zeroPercentageText = "0 %";

  return (
    <>
      <Title text={"Statistics"} />
      {allFeedback > 0 ? (
        <>
          <Display text={goodData.text} value={goodData.value} />
          <Display text={neutralData.text} value={neutralData.value} />
          <Display text={badData.text} value={badData.value} />
          <Display text={"All"} value={allFeedback} />
          <Display text={"Average"} value={average ? average : 0} />
          <Display
            text={"Positive"}
            value={
              positivePercentage ? positivePercentageText : zeroPercentageText
            }
          />
        </>
      ) : (
        <Text text={"No feedback given"} />
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodData = { text: "Good", value: good };
  const neutralData = { text: "Neutral", value: neutral };
  const badData = { text: "Bad", value: bad };

  return (
    <div>
      <Title text={"Give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={goodData.text} />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text={neutralData.text}
      />
      <Button handleClick={() => setBad(bad + 1)} text={badData.text} />
      <Statistics
        goodData={goodData}
        neutralData={neutralData}
        badData={badData}
      />
    </div>
  );
};

export default App;
