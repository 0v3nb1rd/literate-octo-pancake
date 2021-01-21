import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import css from './Login.module.scss';
import { loginUser } from '../../redux/auth-reducer';
import { maxLength, required } from '../../helpers/validators';
import { Input } from '../UI/Forms/FormsControl';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  // console.log(props);
  const { handleSubmit } = props;
  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <div className={css.name}>
        <Field
          name="email"
          type="email"
          placeholder="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={css.password}>
        <Field
          name="password"
          type="password"
          placeholder="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={css.checkbox}>
        <Field name="rememberMe" type="checkbox" component="input" />
        <span>remember me</span>
      </div>
      {props.error && <div className={css.summaryErr}>{props.error}</div>}
      <button type="submit" className={css.loginForm__btn}>
        Submit
      </button>
    </form>
  );
};
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData);
    // console.log('Submited', formData);
  };
  if (props.isAuth) return <Redirect to={'/profile'} />;
  return (
    <main className={css.main}>
      <h1>Login form</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </main>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {
  loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
