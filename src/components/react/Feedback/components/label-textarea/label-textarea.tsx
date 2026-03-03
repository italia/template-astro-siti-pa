import { useEffect, useState } from "react";

interface LabelTextAreaProps {
  id: string;
  value: string;
  onChange?: (args: { value: string }) => void;
  label?: string;
  [key: string]: any;
}

function LabelTextArea(props: LabelTextAreaProps) {
  const { id, value, onChange, label = "", ...opts } = props;
  const [message, setMessage] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    if (typeof onChange === "function") {
      onChange({
        value: event.target.value,
      });
    }
  };
  useEffect(() => {
    const bootstrap = (window as any).bootstrap;
    const element = document.getElementById(id);
    if (element && bootstrap) {
      new bootstrap.Input(element);
    }
  });
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className="form-control"
        onChange={handleChange}
        autoComplete="off"
        value={message}
        {...opts}
      />
    </>
  );
}

export default LabelTextArea;
