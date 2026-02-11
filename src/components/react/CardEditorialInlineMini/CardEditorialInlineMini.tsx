import type { ImageProps } from "@components/atoms/Image/types";
import { Chip } from "@components/react/Chip";
import { DateTime } from "@components/react/DateTime";
import { Image } from "@components/react/Image";

export type CardEditorialInlineMiniProps = {
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  lang: string;
  ariaLabelCardCategory?: string;
};

export function CardEditorialInlineMini({
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  lang,
  ariaLabelCardCategory,
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
              <Chip
                label={category}
                visuallyHidden={ariaLabelCardCategory || ""}
                disabled
              />
            </div>
          )}
          {dateTime && (
            <DateTime className="it-card-date" value={dateTime} lang={lang} />
          )}
        </footer>
      )}
    </article>
  );
}
