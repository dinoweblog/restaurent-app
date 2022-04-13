import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const H1 = styled.h1`
  text-align: center;
`;
const Div = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 1px green dashed;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 8px;
  margin-top: 30px;
  div {
    display: flex;
    justify-content: space-between;
  }
  input {
    height: 33px;
    padding-left: 15px;
    outline: none;
  }
  button {
    width: 40%;
    height: 38px;
    border: none;
    background-color: tomato;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }
  .login {
    background-color: #116811;
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <H1>Welcome Home Page</H1>
      <div>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Signup
        </button>
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </Div>
  );
};
