export interface ICreateCategory {
  name: string;
  description?: string;
  icon?: string;
}

export interface IUpdateCategory {
  name?: string;
  description?: string;
  icon?: string;
}