import Footer from "./Footer"
import Navbar from "./Navbar"


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