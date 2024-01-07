import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Display = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodText = "Good";
  const neutralText = "Neutral";
  const badText = "Bad";

  const allFeedback = good + neutral + bad;
  const average = good / allFeedback - bad / allFeedback;
  const positivePercentage = (good / allFeedback) * 100;
  const positivePercentageText = `${positivePercentage} %`;
  const zeroPercentageText = "0 %";

  return (
    <div>
      <Title text={"Give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={goodText} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={neutralText} />
      <Button handleClick={() => setBad(bad + 1)} text={badText} />
      <Title text={"Statistics"} />
      <Display text={goodText} value={good} />
      <Display text={neutralText} value={neutral} />
      <Display text={badText} value={bad} />
      <Display text={"All"} value={allFeedback} />
      <Display text={"Average"} value={average ? average : 0} />
      <Display
        text={"Positive"}
        value={positivePercentage ? positivePercentageText : zeroPercentageText}
      />
    </div>
  );
};

export default App;
