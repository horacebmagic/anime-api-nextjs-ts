interface InputCheckboxProps {
  id: number;
  value: number;
  isChecked: boolean;
  handleOnChange: (id: number) => void;
}

const InputCheckbox = ({
  id,
  value,
  isChecked,
  handleOnChange,
}: InputCheckboxProps) => {
  return (
    <input
      type="checkbox"
      id={`genre-${id}`}
      value={value}
      checked={isChecked}
      onChange={() => handleOnChange(id)}
      className="cursor-pointer"
    />
  );
};

export default InputCheckbox;
