import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { getAction } from "../actions"

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.getAction()

    console.log(this.props.characters)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return ( <div>Loading ... </div> )
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
  console.log(state, "State")
	return {
    characters: state.charsReducer.characters,
    fetching: state.fetching,
    error: state.error
	}
}

const mapDispatchToProps = { getAction }

export default connect( mapStateToProps, mapDispatchToProps )(CharacterListView);
