import { useEffect, useState } from "react";
import StudentService from "./StudentService";
import { Link } from "react-router-dom";
const StudentDetails=()=>{
    let[studob,setstudob]=useState([]);
    useEffect(()=>{
        StudentService.getStudentDetails().then((response)=>{
            setstudob(response.data);
        }).catch((err)=>{console.log("data not found")})
    },[])
    
    const renderList=()=>{
        return studob.map((student)=>{
        return <tr key={student.rollno}>
            <td>{student.rollno}</td>
            <td>{student.studname}</td>
            <td>{student.course}</td>
            <td>{student.DOA}</td>
            <td>{student.marks}</td>
            <td>{student.phnno}</td>
            <td>
            <Link to={{pathname:`/update/${student.rollno}`,state:{stud:student}}}>
                     <button type="button" className="btn btn-primary" name='btn' id="edit">Edit</button>
                </Link>
            </td>
        </tr>
        
    })
    }
    return(
        <div>
            <table>
                <thead>
                    <th>Roll no</th>
                    <th>Nmae</th>
                    <th>Course</th>
                    <th>DOA</th>
                    <th>Marks</th>
                    <th>Phoneno</th>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
                <th>
               

                </th>
            </table>
        </div>
    )
}
export default StudentDetails;