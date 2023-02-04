export default function Overlay({ children, onClose }) {
  return (
    <div
      onClick={onClose}
      className="flex justify-center items-center fixed inset-0 bg-gray-200">
      {children}
    </div>
  );
}
