export interface IMessage  {
  id: string;
  type: "user" | "bot";
  text: string;
  referenceLinks: { label: string; url: string }[] | null;
};