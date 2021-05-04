import React, {Component} from 'react';
import './App.css';
import FilterBar from './FilterBar'
import DogBar from './DogBar'
import SummaryContainer from './SummaryContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pups: [],
      currentPup: {},
      filtered: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pups')
      .then(res => res.json())
      .then(pupsArray => this.setState({pups: pupsArray}))
  }

  onSpanClick = (event, clickedPup) => {
    this.setState({currentPup: clickedPup})
  }

  goodBadClick = (event, clickedPup) => {
    this.setState({currentPup: clickedPup})
    let clickedPupIndex = this.state.pups.findIndex(pup => pup.id === this.state.currentPup.id)
    fetch(`http://localhost:3000/pups/${clickedPup.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !clickedPup.isGoodDog
      })
    })
      .then(res => res.json())
      .then(updatedPup => {
        let updatedPups = [...this.state.pups.slice(0, clickedPupIndex), updatedPup, ...this.state.pups.slice(clickedPupIndex + 1)]
        this.setState({
          pups: updatedPups,
          currentPup: updatedPup
        })
      })
  }

  filterFunction = () => {
    if(this.state.filtered === false) {
      let filteredPups = [...this.state.pups].filter(pup => pup.isGoodDog === true)
      this.setState({
        pups: filteredPups,
        filtered: !this.state.filtered})
    } else {
      fetch('http://localhost:3000/pups')
        .then(res => res.json())
        .then(pupsArray => this.setState({
          pups: pupsArray,
          filtered: !this.state.filtered
        }))
    }
  }
  
  render() {
    return (
      <div className="App">
        <FilterBar filterFunction ={this.filterFunction} filtered={this.state.filtered}/>
        <DogBar pups={this.state.pups} onSpanClick={this.onSpanClick}/>
        <SummaryContainer displayPup={this.state.currentPup} goodBadClick={this.goodBadClick}/>


        {/* <div id="filter-div">
          <button id="good-dog-filter">Filter good dogs: OFF</button>
        </div> */}

        {/* <div id="dog-bar">

        </div> */}
        {/* <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">

          </div>
        </div> */}
      </div>
    )
  }
}

export default App;
