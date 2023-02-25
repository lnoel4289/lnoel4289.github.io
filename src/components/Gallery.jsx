import dwellings from "../data/dwellings";
import DwellingCard from "./DwellingCard";

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      {dwellings.map((dwelling) => (
        <DwellingCard key={dwelling.id} dwelling={dwelling} />
      ))}
    </div>
  );
};

export default Gallery;
