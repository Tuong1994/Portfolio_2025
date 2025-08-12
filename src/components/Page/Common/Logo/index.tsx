import { forwardRef, ForwardRefRenderFunction } from "react";

const Logo: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  return (
    <div ref={ref}>
      <div style={{ width: "50px", height: "50px", borderRadius: "10px", background: "#eee" }}></div>
    </div>
  );
};

export default forwardRef(Logo);
