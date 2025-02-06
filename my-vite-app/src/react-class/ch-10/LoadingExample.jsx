import React, { lazy, Suspense, useEffect, useState } from "react";

function LoadingExample() {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCondition(true);
    }, 3000);
  }, []);
  return (
    <Suspense fallback="loading ...">{condition && <p>Hello User</p>}</Suspense>
  );
}

export default LoadingExample;
