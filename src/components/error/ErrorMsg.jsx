export default function ErrorMsg({ error }) {
  return (
    <>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Something went wrong...</span>
        </p>
      )}
    </>
  );
}
