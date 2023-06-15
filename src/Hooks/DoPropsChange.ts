import { useEffect, useRef } from 'react';

const useDoPropsChanged = (propValue:any) => {
  const prevPropRef = useRef(propValue);

  useEffect(() => {
    prevPropRef.current = propValue;
  }, [propValue]);

  const propsChanged = prevPropRef.current !== propValue;

  return propsChanged;
};

export default useDoPropsChanged;