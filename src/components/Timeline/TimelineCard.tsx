import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import React from 'react'

const TimelineCard = () => {
  return (
    <TimelineItem>
    <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
        Hello
    </TimelineContent>
</TimelineItem>
  )
}

export default TimelineCard