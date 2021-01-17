import React from 'react';
// import css from './ ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div onDoubleClick={this.activeEditMode}>
            {this.props.status || '...'}
          </div>
        ) : (
          <input
            onBlur={this.deActiveEditMode}
            autoFocus
            onChange={this.onStatusChange}
            value={this.state.status}
          />
        )}
      </>
    );
  }
}

export default ProfileStatus;
