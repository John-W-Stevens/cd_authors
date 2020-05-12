import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

const AuthorsTable = props => {
    const { counter } = props
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => setAuthors(response.data.Authors))
            .catch(error => console.log("There was an issue: ", error))
    }, [counter])

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/new">Add an author</Link></p>
                    <p>We have quotes by:</p>
                </div>
            </div>    
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-striped table-bordered table-sm">
                        <thead className="thead-dark">
                            <tr>
                                <th>Author</th>
                                <th>Actions available</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            authors.map( (author, i) => (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm">Edit</button>
                                        <button className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default AuthorsTable