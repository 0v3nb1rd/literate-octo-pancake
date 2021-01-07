import React from 'react';
import Preloader from '../../UI/Preloader/Preloader';
import css from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={css.postHeader}>
      <picture className={css.imgCover}>
        <img
          src="https://newevolutiondesigns.com/images/freebies/car-facebook-cover-1.jpg"
          alt="cover"
        />
      </picture>
      <div className={css.imgAvatar}>
        <img src={props.profile.photos.small} alt="avatar" />
        <span>{props.profile.fullName}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
