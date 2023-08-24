export interface Question {
  id: number;
  texto: string;
}

export interface Answer extends Question {
  valoracion: 1 | 2 | 3 | 4 | 5;
}
