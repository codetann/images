import { useApi } from "@hooks";

function getPhotos(page: number) {
  const endpoint = `/photos?page=${page}`;
  return useApi(endpoint);
}

function getPhotosByCategory(category: string, page: number) {
  const endpoint = `/photos?category=${category}&page=${page}`;
  return useApi(endpoint);
}
