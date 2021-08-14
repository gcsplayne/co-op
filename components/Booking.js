import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import JotformEmbeded from 'react-jotform-embed'; 


const BookingForm = () => {
  return (  
    
    <div className={styles.bookformbox}>
   

    <iframe src="https://tally.so/embed/3jyW4m?hideTitle=1" width="75%" height="600" frameBorder="0" marginHeight="0" marginWidth="0" title="Booking Form"></iframe></div>
  );
}
 
export default BookingForm ;


//
// import { useForm, ValidationError } from "@formspree/react";


// function BookingForm() {
//   const [state, handleSubmit] = useForm("xayapazn");

//   if (state.succeeded) {
//     return <p>Thanks for your submission!</p>;
//   }

//   return (
//     <Link href="https://mattplayne.getform.com/eg17x"><a><h2>here</h2></a></Link>
//   );
// }
// export default BookingForm;