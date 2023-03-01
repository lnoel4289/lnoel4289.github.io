import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import dwellings from "../data/dwellings";

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery dwellings={dwellings} />
    </div>
  );
};

export default Home;
