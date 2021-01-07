import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  // console.log(props);
  return (
    <section className={css.profile}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
