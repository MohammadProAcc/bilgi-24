import { useEffect, useRef, EffectCallback, DependencyList } from "react";

export const useNonInitialEffect = (effect, deps) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns = () => {
      /* Empty Return fallback */
    };

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === "function") {
      return effectReturns;
    }
  }, deps);
};
