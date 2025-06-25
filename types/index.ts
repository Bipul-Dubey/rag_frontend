export interface IMessage  {
  id: number | string;
  type: "user" | "bot";
  text: string;
};