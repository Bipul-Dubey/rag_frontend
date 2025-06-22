export interface IMessage  {
  id: number;
  type: "user" | "bot";
  text: string;
};