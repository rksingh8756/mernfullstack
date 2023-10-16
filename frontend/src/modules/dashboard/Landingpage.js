import React,{useEffect,useState} from "react";
import axios from 'axios'
import { Link } from'react-router-dom';
import '../css/global.css'
function Landingpage(){
            
                const [mydata, setdata]= useState([]);
                const mygetalldata = () => {
                      axios.get('http://localhost:7800/getdata').then((res) => {
                      console.log(res.data);
                     setdata(res.data)
                     })
                }
       useEffect(() => {
          mygetalldata();
       }, []);


         const deleterecor = async(id) =>{
            await axios.delete(`http://localhost:7800/deleterecord/${id}`).then((res)=>{
                console.log(res.data);
                 mygetalldata();
            });
         }

    return(
        <div className="container page border rounded marginbtn">
           <div className="row " >
              <div className="col-12  ">
                     <h1>Dashhboard</h1>
                     <button type="button" onClick={mygetalldata}>fetch</button>
              </div>
           </div>
           <div className="row " >
               <div className="col-12 ">
                   <table className="table table-bordered  ">
                       <thead >
                          <tr>
                            <th scope="col">MongoDBI</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">phone</th>
                            <th scope="col">Gender</th>
                            <th scope="col">city</th>
                            <th scope="col">Action</th>
                          </tr>

                       </thead>
                       <tbody>
                            {mydata.map((item)=>{
                                return(
                                    <tr key={item._id}>
                                        <th scope="row"> {item._id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>
                                           <Link className="btn btn-info btn-sm" to ={`details/${item._id}`}>View</Link>
                                           <Link className="btn btn-warning btn-sm ms-2" to={`editrecord/${item._id}`}>Edit</Link>
                                           <button className="btn btn-danger btn-sm ms-2" onClick={()=>deleterecor(item._id)}>Delete</button>
                                        
                                        </td>

                                    </tr>
                                )
                            })}
                       </tbody>
                   </table>
                  
               </div>
           </div>
        </div>
    )
}

export default Landingpage;