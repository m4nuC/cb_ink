import { connect } from 'react-redux';
import { setInklination, resetTeardrop } from '../actions'
import Main from './Main';

const mapStateToProps = state => ({
  inklinationAngle: state.inklinationAngle
})


const mapDispatchToProps = dispatch => ({
  setInklination: angle => dispatch(setInklination(angle)),
  resetTeardrop: () => dispatch(resetTeardrop())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
