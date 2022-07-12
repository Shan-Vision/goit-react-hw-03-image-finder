export const mapper = images => {
  return images.map(({ tags, webformatURL, largeImageURL, id }) => ({
    tags,
    webformatURL,
    largeImageURL,
    id,
  }));
};