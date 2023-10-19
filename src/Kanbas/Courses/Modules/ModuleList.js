import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div style = {{minWidth: '800px', marginTop: '30px'}}>
            <div style = {{marginLeft: '30px'}}>
                <button type="button" className="btn btn-secondary" style={{ marginRight: '5px' }}>Collapse All</button>
                <button type="button" className="btn btn-secondary" style={{ marginRight: '5px' }}>View Progress</button>
                <div className="btn-group" style={{ marginRight: '10px' }}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiOutlineCheckCircle style={{ color: 'green', marginRight: '5px' }} /> Publish All
                    </button>
                    <ul className="dropdown-menu">
                    </ul>
                </div>
                <button type="button" className="btn btn-danger" style={{ marginRight: '5px' }}>
                    <AiOutlinePlus /> Module
                </button>
                <button type="button" className="btn btn-secondary" style={{ marginRight: '5px' }}>
                    <FaEllipsisV />
                </button>
            </div>
            <hr/>
            <ul className="list-group">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item list-group-item-secondary" style={{ marginBottom: '30px' }}>
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default ModuleList;