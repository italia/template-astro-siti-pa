import type { SearchResult } from "@graphql/types";
import { SearchResultItem } from "./SearchResultItem";

type SearchResultProps = {
  value: string;
  results: SearchResult[];
};

export const SearchResultList = ({ results, value }: SearchResultProps) => {
  return (
    <div className="row text-start">
      <div className="col-12 col-md-10 mx-auto my-5">
        <p className="fw-bold mt-5 mb-3" role="status" aria-live="polite">
          {results.length} Risultati per "{value}"
        </p>
        <div role="list" aria-label="Risultati di ricerca">
          {results.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};
