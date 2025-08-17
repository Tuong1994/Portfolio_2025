import utils from "@/utils";
import { forwardRef, ForwardRefRenderFunction } from "react";

const LoadingOverlay: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
    const className = utils.formatClassName('loading-overlay')

    return <div ref={ref} className={className}>
        
    </div>
}

export default forwardRef(LoadingOverlay)