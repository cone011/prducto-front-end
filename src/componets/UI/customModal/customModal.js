import { Fragment } from "react";
import classes from "./customModal.module.css";
import ShowModal from "../showModal/showModal";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import CreditCard from "../../creditCard/creditCard";

const CustomModal = (props) => {
  const { onCloseModal, message, typeModal, productObject, onConfirmPayment } =
    props;

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
          <img
            src={productObject.pictures[0].url}
            alt={productObject.title}
            className={classes.imgProduct}
          />
          <div className={classes.message}>
            <span>{productObject.title}</span>
          </div>
          <div className={classes.message}>
            <span>{productObject.price}</span>
          </div>
        </ShowModal>
      </Fragment>
    );
  }

  if (typeModal === "ERROR") {
    return (
      <Fragment>
        <ShowModal onCloseModal={onCloseModal}>
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

  if (typeModal === "PAYMENT") {
    return (
      <Fragment>
        <ShowModal onCloseModal={onCloseModal}>
          <CreditCard onConfirmPayment={onConfirmPayment} />
        </ShowModal>
      </Fragment>
    );
  }
};

export default CustomModal;
