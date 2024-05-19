// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestsList, setInSearchBar} = props
  const {id, suggestion} = suggestsList

  const setIntSearch = () => {
    setInSearchBar(suggestion)
  }

  return (
    <li>
      <div className="list-item">
        <p>{suggestion}</p>
        <button type="button" onClick={setIntSearch}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
