export interface IMatch {
  id: string;
  host: string;
  guest: string;
  date: string;
}

export type RootContextType = {
  events: IMatch[];
  bet: string;
  setBet: React.Dispatch<React.SetStateAction<string>>;
};

export enum coefficient {
  host = 'на победу хозяев',
  guest = 'на победу гостей',
  draw = 'на ничью',
}
