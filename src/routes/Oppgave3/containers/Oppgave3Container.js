import { connect } from 'react-redux';
import Oppgave3View from '../components/Oppgave3View';
import fetchCharacters from '../actions/fetchCharacters';

const mapDispatchToProps = {
  fetchCharacters: () => fetchCharacters()
};

const mapStateToProps = (state) => ({
  // add missing code here
});

export default connect(mapStateToProps, mapDispatchToProps)(Oppgave3View);
