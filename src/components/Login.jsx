import { useState } from "react";

function Login({ onLogin }) {
    const [employeeId, setEmployeeId] = useState("");
    const [username, setUsername] = useState("");
    const handlLogin = () => {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return;
        }
        onLogin();
    };
    return (
        <div className="container">
            <h2>Login</h2>
            <input type="text" placeholder="enter employee id" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
            <input type="text" placeholder="enter employee name" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handlLogin}>Login</button>
        </div>
    );
}
export default Login;

