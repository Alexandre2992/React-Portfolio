import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null); //useRef: Creates a reference to a DOM element (in this case, <input> elements). The useRef hook returns a mutable object with a .current property that persists across renders.
  const ageRef = useRef<HTMLInputElement>(null); //null: The initial value of the ref is null, meaning it’s not yet attached to any DOM element. When the component renders, React will assign the actual DOM element to nameRef.current and ageRef.current via the ref attribute in the TSX
  const person = { name: "", age: 0 }; //A mutable object is an object whose state or value can be changed after it has been created

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //prevents the form to be submitted to the server
    if (nameRef.current !== null) person.name = nameRef.current.value; //console.log(nameRef.current.value);
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value); //console.log(ageRef.current.value);
    console.log(person);
  };

  return (
    //mb-3 margin bottom 3
    //div.mb-3>label.form-label+input.form-control
    //div.mb-3>label.form-label+input[type=number].form-control
    //onSubmit={handleSubmit}->here we are not calling the function, we are just reference it here
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
