import styles from '../styles/Home.module.css'
import LessonsForm from "../components/Lessons";


const Lessons = () => {
    return (  
        <div className={styles.container}>
        <main>
           
            <LessonsForm />
            

        </main>
        </div>
    );
}
 
export default Lessons;
