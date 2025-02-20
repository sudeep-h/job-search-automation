import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import authServices from "../../services/authServices";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const response = await authServices.login({ email, password });

    if (response.success) {
      navigate("/dashboard");
    } else {
      setError(response.message);
    }
  };

  const handleOAuthSuccess = async (tokenOrCode) => {
    const response = await authServices.oauthLogin(tokenOrCode);

    if (response.success) {
      navigate("/dashboard");
    } else {
      setError(response.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Card style={{ width: "400px" }} className="p-4 shadow">
            <h3 className="text-center mb-4">Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
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

            <div className="mt-3">
                <p style={{ textAlign: "center", marginBottom: "10px" ,marginTop:0}}>or</p>
                <GoogleLoginButton onSuccess={handleOAuthSuccess} />
            </div>

        </Card>
        </Container>
  );
};

export default LoginPage;
