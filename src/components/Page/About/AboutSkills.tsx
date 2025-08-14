import { ForwardRefRenderFunction, forwardRef } from "react";

const AboutSkills: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
    return <div ref={ref}></div>
};

export default forwardRef(AboutSkills)
