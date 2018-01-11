import { connect } from 'react-redux';
import Oppgave5View from '../components/Oppgave5View';
import fetchCharacters from '../actions/fetchCharacters';

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters())
});

const mapStateToProps = (state) => ({
  characters: state.characters.characters
});

export default connect(mapStateToProps, mapDispatchToProps)(Oppgave5View);
