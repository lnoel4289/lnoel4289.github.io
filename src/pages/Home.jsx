import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = ({ data }) => {
  return (
    <div>
      <Banner />
      <Gallery data={data} />
    </div>
  );
};

export default Home;
