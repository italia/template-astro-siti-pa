import type { ChangeEvent } from "react";

type SearchBarProps = {
  value?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

export const SearchBar = ({
  value,
  handleChange,
  handleClick,
}: SearchBarProps) => {
  return (
    <div className="search-container">
      <div className="mb-0 form-group">
        <div className="input-group">
          <span className="input-group-text">
            <svg className="icon icon-sm" aria-hidden="true">
              <use href="/bsi-svg/sprites.svg#it-search"></use>
            </svg>
          </span>
          <label htmlFor="input-group-3" className="active">
            Cerca...
          </label>
          <input
            type="text"
            className="form-control"
            id="input-group-3"
            name="input-group-3"
            value={value || ""}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-3"
              onClick={handleClick}
            >
              Cerca
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
