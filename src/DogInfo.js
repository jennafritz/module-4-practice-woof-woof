import React, {Component} from 'react'

class DogInfo extends Component {

    render() {
        return(
            <div id='dog-info'>
                <img src={this.props.displayPup.image} alt={this.props.displayPup.name}/>
                <h2>{this.props.displayPup.name}</h2>
                {this.props.displayPup.name !== undefined ? <button onClick={(event) => this.props.goodBadClick(event, this.props.displayPup)}>
                    {this.props.displayPup.isGoodDog === true ? "Good Dog!" : "Bad Dog!"}
                    </button> : null}
            </div>
        )
    }
}

export default DogInfo