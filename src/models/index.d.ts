import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly sure_name?: string;
  readonly last_name?: string;
  readonly birthday?: string;
  readonly email?: string;
  readonly posts?: (UserPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly kicker?: string;
  readonly content?: string;
  readonly content_images?: (string | null)[];
  readonly untitledfield?: string;
  readonly Users?: (UserPost | null)[];
  readonly Comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly content?: string;
  readonly Users?: User;
  readonly postsID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly commentUsersId?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class UserPost {
  readonly id: string;
  readonly user: User;
  readonly post: Post;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserPost, UserPostMetaData>);
  static copyOf(source: UserPost, mutator: (draft: MutableModel<UserPost, UserPostMetaData>) => MutableModel<UserPost, UserPostMetaData> | void): UserPost;
}