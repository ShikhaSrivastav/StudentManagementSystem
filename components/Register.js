import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import StudentService from './StudentService';
const Register=()=>{
    let[register,setregister]=useState([]);
    let history = useHistory();
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setregister({...register,[name]:value})
    }
    const registerStud=()=>{
        StudentService.registerStudent(register).then((response)=>{
            console.log(response);
            history.push("/list");
        }
        ).catch((err)=>{console.log("data not registered")})
    }

    return(
<div>

           <form method='POST'>
            prn: <input type="text" id="prn" name="prn"
            value={register.prn}
            onChange={handleChange}></input>
            password: <input type="password" id="pwd" name="pwd"
             value={register.pwd}
            onChange={handleChange}></input>
            confirm password: <input type="password" id="confirmpwd" name="confirmpwd"
             value={register.confirmpwd}
            onChange={handleChange}></input>
            <button type='button' id='btn' name='btn' onClick={registerStud}>Register</button>
           </form> 
</div>
    )
    
}
export default Register;