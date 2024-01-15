import "./SectionTwo.css";
import Card from "../components/Card.tsx";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const SectionTwo = () => {
  return (
    <section className="section-two" id="work">
      <h3 className="title">My Design Work</h3>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="drawer">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button>Submit</button>
            <DrawerClose>
              <a href="#work">Cancel</a>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default SectionTwo;
