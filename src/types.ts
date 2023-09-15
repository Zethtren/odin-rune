export interface IComment {
  id: string;
  userId: string;
  createdAt: string;
  content: string;
  comments: IComment[];
}

export interface IUser {
  id: string;
  createdAt: string;
  about: string;
  profilePic: string;
}

export interface IBlogMeta {
  id: string;
  title: string;
  description: string;
  displayImage: string;
}

export interface IBlog extends IBlogMeta {
  content: string;
}
