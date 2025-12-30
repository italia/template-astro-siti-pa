import { useState } from "react";
import { Pagination } from "@components/react/Pagination";
import {
  CardEditorialNews,
  type CardEditorialNewsProps,
} from "@components/react/CardEditorialNews";
import { Chip } from "@components/react/Chip";

type PaginatedNewsProps = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  news: CardEditorialNewsProps[];
  perPage?: number;
};

export function PaginatedNews({
  news,
  perPage = 6,
  title,
  paragraph,
  filterTitle,
  labelForAll,
}: PaginatedNewsProps) {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(labelForAll);

  const newsCategories: string[] = [
    labelForAll,
    ...Array.from(
      new Set(
        news
          .map((item) => item.category)
          .filter((c): c is string => typeof c === "string"),
      ),
    ),
  ];

  const filteredNews =
    selectedCategory === labelForAll
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredNews.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedNews = filteredNews.slice(start, start + perPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div className="container py-80">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 col-12">
          <div className={`text-container mb-4 mb-lg-0`}>
            <h2 className="mb-3">{title}</h2>
            <div className="mb-4">{paragraph}</div>
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <p className="fw-semibold fs-6 text-uppercase">{filterTitle}</p>
          {newsCategories.map((category) => (
            <Chip
              key={category}
              variant="primary"
              label={category}
              visuallyHidden={category}
              onClick={() => handleCategoryChange(category)}
              active={selectedCategory === category}
            />
          ))}
        </div>
      </div>
      <ul className="it-card-list row">
        {paginatedNews.map((n) => (
          <li className="col-12 col-lg-4 mb-3" key={n.title}>
            <CardEditorialNews {...n} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
