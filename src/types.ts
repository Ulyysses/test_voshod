export interface IPaging<T> {
  items: T[];
  result: number;
  pages: number;
  page: number;
}

export interface IItem {
  id: number;
  name: string;
}

export interface ModalPage {
  params: {
    id: string
  };
}
