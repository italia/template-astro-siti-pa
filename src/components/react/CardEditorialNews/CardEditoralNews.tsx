import React from "react";
import { Image } from "@components/atoms/Image";
import { DateTime } from "@components/atoms/DateTime";
import type { ImageProps } from "@datocms/astro";

export type CardEditorialNewsProps = {
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string | null;
  dateTime?: string | null;
  action?: string | null;
  fullHeight?: boolean;
};

export function CardEditorialNews({
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  action,
  fullHeight = true,
}: CardEditorialNewsProps) {
  const shouldShowFooter = !!category || !!dateTime;

  return (
    <article
      className={`it-card it-card-image ${fullHeight ? "it-card-height-full" : ""} rounded shadow-sm border`}
    >
      <h3 className="it-card-title">
        <a href={linkTo}>{title}</a>
      </h3>
      <div className="it-card-image-wrapper">
        <div className="ratio ratio-16x9">
          <figure className="figure img-full">
            {/* TODO: implement image */}
            {/* <Image {...image} /> */}
          </figure>
        </div>
      </div>
      <div className="it-card-body">
        <p className="it-card-text">{description}</p>
      </div>
      {shouldShowFooter && (
        <footer className="it-card-related it-card-footer">
          {category && (
            <div className="it-card-taxonomy">
              <a href="#" className="it-card-category it-card-link">
                <span className="visually-hidden">Categoria correlata: </span>
                {category}
              </a>
            </div>
          )}
          {/* TODO: implement date */}
          {/* {dateTime && <DateTime className="it-card-date" value={dateTime} />} */}
        </footer>
      )}
      {action && (
        <div className="it-card-footer" aria-label="Link correlati:">
          <a href="#" className="it-card-link">
            {action}
          </a>
        </div>
      )}
    </article>
  );
}
