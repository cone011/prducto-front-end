import { Fragment } from "react";
import classes from "./showModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const { onClose } = props;
  return <div className={classes.Backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div className={classes.Modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ShowModal = (props) => {
  const { children, onClose } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default ShowModal;
