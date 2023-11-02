import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiGlasses } from "react-icons/bi"

function Courses({ courses }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { pathname } = useLocation();
    const activeLink = links.find((link) => pathname.includes(link));
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center"}}>
                <GiHamburgerMenu size={30} style={{ marginLeft: '20px', color: '#b52828' }} />
                <h3 style={{ marginLeft: '10px' }}>
                    <span style={{ color: '#b52828' }}>{course.name}</span> > {activeLink}
                </h3>
                <button  className="btn btn-secondary" style={{ marginLeft: '220px' }}> <BiGlasses/> Student View</button>
            </div>
            <hr/>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;