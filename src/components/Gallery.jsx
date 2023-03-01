import DwellingCard from "./DwellingCard";

const Gallery = ({ dwellings }) => {
  return (
    <div className="gallery">
      {dwellings.map((dwelling) => (
        <DwellingCard key={dwelling.id} dwelling={dwelling} />
      ))}
    </div>
  );
};

export default Gallery;
