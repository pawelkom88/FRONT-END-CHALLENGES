export default function Input({ id, name, htmlFor, children, type = "text", value, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor}>{children}</label>
      <input
        className="w-full border-2 border-blue-600 shadow-sm placeholder:text-sm"
        onChange={onChange}
        name={name}
        id={id}
        type={type}
        value={value[name]}
        placeholder={name}
        required
      />
    </div>
  );
}
