
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  login: string
  password: string
  displayName: string | null
  avatar: string | null
  role: Role
  roomId: string
  createdAt: Date
}

/**
 * Model Jam
 * 
 */
export type Jam = {
  id: number
  createdAt: Date
  updatedAt: Date
  address: string | null
  name: string
  description: string
  image: string | null
  startDate: Date
  endDate: Date
  jamType: JamType
  hostId: number
}

/**
 * Model JamGenres
 * 
 */
export type JamGenres = {
  id: number
  jamId: number
  genreId: string
}

/**
 * Model Feedback
 * 
 */
export type Feedback = {
  id: number
  reviewerId: number
  revieweeId: number
  approved: boolean
}

/**
 * Model JamInvitation
 * 
 */
export type JamInvitation = {
  id: number
  createdAt: Date
  jamId: number
  inviteeId: number
  inviterId: number
}

/**
 * Model FriendShip
 * 
 */
export type FriendShip = {
  id: number
  createdAt: Date
  befrienderId: number
  befriendeeId: number
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  id: string
}

/**
 * Model Skill
 * 
 */
export type Skill = {
  id: number
  slug: string
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: number
  createdAt: Date
  userId: number
  notificationType: NotificationType
  data: Prisma.JsonValue
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  createdAt: Date
  message: string
  authorId: number
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: number
  message: string
  createdAt: Date
  friendShipId: number
  authorId: number
}

/**
 * Model MessageSeen
 * 
 */
