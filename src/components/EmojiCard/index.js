import './index.css'

const EmojiCard = props => {
  const {obj, isEmojisClick} = props
  const {id, emojiName, emojiUrl} = obj
  const isEmoji = () => {
    isEmojisClick(id)
  }
  return (
    <li className="emoji-card">
      <button onClick={isEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
