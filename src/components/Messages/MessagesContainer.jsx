import { connect } from 'react-redux';
import Messages from './Messages';
import {
  addMessageCreator,
  updateMessageCreator,
} from '../../redux/messages-reducer';

const mapStateToProps = (state) => {
  return {
    dataMsg: state.messages.dataMsg,
		state: state.messages,
		auth: state.auth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateText(txt) {
      dispatch(updateMessageCreator(txt));
    },
    addNewMessage() {
      dispatch(addMessageCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
