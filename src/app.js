import Form from './Form'
import React from 'react'
import { render } from 'react-dom'

const e = React.createElement
const domContainer = document.querySelector('#form_container')

render(e(Form), domContainer)
