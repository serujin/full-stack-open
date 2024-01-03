const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => (
  <>
    <p>
      {props.parts[0]} {props.exercises[0]}
    </p>
    <p>
      {props.parts[1]} {props.exercises[1]}
    </p>
    <p>
      {props.parts[2]} {props.exercises[2]}
    </p>
  </>
);
const Total = (props) => (
  <p>Number of exercises {props.exercises.reduce((acc, val) => acc + val)}</p>
);

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];

  const exercises = [10, 7, 14];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
