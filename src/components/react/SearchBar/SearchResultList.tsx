import type { SearchResult } from "@graphql/types";
import { SearchResultItem } from "./SearchResultItem";

type SearchResultProps = {
  value: string;
  results: SearchResult[];
  labelForAllResult: string;
  labelForNoResult: string;
};

export const SearchResultList = ({
  results,
  value,
  labelForAllResult,
  labelForNoResult,
}: SearchResultProps) => {
  return (
    <div className="row text-start">
      <div className="col-12 col-md-10 py-5">
        {results.length ? (
          <p className=" mb-3" role="status" aria-live="polite">
            {labelForAllResult} <strong>"{value}"</strong>
          </p>
        ) : (
          <p className=" mb-3" role="status" aria-live="polite">
            {labelForNoResult} <strong>"{value}"</strong>
          </p>
        )}
        <div role="list" aria-label="Risultati di ricerca">
          {results.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};
