import ModuleList from "../Modules/ModuleList";
import { FaFileImport} from "react-icons/fa"
import { TbFileImport } from "react-icons/tb"
import { BiTargetLock } from "react-icons/bi"
import { BiSolidBarChartAlt2 } from "react-icons/bi"
import { FaBullhorn } from "react-icons/fa"
import { AiOutlineBell } from "react-icons/ai"
import { PiDotOutlineFill } from "react-icons/pi"
function Home() {
    return (
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <ModuleList />
                <div style={{ marginLeft: '50px' }}>
                    <div>
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '10px' }}>
                            <FaFileImport/> Import Existing Content
                        </button> <br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <TbFileImport /> Import From Commons
                        </button> <br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <BiTargetLock/>  Choose Home Page
                        </button><br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <BiSolidBarChartAlt2/>  View Course Stream
                        </button><br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <FaBullhorn/> New Annoucement
                        </button><br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <BiSolidBarChartAlt2/> New Analytics
                        </button><br />
                        <button type="button" className="btn btn-secondary" style={{ width: '220px', marginTop: '5px' }}>
                            <AiOutlineBell/> View Course Notifications
                        </button><br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>To Do</span>
                        <hr />
                        <i style={{ color: 'red', fontSize: '30px' }}>
                            <PiDotOutlineFill />
                        </i>
                        <span style={{ color: 'red' }}>Grade A1 - HTML </span>
                        <span style={{ color: 'grey'}}>X</span>
                        <br/>
                        <span style={{ color: 'grey' }}> 100 pts Due Sep 18</span>
                        <br />
                    </div>
                </div>
            </div>
    );
}

export default Home;
