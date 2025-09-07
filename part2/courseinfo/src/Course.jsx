const Header = (props) => {
  return (
    <>
      <h2>{props.course.name}</h2>
    </>
  )
}

const Part = (props) => {
  console.log(props);
  return(
    <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
    </>
  )
}

const Content = (props) => {
  return props.course.map((each) => {
    return (
      <div>
        <Part part={each}/>
      </div>
    )
  })
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
  return props.courses.map((each) => {
    return (
      <div>
        <Header course={each}></Header>
        <Content course={each.parts}></Content>
        <Total course={each}></Total>
      </div>
    )
  })
}

export default Course
