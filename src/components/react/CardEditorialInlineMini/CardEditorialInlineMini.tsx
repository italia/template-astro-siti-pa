import type { ImageProps } from "@components/atoms/Image/types";
import { Chip } from "@components/react/Chip";
import { DateTime } from "@components/react/DateTime";
import { Image } from "@components/react/Image";

export type CardEditorialInlineMiniProps = {
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string | null;
  dateTime?: string | null;
  lang: string;
};

export function CardEditorialInlineMini({
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  lang,
}: CardEditorialInlineMiniProps) {
  const shouldShowFooter = !!category || !!dateTime;

  return (
    <article className="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <h3 className="it-card-title">
        <a href={linkTo}>{title}</a>
      </h3>

      <div className="it-card-image-wrapper">
        <div className="ratio ratio-16x9">
          <figure className="figure img-full">
            <Image {...image} />
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
              <Chip label={category} visuallyHidden="" disabled />
            </div>
          )}
          {dateTime && (
            <DateTime className="it-card-date" value={dateTime} lang={lang} />
          )}
        </footer>
      )}
    </article>

    /* 
    <article className="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
      <div className="it-card-inline-content">
        <h3 className="it-card-title h4">
          <a href={linkTo}>{title}</a>
        </h3>
        {description && (
          <div className="it-card-body">
            <p className="it-card-text">{description}</p>
          </div>
        )}
        {shouldShowFooter && (
          <footer className="it-card-related it-card-footer">
            {category && (
              <div className="it-card-taxonomy">
                <Chip label={category} visuallyHidden="" disabled />
              </div>
            )}
            {dateTime && (
              <DateTime className="it-card-date" value={dateTime} lang={lang} />
            )}
          </footer>
        )}
      </div>
      <div className="it-card-image-wrapper">
        <div className="ratio ratio-1x1">
          <figure className="figure img-full">
            <Image {...image} />
          </figure>
        </div>
      </div>
    </article> */
  );
}
