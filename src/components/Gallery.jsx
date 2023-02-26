import DwellingCard from "./DwellingCard";

const Gallery = ({ data }) => {
  return (
    <div>
      <h2>Gallery</h2>
      {data.map((dwelling) => (
        <DwellingCard key={dwelling.id} dwelling={dwelling} />
      ))}
    </div>
  );
};

export default Gallery;
