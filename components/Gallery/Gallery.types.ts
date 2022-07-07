export type ImageType = {
  id: number;
  name: string;
  src: string;
  favorite: boolean;
};

export type StateType = {
  data: ImageType[];
  loading: boolean;
  error: string | false;
  status: null | number;
};
