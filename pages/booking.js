import styles from '../styles/Home.module.css'
import Booking from "../components/Booking";

export default function BookingPage() {
    return (
        <div className={styles.container}>
        <main>
            <Booking />
        </main>
        </div>
    );
}