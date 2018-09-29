const baseUrl = 'https://tebukuro-api.shinosakarb.org'
const eventUrl = eventId => `${baseUrl}/events/${eventId}`

const config = {
  method: 'GET',
  mode: 'cors'
}

const fetchEvent = eventId => (
  fetch(eventUrl(eventId), config)
    .then(res => res.json())
)

export default fetchEvent
