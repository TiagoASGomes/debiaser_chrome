import "./style.css";

const Button = ({ onClickHandler }: any) => {
  return (
    <button
      type="submit"
      id="query"
      className="searchIcon"
      onClick={onClickHandler}
    >
      <img
        src={
          "https://static.vecteezy.com/system/resources/previews/009/973/089/non_2x/magnifying-glass-sign-search-icon-free-png.png"
        }
        alt="search"
      />
    </button>
  );
};

export default Button;
