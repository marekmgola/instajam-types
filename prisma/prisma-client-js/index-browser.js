
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.FeedbackScalarFieldEnum = makeEnum({
  id: 'id',
  reviewerId: 'reviewerId',
  revieweeId: 'revieweeId',
  approved: 'approved'
});

exports.Prisma.FriendShipScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  befrienderId: 'befrienderId',
  befriendeeId: 'befriendeeId'
});

exports.Prisma.GenreScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.JamGenresScalarFieldEnum = makeEnum({
  id: 'id',
  jamId: 'jamId',
  genreId: 'genreId'
});

exports.Prisma.JamInvitationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  jamId: 'jamId',
  inviteeId: 'inviteeId',
  inviterId: 'inviterId'
});

exports.Prisma.JamScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address',
  name: 'name',
  description: 'description',
  image: 'image',
  startDate: 'startDate',
  endDate: 'endDate',
  jamType: 'jamType',
  hostId: 'hostId'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.MessageScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  createdAt: 'createdAt',
  friendShipId: 'friendShipId',
  authorId: 'authorId'
});

exports.Prisma.MessageSeenScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId'
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  notificationType: 'notificationType',
  data: 'data'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  message: 'message',
  authorId: 'authorId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SkillScalarFieldEnum = makeEnum({
  id: 'id',
  slug: 'slug'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  login: 'login',
  password: 'password',
  displayName: 'displayName',
  avatar: 'avatar',
  role: 'role',
  roomId: 'roomId',
  createdAt: 'createdAt'
});
exports.JamType = makeEnum({
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS',
  PRIVATE: 'PRIVATE',
  SHOW: 'SHOW'
});

exports.NotificationType = makeEnum({
  NEW_POST: 'NEW_POST',
  NEW_MATCH: 'NEW_MATCH'
});

exports.Role = makeEnum({
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
  ROOT: 'ROOT'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Jam: 'Jam',
  JamGenres: 'JamGenres',
  Feedback: 'Feedback',
  JamInvitation: 'JamInvitation',
  FriendShip: 'FriendShip',
  Genre: 'Genre',
  Skill: 'Skill',
  Notification: 'Notification',
  Post: 'Post',
  Message: 'Message',
  MessageSeen: 'MessageSeen'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
