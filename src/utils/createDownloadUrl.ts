export const createDownloadUrl = (doc?: {
  url: string;
  filename: string;
  format: string;
}): string => (doc ? `${doc.url}?dl=${doc.filename}.${doc.format}` : "#");
