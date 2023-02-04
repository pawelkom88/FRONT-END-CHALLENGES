import Overlay from "./Overlay";

export default function Modal({ children, closeModal }) {
  return (
    <Overlay onClose={closeModal}>
      <dialog className="relative max-w-[50rem]" onClick={e => e.stopPropagation()} open>
        <span onClick={closeModal} className="absolute top-0 right-0">
          X
        </span>
        {children}
      </dialog>
    </Overlay>
  );
}
