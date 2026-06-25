import { tokenService } from "../services/tokenService";
import { toastService } from "../services/toastService";

export const errorHandler = {
  handle(error) {
    if (!error.response) {
      toastService.show("API server is unavailable or connection blocked.", "danger");
      return;
    }

    const status = error.response.status;
    const backendMessage = error.response.data?.message;

    switch (status) {
      case 400:
        toastService.show(backendMessage || "Bad Request. Please check your entries.", "danger");
        break;
      case 401:
        tokenService.clear();
        toastService.show("Unauthorized.", "danger");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        break;
      case 403:
        toastService.show("You do not have permission to perform this action.", "danger");
        break;
      case 404:
        toastService.show("Requested resource not found.", "danger");
        break;
      case 500:
        toastService.show("Internal server error. Please try again later.", "danger");
        break;
      default:
        toastService.show(error.message || "An unexpected error occurred.", "danger");
        break;
    }
  }
};