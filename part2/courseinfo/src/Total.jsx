const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <p>
      <b> Total of {total} exercises</b>
    </p>
  );
};
export default Total;
