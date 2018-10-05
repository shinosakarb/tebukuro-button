import React, { Component } from 'react'
import Modal from 'react-modal';
import TebukuroButton from './components/TebukuroButton'
import EventInfo from './components/EventInfo'
import GithubAuthForm from './components/GithubAuthForm'
import fetchEvent from './api/fetchEvent'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 100,
  },
};

Modal.setAppElement('#tebukuro-leash')

class App extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      event: {},
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetchEvent(this.props.eventId)
      .then(event => this.setState({event: event}))
  }

  openModal(e) {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <TebukuroButton onClick={this.openModal}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Tebukuro Registration Modal"
        >
          <EventInfo event={ this.state.event }/>
          <GithubAuthForm eventId={ this.props.eventId }/>
        </Modal>
      </div>
    )
  }
}

export default App
