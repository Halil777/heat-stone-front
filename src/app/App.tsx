import { Container, Divider } from "@mui/material";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Achievements from "../components/achievements/Achievements";
import StoneRadiators from "../components/stoneRadiators/StoneRadiators";
import CostCalculator from "../components/costCalculator/CostCalculator";
import HeatingCostEstimator from "../components/heatingCostEstimator/HeatingCostEstimator";
import Advantages from "../components/advantages/Advantages";
import FrequentlyQuestions from "../components/frequentlyQuestions/FrequentlyQuestions";
import ContactForm from "../components/form/ContactForm";
import Footer from "../components/footer/Footer";

const App = () => {
  return (
    <Container>
      <Header />
      <Divider sx={{ mb: 3 }} />
      <Navbar />
      <br />
      <br />
      <Banner />
      <br />
      <Achievements />
      <StoneRadiators />
      <CostCalculator />
      <HeatingCostEstimator />
      <Advantages />
      <FrequentlyQuestions />
      <ContactForm />
      <Footer />
    </Container>
  );
};

export default App;
