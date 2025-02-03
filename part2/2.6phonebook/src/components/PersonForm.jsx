const PersonForm = ({addName, newName, newNumber, onChangeName, onChangeNum}) => {
    return (
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={onChangeName} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={onChangeNum}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
    );
};

export default PersonForm;