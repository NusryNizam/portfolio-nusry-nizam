import "./SectionTwo.css";
import Card from "../components/Card.tsx";
import { images } from "@/images.ts";

const SectionTwo = () => {
  return (
    <section className="section-two" id="work">
      <h3 className="title">My Design Work</h3>
      <div className="card-container">
        {images.map((image) => (
          <Card
            key={image.title}
            title={image.title}
            description={image.description}
            coverImage={image.coverPath}
            screenshots={image.screenshots}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
