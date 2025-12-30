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

  const totalPages = Math.ceil(news.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedNews = news.slice(start, start + perPage);

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
          <Chip
            label={labelForAll}
            variant="primary"
            visuallyHidden={labelForAll}
          />
        </div>
      </div>
      <ul className="it-card-list row">
        {paginatedNews.map((n, idx) => (
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
