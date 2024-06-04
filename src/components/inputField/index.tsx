import "./style.css";

const InputField = ({ onInputTextChange, children, onClickHandler }:any) => {
  return (
    <div className="input-container">
      <input
      type="text"
      id="text"
      className="form-control --bs-light-bg-subtle rounded-pill"
      placeholder="Write your search query here"
      onChange={(e) => onInputTextChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClickHandler();
        }
      }}
      />
    {children}
    </div>
    
  );
};

export default InputField;
