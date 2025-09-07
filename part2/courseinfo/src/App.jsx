const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
    </>
  )
}

const Content = (props) => {
  return (
  <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
  </div>
  )
  
}

const Total = (props) => {
  const exerciseCount = props.course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <>
      <p>
        <b>total of {exerciseCount} exercises</b>
      </p>
    </>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course}></Header>
      <Content course={props.course}></Content>
      <Total course={props.course}></Total>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
