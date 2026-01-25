import CardContainer from "./components/CardContainer";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <Container>
      <Header />
      <CardContainer>
        <Main />
      </CardContainer>
      <Footer />
    </Container>
  );
}
