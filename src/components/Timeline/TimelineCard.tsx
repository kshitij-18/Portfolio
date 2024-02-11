import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material'
import { useState } from 'react'

type AlignmentType = 'left' | 'right';

type WorkPointsType = {
  text: string,
  highlight?: boolean,
}

type CompanyDataType = {
  company: string,
  highlight: string,
  workPoints: WorkPointsType[],
}

type TimeLineCardProps = {
  companyName: string,
  position: string,
  timeDuration: string,
  year: string,
  location: string,
  align: AlignmentType,
  companyData: CompanyDataType,
}

const TimelineCard = (props: TimeLineCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {
    companyData: {
      company: companyName,
      highlight: workHighlight,
      workPoints,
    },
  } = props;
  return (
    <TimelineItem className='cursor-pointer' onClick={() => setExpanded(prev => !prev)}>
      {
        !expanded ? (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align='right'
            variant="body2"
          >
            {props.year}
          </TimelineOppositeContent>
        ) : (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align='right'
            variant="body2"
          >
            <Typography>{props.year}</Typography>
            <Typography variant='h6'>{props.timeDuration}</Typography>
            <Typography variant='caption'>{props.location}</Typography>
          </TimelineOppositeContent>
        )
      }
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {
          !expanded ? (
            <>
              <Typography variant='h5'>{props.position}</Typography>
              <Typography variant='subtitle2' className='text-slate-500 dark:text-slate-300'>{companyName}</Typography>
            </>
          ) : (
            <>
              <Typography variant='h5'>{props.position}</Typography>
              <Typography variant='subtitle2' className='text-slate-500 dark:text-slate-300'>{companyName}</Typography>
              <Typography fontSize={17}>{workHighlight}</Typography>
              <ul className='list-disc list-inside'>
                {
                  workPoints.map(wp => (
                    wp.highlight ? <li>
                      <Typography variant='caption' fontWeight="700" className='dark:text-gray-400'>{wp.text}</Typography>
                    </li> : <li>
                      <Typography variant='caption' className='dark:text-gray-500'>{wp.text}</Typography>
                    </li>
                  ))
                }
              </ul>
            </>
          )
        }
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard