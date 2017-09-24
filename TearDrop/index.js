import { connect } from 'react-redux';
import { moveTeardrop } from '../actions'
import TearDrop from './TearDrop';

const mapStateToProps = state => ({
  tearDrops: state.tearDrops
})

const mapDispatchToProps = dispatch => ({
  moveTeardrop: data => dispatch(moveTeardrop(data))
})

export default connect(null, mapDispatchToProps)(TearDrop);
