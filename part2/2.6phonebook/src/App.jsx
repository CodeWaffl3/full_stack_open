import {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import bookHandler from "./services/phonebook_handler.js"




const App = () => {
    const [persons, setPersons] = useState([])
    const [filter,setFilter] = useState("")
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        bookHandler.getAllPhoneNumbers().then((response) => {
            setPersons(response)
        });
    },[])


    const addName = (event) => {
        event.preventDefault()
        if (newName.length === 0 || newNumber.length === 0) {
            alert("Required Fields are empty")
            return
        }
        if (persons.some((element) => element.name === newName)) {
            if (window.confirm("Would you like to change the number?")){
                const alterNumber = persons.find((person) => person.name === newName)

                const newObject = {
                    ...alterNumber,
                    number: newNumber,
                }
                bookHandler.update(alterNumber.id, newObject)
                    .then((response) => {
                        setPersons(persons.map((person) => person.name !== response.name ? person : response));
                        setNotification({content:`${response.name}'s number has been Changed!`, error: false})
                        setTimeout(() => {
                            setNotification(null)
                        }, 5000);
                        setNewName('');
                        setNewNumber('');
                    });
            }
            return
        }
        const nameObject = {
            name: newName,
            number: newNumber,
        }

        bookHandler.create(nameObject).then(response => {
            setPersons(persons.concat(response))
            setNewName('')
            setNewNumber('')

            setNotification({content:`Added ${response.name} to the phone book!`, error: false})
            setTimeout(() => {
                setNotification(null)
            }, 5000)
        });

    }

    const removePerson = (id, name) => {
        window.confirm(`Are you sure you want to remove ${name}?`)
        bookHandler.remove(id)
            .then((response) => {
            setPersons(persons.filter((person) => person.id !== response.id))
        })
            .catch((error) => {
                setNotification({content: "The person you are trying to remove is already deleted from the server", error: true})
                setTimeout(() => {
                    setNotification(null)
                }, 5000);
                setNewName('');
                setNewNumber('');
            })
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter value={filter} onChange={(event) => setFilter(event.target.value)} />
            <h2>Add new</h2>
            <PersonForm
                addName={addName}
                newName={newName}
                newNumber={newNumber}
                onChangeName={(event) => setNewName(event.target.value)}
                onChangeNum={(event) => setNewNumber(event.target.value)} />
            <Notification message={notification}/>
            <h2>Numbers</h2>
            <Persons filter={filter} persons={persons} remove={removePerson} />
        </div>
    )
}

export default App