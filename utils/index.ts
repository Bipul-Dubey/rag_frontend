import { ChatReference } from "@/types";

export const handleUniqueDocs = (docs: ChatReference[]): ChatReference[] => {
  const documents = docs.filter(
    (item) => item.doc_id && item.doc_name && item.s3_key
  );

  const uniqueDocs: ChatReference[] = [];
  const uniqueDocsId: string[] = [];
  documents.forEach((item) => {
    if (!uniqueDocsId.includes(item.doc_id)) {
      uniqueDocsId.push(item.doc_id);
      uniqueDocs.push(item);
    }
  });

  return uniqueDocs;
};
