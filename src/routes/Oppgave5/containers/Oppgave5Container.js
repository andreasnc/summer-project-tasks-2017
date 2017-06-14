import { connect } from 'react-redux';
import Oppgave5View from '../components/Oppgave5View';
import fetchCharacters from '../actions/fetchCharacters';

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharacters())
});

const mapStateToProps = (state) => ({
  // add missing code here
});

export default connect(mapStateToProps, mapDispatchToProps)(Oppgave5View);
