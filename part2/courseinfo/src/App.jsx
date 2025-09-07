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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </>
  )
}

export default App
