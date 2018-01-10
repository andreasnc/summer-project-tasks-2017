import { connect } from 'react-redux';
import Oppgave3View from '../components/Oppgave3View';
import fetchCharacters from '../actions/fetchCharacters';
import fetchAdditionalCharacter from '../actions/fetchAdditionalCharacter';

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  fetchAdditionalCharacter: () => dispatch(fetchAdditionalCharacter())
});

const mapStateToProps = (state) => ({
  characters: state.characters
});

export default connect(mapStateToProps, mapDispatchToProps)(Oppgave3View);
