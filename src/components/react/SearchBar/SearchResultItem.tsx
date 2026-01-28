import type { SearchResult } from "@graphql/types";

type SearchResultItemProps = {
  result: SearchResult;
};

export const SearchResultItem = ({ result }: SearchResultItemProps) => {
  const url = result.internalLink || result.externalLink || result.downloadLink;
  const icon = result.downloadLink
    ? "it-download"
    : result.externalLink
      ? "it-external-link"
      : "it-arrow-right";
  return (
    <div className="p-2">
      <a
        className={`d-inline-flex align-items-center h6 gap-2`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        download={!!result.downloadLink}
      >
        <span className="fw-semibold">{result.title}</span>
        <svg className="icon icon-sm icon-primary">
          <use href={`/bsi-svg/sprites.svg#${icon}`} />
        </svg>
      </a>
      {result.category &&
        result.category.split(",").map((cat, index) => {
          const trimmedCat = cat.trim();
          return trimmedCat ? (
            <span
              key={index}
              className="ms-3 badge bg-secondary text-uppercase"
            >
              {trimmedCat}
            </span>
          ) : null;
        })}
      <p className="fs-6">{result.description}</p>
    </div>
  );
};
