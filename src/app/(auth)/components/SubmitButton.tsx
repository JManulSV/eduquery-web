
interface Prop{
    value: string
}

function SubmitButton({value}:Prop) {
  return (
    <input
      type="submit"
      value={value}
      className="mb-6 p-2 bg-main text-white w-full rounded-2xl cursor-pointer"
    />
  );
}

export default SubmitButton;
