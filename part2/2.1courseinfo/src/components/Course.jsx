const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => {
    const total = sum.reduce((acc, cur) => acc + cur, 0);
    return <b>Number of exercises {total}</b>
}

const Part = ({ name, exercises }) =>
    <p>
        {name} {exercises}
    </p>

const Content = ({parts}) => {
    return <>
        {parts.map((part) => {
        return (
            <Part name={part.name} exercises={part.exercises} key={part.id}/>
            )
        })}
    </>;
}

const Course = ({course}) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.map((part)=> part.exercises)} />
        </>
    );
};

export default Course;