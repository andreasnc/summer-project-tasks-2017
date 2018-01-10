import { connect } from 'react-redux';
import Oppgave4View from '../components/Oppgave4View';
import counter from '../actions/counter';

const mapDispatchToProps = (dispatch) => ({
  counter: (number) => dispatch(counter(number))
});

const mapStateToProps = (state) => ({
  theNumber: state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Oppgave4View);
