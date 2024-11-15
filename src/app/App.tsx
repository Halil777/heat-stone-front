import { Container, Divider } from "@mui/material";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";

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
    </Container>
  );
};

export default App;
