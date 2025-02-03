import {useState} from 'react';

const Country = ({country}) => {
    const [show, setShow] = useState(false)

    if (show) {
        const name = country.name.common
        const capital = country.capital
        const official_name = country.name.official

        return (
            <div key={official_name}>
                <h1>{name}</h1>
                <p>Capital: {capital}</p>
                {country.languages && Object.entries(country.languages)
                    .map(([code, language]) => <li key={code}>{language}</li>)
                }
                <br/>
                <img src={country.flags.png} alt={country.flags.alt}/>
            </div>
        );
    }

    return (
        <>
            <li>
                {country.name.common}
                <button onClick={() => setShow(!show)}>Show</button>
            </li>
        </>
    );
};

export default Country;