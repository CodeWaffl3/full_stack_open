const Filter = ({value, onChange}) => {
    return(
        <>
            <p>Filter <input value={value}  onChange={onChange} type="text"/></p>
        </>
    )
}

export default Filter