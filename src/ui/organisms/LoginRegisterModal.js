import Modal from "@mui/material/Modal";
import { LoginRegister } from "../molecules";

export function LoginRegisterModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "rgba(30, 30, 30, 0.3)",
            backdropFilter: "blur(4.5px)",
          },
        }}
      >
        <LoginRegister handleClose={props.handleClose} />
      </Modal>
    </div>
  );
}
