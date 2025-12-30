import { useState } from "react";
import { Pagination } from "@components/react/Pagination";
import {
  CardEditorialNews,
  type CardEditorialNewsProps,
} from "@components/react/CardEditorialNews";

type PaginatedNewsProps = {
  news: CardEditorialNewsProps[];
  perPage?: number;
};

export function PaginatedNews({ news, perPage = 6 }: PaginatedNewsProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(news.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedNews = news.slice(start, start + perPage);

  return (
    <div>
      <ul className="it-card-list row">
        {paginatedNews.map((n, idx) => (
          <li className="col-12 col-lg-4 mb-3" key={idx}>
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
