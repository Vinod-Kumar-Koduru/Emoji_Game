import './index.css'

const NavBar = props => {
  const {isClicked, topScore, isActive} = props
  const score = isClicked.length

  return (
    <nav className="nav-bar-background">
      <div className="logo-name-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-log"
        />
        <h1 className="emojiGame-heding">Emoji Game</h1>
      </div>
      {isActive && (
        <div className="logo-name-card">
          <p className="score">Score: {score}</p>
          <p className="score top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
