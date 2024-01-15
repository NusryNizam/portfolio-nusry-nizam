import "./SectionTwo.css";
import Card from "../components/Card.tsx";

const SectionTwo = () => {
  return (
    <section className="section-two" id="work">
      <h3 className="title">My Design Work</h3>
      <div className="card-container">
        <Card
          title={"New Game"}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, mollitia."
        />
        <Card title={"New Game"} description="lorem23" />
        <Card title={"New Game"} description="lorem23" />
        <Card title={"New Game"} description="lorem23" />
      </div>
    </section>
  );
};

export default SectionTwo;
