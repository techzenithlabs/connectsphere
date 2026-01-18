import HeroSection from '../../components/home/HeroSection';
import Navbar from '../../layouts/Navbar';
import '../../styles/HomePage.css';

export default function HomePage(){
    return (
        <main className='home-page'>
            <Navbar/>
            <HeroSection/>
        </main>
    )
}