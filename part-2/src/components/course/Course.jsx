import { Title } from "../Title";
import { CourseContent } from "./CourseContent";
import { CourseTotal } from "./CourseTotal";

export const Course = ({ course }) => {
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
