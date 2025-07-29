import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 350px;
  margin: 60px auto;
  background: #e8e8e8;
  padding: 25px 20px;
  border-radius: 8px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 2px;
  color: #333;
`;

const Subtitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #777;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1.5px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #f0f0f0;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;
  color: #555;
  font-weight: 600;
  font-size: 12px;

  & > div {
    flex-grow: 1;
    height: 1px;
    background: #999;
  }

  & > span {
    margin: 0 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: 5px;
  border: 1.5px solid black;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #0073e6;
  }
`;

const SubmitButton = styled(Button)`
  justify-content: center;
  font-weight: 700;
  font-size: 15px;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px); /* Adjust if your navbar is taller */
  padding-top: 70px; /* Push content below navbar */
  background-color: #f5f5f5;
`;

const IconGoogle = () => (
  <svg className="icon" viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const IconGithub = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 ..." />{" "}
    {/* Use a full path or simplified icon */}
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    localStorage.setItem("token", "dummy-token");
    alert("Login successful!");
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          Welcome, <Subtitle>sign in to continue</Subtitle>
        </Title>

        <Button>
          <IconGoogle />
          Continue with Google
        </Button>

        <Button>
          <IconGithub />
          Continue with Github
        </Button>

        <Separator>
          <div />
          <span>OR</span>
          <div />
        </Separator>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit">Continue &gt;&gt;</SubmitButton>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
