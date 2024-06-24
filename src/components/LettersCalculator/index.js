// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="calculate-container">
          <div>
            <h1 className="main-heading">Calculate the letters you enter</h1>
            <div>
              <label className="label-text" htmlFor="inputPhrase">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                id="inputPhrase"
                className="input-box"
                value={inputPhrase}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letters-count">
              No.of letters: {inputPhrase.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="stopwatch-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
