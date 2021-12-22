import Button from "./Button";

function Navbar(){
    return
    <div className='mainNavigation'>
        <div className='navbar'>
            <Button name='Registration'/>
            <Button name='Login'/>
            <Button name='Products'/>
        </div>
        <h2>SKELBIU LT</h2>
    </div>

}

export default Navbar