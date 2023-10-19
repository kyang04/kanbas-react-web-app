import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle} from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "700px" }}>
                <AiFillCheckCircle style={{ color: "green", fontSize: "24px" }} />
                <p style={{ color: "green", fontSize: "24px", marginLeft: "5px", marginTop: "15px" }}>Published</p>
                <button type="button" className="btn btn-secondary" style={{ marginLeft: '5px' }}>
                    <FaEllipsisV />
                </button>
            </div>
            <hr />
            <div >
                <h2>Assignment Name</h2>
                <input value={assignment.title} className="form-control mb-2" style = {{maxWidth : "900px"}}/>
                <div style={{ flex: 1 }}></div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary" style={{ marginLeft: "700px"}}>
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger" >
                        Save
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    );
}


export default AssignmentEditor;