import axios from "axios";

class StudentSerive{
    constructor(){
        this.baseUrl="http://localhost:4000/";
    }

    getStudentDetails(){
        return axios.get(this.baseUrl+"details");//http://localhost:4000/details
    }
    getRegisterDetails(){
        return axios.get(this.baseUrl+"register");
    }
    addStudent(student){
        return axios.post(this.baseUrl+"details",student);

    }
    registerStudent(register){
        return axios.post(this.baseUrl+"register",register);
    }
    // updateemeployee(emp){
    //     return axios.put(this.baseUrl+"employee/"+emp.empid,emp)
    // }

    updateStudent(student){
        return axios.put(this.baseUrl+"update/"+student.rollno,student)
    }
    
}
export default new StudentSerive();
