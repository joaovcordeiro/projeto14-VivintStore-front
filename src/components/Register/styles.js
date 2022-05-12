import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #41382f;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: auto;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  background-color: #665f55;
`;

export const FormTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 85%;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: #b2aeab;

  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 85%;
  height: 55px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #41382f;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
`;

export const Error = styled.div`
  display: flex;
  width: 80%;
  padding: 0.5rem;
`;

export const ErrorText = styled.p`
  color: #f00;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;

export const Login = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;