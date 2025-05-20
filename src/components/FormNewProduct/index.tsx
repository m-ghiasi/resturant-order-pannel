type FormType={
  className:string;

}


export default function FormNewProduct(props:FormType) {
  const {className}=props
  return (
    <div className=  {`absolute w-[25%] h-screen right-0 top-0 bottom-0 z-10 bg-white ${className}`}>
      
      
    </div>
  );
}
