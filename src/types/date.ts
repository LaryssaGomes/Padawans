export type Album = {
  id: number;
  title: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type DateAlbumPage = {
  content?: Album[];
};

export type DatePostPage = {
  content?: Post[];
};

export type DateInfoPage = {
  first: boolean;
  last: boolean;
  number: number;
  totalElement: number;
  totalPages: number;
};
