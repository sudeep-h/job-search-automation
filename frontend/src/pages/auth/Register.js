import React,{useState} from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import authServices from "../../services/authServices";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("Logging in with email,password");
        try {
            await authServices.register({ name,email, password });
            toast.success("Registration successful! Please log in.");
            navigate("/login");
          } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed!");
          }
    }


    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Card style={{ width: "400px" }} className="p-4 shadow">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </Form.Group>

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
                Register
            </Button>
            </Form>
            <div className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </Card>
        </Container>
    )
}

export default Register;