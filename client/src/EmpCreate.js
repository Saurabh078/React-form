import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EmpCreate=()=>{

        const[id,idchange]=useState("");
        const[name,namechange]=useState("");
        const[Phone,Phonechange]=useState("");
        const[Hobbies,Hobbieschange]=useState("");
        const[validation,valchange]=useState(false);
    
        const navigate=useNavigate();
        
    const handlesubmit=(e)=>{
       e.preventDefault(name,Phone,Hobbies);
       const empdata={id,name,Phone,Hobbies};
     
     fetch("http://localhost:8000/client",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
     }).then((res)=>{
      alert('Saved successfully');
      navigate('/')
     }).catch((err)=>{
        console.log(err.message)
     })
    }

    return(
        <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                 <h2>Employee Create</h2>                   
                    </div>
                    <div className="card-body">
                      <div className="row">
                   
                   <div className="col-lg-12">
                   <div className="form-group">
                    <label>name</label>
                    <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control" ></input>
                      {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                     </div>          
                        </div>
      
                        <div className="col-lg-12">
                   <div className="form-group">
                    <label>Phone</label>
                    <input required value={Phone} onChange={e=>Phonechange(e.target.value)} className="form-control"></input>
                   </div>          
                        </div>

                        <div className="col-lg-12">
                   <div className="form-group">
                    <label>Hobbies</label>
                    <input required value={Hobbies} onChange={e=>Hobbieschange(e.target.value)} className="form-control"></input>
                   </div>          
                        </div>   
                    <div className="col-lg-12">
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Save</button>
                        <Link to="/" className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                      </div>
                    </div>
                </div>
            </form>
        </div>

        </div>
    )
}
export default EmpCreate;