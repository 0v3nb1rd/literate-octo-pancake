import React, { useState, useEffect } from 'react';

const ProfileStatusUse = (props) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMod] = useState(false);

  const activeEditMode = () => {
    setEditMod(true);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const deActiveEditMode = () => {
    setEditMod(false);
    props.updateStatus(status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <>
      {!editMode ? (
        <div onDoubleClick={activeEditMode}>{props.status || '...'}</div>
      ) : (
        <input
          onBlur={deActiveEditMode}
          autoFocus
          onChange={onStatusChange}
          value={status}
        />
      )}
    </>
  );
};

export default ProfileStatusUse;
