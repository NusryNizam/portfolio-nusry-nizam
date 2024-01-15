import "./Card.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div
          className="card"
          style={{ backgroundImage: `url(/images/onboarding.webp)` }}
        >
          <div className="card-info">
            <h3 className="card-title">Recipe App</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quibusdam pariatur obcaecati!
            </p>
          </div>
          <div className="overlay"></div>
        </div>
      </SheetTrigger>

      <SheetContent className="sheet" side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>

          <SheetDescription className="sm:px-9 md:px-20 xl:px-40 ">
            <Carousel className="carousel">
              <CarouselContent className="carousel-content -ml-0">
                <CarouselItem className="carousel-item sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <img
                    src="/images/onboarding.webp"
                    className="carousel-image"
                  />
                </CarouselItem>
                <CarouselItem className="carousel-item  sm:basis-1/1  md:basis-1/2 lg:basis-1/3">
                  <img
                    src="/images/onboarding.webp"
                    className="carousel-image"
                  />
                </CarouselItem>
                <CarouselItem className="carousel-item  sm:basis-1/1  md:basis-1/2 lg:basis-1/3">
                  <img
                    src="/images/onboarding.webp"
                    className="carousel-image"
                  />
                </CarouselItem>
                <CarouselItem className="carousel-item  sm:basis-1/1  md:basis-1/2 lg:basis-1/3">
                  <img
                    src="/images/onboarding.webp"
                    className="carousel-image"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </SheetDescription>

          <SheetFooter className="sheet-footer">
            <SheetClose>
              <button className="dismiss-btn">Dismiss</button>
            </SheetClose>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Card;
