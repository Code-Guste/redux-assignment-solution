import classes from "./Error.module.css";

const Error = (props) => <p className={classes.error}>{props.message}</p>;

export default Error;