export type MessageSeen = {
  id: number
  createdAt: Date
  userId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const JamType: {
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS',
  PRIVATE: 'PRIVATE',
  SHOW: 'SHOW'
};

export type JamType = (typeof JamType)[keyof typeof JamType]


export const NotificationType: {
  NEW_POST: 'NEW_POST',
  NEW_MATCH: 'NEW_MATCH'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Role: {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
  ROOT: 'ROOT'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.jam`: Exposes CRUD operations for the **Jam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jams
    * const jams = await prisma.jam.findMany()
    * ```
    */
  get jam(): Prisma.JamDelegate<GlobalReject>;

  /**
   * `prisma.jamGenres`: Exposes CRUD operations for the **JamGenres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JamGenres
    * const jamGenres = await prisma.jamGenres.findMany()
    * ```
    */
  get jamGenres(): Prisma.JamGenresDelegate<GlobalReject>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<GlobalReject>;

  /**
   * `prisma.jamInvitation`: Exposes CRUD operations for the **JamInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JamInvitations
    * const jamInvitations = await prisma.jamInvitation.findMany()
    * ```
    */
  get jamInvitation(): Prisma.JamInvitationDelegate<GlobalReject>;

  /**
   * `prisma.friendShip`: Exposes CRUD operations for the **FriendShip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendShips
    * const friendShips = await prisma.friendShip.findMany()
    * ```
    */
  get friendShip(): Prisma.FriendShipDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.messageSeen`: Exposes CRUD operations for the **MessageSeen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageSeens
    * const messageSeens = await prisma.messageSeen.findMany()
    * ```
    */
  get messageSeen(): Prisma.MessageSeenDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    befriender: number
    befriendee: number
    reviewer: number
    reviewee: number
    inviter: number
    invitee: number
    checkedIn: number
    attending: number
    notifications: number
    posts: number
    messages: number
    messagesSeen: number
    skills: number
    jamsHosting: number
  }

  export type UserCountOutputTypeSelect = {
    befriender?: boolean
    befriendee?: boolean
    reviewer?: boolean
    reviewee?: boolean
    inviter?: boolean
    invitee?: boolean
    checkedIn?: boolean
    attending?: boolean
    notifications?: boolean
    posts?: boolean
    messages?: boolean
    messagesSeen?: boolean
    skills?: boolean
    jamsHosting?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type JamCountOutputType
   */


  export type JamCountOutputType = {
    attending: number
    checkedIn: number
    invited: number
    jamGenres: number
  }

  export type JamCountOutputTypeSelect = {
    attending?: boolean
    checkedIn?: boolean
    invited?: boolean
    jamGenres?: boolean
  }

  export type JamCountOutputTypeGetPayload<S extends boolean | null | undefined | JamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (JamCountOutputTypeArgs)
    ? JamCountOutputType 
    : S extends { select: any } & (JamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof JamCountOutputType ? JamCountOutputType[P] : never
  } 
      : JamCountOutputType




  // Custom InputTypes

  /**
   * JamCountOutputType without action
   */
  export type JamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the JamCountOutputType
     * 
    **/
    select?: JamCountOutputTypeSelect | null
  }



  /**
   * Count Type FriendShipCountOutputType
   */


  export type FriendShipCountOutputType = {
    Message: number
  }

  export type FriendShipCountOutputTypeSelect = {
    Message?: boolean
  }

  export type FriendShipCountOutputTypeGetPayload<S extends boolean | null | undefined | FriendShipCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FriendShipCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FriendShipCountOutputTypeArgs)
    ? FriendShipCountOutputType 
    : S extends { select: any } & (FriendShipCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FriendShipCountOutputType ? FriendShipCountOutputType[P] : never
  } 
      : FriendShipCountOutputType




  // Custom InputTypes

  /**
   * FriendShipCountOutputType without action
   */
  export type FriendShipCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FriendShipCountOutputType
     * 
    **/
    select?: FriendShipCountOutputTypeSelect | null
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    jamGenres: number
  }

  export type GenreCountOutputTypeSelect = {
    jamGenres?: boolean
  }

  export type GenreCountOutputTypeGetPayload<S extends boolean | null | undefined | GenreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GenreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GenreCountOutputTypeArgs)
    ? GenreCountOutputType 
    : S extends { select: any } & (GenreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
      : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     * 
    **/
    select?: GenreCountOutputTypeSelect | null
  }



  /**
   * Count Type SkillCountOutputType
   */


  export type SkillCountOutputType = {
    user: number
  }

  export type SkillCountOutputTypeSelect = {
    user?: boolean
  }

  export type SkillCountOutputTypeGetPayload<S extends boolean | null | undefined | SkillCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SkillCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SkillCountOutputTypeArgs)
    ? SkillCountOutputType 
    : S extends { select: any } & (SkillCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SkillCountOutputType ? SkillCountOutputType[P] : never
  } 
      : SkillCountOutputType




  // Custom InputTypes

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     * 
    **/
    select?: SkillCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    displayName: string | null
    avatar: string | null
    role: Role | null
    roomId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    login: string | null
    password: string | null
    displayName: string | null
    avatar: string | null
    role: Role | null
    roomId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    login: number
    password: number
    displayName: number
    avatar: number
    role: number
    roomId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    login?: true
    password?: true
    displayName?: true
    avatar?: true
    role?: true
    roomId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    login?: true
    password?: true
    displayName?: true
    avatar?: true
    role?: true
    roomId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    login?: true
    password?: true
    displayName?: true
    avatar?: true
    role?: true
    roomId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    login: string
    password: string
    displayName: string | null
    avatar: string | null
    role: Role
    roomId: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    login?: boolean
    password?: boolean
    displayName?: boolean
    avatar?: boolean
    role?: boolean
    roomId?: boolean
    createdAt?: boolean
    befriender?: boolean | UserBefrienderArgs
    befriendee?: boolean | UserBefriendeeArgs
    reviewer?: boolean | UserReviewerArgs
    reviewee?: boolean | UserRevieweeArgs
    inviter?: boolean | UserInviterArgs
    invitee?: boolean | UserInviteeArgs
    checkedIn?: boolean | UserCheckedInArgs
    attending?: boolean | UserAttendingArgs
    notifications?: boolean | UserNotificationsArgs
    posts?: boolean | UserPostsArgs
    messages?: boolean | UserMessagesArgs
    messagesSeen?: boolean | UserMessagesSeenArgs
    skills?: boolean | UserSkillsArgs
    jamsHosting?: boolean | UserJamsHostingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    befriender?: boolean | UserBefrienderArgs
    befriendee?: boolean | UserBefriendeeArgs
    reviewer?: boolean | UserReviewerArgs
    reviewee?: boolean | UserRevieweeArgs
    inviter?: boolean | UserInviterArgs
    invitee?: boolean | UserInviteeArgs
    checkedIn?: boolean | UserCheckedInArgs
    attending?: boolean | UserAttendingArgs
    notifications?: boolean | UserNotificationsArgs
    posts?: boolean | UserPostsArgs
    messages?: boolean | UserMessagesArgs
    messagesSeen?: boolean | UserMessagesSeenArgs
    skills?: boolean | UserSkillsArgs
    jamsHosting?: boolean | UserJamsHostingArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'befriender' ? Array < FriendShipGetPayload<S['include'][P]>>  :
        P extends 'befriendee' ? Array < FriendShipGetPayload<S['include'][P]>>  :
        P extends 'reviewer' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends 'reviewee' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends 'inviter' ? Array < JamInvitationGetPayload<S['include'][P]>>  :
        P extends 'invitee' ? Array < JamInvitationGetPayload<S['include'][P]>>  :
        P extends 'checkedIn' ? Array < JamGetPayload<S['include'][P]>>  :
        P extends 'attending' ? Array < JamGetPayload<S['include'][P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<S['include'][P]>>  :
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'messagesSeen' ? Array < MessageSeenGetPayload<S['include'][P]>>  :
        P extends 'skills' ? Array < SkillGetPayload<S['include'][P]>>  :
        P extends 'jamsHosting' ? Array < JamGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'befriender' ? Array < FriendShipGetPayload<S['select'][P]>>  :
        P extends 'befriendee' ? Array < FriendShipGetPayload<S['select'][P]>>  :
        P extends 'reviewer' ? Array < FeedbackGetPayload<S['select'][P]>>  :
        P extends 'reviewee' ? Array < FeedbackGetPayload<S['select'][P]>>  :
        P extends 'inviter' ? Array < JamInvitationGetPayload<S['select'][P]>>  :
        P extends 'invitee' ? Array < JamInvitationGetPayload<S['select'][P]>>  :
        P extends 'checkedIn' ? Array < JamGetPayload<S['select'][P]>>  :
        P extends 'attending' ? Array < JamGetPayload<S['select'][P]>>  :
        P extends 'notifications' ? Array < NotificationGetPayload<S['select'][P]>>  :
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'messagesSeen' ? Array < MessageSeenGetPayload<S['select'][P]>>  :
        P extends 'skills' ? Array < SkillGetPayload<S['select'][P]>>  :
        P extends 'jamsHosting' ? Array < JamGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    befriender<T extends UserBefrienderArgs= {}>(args?: Subset<T, UserBefrienderArgs>): PrismaPromise<Array<FriendShipGetPayload<T>>| Null>;

    befriendee<T extends UserBefriendeeArgs= {}>(args?: Subset<T, UserBefriendeeArgs>): PrismaPromise<Array<FriendShipGetPayload<T>>| Null>;

    reviewer<T extends UserReviewerArgs= {}>(args?: Subset<T, UserReviewerArgs>): PrismaPromise<Array<FeedbackGetPayload<T>>| Null>;

    reviewee<T extends UserRevieweeArgs= {}>(args?: Subset<T, UserRevieweeArgs>): PrismaPromise<Array<FeedbackGetPayload<T>>| Null>;

    inviter<T extends UserInviterArgs= {}>(args?: Subset<T, UserInviterArgs>): PrismaPromise<Array<JamInvitationGetPayload<T>>| Null>;

    invitee<T extends UserInviteeArgs= {}>(args?: Subset<T, UserInviteeArgs>): PrismaPromise<Array<JamInvitationGetPayload<T>>| Null>;

    checkedIn<T extends UserCheckedInArgs= {}>(args?: Subset<T, UserCheckedInArgs>): PrismaPromise<Array<JamGetPayload<T>>| Null>;

    attending<T extends UserAttendingArgs= {}>(args?: Subset<T, UserAttendingArgs>): PrismaPromise<Array<JamGetPayload<T>>| Null>;

    notifications<T extends UserNotificationsArgs= {}>(args?: Subset<T, UserNotificationsArgs>): PrismaPromise<Array<NotificationGetPayload<T>>| Null>;

    posts<T extends UserPostsArgs= {}>(args?: Subset<T, UserPostsArgs>): PrismaPromise<Array<PostGetPayload<T>>| Null>;

    messages<T extends UserMessagesArgs= {}>(args?: Subset<T, UserMessagesArgs>): PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    messagesSeen<T extends UserMessagesSeenArgs= {}>(args?: Subset<T, UserMessagesSeenArgs>): PrismaPromise<Array<MessageSeenGetPayload<T>>| Null>;

    skills<T extends UserSkillsArgs= {}>(args?: Subset<T, UserSkillsArgs>): PrismaPromise<Array<SkillGetPayload<T>>| Null>;

    jamsHosting<T extends UserJamsHostingArgs= {}>(args?: Subset<T, UserJamsHostingArgs>): PrismaPromise<Array<JamGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.befriender
   */
  export type UserBefrienderArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    where?: FriendShipWhereInput
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    cursor?: FriendShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }


  /**
   * User.befriendee
   */
  export type UserBefriendeeArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    where?: FriendShipWhereInput
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    cursor?: FriendShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }


  /**
   * User.reviewer
   */
  export type UserReviewerArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * User.reviewee
   */
  export type UserRevieweeArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * User.inviter
   */
  export type UserInviterArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    where?: JamInvitationWhereInput
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    cursor?: JamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }


  /**
   * User.invitee
   */
  export type UserInviteeArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    where?: JamInvitationWhereInput
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    cursor?: JamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }


  /**
   * User.checkedIn
   */
  export type UserCheckedInArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    where?: JamWhereInput
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    cursor?: JamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamScalarFieldEnum>
  }


  /**
   * User.attending
   */
  export type UserAttendingArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    where?: JamWhereInput
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    cursor?: JamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamScalarFieldEnum>
  }


  /**
   * User.notifications
   */
  export type UserNotificationsArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * User.posts
   */
  export type UserPostsArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User.messages
   */
  export type UserMessagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.messagesSeen
   */
  export type UserMessagesSeenArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    where?: MessageSeenWhereInput
    orderBy?: Enumerable<MessageSeenOrderByWithRelationInput>
    cursor?: MessageSeenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageSeenScalarFieldEnum>
  }


  /**
   * User.skills
   */
  export type UserSkillsArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    where?: SkillWhereInput
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SkillScalarFieldEnum>
  }


  /**
   * User.jamsHosting
   */
  export type UserJamsHostingArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    where?: JamWhereInput
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    cursor?: JamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Jam
   */


  export type AggregateJam = {
    _count: JamCountAggregateOutputType | null
    _avg: JamAvgAggregateOutputType | null
    _sum: JamSumAggregateOutputType | null
    _min: JamMinAggregateOutputType | null
    _max: JamMaxAggregateOutputType | null
  }

  export type JamAvgAggregateOutputType = {
    id: number | null
    hostId: number | null
  }

  export type JamSumAggregateOutputType = {
    id: number | null
    hostId: number | null
  }

  export type JamMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    name: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    jamType: JamType | null
    hostId: number | null
  }

  export type JamMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    name: string | null
    description: string | null
    image: string | null
    startDate: Date | null
    endDate: Date | null
    jamType: JamType | null
    hostId: number | null
  }

  export type JamCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    address: number
    name: number
    description: number
    image: number
    startDate: number
    endDate: number
    jamType: number
    hostId: number
    _all: number
  }


  export type JamAvgAggregateInputType = {
    id?: true
    hostId?: true
  }

  export type JamSumAggregateInputType = {
    id?: true
    hostId?: true
  }

  export type JamMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    name?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    jamType?: true
    hostId?: true
  }

  export type JamMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    name?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    jamType?: true
    hostId?: true
  }

  export type JamCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    name?: true
    description?: true
    image?: true
    startDate?: true
    endDate?: true
    jamType?: true
    hostId?: true
    _all?: true
  }

  export type JamAggregateArgs = {
    /**
     * Filter which Jam to aggregate.
     * 
    **/
    where?: JamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jams to fetch.
     * 
    **/
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jams
    **/
    _count?: true | JamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JamMaxAggregateInputType
  }

  export type GetJamAggregateType<T extends JamAggregateArgs> = {
        [P in keyof T & keyof AggregateJam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJam[P]>
      : GetScalarType<T[P], AggregateJam[P]>
  }




  export type JamGroupByArgs = {
    where?: JamWhereInput
    orderBy?: Enumerable<JamOrderByWithAggregationInput>
    by: Array<JamScalarFieldEnum>
    having?: JamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JamCountAggregateInputType | true
    _avg?: JamAvgAggregateInputType
    _sum?: JamSumAggregateInputType
    _min?: JamMinAggregateInputType
    _max?: JamMaxAggregateInputType
  }


  export type JamGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    address: string | null
    name: string
    description: string
    image: string | null
    startDate: Date
    endDate: Date
    jamType: JamType
    hostId: number
    _count: JamCountAggregateOutputType | null
    _avg: JamAvgAggregateOutputType | null
    _sum: JamSumAggregateOutputType | null
    _min: JamMinAggregateOutputType | null
    _max: JamMaxAggregateOutputType | null
  }

  type GetJamGroupByPayload<T extends JamGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JamGroupByOutputType[P]>
            : GetScalarType<T[P], JamGroupByOutputType[P]>
        }
      >
    >


  export type JamSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    startDate?: boolean
    endDate?: boolean
    jamType?: boolean
    host?: boolean | UserArgs
    hostId?: boolean
    attending?: boolean | JamAttendingArgs
    checkedIn?: boolean | JamCheckedInArgs
    invited?: boolean | JamInvitedArgs
    jamGenres?: boolean | JamJamGenresArgs
    _count?: boolean | JamCountOutputTypeArgs
  }


  export type JamInclude = {
    host?: boolean | UserArgs
    attending?: boolean | JamAttendingArgs
    checkedIn?: boolean | JamCheckedInArgs
    invited?: boolean | JamInvitedArgs
    jamGenres?: boolean | JamJamGenresArgs
    _count?: boolean | JamCountOutputTypeArgs
  } 

  export type JamGetPayload<S extends boolean | null | undefined | JamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Jam :
    S extends undefined ? never :
    S extends { include: any } & (JamArgs | JamFindManyArgs)
    ? Jam  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'host' ? UserGetPayload<S['include'][P]> :
        P extends 'attending' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'checkedIn' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'invited' ? Array < JamInvitationGetPayload<S['include'][P]>>  :
        P extends 'jamGenres' ? Array < JamGenresGetPayload<S['include'][P]>>  :
        P extends '_count' ? JamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (JamArgs | JamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'host' ? UserGetPayload<S['select'][P]> :
        P extends 'attending' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'checkedIn' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'invited' ? Array < JamInvitationGetPayload<S['select'][P]>>  :
        P extends 'jamGenres' ? Array < JamGenresGetPayload<S['select'][P]>>  :
        P extends '_count' ? JamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Jam ? Jam[P] : never
  } 
      : Jam


  type JamCountArgs = Merge<
    Omit<JamFindManyArgs, 'select' | 'include'> & {
      select?: JamCountAggregateInputType | true
    }
  >

  export interface JamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Jam that matches the filter.
     * @param {JamFindUniqueArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Jam'> extends True ? Prisma__JamClient<JamGetPayload<T>> : Prisma__JamClient<JamGetPayload<T> | null, null>

    /**
     * Find one Jam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JamFindUniqueOrThrowArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JamFindUniqueOrThrowArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Find the first Jam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamFindFirstArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Jam'> extends True ? Prisma__JamClient<JamGetPayload<T>> : Prisma__JamClient<JamGetPayload<T> | null, null>

    /**
     * Find the first Jam that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamFindFirstOrThrowArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JamFindFirstOrThrowArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Find zero or more Jams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jams
     * const jams = await prisma.jam.findMany()
     * 
     * // Get first 10 Jams
     * const jams = await prisma.jam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jamWithIdOnly = await prisma.jam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JamFindManyArgs>(
      args?: SelectSubset<T, JamFindManyArgs>
    ): PrismaPromise<Array<JamGetPayload<T>>>

    /**
     * Create a Jam.
     * @param {JamCreateArgs} args - Arguments to create a Jam.
     * @example
     * // Create one Jam
     * const Jam = await prisma.jam.create({
     *   data: {
     *     // ... data to create a Jam
     *   }
     * })
     * 
    **/
    create<T extends JamCreateArgs>(
      args: SelectSubset<T, JamCreateArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Create many Jams.
     *     @param {JamCreateManyArgs} args - Arguments to create many Jams.
     *     @example
     *     // Create many Jams
     *     const jam = await prisma.jam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JamCreateManyArgs>(
      args?: SelectSubset<T, JamCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Jam.
     * @param {JamDeleteArgs} args - Arguments to delete one Jam.
     * @example
     * // Delete one Jam
     * const Jam = await prisma.jam.delete({
     *   where: {
     *     // ... filter to delete one Jam
     *   }
     * })
     * 
    **/
    delete<T extends JamDeleteArgs>(
      args: SelectSubset<T, JamDeleteArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Update one Jam.
     * @param {JamUpdateArgs} args - Arguments to update one Jam.
     * @example
     * // Update one Jam
     * const jam = await prisma.jam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JamUpdateArgs>(
      args: SelectSubset<T, JamUpdateArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Delete zero or more Jams.
     * @param {JamDeleteManyArgs} args - Arguments to filter Jams to delete.
     * @example
     * // Delete a few Jams
     * const { count } = await prisma.jam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JamDeleteManyArgs>(
      args?: SelectSubset<T, JamDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jams
     * const jam = await prisma.jam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JamUpdateManyArgs>(
      args: SelectSubset<T, JamUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Jam.
     * @param {JamUpsertArgs} args - Arguments to update or create a Jam.
     * @example
     * // Update or create a Jam
     * const jam = await prisma.jam.upsert({
     *   create: {
     *     // ... data to create a Jam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jam we want to update
     *   }
     * })
    **/
    upsert<T extends JamUpsertArgs>(
      args: SelectSubset<T, JamUpsertArgs>
    ): Prisma__JamClient<JamGetPayload<T>>

    /**
     * Count the number of Jams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamCountArgs} args - Arguments to filter Jams to count.
     * @example
     * // Count the number of Jams
     * const count = await prisma.jam.count({
     *   where: {
     *     // ... the filter for the Jams we want to count
     *   }
     * })
    **/
    count<T extends JamCountArgs>(
      args?: Subset<T, JamCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JamAggregateArgs>(args: Subset<T, JamAggregateArgs>): PrismaPromise<GetJamAggregateType<T>>

    /**
     * Group by Jam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JamGroupByArgs['orderBy'] }
        : { orderBy?: JamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJamGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Jam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JamClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    host<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    attending<T extends JamAttendingArgs= {}>(args?: Subset<T, JamAttendingArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    checkedIn<T extends JamCheckedInArgs= {}>(args?: Subset<T, JamCheckedInArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    invited<T extends JamInvitedArgs= {}>(args?: Subset<T, JamInvitedArgs>): PrismaPromise<Array<JamInvitationGetPayload<T>>| Null>;

    jamGenres<T extends JamJamGenresArgs= {}>(args?: Subset<T, JamJamGenresArgs>): PrismaPromise<Array<JamGenresGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Jam base type for findUnique actions
   */
  export type JamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter, which Jam to fetch.
     * 
    **/
    where: JamWhereUniqueInput
  }

  /**
   * Jam findUnique
   */
  export interface JamFindUniqueArgs extends JamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jam findUniqueOrThrow
   */
  export type JamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter, which Jam to fetch.
     * 
    **/
    where: JamWhereUniqueInput
  }


  /**
   * Jam base type for findFirst actions
   */
  export type JamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter, which Jam to fetch.
     * 
    **/
    where?: JamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jams to fetch.
     * 
    **/
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jams.
     * 
    **/
    cursor?: JamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jams.
     * 
    **/
    distinct?: Enumerable<JamScalarFieldEnum>
  }

  /**
   * Jam findFirst
   */
  export interface JamFindFirstArgs extends JamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jam findFirstOrThrow
   */
  export type JamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter, which Jam to fetch.
     * 
    **/
    where?: JamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jams to fetch.
     * 
    **/
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jams.
     * 
    **/
    cursor?: JamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jams.
     * 
    **/
    distinct?: Enumerable<JamScalarFieldEnum>
  }


  /**
   * Jam findMany
   */
  export type JamFindManyArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter, which Jams to fetch.
     * 
    **/
    where?: JamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jams to fetch.
     * 
    **/
    orderBy?: Enumerable<JamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jams.
     * 
    **/
    cursor?: JamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JamScalarFieldEnum>
  }


  /**
   * Jam create
   */
  export type JamCreateArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * The data needed to create a Jam.
     * 
    **/
    data: XOR<JamCreateInput, JamUncheckedCreateInput>
  }


  /**
   * Jam createMany
   */
  export type JamCreateManyArgs = {
    /**
     * The data used to create many Jams.
     * 
    **/
    data: Enumerable<JamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Jam update
   */
  export type JamUpdateArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * The data needed to update a Jam.
     * 
    **/
    data: XOR<JamUpdateInput, JamUncheckedUpdateInput>
    /**
     * Choose, which Jam to update.
     * 
    **/
    where: JamWhereUniqueInput
  }


  /**
   * Jam updateMany
   */
  export type JamUpdateManyArgs = {
    /**
     * The data used to update Jams.
     * 
    **/
    data: XOR<JamUpdateManyMutationInput, JamUncheckedUpdateManyInput>
    /**
     * Filter which Jams to update
     * 
    **/
    where?: JamWhereInput
  }


  /**
   * Jam upsert
   */
  export type JamUpsertArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * The filter to search for the Jam to update in case it exists.
     * 
    **/
    where: JamWhereUniqueInput
    /**
     * In case the Jam found by the `where` argument doesn't exist, create a new Jam with this data.
     * 
    **/
    create: XOR<JamCreateInput, JamUncheckedCreateInput>
    /**
     * In case the Jam was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JamUpdateInput, JamUncheckedUpdateInput>
  }


  /**
   * Jam delete
   */
  export type JamDeleteArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
    /**
     * Filter which Jam to delete.
     * 
    **/
    where: JamWhereUniqueInput
  }


  /**
   * Jam deleteMany
   */
  export type JamDeleteManyArgs = {
    /**
     * Filter which Jams to delete
     * 
    **/
    where?: JamWhereInput
  }


  /**
   * Jam.attending
   */
  export type JamAttendingArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Jam.checkedIn
   */
  export type JamCheckedInArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Jam.invited
   */
  export type JamInvitedArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    where?: JamInvitationWhereInput
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    cursor?: JamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }


  /**
   * Jam.jamGenres
   */
  export type JamJamGenresArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    where?: JamGenresWhereInput
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    cursor?: JamGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamGenresScalarFieldEnum>
  }


  /**
   * Jam without action
   */
  export type JamArgs = {
    /**
     * Select specific fields to fetch from the Jam
     * 
    **/
    select?: JamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInclude | null
  }



  /**
   * Model JamGenres
   */


  export type AggregateJamGenres = {
    _count: JamGenresCountAggregateOutputType | null
    _avg: JamGenresAvgAggregateOutputType | null
    _sum: JamGenresSumAggregateOutputType | null
    _min: JamGenresMinAggregateOutputType | null
    _max: JamGenresMaxAggregateOutputType | null
  }

  export type JamGenresAvgAggregateOutputType = {
    id: number | null
    jamId: number | null
  }

  export type JamGenresSumAggregateOutputType = {
    id: number | null
    jamId: number | null
  }

  export type JamGenresMinAggregateOutputType = {
    id: number | null
    jamId: number | null
    genreId: string | null
  }

  export type JamGenresMaxAggregateOutputType = {
    id: number | null
    jamId: number | null
    genreId: string | null
  }

  export type JamGenresCountAggregateOutputType = {
    id: number
    jamId: number
    genreId: number
    _all: number
  }


  export type JamGenresAvgAggregateInputType = {
    id?: true
    jamId?: true
  }

  export type JamGenresSumAggregateInputType = {
    id?: true
    jamId?: true
  }

  export type JamGenresMinAggregateInputType = {
    id?: true
    jamId?: true
    genreId?: true
  }

  export type JamGenresMaxAggregateInputType = {
    id?: true
    jamId?: true
    genreId?: true
  }

  export type JamGenresCountAggregateInputType = {
    id?: true
    jamId?: true
    genreId?: true
    _all?: true
  }

  export type JamGenresAggregateArgs = {
    /**
     * Filter which JamGenres to aggregate.
     * 
    **/
    where?: JamGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JamGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamGenres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JamGenres
    **/
    _count?: true | JamGenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JamGenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JamGenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JamGenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JamGenresMaxAggregateInputType
  }

  export type GetJamGenresAggregateType<T extends JamGenresAggregateArgs> = {
        [P in keyof T & keyof AggregateJamGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJamGenres[P]>
      : GetScalarType<T[P], AggregateJamGenres[P]>
  }




  export type JamGenresGroupByArgs = {
    where?: JamGenresWhereInput
    orderBy?: Enumerable<JamGenresOrderByWithAggregationInput>
    by: Array<JamGenresScalarFieldEnum>
    having?: JamGenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JamGenresCountAggregateInputType | true
    _avg?: JamGenresAvgAggregateInputType
    _sum?: JamGenresSumAggregateInputType
    _min?: JamGenresMinAggregateInputType
    _max?: JamGenresMaxAggregateInputType
  }


  export type JamGenresGroupByOutputType = {
    id: number
    jamId: number
    genreId: string
    _count: JamGenresCountAggregateOutputType | null
    _avg: JamGenresAvgAggregateOutputType | null
    _sum: JamGenresSumAggregateOutputType | null
    _min: JamGenresMinAggregateOutputType | null
    _max: JamGenresMaxAggregateOutputType | null
  }

  type GetJamGenresGroupByPayload<T extends JamGenresGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JamGenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JamGenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JamGenresGroupByOutputType[P]>
            : GetScalarType<T[P], JamGenresGroupByOutputType[P]>
        }
      >
    >


  export type JamGenresSelect = {
    id?: boolean
    jam?: boolean | JamArgs
    jamId?: boolean
    genre?: boolean | GenreArgs
    genreId?: boolean
  }


  export type JamGenresInclude = {
    jam?: boolean | JamArgs
    genre?: boolean | GenreArgs
  } 

  export type JamGenresGetPayload<S extends boolean | null | undefined | JamGenresArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JamGenres :
    S extends undefined ? never :
    S extends { include: any } & (JamGenresArgs | JamGenresFindManyArgs)
    ? JamGenres  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'jam' ? JamGetPayload<S['include'][P]> :
        P extends 'genre' ? GenreGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (JamGenresArgs | JamGenresFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'jam' ? JamGetPayload<S['select'][P]> :
        P extends 'genre' ? GenreGetPayload<S['select'][P]> :  P extends keyof JamGenres ? JamGenres[P] : never
  } 
      : JamGenres


  type JamGenresCountArgs = Merge<
    Omit<JamGenresFindManyArgs, 'select' | 'include'> & {
      select?: JamGenresCountAggregateInputType | true
    }
  >

  export interface JamGenresDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one JamGenres that matches the filter.
     * @param {JamGenresFindUniqueArgs} args - Arguments to find a JamGenres
     * @example
     * // Get one JamGenres
     * const jamGenres = await prisma.jamGenres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JamGenresFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JamGenresFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JamGenres'> extends True ? Prisma__JamGenresClient<JamGenresGetPayload<T>> : Prisma__JamGenresClient<JamGenresGetPayload<T> | null, null>

    /**
     * Find one JamGenres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JamGenresFindUniqueOrThrowArgs} args - Arguments to find a JamGenres
     * @example
     * // Get one JamGenres
     * const jamGenres = await prisma.jamGenres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JamGenresFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JamGenresFindUniqueOrThrowArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Find the first JamGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresFindFirstArgs} args - Arguments to find a JamGenres
     * @example
     * // Get one JamGenres
     * const jamGenres = await prisma.jamGenres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JamGenresFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JamGenresFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JamGenres'> extends True ? Prisma__JamGenresClient<JamGenresGetPayload<T>> : Prisma__JamGenresClient<JamGenresGetPayload<T> | null, null>

    /**
     * Find the first JamGenres that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresFindFirstOrThrowArgs} args - Arguments to find a JamGenres
     * @example
     * // Get one JamGenres
     * const jamGenres = await prisma.jamGenres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JamGenresFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JamGenresFindFirstOrThrowArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Find zero or more JamGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JamGenres
     * const jamGenres = await prisma.jamGenres.findMany()
     * 
     * // Get first 10 JamGenres
     * const jamGenres = await prisma.jamGenres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jamGenresWithIdOnly = await prisma.jamGenres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JamGenresFindManyArgs>(
      args?: SelectSubset<T, JamGenresFindManyArgs>
    ): PrismaPromise<Array<JamGenresGetPayload<T>>>

    /**
     * Create a JamGenres.
     * @param {JamGenresCreateArgs} args - Arguments to create a JamGenres.
     * @example
     * // Create one JamGenres
     * const JamGenres = await prisma.jamGenres.create({
     *   data: {
     *     // ... data to create a JamGenres
     *   }
     * })
     * 
    **/
    create<T extends JamGenresCreateArgs>(
      args: SelectSubset<T, JamGenresCreateArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Create many JamGenres.
     *     @param {JamGenresCreateManyArgs} args - Arguments to create many JamGenres.
     *     @example
     *     // Create many JamGenres
     *     const jamGenres = await prisma.jamGenres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JamGenresCreateManyArgs>(
      args?: SelectSubset<T, JamGenresCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a JamGenres.
     * @param {JamGenresDeleteArgs} args - Arguments to delete one JamGenres.
     * @example
     * // Delete one JamGenres
     * const JamGenres = await prisma.jamGenres.delete({
     *   where: {
     *     // ... filter to delete one JamGenres
     *   }
     * })
     * 
    **/
    delete<T extends JamGenresDeleteArgs>(
      args: SelectSubset<T, JamGenresDeleteArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Update one JamGenres.
     * @param {JamGenresUpdateArgs} args - Arguments to update one JamGenres.
     * @example
     * // Update one JamGenres
     * const jamGenres = await prisma.jamGenres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JamGenresUpdateArgs>(
      args: SelectSubset<T, JamGenresUpdateArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Delete zero or more JamGenres.
     * @param {JamGenresDeleteManyArgs} args - Arguments to filter JamGenres to delete.
     * @example
     * // Delete a few JamGenres
     * const { count } = await prisma.jamGenres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JamGenresDeleteManyArgs>(
      args?: SelectSubset<T, JamGenresDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more JamGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JamGenres
     * const jamGenres = await prisma.jamGenres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JamGenresUpdateManyArgs>(
      args: SelectSubset<T, JamGenresUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one JamGenres.
     * @param {JamGenresUpsertArgs} args - Arguments to update or create a JamGenres.
     * @example
     * // Update or create a JamGenres
     * const jamGenres = await prisma.jamGenres.upsert({
     *   create: {
     *     // ... data to create a JamGenres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JamGenres we want to update
     *   }
     * })
    **/
    upsert<T extends JamGenresUpsertArgs>(
      args: SelectSubset<T, JamGenresUpsertArgs>
    ): Prisma__JamGenresClient<JamGenresGetPayload<T>>

    /**
     * Count the number of JamGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresCountArgs} args - Arguments to filter JamGenres to count.
     * @example
     * // Count the number of JamGenres
     * const count = await prisma.jamGenres.count({
     *   where: {
     *     // ... the filter for the JamGenres we want to count
     *   }
     * })
    **/
    count<T extends JamGenresCountArgs>(
      args?: Subset<T, JamGenresCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JamGenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JamGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JamGenresAggregateArgs>(args: Subset<T, JamGenresAggregateArgs>): PrismaPromise<GetJamGenresAggregateType<T>>

    /**
     * Group by JamGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamGenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JamGenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JamGenresGroupByArgs['orderBy'] }
        : { orderBy?: JamGenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JamGenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJamGenresGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for JamGenres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JamGenresClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    jam<T extends JamArgs= {}>(args?: Subset<T, JamArgs>): Prisma__JamClient<JamGetPayload<T> | Null>;

    genre<T extends GenreArgs= {}>(args?: Subset<T, GenreArgs>): Prisma__GenreClient<GenreGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * JamGenres base type for findUnique actions
   */
  export type JamGenresFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter, which JamGenres to fetch.
     * 
    **/
    where: JamGenresWhereUniqueInput
  }

  /**
   * JamGenres findUnique
   */
  export interface JamGenresFindUniqueArgs extends JamGenresFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JamGenres findUniqueOrThrow
   */
  export type JamGenresFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter, which JamGenres to fetch.
     * 
    **/
    where: JamGenresWhereUniqueInput
  }


  /**
   * JamGenres base type for findFirst actions
   */
  export type JamGenresFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter, which JamGenres to fetch.
     * 
    **/
    where?: JamGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamGenres.
     * 
    **/
    cursor?: JamGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamGenres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamGenres.
     * 
    **/
    distinct?: Enumerable<JamGenresScalarFieldEnum>
  }

  /**
   * JamGenres findFirst
   */
  export interface JamGenresFindFirstArgs extends JamGenresFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JamGenres findFirstOrThrow
   */
  export type JamGenresFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter, which JamGenres to fetch.
     * 
    **/
    where?: JamGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamGenres.
     * 
    **/
    cursor?: JamGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamGenres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamGenres.
     * 
    **/
    distinct?: Enumerable<JamGenresScalarFieldEnum>
  }


  /**
   * JamGenres findMany
   */
  export type JamGenresFindManyArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter, which JamGenres to fetch.
     * 
    **/
    where?: JamGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JamGenres.
     * 
    **/
    cursor?: JamGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamGenres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JamGenresScalarFieldEnum>
  }


  /**
   * JamGenres create
   */
  export type JamGenresCreateArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * The data needed to create a JamGenres.
     * 
    **/
    data: XOR<JamGenresCreateInput, JamGenresUncheckedCreateInput>
  }


  /**
   * JamGenres createMany
   */
  export type JamGenresCreateManyArgs = {
    /**
     * The data used to create many JamGenres.
     * 
    **/
    data: Enumerable<JamGenresCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * JamGenres update
   */
  export type JamGenresUpdateArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * The data needed to update a JamGenres.
     * 
    **/
    data: XOR<JamGenresUpdateInput, JamGenresUncheckedUpdateInput>
    /**
     * Choose, which JamGenres to update.
     * 
    **/
    where: JamGenresWhereUniqueInput
  }


  /**
   * JamGenres updateMany
   */
  export type JamGenresUpdateManyArgs = {
    /**
     * The data used to update JamGenres.
     * 
    **/
    data: XOR<JamGenresUpdateManyMutationInput, JamGenresUncheckedUpdateManyInput>
    /**
     * Filter which JamGenres to update
     * 
    **/
    where?: JamGenresWhereInput
  }


  /**
   * JamGenres upsert
   */
  export type JamGenresUpsertArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * The filter to search for the JamGenres to update in case it exists.
     * 
    **/
    where: JamGenresWhereUniqueInput
    /**
     * In case the JamGenres found by the `where` argument doesn't exist, create a new JamGenres with this data.
     * 
    **/
    create: XOR<JamGenresCreateInput, JamGenresUncheckedCreateInput>
    /**
     * In case the JamGenres was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JamGenresUpdateInput, JamGenresUncheckedUpdateInput>
  }


  /**
   * JamGenres delete
   */
  export type JamGenresDeleteArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    /**
     * Filter which JamGenres to delete.
     * 
    **/
    where: JamGenresWhereUniqueInput
  }


  /**
   * JamGenres deleteMany
   */
  export type JamGenresDeleteManyArgs = {
    /**
     * Filter which JamGenres to delete
     * 
    **/
    where?: JamGenresWhereInput
  }


  /**
   * JamGenres without action
   */
  export type JamGenresArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
  }



  /**
   * Model Feedback
   */


  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    revieweeId: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    revieweeId: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    revieweeId: number | null
    approved: boolean | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    reviewerId: number | null
    revieweeId: number | null
    approved: boolean | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    reviewerId: number
    revieweeId: number
    approved: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    approved?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    approved?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    approved?: true
    _all?: true
  }

  export type FeedbackAggregateArgs = {
    /**
     * Filter which Feedback to aggregate.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs = {
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithAggregationInput>
    by: Array<FeedbackScalarFieldEnum>
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }


  export type FeedbackGroupByOutputType = {
    id: number
    reviewerId: number
    revieweeId: number
    approved: boolean
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect = {
    id?: boolean
    reviewer?: boolean | UserArgs
    reviewerId?: boolean
    reviewee?: boolean | UserArgs
    revieweeId?: boolean
    approved?: boolean
  }


  export type FeedbackInclude = {
    reviewer?: boolean | UserArgs
    reviewee?: boolean | UserArgs
  } 

  export type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Feedback :
    S extends undefined ? never :
    S extends { include: any } & (FeedbackArgs | FeedbackFindManyArgs)
    ? Feedback  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reviewer' ? UserGetPayload<S['include'][P]> :
        P extends 'reviewee' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FeedbackArgs | FeedbackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reviewer' ? UserGetPayload<S['select'][P]> :
        P extends 'reviewee' ? UserGetPayload<S['select'][P]> :  P extends keyof Feedback ? Feedback[P] : never
  } 
      : Feedback


  type FeedbackCountArgs = Merge<
    Omit<FeedbackFindManyArgs, 'select' | 'include'> & {
      select?: FeedbackCountAggregateInputType | true
    }
  >

  export interface FeedbackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedbackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Feedback'> extends True ? Prisma__FeedbackClient<FeedbackGetPayload<T>> : Prisma__FeedbackClient<FeedbackGetPayload<T> | null, null>

    /**
     * Find one Feedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindUniqueOrThrowArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedbackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Feedback'> extends True ? Prisma__FeedbackClient<FeedbackGetPayload<T>> : Prisma__FeedbackClient<FeedbackGetPayload<T> | null, null>

    /**
     * Find the first Feedback that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedbackFindManyArgs>(
      args?: SelectSubset<T, FeedbackFindManyArgs>
    ): PrismaPromise<Array<FeedbackGetPayload<T>>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends FeedbackCreateArgs>(
      args: SelectSubset<T, FeedbackCreateArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Create many Feedbacks.
     *     @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackCreateManyArgs>(
      args?: SelectSubset<T, FeedbackCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackDeleteArgs>(
      args: SelectSubset<T, FeedbackDeleteArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackUpdateArgs>(
      args: SelectSubset<T, FeedbackUpdateArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackDeleteManyArgs>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackUpdateManyArgs>(
      args: SelectSubset<T, FeedbackUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackUpsertArgs>(
      args: SelectSubset<T, FeedbackUpsertArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedbackClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    reviewer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    reviewee<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Feedback base type for findUnique actions
   */
  export type FeedbackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUnique
   */
  export interface FeedbackFindUniqueArgs extends FeedbackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback base type for findFirst actions
   */
  export type FeedbackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     * 
    **/
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }

  /**
   * Feedback findFirst
   */
  export interface FeedbackFindFirstArgs extends FeedbackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     * 
    **/
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedbacks to fetch.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Feedback create
   */
  export type FeedbackCreateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The data needed to create a Feedback.
     * 
    **/
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }


  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs = {
    /**
     * The data used to create many Feedbacks.
     * 
    **/
    data: Enumerable<FeedbackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The data needed to update a Feedback.
     * 
    **/
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs = {
    /**
     * The data used to update Feedbacks.
     * 
    **/
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     * 
    **/
    where?: FeedbackWhereInput
  }


  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     * 
    **/
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     * 
    **/
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }


  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter which Feedback to delete.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs = {
    /**
     * Filter which Feedbacks to delete
     * 
    **/
    where?: FeedbackWhereInput
  }


  /**
   * Feedback without action
   */
  export type FeedbackArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
  }



  /**
   * Model JamInvitation
   */


  export type AggregateJamInvitation = {
    _count: JamInvitationCountAggregateOutputType | null
    _avg: JamInvitationAvgAggregateOutputType | null
    _sum: JamInvitationSumAggregateOutputType | null
    _min: JamInvitationMinAggregateOutputType | null
    _max: JamInvitationMaxAggregateOutputType | null
  }

  export type JamInvitationAvgAggregateOutputType = {
    id: number | null
    jamId: number | null
    inviteeId: number | null
    inviterId: number | null
  }

  export type JamInvitationSumAggregateOutputType = {
    id: number | null
    jamId: number | null
    inviteeId: number | null
    inviterId: number | null
  }

  export type JamInvitationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    jamId: number | null
    inviteeId: number | null
    inviterId: number | null
  }

  export type JamInvitationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    jamId: number | null
    inviteeId: number | null
    inviterId: number | null
  }

  export type JamInvitationCountAggregateOutputType = {
    id: number
    createdAt: number
    jamId: number
    inviteeId: number
    inviterId: number
    _all: number
  }


  export type JamInvitationAvgAggregateInputType = {
    id?: true
    jamId?: true
    inviteeId?: true
    inviterId?: true
  }

  export type JamInvitationSumAggregateInputType = {
    id?: true
    jamId?: true
    inviteeId?: true
    inviterId?: true
  }

  export type JamInvitationMinAggregateInputType = {
    id?: true
    createdAt?: true
    jamId?: true
    inviteeId?: true
    inviterId?: true
  }

  export type JamInvitationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    jamId?: true
    inviteeId?: true
    inviterId?: true
  }

  export type JamInvitationCountAggregateInputType = {
    id?: true
    createdAt?: true
    jamId?: true
    inviteeId?: true
    inviterId?: true
    _all?: true
  }

  export type JamInvitationAggregateArgs = {
    /**
     * Filter which JamInvitation to aggregate.
     * 
    **/
    where?: JamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamInvitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JamInvitations
    **/
    _count?: true | JamInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JamInvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JamInvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JamInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JamInvitationMaxAggregateInputType
  }

  export type GetJamInvitationAggregateType<T extends JamInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateJamInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJamInvitation[P]>
      : GetScalarType<T[P], AggregateJamInvitation[P]>
  }




  export type JamInvitationGroupByArgs = {
    where?: JamInvitationWhereInput
    orderBy?: Enumerable<JamInvitationOrderByWithAggregationInput>
    by: Array<JamInvitationScalarFieldEnum>
    having?: JamInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JamInvitationCountAggregateInputType | true
    _avg?: JamInvitationAvgAggregateInputType
    _sum?: JamInvitationSumAggregateInputType
    _min?: JamInvitationMinAggregateInputType
    _max?: JamInvitationMaxAggregateInputType
  }


  export type JamInvitationGroupByOutputType = {
    id: number
    createdAt: Date
    jamId: number
    inviteeId: number
    inviterId: number
    _count: JamInvitationCountAggregateOutputType | null
    _avg: JamInvitationAvgAggregateOutputType | null
    _sum: JamInvitationSumAggregateOutputType | null
    _min: JamInvitationMinAggregateOutputType | null
    _max: JamInvitationMaxAggregateOutputType | null
  }

  type GetJamInvitationGroupByPayload<T extends JamInvitationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JamInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JamInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JamInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], JamInvitationGroupByOutputType[P]>
        }
      >
    >


  export type JamInvitationSelect = {
    id?: boolean
    createdAt?: boolean
    jam?: boolean | JamArgs
    jamId?: boolean
    invitee?: boolean | UserArgs
    inviteeId?: boolean
    inviter?: boolean | UserArgs
    inviterId?: boolean
  }


  export type JamInvitationInclude = {
    jam?: boolean | JamArgs
    invitee?: boolean | UserArgs
    inviter?: boolean | UserArgs
  } 

  export type JamInvitationGetPayload<S extends boolean | null | undefined | JamInvitationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JamInvitation :
    S extends undefined ? never :
    S extends { include: any } & (JamInvitationArgs | JamInvitationFindManyArgs)
    ? JamInvitation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'jam' ? JamGetPayload<S['include'][P]> :
        P extends 'invitee' ? UserGetPayload<S['include'][P]> :
        P extends 'inviter' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (JamInvitationArgs | JamInvitationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'jam' ? JamGetPayload<S['select'][P]> :
        P extends 'invitee' ? UserGetPayload<S['select'][P]> :
        P extends 'inviter' ? UserGetPayload<S['select'][P]> :  P extends keyof JamInvitation ? JamInvitation[P] : never
  } 
      : JamInvitation


  type JamInvitationCountArgs = Merge<
    Omit<JamInvitationFindManyArgs, 'select' | 'include'> & {
      select?: JamInvitationCountAggregateInputType | true
    }
  >

  export interface JamInvitationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one JamInvitation that matches the filter.
     * @param {JamInvitationFindUniqueArgs} args - Arguments to find a JamInvitation
     * @example
     * // Get one JamInvitation
     * const jamInvitation = await prisma.jamInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JamInvitationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JamInvitationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JamInvitation'> extends True ? Prisma__JamInvitationClient<JamInvitationGetPayload<T>> : Prisma__JamInvitationClient<JamInvitationGetPayload<T> | null, null>

    /**
     * Find one JamInvitation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JamInvitationFindUniqueOrThrowArgs} args - Arguments to find a JamInvitation
     * @example
     * // Get one JamInvitation
     * const jamInvitation = await prisma.jamInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JamInvitationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JamInvitationFindUniqueOrThrowArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Find the first JamInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationFindFirstArgs} args - Arguments to find a JamInvitation
     * @example
     * // Get one JamInvitation
     * const jamInvitation = await prisma.jamInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JamInvitationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JamInvitationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JamInvitation'> extends True ? Prisma__JamInvitationClient<JamInvitationGetPayload<T>> : Prisma__JamInvitationClient<JamInvitationGetPayload<T> | null, null>

    /**
     * Find the first JamInvitation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationFindFirstOrThrowArgs} args - Arguments to find a JamInvitation
     * @example
     * // Get one JamInvitation
     * const jamInvitation = await prisma.jamInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JamInvitationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JamInvitationFindFirstOrThrowArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Find zero or more JamInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JamInvitations
     * const jamInvitations = await prisma.jamInvitation.findMany()
     * 
     * // Get first 10 JamInvitations
     * const jamInvitations = await prisma.jamInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jamInvitationWithIdOnly = await prisma.jamInvitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JamInvitationFindManyArgs>(
      args?: SelectSubset<T, JamInvitationFindManyArgs>
    ): PrismaPromise<Array<JamInvitationGetPayload<T>>>

    /**
     * Create a JamInvitation.
     * @param {JamInvitationCreateArgs} args - Arguments to create a JamInvitation.
     * @example
     * // Create one JamInvitation
     * const JamInvitation = await prisma.jamInvitation.create({
     *   data: {
     *     // ... data to create a JamInvitation
     *   }
     * })
     * 
    **/
    create<T extends JamInvitationCreateArgs>(
      args: SelectSubset<T, JamInvitationCreateArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Create many JamInvitations.
     *     @param {JamInvitationCreateManyArgs} args - Arguments to create many JamInvitations.
     *     @example
     *     // Create many JamInvitations
     *     const jamInvitation = await prisma.jamInvitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JamInvitationCreateManyArgs>(
      args?: SelectSubset<T, JamInvitationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a JamInvitation.
     * @param {JamInvitationDeleteArgs} args - Arguments to delete one JamInvitation.
     * @example
     * // Delete one JamInvitation
     * const JamInvitation = await prisma.jamInvitation.delete({
     *   where: {
     *     // ... filter to delete one JamInvitation
     *   }
     * })
     * 
    **/
    delete<T extends JamInvitationDeleteArgs>(
      args: SelectSubset<T, JamInvitationDeleteArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Update one JamInvitation.
     * @param {JamInvitationUpdateArgs} args - Arguments to update one JamInvitation.
     * @example
     * // Update one JamInvitation
     * const jamInvitation = await prisma.jamInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JamInvitationUpdateArgs>(
      args: SelectSubset<T, JamInvitationUpdateArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Delete zero or more JamInvitations.
     * @param {JamInvitationDeleteManyArgs} args - Arguments to filter JamInvitations to delete.
     * @example
     * // Delete a few JamInvitations
     * const { count } = await prisma.jamInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JamInvitationDeleteManyArgs>(
      args?: SelectSubset<T, JamInvitationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more JamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JamInvitations
     * const jamInvitation = await prisma.jamInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JamInvitationUpdateManyArgs>(
      args: SelectSubset<T, JamInvitationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one JamInvitation.
     * @param {JamInvitationUpsertArgs} args - Arguments to update or create a JamInvitation.
     * @example
     * // Update or create a JamInvitation
     * const jamInvitation = await prisma.jamInvitation.upsert({
     *   create: {
     *     // ... data to create a JamInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JamInvitation we want to update
     *   }
     * })
    **/
    upsert<T extends JamInvitationUpsertArgs>(
      args: SelectSubset<T, JamInvitationUpsertArgs>
    ): Prisma__JamInvitationClient<JamInvitationGetPayload<T>>

    /**
     * Count the number of JamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationCountArgs} args - Arguments to filter JamInvitations to count.
     * @example
     * // Count the number of JamInvitations
     * const count = await prisma.jamInvitation.count({
     *   where: {
     *     // ... the filter for the JamInvitations we want to count
     *   }
     * })
    **/
    count<T extends JamInvitationCountArgs>(
      args?: Subset<T, JamInvitationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JamInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JamInvitationAggregateArgs>(args: Subset<T, JamInvitationAggregateArgs>): PrismaPromise<GetJamInvitationAggregateType<T>>

    /**
     * Group by JamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JamInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JamInvitationGroupByArgs['orderBy'] }
        : { orderBy?: JamInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JamInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJamInvitationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for JamInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JamInvitationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    jam<T extends JamArgs= {}>(args?: Subset<T, JamArgs>): Prisma__JamClient<JamGetPayload<T> | Null>;

    invitee<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    inviter<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * JamInvitation base type for findUnique actions
   */
  export type JamInvitationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter, which JamInvitation to fetch.
     * 
    **/
    where: JamInvitationWhereUniqueInput
  }

  /**
   * JamInvitation findUnique
   */
  export interface JamInvitationFindUniqueArgs extends JamInvitationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JamInvitation findUniqueOrThrow
   */
  export type JamInvitationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter, which JamInvitation to fetch.
     * 
    **/
    where: JamInvitationWhereUniqueInput
  }


  /**
   * JamInvitation base type for findFirst actions
   */
  export type JamInvitationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter, which JamInvitation to fetch.
     * 
    **/
    where?: JamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamInvitations.
     * 
    **/
    cursor?: JamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamInvitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamInvitations.
     * 
    **/
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }

  /**
   * JamInvitation findFirst
   */
  export interface JamInvitationFindFirstArgs extends JamInvitationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JamInvitation findFirstOrThrow
   */
  export type JamInvitationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter, which JamInvitation to fetch.
     * 
    **/
    where?: JamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JamInvitations.
     * 
    **/
    cursor?: JamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamInvitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JamInvitations.
     * 
    **/
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }


  /**
   * JamInvitation findMany
   */
  export type JamInvitationFindManyArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter, which JamInvitations to fetch.
     * 
    **/
    where?: JamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JamInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<JamInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JamInvitations.
     * 
    **/
    cursor?: JamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JamInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JamInvitations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JamInvitationScalarFieldEnum>
  }


  /**
   * JamInvitation create
   */
  export type JamInvitationCreateArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * The data needed to create a JamInvitation.
     * 
    **/
    data: XOR<JamInvitationCreateInput, JamInvitationUncheckedCreateInput>
  }


  /**
   * JamInvitation createMany
   */
  export type JamInvitationCreateManyArgs = {
    /**
     * The data used to create many JamInvitations.
     * 
    **/
    data: Enumerable<JamInvitationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * JamInvitation update
   */
  export type JamInvitationUpdateArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * The data needed to update a JamInvitation.
     * 
    **/
    data: XOR<JamInvitationUpdateInput, JamInvitationUncheckedUpdateInput>
    /**
     * Choose, which JamInvitation to update.
     * 
    **/
    where: JamInvitationWhereUniqueInput
  }


  /**
   * JamInvitation updateMany
   */
  export type JamInvitationUpdateManyArgs = {
    /**
     * The data used to update JamInvitations.
     * 
    **/
    data: XOR<JamInvitationUpdateManyMutationInput, JamInvitationUncheckedUpdateManyInput>
    /**
     * Filter which JamInvitations to update
     * 
    **/
    where?: JamInvitationWhereInput
  }


  /**
   * JamInvitation upsert
   */
  export type JamInvitationUpsertArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * The filter to search for the JamInvitation to update in case it exists.
     * 
    **/
    where: JamInvitationWhereUniqueInput
    /**
     * In case the JamInvitation found by the `where` argument doesn't exist, create a new JamInvitation with this data.
     * 
    **/
    create: XOR<JamInvitationCreateInput, JamInvitationUncheckedCreateInput>
    /**
     * In case the JamInvitation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JamInvitationUpdateInput, JamInvitationUncheckedUpdateInput>
  }


  /**
   * JamInvitation delete
   */
  export type JamInvitationDeleteArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
    /**
     * Filter which JamInvitation to delete.
     * 
    **/
    where: JamInvitationWhereUniqueInput
  }


  /**
   * JamInvitation deleteMany
   */
  export type JamInvitationDeleteManyArgs = {
    /**
     * Filter which JamInvitations to delete
     * 
    **/
    where?: JamInvitationWhereInput
  }


  /**
   * JamInvitation without action
   */
  export type JamInvitationArgs = {
    /**
     * Select specific fields to fetch from the JamInvitation
     * 
    **/
    select?: JamInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamInvitationInclude | null
  }



  /**
   * Model FriendShip
   */


  export type AggregateFriendShip = {
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  export type FriendShipAvgAggregateOutputType = {
    id: number | null
    befrienderId: number | null
    befriendeeId: number | null
  }

  export type FriendShipSumAggregateOutputType = {
    id: number | null
    befrienderId: number | null
    befriendeeId: number | null
  }

  export type FriendShipMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    befrienderId: number | null
    befriendeeId: number | null
  }

  export type FriendShipMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    befrienderId: number | null
    befriendeeId: number | null
  }

  export type FriendShipCountAggregateOutputType = {
    id: number
    createdAt: number
    befrienderId: number
    befriendeeId: number
    _all: number
  }


  export type FriendShipAvgAggregateInputType = {
    id?: true
    befrienderId?: true
    befriendeeId?: true
  }

  export type FriendShipSumAggregateInputType = {
    id?: true
    befrienderId?: true
    befriendeeId?: true
  }

  export type FriendShipMinAggregateInputType = {
    id?: true
    createdAt?: true
    befrienderId?: true
    befriendeeId?: true
  }

  export type FriendShipMaxAggregateInputType = {
    id?: true
    createdAt?: true
    befrienderId?: true
    befriendeeId?: true
  }

  export type FriendShipCountAggregateInputType = {
    id?: true
    createdAt?: true
    befrienderId?: true
    befriendeeId?: true
    _all?: true
  }

  export type FriendShipAggregateArgs = {
    /**
     * Filter which FriendShip to aggregate.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendShips
    **/
    _count?: true | FriendShipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendShipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendShipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendShipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendShipMaxAggregateInputType
  }

  export type GetFriendShipAggregateType<T extends FriendShipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendShip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendShip[P]>
      : GetScalarType<T[P], AggregateFriendShip[P]>
  }




  export type FriendShipGroupByArgs = {
    where?: FriendShipWhereInput
    orderBy?: Enumerable<FriendShipOrderByWithAggregationInput>
    by: Array<FriendShipScalarFieldEnum>
    having?: FriendShipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendShipCountAggregateInputType | true
    _avg?: FriendShipAvgAggregateInputType
    _sum?: FriendShipSumAggregateInputType
    _min?: FriendShipMinAggregateInputType
    _max?: FriendShipMaxAggregateInputType
  }


  export type FriendShipGroupByOutputType = {
    id: number
    createdAt: Date
    befrienderId: number
    befriendeeId: number
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  type GetFriendShipGroupByPayload<T extends FriendShipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FriendShipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendShipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
        }
      >
    >


  export type FriendShipSelect = {
    id?: boolean
    createdAt?: boolean
    befriender?: boolean | UserArgs
    befrienderId?: boolean
    befriendee?: boolean | UserArgs
    befriendeeId?: boolean
    Message?: boolean | FriendShipMessageArgs
    _count?: boolean | FriendShipCountOutputTypeArgs
  }


  export type FriendShipInclude = {
    befriender?: boolean | UserArgs
    befriendee?: boolean | UserArgs
    Message?: boolean | FriendShipMessageArgs
    _count?: boolean | FriendShipCountOutputTypeArgs
  } 

  export type FriendShipGetPayload<S extends boolean | null | undefined | FriendShipArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FriendShip :
    S extends undefined ? never :
    S extends { include: any } & (FriendShipArgs | FriendShipFindManyArgs)
    ? FriendShip  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'befriender' ? UserGetPayload<S['include'][P]> :
        P extends 'befriendee' ? UserGetPayload<S['include'][P]> :
        P extends 'Message' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? FriendShipCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FriendShipArgs | FriendShipFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'befriender' ? UserGetPayload<S['select'][P]> :
        P extends 'befriendee' ? UserGetPayload<S['select'][P]> :
        P extends 'Message' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? FriendShipCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FriendShip ? FriendShip[P] : never
  } 
      : FriendShip


  type FriendShipCountArgs = Merge<
    Omit<FriendShipFindManyArgs, 'select' | 'include'> & {
      select?: FriendShipCountAggregateInputType | true
    }
  >

  export interface FriendShipDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one FriendShip that matches the filter.
     * @param {FriendShipFindUniqueArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendShipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FriendShipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FriendShip'> extends True ? Prisma__FriendShipClient<FriendShipGetPayload<T>> : Prisma__FriendShipClient<FriendShipGetPayload<T> | null, null>

    /**
     * Find one FriendShip that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendShipFindUniqueOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendShipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FriendShipFindUniqueOrThrowArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Find the first FriendShip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendShipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FriendShipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FriendShip'> extends True ? Prisma__FriendShipClient<FriendShipGetPayload<T>> : Prisma__FriendShipClient<FriendShipGetPayload<T> | null, null>

    /**
     * Find the first FriendShip that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendShipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FriendShipFindFirstOrThrowArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Find zero or more FriendShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendShips
     * const friendShips = await prisma.friendShip.findMany()
     * 
     * // Get first 10 FriendShips
     * const friendShips = await prisma.friendShip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendShipWithIdOnly = await prisma.friendShip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FriendShipFindManyArgs>(
      args?: SelectSubset<T, FriendShipFindManyArgs>
    ): PrismaPromise<Array<FriendShipGetPayload<T>>>

    /**
     * Create a FriendShip.
     * @param {FriendShipCreateArgs} args - Arguments to create a FriendShip.
     * @example
     * // Create one FriendShip
     * const FriendShip = await prisma.friendShip.create({
     *   data: {
     *     // ... data to create a FriendShip
     *   }
     * })
     * 
    **/
    create<T extends FriendShipCreateArgs>(
      args: SelectSubset<T, FriendShipCreateArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Create many FriendShips.
     *     @param {FriendShipCreateManyArgs} args - Arguments to create many FriendShips.
     *     @example
     *     // Create many FriendShips
     *     const friendShip = await prisma.friendShip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendShipCreateManyArgs>(
      args?: SelectSubset<T, FriendShipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FriendShip.
     * @param {FriendShipDeleteArgs} args - Arguments to delete one FriendShip.
     * @example
     * // Delete one FriendShip
     * const FriendShip = await prisma.friendShip.delete({
     *   where: {
     *     // ... filter to delete one FriendShip
     *   }
     * })
     * 
    **/
    delete<T extends FriendShipDeleteArgs>(
      args: SelectSubset<T, FriendShipDeleteArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Update one FriendShip.
     * @param {FriendShipUpdateArgs} args - Arguments to update one FriendShip.
     * @example
     * // Update one FriendShip
     * const friendShip = await prisma.friendShip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendShipUpdateArgs>(
      args: SelectSubset<T, FriendShipUpdateArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Delete zero or more FriendShips.
     * @param {FriendShipDeleteManyArgs} args - Arguments to filter FriendShips to delete.
     * @example
     * // Delete a few FriendShips
     * const { count } = await prisma.friendShip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendShipDeleteManyArgs>(
      args?: SelectSubset<T, FriendShipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendShips
     * const friendShip = await prisma.friendShip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendShipUpdateManyArgs>(
      args: SelectSubset<T, FriendShipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendShip.
     * @param {FriendShipUpsertArgs} args - Arguments to update or create a FriendShip.
     * @example
     * // Update or create a FriendShip
     * const friendShip = await prisma.friendShip.upsert({
     *   create: {
     *     // ... data to create a FriendShip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendShip we want to update
     *   }
     * })
    **/
    upsert<T extends FriendShipUpsertArgs>(
      args: SelectSubset<T, FriendShipUpsertArgs>
    ): Prisma__FriendShipClient<FriendShipGetPayload<T>>

    /**
     * Count the number of FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipCountArgs} args - Arguments to filter FriendShips to count.
     * @example
     * // Count the number of FriendShips
     * const count = await prisma.friendShip.count({
     *   where: {
     *     // ... the filter for the FriendShips we want to count
     *   }
     * })
    **/
    count<T extends FriendShipCountArgs>(
      args?: Subset<T, FriendShipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendShipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendShipAggregateArgs>(args: Subset<T, FriendShipAggregateArgs>): PrismaPromise<GetFriendShipAggregateType<T>>

    /**
     * Group by FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendShipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendShipGroupByArgs['orderBy'] }
        : { orderBy?: FriendShipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendShipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendShipGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendShip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FriendShipClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    befriender<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    befriendee<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Message<T extends FriendShipMessageArgs= {}>(args?: Subset<T, FriendShipMessageArgs>): PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FriendShip base type for findUnique actions
   */
  export type FriendShipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip findUnique
   */
  export interface FriendShipFindUniqueArgs extends FriendShipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FriendShip findUniqueOrThrow
   */
  export type FriendShipFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }


  /**
   * FriendShip base type for findFirst actions
   */
  export type FriendShipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendShips.
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     * 
    **/
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }

  /**
   * FriendShip findFirst
   */
  export interface FriendShipFindFirstArgs extends FriendShipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FriendShip findFirstOrThrow
   */
  export type FriendShipFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendShips.
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     * 
    **/
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }


  /**
   * FriendShip findMany
   */
  export type FriendShipFindManyArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShips to fetch.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendShips.
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }


  /**
   * FriendShip create
   */
  export type FriendShipCreateArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The data needed to create a FriendShip.
     * 
    **/
    data: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
  }


  /**
   * FriendShip createMany
   */
  export type FriendShipCreateManyArgs = {
    /**
     * The data used to create many FriendShips.
     * 
    **/
    data: Enumerable<FriendShipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FriendShip update
   */
  export type FriendShipUpdateArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The data needed to update a FriendShip.
     * 
    **/
    data: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
    /**
     * Choose, which FriendShip to update.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }


  /**
   * FriendShip updateMany
   */
  export type FriendShipUpdateManyArgs = {
    /**
     * The data used to update FriendShips.
     * 
    **/
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyInput>
    /**
     * Filter which FriendShips to update
     * 
    **/
    where?: FriendShipWhereInput
  }


  /**
   * FriendShip upsert
   */
  export type FriendShipUpsertArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The filter to search for the FriendShip to update in case it exists.
     * 
    **/
    where: FriendShipWhereUniqueInput
    /**
     * In case the FriendShip found by the `where` argument doesn't exist, create a new FriendShip with this data.
     * 
    **/
    create: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
    /**
     * In case the FriendShip was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
  }


  /**
   * FriendShip delete
   */
  export type FriendShipDeleteArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter which FriendShip to delete.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }


  /**
   * FriendShip deleteMany
   */
  export type FriendShipDeleteManyArgs = {
    /**
     * Filter which FriendShips to delete
     * 
    **/
    where?: FriendShipWhereInput
  }


  /**
   * FriendShip.Message
   */
  export type FriendShipMessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * FriendShip without action
   */
  export type FriendShipArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: Array<GenreScalarFieldEnum>
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    id: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    id?: boolean
    jamGenres?: boolean | GenreJamGenresArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }


  export type GenreInclude = {
    jamGenres?: boolean | GenreJamGenresArgs
    _count?: boolean | GenreCountOutputTypeArgs
  } 

  export type GenreGetPayload<S extends boolean | null | undefined | GenreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Genre :
    S extends undefined ? never :
    S extends { include: any } & (GenreArgs | GenreFindManyArgs)
    ? Genre  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'jamGenres' ? Array < JamGenresGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GenreArgs | GenreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'jamGenres' ? Array < JamGenresGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
      : Genre


  type GenreCountArgs = Merge<
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }
  >

  export interface GenreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): PrismaPromise<Array<GenreGetPayload<T>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    jamGenres<T extends GenreJamGenresArgs= {}>(args?: Subset<T, GenreJamGenresArgs>): PrismaPromise<Array<JamGenresGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     * 
    **/
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     * 
    **/
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     * 
    **/
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     * 
    **/
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     * 
    **/
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     * 
    **/
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     * 
    **/
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     * 
    **/
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre.jamGenres
   */
  export type GenreJamGenresArgs = {
    /**
     * Select specific fields to fetch from the JamGenres
     * 
    **/
    select?: JamGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JamGenresInclude | null
    where?: JamGenresWhereInput
    orderBy?: Enumerable<JamGenresOrderByWithRelationInput>
    cursor?: JamGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<JamGenresScalarFieldEnum>
  }


  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
  }



  /**
   * Model Skill
   */


  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    slug: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    slug: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    slug: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    slug?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    slug?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    slug?: true
    _all?: true
  }

  export type SkillAggregateArgs = {
    /**
     * Filter which Skill to aggregate.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs = {
    where?: SkillWhereInput
    orderBy?: Enumerable<SkillOrderByWithAggregationInput>
    by: Array<SkillScalarFieldEnum>
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }


  export type SkillGroupByOutputType = {
    id: number
    slug: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect = {
    id?: boolean
    slug?: boolean
    user?: boolean | SkillUserArgs
    _count?: boolean | SkillCountOutputTypeArgs
  }


  export type SkillInclude = {
    user?: boolean | SkillUserArgs
    _count?: boolean | SkillCountOutputTypeArgs
  } 

  export type SkillGetPayload<S extends boolean | null | undefined | SkillArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Skill :
    S extends undefined ? never :
    S extends { include: any } & (SkillArgs | SkillFindManyArgs)
    ? Skill  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? SkillCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SkillArgs | SkillFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? SkillCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Skill ? Skill[P] : never
  } 
      : Skill


  type SkillCountArgs = Merge<
    Omit<SkillFindManyArgs, 'select' | 'include'> & {
      select?: SkillCountAggregateInputType | true
    }
  >

  export interface SkillDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkillFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Skill'> extends True ? Prisma__SkillClient<SkillGetPayload<T>> : Prisma__SkillClient<SkillGetPayload<T> | null, null>

    /**
     * Find one Skill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SkillFindUniqueOrThrowArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkillFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Skill'> extends True ? Prisma__SkillClient<SkillGetPayload<T>> : Prisma__SkillClient<SkillGetPayload<T> | null, null>

    /**
     * Find the first Skill that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SkillFindFirstOrThrowArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillFindManyArgs>(
      args?: SelectSubset<T, SkillFindManyArgs>
    ): PrismaPromise<Array<SkillGetPayload<T>>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
    **/
    create<T extends SkillCreateArgs>(
      args: SelectSubset<T, SkillCreateArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Create many Skills.
     *     @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skill = await prisma.skill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillCreateManyArgs>(
      args?: SelectSubset<T, SkillCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
    **/
    delete<T extends SkillDeleteArgs>(
      args: SelectSubset<T, SkillDeleteArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillUpdateArgs>(
      args: SelectSubset<T, SkillUpdateArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillDeleteManyArgs>(
      args?: SelectSubset<T, SkillDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillUpdateManyArgs>(
      args: SelectSubset<T, SkillUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
    **/
    upsert<T extends SkillUpsertArgs>(
      args: SelectSubset<T, SkillUpsertArgs>
    ): Prisma__SkillClient<SkillGetPayload<T>>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkillClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends SkillUserArgs= {}>(args?: Subset<T, SkillUserArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Skill base type for findUnique actions
   */
  export type SkillFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUnique
   */
  export interface SkillFindUniqueArgs extends SkillFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill base type for findFirst actions
   */
  export type SkillFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     * 
    **/
    distinct?: Enumerable<SkillScalarFieldEnum>
  }

  /**
   * Skill findFirst
   */
  export interface SkillFindFirstArgs extends SkillFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     * 
    **/
    distinct?: Enumerable<SkillScalarFieldEnum>
  }


  /**
   * Skill findMany
   */
  export type SkillFindManyArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skills to fetch.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkillScalarFieldEnum>
  }


  /**
   * Skill create
   */
  export type SkillCreateArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The data needed to create a Skill.
     * 
    **/
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }


  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs = {
    /**
     * The data used to create many Skills.
     * 
    **/
    data: Enumerable<SkillCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Skill update
   */
  export type SkillUpdateArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The data needed to update a Skill.
     * 
    **/
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs = {
    /**
     * The data used to update Skills.
     * 
    **/
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     * 
    **/
    where?: SkillWhereInput
  }


  /**
   * Skill upsert
   */
  export type SkillUpsertArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The filter to search for the Skill to update in case it exists.
     * 
    **/
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     * 
    **/
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }


  /**
   * Skill delete
   */
  export type SkillDeleteArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter which Skill to delete.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs = {
    /**
     * Filter which Skills to delete
     * 
    **/
    where?: SkillWhereInput
  }


  /**
   * Skill.user
   */
  export type SkillUserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Skill without action
   */
  export type SkillArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
  }



  /**
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    notificationType: NotificationType | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    notificationType: NotificationType | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    notificationType: number
    data: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    notificationType?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    notificationType?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    notificationType?: true
    data?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: Array<NotificationScalarFieldEnum>
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    notificationType: NotificationType
    data: JsonValue
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    notificationType?: boolean
    data?: boolean
  }


  export type NotificationInclude = {
    user?: boolean | UserArgs
  } 

  export type NotificationGetPayload<S extends boolean | null | undefined | NotificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notification :
    S extends undefined ? never :
    S extends { include: any } & (NotificationArgs | NotificationFindManyArgs)
    ? Notification  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationArgs | NotificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Notification ? Notification[P] : never
  } 
      : Notification


  type NotificationCountArgs = Merge<
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }
  >

  export interface NotificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): PrismaPromise<Array<NotificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Notification base type for findUnique actions
   */
  export type NotificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUnique
   */
  export interface NotificationFindUniqueArgs extends NotificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification base type for findFirst actions
   */
  export type NotificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * Notification findFirst
   */
  export interface NotificationFindFirstArgs extends NotificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     * 
    **/
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     * 
    **/
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     * 
    **/
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     * 
    **/
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     * 
    **/
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     * 
    **/
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    message: string | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    message: string | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    message: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    createdAt: Date
    message: string
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    createdAt?: boolean
    message?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
  }


  export type PostInclude = {
    author?: boolean | UserArgs
  } 

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :  P extends keyof Post ? Post[P] : never
  } 
      : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): PrismaPromise<Array<PostGetPayload<T>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     * 
    **/
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     * 
    **/
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    friendShipId: number | null
    authorId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    friendShipId: number | null
    authorId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    friendShipId: number | null
    authorId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    friendShipId: number | null
    authorId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    friendShipId: number
    authorId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    friendShipId?: true
    authorId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    friendShipId?: true
    authorId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    friendShipId?: true
    authorId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    friendShipId?: true
    authorId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    friendShipId?: true
    authorId?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: Array<MessageScalarFieldEnum>
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: number
    message: string
    createdAt: Date
    friendShipId: number
    authorId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    friendship?: boolean | FriendShipArgs
    friendShipId?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
  }


  export type MessageInclude = {
    friendship?: boolean | FriendShipArgs
    author?: boolean | UserArgs
  } 

  export type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Message :
    S extends undefined ? never :
    S extends { include: any } & (MessageArgs | MessageFindManyArgs)
    ? Message  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'friendship' ? FriendShipGetPayload<S['include'][P]> :
        P extends 'author' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageArgs | MessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'friendship' ? FriendShipGetPayload<S['select'][P]> :
        P extends 'author' ? UserGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
      : Message


  type MessageCountArgs = Merge<
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }
  >

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): PrismaPromise<Array<MessageGetPayload<T>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    friendship<T extends FriendShipArgs= {}>(args?: Subset<T, FriendShipArgs>): Prisma__FriendShipClient<FriendShipGetPayload<T> | Null>;

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     * 
    **/
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     * 
    **/
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     * 
    **/
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     * 
    **/
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     * 
    **/
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     * 
    **/
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
  }



  /**
   * Model MessageSeen
   */


  export type AggregateMessageSeen = {
    _count: MessageSeenCountAggregateOutputType | null
    _avg: MessageSeenAvgAggregateOutputType | null
    _sum: MessageSeenSumAggregateOutputType | null
    _min: MessageSeenMinAggregateOutputType | null
    _max: MessageSeenMaxAggregateOutputType | null
  }

  export type MessageSeenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessageSeenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessageSeenMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type MessageSeenMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type MessageSeenCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    _all: number
  }


  export type MessageSeenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessageSeenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessageSeenMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
  }

  export type MessageSeenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
  }

  export type MessageSeenCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type MessageSeenAggregateArgs = {
    /**
     * Filter which MessageSeen to aggregate.
     * 
    **/
    where?: MessageSeenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeens to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageSeenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageSeenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageSeens
    **/
    _count?: true | MessageSeenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageSeenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSeenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageSeenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageSeenMaxAggregateInputType
  }

  export type GetMessageSeenAggregateType<T extends MessageSeenAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageSeen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageSeen[P]>
      : GetScalarType<T[P], AggregateMessageSeen[P]>
  }




  export type MessageSeenGroupByArgs = {
    where?: MessageSeenWhereInput
    orderBy?: Enumerable<MessageSeenOrderByWithAggregationInput>
    by: Array<MessageSeenScalarFieldEnum>
    having?: MessageSeenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageSeenCountAggregateInputType | true
    _avg?: MessageSeenAvgAggregateInputType
    _sum?: MessageSeenSumAggregateInputType
    _min?: MessageSeenMinAggregateInputType
    _max?: MessageSeenMaxAggregateInputType
  }


  export type MessageSeenGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    _count: MessageSeenCountAggregateOutputType | null
    _avg: MessageSeenAvgAggregateOutputType | null
    _sum: MessageSeenSumAggregateOutputType | null
    _min: MessageSeenMinAggregateOutputType | null
    _max: MessageSeenMaxAggregateOutputType | null
  }

  type GetMessageSeenGroupByPayload<T extends MessageSeenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageSeenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageSeenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageSeenGroupByOutputType[P]>
            : GetScalarType<T[P], MessageSeenGroupByOutputType[P]>
        }
      >
    >


  export type MessageSeenSelect = {
    id?: boolean
    createdAt?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }


  export type MessageSeenInclude = {
    user?: boolean | UserArgs
  } 

  export type MessageSeenGetPayload<S extends boolean | null | undefined | MessageSeenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MessageSeen :
    S extends undefined ? never :
    S extends { include: any } & (MessageSeenArgs | MessageSeenFindManyArgs)
    ? MessageSeen  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageSeenArgs | MessageSeenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof MessageSeen ? MessageSeen[P] : never
  } 
      : MessageSeen


  type MessageSeenCountArgs = Merge<
    Omit<MessageSeenFindManyArgs, 'select' | 'include'> & {
      select?: MessageSeenCountAggregateInputType | true
    }
  >

  export interface MessageSeenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MessageSeen that matches the filter.
     * @param {MessageSeenFindUniqueArgs} args - Arguments to find a MessageSeen
     * @example
     * // Get one MessageSeen
     * const messageSeen = await prisma.messageSeen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageSeenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageSeenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MessageSeen'> extends True ? Prisma__MessageSeenClient<MessageSeenGetPayload<T>> : Prisma__MessageSeenClient<MessageSeenGetPayload<T> | null, null>

    /**
     * Find one MessageSeen that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageSeenFindUniqueOrThrowArgs} args - Arguments to find a MessageSeen
     * @example
     * // Get one MessageSeen
     * const messageSeen = await prisma.messageSeen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageSeenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageSeenFindUniqueOrThrowArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Find the first MessageSeen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenFindFirstArgs} args - Arguments to find a MessageSeen
     * @example
     * // Get one MessageSeen
     * const messageSeen = await prisma.messageSeen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageSeenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageSeenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MessageSeen'> extends True ? Prisma__MessageSeenClient<MessageSeenGetPayload<T>> : Prisma__MessageSeenClient<MessageSeenGetPayload<T> | null, null>

    /**
     * Find the first MessageSeen that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenFindFirstOrThrowArgs} args - Arguments to find a MessageSeen
     * @example
     * // Get one MessageSeen
     * const messageSeen = await prisma.messageSeen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageSeenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageSeenFindFirstOrThrowArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Find zero or more MessageSeens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageSeens
     * const messageSeens = await prisma.messageSeen.findMany()
     * 
     * // Get first 10 MessageSeens
     * const messageSeens = await prisma.messageSeen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageSeenWithIdOnly = await prisma.messageSeen.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageSeenFindManyArgs>(
      args?: SelectSubset<T, MessageSeenFindManyArgs>
    ): PrismaPromise<Array<MessageSeenGetPayload<T>>>

    /**
     * Create a MessageSeen.
     * @param {MessageSeenCreateArgs} args - Arguments to create a MessageSeen.
     * @example
     * // Create one MessageSeen
     * const MessageSeen = await prisma.messageSeen.create({
     *   data: {
     *     // ... data to create a MessageSeen
     *   }
     * })
     * 
    **/
    create<T extends MessageSeenCreateArgs>(
      args: SelectSubset<T, MessageSeenCreateArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Create many MessageSeens.
     *     @param {MessageSeenCreateManyArgs} args - Arguments to create many MessageSeens.
     *     @example
     *     // Create many MessageSeens
     *     const messageSeen = await prisma.messageSeen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageSeenCreateManyArgs>(
      args?: SelectSubset<T, MessageSeenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MessageSeen.
     * @param {MessageSeenDeleteArgs} args - Arguments to delete one MessageSeen.
     * @example
     * // Delete one MessageSeen
     * const MessageSeen = await prisma.messageSeen.delete({
     *   where: {
     *     // ... filter to delete one MessageSeen
     *   }
     * })
     * 
    **/
    delete<T extends MessageSeenDeleteArgs>(
      args: SelectSubset<T, MessageSeenDeleteArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Update one MessageSeen.
     * @param {MessageSeenUpdateArgs} args - Arguments to update one MessageSeen.
     * @example
     * // Update one MessageSeen
     * const messageSeen = await prisma.messageSeen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageSeenUpdateArgs>(
      args: SelectSubset<T, MessageSeenUpdateArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Delete zero or more MessageSeens.
     * @param {MessageSeenDeleteManyArgs} args - Arguments to filter MessageSeens to delete.
     * @example
     * // Delete a few MessageSeens
     * const { count } = await prisma.messageSeen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageSeenDeleteManyArgs>(
      args?: SelectSubset<T, MessageSeenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSeens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageSeens
     * const messageSeen = await prisma.messageSeen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageSeenUpdateManyArgs>(
      args: SelectSubset<T, MessageSeenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageSeen.
     * @param {MessageSeenUpsertArgs} args - Arguments to update or create a MessageSeen.
     * @example
     * // Update or create a MessageSeen
     * const messageSeen = await prisma.messageSeen.upsert({
     *   create: {
     *     // ... data to create a MessageSeen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageSeen we want to update
     *   }
     * })
    **/
    upsert<T extends MessageSeenUpsertArgs>(
      args: SelectSubset<T, MessageSeenUpsertArgs>
    ): Prisma__MessageSeenClient<MessageSeenGetPayload<T>>

    /**
     * Count the number of MessageSeens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenCountArgs} args - Arguments to filter MessageSeens to count.
     * @example
     * // Count the number of MessageSeens
     * const count = await prisma.messageSeen.count({
     *   where: {
     *     // ... the filter for the MessageSeens we want to count
     *   }
     * })
    **/
    count<T extends MessageSeenCountArgs>(
      args?: Subset<T, MessageSeenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageSeenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageSeen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageSeenAggregateArgs>(args: Subset<T, MessageSeenAggregateArgs>): PrismaPromise<GetMessageSeenAggregateType<T>>

    /**
     * Group by MessageSeen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageSeenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageSeenGroupByArgs['orderBy'] }
        : { orderBy?: MessageSeenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageSeenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageSeenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageSeen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageSeenClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MessageSeen base type for findUnique actions
   */
  export type MessageSeenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter, which MessageSeen to fetch.
     * 
    **/
    where: MessageSeenWhereUniqueInput
  }

  /**
   * MessageSeen findUnique
   */
  export interface MessageSeenFindUniqueArgs extends MessageSeenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageSeen findUniqueOrThrow
   */
  export type MessageSeenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter, which MessageSeen to fetch.
     * 
    **/
    where: MessageSeenWhereUniqueInput
  }


  /**
   * MessageSeen base type for findFirst actions
   */
  export type MessageSeenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter, which MessageSeen to fetch.
     * 
    **/
    where?: MessageSeenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeens to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageSeenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSeens.
     * 
    **/
    cursor?: MessageSeenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSeens.
     * 
    **/
    distinct?: Enumerable<MessageSeenScalarFieldEnum>
  }

  /**
   * MessageSeen findFirst
   */
  export interface MessageSeenFindFirstArgs extends MessageSeenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageSeen findFirstOrThrow
   */
  export type MessageSeenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter, which MessageSeen to fetch.
     * 
    **/
    where?: MessageSeenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeens to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageSeenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSeens.
     * 
    **/
    cursor?: MessageSeenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSeens.
     * 
    **/
    distinct?: Enumerable<MessageSeenScalarFieldEnum>
  }


  /**
   * MessageSeen findMany
   */
  export type MessageSeenFindManyArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter, which MessageSeens to fetch.
     * 
    **/
    where?: MessageSeenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeens to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageSeenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageSeens.
     * 
    **/
    cursor?: MessageSeenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageSeenScalarFieldEnum>
  }


  /**
   * MessageSeen create
   */
  export type MessageSeenCreateArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * The data needed to create a MessageSeen.
     * 
    **/
    data: XOR<MessageSeenCreateInput, MessageSeenUncheckedCreateInput>
  }


  /**
   * MessageSeen createMany
   */
  export type MessageSeenCreateManyArgs = {
    /**
     * The data used to create many MessageSeens.
     * 
    **/
    data: Enumerable<MessageSeenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MessageSeen update
   */
  export type MessageSeenUpdateArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * The data needed to update a MessageSeen.
     * 
    **/
    data: XOR<MessageSeenUpdateInput, MessageSeenUncheckedUpdateInput>
    /**
     * Choose, which MessageSeen to update.
     * 
    **/
    where: MessageSeenWhereUniqueInput
  }


  /**
   * MessageSeen updateMany
   */
  export type MessageSeenUpdateManyArgs = {
    /**
     * The data used to update MessageSeens.
     * 
    **/
    data: XOR<MessageSeenUpdateManyMutationInput, MessageSeenUncheckedUpdateManyInput>
    /**
     * Filter which MessageSeens to update
     * 
    **/
    where?: MessageSeenWhereInput
  }


  /**
   * MessageSeen upsert
   */
  export type MessageSeenUpsertArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * The filter to search for the MessageSeen to update in case it exists.
     * 
    **/
    where: MessageSeenWhereUniqueInput
    /**
     * In case the MessageSeen found by the `where` argument doesn't exist, create a new MessageSeen with this data.
     * 
    **/
    create: XOR<MessageSeenCreateInput, MessageSeenUncheckedCreateInput>
    /**
     * In case the MessageSeen was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageSeenUpdateInput, MessageSeenUncheckedUpdateInput>
  }


  /**
   * MessageSeen delete
   */
  export type MessageSeenDeleteArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
    /**
     * Filter which MessageSeen to delete.
     * 
    **/
    where: MessageSeenWhereUniqueInput
  }


  /**
   * MessageSeen deleteMany
   */
  export type MessageSeenDeleteManyArgs = {
    /**
     * Filter which MessageSeens to delete
     * 
    **/
    where?: MessageSeenWhereInput
  }


  /**
   * MessageSeen without action
   */
  export type MessageSeenArgs = {
    /**
     * Select specific fields to fetch from the MessageSeen
     * 
    **/
    select?: MessageSeenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageSeenInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FeedbackScalarFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    approved: 'approved'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const FriendShipScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    befrienderId: 'befrienderId',
    befriendeeId: 'befriendeeId'
  };

  export type FriendShipScalarFieldEnum = (typeof FriendShipScalarFieldEnum)[keyof typeof FriendShipScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const JamGenresScalarFieldEnum: {
    id: 'id',
    jamId: 'jamId',
    genreId: 'genreId'
  };

  export type JamGenresScalarFieldEnum = (typeof JamGenresScalarFieldEnum)[keyof typeof JamGenresScalarFieldEnum]


  export const JamInvitationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    jamId: 'jamId',
    inviteeId: 'inviteeId',
    inviterId: 'inviterId'
  };

  export type JamInvitationScalarFieldEnum = (typeof JamInvitationScalarFieldEnum)[keyof typeof JamInvitationScalarFieldEnum]


  export const JamScalarFieldEnum: {
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
  };

  export type JamScalarFieldEnum = (typeof JamScalarFieldEnum)[keyof typeof JamScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    friendShipId: 'friendShipId',
    authorId: 'authorId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageSeenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type MessageSeenScalarFieldEnum = (typeof MessageSeenScalarFieldEnum)[keyof typeof MessageSeenScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    notificationType: 'notificationType',
    data: 'data'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    message: 'message',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SkillScalarFieldEnum: {
    id: 'id',
    slug: 'slug'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    login: 'login',
    password: 'password',
    displayName: 'displayName',
    avatar: 'avatar',
    role: 'role',
    roomId: 'roomId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    login?: StringFilter | string
    password?: StringFilter | string
    displayName?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
    roomId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    befriender?: FriendShipListRelationFilter
    befriendee?: FriendShipListRelationFilter
    reviewer?: FeedbackListRelationFilter
    reviewee?: FeedbackListRelationFilter
    inviter?: JamInvitationListRelationFilter
    invitee?: JamInvitationListRelationFilter
    checkedIn?: JamListRelationFilter
    attending?: JamListRelationFilter
    notifications?: NotificationListRelationFilter
    posts?: PostListRelationFilter
    messages?: MessageListRelationFilter
    messagesSeen?: MessageSeenListRelationFilter
    skills?: SkillListRelationFilter
    jamsHosting?: JamListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    befriender?: FriendShipOrderByRelationAggregateInput
    befriendee?: FriendShipOrderByRelationAggregateInput
    reviewer?: FeedbackOrderByRelationAggregateInput
    reviewee?: FeedbackOrderByRelationAggregateInput
    inviter?: JamInvitationOrderByRelationAggregateInput
    invitee?: JamInvitationOrderByRelationAggregateInput
    checkedIn?: JamOrderByRelationAggregateInput
    attending?: JamOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    messagesSeen?: MessageSeenOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    jamsHosting?: JamOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    login?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    displayName?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleWithAggregatesFilter | Role
    roomId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type JamWhereInput = {
    AND?: Enumerable<JamWhereInput>
    OR?: Enumerable<JamWhereInput>
    NOT?: Enumerable<JamWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    address?: StringNullableFilter | string | null
    name?: StringFilter | string
    description?: StringFilter | string
    image?: StringNullableFilter | string | null
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeFilter | Date | string
    jamType?: EnumJamTypeFilter | JamType
    host?: XOR<UserRelationFilter, UserWhereInput>
    hostId?: IntFilter | number
    attending?: UserListRelationFilter
    checkedIn?: UserListRelationFilter
    invited?: JamInvitationListRelationFilter
    jamGenres?: JamGenresListRelationFilter
  }

  export type JamOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    jamType?: SortOrder
    host?: UserOrderByWithRelationInput
    hostId?: SortOrder
    attending?: UserOrderByRelationAggregateInput
    checkedIn?: UserOrderByRelationAggregateInput
    invited?: JamInvitationOrderByRelationAggregateInput
    jamGenres?: JamGenresOrderByRelationAggregateInput
  }

  export type JamWhereUniqueInput = {
    id?: number
  }

  export type JamOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    jamType?: SortOrder
    hostId?: SortOrder
    _count?: JamCountOrderByAggregateInput
    _avg?: JamAvgOrderByAggregateInput
    _max?: JamMaxOrderByAggregateInput
    _min?: JamMinOrderByAggregateInput
    _sum?: JamSumOrderByAggregateInput
  }

  export type JamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JamScalarWhereWithAggregatesInput>
    OR?: Enumerable<JamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    address?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    startDate?: DateTimeWithAggregatesFilter | Date | string
    endDate?: DateTimeWithAggregatesFilter | Date | string
    jamType?: EnumJamTypeWithAggregatesFilter | JamType
    hostId?: IntWithAggregatesFilter | number
  }

  export type JamGenresWhereInput = {
    AND?: Enumerable<JamGenresWhereInput>
    OR?: Enumerable<JamGenresWhereInput>
    NOT?: Enumerable<JamGenresWhereInput>
    id?: IntFilter | number
    jam?: XOR<JamRelationFilter, JamWhereInput>
    jamId?: IntFilter | number
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    genreId?: StringFilter | string
  }

  export type JamGenresOrderByWithRelationInput = {
    id?: SortOrder
    jam?: JamOrderByWithRelationInput
    jamId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    genreId?: SortOrder
  }

  export type JamGenresWhereUniqueInput = {
    id?: number
  }

  export type JamGenresOrderByWithAggregationInput = {
    id?: SortOrder
    jamId?: SortOrder
    genreId?: SortOrder
    _count?: JamGenresCountOrderByAggregateInput
    _avg?: JamGenresAvgOrderByAggregateInput
    _max?: JamGenresMaxOrderByAggregateInput
    _min?: JamGenresMinOrderByAggregateInput
    _sum?: JamGenresSumOrderByAggregateInput
  }

  export type JamGenresScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JamGenresScalarWhereWithAggregatesInput>
    OR?: Enumerable<JamGenresScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JamGenresScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    jamId?: IntWithAggregatesFilter | number
    genreId?: StringWithAggregatesFilter | string
  }

  export type FeedbackWhereInput = {
    AND?: Enumerable<FeedbackWhereInput>
    OR?: Enumerable<FeedbackWhereInput>
    NOT?: Enumerable<FeedbackWhereInput>
    id?: IntFilter | number
    reviewer?: XOR<UserRelationFilter, UserWhereInput>
    reviewerId?: IntFilter | number
    reviewee?: XOR<UserRelationFilter, UserWhereInput>
    revieweeId?: IntFilter | number
    approved?: BoolFilter | boolean
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    reviewerId?: SortOrder
    reviewee?: UserOrderByWithRelationInput
    revieweeId?: SortOrder
    approved?: SortOrder
  }

  export type FeedbackWhereUniqueInput = {
    id?: number
  }

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    approved?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    reviewerId?: IntWithAggregatesFilter | number
    revieweeId?: IntWithAggregatesFilter | number
    approved?: BoolWithAggregatesFilter | boolean
  }

  export type JamInvitationWhereInput = {
    AND?: Enumerable<JamInvitationWhereInput>
    OR?: Enumerable<JamInvitationWhereInput>
    NOT?: Enumerable<JamInvitationWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    jam?: XOR<JamRelationFilter, JamWhereInput>
    jamId?: IntFilter | number
    invitee?: XOR<UserRelationFilter, UserWhereInput>
    inviteeId?: IntFilter | number
    inviter?: XOR<UserRelationFilter, UserWhereInput>
    inviterId?: IntFilter | number
  }

  export type JamInvitationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    jam?: JamOrderByWithRelationInput
    jamId?: SortOrder
    invitee?: UserOrderByWithRelationInput
    inviteeId?: SortOrder
    inviter?: UserOrderByWithRelationInput
    inviterId?: SortOrder
  }

  export type JamInvitationWhereUniqueInput = {
    id?: number
  }

  export type JamInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
    _count?: JamInvitationCountOrderByAggregateInput
    _avg?: JamInvitationAvgOrderByAggregateInput
    _max?: JamInvitationMaxOrderByAggregateInput
    _min?: JamInvitationMinOrderByAggregateInput
    _sum?: JamInvitationSumOrderByAggregateInput
  }

  export type JamInvitationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JamInvitationScalarWhereWithAggregatesInput>
    OR?: Enumerable<JamInvitationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JamInvitationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    jamId?: IntWithAggregatesFilter | number
    inviteeId?: IntWithAggregatesFilter | number
    inviterId?: IntWithAggregatesFilter | number
  }

  export type FriendShipWhereInput = {
    AND?: Enumerable<FriendShipWhereInput>
    OR?: Enumerable<FriendShipWhereInput>
    NOT?: Enumerable<FriendShipWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    befriender?: XOR<UserRelationFilter, UserWhereInput>
    befrienderId?: IntFilter | number
    befriendee?: XOR<UserRelationFilter, UserWhereInput>
    befriendeeId?: IntFilter | number
    Message?: MessageListRelationFilter
  }

  export type FriendShipOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    befriender?: UserOrderByWithRelationInput
    befrienderId?: SortOrder
    befriendee?: UserOrderByWithRelationInput
    befriendeeId?: SortOrder
    Message?: MessageOrderByRelationAggregateInput
  }

  export type FriendShipWhereUniqueInput = {
    id?: number
  }

  export type FriendShipOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
    _count?: FriendShipCountOrderByAggregateInput
    _avg?: FriendShipAvgOrderByAggregateInput
    _max?: FriendShipMaxOrderByAggregateInput
    _min?: FriendShipMinOrderByAggregateInput
    _sum?: FriendShipSumOrderByAggregateInput
  }

  export type FriendShipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    OR?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    befrienderId?: IntWithAggregatesFilter | number
    befriendeeId?: IntWithAggregatesFilter | number
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    id?: StringFilter | string
    jamGenres?: JamGenresListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    jamGenres?: JamGenresOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    id?: string
  }

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type SkillWhereInput = {
    AND?: Enumerable<SkillWhereInput>
    OR?: Enumerable<SkillWhereInput>
    NOT?: Enumerable<SkillWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    user?: UserListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = {
    id?: number
  }

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkillScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkillScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkillScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    notificationType?: EnumNotificationTypeFilter | NotificationType
    data?: JsonFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    notificationType?: SortOrder
    data?: SortOrder
  }

  export type NotificationWhereUniqueInput = {
    id?: number
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    data?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
    notificationType?: EnumNotificationTypeWithAggregatesFilter | NotificationType
    data?: JsonWithAggregatesFilter
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    message?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    message?: StringWithAggregatesFilter | string
    authorId?: IntWithAggregatesFilter | number
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    friendship?: XOR<FriendShipRelationFilter, FriendShipWhereInput>
    friendShipId?: IntFilter | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    friendship?: FriendShipOrderByWithRelationInput
    friendShipId?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type MessageWhereUniqueInput = {
    id?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    friendShipId?: IntWithAggregatesFilter | number
    authorId?: IntWithAggregatesFilter | number
  }

  export type MessageSeenWhereInput = {
    AND?: Enumerable<MessageSeenWhereInput>
    OR?: Enumerable<MessageSeenWhereInput>
    NOT?: Enumerable<MessageSeenWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
  }

  export type MessageSeenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type MessageSeenWhereUniqueInput = {
    id?: number
  }

  export type MessageSeenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: MessageSeenCountOrderByAggregateInput
    _avg?: MessageSeenAvgOrderByAggregateInput
    _max?: MessageSeenMaxOrderByAggregateInput
    _min?: MessageSeenMinOrderByAggregateInput
    _sum?: MessageSeenSumOrderByAggregateInput
  }

  export type MessageSeenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageSeenScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageSeenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageSeenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    host: UserCreateNestedOneWithoutJamsHostingInput
    attending?: UserCreateNestedManyWithoutAttendingInput
    checkedIn?: UserCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
    attending?: UserUncheckedCreateNestedManyWithoutAttendingInput
    checkedIn?: UserUncheckedCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationUncheckedCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    host?: UserUpdateOneRequiredWithoutJamsHostingNestedInput
    attending?: UserUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
    attending?: UserUncheckedUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUncheckedUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUncheckedUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUncheckedUpdateManyWithoutJamNestedInput
  }

  export type JamCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
  }

  export type JamUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
  }

  export type JamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type JamGenresCreateInput = {
    jam: JamCreateNestedOneWithoutJamGenresInput
    genre: GenreCreateNestedOneWithoutJamGenresInput
  }

  export type JamGenresUncheckedCreateInput = {
    id?: number
    jamId: number
    genreId: string
  }

  export type JamGenresUpdateInput = {
    jam?: JamUpdateOneRequiredWithoutJamGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutJamGenresNestedInput
  }

  export type JamGenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jamId?: IntFieldUpdateOperationsInput | number
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type JamGenresCreateManyInput = {
    id?: number
    jamId: number
    genreId: string
  }

  export type JamGenresUpdateManyMutationInput = {

  }

  export type JamGenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jamId?: IntFieldUpdateOperationsInput | number
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateInput = {
    reviewer: UserCreateNestedOneWithoutReviewerInput
    reviewee: UserCreateNestedOneWithoutRevieweeInput
    approved: boolean
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    reviewerId: number
    revieweeId: number
    approved: boolean
  }

  export type FeedbackUpdateInput = {
    reviewer?: UserUpdateOneRequiredWithoutReviewerNestedInput
    reviewee?: UserUpdateOneRequiredWithoutRevieweeNestedInput
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    revieweeId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackCreateManyInput = {
    id?: number
    reviewerId: number
    revieweeId: number
    approved: boolean
  }

  export type FeedbackUpdateManyMutationInput = {
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    revieweeId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JamInvitationCreateInput = {
    createdAt?: Date | string
    jam: JamCreateNestedOneWithoutInvitedInput
    invitee: UserCreateNestedOneWithoutInviteeInput
    inviter: UserCreateNestedOneWithoutInviterInput
  }

  export type JamInvitationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviteeId: number
    inviterId: number
  }

  export type JamInvitationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: JamUpdateOneRequiredWithoutInvitedNestedInput
    invitee?: UserUpdateOneRequiredWithoutInviteeNestedInput
    inviter?: UserUpdateOneRequiredWithoutInviterNestedInput
  }

  export type JamInvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type JamInvitationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviteeId: number
    inviterId: number
  }

  export type JamInvitationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamInvitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipCreateInput = {
    createdAt?: Date | string
    befriender: UserCreateNestedOneWithoutBefrienderInput
    befriendee: UserCreateNestedOneWithoutBefriendeeInput
    Message?: MessageCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    befrienderId: number
    befriendeeId: number
    Message?: MessageUncheckedCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: UserUpdateOneRequiredWithoutBefrienderNestedInput
    befriendee?: UserUpdateOneRequiredWithoutBefriendeeNestedInput
    Message?: MessageUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befrienderId?: IntFieldUpdateOperationsInput | number
    befriendeeId?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipCreateManyInput = {
    id?: number
    createdAt?: Date | string
    befrienderId: number
    befriendeeId: number
  }

  export type FriendShipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendShipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befrienderId?: IntFieldUpdateOperationsInput | number
    befriendeeId?: IntFieldUpdateOperationsInput | number
  }

  export type GenreCreateInput = {
    id: string
    jamGenres?: JamGenresCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id: string
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamGenres?: JamGenresUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamGenres?: JamGenresUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateInput = {
    slug: string
    user?: UserCreateNestedManyWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    slug: string
    user?: UserUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    slug: string
  }

  export type SkillUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    message: string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    message: string
    authorId: number
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    createdAt?: Date | string
    message: string
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    message: string
    createdAt?: Date | string
    friendship: FriendShipCreateNestedOneWithoutMessageInput
    author: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    message: string
    createdAt?: Date | string
    friendShipId: number
    authorId: number
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendship?: FriendShipUpdateOneRequiredWithoutMessageNestedInput
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendShipId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    message: string
    createdAt?: Date | string
    friendShipId: number
    authorId: number
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendShipId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageSeenCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesSeenInput
  }

  export type MessageSeenUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type MessageSeenUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesSeenNestedInput
  }

  export type MessageSeenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageSeenCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type MessageSeenUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type FriendShipListRelationFilter = {
    every?: FriendShipWhereInput
    some?: FriendShipWhereInput
    none?: FriendShipWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type JamInvitationListRelationFilter = {
    every?: JamInvitationWhereInput
    some?: JamInvitationWhereInput
    none?: JamInvitationWhereInput
  }

  export type JamListRelationFilter = {
    every?: JamWhereInput
    some?: JamWhereInput
    none?: JamWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageSeenListRelationFilter = {
    every?: MessageSeenWhereInput
    some?: MessageSeenWhereInput
    none?: MessageSeenWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type FriendShipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JamInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageSeenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumJamTypeFilter = {
    equals?: JamType
    in?: Enumerable<JamType>
    notIn?: Enumerable<JamType>
    not?: NestedEnumJamTypeFilter | JamType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type JamGenresListRelationFilter = {
    every?: JamGenresWhereInput
    some?: JamGenresWhereInput
    none?: JamGenresWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JamGenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JamCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    jamType?: SortOrder
    hostId?: SortOrder
  }

  export type JamAvgOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
  }

  export type JamMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    jamType?: SortOrder
    hostId?: SortOrder
  }

  export type JamMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    jamType?: SortOrder
    hostId?: SortOrder
  }

  export type JamSumOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
  }

  export type EnumJamTypeWithAggregatesFilter = {
    equals?: JamType
    in?: Enumerable<JamType>
    notIn?: Enumerable<JamType>
    not?: NestedEnumJamTypeWithAggregatesFilter | JamType
    _count?: NestedIntFilter
    _min?: NestedEnumJamTypeFilter
    _max?: NestedEnumJamTypeFilter
  }

  export type JamRelationFilter = {
    is?: JamWhereInput
    isNot?: JamWhereInput
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type JamGenresCountOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
    genreId?: SortOrder
  }

  export type JamGenresAvgOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
  }

  export type JamGenresMaxOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
    genreId?: SortOrder
  }

  export type JamGenresMinOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
    genreId?: SortOrder
  }

  export type JamGenresSumOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    approved?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    approved?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    approved?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type JamInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
  }

  export type JamInvitationAvgOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
  }

  export type JamInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
  }

  export type JamInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
  }

  export type JamInvitationSumOrderByAggregateInput = {
    id?: SortOrder
    jamId?: SortOrder
    inviteeId?: SortOrder
    inviterId?: SortOrder
  }

  export type FriendShipCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
  }

  export type FriendShipAvgOrderByAggregateInput = {
    id?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
  }

  export type FriendShipMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
  }

  export type FriendShipMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
  }

  export type FriendShipSumOrderByAggregateInput = {
    id?: SortOrder
    befrienderId?: SortOrder
    befriendeeId?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
    data?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    notificationType?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type FriendShipRelationFilter = {
    is?: FriendShipWhereInput
    isNot?: FriendShipWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    friendShipId?: SortOrder
    authorId?: SortOrder
  }

  export type MessageSeenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MessageSeenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessageSeenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MessageSeenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MessageSeenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FriendShipCreateNestedManyWithoutBefrienderInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefrienderInput>, Enumerable<FriendShipUncheckedCreateWithoutBefrienderInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefrienderInput>
    createMany?: FriendShipCreateManyBefrienderInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FriendShipCreateNestedManyWithoutBefriendeeInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefriendeeInput>, Enumerable<FriendShipUncheckedCreateWithoutBefriendeeInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefriendeeInput>
    createMany?: FriendShipCreateManyBefriendeeInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FeedbackCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutReviewerInput>, Enumerable<FeedbackUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutReviewerInput>
    createMany?: FeedbackCreateManyReviewerInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type FeedbackCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutRevieweeInput>, Enumerable<FeedbackUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutRevieweeInput>
    createMany?: FeedbackCreateManyRevieweeInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type JamInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviterInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviterInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviterInput>
    createMany?: JamInvitationCreateManyInviterInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamInvitationCreateNestedManyWithoutInviteeInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviteeInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviteeInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviteeInput>
    createMany?: JamInvitationCreateManyInviteeInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamCreateNestedManyWithoutCheckedInInput = {
    create?: XOR<Enumerable<JamCreateWithoutCheckedInInput>, Enumerable<JamUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutCheckedInInput>
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type JamCreateNestedManyWithoutAttendingInput = {
    create?: XOR<Enumerable<JamCreateWithoutAttendingInput>, Enumerable<JamUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutAttendingInput>
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageSeenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MessageSeenCreateWithoutUserInput>, Enumerable<MessageSeenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageSeenCreateOrConnectWithoutUserInput>
    createMany?: MessageSeenCreateManyUserInputEnvelope
    connect?: Enumerable<MessageSeenWhereUniqueInput>
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillCreateWithoutUserInput>, Enumerable<SkillUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SkillWhereUniqueInput>
  }

  export type JamCreateNestedManyWithoutHostInput = {
    create?: XOR<Enumerable<JamCreateWithoutHostInput>, Enumerable<JamUncheckedCreateWithoutHostInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutHostInput>
    createMany?: JamCreateManyHostInputEnvelope
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type FriendShipUncheckedCreateNestedManyWithoutBefrienderInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefrienderInput>, Enumerable<FriendShipUncheckedCreateWithoutBefrienderInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefrienderInput>
    createMany?: FriendShipCreateManyBefrienderInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefriendeeInput>, Enumerable<FriendShipUncheckedCreateWithoutBefriendeeInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefriendeeInput>
    createMany?: FriendShipCreateManyBefriendeeInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FeedbackUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutReviewerInput>, Enumerable<FeedbackUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutReviewerInput>
    createMany?: FeedbackCreateManyReviewerInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type FeedbackUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutRevieweeInput>, Enumerable<FeedbackUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutRevieweeInput>
    createMany?: FeedbackCreateManyRevieweeInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type JamInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviterInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviterInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviterInput>
    createMany?: JamInvitationCreateManyInviterInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamInvitationUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviteeInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviteeInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviteeInput>
    createMany?: JamInvitationCreateManyInviteeInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamUncheckedCreateNestedManyWithoutCheckedInInput = {
    create?: XOR<Enumerable<JamCreateWithoutCheckedInInput>, Enumerable<JamUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutCheckedInInput>
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type JamUncheckedCreateNestedManyWithoutAttendingInput = {
    create?: XOR<Enumerable<JamCreateWithoutAttendingInput>, Enumerable<JamUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutAttendingInput>
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageSeenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MessageSeenCreateWithoutUserInput>, Enumerable<MessageSeenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageSeenCreateOrConnectWithoutUserInput>
    createMany?: MessageSeenCreateManyUserInputEnvelope
    connect?: Enumerable<MessageSeenWhereUniqueInput>
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillCreateWithoutUserInput>, Enumerable<SkillUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SkillWhereUniqueInput>
  }

  export type JamUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<Enumerable<JamCreateWithoutHostInput>, Enumerable<JamUncheckedCreateWithoutHostInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutHostInput>
    createMany?: JamCreateManyHostInputEnvelope
    connect?: Enumerable<JamWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FriendShipUpdateManyWithoutBefrienderNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefrienderInput>, Enumerable<FriendShipUncheckedCreateWithoutBefrienderInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefrienderInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutBefrienderInput>
    createMany?: FriendShipCreateManyBefrienderInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutBefrienderInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutBefrienderInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FriendShipUpdateManyWithoutBefriendeeNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefriendeeInput>, Enumerable<FriendShipUncheckedCreateWithoutBefriendeeInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefriendeeInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutBefriendeeInput>
    createMany?: FriendShipCreateManyBefriendeeInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutBefriendeeInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutBefriendeeInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FeedbackUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutReviewerInput>, Enumerable<FeedbackUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: FeedbackCreateManyReviewerInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type FeedbackUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutRevieweeInput>, Enumerable<FeedbackUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutRevieweeInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutRevieweeInput>
    createMany?: FeedbackCreateManyRevieweeInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutRevieweeInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutRevieweeInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type JamInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviterInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviterInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviterInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutInviterInput>
    createMany?: JamInvitationCreateManyInviterInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutInviterInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutInviterInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamInvitationUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviteeInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviteeInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviteeInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutInviteeInput>
    createMany?: JamInvitationCreateManyInviteeInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutInviteeInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutInviteeInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamUpdateManyWithoutCheckedInNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutCheckedInInput>, Enumerable<JamUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutCheckedInInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutCheckedInInput>
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutCheckedInInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutCheckedInInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type JamUpdateManyWithoutAttendingNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutAttendingInput>, Enumerable<JamUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutAttendingInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutAttendingInput>
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutAttendingInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutAttendingInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type MessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageSeenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MessageSeenCreateWithoutUserInput>, Enumerable<MessageSeenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageSeenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MessageSeenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MessageSeenCreateManyUserInputEnvelope
    set?: Enumerable<MessageSeenWhereUniqueInput>
    disconnect?: Enumerable<MessageSeenWhereUniqueInput>
    delete?: Enumerable<MessageSeenWhereUniqueInput>
    connect?: Enumerable<MessageSeenWhereUniqueInput>
    update?: Enumerable<MessageSeenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MessageSeenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MessageSeenScalarWhereInput>
  }

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SkillCreateWithoutUserInput>, Enumerable<SkillUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<SkillWhereUniqueInput>
    disconnect?: Enumerable<SkillWhereUniqueInput>
    delete?: Enumerable<SkillWhereUniqueInput>
    connect?: Enumerable<SkillWhereUniqueInput>
    update?: Enumerable<SkillUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillScalarWhereInput>
  }

  export type JamUpdateManyWithoutHostNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutHostInput>, Enumerable<JamUncheckedCreateWithoutHostInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutHostInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutHostInput>
    createMany?: JamCreateManyHostInputEnvelope
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutHostInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutHostInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefrienderInput>, Enumerable<FriendShipUncheckedCreateWithoutBefrienderInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefrienderInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutBefrienderInput>
    createMany?: FriendShipCreateManyBefrienderInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutBefrienderInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutBefrienderInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutBefriendeeInput>, Enumerable<FriendShipUncheckedCreateWithoutBefriendeeInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutBefriendeeInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutBefriendeeInput>
    createMany?: FriendShipCreateManyBefriendeeInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutBefriendeeInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutBefriendeeInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutReviewerInput>, Enumerable<FeedbackUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: FeedbackCreateManyReviewerInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutRevieweeInput>, Enumerable<FeedbackUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutRevieweeInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutRevieweeInput>
    createMany?: FeedbackCreateManyRevieweeInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutRevieweeInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutRevieweeInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type JamInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviterInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviterInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviterInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutInviterInput>
    createMany?: JamInvitationCreateManyInviterInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutInviterInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutInviterInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutInviteeInput>, Enumerable<JamInvitationUncheckedCreateWithoutInviteeInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutInviteeInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutInviteeInput>
    createMany?: JamInvitationCreateManyInviteeInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutInviteeInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutInviteeInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamUncheckedUpdateManyWithoutCheckedInNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutCheckedInInput>, Enumerable<JamUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutCheckedInInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutCheckedInInput>
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutCheckedInInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutCheckedInInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type JamUncheckedUpdateManyWithoutAttendingNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutAttendingInput>, Enumerable<JamUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutAttendingInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutAttendingInput>
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutAttendingInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutAttendingInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageSeenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MessageSeenCreateWithoutUserInput>, Enumerable<MessageSeenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageSeenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MessageSeenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MessageSeenCreateManyUserInputEnvelope
    set?: Enumerable<MessageSeenWhereUniqueInput>
    disconnect?: Enumerable<MessageSeenWhereUniqueInput>
    delete?: Enumerable<MessageSeenWhereUniqueInput>
    connect?: Enumerable<MessageSeenWhereUniqueInput>
    update?: Enumerable<MessageSeenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MessageSeenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MessageSeenScalarWhereInput>
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SkillCreateWithoutUserInput>, Enumerable<SkillUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<SkillWhereUniqueInput>
    disconnect?: Enumerable<SkillWhereUniqueInput>
    delete?: Enumerable<SkillWhereUniqueInput>
    connect?: Enumerable<SkillWhereUniqueInput>
    update?: Enumerable<SkillUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillScalarWhereInput>
  }

  export type JamUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<Enumerable<JamCreateWithoutHostInput>, Enumerable<JamUncheckedCreateWithoutHostInput>>
    connectOrCreate?: Enumerable<JamCreateOrConnectWithoutHostInput>
    upsert?: Enumerable<JamUpsertWithWhereUniqueWithoutHostInput>
    createMany?: JamCreateManyHostInputEnvelope
    set?: Enumerable<JamWhereUniqueInput>
    disconnect?: Enumerable<JamWhereUniqueInput>
    delete?: Enumerable<JamWhereUniqueInput>
    connect?: Enumerable<JamWhereUniqueInput>
    update?: Enumerable<JamUpdateWithWhereUniqueWithoutHostInput>
    updateMany?: Enumerable<JamUpdateManyWithWhereWithoutHostInput>
    deleteMany?: Enumerable<JamScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutJamsHostingInput = {
    create?: XOR<UserCreateWithoutJamsHostingInput, UserUncheckedCreateWithoutJamsHostingInput>
    connectOrCreate?: UserCreateOrConnectWithoutJamsHostingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAttendingInput = {
    create?: XOR<Enumerable<UserCreateWithoutAttendingInput>, Enumerable<UserUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAttendingInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutCheckedInInput = {
    create?: XOR<Enumerable<UserCreateWithoutCheckedInInput>, Enumerable<UserUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCheckedInInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type JamInvitationCreateNestedManyWithoutJamInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutJamInput>, Enumerable<JamInvitationUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutJamInput>
    createMany?: JamInvitationCreateManyJamInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamGenresCreateNestedManyWithoutJamInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutJamInput>, Enumerable<JamGenresUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutJamInput>
    createMany?: JamGenresCreateManyJamInputEnvelope
    connect?: Enumerable<JamGenresWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAttendingInput = {
    create?: XOR<Enumerable<UserCreateWithoutAttendingInput>, Enumerable<UserUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAttendingInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCheckedInInput = {
    create?: XOR<Enumerable<UserCreateWithoutCheckedInInput>, Enumerable<UserUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCheckedInInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type JamInvitationUncheckedCreateNestedManyWithoutJamInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutJamInput>, Enumerable<JamInvitationUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutJamInput>
    createMany?: JamInvitationCreateManyJamInputEnvelope
    connect?: Enumerable<JamInvitationWhereUniqueInput>
  }

  export type JamGenresUncheckedCreateNestedManyWithoutJamInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutJamInput>, Enumerable<JamGenresUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutJamInput>
    createMany?: JamGenresCreateManyJamInputEnvelope
    connect?: Enumerable<JamGenresWhereUniqueInput>
  }

  export type EnumJamTypeFieldUpdateOperationsInput = {
    set?: JamType
  }

  export type UserUpdateOneRequiredWithoutJamsHostingNestedInput = {
    create?: XOR<UserCreateWithoutJamsHostingInput, UserUncheckedCreateWithoutJamsHostingInput>
    connectOrCreate?: UserCreateOrConnectWithoutJamsHostingInput
    upsert?: UserUpsertWithoutJamsHostingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutJamsHostingInput, UserUncheckedUpdateWithoutJamsHostingInput>
  }

  export type UserUpdateManyWithoutAttendingNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAttendingInput>, Enumerable<UserUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAttendingInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAttendingInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAttendingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAttendingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutCheckedInNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCheckedInInput>, Enumerable<UserUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCheckedInInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCheckedInInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCheckedInInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCheckedInInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type JamInvitationUpdateManyWithoutJamNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutJamInput>, Enumerable<JamInvitationUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutJamInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutJamInput>
    createMany?: JamInvitationCreateManyJamInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutJamInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutJamInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamGenresUpdateManyWithoutJamNestedInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutJamInput>, Enumerable<JamGenresUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutJamInput>
    upsert?: Enumerable<JamGenresUpsertWithWhereUniqueWithoutJamInput>
    createMany?: JamGenresCreateManyJamInputEnvelope
    set?: Enumerable<JamGenresWhereUniqueInput>
    disconnect?: Enumerable<JamGenresWhereUniqueInput>
    delete?: Enumerable<JamGenresWhereUniqueInput>
    connect?: Enumerable<JamGenresWhereUniqueInput>
    update?: Enumerable<JamGenresUpdateWithWhereUniqueWithoutJamInput>
    updateMany?: Enumerable<JamGenresUpdateManyWithWhereWithoutJamInput>
    deleteMany?: Enumerable<JamGenresScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAttendingNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAttendingInput>, Enumerable<UserUncheckedCreateWithoutAttendingInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAttendingInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAttendingInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAttendingInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAttendingInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutCheckedInNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCheckedInInput>, Enumerable<UserUncheckedCreateWithoutCheckedInInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCheckedInInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCheckedInInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCheckedInInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCheckedInInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type JamInvitationUncheckedUpdateManyWithoutJamNestedInput = {
    create?: XOR<Enumerable<JamInvitationCreateWithoutJamInput>, Enumerable<JamInvitationUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamInvitationCreateOrConnectWithoutJamInput>
    upsert?: Enumerable<JamInvitationUpsertWithWhereUniqueWithoutJamInput>
    createMany?: JamInvitationCreateManyJamInputEnvelope
    set?: Enumerable<JamInvitationWhereUniqueInput>
    disconnect?: Enumerable<JamInvitationWhereUniqueInput>
    delete?: Enumerable<JamInvitationWhereUniqueInput>
    connect?: Enumerable<JamInvitationWhereUniqueInput>
    update?: Enumerable<JamInvitationUpdateWithWhereUniqueWithoutJamInput>
    updateMany?: Enumerable<JamInvitationUpdateManyWithWhereWithoutJamInput>
    deleteMany?: Enumerable<JamInvitationScalarWhereInput>
  }

  export type JamGenresUncheckedUpdateManyWithoutJamNestedInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutJamInput>, Enumerable<JamGenresUncheckedCreateWithoutJamInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutJamInput>
    upsert?: Enumerable<JamGenresUpsertWithWhereUniqueWithoutJamInput>
    createMany?: JamGenresCreateManyJamInputEnvelope
    set?: Enumerable<JamGenresWhereUniqueInput>
    disconnect?: Enumerable<JamGenresWhereUniqueInput>
    delete?: Enumerable<JamGenresWhereUniqueInput>
    connect?: Enumerable<JamGenresWhereUniqueInput>
    update?: Enumerable<JamGenresUpdateWithWhereUniqueWithoutJamInput>
    updateMany?: Enumerable<JamGenresUpdateManyWithWhereWithoutJamInput>
    deleteMany?: Enumerable<JamGenresScalarWhereInput>
  }

  export type JamCreateNestedOneWithoutJamGenresInput = {
    create?: XOR<JamCreateWithoutJamGenresInput, JamUncheckedCreateWithoutJamGenresInput>
    connectOrCreate?: JamCreateOrConnectWithoutJamGenresInput
    connect?: JamWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutJamGenresInput = {
    create?: XOR<GenreCreateWithoutJamGenresInput, GenreUncheckedCreateWithoutJamGenresInput>
    connectOrCreate?: GenreCreateOrConnectWithoutJamGenresInput
    connect?: GenreWhereUniqueInput
  }

  export type JamUpdateOneRequiredWithoutJamGenresNestedInput = {
    create?: XOR<JamCreateWithoutJamGenresInput, JamUncheckedCreateWithoutJamGenresInput>
    connectOrCreate?: JamCreateOrConnectWithoutJamGenresInput
    upsert?: JamUpsertWithoutJamGenresInput
    connect?: JamWhereUniqueInput
    update?: XOR<JamUpdateWithoutJamGenresInput, JamUncheckedUpdateWithoutJamGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutJamGenresNestedInput = {
    create?: XOR<GenreCreateWithoutJamGenresInput, GenreUncheckedCreateWithoutJamGenresInput>
    connectOrCreate?: GenreCreateOrConnectWithoutJamGenresInput
    upsert?: GenreUpsertWithoutJamGenresInput
    connect?: GenreWhereUniqueInput
    update?: XOR<GenreUpdateWithoutJamGenresInput, GenreUncheckedUpdateWithoutJamGenresInput>
  }

  export type UserCreateNestedOneWithoutReviewerInput = {
    create?: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRevieweeInput = {
    create?: XOR<UserCreateWithoutRevieweeInput, UserUncheckedCreateWithoutRevieweeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevieweeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewerNestedInput = {
    create?: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewerInput
    upsert?: UserUpsertWithoutReviewerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReviewerInput, UserUncheckedUpdateWithoutReviewerInput>
  }

  export type UserUpdateOneRequiredWithoutRevieweeNestedInput = {
    create?: XOR<UserCreateWithoutRevieweeInput, UserUncheckedCreateWithoutRevieweeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevieweeInput
    upsert?: UserUpsertWithoutRevieweeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRevieweeInput, UserUncheckedUpdateWithoutRevieweeInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type JamCreateNestedOneWithoutInvitedInput = {
    create?: XOR<JamCreateWithoutInvitedInput, JamUncheckedCreateWithoutInvitedInput>
    connectOrCreate?: JamCreateOrConnectWithoutInvitedInput
    connect?: JamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInviteeInput = {
    create?: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInviterInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    connect?: UserWhereUniqueInput
  }

  export type JamUpdateOneRequiredWithoutInvitedNestedInput = {
    create?: XOR<JamCreateWithoutInvitedInput, JamUncheckedCreateWithoutInvitedInput>
    connectOrCreate?: JamCreateOrConnectWithoutInvitedInput
    upsert?: JamUpsertWithoutInvitedInput
    connect?: JamWhereUniqueInput
    update?: XOR<JamUpdateWithoutInvitedInput, JamUncheckedUpdateWithoutInvitedInput>
  }

  export type UserUpdateOneRequiredWithoutInviteeNestedInput = {
    create?: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteeInput
    upsert?: UserUpsertWithoutInviteeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInviteeInput, UserUncheckedUpdateWithoutInviteeInput>
  }

  export type UserUpdateOneRequiredWithoutInviterNestedInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    upsert?: UserUpsertWithoutInviterInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
  }

  export type UserCreateNestedOneWithoutBefrienderInput = {
    create?: XOR<UserCreateWithoutBefrienderInput, UserUncheckedCreateWithoutBefrienderInput>
    connectOrCreate?: UserCreateOrConnectWithoutBefrienderInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBefriendeeInput = {
    create?: XOR<UserCreateWithoutBefriendeeInput, UserUncheckedCreateWithoutBefriendeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBefriendeeInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutFriendshipInput = {
    create?: XOR<Enumerable<MessageCreateWithoutFriendshipInput>, Enumerable<MessageUncheckedCreateWithoutFriendshipInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutFriendshipInput>
    createMany?: MessageCreateManyFriendshipInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutFriendshipInput = {
    create?: XOR<Enumerable<MessageCreateWithoutFriendshipInput>, Enumerable<MessageUncheckedCreateWithoutFriendshipInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutFriendshipInput>
    createMany?: MessageCreateManyFriendshipInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBefrienderNestedInput = {
    create?: XOR<UserCreateWithoutBefrienderInput, UserUncheckedCreateWithoutBefrienderInput>
    connectOrCreate?: UserCreateOrConnectWithoutBefrienderInput
    upsert?: UserUpsertWithoutBefrienderInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBefrienderInput, UserUncheckedUpdateWithoutBefrienderInput>
  }

  export type UserUpdateOneRequiredWithoutBefriendeeNestedInput = {
    create?: XOR<UserCreateWithoutBefriendeeInput, UserUncheckedCreateWithoutBefriendeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBefriendeeInput
    upsert?: UserUpsertWithoutBefriendeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBefriendeeInput, UserUncheckedUpdateWithoutBefriendeeInput>
  }

  export type MessageUpdateManyWithoutFriendshipNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutFriendshipInput>, Enumerable<MessageUncheckedCreateWithoutFriendshipInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutFriendshipInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutFriendshipInput>
    createMany?: MessageCreateManyFriendshipInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutFriendshipInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutFriendshipInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutFriendshipNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutFriendshipInput>, Enumerable<MessageUncheckedCreateWithoutFriendshipInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutFriendshipInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutFriendshipInput>
    createMany?: MessageCreateManyFriendshipInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutFriendshipInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutFriendshipInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type JamGenresCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutGenreInput>, Enumerable<JamGenresUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutGenreInput>
    createMany?: JamGenresCreateManyGenreInputEnvelope
    connect?: Enumerable<JamGenresWhereUniqueInput>
  }

  export type JamGenresUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutGenreInput>, Enumerable<JamGenresUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutGenreInput>
    createMany?: JamGenresCreateManyGenreInputEnvelope
    connect?: Enumerable<JamGenresWhereUniqueInput>
  }

  export type JamGenresUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutGenreInput>, Enumerable<JamGenresUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<JamGenresUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: JamGenresCreateManyGenreInputEnvelope
    set?: Enumerable<JamGenresWhereUniqueInput>
    disconnect?: Enumerable<JamGenresWhereUniqueInput>
    delete?: Enumerable<JamGenresWhereUniqueInput>
    connect?: Enumerable<JamGenresWhereUniqueInput>
    update?: Enumerable<JamGenresUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<JamGenresUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<JamGenresScalarWhereInput>
  }

  export type JamGenresUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<JamGenresCreateWithoutGenreInput>, Enumerable<JamGenresUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<JamGenresCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<JamGenresUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: JamGenresCreateManyGenreInputEnvelope
    set?: Enumerable<JamGenresWhereUniqueInput>
    disconnect?: Enumerable<JamGenresWhereUniqueInput>
    delete?: Enumerable<JamGenresWhereUniqueInput>
    connect?: Enumerable<JamGenresWhereUniqueInput>
    update?: Enumerable<JamGenresUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<JamGenresUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<JamGenresScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Enumerable<UserCreateWithoutSkillsInput>, Enumerable<UserUncheckedCreateWithoutSkillsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSkillsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<Enumerable<UserCreateWithoutSkillsInput>, Enumerable<UserUncheckedCreateWithoutSkillsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSkillsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSkillsInput>, Enumerable<UserUncheckedCreateWithoutSkillsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSkillsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSkillsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSkillsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSkillsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutSkillsInput>, Enumerable<UserUncheckedCreateWithoutSkillsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutSkillsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutSkillsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutSkillsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutSkillsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: NotificationType
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type FriendShipCreateNestedOneWithoutMessageInput = {
    create?: XOR<FriendShipCreateWithoutMessageInput, FriendShipUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FriendShipCreateOrConnectWithoutMessageInput
    connect?: FriendShipWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type FriendShipUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<FriendShipCreateWithoutMessageInput, FriendShipUncheckedCreateWithoutMessageInput>
    connectOrCreate?: FriendShipCreateOrConnectWithoutMessageInput
    upsert?: FriendShipUpsertWithoutMessageInput
    connect?: FriendShipWhereUniqueInput
    update?: XOR<FriendShipUpdateWithoutMessageInput, FriendShipUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMessagesSeenInput = {
    create?: XOR<UserCreateWithoutMessagesSeenInput, UserUncheckedCreateWithoutMessagesSeenInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSeenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSeenNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSeenInput, UserUncheckedCreateWithoutMessagesSeenInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSeenInput
    upsert?: UserUpsertWithoutMessagesSeenInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesSeenInput, UserUncheckedUpdateWithoutMessagesSeenInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumJamTypeFilter = {
    equals?: JamType
    in?: Enumerable<JamType>
    notIn?: Enumerable<JamType>
    not?: NestedEnumJamTypeFilter | JamType
  }

  export type NestedEnumJamTypeWithAggregatesFilter = {
    equals?: JamType
    in?: Enumerable<JamType>
    notIn?: Enumerable<JamType>
    not?: NestedEnumJamTypeWithAggregatesFilter | JamType
    _count?: NestedIntFilter
    _min?: NestedEnumJamTypeFilter
    _max?: NestedEnumJamTypeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type FriendShipCreateWithoutBefrienderInput = {
    createdAt?: Date | string
    befriendee: UserCreateNestedOneWithoutBefriendeeInput
    Message?: MessageCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipUncheckedCreateWithoutBefrienderInput = {
    id?: number
    createdAt?: Date | string
    befriendeeId: number
    Message?: MessageUncheckedCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipCreateOrConnectWithoutBefrienderInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutBefrienderInput, FriendShipUncheckedCreateWithoutBefrienderInput>
  }

  export type FriendShipCreateManyBefrienderInputEnvelope = {
    data: Enumerable<FriendShipCreateManyBefrienderInput>
    skipDuplicates?: boolean
  }

  export type FriendShipCreateWithoutBefriendeeInput = {
    createdAt?: Date | string
    befriender: UserCreateNestedOneWithoutBefrienderInput
    Message?: MessageCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipUncheckedCreateWithoutBefriendeeInput = {
    id?: number
    createdAt?: Date | string
    befrienderId: number
    Message?: MessageUncheckedCreateNestedManyWithoutFriendshipInput
  }

  export type FriendShipCreateOrConnectWithoutBefriendeeInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutBefriendeeInput, FriendShipUncheckedCreateWithoutBefriendeeInput>
  }

  export type FriendShipCreateManyBefriendeeInputEnvelope = {
    data: Enumerable<FriendShipCreateManyBefriendeeInput>
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutReviewerInput = {
    reviewee: UserCreateNestedOneWithoutRevieweeInput
    approved: boolean
  }

  export type FeedbackUncheckedCreateWithoutReviewerInput = {
    id?: number
    revieweeId: number
    approved: boolean
  }

  export type FeedbackCreateOrConnectWithoutReviewerInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutReviewerInput, FeedbackUncheckedCreateWithoutReviewerInput>
  }

  export type FeedbackCreateManyReviewerInputEnvelope = {
    data: Enumerable<FeedbackCreateManyReviewerInput>
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutRevieweeInput = {
    reviewer: UserCreateNestedOneWithoutReviewerInput
    approved: boolean
  }

  export type FeedbackUncheckedCreateWithoutRevieweeInput = {
    id?: number
    reviewerId: number
    approved: boolean
  }

  export type FeedbackCreateOrConnectWithoutRevieweeInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutRevieweeInput, FeedbackUncheckedCreateWithoutRevieweeInput>
  }

  export type FeedbackCreateManyRevieweeInputEnvelope = {
    data: Enumerable<FeedbackCreateManyRevieweeInput>
    skipDuplicates?: boolean
  }

  export type JamInvitationCreateWithoutInviterInput = {
    createdAt?: Date | string
    jam: JamCreateNestedOneWithoutInvitedInput
    invitee: UserCreateNestedOneWithoutInviteeInput
  }

  export type JamInvitationUncheckedCreateWithoutInviterInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviteeId: number
  }

  export type JamInvitationCreateOrConnectWithoutInviterInput = {
    where: JamInvitationWhereUniqueInput
    create: XOR<JamInvitationCreateWithoutInviterInput, JamInvitationUncheckedCreateWithoutInviterInput>
  }

  export type JamInvitationCreateManyInviterInputEnvelope = {
    data: Enumerable<JamInvitationCreateManyInviterInput>
    skipDuplicates?: boolean
  }

  export type JamInvitationCreateWithoutInviteeInput = {
    createdAt?: Date | string
    jam: JamCreateNestedOneWithoutInvitedInput
    inviter: UserCreateNestedOneWithoutInviterInput
  }

  export type JamInvitationUncheckedCreateWithoutInviteeInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviterId: number
  }

  export type JamInvitationCreateOrConnectWithoutInviteeInput = {
    where: JamInvitationWhereUniqueInput
    create: XOR<JamInvitationCreateWithoutInviteeInput, JamInvitationUncheckedCreateWithoutInviteeInput>
  }

  export type JamInvitationCreateManyInviteeInputEnvelope = {
    data: Enumerable<JamInvitationCreateManyInviteeInput>
    skipDuplicates?: boolean
  }

  export type JamCreateWithoutCheckedInInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    host: UserCreateNestedOneWithoutJamsHostingInput
    attending?: UserCreateNestedManyWithoutAttendingInput
    invited?: JamInvitationCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateWithoutCheckedInInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
    attending?: UserUncheckedCreateNestedManyWithoutAttendingInput
    invited?: JamInvitationUncheckedCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamCreateOrConnectWithoutCheckedInInput = {
    where: JamWhereUniqueInput
    create: XOR<JamCreateWithoutCheckedInInput, JamUncheckedCreateWithoutCheckedInInput>
  }

  export type JamCreateWithoutAttendingInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    host: UserCreateNestedOneWithoutJamsHostingInput
    checkedIn?: UserCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateWithoutAttendingInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
    checkedIn?: UserUncheckedCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationUncheckedCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamCreateOrConnectWithoutAttendingInput = {
    where: JamWhereUniqueInput
    create: XOR<JamCreateWithoutAttendingInput, JamUncheckedCreateWithoutAttendingInput>
  }

  export type NotificationCreateWithoutUserInput = {
    createdAt?: Date | string
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: Enumerable<NotificationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    createdAt?: Date | string
    message: string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    message: string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAuthorInput = {
    message: string
    createdAt?: Date | string
    friendship: FriendShipCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutAuthorInput = {
    id?: number
    message: string
    createdAt?: Date | string
    friendShipId: number
  }

  export type MessageCreateOrConnectWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageCreateManyAuthorInputEnvelope = {
    data: Enumerable<MessageCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type MessageSeenCreateWithoutUserInput = {
    createdAt?: Date | string
  }

  export type MessageSeenUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
  }

  export type MessageSeenCreateOrConnectWithoutUserInput = {
    where: MessageSeenWhereUniqueInput
    create: XOR<MessageSeenCreateWithoutUserInput, MessageSeenUncheckedCreateWithoutUserInput>
  }

  export type MessageSeenCreateManyUserInputEnvelope = {
    data: Enumerable<MessageSeenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SkillCreateWithoutUserInput = {
    slug: string
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: number
    slug: string
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type JamCreateWithoutHostInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    attending?: UserCreateNestedManyWithoutAttendingInput
    checkedIn?: UserCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateWithoutHostInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    attending?: UserUncheckedCreateNestedManyWithoutAttendingInput
    checkedIn?: UserUncheckedCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationUncheckedCreateNestedManyWithoutJamInput
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamCreateOrConnectWithoutHostInput = {
    where: JamWhereUniqueInput
    create: XOR<JamCreateWithoutHostInput, JamUncheckedCreateWithoutHostInput>
  }

  export type JamCreateManyHostInputEnvelope = {
    data: Enumerable<JamCreateManyHostInput>
    skipDuplicates?: boolean
  }

  export type FriendShipUpsertWithWhereUniqueWithoutBefrienderInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutBefrienderInput, FriendShipUncheckedUpdateWithoutBefrienderInput>
    create: XOR<FriendShipCreateWithoutBefrienderInput, FriendShipUncheckedCreateWithoutBefrienderInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutBefrienderInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutBefrienderInput, FriendShipUncheckedUpdateWithoutBefrienderInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutBefrienderInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutBefrienderInput>
  }

  export type FriendShipScalarWhereInput = {
    AND?: Enumerable<FriendShipScalarWhereInput>
    OR?: Enumerable<FriendShipScalarWhereInput>
    NOT?: Enumerable<FriendShipScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    befrienderId?: IntFilter | number
    befriendeeId?: IntFilter | number
  }

  export type FriendShipUpsertWithWhereUniqueWithoutBefriendeeInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutBefriendeeInput, FriendShipUncheckedUpdateWithoutBefriendeeInput>
    create: XOR<FriendShipCreateWithoutBefriendeeInput, FriendShipUncheckedCreateWithoutBefriendeeInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutBefriendeeInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutBefriendeeInput, FriendShipUncheckedUpdateWithoutBefriendeeInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutBefriendeeInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutBefriendeeInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutReviewerInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutReviewerInput, FeedbackUncheckedUpdateWithoutReviewerInput>
    create: XOR<FeedbackCreateWithoutReviewerInput, FeedbackUncheckedCreateWithoutReviewerInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutReviewerInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutReviewerInput, FeedbackUncheckedUpdateWithoutReviewerInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutReviewerInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutReviewerInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: Enumerable<FeedbackScalarWhereInput>
    OR?: Enumerable<FeedbackScalarWhereInput>
    NOT?: Enumerable<FeedbackScalarWhereInput>
    id?: IntFilter | number
    reviewerId?: IntFilter | number
    revieweeId?: IntFilter | number
    approved?: BoolFilter | boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutRevieweeInput, FeedbackUncheckedUpdateWithoutRevieweeInput>
    create: XOR<FeedbackCreateWithoutRevieweeInput, FeedbackUncheckedCreateWithoutRevieweeInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutRevieweeInput, FeedbackUncheckedUpdateWithoutRevieweeInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutRevieweeInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type JamInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: JamInvitationWhereUniqueInput
    update: XOR<JamInvitationUpdateWithoutInviterInput, JamInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<JamInvitationCreateWithoutInviterInput, JamInvitationUncheckedCreateWithoutInviterInput>
  }

  export type JamInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: JamInvitationWhereUniqueInput
    data: XOR<JamInvitationUpdateWithoutInviterInput, JamInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type JamInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: JamInvitationScalarWhereInput
    data: XOR<JamInvitationUpdateManyMutationInput, JamInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type JamInvitationScalarWhereInput = {
    AND?: Enumerable<JamInvitationScalarWhereInput>
    OR?: Enumerable<JamInvitationScalarWhereInput>
    NOT?: Enumerable<JamInvitationScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    jamId?: IntFilter | number
    inviteeId?: IntFilter | number
    inviterId?: IntFilter | number
  }

  export type JamInvitationUpsertWithWhereUniqueWithoutInviteeInput = {
    where: JamInvitationWhereUniqueInput
    update: XOR<JamInvitationUpdateWithoutInviteeInput, JamInvitationUncheckedUpdateWithoutInviteeInput>
    create: XOR<JamInvitationCreateWithoutInviteeInput, JamInvitationUncheckedCreateWithoutInviteeInput>
  }

  export type JamInvitationUpdateWithWhereUniqueWithoutInviteeInput = {
    where: JamInvitationWhereUniqueInput
    data: XOR<JamInvitationUpdateWithoutInviteeInput, JamInvitationUncheckedUpdateWithoutInviteeInput>
  }

  export type JamInvitationUpdateManyWithWhereWithoutInviteeInput = {
    where: JamInvitationScalarWhereInput
    data: XOR<JamInvitationUpdateManyMutationInput, JamInvitationUncheckedUpdateManyWithoutInviteeInput>
  }

  export type JamUpsertWithWhereUniqueWithoutCheckedInInput = {
    where: JamWhereUniqueInput
    update: XOR<JamUpdateWithoutCheckedInInput, JamUncheckedUpdateWithoutCheckedInInput>
    create: XOR<JamCreateWithoutCheckedInInput, JamUncheckedCreateWithoutCheckedInInput>
  }

  export type JamUpdateWithWhereUniqueWithoutCheckedInInput = {
    where: JamWhereUniqueInput
    data: XOR<JamUpdateWithoutCheckedInInput, JamUncheckedUpdateWithoutCheckedInInput>
  }

  export type JamUpdateManyWithWhereWithoutCheckedInInput = {
    where: JamScalarWhereInput
    data: XOR<JamUpdateManyMutationInput, JamUncheckedUpdateManyWithoutCheckedInInput>
  }

  export type JamScalarWhereInput = {
    AND?: Enumerable<JamScalarWhereInput>
    OR?: Enumerable<JamScalarWhereInput>
    NOT?: Enumerable<JamScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    address?: StringNullableFilter | string | null
    name?: StringFilter | string
    description?: StringFilter | string
    image?: StringNullableFilter | string | null
    startDate?: DateTimeFilter | Date | string
    endDate?: DateTimeFilter | Date | string
    jamType?: EnumJamTypeFilter | JamType
    hostId?: IntFilter | number
  }

  export type JamUpsertWithWhereUniqueWithoutAttendingInput = {
    where: JamWhereUniqueInput
    update: XOR<JamUpdateWithoutAttendingInput, JamUncheckedUpdateWithoutAttendingInput>
    create: XOR<JamCreateWithoutAttendingInput, JamUncheckedCreateWithoutAttendingInput>
  }

  export type JamUpdateWithWhereUniqueWithoutAttendingInput = {
    where: JamWhereUniqueInput
    data: XOR<JamUpdateWithoutAttendingInput, JamUncheckedUpdateWithoutAttendingInput>
  }

  export type JamUpdateManyWithWhereWithoutAttendingInput = {
    where: JamScalarWhereInput
    data: XOR<JamUpdateManyMutationInput, JamUncheckedUpdateManyWithoutAttendingInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: Enumerable<NotificationScalarWhereInput>
    OR?: Enumerable<NotificationScalarWhereInput>
    NOT?: Enumerable<NotificationScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    notificationType?: EnumNotificationTypeFilter | NotificationType
    data?: JsonFilter
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    message?: StringFilter | string
    authorId?: IntFilter | number
  }

  export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
  }

  export type MessageUpdateManyWithWhereWithoutAuthorInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    friendShipId?: IntFilter | number
    authorId?: IntFilter | number
  }

  export type MessageSeenUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageSeenWhereUniqueInput
    update: XOR<MessageSeenUpdateWithoutUserInput, MessageSeenUncheckedUpdateWithoutUserInput>
    create: XOR<MessageSeenCreateWithoutUserInput, MessageSeenUncheckedCreateWithoutUserInput>
  }

  export type MessageSeenUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageSeenWhereUniqueInput
    data: XOR<MessageSeenUpdateWithoutUserInput, MessageSeenUncheckedUpdateWithoutUserInput>
  }

  export type MessageSeenUpdateManyWithWhereWithoutUserInput = {
    where: MessageSeenScalarWhereInput
    data: XOR<MessageSeenUpdateManyMutationInput, MessageSeenUncheckedUpdateManyWithoutMessagesSeenInput>
  }

  export type MessageSeenScalarWhereInput = {
    AND?: Enumerable<MessageSeenScalarWhereInput>
    OR?: Enumerable<MessageSeenScalarWhereInput>
    NOT?: Enumerable<MessageSeenScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutSkillsInput>
  }

  export type SkillScalarWhereInput = {
    AND?: Enumerable<SkillScalarWhereInput>
    OR?: Enumerable<SkillScalarWhereInput>
    NOT?: Enumerable<SkillScalarWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
  }

  export type JamUpsertWithWhereUniqueWithoutHostInput = {
    where: JamWhereUniqueInput
    update: XOR<JamUpdateWithoutHostInput, JamUncheckedUpdateWithoutHostInput>
    create: XOR<JamCreateWithoutHostInput, JamUncheckedCreateWithoutHostInput>
  }

  export type JamUpdateWithWhereUniqueWithoutHostInput = {
    where: JamWhereUniqueInput
    data: XOR<JamUpdateWithoutHostInput, JamUncheckedUpdateWithoutHostInput>
  }

  export type JamUpdateManyWithWhereWithoutHostInput = {
    where: JamScalarWhereInput
    data: XOR<JamUpdateManyMutationInput, JamUncheckedUpdateManyWithoutJamsHostingInput>
  }

  export type UserCreateWithoutJamsHostingInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJamsHostingInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJamsHostingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJamsHostingInput, UserUncheckedCreateWithoutJamsHostingInput>
  }

  export type UserCreateWithoutAttendingInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutAttendingInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutAttendingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
  }

  export type UserCreateWithoutCheckedInInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutCheckedInInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutCheckedInInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckedInInput, UserUncheckedCreateWithoutCheckedInInput>
  }

  export type JamInvitationCreateWithoutJamInput = {
    createdAt?: Date | string
    invitee: UserCreateNestedOneWithoutInviteeInput
    inviter: UserCreateNestedOneWithoutInviterInput
  }

  export type JamInvitationUncheckedCreateWithoutJamInput = {
    id?: number
    createdAt?: Date | string
    inviteeId: number
    inviterId: number
  }

  export type JamInvitationCreateOrConnectWithoutJamInput = {
    where: JamInvitationWhereUniqueInput
    create: XOR<JamInvitationCreateWithoutJamInput, JamInvitationUncheckedCreateWithoutJamInput>
  }

  export type JamInvitationCreateManyJamInputEnvelope = {
    data: Enumerable<JamInvitationCreateManyJamInput>
    skipDuplicates?: boolean
  }

  export type JamGenresCreateWithoutJamInput = {
    genre: GenreCreateNestedOneWithoutJamGenresInput
  }

  export type JamGenresUncheckedCreateWithoutJamInput = {
    id?: number
    genreId: string
  }

  export type JamGenresCreateOrConnectWithoutJamInput = {
    where: JamGenresWhereUniqueInput
    create: XOR<JamGenresCreateWithoutJamInput, JamGenresUncheckedCreateWithoutJamInput>
  }

  export type JamGenresCreateManyJamInputEnvelope = {
    data: Enumerable<JamGenresCreateManyJamInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJamsHostingInput = {
    update: XOR<UserUpdateWithoutJamsHostingInput, UserUncheckedUpdateWithoutJamsHostingInput>
    create: XOR<UserCreateWithoutJamsHostingInput, UserUncheckedCreateWithoutJamsHostingInput>
  }

  export type UserUpdateWithoutJamsHostingInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJamsHostingInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutAttendingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAttendingInput, UserUncheckedUpdateWithoutAttendingInput>
    create: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAttendingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAttendingInput, UserUncheckedUpdateWithoutAttendingInput>
  }

  export type UserUpdateManyWithWhereWithoutAttendingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAttendingInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    login?: StringFilter | string
    password?: StringFilter | string
    displayName?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
    roomId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCheckedInInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCheckedInInput, UserUncheckedUpdateWithoutCheckedInInput>
    create: XOR<UserCreateWithoutCheckedInInput, UserUncheckedCreateWithoutCheckedInInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCheckedInInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCheckedInInput, UserUncheckedUpdateWithoutCheckedInInput>
  }

  export type UserUpdateManyWithWhereWithoutCheckedInInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCheckedInInput>
  }

  export type JamInvitationUpsertWithWhereUniqueWithoutJamInput = {
    where: JamInvitationWhereUniqueInput
    update: XOR<JamInvitationUpdateWithoutJamInput, JamInvitationUncheckedUpdateWithoutJamInput>
    create: XOR<JamInvitationCreateWithoutJamInput, JamInvitationUncheckedCreateWithoutJamInput>
  }

  export type JamInvitationUpdateWithWhereUniqueWithoutJamInput = {
    where: JamInvitationWhereUniqueInput
    data: XOR<JamInvitationUpdateWithoutJamInput, JamInvitationUncheckedUpdateWithoutJamInput>
  }

  export type JamInvitationUpdateManyWithWhereWithoutJamInput = {
    where: JamInvitationScalarWhereInput
    data: XOR<JamInvitationUpdateManyMutationInput, JamInvitationUncheckedUpdateManyWithoutInvitedInput>
  }

  export type JamGenresUpsertWithWhereUniqueWithoutJamInput = {
    where: JamGenresWhereUniqueInput
    update: XOR<JamGenresUpdateWithoutJamInput, JamGenresUncheckedUpdateWithoutJamInput>
    create: XOR<JamGenresCreateWithoutJamInput, JamGenresUncheckedCreateWithoutJamInput>
  }

  export type JamGenresUpdateWithWhereUniqueWithoutJamInput = {
    where: JamGenresWhereUniqueInput
    data: XOR<JamGenresUpdateWithoutJamInput, JamGenresUncheckedUpdateWithoutJamInput>
  }

  export type JamGenresUpdateManyWithWhereWithoutJamInput = {
    where: JamGenresScalarWhereInput
    data: XOR<JamGenresUpdateManyMutationInput, JamGenresUncheckedUpdateManyWithoutJamGenresInput>
  }

  export type JamGenresScalarWhereInput = {
    AND?: Enumerable<JamGenresScalarWhereInput>
    OR?: Enumerable<JamGenresScalarWhereInput>
    NOT?: Enumerable<JamGenresScalarWhereInput>
    id?: IntFilter | number
    jamId?: IntFilter | number
    genreId?: StringFilter | string
  }

  export type JamCreateWithoutJamGenresInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    host: UserCreateNestedOneWithoutJamsHostingInput
    attending?: UserCreateNestedManyWithoutAttendingInput
    checkedIn?: UserCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateWithoutJamGenresInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
    attending?: UserUncheckedCreateNestedManyWithoutAttendingInput
    checkedIn?: UserUncheckedCreateNestedManyWithoutCheckedInInput
    invited?: JamInvitationUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamCreateOrConnectWithoutJamGenresInput = {
    where: JamWhereUniqueInput
    create: XOR<JamCreateWithoutJamGenresInput, JamUncheckedCreateWithoutJamGenresInput>
  }

  export type GenreCreateWithoutJamGenresInput = {
    id: string
  }

  export type GenreUncheckedCreateWithoutJamGenresInput = {
    id: string
  }

  export type GenreCreateOrConnectWithoutJamGenresInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutJamGenresInput, GenreUncheckedCreateWithoutJamGenresInput>
  }

  export type JamUpsertWithoutJamGenresInput = {
    update: XOR<JamUpdateWithoutJamGenresInput, JamUncheckedUpdateWithoutJamGenresInput>
    create: XOR<JamCreateWithoutJamGenresInput, JamUncheckedCreateWithoutJamGenresInput>
  }

  export type JamUpdateWithoutJamGenresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    host?: UserUpdateOneRequiredWithoutJamsHostingNestedInput
    attending?: UserUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateWithoutJamGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
    attending?: UserUncheckedUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUncheckedUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUncheckedUpdateManyWithoutJamNestedInput
  }

  export type GenreUpsertWithoutJamGenresInput = {
    update: XOR<GenreUpdateWithoutJamGenresInput, GenreUncheckedUpdateWithoutJamGenresInput>
    create: XOR<GenreCreateWithoutJamGenresInput, GenreUncheckedCreateWithoutJamGenresInput>
  }

  export type GenreUpdateWithoutJamGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutJamGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReviewerInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutReviewerInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutReviewerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
  }

  export type UserCreateWithoutRevieweeInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutRevieweeInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutRevieweeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRevieweeInput, UserUncheckedCreateWithoutRevieweeInput>
  }

  export type UserUpsertWithoutReviewerInput = {
    update: XOR<UserUpdateWithoutReviewerInput, UserUncheckedUpdateWithoutReviewerInput>
    create: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
  }

  export type UserUpdateWithoutReviewerInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUpsertWithoutRevieweeInput = {
    update: XOR<UserUpdateWithoutRevieweeInput, UserUncheckedUpdateWithoutRevieweeInput>
    create: XOR<UserCreateWithoutRevieweeInput, UserUncheckedCreateWithoutRevieweeInput>
  }

  export type UserUpdateWithoutRevieweeInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutRevieweeInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type JamCreateWithoutInvitedInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    host: UserCreateNestedOneWithoutJamsHostingInput
    attending?: UserCreateNestedManyWithoutAttendingInput
    checkedIn?: UserCreateNestedManyWithoutCheckedInInput
    jamGenres?: JamGenresCreateNestedManyWithoutJamInput
  }

  export type JamUncheckedCreateWithoutInvitedInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
    hostId: number
    attending?: UserUncheckedCreateNestedManyWithoutAttendingInput
    checkedIn?: UserUncheckedCreateNestedManyWithoutCheckedInInput
    jamGenres?: JamGenresUncheckedCreateNestedManyWithoutJamInput
  }

  export type JamCreateOrConnectWithoutInvitedInput = {
    where: JamWhereUniqueInput
    create: XOR<JamCreateWithoutInvitedInput, JamUncheckedCreateWithoutInvitedInput>
  }

  export type UserCreateWithoutInviteeInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutInviteeInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutInviteeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
  }

  export type UserCreateWithoutInviterInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutInviterInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutInviterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
  }

  export type JamUpsertWithoutInvitedInput = {
    update: XOR<JamUpdateWithoutInvitedInput, JamUncheckedUpdateWithoutInvitedInput>
    create: XOR<JamCreateWithoutInvitedInput, JamUncheckedCreateWithoutInvitedInput>
  }

  export type JamUpdateWithoutInvitedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    host?: UserUpdateOneRequiredWithoutJamsHostingNestedInput
    attending?: UserUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUpdateManyWithoutCheckedInNestedInput
    jamGenres?: JamGenresUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateWithoutInvitedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
    attending?: UserUncheckedUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUncheckedUpdateManyWithoutCheckedInNestedInput
    jamGenres?: JamGenresUncheckedUpdateManyWithoutJamNestedInput
  }

  export type UserUpsertWithoutInviteeInput = {
    update: XOR<UserUpdateWithoutInviteeInput, UserUncheckedUpdateWithoutInviteeInput>
    create: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
  }

  export type UserUpdateWithoutInviteeInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUpsertWithoutInviterInput = {
    update: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
  }

  export type UserUpdateWithoutInviterInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateWithoutBefrienderInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutBefrienderInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutBefrienderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBefrienderInput, UserUncheckedCreateWithoutBefrienderInput>
  }

  export type UserCreateWithoutBefriendeeInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutBefriendeeInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutBefriendeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBefriendeeInput, UserUncheckedCreateWithoutBefriendeeInput>
  }

  export type MessageCreateWithoutFriendshipInput = {
    message: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutFriendshipInput = {
    id?: number
    message: string
    createdAt?: Date | string
    authorId: number
  }

  export type MessageCreateOrConnectWithoutFriendshipInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFriendshipInput, MessageUncheckedCreateWithoutFriendshipInput>
  }

  export type MessageCreateManyFriendshipInputEnvelope = {
    data: Enumerable<MessageCreateManyFriendshipInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBefrienderInput = {
    update: XOR<UserUpdateWithoutBefrienderInput, UserUncheckedUpdateWithoutBefrienderInput>
    create: XOR<UserCreateWithoutBefrienderInput, UserUncheckedCreateWithoutBefrienderInput>
  }

  export type UserUpdateWithoutBefrienderInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutBefrienderInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUpsertWithoutBefriendeeInput = {
    update: XOR<UserUpdateWithoutBefriendeeInput, UserUncheckedUpdateWithoutBefriendeeInput>
    create: XOR<UserCreateWithoutBefriendeeInput, UserUncheckedCreateWithoutBefriendeeInput>
  }

  export type UserUpdateWithoutBefriendeeInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutBefriendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutFriendshipInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFriendshipInput, MessageUncheckedUpdateWithoutFriendshipInput>
    create: XOR<MessageCreateWithoutFriendshipInput, MessageUncheckedCreateWithoutFriendshipInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFriendshipInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFriendshipInput, MessageUncheckedUpdateWithoutFriendshipInput>
  }

  export type MessageUpdateManyWithWhereWithoutFriendshipInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessageInput>
  }

  export type JamGenresCreateWithoutGenreInput = {
    jam: JamCreateNestedOneWithoutJamGenresInput
  }

  export type JamGenresUncheckedCreateWithoutGenreInput = {
    id?: number
    jamId: number
  }

  export type JamGenresCreateOrConnectWithoutGenreInput = {
    where: JamGenresWhereUniqueInput
    create: XOR<JamGenresCreateWithoutGenreInput, JamGenresUncheckedCreateWithoutGenreInput>
  }

  export type JamGenresCreateManyGenreInputEnvelope = {
    data: Enumerable<JamGenresCreateManyGenreInput>
    skipDuplicates?: boolean
  }

  export type JamGenresUpsertWithWhereUniqueWithoutGenreInput = {
    where: JamGenresWhereUniqueInput
    update: XOR<JamGenresUpdateWithoutGenreInput, JamGenresUncheckedUpdateWithoutGenreInput>
    create: XOR<JamGenresCreateWithoutGenreInput, JamGenresUncheckedCreateWithoutGenreInput>
  }

  export type JamGenresUpdateWithWhereUniqueWithoutGenreInput = {
    where: JamGenresWhereUniqueInput
    data: XOR<JamGenresUpdateWithoutGenreInput, JamGenresUncheckedUpdateWithoutGenreInput>
  }

  export type JamGenresUpdateManyWithWhereWithoutGenreInput = {
    where: JamGenresScalarWhereInput
    data: XOR<JamGenresUpdateManyMutationInput, JamGenresUncheckedUpdateManyWithoutJamGenresInput>
  }

  export type UserCreateWithoutSkillsInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSkillsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSkillsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateManyWithWhereWithoutSkillsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type FriendShipCreateWithoutMessageInput = {
    createdAt?: Date | string
    befriender: UserCreateNestedOneWithoutBefrienderInput
    befriendee: UserCreateNestedOneWithoutBefriendeeInput
  }

  export type FriendShipUncheckedCreateWithoutMessageInput = {
    id?: number
    createdAt?: Date | string
    befrienderId: number
    befriendeeId: number
  }

  export type FriendShipCreateOrConnectWithoutMessageInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutMessageInput, FriendShipUncheckedCreateWithoutMessageInput>
  }

  export type UserCreateWithoutMessagesInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenCreateNestedManyWithoutUserInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messagesSeen?: MessageSeenUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type FriendShipUpsertWithoutMessageInput = {
    update: XOR<FriendShipUpdateWithoutMessageInput, FriendShipUncheckedUpdateWithoutMessageInput>
    create: XOR<FriendShipCreateWithoutMessageInput, FriendShipUncheckedCreateWithoutMessageInput>
  }

  export type FriendShipUpdateWithoutMessageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: UserUpdateOneRequiredWithoutBefrienderNestedInput
    befriendee?: UserUpdateOneRequiredWithoutBefriendeeNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befrienderId?: IntFieldUpdateOperationsInput | number
    befriendeeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateWithoutMessagesSeenInput = {
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationCreateNestedManyWithoutInviteeInput
    checkedIn?: JamCreateNestedManyWithoutCheckedInInput
    attending?: JamCreateNestedManyWithoutAttendingInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    skills?: SkillCreateNestedManyWithoutUserInput
    jamsHosting?: JamCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutMessagesSeenInput = {
    id?: number
    login: string
    password: string
    displayName?: string | null
    avatar?: string | null
    role?: Role
    roomId?: string
    createdAt?: Date | string
    befriender?: FriendShipUncheckedCreateNestedManyWithoutBefrienderInput
    befriendee?: FriendShipUncheckedCreateNestedManyWithoutBefriendeeInput
    reviewer?: FeedbackUncheckedCreateNestedManyWithoutReviewerInput
    reviewee?: FeedbackUncheckedCreateNestedManyWithoutRevieweeInput
    inviter?: JamInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitee?: JamInvitationUncheckedCreateNestedManyWithoutInviteeInput
    checkedIn?: JamUncheckedCreateNestedManyWithoutCheckedInInput
    attending?: JamUncheckedCreateNestedManyWithoutAttendingInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    jamsHosting?: JamUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutMessagesSeenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSeenInput, UserUncheckedCreateWithoutMessagesSeenInput>
  }

  export type UserUpsertWithoutMessagesSeenInput = {
    update: XOR<UserUpdateWithoutMessagesSeenInput, UserUncheckedUpdateWithoutMessagesSeenInput>
    create: XOR<UserCreateWithoutMessagesSeenInput, UserUncheckedCreateWithoutMessagesSeenInput>
  }

  export type UserUpdateWithoutMessagesSeenInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSeenInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type FriendShipCreateManyBefrienderInput = {
    id?: number
    createdAt?: Date | string
    befriendeeId: number
  }

  export type FriendShipCreateManyBefriendeeInput = {
    id?: number
    createdAt?: Date | string
    befrienderId: number
  }

  export type FeedbackCreateManyReviewerInput = {
    id?: number
    revieweeId: number
    approved: boolean
  }

  export type FeedbackCreateManyRevieweeInput = {
    id?: number
    reviewerId: number
    approved: boolean
  }

  export type JamInvitationCreateManyInviterInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviteeId: number
  }

  export type JamInvitationCreateManyInviteeInput = {
    id?: number
    createdAt?: Date | string
    jamId: number
    inviterId: number
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    notificationType: NotificationType
    data: JsonNullValueInput | InputJsonValue
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    message: string
  }

  export type MessageCreateManyAuthorInput = {
    id?: number
    message: string
    createdAt?: Date | string
    friendShipId: number
  }

  export type MessageSeenCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
  }

  export type JamCreateManyHostInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    name: string
    description: string
    image?: string | null
    startDate: Date | string
    endDate: Date | string
    jamType?: JamType
  }

  export type FriendShipUpdateWithoutBefrienderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriendee?: UserUpdateOneRequiredWithoutBefriendeeNestedInput
    Message?: MessageUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutBefrienderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriendeeId?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipUncheckedUpdateManyWithoutBefrienderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriendeeId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUpdateWithoutBefriendeeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: UserUpdateOneRequiredWithoutBefrienderNestedInput
    Message?: MessageUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutBefriendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befrienderId?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutFriendshipNestedInput
  }

  export type FriendShipUncheckedUpdateManyWithoutBefriendeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befrienderId?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackUpdateWithoutReviewerInput = {
    reviewee?: UserUpdateOneRequiredWithoutRevieweeNestedInput
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    revieweeId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    revieweeId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUpdateWithoutRevieweeInput = {
    reviewer?: UserUpdateOneRequiredWithoutReviewerNestedInput
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateWithoutRevieweeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUncheckedUpdateManyWithoutRevieweeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerId?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JamInvitationUpdateWithoutInviterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: JamUpdateOneRequiredWithoutInvitedNestedInput
    invitee?: UserUpdateOneRequiredWithoutInviteeNestedInput
  }

  export type JamInvitationUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
  }

  export type JamInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
  }

  export type JamInvitationUpdateWithoutInviteeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: JamUpdateOneRequiredWithoutInvitedNestedInput
    inviter?: UserUpdateOneRequiredWithoutInviterNestedInput
  }

  export type JamInvitationUncheckedUpdateWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type JamInvitationUncheckedUpdateManyWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jamId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type JamUpdateWithoutCheckedInInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    host?: UserUpdateOneRequiredWithoutJamsHostingNestedInput
    attending?: UserUpdateManyWithoutAttendingNestedInput
    invited?: JamInvitationUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateWithoutCheckedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
    attending?: UserUncheckedUpdateManyWithoutAttendingNestedInput
    invited?: JamInvitationUncheckedUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUncheckedUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateManyWithoutCheckedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type JamUpdateWithoutAttendingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    host?: UserUpdateOneRequiredWithoutJamsHostingNestedInput
    checkedIn?: UserUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateWithoutAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
    checkedIn?: UserUncheckedUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUncheckedUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUncheckedUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateManyWithoutAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationType?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    data?: JsonNullValueInput | InputJsonValue
  }

  export type PostUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutAuthorInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendship?: FriendShipUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendShipId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendShipId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageSeenUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenUncheckedUpdateManyWithoutMessagesSeenInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpdateWithoutUserInput = {
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type JamUpdateWithoutHostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    attending?: UserUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
    attending?: UserUncheckedUpdateManyWithoutAttendingNestedInput
    checkedIn?: UserUncheckedUpdateManyWithoutCheckedInNestedInput
    invited?: JamInvitationUncheckedUpdateManyWithoutJamNestedInput
    jamGenres?: JamGenresUncheckedUpdateManyWithoutJamNestedInput
  }

  export type JamUncheckedUpdateManyWithoutJamsHostingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jamType?: EnumJamTypeFieldUpdateOperationsInput | JamType
  }

  export type JamInvitationCreateManyJamInput = {
    id?: number
    createdAt?: Date | string
    inviteeId: number
    inviterId: number
  }

  export type JamGenresCreateManyJamInput = {
    id?: number
    genreId: string
  }

  export type UserUpdateWithoutAttendingInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCheckedInInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    skills?: SkillUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCheckedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JamInvitationUpdateWithoutJamInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitee?: UserUpdateOneRequiredWithoutInviteeNestedInput
    inviter?: UserUpdateOneRequiredWithoutInviterNestedInput
  }

  export type JamInvitationUncheckedUpdateWithoutJamInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteeId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type JamInvitationUncheckedUpdateManyWithoutInvitedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteeId?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
  }

  export type JamGenresUpdateWithoutJamInput = {
    genre?: GenreUpdateOneRequiredWithoutJamGenresNestedInput
  }

  export type JamGenresUncheckedUpdateWithoutJamInput = {
    id?: IntFieldUpdateOperationsInput | number
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type JamGenresUncheckedUpdateManyWithoutJamGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyFriendshipInput = {
    id?: number
    message: string
    createdAt?: Date | string
    authorId: number
  }

  export type MessageUpdateWithoutFriendshipInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutFriendshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type JamGenresCreateManyGenreInput = {
    id?: number
    jamId: number
  }

  export type JamGenresUpdateWithoutGenreInput = {
    jam?: JamUpdateOneRequiredWithoutJamGenresNestedInput
  }

  export type JamGenresUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    jamId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutSkillsInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUpdateManyWithoutCheckedInNestedInput
    attending?: JamUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    befriender?: FriendShipUncheckedUpdateManyWithoutBefrienderNestedInput
    befriendee?: FriendShipUncheckedUpdateManyWithoutBefriendeeNestedInput
    reviewer?: FeedbackUncheckedUpdateManyWithoutReviewerNestedInput
    reviewee?: FeedbackUncheckedUpdateManyWithoutRevieweeNestedInput
    inviter?: JamInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: JamInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    checkedIn?: JamUncheckedUpdateManyWithoutCheckedInNestedInput
    attending?: JamUncheckedUpdateManyWithoutAttendingNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    messagesSeen?: MessageSeenUncheckedUpdateManyWithoutUserNestedInput
    jamsHosting?: JamUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}