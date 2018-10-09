import React from 'react'
import ListAlt from '../svg/baseline-list_alt-24px.svg'
import Alarm from '../svg/baseline-alarm-24px.svg'

const toLocale = dateString => (
  new Date(dateString).toLocaleString()
)

const EventInfo = ({ event }) => (
  <div>
    <div>
      <ListAlt/>
      <span>{event.name}</span>
    </div>
    <div>
      <Alarm/>
      <span>{toLocale(event.event_starts_at)}</span>
    </div>
  </div>
)

export default EventInfo
