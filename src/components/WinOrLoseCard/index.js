import './index.css'

const WinOrLoseCard = props => {
  const {winOrLoss, scoreOfList, tryAgainClick} = props
  const result = winOrLoss ? 'You Won' : 'You Loss'
  const name = winOrLoss ? 'Best Score' : 'Score'
  const scoreEl = winOrLoss ? '12/12' : `${scoreOfList.length}/12`
  const imageEl = winOrLoss
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const restGame = () => {
    tryAgainClick()
  }
  return (
    <div className="card">
      <div className="card-container">
        <div>
          <h1 className="game-res-heading">{result}</h1>
          <p className="game-res-heading score">{name}</p>
          <p className="match">{scoreEl}</p>
          <button className="button-element" onClick={restGame}>
            Play Again
          </button>
        </div>
        <img src={imageEl} className="image" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
