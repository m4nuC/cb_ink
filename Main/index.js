import { connect } from 'react-redux';
import { resetTeardrop } from '../actions'
import Main from './Main';

const mapDispatchToProps = dispatch => ({
  resetTeardrop: data => dispatch(resetTeardrop())
})

export default connect(null, mapDispatchToProps)(Main);
