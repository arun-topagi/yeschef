import { useCallback, useState } from "react";

function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(prevState => !prevState), []);

  return [
    value,
    {
      setTrue,
      setFalse,
      toggle,
      setValue,
    },
  ];
}

export default useBoolean;
