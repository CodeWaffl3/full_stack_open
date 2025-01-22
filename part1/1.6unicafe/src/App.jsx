import { useState } from 'react'

const Button = ({onClick, children}) => {
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

const StatLine = ({counter, text, afterTex}) => {
    return (
        <tr>
            <td>{text}:</td>
            <td>{counter} {afterTex}</td>
        </tr>
    )
}

const Stats = ({good, neutral, bad}) => {
    const total = good + neutral + bad;

    if (total > 0)
    {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <StatLine text={"Good"} counter={good}/>
                    <StatLine text={"Neutral"} counter={neutral}/>
                    <StatLine text={"Bad"} counter={bad}/>
                    <StatLine text={"Total"} counter={total}/>
                    <StatLine text={"Average"} counter={(good+(bad*-1))/total}/>
                    <StatLine text={"Positive"} counter={(good/total*100)} afterTex={"%"}/>
                </table>
            </div>
        )
    }
    else {
        return (
            <p>No Stats yet</p>
        )
    }

}


const App = () => {
    // guarda los clics de cada botón en su propio estado
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleReview = (review, setter) => {
        console.log(review)
        setter(review + 1)
    }

    return (
        <div>
            <h1>Feedback</h1>
            <Button onClick={() => handleReview(good, setGood)}>Good!</Button>
            <Button onClick={() => handleReview(neutral, setNeutral)}>Neutral</Button>
            <Button onClick={() => handleReview(bad, setBad)}>Bad Reviews</Button>
            <Stats good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

export default App