const Header = (props) => <h1>{props.course.name}</h1>;
const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);
const Content = (props) => (
  <div>
    {props.course.parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
);
const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.course.parts.reduce((acc, val) => acc + val.exercises, 0)}
  </p>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
