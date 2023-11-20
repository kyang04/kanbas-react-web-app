import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

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
                <li className="list-group-item">
                    <div className="float-end">
                        <button onClick={handleAddModule} className="btn btn-primary">
                            Add</button>
                        <button onClick={() => handleUpdateModule()} className="btn btn-success">
                            Update
                        </button>
                    </div>
                    <input value={module.name} className="form-control"
                           onChange={(e) =>
                               dispatch(setModule({ ...module, name: e.target.value }))
                           }/>
                    <textarea value={module.description} className="form-control"
                              onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))
                              }/>
                </li>

                {modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item list-group-item-secondary" style={{ marginBottom: '30px' }}>
                                <div className= "float-end">
                                    <button className= "btn btn-success"
                                            onClick={(event) => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button className= "btn btn-danger"
                                            onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                </div>
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                                <p>{module._id}</p>
                            </li>))}
            </ul>
        </div>
    );
}

export default ModuleList;