import { tokenService } from "../services/tokenService";

export const errorHandler = {
  handle(error) {
  if (!error.response) {
    console.error("API server is unavailable");
    return;
  }

  const status = error.response.status;

  switch (status) {
    case 400:
      console.error("Bad Request");
      break;
    case 401:
      tokenService.clear();
      window.location.href = "/login";
      break;
    case 403:
      console.error("Forbidden");
      break;
    case 404:
      console.error("Resource not found");
      break;
    case 500:
      console.error("Internal server error");
      break;
    default:
      console.error(error.message);
      break;
  }
}
};