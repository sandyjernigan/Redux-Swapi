import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { getAction } from "../actions"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getAction()
  }

  render() {
    console.log(this.props.characters)

    if (true) {
      // return something here to indicate that you are fetching data
      return ( <div>Loading ... </div> )
    }
    return (
      <div className="CharactersList_wrapper">
        {/* <CharacterList characters={this.props.characters} /> */}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
	return {
    characters: state.characters,
    fetching: state.fetching
	}
}

const mapDispatchToProps = { getAction }

export default connect( mapStateToProps, mapDispatchToProps )(CharacterListView);
