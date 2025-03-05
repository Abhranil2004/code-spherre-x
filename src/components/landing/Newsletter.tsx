import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;

  h1 {
    font-weight: normal;
    margin: 0vh;
    font-size: 4vh;
  }
  h2 {
    font-weight: normal;
    color: var(--themeTextSecondaryDark);
    font-size: 3vh;
    margin: 0vh;
    margin-bottom: 2vh;
    margin-top: 0.5vh;
  }
  .form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input-field {
    width: 20vw;
    outline: none;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.04) !important;
    padding: 1.5vh 2vh;
    border-radius: 1.5vh;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 10.93%,
      rgba(255, 255, 255, 0) 90%
    );
    color: white;
    font-size: 2.8vh;
  }
  .on-error {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: var(--theme-red);
  }
  .on-success {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: var(--theme-green);
  }
  .submit-btn {
    margin-left: -1vw;
    padding: 1.5vh 2vh;
    border-radius: 0 1.5vh 1.5vh 0;
    font-size: 2.8vh;
    background: var(--button-blue);
    cursor: pointer;
    color: white;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 5vh;
    .form {
      flex-direction: column;
      align-items: center;
    }
    .input-field {
      width: 60vw;
      padding: 2vh;
      border-radius: 1vh;
      font-size: 2.5vh;
    }
    .submit-btn {
      margin-top: 2vh;
      width: 68vw;
      padding: 2vh;
      border-radius: 1vh;
      font-size: 2.5vh;
    }
    h2 {
      font-size: 2.5vh;
    }
  }
`;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [componentState, setComponentState] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const options = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.EMAIL_API,
      },
    };

    const data = {
      updateEnabled: false,
      email: email,
    };

    axios
      .post("https://api.sendinblue.com/v3/contacts", data, options)
      .then(() => {
        setComponentState("success");
      })
      .catch(() => {
        setComponentState("error");
      });
  };

  return (
    <NewsWrapper>
      
      
      
    </NewsWrapper>
  );
}
