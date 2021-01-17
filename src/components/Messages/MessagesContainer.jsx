import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessageCreator } from '../../redux/messages-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dataMsg: state.messages.dataMsg,
    state: state.messages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage(text) {
      dispatch(addMessageCreator(text));
    },
  };
};

// const AuthRedirectComponnt = (props) => {
//   if (!props.auth.isAuth) return <Redirect to="/login" />;
//   return <Messages {...props} />;
// };
// const AuthRedirectComponnt = withAuthRedirect(Messages);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponnt);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
