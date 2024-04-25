export interface Notes {
  id: number;
  name: string;
  description: string;
}

export interface NameTask {
  name: string;
}

export  interface TagsTask {
  id: number;
  name: string;
  tag: NameTask[];
}
