import React, { useState } from "react";
import "./page.css";

function Page() {
  const [mode, setMode] = useState(false);

  return (
    <div className={mode ? `light` : "dark"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        voluptatem necessitatibus voluptates nobis suscipit qui quia eius
        temporibus accusantium dicta, sequi eveniet officia. Repudiandae, ad?
        Voluptatem vitae minima alias totam.
      </p>
      <button
        onClick={() => {
          setMode(!mode);
        }}
      >
        Mode
      </button>
    </div>
  );
}

export default Page;
