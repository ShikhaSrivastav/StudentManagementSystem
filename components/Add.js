import {useState} from "react";
import { useHistory } from "react-router-dom";
import StudentService from "./StudentService";
const Add=()=>{
    let [studarr,setstudarr]=useState([]);
    let history=useHistory();
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setstudarr({...studarr,[name]:value})
    }
    const addstud=()=>{
        StudentService.addStudent(studarr).then((result)=>{
            console.log("data added" + result)
            history.push("/list");
        })
    }
    
    return(
<div>
            <form action="/list" method="POST">
                Roll no: <input type="text" id="roll" 
                name="roll"
                value={studarr.rollno}
                onChange={handleChange}
                ></input>
                Name : <input type="text" id="studname" 
                name="studname"
                value={studarr.studname}
                onChange={handleChange}></input>
                Course : <input type="text" id="course" name="course" 
                value={studarr.course}
                onChange={handleChange}></input>
                DOA : <input type="text" id="DOA" name="DOA"
                value={studarr.DOA}
                onChange={handleChange}></input>
                Marks : <input type="text" id="marks" name="marks"
                value={studarr.marks}
                onChange={handleChange}></input>
                Phone no : <input type="text" id="phnno" name="phnno"
                value={studarr.phnno}
                onChange={handleChange} ></input>
                
                <button type="button" id="btn1" name="btn1" onClick={addstud}>Add Student</button>
                <button type="button" id="btn2" name="btn2">Cancel</button>
            </form>

</div>
    )
    
}
export default Add;