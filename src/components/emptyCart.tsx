export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/illustration-empty-cart.svg"
        alt="empty cart"
        className="w-6/12 pt-6"
      />
      <p className="text-sm text-rose-900 font-semibold py-4">
        Your added items will appear here
      </p>
    </div>
  );
}
