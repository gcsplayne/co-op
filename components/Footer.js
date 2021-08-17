import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image'



const Footer = () => {
    return (
       <footer>
             
            {/* <div className='footlogo'>
            <p>Website Created By: </p> 
          <Image src="/images/logo_black.png" width={60} height={60} alt="footerlogo"></Image>
          <br/>Email: mattplayne@gmail.com
        <br/>Phone: 705-937-1421
        </div> */}
        <div className='footlogo'>
        <p>Website Created By: </p>
        <Link href="/"><a className={'footlink'}>
          <Image src="/images/logo_black.png" width={60} height={60} alt="footerlogo"></Image>
          </a></Link> </div>
         <div className='footcontact'>
          <br/>Email: mattplayne@gmail.com
        <br/>Phone: 705-937-1421
        </div>
       
            </footer>
    )
}

export default Footer
