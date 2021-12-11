const App = () => {
  const course = "Half Stack application development";
  const execerciceCounts = [10, 7, 14];
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component"
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} execerciceCounts={execerciceCounts} />
      <Total execerciceCounts={execerciceCounts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  console.log(props);
  return (
    <>
      {Part(props.parts[0], props.execerciceCounts[0])}
      {Part(props.parts[1], props.execerciceCounts[1])}
      {Part(props.parts[2], props.execerciceCounts[2])}
    </>
  );
};

const Part = (txt, count) => {
  return (
    <>
      <p>
        <b>{txt}</b>
        <div />
        {"\n"}excercises: {count}
      </p>
    </>
  );
};

function partsFn(txt, count) {
  return (
    <>
      <p>
        <b>{txt}</b>
        <div />
        {"\n"}excercises: {count}
      </p>
    </>
  );
}

const Total = (props) => {
  console.log(props);
  return (
    <b>
      total amount of excercises:{" "}
      {props.execerciceCounts[0] +
        props.execerciceCounts[1] +
        props.execerciceCounts[2]}
    </b>
  );
};
export default App;