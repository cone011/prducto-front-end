import { Modal } from "react-bootstrap";
import Container from "../container/container";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import classes from "./showModal.module.css";

const ShowModal = (props) => {
  const { ShowModal, typeModal, message } = props;
  if (typeModal === "LOADING") {
    return (
      <Modal show={ShowModal} size="lg" className={classes.Modal}>
        <Modal.Body>
          <Container>
            <div className="centered">
              <h1>{message}</h1>
              <LoadingSpinner />
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  if (typeModal === "CONFIRM") {
  }
};

export default ShowModal;
