import Card from "./Card";

export default function Carousel() {
  return (
    <div className="carousel carousel-center w-screen p-4 space-x-4 bg-transparent">
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
      <div className="carousel-item">
        <Card />
      </div>
    </div>
  );
}
