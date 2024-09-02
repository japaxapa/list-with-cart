export function CarbonNeutralCard() {
  return (
    <div className="w-full bg-rose-50 p-3 rounded-lg flex items-center justify-center">
      <img
        src="/images/icon-carbon-neutral.svg"
        alt="carbon neutral tree icon"
        className="w-6 h-6"
      />
      <p className="text-sm font-light mx-2">
        This is a <strong className="font-semibold">carbon-neutral</strong> delivery
      </p>
    </div>
  );
}
