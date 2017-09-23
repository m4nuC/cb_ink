import { connect } from 'react-redux';
import { setTeardrop } from '../actions'
import TearDropStage from './TearDropStage';

const mapStateToProps = state => ({
  tearDrops: state.tearDrops
})

const mapDispatchToProps = dispatch => ({
  setTeardrop: data => dispatch(setTeardrop(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TearDropStage);
