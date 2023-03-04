import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import dwellings from "../data/dwellings";

const Home = () => {
  return (
    <div className="home">
      <Banner heading="Chez vous, partout et ailleurs" imageURL="./IMG.jpg" altTxt="Une calanque" />
      <Gallery dwellings={dwellings} />
    </div>
  );
};

export default Home;
