import DwellingCard from "./DwellingCard";

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((dwelling) => (
        <DwellingCard key={dwelling.id} dwelling={dwelling} />
      ))}
    </div>
  );
};

export default Gallery;
