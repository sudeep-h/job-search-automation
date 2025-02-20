import React,{useState} from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import authServices from "../../services/authServices";
import GoogleLoginButton from "../../components/GoogleLoginButton";

import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
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

    const handleOAuthSuccess = async (tokenOrCode) => {
        const response = await authServices.oauthLogin(tokenOrCode);
    
        if (response.success) {
          navigate("/dashboard");
        } else {
          setError(response.message);
        }
    };

    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "120vh" }}>
        <Card style={{ width: "400px" }} className="p-4 shadow">
            <h3 className="text-center mb-4">Register</h3>
            {error && <Alert variant="danger">{error}</Alert>}
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

            <div className="mt-3">
                <p style={{ textAlign: "center", marginBottom: "10px" ,marginTop:0}}>or</p>
                <GoogleLoginButton onSuccess={handleOAuthSuccess} />
            </div>
        </Card>
        </Container>
    )
}

export default Register;