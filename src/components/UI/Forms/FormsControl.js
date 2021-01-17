import css from './FormsControl.module.scss';

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${css.formControll} ${hasError && css.error}`}>
      <textarea className={css.textArea} {...input} {...props}></textarea>
      {hasError && <span className={css.msg}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${css.formControll} ${hasError && css.error}`}>
      <input className={css.textArea} {...input} {...props}></input>
      {hasError && <span className={css.msg}>{meta.error}</span>}
    </div>
  );
};
