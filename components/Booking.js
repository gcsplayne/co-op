import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import JotformEmbeded from 'react-jotform-embed';


const BookingForm = () => {
  return (

    <div className={styles.bookblurb}>
    <div className={styles.bookformbox}>
    <h1>Professional & heartfelt acoustic music to compliment your next event</h1>

    {/* <h2><b>Weddings:</b></h2>
    <p> We work together to fill your special day with your favourite music - Love songs for all ages.</p>

    <div className={styles.coffeestyle}><h2><b>Restaurants - Coffee Shops - Bars:</b></h2>
    <p>Delight your customers with breathtaking ambiance - Popular and Original music for all ages.</p></div>

    <h2><b>Private Events:</b></h2>
    <p> Give your private event the relaxed and intimate vibe it deserves - Classic songs for all ages.</p>
    
     */}
    </div>
    <iframe src="https://tally.so/embed/3jyW4m?hideTitle=1" width="75%" height="600" frameBorder="0" marginHeight="0" marginWidth="0" title="Booking Form"></iframe>
    </div>
    
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