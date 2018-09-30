import React from 'react'
import fetchEvent from '../api/fetchEvent'

const toLocale = dateString => (
  new Date(dateString).toLocaleString()
)

class EventInfo extends React.Component {
  constructor() {
    super()

    this.state = {
      event: {}
    }
  }

  componentDidMount() {
    fetchEvent(this.props.eventId)
      .then(event => this.setState({event: event}))
  }

  render() {
    const { event } = this.state
    return (
      <div>
        <div>
          <i className="fa fa-clipboard"></i>
          <span>{event.name}</span>
        </div>
        <div>
          <i className="fa fa-clock-o"></i>
          <span>{toLocale(event.event_starts_at)}</span>
        </div>
      </div>
    )
  }
}

export default EventInfo
