import React from 'react';
import Preloader from '../../UI/Preloader/Preloader';
import css from './ProfileInfo.module.css';
import ProfieleStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  // console.log(props);
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
      <div className={css.info}>
        <div className={css.info__img}>
          <img src={props.profile.photos.small} alt="avatar" />
          <span>{props.profile.fullName}</span>
        </div>
        <ProfieleStatus
          aboutMe={props.profile.aboutMe}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
