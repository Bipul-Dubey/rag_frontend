export const APP_URL = "https://knowyourdocs.netlify.app/"

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "text/plain",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
];
export const MAX_UPLOAD_FILES = 5;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB