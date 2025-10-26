import { useEffect, useRef } from "react";

function App() {
  const refV1 = useRef<HTMLInputElement>(null);
  //refV1.current, you're accessing the current value of the refV1 reference, which points to the actual DOM element (the <input> in this case) or null if the ref hasn't been assigned yet.

  //afterRender-call only on the top level of the components
  useEffect(() => {
    if (refV1.current) refV1.current.focus(); // Side effect- we are changing the state of the DOM
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={refV1} type="text" className="form-control" />
    </div>
  );
}

export default App;
