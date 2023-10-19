import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div>
            <div className="float-start w-25" >
                <input
                    type="email"
                    className="form-control"
                    id="input1"
                    placeholder="Search for Assignment"
                />
            </div>
            <div className="float-none" style={{ marginLeft: "600px", marginTop: "20px" }}>
                <button type="button" className="btn btn-secondary">
                    <AiOutlinePlus/>Group
                </button>
                <button type="button" className="btn btn-danger">
                    <AiOutlinePlus/>Assignment
                </button>
                <button type="button" className="btn btn-secondary" style={{ paddingTop: "14px" }}>
                    <FaEllipsisV/>
                </button>
            </div>
            <div className="list-group" style = {{marginTop: '10px'}}>
                <li className="list-group-item list-group-item-secondary">
                    <h3>
                        Assignments for course {courseId}
                        <span className="badge rounded-pill" style={{ marginLeft: "800px", border: "1px solid black", color: "black" }}>
                           40% of Total Grade
                        </span>
                        <span >
                           +
                            <FaEllipsisV/>
                        </span>
                    </h3>
                </li>

                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                    >
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
