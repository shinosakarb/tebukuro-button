import React, { Component } from 'react'
import Modal from 'react-modal';
import ThumbUp from '-!react-svg-loader!./svg/baseline-thumb_up-24px.svg'
import EventInfo from './components/EventInfo'
import GithubAuthForm from './components/GithubAuthForm'

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
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        <button className="btn red" onClick={this.openModal}>
          <ThumbUp />
          <span>Join with Tebukuro</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Tebukuro Registration Modal"
        >
          <EventInfo eventId={ this.props.eventId }/>
          <GithubAuthForm eventId={ this.props.eventId }/>

        </Modal>
      </div>
    )
  }
}

export default App
