
import About from './About/About'
import Health from './Health Initiatives/Health'
import Home from './Home/Home'
import Navbar from '../components/Navbar'
import Approach from './Approach/Approach'
import Team from './Team/Team'
import Testimonials from './Testimonials/Testimonials'
import Questions from './Questions/Questions'
import Footer from '../components/Footer'

const Landingpage = () => {
    return (
        <div>
            <main>

                <section>
                    <Home />
                </section>

                <section>
                    <About />
                </section>

                <section>
                    <Health />
                </section>

                <section>
                    <Approach />
                </section>

                <section>
                    <Team />
                </section>

                <section>
                    <Testimonials />
                </section>
                <section>
                    <Questions />
                </section>
            </main>

        </div>
    )
}

export default Landingpage