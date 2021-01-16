import axios from "../ultis/axios";

export function addBook(book) {
  return axios.post("/books", {
    ...book,
  });
}
