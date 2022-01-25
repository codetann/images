import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

async function getPhotos() {
  // code
}

async function getPhotoById() {
  // code
}

async function getPhotoByCategory() {
  // code
}
