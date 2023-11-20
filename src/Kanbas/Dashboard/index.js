import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import backgroundImage from "./bright-blue-color-solid-background-1920x1080.png";
function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse
}) {


    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} className="btn btn-success">
                Add
            </button>
            <button onClick={updateCourse} className="btn btn-primary">
                Update
            </button>
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
                                        <button className="btn btn-danger"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course);
                                            }}>
                                            Delete
                                        </button>
                                        <button className="btn btn-warning"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>
                                        <p className="card-text">{course.number}
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