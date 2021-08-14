import Footer from "./Footer"
import Navbar from "./Navbar"

 <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
const Layout = ({ children }) => {
    return (  
        <div className="content">
            <Navbar />
            
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;


// import styles from '../styles/Home.module.css'

// export default function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>
//   }