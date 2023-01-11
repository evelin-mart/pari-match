export interface IMatch {
  id: string;
  host: string;
  guest: string;
  date: string;
}

export type RootContextType = {
  events: IMatch[];
};

export enum coefficient {
  host = 'host',
  guest = 'guest',
  draw = 'draw',
}
