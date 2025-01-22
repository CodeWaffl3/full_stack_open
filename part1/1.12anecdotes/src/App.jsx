import { useState } from 'react'

const TopRank = ({anecdote}) => {
    return (
        <>
            <h2>Top Voted Anecdote</h2>
            <p>{anecdote}</p>
        </>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [selected, setSelected] = useState(getRandomInt(0,anecdotes.length))
    const [votes, setVotes] = useState(new Uint16Array(anecdotes.length))



    const getTopRankIndex = (array) => {
        const index = array.reduce((accumulator, currentValue, index, arr) => {
            console.log("REDUCE OPERATION CYCLE", index, "Accumulator:", accumulator);
            if (currentValue > arr[accumulator]) {
                return index;
            }
            else
            {
                return accumulator;
            }
        }, 0);
        console.log("TOP RANK INDEX IS", index);
        return index;
    };

    const topRankAnecdote = anecdotes[getTopRankIndex(votes)];


    const voteCurrentAnecdote = () => {
        const newVotes = votes.map((e,index)=>{
            if (index === selected)
            {
                return e + 1;
            }
            return e
        });
        setVotes(newVotes);
        console.log("New Votes",newVotes);
    }

    const nextAnecdote = () => {
        if (selected >= (anecdotes.length - 1))
        {
            setSelected(0)
        }
        else
        {
            setSelected(selected + 1)
        }
        console.log("BUTTON PRESS selected value:", selected)
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <button onClick={() => voteCurrentAnecdote()}>Vote</button>
            <button onClick={() => nextAnecdote()}>Get Next!</button>
            <TopRank anecdote={topRankAnecdote} />
        </div>
    )
}

export default App