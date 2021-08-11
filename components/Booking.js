import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useForm, ValidationError } from "@formspree/react";


function BookingForm() {
  const [state, handleSubmit] = useForm("xayapazn");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Link href="https://mattplayne.getform.com/eg17x"><a><h2>here</h2></a></Link>
  );
}
export default BookingForm;