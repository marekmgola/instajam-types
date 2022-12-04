import { Ref } from "react";
import { Socket } from "socket.io-client";
import { Region } from "react-native-maps";

export interface IImageFormat {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}

export interface IImage {
  alternativeText: string;
  caption: string;
  createdAt: string;
  formats: {
    medium: IImageFormat;
    small: IImageFormat;
    thumbnail: IImageFormat;
  };
}

export interface IMessage {
  id: number;
  message: string;
  author: IProfile;
  createdAt?: string;
  updatedAt?: string;
  connection: IConnection;
  color?: string;
}

export interface IConnection {
  createdAt?: string;
  updatedAt?: string;
  chatRoomId?: string;
  id: number;
  chats?: IMessage[];
  seen?: ISeen;
  oldestMessage?: IMessage;
  latestMessage?: IMessage;
}

export interface INotification {
  isSeen: boolean;
  id: number;
  data: IMessage;
  createdAt?: string;
  updatedAt?: string;
  profile: number | IProfile;
  type: "new_post_notification";
}

export interface IProfile {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  displayName: string;
  jammates: IProfile[];
  avatar: IImage;
  profileRoomId: string;
  profileBroadcastRoomId: string;
  connection: IConnection;
  onChatSelect: () => void;
}

export interface IAccount {
  id: number;
  accessToken: string;
  username: string;
}

export type Geom = {
  type: "Point";
  coordinates: [number, number];
};

export type IJamSingleton = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  geom: Geom;
  name: string;
  genres: ICategory[];
  description: string;
  startDate: string;
  endDate: string;
  address: string;
  host: Partial<IProfile>;
  attending: Array<Partial<IProfile>>;
  checkedIn: Array<Partial<IProfile>>;
};

export interface IJam extends ILatLng {
  id: number;
  name: string;
  address?: string;
  description?: string;
  genres: string;
  host: IProfile;
  invited: IProfile[];
  attending: IProfile[];
  checkedIn: IProfile[];
  type: JamType;
}

export type JamType = "public" | "private" | "show";

export interface ILatLng {
  latitude: number;
  longitude: number;
  distance?: number;
}

export interface ICategoryResult {
  data: ICategory[];
}

export interface IJamListResult {
  jams: IJam[];
  loadMore: boolean;
}
export interface IParentCategory {
  name: string;
}
export interface ICategory {
  id: number;
  parent?: IParentCategory;
  attributes: IAttributes;
}

export interface IAttributes {
  name: string;
  type: any;
  createdAt: string;
  updatedAt: string;
  locale: string;
  subcategories: ISubcategories;
}

export interface ISubcategories {
  data: ICategory[];
}

export interface IMessageResult {
  chats: IMessage[];
  connectionId: number;
}
export interface IPostResult {
  posts: IMessage[];
  loadMore?: boolean;
}
export interface INewJammateConnectionResult {
  newConnection: IConnection;
  profile: IProfile;
}

export interface IMetaData {
  account: IAccount;
  profiles: IProfile[];
  skills: ICategory[];
  genres: ICategory[];
  posts: IPostResult;
  notifications: INotificationResult;
}

export interface ISeen {
  targetId?: number;
  type: "private_message" | "notification" | "group_message";
  profile?: number;
  value?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface INotificationResult {
  notifications: INotification[];
  loadMore?: boolean;
  seen: ISeen;
}

export interface IGlobalContext {
  socket: Ref<Socket>;
  setSocket: (s: Ref<Socket> | null) => void;
  getRegion: () => Region;
  selectedChatId?: number | null;
  setSelectedChatId: (id: number | null) => void;
  accessToken: string | null;
  metaData?: IMetaData | null;
  isLoading: boolean;
  showChat: boolean;
  setShowChat: (showChat: boolean) => void;
  setAccessToken: (token: string | null) => void;
  signIn: (token: string) => void;
  savePrivateMessages: (data: IMessageResult) => void;
  savePosts: (data: IPostResult) => void;
  saveNotifications: (data: INotification[]) => void;
  latestNotification?: INotification;
  setMessageSeen: (connectionId: number, data: ISeen) => void;
  signOut: () => void;
  setLoading: (showChat: boolean) => void;
  setMeta: (newMetaData: IMetaData) => void;
  meta: IMetaData | null;
  posts: IMessage[];
  notifications: INotification[];
  categories: Ref<ICategoryResult>;
  getCategory: (catId: number) => ICategory | undefined;
  getCategories: (type: "skill" | "genre") => ICategory[];
  setCategories: (s: ICategoryResult) => void;
  lastSeenNotification?: ISeen;
  saveLastSeenNotification: (newLastSeenNotification: ISeen) => void;
  currentJamId?: number;
  setCurrentJamId: (newJamId: number | undefined) => void;
}
