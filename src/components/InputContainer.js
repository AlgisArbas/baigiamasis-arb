import Input from "./Input";
import Button from "./Button";

function InputContainer(){
    return <div className='inputContainer'>
        <h1>REGISTRATION</h1>
        Name:
        <Input />
        Password:
        <Input />
        Repeat password:
        <Input />

        <Button name='Register'/>

    </div>
}

export default InputContainer