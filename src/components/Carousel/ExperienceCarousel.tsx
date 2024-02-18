import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CustomCarouselItem from "./CustomCarouselItem"
import experienceDetails from '../../experience-details.json'
import SuccessiveLogo from '../../assets/successivedigital_logo.jpg';
import BewakoofLogoUrl from '../../assets/Bewakoof_logo.jpg';
import CognizantLogo from '../../assets/CognizantLogo-square.webp';
import Autoplay from "embla-carousel-autoplay"

export function ExperienceCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full sm:max-w-sm lg:max-w-2xl"
    >
      <CarouselContent>
        <CustomCarouselItem
          companyLogo={SuccessiveLogo}
          companyData={experienceDetails.data[0]}
        />
        <CustomCarouselItem
          companyLogo={BewakoofLogoUrl}
          companyData={experienceDetails.data[1]}
        />
        <CustomCarouselItem
          companyLogo={CognizantLogo}
          companyData={experienceDetails.data[2]}
        />
      </CarouselContent>
      <CarouselPrevious className="dark:text-white" />
      <CarouselNext className="dark:text-white" />
    </Carousel>
  )
}
