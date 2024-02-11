
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineCard from './TimelineCard';

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
           
           <TimelineCard />
        </Timeline>
    );
}

export default ExperienceTimeLine;