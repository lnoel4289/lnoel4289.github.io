import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = ({ data }) => {
  return (
    <div>
      <h1>Accueil</h1>
      <Banner />
      <Gallery data={data} />
    </div>
  );
};

export default Home;
