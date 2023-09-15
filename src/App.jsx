import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AdviceAndServices from "./pages/AdviceAndServices"
import Build from "./pages/Build"
import Design from "./pages/Design"
import RangeAndCharging from "./pages/RangeAndCharging"
import TechnicalData from "./pages/TechnicalData"
import I5Video from "./pages/i5Video"

function App() {
    return (
        <div>
            {/* add all out components and pages together to form the Layout of the web page */}
            <Navbar />
            <I5Video />
            <TechnicalData />
            <Build />
            <Design />
            <RangeAndCharging />
            <AdviceAndServices />
            <Footer />
        </div>
    )
}
export default App