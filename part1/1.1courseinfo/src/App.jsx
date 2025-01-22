
const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    let parts = props.parts.map(part => [part.name, part.exercises])
    console.log(parts)
    return (
        <div>
            {parts.map((part) => {
                console.log(part)
                return (<Part part={part[0]} exercise={part[1]} />)
            })}
        </div>
    )
}

const Total = (props) => {
    let sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

    return (
        <>
            <p>Number of exercises {sum}</p>
        </>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


export default App