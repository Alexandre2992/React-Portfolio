interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Buttons = ({ children, color = "danger", onClick }: Props) => {
  return (
    <button
      className={"btn btn-" + color + " d-block mb-2"} // Added Bootstrap utilities: d-block (display: block), w-100 (full width), mb-2 (margin-bottom for spacing)
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;
