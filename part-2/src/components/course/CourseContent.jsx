export const CourseContent = ({ part }) => {
  const { exercises, name } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
