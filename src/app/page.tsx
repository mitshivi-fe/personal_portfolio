import Footer from "./components/footer";
import Header from "./components/Header";
import Main from "./components/main";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <CardContainer>
          <Main />
        </CardContainer>
        <Footer />
      </Container>
    </>
  );
}

function Container({ children }: any) {
  return <div className="bg-bg-200 h-full w-full p-4">{children}</div>;
}

function CardContainer({ children }: any) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="overflow-hidden rounded-lg bg-white shadow w-auto">
        <div className="px-2 py-5 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
