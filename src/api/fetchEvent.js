import Urls from '../constants/urls'

const eventUrl = eventId => `${Urls.events}/${eventId}`

const config = {
  method: 'GET',
  mode: 'cors'
}

const fetchEvent = eventId => (
  fetch(eventUrl(eventId), config)
    .then(res => res.json())
)

export default fetchEvent
