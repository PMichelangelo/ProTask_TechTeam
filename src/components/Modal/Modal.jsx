import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
// import Button from '../Button/Button';

const Modal = forwardRef(function Modal({ children, closeButton, acceptButton }, ref) {
  const dialog = useRef();

  const handleCloseModal = () => {
    dialog.current.close();
    };

  const handleAccept = () => {
    console.log("Accepted")
    handleCloseModal()
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        handleCloseModal()
      }
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button onClick={handleCloseModal}>{closeButton}</button>
        <button onClick={handleAccept}>{acceptButton}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default Modal;


  //  <button onClick={() => modal1.current.open()}>modal</button>
  //     <Modal ref={modal1}
  //       closeButton="Close"
  //       acceptButton="Accept">
  //     <h2>Modal 1</h2>
  //       <p>Modal 1 Title</p>
  //       <input type="text" />
  //     <p>Text</p>
  //   </Modal>
  //     <button onClick={() => modal2.current.open()}>modal 2</button>
  //     <Modal ref={modal2}
  //       closeButton="Close"
  //       acceptButton="Accept">
  //     <h2>Modal 2 </h2>
  //     <input type="text" />
  //     <p>text 2</p>
  //   </Modal>
