import { useState } from "react";
import { Pagination } from "@components/react/Pagination";
import {
  CardEditorialNews,
  type CardEditorialNewsProps,
} from "@components/react/CardEditorialNews";
import { Chip } from "@components/react/Chip";
import {
  CardEditorialInlineMini,
  type CardEditorialInlineMiniProps,
} from "../CardEditorialInlineMini/CardEditorialInlineMini";

type PaginatedCollectionCommonProps = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  perPage?: number;
};

type PaginatedCollectionProps =
  | (PaginatedCollectionCommonProps & {
      items: CardEditorialNewsProps[];
      newsPageTabType: "news";
    })
  | (PaginatedCollectionCommonProps & {
      items: CardEditorialInlineMiniProps[];
      newsPageTabType: "story";
    });

export function PaginatedCollection({
  items,
  perPage = 6,
  title,
  paragraph,
  filterTitle,
  labelForAll,
  newsPageTabType,
}: PaginatedCollectionProps) {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(labelForAll);

  const newsCategories: string[] = [
    labelForAll,
    ...Array.from(
      new Set(
        items
          .map((item) => item.category)
          .filter((c): c is string => typeof c === "string"),
      ),
    ),
  ];

  const filteredItems =
    selectedCategory === labelForAll
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedItems = filteredItems.slice(start, start + perPage);

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
        {paginatedItems.map((n) => (
          <li className="col-12 col-lg-4 mb-3" key={n.title}>
            {newsPageTabType === "news" && <CardEditorialNews {...n} />}
            {newsPageTabType === "story" && <CardEditorialInlineMini {...n} />}
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
