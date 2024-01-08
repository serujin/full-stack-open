export const CourseTotal = ({ parts }) => {
  const totalExercises = parts.reduce((acc, val) => (acc += val.exercises), 0);
  return (
    <p>
      <b>Total of {totalExercises} exercises</b>
    </p>
  );
};
