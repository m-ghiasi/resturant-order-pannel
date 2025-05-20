type BuType = {
  label?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; 
  type?:string
};


export default function Button(props:BuType) {
  const {label,className,onClick,onMouseEnter,onMouseLeave,children }= props;
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      
    >
      {children}
      {label}
    </button>
  );
}
