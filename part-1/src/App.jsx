import { useState } from "react";

const Text = ({ text }) => <p>{text}</p>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map(() => 0));

  const currentAnecdote = anecdotes[selected];
  const currentVotes = votes[selected];

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    return randomIndex !== selected
      ? randomIndex
      : getRandomAnecdote(anecdotes, selected);
  };

  const updateVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <Text text={currentAnecdote} />
      <Text text={`Has ${currentVotes} votes`} />
      <Button handleClick={() => updateVote()} text="Vote" />
      <Button
        handleClick={() => setSelected(getRandomAnecdote())}
        text={"Next anecdote"}
      />
    </div>
  );
};

export default App;
