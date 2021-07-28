import styled from 'styled-components'
import styles from '../styles/Home.module.css'

import { useForm, ValidationError } from "@formspree/react";

const FormBox = styled.div`

width: 62rem;
padding: 1rem;
background: rgb(221,230,213,0.5);
color: #667b68;
text-align: center;
font-size: 15px;
justify-content: center;
align-items:center;
width: 100%;
`;





export default function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqzrab");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <FormBox>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="text" errors={state.errors} />
      {/* <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
    </FormBox>
  );
}
