import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area';


import {
  CarouselItem
} from '@/components/ui/carousel'

type WorkPointsType = {
  text: string,
  highlight?: boolean,
}

type CompanyDataType = {
  company: string,
  highlight: string,
  workDuration: string,
  location: string,
  workPoints: WorkPointsType[],
}

type CustomCarouselItemProps = {
  companyLogo: string,
  companyData: CompanyDataType,
}

const CustomCarouselItem = (props: CustomCarouselItemProps) => {
  return (
    <CarouselItem key={props.companyData.company} className="lg:basis-10/12 md:basis-4/5">
      <Card className='h-[300px]'>
        <ScrollArea scrollHideDelay={200} type='scroll' className='h-full w-full'>

          <CardHeader>
            <div className="flex gap-5 items-center">
              <img src={props.companyLogo} alt="" className='h-24 rounded-full' />
              <div className="flex flex-col gap-1">
                <CardTitle>{props.companyData.company}</CardTitle>
                <CardDescription>{props.companyData.highlight}</CardDescription>
                <p>{props.companyData.workDuration}</p>
                <p>{props.companyData.location}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className='list-disc'>
              {
                props.companyData.workPoints.map(wp => (
                  <li className={wp.highlight ? 'font-semibold' 
                  : 'font-light'}>{wp.text}</li>
                ))
              }
            </ul>
          </CardContent>
        </ScrollArea>
      </Card>

    </CarouselItem>
  )
}

export default CustomCarouselItem;