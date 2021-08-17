import styled from 'styled-components'
import styles from '../styles/Home.module.css'

import { useForm, ValidationError } from "@formspree/react";


export default function Form() {
  const [state, handleSubmit] = useForm("mbjqzrab");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (

        <div className={styles.formbox}>
        <div className={styles.form}>
        <p className={styles.para}>Matt Playne has news for you!<br /></p>
        
         <p className={styles.info}>(Sign-up for free music and updates)</p>
         <iframe src="https://tally.so/embed/nGzYpw?hideTitle=1&alignLeft=1&transparentBackground=1" width="100%" height="160" frameBorder="0" marginHeight="0" marginWidth="0" title="Email Capture"></iframe>
         </div>
    </div>
  );
}
// {/* <div className={styles.form}>
    
//     <form onSubmit={handleSubmit}>
      
      
//       <label htmlFor="name">Name</label>
//       <input id="name" type="text" name="name" />
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <ValidationError prefix="Name" field="text" errors={state.errors} />
//       {/* <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//       <ValidationError errors={state.errors} />
//     </form>
//     </div> */}