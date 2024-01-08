const Title = ({ text }) => <h1>{text}</h1>;

const CourseContent = ({ part }) => {
  const { exercises, name } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const CourseTotal = ({ parts }) => {
  const totalExercises = parts.reduce((acc, val) => (acc += val.exercises), 0);
  return (
    <p>
      <b>Total of {totalExercises} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <>
      <Title text={name} />
      {parts.map(({ id, ...part }) => (
        <CourseContent key={id} part={part} />
      ))}
      <CourseTotal parts={parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
