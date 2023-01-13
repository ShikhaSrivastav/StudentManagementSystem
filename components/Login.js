import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import StudentService from './StudentService';

const Login=()=>{
    var[studob,setstudob]=useState([]);
    var[studarr,setstudarr]=useState([]);
    let history=useHistory();
    useEffect(()=>{
        StudentService.getRegisterDetails().then((result)=>{
            setstudarr(result.data);
        }).catch((err)=>console.log("data not found"))
    },[])
    const handleChange=(event)=>{
        let {name,value}=event.target;
        setstudob({...studob,[name]:value})
    }
    
    const validate=()=>{
        for(var i =0;i<studarr.length;i++){
            for(var j=0;j<studob.length;j++){
                if(studob.prn==studarr.prn && studob.pwd==studarr.pwd){
                    history.push("/list");
                }
                else{
                    history.push("/");
                }
            
            }
        }
            
       
    }
    
    return(
        <div>
            <form>
                prn :<input type="text" id="prn" name="prn" value={studob.prn} onChange={handleChange}></input>
                password : <input type="text" id="pwd" name="pwd" value={studob.pwd} onChange={handleChange}></input>
                <button type="button" id="btn" name="btn" onClick={validate}>Login</button>
            </form>
        </div>
    )
}
export default Login;