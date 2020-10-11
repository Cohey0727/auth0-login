import { DependencyList, useEffect } from "react";

export default function useAsyncEffect<T>(
  factory: () => Promise<T>,
  deps: DependencyList
) {
  useEffect(() => {
    factory();
  }, deps);
}
