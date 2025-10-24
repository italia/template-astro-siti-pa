import type { SearchResult } from "../pages/api/search.json";

type SearchResultItemProps = {
  result: SearchResult;
};

export const SearchResultItem = ({ result }: SearchResultItemProps) => {
  return (
    <div
      key={result.id}
      role="listitem"
      className="row border-bottom m-0 p-0 py-2 w-100"
      data-content-type="news"
    >
      <div className="col ps-0">
        <a
          className="d-flex justify-content-between align-items-center text-decoration-none"
          title="Nasce PA digitale 2026, il punto di accesso alle risorse per la transizione digitale della PA"
          target="_self"
          aria-label="Nasce PA digitale 2026, il punto di accesso alle risorse per la transizione digitale della PA, tipo: Notizie"
          href={result.url}
        >
          <div>
            <h3 className="fw-bold text-decoration-underline mb-1 lh-base">
              {result.title}
            </h3>
            <div className="text-muted">{result.description}</div>
          </div>
          <div className="d-flex align-items-center">
            <svg className="icon icon-sm align-top">
              <use xlinkHref="/bsi-svg/sprites.svg#it-chevron-right"></use>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
