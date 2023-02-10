import "./Button.scss";

const Button = (props) => {
  const { buttonText, isSecondary } = props;

  let buttonStyle = isSecondary ? "button secondary" : "button primary";

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;