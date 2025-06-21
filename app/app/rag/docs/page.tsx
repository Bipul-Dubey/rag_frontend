import PageHeader from "@/components/common/PageHeader";
import DocumentItems from "@/components/documents";
import DocsActionButton from "@/components/documents/DocsActionButton";
import React from "react";

const DocumentPage = () => {
  return (
    <PageHeader title="Manage Documents" right={<DocsActionButton />}>
      <DocumentItems />
    </PageHeader>
  );
};

export default DocumentPage;
