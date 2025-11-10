interface PreProps{
  load: Boolean
}

function Pre(props: PreProps) {
  return <div className={props.load ?
     "fixed inset-0 z-999999 bg-[#0c0513] bg-no-repeat bg-center bg-[url(./Assets/pre.svg)]" 
     : 
     "opacity-0"}>
     </div>;
}

export default Pre;
