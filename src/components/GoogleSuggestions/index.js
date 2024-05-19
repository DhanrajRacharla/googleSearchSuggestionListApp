// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
 
    searchInput: '',
  }
   setInSearchBar = suggestions => {
      this.setState({searchInput: suggestions})
    }
    onClickButton = event => {
      this.setState({searchInput: event.target.value})
    }
  

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

   const  searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    

    return (
      <div className="background">
        <div className="center">
          <img
            className="google"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-suggestions">
            <div className="magnify-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                value={searchInput}
                onChange={this.onClickButton}
                placeholder="Search Google"
                type="search"
              />
            </div>
            <ul>
              {searchResult.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  setInSearchBar={this.setInSearchBar}
                  suggestsList={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions




// import {Component} from 'react'
// import SuggestionItem from '../SuggestionItem'

// import './index.css'

// class GoogleSuggestions extends Component {
//   state = {
//     searchInput: '',
//   }

//   updateSearchInput = value => {
//     this.setState({searchInput: value})
//   }

//   onChangeSearchInput = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   render() {
//     const {searchInput} = this.state
//     const {suggestionsList} = this.props
//     const searchResults = suggestionsList.filter(eachSuggestion =>
//       eachSuggestion.suggestion
//         .toLowerCase()
//         .includes(searchInput.toLowerCase()),
//     )

//     return (
//       <div className="app-container">
//         <div className="google-suggestions-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//             alt="google logo"
//             className="google-logo"
//           />
//           <div className="search-input-suggestions-container">
//             <div className="search-input-container">
//               <img
//                 alt="search icon"
//                 className="search-icon"
//                 src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
//               />
//               <input
//                 type="search"
//                 className="search-input"
//                 placeholder="Search Google"
//                 onChange={this.onChangeSearchInput}
//                 value={searchInput}
//               />
//             </div>
//             <ul className="suggestions-list">
//               {searchResults.map(eachSuggestion => (
//                 <SuggestionItem
//                   key={eachSuggestion.id}
//                   suggestionDetails={eachSuggestion}
//                   updateSearchInput={this.updateSearchInput}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default GoogleSuggestions
