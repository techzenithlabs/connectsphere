import HeroSection from '../../components/home/HeroSection';
import Header from '../../components/includes/Header';
import '../../styles/HomePage.css';

export default function HomePage(){
    return (
        <main className='home-page'>
            <Header/>
            <HeroSection/>
        </main>
    )
}