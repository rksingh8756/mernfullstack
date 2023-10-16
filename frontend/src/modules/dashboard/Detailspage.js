import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
    const { id } = useParams();
    const [mydata, setdata] = useState({});
    const singledata = () => {
        axios.get(`http://localhost:7800/view/${id}`).then((res) => {
            console.log(res.data)
            setdata(res.data)
        })
    }
    useEffect(() => {
        singledata();
    }, []);

    return (
        <div className='container page border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Details page</h1>
                    <div className="card border-success mb-3">
                        <div className="card-header bg-transparent border-success">Name: {mydata.name}</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">City: {mydata.city}</h5>
                            <h5 className="card-title">Phone No: {mydata.phone}</h5>
                            <h5 className="card-title">Email: {mydata.email}</h5>
                            <h5 className="card-title">Gender: {mydata.gender}</h5>
                            
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">Id: {mydata._id}</div>
                        <Link to={"/landing"} className="btn btn-info btn-lg backbtn " type='button '>Back to Dashhboard</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detailspage