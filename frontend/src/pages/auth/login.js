import React,{useState} from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import authServices from "../../services/authServices";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("Logging in with email,password");
        try {
            await authServices.login({ email, password });
            toast.success("Login successful!");
            navigate("/dashboard");
          } catch (error) {
            toast.error(error.response?.data?.message || "Login failed!");
          }
    }


    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Card style={{ width: "400px" }} className="p-4 shadow">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Login
            </Button>
            </Form>
            <div className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </Card>
        </Container>
    )
}

export default Login;