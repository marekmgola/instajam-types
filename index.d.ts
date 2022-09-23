import { Ref } from 'react';
import { Socket } from 'socket.io-client';

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
};

export interface IImage {
  alternativeText: string;
  caption: string;
  createdAt: string;
  formats: {
    medium: IImageFormat;
    small: IImageFormat;
    thumbnail: IImageFormat;
  };
};

export interface IMessage {
  id: number;
  message: string;
  createdAt: string;
  author: IProfile;
  connection: IConnection;
  color?: string;
};

export interface IConnection {
  id: number;
  chats?: IMessage[];
  oldestMessage?: IMessage;
  latestMessage?: IMessage;
};

export interface IProfile {
  id: number;
  displayName: string;
  jammates: IProfile[];
  avatar: IImage;
  profileRoomId: string;
  connection: IConnection;
  onChatSelect: () => void;
};

export interface IAccount {
  id: number;
  accessToken?: string;
  username: string;
};

export interface IMetadata {
  account?: IAccount;
  profiles?: IProfile[];
}

export interface IJam {
  title: string;
  description: string;
  coords: ILatLng;
}

export interface ILatLng {
  latitude: number;
  longitude: number;
}

export interface ICategory {
  title: string;
  parent: number;
}
export interface IMessageResult {
  chats: IMessage[];
  connectionId: number;
};

export interface INewJammateConnectionResult {
  newConnection: IConnection;
  profile: IProfile;
};

export interface IMetaData {
  account?: IAccount;
  profiles: IProfile[];
  skills: ICategory[];
  genres: ICategory[];
}

export interface ISeen {
  targetId: number;
  type: 'private_message' | 'notification' | 'group_message';
  profile: number
  value: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface IGlobalContext {
  socket: Ref<Socket>;
  setSocket: (s: Ref<Socket> | null) => void;
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
  signOut: () => void;
  setLoading: (showChat: boolean) => void;
  setMeta: (newMetaData: IMetaData) => void;
  getMeta: () => IMetaData | null;
  meta: IMetaData | null;
}
