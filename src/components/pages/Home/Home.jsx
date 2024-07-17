import Header from "../../Header/Header";
import "./Home.css";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="home">
          <div className="home-text">
            <h1>Bienvenido al foro de Desarrollo de Software</h1>
            <p>Conecta, colabora y aprende</p>
            <a href="#">Interactúa ya</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
