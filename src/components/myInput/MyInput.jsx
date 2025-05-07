
function MyInput({name, type, placeholder,label }) {

    return (
        <label>
            {label}
       <input name={name} type={type} placeholder={placeholder} />
      </label>
      
    )
}
export default MyInput;