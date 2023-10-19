import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import backgroundImage from "./bright-blue-color-solid-background-1920x1080.png";
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <div style={{ marginLeft: '50px' }}>
                <h3>Published Courses (3)</h3>
                <hr/>
                <div className=" wd-card-container">
                    {courses.map((course) => (
                        <div key={course._id} className="col">
                            <div className="card h-100">
                                <img src={backgroundImage} className="card-img-top" alt="..."/>
                                <Link to={`/Kanbas/Courses/${course._id}`} >
                                    <div className="card-body card-title">
                                        <h5>{course.name}</h5>
                                        <p className="card-text">{course._id}
                                            <br /><span style={{ fontSize: '10px' }}>Fall 2023 Semester Full Term</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;