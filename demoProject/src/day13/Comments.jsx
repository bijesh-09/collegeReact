import { useEffect, useState } from "react";
import axios from "axios";
import { ClimbingBoxLoader, PacmanLoader } from "react-spinners";

const Comments = () => {
    let [comments, setComments] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null)
    const fetchAllComments = async () => {
        setLoading(true);
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setComments(res.data);
        } catch (error) {
            console.log("Someting went wrong: ", error)
            setError("Something went wrong while fetching comments")
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(
        () => fetchAllComments(), []
    )
    return (
        <div>
            <h3>All comments</h3>
            <ClimbingBoxLoader color="blue" loading = {loading} />
            {
                error && <b style={{color: "red"}}>Failed Fetch: {error}</b>
            }
            {
                comments.map(
                    (c, idx) => {
                        return (
                            <div key={`${c.id}-{c.name}`}>
                                <p>{idx+1}. {c.name} </p>
                                <p>{c.email}</p>
                                <hr />
                            </div>

                        )
                    }
                )
            }
        </div>
    )
}
export default Comments;