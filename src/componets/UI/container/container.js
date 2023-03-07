import classes from "./container.module.css";

const Container = (props) => {
  const { className, children } = props;
  return <div className={`${classes.Container} ${className}`}>{children}</div>;
};

export default Container;
