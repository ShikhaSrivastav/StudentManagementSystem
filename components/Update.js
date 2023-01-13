
import { useEffect,useState } from "react";
import { useLocation ,useHistory} from "react-router-dom";
import StudentService from "./StudentService";
const Update=()=>{
    let[studarr,setstudarr]=useState([]);
    let state=useLocation().state;

    useEffect(()=>{
        setstudarr({...state.stud})

    },[])
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setstudarr({...studarr,[name]:value})
    }

    const updateStudent=()=>{
        StudentService.updateStudent(studarr).then((response)=>{
            console.log(response);

        }).catch((err)=>{console.log("error in updating......",err)})

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
                
                <button type="button" id="btn1" name="btn1" onClick={updateStudent}>Update Student</button>
                <button type="button" id="btn2" name="btn2">Cancel</button>
            </form>
        </div>
    )
}
export default Update;