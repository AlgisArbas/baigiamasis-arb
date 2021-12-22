import Input from "./Input";
import Button from "./Button";

function InputContainer(){
    return <div className='inputContainer'>
        Name:
        <Input />
        Password:
        <Input />
        Repeat password:
        <Input />

        <Button />

    </div>
}

export default InputContainer