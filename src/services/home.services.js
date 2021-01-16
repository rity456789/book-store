import axios from "../ultis/axios";

export function getCategories() {
  return axios.get("/categories", {
    
  });
}

export function getBook(page, limit) {
  return axios.get("/books", {
    page,
    limit
  });
}
