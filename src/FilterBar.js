import React, {Component} from 'react'

class FilterBar extends Component {

    render() {
        return(
            <div id='filter-div'>
                <button onClick={() => this.props.filterFunction()} id='good-dog-filter'>Filter good dogs: {this.props.filtered === true ? "ON" : "OFF"}</button>
            </div>
        )
    }

}

export default FilterBar