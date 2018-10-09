import React from 'react'
import ListAlt from '../svg/baseline-list_alt-24px.svg'
import Alarm from '../svg/baseline-alarm-24px.svg'

const toLocale = dateString => (
  new Date(dateString).toLocaleString()
)

const RegistrationStatus = ({event}) => {
  const hasWaitListed = (event.quota - event.participants.length) <= 0
  return (
    <div className="regstration-status">
      { hasWaitListed ? 'キャンセル待ち登録になります' : '参加登録できます' }
    </div>
  )
}

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
    <div>
      <RegistrationStatus event={event} />
    </div>
  </div>
)

export default EventInfo
