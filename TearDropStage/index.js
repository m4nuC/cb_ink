import { connect } from 'react-redux';
import { setTeardrop, moveTeardrop } from '../actions'
import TearDropStage from './TearDropStage';

const mapStateToProps = state => ({
  tearDrops: state.tearDrops,
  inklinationAngle: state.inklinationAngle
})

const mapDispatchToProps = dispatch => ({
  setTeardrop: data => dispatch(setTeardrop(data)),
  moveTeardrop: data => dispatch(moveTeardrop(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TearDropStage);
