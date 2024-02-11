
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineCard from './TimelineCard';
import experienceDetails from '@/experience-details.json'

function ExperienceTimeLine() {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
            className='dark:text-white'
        >

            <TimelineCard
                companyName='Successive Digital'
                position='Associate Software Engineer'
                timeDuration='March 2022 - Present' 
                align="left"
                location='Noida'
                year='Present'
                companyData={experienceDetails.data[0]}
            />
            <TimelineCard
                companyName='Bewakoof Brands Pvt Ltd'
                position='SDE - 1'
                timeDuration='January 2022 - March 2022'
                align="right"
                location='Bangalore (Remote)'
                year='2022' 
                companyData={experienceDetails.data[0]}
            />
            <TimelineCard
                companyName='Cognizant Technology Solutions'
                position='Programmer Analyst Trainee'
                timeDuration='July 2021 - January 2022'
                align="left"
                location='Chennai (Remote)'
                year='2021'
                companyData={experienceDetails.data[0]}
            />
        </Timeline>
    );
}

export default ExperienceTimeLine;