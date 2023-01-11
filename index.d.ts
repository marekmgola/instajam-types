import {
  Message,
  User,
  FriendShip,
  Notification,
  Jam,
  Genre,
  MessageSeen,
  Post,
} from "./prisma/prisma-client-js";
import { MutableRefObject, Ref } from "react";
import { Region } from "react-native-maps";
import { Socket } from "socket.io-client";

export type Geom = {
  type: "Point";
  coordinates: [number, number];
};

export type LatLng = {
  latitude: number;
  longitude: number;
  distance?: number;
};

export type GenreResult = {
  data: Genre[];
};

export type JamListResult = {
  jams: Jam[];
  loadMore: boolean;
};

export type JamSearchResult = JamWithGeo[];

export type MessageResult = {
  chats: Message[];
  loadMore?: boolean;
};
export type PostResult = {
  posts: Post[];
  loadMore?: boolean;
};
export type NewJammateConnectionResult = {
  newConnection: FriendShip;
  profile: User;
};

export type MetaData = {
  account: User;
  skills: Genre[];
  genres: Genre[];
  posts: PostResult;
  notifications: INotificationResult;
  friends: FriendShip[];
};

export type FeedbackResult = {
  match: boolean;
  matchingUser?: User;
};

export type INotificationResult = {
  notifications: Notification[];
  loadMore?: boolean;
  seen: MessageSeen;
};

export type ILoggedInContext = {
  socket: MutableRefObject<Socket | null>;
  profileMatchFormSubmitted: MutableRefObject<boolean>;
};

type PermissionType = "location" | "gallery" | "camera";
type StorageType =
  | "autoLogin"
  | "rememberMe"
  | "username"
  | "password"
  | "grantedLocationPerms";

export type IGlobalContext = {
  getChatBadgeOpen: () => boolean;
  setChatBadgeOpen: (chatBadgeStatus: boolean) => void;
  getLocalStorageItems: (
    itemNames: StorageType[]
  ) => Promise<Array<string | null>>;
  deleteLocalStorageItems: (itemNames: StorageType[]) => Promise<void>;
  setLocalStorageItems: (
    itemsMap: Partial<Record<StorageType, string>>
  ) => Promise<void>;
  getRegion: () => Region | null;
  setRegion: (newRegion: Region) => void;
  selectedChatId: number | null;
  setSelectedChatId: (id: number | null) => void;
  accessToken: string | null;
  isLoading: boolean;
  showChat: boolean;
  setShowChat: (showChat: boolean) => void;
  setAccessToken: (token: string | null) => void;
  signIn: (token: string) => void;
  savePrivateMessages: (data: MessageResult) => void;
  savePosts: (data: Message[]) => void;
  saveNotifications: (data: Notification[]) => void;
  latestNotification?: Notification;
  setMessageSeen: (connectionId: number, data: MessageSeen) => void;
  signOut: () => void;
  setLoading: (showChat: boolean) => void;
  setMeta: (newMetaData: MetaData) => void;
  meta: MetaData | null;
  posts: Message[];
  notifications: Notification[];
  categories: Ref<GenreResult | null>;
  jamListUpcoming: JamListResult | null;
  jamListPast: JamListResult | null;
  setJamList: (jamListResult: JamListResult, type: "upcoming" | "past") => void;
  getCategory: (catId: number) => Genre | undefined;
  getCategories: (type: "skill" | "genre") => Genre[];
  setCategories: (s: GenreResult) => void;
  getPermission: (permissionType: PermissionType) => boolean;
  setPermission: (permissionType: PermissionType, value: boolean) => void;
  lastSeenNotification: MessageSeen | null;
  saveLastSeenNotification: (newLastSeenNotification: MessageSeen) => void;
  currentJamId?: number;
  setCurrentJamId: (newJamId: number | undefined) => void;
};

type AlreadyExistsResult = {
  message: {
    response: "user_already_exist";
    status: 409;
    message: "user_already_exist";
    name: "HttpException";
  };
};

type RegisterResult = {
  success: true;
  message: "ACCOUNT_CREATE_SUCCESS";
  data: User;
};

export type MatchFeedResult<T> = {
  loadMore: boolean;
  data: T[];
};

export interface RegistrationResult {
  message: "ACCOUNT_CREATE_SUCCESS" | "USER_ALREADY_EXISTS" | "OK";
  data?: User;
}
export interface LoginResult {
  message: "INVALID_CREDENTIALS" | "OK";
  data?: User;
  token?: Token;
}

export interface Token {
  Authorization: string;
}

export type JamWithGeo = Jam & {
  longitude: number;
  latitude: number;
  distance?: number;
};
