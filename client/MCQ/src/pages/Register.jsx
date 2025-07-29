import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <p>
          Create Account, <span>register to get started</span>
        </p>
        <button className="oauthButton">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M21.35 11.1H12v2.9h5.3c-.2 1.2-.9 2.3-2 3.1v2.6h3.2c1.9-1.8 2.9-4.5 2.9-7.6 0-.6-.1-1.2-.1-1.9z"
            />
            <path
              fill="#34A853"
              d="M12 22c2.4 0 4.4-.8 5.9-2.1l-3.2-2.6c-.9.6-2 .9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H3.2v2.7C4.8 19.9 8.1 22 12 22z"
            />
            <path
              fill="#4A90E2"
              d="M6.9 13.4c-.2-.6-.4-1.3-.4-2s.1-1.4.4-2V6.7H3.2C2.4 8.3 2 10.1 2 12s.4 3.7 1.2 5.3l3.7-3.9z"
            />
            <path
              fill="#FBBC05"
              d="M12 4.6c1.3 0 2.5.4 3.4 1.3l2.5-2.5C16.4 1.7 14.3 1 12 1 8.1 1 4.8 3.1 3.2 6.7l3.7 3.9c.7-2.2 2.7-3.8 5.1-3.8z"
            />
          </svg>
          Continue with Google
        </button>
        <button className="oauthButton">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.8-.6 1.7-1 .3-.5.7-1.1 1-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.8 1.1 1.8 1.1 3 0 4.4-2.7 5.3-5.3 5.7.7.6 1.2 1.6 1.2 3.1v4.5c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.6 18.4.5 12 .5z" />
          </svg>
          Continue with Github
        </button>

        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit" className="continueBtn">
          Register
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f7f7f7;

  .form {
    background: #e4e4e4;
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.9rem;
    color: #555;
  }

  .oauthButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    border: none;
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    width: 100%;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    hr {
      flex: 1;
      height: 1px;
      background-color: #999;
      border: none;
    }

    span {
      margin: 0 0.5rem;
      color: #666;
    }
  }

  input {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }

  .continueBtn {
    background-color: #202020;
    color: white;
    width: 100%;
    padding: 0.6rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
`;
