import { useState, type ChangeEvent } from "react";

import type { SearchResult, SiteLocale } from "@graphql/types";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";

const SEARCH_API_ENDPOINT = "/api/search.json";

type FullTextSearchProps = {
  locale: SiteLocale;
  labelButton: string;
  inputPlaceholder: string;
  labelForAllResult: string;
  labelForNoResult: string;
  ariaLabelExternalLink?: string;
  ariaLabelDownloadLink?: string;
  ariaLabelInternalLink?: string;
};
export const FullTextSearch = ({
  locale,
  labelButton,
  inputPlaceholder,
  labelForAllResult,
  labelForNoResult,
  ariaLabelExternalLink,
  ariaLabelDownloadLink,
  ariaLabelInternalLink,
}: FullTextSearchProps) => {
  const [value, setValue] = useState<string>("");
  const [confirmedQuery, setConfirmedQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = ({
    currentTarget: { value: newValue },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(newValue);
  };

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setConfirmedQuery("");
      return;
    }

    setLoading(true);
    setError(null);

    setConfirmedQuery(searchQuery);
    const url = `${SEARCH_API_ENDPOINT}?query=${encodeURIComponent(searchQuery)}&lang=${locale}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Errore HTTP: ${response.status} - Impossibile contattare l'API di ricerca.`,
        );
      }

      const data: SearchResult[] = await response.json();
      setResults(data);
    } catch (err) {
      // @ts-ignore
      setError(`Errore durante la ricerca: ${err.message}`);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-5 px-5 shadow rounded-2 border">
      <SearchBar
        value={value}
        handleChange={handleChange}
        handleClick={() => handleSearch(value)}
        labelButton={labelButton}
        inputPlaceholder={inputPlaceholder}
      />
      {!loading && confirmedQuery && (
        <SearchResultList
          results={results}
          value={confirmedQuery}
          labelForAllResult={labelForAllResult}
          labelForNoResult={labelForNoResult}
          ariaLabelDownloadLink={ariaLabelDownloadLink}
          ariaLabelExternalLink={ariaLabelExternalLink}
          ariaLabelInternalLink={ariaLabelInternalLink}
        />
      )}
    </div>
  );
};
