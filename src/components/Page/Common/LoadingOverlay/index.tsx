import { forwardRef, ForwardRefRenderFunction } from "react";
import { useRender } from "@/hooks";
import Portal from "@/components/Portal";
import useLoadingOverlayStore from "./LoadingOverlayStore";
import utils from "@/utils";

const LoadingOverlay: ForwardRefRenderFunction<HTMLDivElement, {}> = ({}, ref) => {
  const loading = useLoadingOverlayStore();

  const render = useRender(loading.open);

  const renderClassName = loading.open ? "loading-overlay-render" : "";

  const className = utils.formatClassName("loading-overlay", renderClassName);

  return (
    <Portal>
      {render && (
        <div ref={ref} className={className}>
          <div className="overlay-bars">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="bars-item"></div>
            ))}
          </div>
        </div>
      )}
    </Portal>
  );
};

export default forwardRef(LoadingOverlay);
