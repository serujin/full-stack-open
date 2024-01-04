const Header = (props) => <h1>{props.course}</h1>;
const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);
const Content = (props) => (
  <div>
    {props.parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
);
const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.parts.reduce((acc, val) => acc + val.exercises, 0)}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
