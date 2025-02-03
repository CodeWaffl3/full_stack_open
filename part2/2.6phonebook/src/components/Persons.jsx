import React from 'react';

const Persons = ({filter, persons, remove}) => {

    const personsShown = filter.length === 0 ? persons : persons.filter((element) => element.name.toLowerCase().includes(filter.toLowerCase()))
    const removePerson = (id, name, func) => {
        func(id,name)
    }

    return (
        <div>
            {personsShown.map((person) =>
                <p key={person.name}>{person.name} {person.number} <button onClick={() => removePerson(person.id, person.name, remove)}>Delete Contact</button></p>)
            }
        </div>
    );
};

export default Persons;