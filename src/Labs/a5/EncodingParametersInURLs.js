import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get(`${API_BASE}/a5/welcome`);
        setWelcome(response.data);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);

    const [result, setResult] = useState(0);

    const fetchSum = async (a, b) => {
        const response = await axios.get(`${API_BASE}/a5/add/${a}/${b}`);
        setResult(response.data);
    };

    const fetchSubtraction = async (a, b) => {
        const response = await axios.get(`${API_BASE}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    return (
        <div>
            {/* ... Your existing JSX ... */}
            <h3>Path Parameters</h3>
            <a
                href={`${API_BASE}/a5/add/${a}/${b}`}
                className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a
                href={`${API_BASE}/a5/subtract/${a}/${b}`}
                className="btn btn-danger">
                Subtract {a} - {b}
            </a>
            <h3>Query Parameters</h3>
            <a
                href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}
                className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a
                href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
                className="btn btn-danger">
                Subtract {a} - {b}
            </a>
        </div>
    );
}

export default EncodingParametersInURLs;