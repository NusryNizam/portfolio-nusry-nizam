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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type CardProps = {
  title: string;
  description: string;
  coverImage: string[];
  screenshots: string[];
};

const Card = ({ title, description, coverImage, screenshots }: CardProps) => {
  const srcset = `${coverImage[0]} 640w, ${coverImage[1]} 800w`;
  const sizes = "(max-width: 640px) 100vw, 100vw";

  return (
    <Sheet>
      <SheetTrigger>
        <div className="card">
          <img
            src={coverImage[1]}
            alt={title}
            srcSet={srcset}
            sizes={sizes}
            className="card-image"
          />
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </SheetTrigger>

      <SheetContent className="sheet" side={"bottom"}>
        <SheetHeader>
          <SheetTitle className="sheet-title">Recipe App</SheetTitle>

          <Carousel className="carousel">
            <CarouselContent className="carousel-content -ml-0">
              {screenshots.map((src) => (
                <CarouselItem
                  key={src}
                  className="carousel-item sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                >
                  <img src={src} className="carousel-image" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <SheetFooter className="sheet-footer">
            <SheetClose className="dismiss-btn">Dismiss</SheetClose>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Card;
