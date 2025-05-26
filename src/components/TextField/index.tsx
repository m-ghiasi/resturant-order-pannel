type PropsType = {
  id?: string;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  value?: string | number;
  plac?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  checked?: boolean;
  children?: React.ReactNode;
};
export default function TextField(props: PropsType) {
  const {
    id,
    label,
    labelClassName,
    value,
    plac,
    onChange,
    type,
    checked,
    inputClassName,
    wrapperClassName,
    children
  } = props;
  return (
    <div className={`${wrapperClassName} gap-3 p-2 `}>
      <label className={`font-medium  ${labelClassName}`} htmlFor={id}>
        {label}
      </label>
      {children}

      <input
        required
        className={`bg-gray-100 rounded-xl"  p-2  focus:outline-none ${inputClassName} border border-gray-300 `}
        type={type}
        name={id}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={plac}
        checked={checked}
      ></input>
      
      
    </div>
  );
}
