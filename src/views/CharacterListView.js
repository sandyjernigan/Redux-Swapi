import React from "react";
import { connect } from "react-redux";
import { getAction } from "../actions"

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
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
