type PropsType = {
  id?: string;
  label: string;
  className?: string;
  value?: string | number;
  plac?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  checked?:boolean
};
export default function TextField(props: PropsType) {

  const {id,label,className,value,plac,onChange,type,checked}= props;
  return (
    <div className={`${className} gap-3 p-2`}>
      <label className="" htmlFor={id}>
        {label}
      </label>

      <input
        required
        className="bg-gray-100 rounded-2xl p-2 w-50 border-2 focus:outline-none focus:border-purple-600"
        type={type}
        name={id}
        id={id}
        onChange={onChange}
        value={value }
        placeholder={plac}
        checked={checked}
      />
    </div>
  );
}
