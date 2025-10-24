import { useCallback, useState, type ChangeEvent } from "react";
import type { SearchResult } from "../pages/api/search.json";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
const SEARCH_API_ENDPOINT = "/api/search.json";
export const FullTextSearch = () => {
  const [value, setValue] = useState<string>("");
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
      return;
    }

    setLoading(true);
    setError(null);

    const url = `${SEARCH_API_ENDPOINT}?query=${encodeURIComponent(searchQuery)}`;

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
    <>
      <div className="col-12 col-md-7 mx-auto my-5">
        <SearchBar
          value={value}
          handleChange={handleChange}
          handleClick={() => handleSearch(value)}
        />
      </div>
      {loading && <div>Loading...</div>}
      {!loading && results.length > 0 && (
        <SearchResultList results={results} value={value} />
      )}
    </>
  );
};
