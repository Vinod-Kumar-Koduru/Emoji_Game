/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {inProsses: true, isClicked: [], isClickedScore: 0, topScore: 0}
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  finishGame = score => {
    const {topScore, inProsses} = this.state
    let newScore = topScore
    if (score > topScore) {
      newScore = score
    }
    this.setState({topScore: newScore, inProsses: false})
  }
  isEmojisClick = id => {
    const {emojisList} = this.props
    const {inProsses, isClicked, topScore, isClickedScore} = this.state
    const isAlredyClick = isClicked.includes(id)
    const scoreAll = isClicked.length
    if (isAlredyClick) {
      this.finishGame(scoreAll)
    } else if (emojisList.length === scoreAll + 1) {
      this.setState({isClickedScore: scoreAll + 1})
      this.finishGame(isClickedScore)
    } else {
      this.setState(pre => ({isClicked: [...pre.isClicked, id]}))
    }
    console.log(isClicked.length)
  }

  tryAgainClick = () => {
    this.setState({isClicked: [], inProsses: true})
  }
  scoreDisplay = () => {
    const {emojisList} = this.props
    const {isClicked, isClickedScore} = this.state
    const winOrLoss = isClickedScore === emojisList.length
    return (
      <div className="container">
        <WinOrLoseCard
          winOrLoss={winOrLoss}
          scoreOfList={isClicked}
          tryAgainClick={this.tryAgainClick}
        />
      </div>
    )
  }

  isEmojis = () => {
    const shuffled = this.shuffledEmojisList()
    return (
      <div className="container">
        <ul className="unorder-ele">
          {shuffled.map(each => (
            <EmojiCard
              obj={each}
              key={each.id}
              isEmojisClick={this.isEmojisClick}
            />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const {inProsses, topScore, isClicked} = this.state
    return (
      <>
        <div className="bg-container">
          <NavBar
            isActive={inProsses}
            topScore={topScore}
            isClicked={isClicked}
          />
          {inProsses ? this.isEmojis() : this.scoreDisplay()}
        </div>
      </>
    )
  }
}
export default EmojiGame
