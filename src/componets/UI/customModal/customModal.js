import { Fragment } from "react";
import classes from "./customModal.module.css";
import ShowModal from "../showModal/showModal";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

const CustomModal = (props) => {
  const { onCloseModal, message, typeModal, productObject } = props;

  if (typeModal === "CONFIRM") {
    return (
      <Fragment>
        <ShowModal onClose={onCloseModal}>
          <div className={classes.message}>
            <span>{message}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["buton--alt"]} onClick={onCloseModal}>
              Close
            </button>
          </div>
        </ShowModal>
      </Fragment>
    );
  }

  if (typeModal === "LOADING") {
    return (
      <Fragment>
        <ShowModal>
          <div className={classes.message}>{message}</div>
          <LoadingSpinner />
        </ShowModal>
      </Fragment>
    );
  }

  if (typeModal === "DETAIL") {
    return (
      <Fragment>
        <ShowModal onClose={onCloseModal}>
          <img src={productObject.imgUrl} alt={productObject.name} />
          <div className={classes.message}>
            <span>{productObject.name}</span>
          </div>
          <div className={classes.message}>
            <span>{productObject.price}</span>
          </div>
        </ShowModal>
      </Fragment>
    );
  }
};

export default CustomModal;
