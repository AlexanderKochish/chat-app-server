/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Profile
 *
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model ChatRoom
 *
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model RoomMembers
 *
 */
export type RoomMembers = $Result.DefaultSelection<Prisma.$RoomMembersPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const RoomRole: {
    MEMBER: 'MEMBER';
    ADMIN: 'ADMIN';
    OWNER: 'OWNER';
  };

  export type RoomRole = (typeof RoomRole)[keyof typeof RoomRole];
}

export type RoomRole = $Enums.RoomRole;

export const RoomRole: typeof $Enums.RoomRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ChatRooms
   * const chatRooms = await prisma.chatRoom.findMany()
   * ```
   */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMembers`: Exposes CRUD operations for the **RoomMembers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RoomMembers
   * const roomMembers = await prisma.roomMembers.findMany()
   * ```
   */
  get roomMembers(): Prisma.RoomMembersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Profile: 'Profile';
    User: 'User';
    ChatRoom: 'ChatRoom';
    Message: 'Message';
    RoomMembers: 'RoomMembers';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'profile' | 'user' | 'chatRoom' | 'message' | 'roomMembers';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>;
        fields: Prisma.ProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>;
        fields: Prisma.ChatRoomFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[];
          };
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[];
          };
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[];
          };
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
          };
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChatRoom>;
          };
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChatRoomGroupByOutputType>[];
          };
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>;
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      RoomMembers: {
        payload: Prisma.$RoomMembersPayload<ExtArgs>;
        fields: Prisma.RoomMembersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RoomMembersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RoomMembersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          findFirst: {
            args: Prisma.RoomMembersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RoomMembersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          findMany: {
            args: Prisma.RoomMembersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>[];
          };
          create: {
            args: Prisma.RoomMembersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          createMany: {
            args: Prisma.RoomMembersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RoomMembersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>[];
          };
          delete: {
            args: Prisma.RoomMembersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          update: {
            args: Prisma.RoomMembersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          deleteMany: {
            args: Prisma.RoomMembersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RoomMembersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RoomMembersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>[];
          };
          upsert: {
            args: Prisma.RoomMembersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RoomMembersPayload>;
          };
          aggregate: {
            args: Prisma.RoomMembersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRoomMembers>;
          };
          groupBy: {
            args: Prisma.RoomMembersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoomMembersGroupByOutputType>[];
          };
          count: {
            args: Prisma.RoomMembersCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RoomMembersCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit;
    user?: UserOmit;
    chatRoom?: ChatRoomOmit;
    message?: MessageOmit;
    roomMembers?: RoomMembersOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messages: number;
    members: number;
    createdRooms: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    members?: boolean | UserCountOutputTypeCountMembersArgs;
    createdRooms?: boolean | UserCountOutputTypeCountCreatedRoomsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RoomMembersWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoomsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChatRoomWhereInput;
  };

  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    members: number;
    message: number;
  };

  export type ChatRoomCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | ChatRoomCountOutputTypeCountMembersArgs;
    message?: boolean | ChatRoomCountOutputTypeCountMessageArgs;
  };

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RoomMembersWhereInput;
  };

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    bgImage: string | null;
    bio: string | null;
    userId: string | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    bgImage: string | null;
    bio: string | null;
    userId: string | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    bgImage: number;
    bio: number;
    userId: number;
    _all: number;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    bgImage?: true;
    bio?: true;
    userId?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    bgImage?: true;
    bio?: true;
    userId?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    bgImage?: true;
    bio?: true;
    userId?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type ProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithAggregationInput
      | ProfileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    bgImage: string | null;
    bio: string | null;
    userId: string;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      bgImage?: boolean;
      bio?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      bgImage?: boolean;
      bio?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      bgImage?: boolean;
      bio?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectScalar = {
    id?: boolean;
    bgImage?: boolean;
    bio?: boolean;
    userId?: boolean;
  };

  export type ProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'bgImage' | 'bio' | 'userId',
    ExtArgs['result']['profile']
  >;
  export type ProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Profile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        bgImage: string | null;
        bio: string | null;
        userId: string;
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$ProfilePayload, S>;

  type ProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface ProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
      meta: { name: 'Profile' };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     */
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     */
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Profile model
     */
    readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<'Profile', 'String'>;
    readonly bgImage: FieldRef<'Profile', 'String'>;
    readonly bio: FieldRef<'Profile', 'String'>;
    readonly userId: FieldRef<'Profile', 'String'>;
  }

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile create
   */
  export type ProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
  };

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
  };

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput;
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
  };

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number;
  };

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    avatar: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    avatar: string | null;
    name: string | null;
    password: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    avatar: number;
    name: number;
    password: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    avatar?: true;
    name?: true;
    password?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    avatar?: true;
    name?: true;
    password?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    avatar?: true;
    name?: true;
    password?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    avatar: string | null;
    name: string | null;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      avatar?: boolean;
      name?: boolean;
      password?: boolean;
      profile?: boolean | User$profileArgs<ExtArgs>;
      messages?: boolean | User$messagesArgs<ExtArgs>;
      members?: boolean | User$membersArgs<ExtArgs>;
      createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      avatar?: boolean;
      name?: boolean;
      password?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      avatar?: boolean;
      name?: boolean;
      password?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    avatar?: boolean;
    name?: boolean;
    password?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'avatar' | 'name' | 'password',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    profile?: boolean | User$profileArgs<ExtArgs>;
    messages?: boolean | User$messagesArgs<ExtArgs>;
    members?: boolean | User$membersArgs<ExtArgs>;
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null;
      messages: Prisma.$MessagePayload<ExtArgs>[];
      members: Prisma.$RoomMembersPayload<ExtArgs>[];
      createdRooms: Prisma.$ChatRoomPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        avatar: string | null;
        name: string | null;
        password: string;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    profile<T extends User$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$profileArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    messages<T extends User$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$messagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MessagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    members<T extends User$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RoomMembersPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdRooms<T extends User$createdRoomsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdRoomsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ChatRoomPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly avatar: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.profile
   */
  export type User$profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
  };

  /**
   * User.messages
   */
  export type User$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * User.members
   */
  export type User$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    where?: RoomMembersWhereInput;
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    cursor?: RoomMembersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RoomMembersScalarFieldEnum | RoomMembersScalarFieldEnum[];
  };

  /**
   * User.createdRooms
   */
  export type User$createdRoomsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    where?: ChatRoomWhereInput;
    orderBy?:
      | ChatRoomOrderByWithRelationInput
      | ChatRoomOrderByWithRelationInput[];
    cursor?: ChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null;
    _min: ChatRoomMinAggregateOutputType | null;
    _max: ChatRoomMaxAggregateOutputType | null;
  };

  export type ChatRoomMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    isGroup: boolean | null;
    createdAt: Date | null;
    createdById: string | null;
  };

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    isGroup: boolean | null;
    createdAt: Date | null;
    createdById: string | null;
  };

  export type ChatRoomCountAggregateOutputType = {
    id: number;
    name: number;
    isGroup: number;
    createdAt: number;
    createdById: number;
    _all: number;
  };

  export type ChatRoomMinAggregateInputType = {
    id?: true;
    name?: true;
    isGroup?: true;
    createdAt?: true;
    createdById?: true;
  };

  export type ChatRoomMaxAggregateInputType = {
    id?: true;
    name?: true;
    isGroup?: true;
    createdAt?: true;
    createdById?: true;
  };

  export type ChatRoomCountAggregateInputType = {
    id?: true;
    name?: true;
    isGroup?: true;
    createdAt?: true;
    createdById?: true;
    _all?: true;
  };

  export type ChatRoomAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?:
      | ChatRoomOrderByWithRelationInput
      | ChatRoomOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatRooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChatRooms
     **/
    _count?: true | ChatRoomCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChatRoomMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChatRoomMaxAggregateInputType;
  };

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
    [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>;
  };

  export type ChatRoomGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChatRoomWhereInput;
    orderBy?:
      | ChatRoomOrderByWithAggregationInput
      | ChatRoomOrderByWithAggregationInput[];
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum;
    having?: ChatRoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatRoomCountAggregateInputType | true;
    _min?: ChatRoomMinAggregateInputType;
    _max?: ChatRoomMaxAggregateInputType;
  };

  export type ChatRoomGroupByOutputType = {
    id: string;
    name: string | null;
    isGroup: boolean;
    createdAt: Date;
    createdById: string | null;
    _count: ChatRoomCountAggregateOutputType | null;
    _min: ChatRoomMinAggregateOutputType | null;
    _max: ChatRoomMaxAggregateOutputType | null;
  };

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ChatRoomGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ChatRoomGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>;
        }
      >
    >;

  export type ChatRoomSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      isGroup?: boolean;
      createdAt?: boolean;
      createdById?: boolean;
      createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
      members?: boolean | ChatRoom$membersArgs<ExtArgs>;
      message?: boolean | ChatRoom$messageArgs<ExtArgs>;
      _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['chatRoom']
  >;

  export type ChatRoomSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      isGroup?: boolean;
      createdAt?: boolean;
      createdById?: boolean;
      createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
    },
    ExtArgs['result']['chatRoom']
  >;

  export type ChatRoomSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      isGroup?: boolean;
      createdAt?: boolean;
      createdById?: boolean;
      createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
    },
    ExtArgs['result']['chatRoom']
  >;

  export type ChatRoomSelectScalar = {
    id?: boolean;
    name?: boolean;
    isGroup?: boolean;
    createdAt?: boolean;
    createdById?: boolean;
  };

  export type ChatRoomOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'isGroup' | 'createdAt' | 'createdById',
    ExtArgs['result']['chatRoom']
  >;
  export type ChatRoomInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
    members?: boolean | ChatRoom$membersArgs<ExtArgs>;
    message?: boolean | ChatRoom$messageArgs<ExtArgs>;
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ChatRoomIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
  };
  export type ChatRoomIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | ChatRoom$createdByArgs<ExtArgs>;
  };

  export type $ChatRoomPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ChatRoom';
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null;
      members: Prisma.$RoomMembersPayload<ExtArgs>[];
      message: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string | null;
        isGroup: boolean;
        createdAt: Date;
        createdById: string | null;
      },
      ExtArgs['result']['chatRoom']
    >;
    composites: {};
  };

  type ChatRoomGetPayload<
    S extends boolean | null | undefined | ChatRoomDefaultArgs,
  > = $Result.GetResult<Prisma.$ChatRoomPayload, S>;

  type ChatRoomCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatRoomCountAggregateInputType | true;
  };

  export interface ChatRoomDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'];
      meta: { name: 'ChatRoom' };
    };
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(
      args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(
      args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     *
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChatRoomFindManyArgs>(
      args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     *
     */
    create<T extends ChatRoomCreateArgs>(
      args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChatRoomCreateManyArgs>(
      args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     *
     */
    delete<T extends ChatRoomDeleteArgs>(
      args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChatRoomUpdateArgs>(
      args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(
      args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(
      args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(
      args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      $Result.GetResult<
        Prisma.$ChatRoomPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
     **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomAggregateArgs>(
      args: Subset<T, ChatRoomAggregateArgs>,
    ): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>;

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetChatRoomGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChatRoom model
     */
    readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    createdBy<T extends ChatRoom$createdByArgs<ExtArgs> = {}>(
      args?: Subset<T, ChatRoom$createdByArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    members<T extends ChatRoom$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, ChatRoom$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RoomMembersPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    message<T extends ChatRoom$messageArgs<ExtArgs> = {}>(
      args?: Subset<T, ChatRoom$messageArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MessagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<'ChatRoom', 'String'>;
    readonly name: FieldRef<'ChatRoom', 'String'>;
    readonly isGroup: FieldRef<'ChatRoom', 'Boolean'>;
    readonly createdAt: FieldRef<'ChatRoom', 'DateTime'>;
    readonly createdById: FieldRef<'ChatRoom', 'String'>;
  }

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput;
  };

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput;
  };

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?:
      | ChatRoomOrderByWithRelationInput
      | ChatRoomOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatRooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[];
  };

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?:
      | ChatRoomOrderByWithRelationInput
      | ChatRoomOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatRooms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[];
  };

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?:
      | ChatRoomOrderByWithRelationInput
      | ChatRoomOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatRooms.
     */
    skip?: number;
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[];
  };

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>;
  };

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>;
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput;
  };

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<
      ChatRoomUpdateManyMutationInput,
      ChatRoomUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput;
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number;
  };

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<
      ChatRoomUpdateManyMutationInput,
      ChatRoomUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput;
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput;
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>;
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>;
  };

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput;
  };

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput;
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number;
  };

  /**
   * ChatRoom.createdBy
   */
  export type ChatRoom$createdByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * ChatRoom.members
   */
  export type ChatRoom$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    where?: RoomMembersWhereInput;
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    cursor?: RoomMembersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RoomMembersScalarFieldEnum | RoomMembersScalarFieldEnum[];
  };

  /**
   * ChatRoom.message
   */
  export type ChatRoom$messageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    roomId: string | null;
    ownerId: string | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    roomId: string | null;
    ownerId: string | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    text: number;
    createdAt: number;
    updatedAt: number;
    roomId: number;
    ownerId: number;
    _all: number;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    roomId?: true;
    ownerId?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    roomId?: true;
    ownerId?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    roomId?: true;
    ownerId?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithAggregationInput
      | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    roomId: string;
    ownerId: string;
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MessageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>;
        }
      >
    >;

  export type MessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      roomId?: boolean;
      ownerId?: boolean;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      roomId?: boolean;
      ownerId?: boolean;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      text?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      roomId?: boolean;
      ownerId?: boolean;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    text?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    roomId?: boolean;
    ownerId?: boolean;
  };

  export type MessageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'text' | 'createdAt' | 'updatedAt' | 'roomId' | 'ownerId',
    ExtArgs['result']['message']
  >;
  export type MessageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Message';
    objects: {
      room: Prisma.$ChatRoomPayload<ExtArgs>;
      owner: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        text: string;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        ownerId: string;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type MessageGetPayload<
    S extends boolean | null | undefined | MessageDefaultArgs,
  > = $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Message'];
      meta: { name: 'Message' };
    };
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
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      | $Result.GetResult<
          Prisma.$ChatRoomPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>;
    readonly text: FieldRef<'Message', 'String'>;
    readonly createdAt: FieldRef<'Message', 'DateTime'>;
    readonly updatedAt: FieldRef<'Message', 'DateTime'>;
    readonly roomId: FieldRef<'Message', 'String'>;
    readonly ownerId: FieldRef<'Message', 'String'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
  };

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
    /**
     * Limit how many Messages to delete.
     */
    limit?: number;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
  };

  /**
   * Model RoomMembers
   */

  export type AggregateRoomMembers = {
    _count: RoomMembersCountAggregateOutputType | null;
    _min: RoomMembersMinAggregateOutputType | null;
    _max: RoomMembersMaxAggregateOutputType | null;
  };

  export type RoomMembersMinAggregateOutputType = {
    userId: string | null;
    roomId: string | null;
    joinedAt: Date | null;
    role: $Enums.RoomRole | null;
    isMuted: boolean | null;
    isBanned: boolean | null;
  };

  export type RoomMembersMaxAggregateOutputType = {
    userId: string | null;
    roomId: string | null;
    joinedAt: Date | null;
    role: $Enums.RoomRole | null;
    isMuted: boolean | null;
    isBanned: boolean | null;
  };

  export type RoomMembersCountAggregateOutputType = {
    userId: number;
    roomId: number;
    joinedAt: number;
    role: number;
    isMuted: number;
    isBanned: number;
    _all: number;
  };

  export type RoomMembersMinAggregateInputType = {
    userId?: true;
    roomId?: true;
    joinedAt?: true;
    role?: true;
    isMuted?: true;
    isBanned?: true;
  };

  export type RoomMembersMaxAggregateInputType = {
    userId?: true;
    roomId?: true;
    joinedAt?: true;
    role?: true;
    isMuted?: true;
    isBanned?: true;
  };

  export type RoomMembersCountAggregateInputType = {
    userId?: true;
    roomId?: true;
    joinedAt?: true;
    role?: true;
    isMuted?: true;
    isBanned?: true;
    _all?: true;
  };

  export type RoomMembersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RoomMembers to aggregate.
     */
    where?: RoomMembersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoomMembersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoomMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoomMembers
     **/
    _count?: true | RoomMembersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoomMembersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoomMembersMaxAggregateInputType;
  };

  export type GetRoomMembersAggregateType<T extends RoomMembersAggregateArgs> =
    {
      [P in keyof T & keyof AggregateRoomMembers]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateRoomMembers[P]>
        : GetScalarType<T[P], AggregateRoomMembers[P]>;
    };

  export type RoomMembersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RoomMembersWhereInput;
    orderBy?:
      | RoomMembersOrderByWithAggregationInput
      | RoomMembersOrderByWithAggregationInput[];
    by: RoomMembersScalarFieldEnum[] | RoomMembersScalarFieldEnum;
    having?: RoomMembersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomMembersCountAggregateInputType | true;
    _min?: RoomMembersMinAggregateInputType;
    _max?: RoomMembersMaxAggregateInputType;
  };

  export type RoomMembersGroupByOutputType = {
    userId: string;
    roomId: string;
    joinedAt: Date;
    role: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
    _count: RoomMembersCountAggregateOutputType | null;
    _min: RoomMembersMinAggregateOutputType | null;
    _max: RoomMembersMaxAggregateOutputType | null;
  };

  type GetRoomMembersGroupByPayload<T extends RoomMembersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RoomMembersGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof RoomMembersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMembersGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMembersGroupByOutputType[P]>;
        }
      >
    >;

  export type RoomMembersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roomId?: boolean;
      joinedAt?: boolean;
      role?: boolean;
      isMuted?: boolean;
      isBanned?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roomMembers']
  >;

  export type RoomMembersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roomId?: boolean;
      joinedAt?: boolean;
      role?: boolean;
      isMuted?: boolean;
      isBanned?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roomMembers']
  >;

  export type RoomMembersSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roomId?: boolean;
      joinedAt?: boolean;
      role?: boolean;
      isMuted?: boolean;
      isBanned?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roomMembers']
  >;

  export type RoomMembersSelectScalar = {
    userId?: boolean;
    roomId?: boolean;
    joinedAt?: boolean;
    role?: boolean;
    isMuted?: boolean;
    isBanned?: boolean;
  };

  export type RoomMembersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'roomId' | 'joinedAt' | 'role' | 'isMuted' | 'isBanned',
    ExtArgs['result']['roomMembers']
  >;
  export type RoomMembersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
  };
  export type RoomMembersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
  };
  export type RoomMembersIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>;
  };

  export type $RoomMembersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RoomMembers';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      room: Prisma.$ChatRoomPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        roomId: string;
        joinedAt: Date;
        role: $Enums.RoomRole;
        isMuted: boolean;
        isBanned: boolean;
      },
      ExtArgs['result']['roomMembers']
    >;
    composites: {};
  };

  type RoomMembersGetPayload<
    S extends boolean | null | undefined | RoomMembersDefaultArgs,
  > = $Result.GetResult<Prisma.$RoomMembersPayload, S>;

  type RoomMembersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RoomMembersFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RoomMembersCountAggregateInputType | true;
  };

  export interface RoomMembersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RoomMembers'];
      meta: { name: 'RoomMembers' };
    };
    /**
     * Find zero or one RoomMembers that matches the filter.
     * @param {RoomMembersFindUniqueArgs} args - Arguments to find a RoomMembers
     * @example
     * // Get one RoomMembers
     * const roomMembers = await prisma.roomMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMembersFindUniqueArgs>(
      args: SelectSubset<T, RoomMembersFindUniqueArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RoomMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMembersFindUniqueOrThrowArgs} args - Arguments to find a RoomMembers
     * @example
     * // Get one RoomMembers
     * const roomMembers = await prisma.roomMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMembersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RoomMembersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersFindFirstArgs} args - Arguments to find a RoomMembers
     * @example
     * // Get one RoomMembers
     * const roomMembers = await prisma.roomMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMembersFindFirstArgs>(
      args?: SelectSubset<T, RoomMembersFindFirstArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RoomMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersFindFirstOrThrowArgs} args - Arguments to find a RoomMembers
     * @example
     * // Get one RoomMembers
     * const roomMembers = await prisma.roomMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMembersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomMembersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMembers
     * const roomMembers = await prisma.roomMembers.findMany()
     *
     * // Get first 10 RoomMembers
     * const roomMembers = await prisma.roomMembers.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const roomMembersWithUserIdOnly = await prisma.roomMembers.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends RoomMembersFindManyArgs>(
      args?: SelectSubset<T, RoomMembersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RoomMembers.
     * @param {RoomMembersCreateArgs} args - Arguments to create a RoomMembers.
     * @example
     * // Create one RoomMembers
     * const RoomMembers = await prisma.roomMembers.create({
     *   data: {
     *     // ... data to create a RoomMembers
     *   }
     * })
     *
     */
    create<T extends RoomMembersCreateArgs>(
      args: SelectSubset<T, RoomMembersCreateArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RoomMembers.
     * @param {RoomMembersCreateManyArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMembers = await prisma.roomMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoomMembersCreateManyArgs>(
      args?: SelectSubset<T, RoomMembersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RoomMembers and returns the data saved in the database.
     * @param {RoomMembersCreateManyAndReturnArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMembers = await prisma.roomMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RoomMembers and only return the `userId`
     * const roomMembersWithUserIdOnly = await prisma.roomMembers.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RoomMembersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RoomMembersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RoomMembers.
     * @param {RoomMembersDeleteArgs} args - Arguments to delete one RoomMembers.
     * @example
     * // Delete one RoomMembers
     * const RoomMembers = await prisma.roomMembers.delete({
     *   where: {
     *     // ... filter to delete one RoomMembers
     *   }
     * })
     *
     */
    delete<T extends RoomMembersDeleteArgs>(
      args: SelectSubset<T, RoomMembersDeleteArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RoomMembers.
     * @param {RoomMembersUpdateArgs} args - Arguments to update one RoomMembers.
     * @example
     * // Update one RoomMembers
     * const roomMembers = await prisma.roomMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoomMembersUpdateArgs>(
      args: SelectSubset<T, RoomMembersUpdateArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RoomMembers.
     * @param {RoomMembersDeleteManyArgs} args - Arguments to filter RoomMembers to delete.
     * @example
     * // Delete a few RoomMembers
     * const { count } = await prisma.roomMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoomMembersDeleteManyArgs>(
      args?: SelectSubset<T, RoomMembersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMembers
     * const roomMembers = await prisma.roomMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoomMembersUpdateManyArgs>(
      args: SelectSubset<T, RoomMembersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RoomMembers and returns the data updated in the database.
     * @param {RoomMembersUpdateManyAndReturnArgs} args - Arguments to update many RoomMembers.
     * @example
     * // Update many RoomMembers
     * const roomMembers = await prisma.roomMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RoomMembers and only return the `userId`
     * const roomMembersWithUserIdOnly = await prisma.roomMembers.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RoomMembersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RoomMembersUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RoomMembers.
     * @param {RoomMembersUpsertArgs} args - Arguments to update or create a RoomMembers.
     * @example
     * // Update or create a RoomMembers
     * const roomMembers = await prisma.roomMembers.upsert({
     *   create: {
     *     // ... data to create a RoomMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMembers we want to update
     *   }
     * })
     */
    upsert<T extends RoomMembersUpsertArgs>(
      args: SelectSubset<T, RoomMembersUpsertArgs<ExtArgs>>,
    ): Prisma__RoomMembersClient<
      $Result.GetResult<
        Prisma.$RoomMembersPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersCountArgs} args - Arguments to filter RoomMembers to count.
     * @example
     * // Count the number of RoomMembers
     * const count = await prisma.roomMembers.count({
     *   where: {
     *     // ... the filter for the RoomMembers we want to count
     *   }
     * })
     **/
    count<T extends RoomMembersCountArgs>(
      args?: Subset<T, RoomMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMembersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomMembersAggregateArgs>(
      args: Subset<T, RoomMembersAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoomMembersAggregateType<T>>;

    /**
     * Group by RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMembersGroupByArgs} args - Group by arguments.
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
      T extends RoomMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMembersGroupByArgs['orderBy'] }
        : { orderBy?: RoomMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RoomMembersGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRoomMembersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RoomMembers model
     */
    readonly fields: RoomMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMembersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>,
    ): Prisma__ChatRoomClient<
      | $Result.GetResult<
          Prisma.$ChatRoomPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RoomMembers model
   */
  interface RoomMembersFieldRefs {
    readonly userId: FieldRef<'RoomMembers', 'String'>;
    readonly roomId: FieldRef<'RoomMembers', 'String'>;
    readonly joinedAt: FieldRef<'RoomMembers', 'DateTime'>;
    readonly role: FieldRef<'RoomMembers', 'RoomRole'>;
    readonly isMuted: FieldRef<'RoomMembers', 'Boolean'>;
    readonly isBanned: FieldRef<'RoomMembers', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * RoomMembers findUnique
   */
  export type RoomMembersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter, which RoomMembers to fetch.
     */
    where: RoomMembersWhereUniqueInput;
  };

  /**
   * RoomMembers findUniqueOrThrow
   */
  export type RoomMembersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter, which RoomMembers to fetch.
     */
    where: RoomMembersWhereUniqueInput;
  };

  /**
   * RoomMembers findFirst
   */
  export type RoomMembersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMembersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMembersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoomMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMembersScalarFieldEnum | RoomMembersScalarFieldEnum[];
  };

  /**
   * RoomMembers findFirstOrThrow
   */
  export type RoomMembersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMembersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMembersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoomMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMembersScalarFieldEnum | RoomMembersScalarFieldEnum[];
  };

  /**
   * RoomMembers findMany
   */
  export type RoomMembersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMembersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?:
      | RoomMembersOrderByWithRelationInput
      | RoomMembersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoomMembers.
     */
    cursor?: RoomMembersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoomMembers.
     */
    skip?: number;
    distinct?: RoomMembersScalarFieldEnum | RoomMembersScalarFieldEnum[];
  };

  /**
   * RoomMembers create
   */
  export type RoomMembersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * The data needed to create a RoomMembers.
     */
    data: XOR<RoomMembersCreateInput, RoomMembersUncheckedCreateInput>;
  };

  /**
   * RoomMembers createMany
   */
  export type RoomMembersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMembersCreateManyInput | RoomMembersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RoomMembers createManyAndReturn
   */
  export type RoomMembersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMembersCreateManyInput | RoomMembersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RoomMembers update
   */
  export type RoomMembersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * The data needed to update a RoomMembers.
     */
    data: XOR<RoomMembersUpdateInput, RoomMembersUncheckedUpdateInput>;
    /**
     * Choose, which RoomMembers to update.
     */
    where: RoomMembersWhereUniqueInput;
  };

  /**
   * RoomMembers updateMany
   */
  export type RoomMembersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<
      RoomMembersUpdateManyMutationInput,
      RoomMembersUncheckedUpdateManyInput
    >;
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMembersWhereInput;
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number;
  };

  /**
   * RoomMembers updateManyAndReturn
   */
  export type RoomMembersUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<
      RoomMembersUpdateManyMutationInput,
      RoomMembersUncheckedUpdateManyInput
    >;
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMembersWhereInput;
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RoomMembers upsert
   */
  export type RoomMembersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * The filter to search for the RoomMembers to update in case it exists.
     */
    where: RoomMembersWhereUniqueInput;
    /**
     * In case the RoomMembers found by the `where` argument doesn't exist, create a new RoomMembers with this data.
     */
    create: XOR<RoomMembersCreateInput, RoomMembersUncheckedCreateInput>;
    /**
     * In case the RoomMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMembersUpdateInput, RoomMembersUncheckedUpdateInput>;
  };

  /**
   * RoomMembers delete
   */
  export type RoomMembersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
    /**
     * Filter which RoomMembers to delete.
     */
    where: RoomMembersWhereUniqueInput;
  };

  /**
   * RoomMembers deleteMany
   */
  export type RoomMembersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RoomMembers to delete
     */
    where?: RoomMembersWhereInput;
    /**
     * Limit how many RoomMembers to delete.
     */
    limit?: number;
  };

  /**
   * RoomMembers without action
   */
  export type RoomMembersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoomMembers
     */
    select?: RoomMembersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoomMembers
     */
    omit?: RoomMembersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMembersInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    bgImage: 'bgImage';
    bio: 'bio';
    userId: 'userId';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    avatar: 'avatar';
    name: 'name';
    password: 'password';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ChatRoomScalarFieldEnum: {
    id: 'id';
    name: 'name';
    isGroup: 'isGroup';
    createdAt: 'createdAt';
    createdById: 'createdById';
  };

  export type ChatRoomScalarFieldEnum =
    (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    text: 'text';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    roomId: 'roomId';
    ownerId: 'ownerId';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const RoomMembersScalarFieldEnum: {
    userId: 'userId';
    roomId: 'roomId';
    joinedAt: 'joinedAt';
    role: 'role';
    isMuted: 'isMuted';
    isBanned: 'isBanned';
  };

  export type RoomMembersScalarFieldEnum =
    (typeof RoomMembersScalarFieldEnum)[keyof typeof RoomMembersScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'RoomRole'
   */
  export type EnumRoomRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RoomRole'
  >;

  /**
   * Reference to a field of type 'RoomRole[]'
   */
  export type ListEnumRoomRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RoomRole[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput | ProfileWhereInput[];
    id?: StringFilter<'Profile'> | string;
    bgImage?: StringNullableFilter<'Profile'> | string | null;
    bio?: StringNullableFilter<'Profile'> | string | null;
    userId?: StringFilter<'Profile'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder;
    bgImage?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: ProfileWhereInput | ProfileWhereInput[];
      OR?: ProfileWhereInput[];
      NOT?: ProfileWhereInput | ProfileWhereInput[];
      bgImage?: StringNullableFilter<'Profile'> | string | null;
      bio?: StringNullableFilter<'Profile'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    bgImage?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    _count?: ProfileCountOrderByAggregateInput;
    _max?: ProfileMaxOrderByAggregateInput;
    _min?: ProfileMinOrderByAggregateInput;
  };

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    OR?: ProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Profile'> | string;
    bgImage?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    bio?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    userId?: StringWithAggregatesFilter<'Profile'> | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    avatar?: StringNullableFilter<'User'> | string | null;
    name?: StringNullableFilter<'User'> | string | null;
    password?: StringFilter<'User'> | string;
    profile?: XOR<
      ProfileNullableScalarRelationFilter,
      ProfileWhereInput
    > | null;
    messages?: MessageListRelationFilter;
    members?: RoomMembersListRelationFilter;
    createdRooms?: ChatRoomListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    profile?: ProfileOrderByWithRelationInput;
    messages?: MessageOrderByRelationAggregateInput;
    members?: RoomMembersOrderByRelationAggregateInput;
    createdRooms?: ChatRoomOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      avatar?: StringNullableFilter<'User'> | string | null;
      name?: StringNullableFilter<'User'> | string | null;
      password?: StringFilter<'User'> | string;
      profile?: XOR<
        ProfileNullableScalarRelationFilter,
        ProfileWhereInput
      > | null;
      messages?: MessageListRelationFilter;
      members?: RoomMembersListRelationFilter;
      createdRooms?: ChatRoomListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    avatar?: StringNullableWithAggregatesFilter<'User'> | string | null;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    password?: StringWithAggregatesFilter<'User'> | string;
  };

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[];
    OR?: ChatRoomWhereInput[];
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[];
    id?: StringFilter<'ChatRoom'> | string;
    name?: StringNullableFilter<'ChatRoom'> | string | null;
    isGroup?: BoolFilter<'ChatRoom'> | boolean;
    createdAt?: DateTimeFilter<'ChatRoom'> | Date | string;
    createdById?: StringNullableFilter<'ChatRoom'> | string | null;
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    members?: RoomMembersListRelationFilter;
    message?: MessageListRelationFilter;
  };

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    isGroup?: SortOrder;
    createdAt?: SortOrder;
    createdById?: SortOrderInput | SortOrder;
    createdBy?: UserOrderByWithRelationInput;
    members?: RoomMembersOrderByRelationAggregateInput;
    message?: MessageOrderByRelationAggregateInput;
  };

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ChatRoomWhereInput | ChatRoomWhereInput[];
      OR?: ChatRoomWhereInput[];
      NOT?: ChatRoomWhereInput | ChatRoomWhereInput[];
      name?: StringNullableFilter<'ChatRoom'> | string | null;
      isGroup?: BoolFilter<'ChatRoom'> | boolean;
      createdAt?: DateTimeFilter<'ChatRoom'> | Date | string;
      createdById?: StringNullableFilter<'ChatRoom'> | string | null;
      createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
      members?: RoomMembersListRelationFilter;
      message?: MessageListRelationFilter;
    },
    'id'
  >;

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    isGroup?: SortOrder;
    createdAt?: SortOrder;
    createdById?: SortOrderInput | SortOrder;
    _count?: ChatRoomCountOrderByAggregateInput;
    _max?: ChatRoomMaxOrderByAggregateInput;
    _min?: ChatRoomMinOrderByAggregateInput;
  };

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?:
      | ChatRoomScalarWhereWithAggregatesInput
      | ChatRoomScalarWhereWithAggregatesInput[];
    OR?: ChatRoomScalarWhereWithAggregatesInput[];
    NOT?:
      | ChatRoomScalarWhereWithAggregatesInput
      | ChatRoomScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ChatRoom'> | string;
    name?: StringNullableWithAggregatesFilter<'ChatRoom'> | string | null;
    isGroup?: BoolWithAggregatesFilter<'ChatRoom'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'ChatRoom'> | Date | string;
    createdById?:
      | StringNullableWithAggregatesFilter<'ChatRoom'>
      | string
      | null;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: StringFilter<'Message'> | string;
    text?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    updatedAt?: DateTimeFilter<'Message'> | Date | string;
    roomId?: StringFilter<'Message'> | string;
    ownerId?: StringFilter<'Message'> | string;
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>;
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roomId?: SortOrder;
    ownerId?: SortOrder;
    room?: ChatRoomOrderByWithRelationInput;
    owner?: UserOrderByWithRelationInput;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      text?: StringFilter<'Message'> | string;
      createdAt?: DateTimeFilter<'Message'> | Date | string;
      updatedAt?: DateTimeFilter<'Message'> | Date | string;
      roomId?: StringFilter<'Message'> | string;
      ownerId?: StringFilter<'Message'> | string;
      room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>;
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roomId?: SortOrder;
    ownerId?: SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Message'> | string;
    text?: StringWithAggregatesFilter<'Message'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    roomId?: StringWithAggregatesFilter<'Message'> | string;
    ownerId?: StringWithAggregatesFilter<'Message'> | string;
  };

  export type RoomMembersWhereInput = {
    AND?: RoomMembersWhereInput | RoomMembersWhereInput[];
    OR?: RoomMembersWhereInput[];
    NOT?: RoomMembersWhereInput | RoomMembersWhereInput[];
    userId?: StringFilter<'RoomMembers'> | string;
    roomId?: StringFilter<'RoomMembers'> | string;
    joinedAt?: DateTimeFilter<'RoomMembers'> | Date | string;
    role?: EnumRoomRoleFilter<'RoomMembers'> | $Enums.RoomRole;
    isMuted?: BoolFilter<'RoomMembers'> | boolean;
    isBanned?: BoolFilter<'RoomMembers'> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>;
  };

  export type RoomMembersOrderByWithRelationInput = {
    userId?: SortOrder;
    roomId?: SortOrder;
    joinedAt?: SortOrder;
    role?: SortOrder;
    isMuted?: SortOrder;
    isBanned?: SortOrder;
    user?: UserOrderByWithRelationInput;
    room?: ChatRoomOrderByWithRelationInput;
  };

  export type RoomMembersWhereUniqueInput = Prisma.AtLeast<
    {
      userId_roomId?: RoomMembersUserIdRoomIdCompoundUniqueInput;
      AND?: RoomMembersWhereInput | RoomMembersWhereInput[];
      OR?: RoomMembersWhereInput[];
      NOT?: RoomMembersWhereInput | RoomMembersWhereInput[];
      userId?: StringFilter<'RoomMembers'> | string;
      roomId?: StringFilter<'RoomMembers'> | string;
      joinedAt?: DateTimeFilter<'RoomMembers'> | Date | string;
      role?: EnumRoomRoleFilter<'RoomMembers'> | $Enums.RoomRole;
      isMuted?: BoolFilter<'RoomMembers'> | boolean;
      isBanned?: BoolFilter<'RoomMembers'> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>;
    },
    'userId_roomId'
  >;

  export type RoomMembersOrderByWithAggregationInput = {
    userId?: SortOrder;
    roomId?: SortOrder;
    joinedAt?: SortOrder;
    role?: SortOrder;
    isMuted?: SortOrder;
    isBanned?: SortOrder;
    _count?: RoomMembersCountOrderByAggregateInput;
    _max?: RoomMembersMaxOrderByAggregateInput;
    _min?: RoomMembersMinOrderByAggregateInput;
  };

  export type RoomMembersScalarWhereWithAggregatesInput = {
    AND?:
      | RoomMembersScalarWhereWithAggregatesInput
      | RoomMembersScalarWhereWithAggregatesInput[];
    OR?: RoomMembersScalarWhereWithAggregatesInput[];
    NOT?:
      | RoomMembersScalarWhereWithAggregatesInput
      | RoomMembersScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'RoomMembers'> | string;
    roomId?: StringWithAggregatesFilter<'RoomMembers'> | string;
    joinedAt?: DateTimeWithAggregatesFilter<'RoomMembers'> | Date | string;
    role?: EnumRoomRoleWithAggregatesFilter<'RoomMembers'> | $Enums.RoomRole;
    isMuted?: BoolWithAggregatesFilter<'RoomMembers'> | boolean;
    isBanned?: BoolWithAggregatesFilter<'RoomMembers'> | boolean;
  };

  export type ProfileCreateInput = {
    id?: string;
    bgImage?: string | null;
    bio?: string | null;
    user: UserCreateNestedOneWithoutProfileInput;
  };

  export type ProfileUncheckedCreateInput = {
    id?: string;
    bgImage?: string | null;
    bio?: string | null;
    userId: string;
  };

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type ProfileCreateManyInput = {
    id?: string;
    bgImage?: string | null;
    bio?: string | null;
    userId: string;
  };

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersUncheckedCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUncheckedUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type ChatRoomCreateInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdBy?: UserCreateNestedOneWithoutCreatedRoomsInput;
    members?: RoomMembersCreateNestedManyWithoutRoomInput;
    message?: MessageCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdById?: string | null;
    members?: RoomMembersUncheckedCreateNestedManyWithoutRoomInput;
    message?: MessageUncheckedCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneWithoutCreatedRoomsNestedInput;
    members?: RoomMembersUpdateManyWithoutRoomNestedInput;
    message?: MessageUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: NullableStringFieldUpdateOperationsInput | string | null;
    members?: RoomMembersUncheckedUpdateManyWithoutRoomNestedInput;
    message?: MessageUncheckedUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomCreateManyInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdById?: string | null;
  };

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MessageCreateInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    room: ChatRoomCreateNestedOneWithoutMessageInput;
    owner: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roomId: string;
    ownerId: string;
  };

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    room?: ChatRoomUpdateOneRequiredWithoutMessageNestedInput;
    owner?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roomId?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
  };

  export type MessageCreateManyInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roomId: string;
    ownerId: string;
  };

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roomId?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
  };

  export type RoomMembersCreateInput = {
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
    user: UserCreateNestedOneWithoutMembersInput;
    room: ChatRoomCreateNestedOneWithoutMembersInput;
  };

  export type RoomMembersUncheckedCreateInput = {
    userId: string;
    roomId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type RoomMembersUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutMembersNestedInput;
    room?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type RoomMembersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    roomId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type RoomMembersCreateManyInput = {
    userId: string;
    roomId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type RoomMembersUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type RoomMembersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    roomId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    bgImage?: SortOrder;
    bio?: SortOrder;
    userId?: SortOrder;
  };

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    bgImage?: SortOrder;
    bio?: SortOrder;
    userId?: SortOrder;
  };

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    bgImage?: SortOrder;
    bio?: SortOrder;
    userId?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null;
    isNot?: ProfileWhereInput | null;
  };

  export type MessageListRelationFilter = {
    every?: MessageWhereInput;
    some?: MessageWhereInput;
    none?: MessageWhereInput;
  };

  export type RoomMembersListRelationFilter = {
    every?: RoomMembersWhereInput;
    some?: RoomMembersWhereInput;
    none?: RoomMembersWhereInput;
  };

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput;
    some?: ChatRoomWhereInput;
    none?: ChatRoomWhereInput;
  };

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoomMembersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    avatar?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    isGroup?: SortOrder;
    createdAt?: SortOrder;
    createdById?: SortOrder;
  };

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    isGroup?: SortOrder;
    createdAt?: SortOrder;
    createdById?: SortOrder;
  };

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    isGroup?: SortOrder;
    createdAt?: SortOrder;
    createdById?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput;
    isNot?: ChatRoomWhereInput;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roomId?: SortOrder;
    ownerId?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roomId?: SortOrder;
    ownerId?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roomId?: SortOrder;
    ownerId?: SortOrder;
  };

  export type EnumRoomRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomRole | EnumRoomRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoomRoleFilter<$PrismaModel> | $Enums.RoomRole;
  };

  export type RoomMembersUserIdRoomIdCompoundUniqueInput = {
    userId: string;
    roomId: string;
  };

  export type RoomMembersCountOrderByAggregateInput = {
    userId?: SortOrder;
    roomId?: SortOrder;
    joinedAt?: SortOrder;
    role?: SortOrder;
    isMuted?: SortOrder;
    isBanned?: SortOrder;
  };

  export type RoomMembersMaxOrderByAggregateInput = {
    userId?: SortOrder;
    roomId?: SortOrder;
    joinedAt?: SortOrder;
    role?: SortOrder;
    isMuted?: SortOrder;
    isBanned?: SortOrder;
  };

  export type RoomMembersMinOrderByAggregateInput = {
    userId?: SortOrder;
    roomId?: SortOrder;
    joinedAt?: SortOrder;
    role?: SortOrder;
    isMuted?: SortOrder;
    isBanned?: SortOrder;
  };

  export type EnumRoomRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomRole | EnumRoomRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRoomRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.RoomRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoomRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoomRoleFilter<$PrismaModel>;
  };

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProfileInput,
        UserUpdateWithoutProfileInput
      >,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type MessageCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<
          MessageCreateWithoutOwnerInput,
          MessageUncheckedCreateWithoutOwnerInput
        >
      | MessageCreateWithoutOwnerInput[]
      | MessageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutOwnerInput
      | MessageCreateOrConnectWithoutOwnerInput[];
    createMany?: MessageCreateManyOwnerInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type RoomMembersCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutUserInput,
          RoomMembersUncheckedCreateWithoutUserInput
        >
      | RoomMembersCreateWithoutUserInput[]
      | RoomMembersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutUserInput
      | RoomMembersCreateOrConnectWithoutUserInput[];
    createMany?: RoomMembersCreateManyUserInputEnvelope;
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
  };

  export type ChatRoomCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ChatRoomCreateWithoutCreatedByInput,
          ChatRoomUncheckedCreateWithoutCreatedByInput
        >
      | ChatRoomCreateWithoutCreatedByInput[]
      | ChatRoomUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ChatRoomCreateOrConnectWithoutCreatedByInput
      | ChatRoomCreateOrConnectWithoutCreatedByInput[];
    createMany?: ChatRoomCreateManyCreatedByInputEnvelope;
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type MessageUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<
          MessageCreateWithoutOwnerInput,
          MessageUncheckedCreateWithoutOwnerInput
        >
      | MessageCreateWithoutOwnerInput[]
      | MessageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutOwnerInput
      | MessageCreateOrConnectWithoutOwnerInput[];
    createMany?: MessageCreateManyOwnerInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type RoomMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutUserInput,
          RoomMembersUncheckedCreateWithoutUserInput
        >
      | RoomMembersCreateWithoutUserInput[]
      | RoomMembersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutUserInput
      | RoomMembersCreateOrConnectWithoutUserInput[];
    createMany?: RoomMembersCreateManyUserInputEnvelope;
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
  };

  export type ChatRoomUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ChatRoomCreateWithoutCreatedByInput,
          ChatRoomUncheckedCreateWithoutCreatedByInput
        >
      | ChatRoomCreateWithoutCreatedByInput[]
      | ChatRoomUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ChatRoomCreateOrConnectWithoutCreatedByInput
      | ChatRoomCreateOrConnectWithoutCreatedByInput[];
    createMany?: ChatRoomCreateManyCreatedByInputEnvelope;
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
  };

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type MessageUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutOwnerInput,
          MessageUncheckedCreateWithoutOwnerInput
        >
      | MessageCreateWithoutOwnerInput[]
      | MessageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutOwnerInput
      | MessageCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutOwnerInput
      | MessageUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: MessageCreateManyOwnerInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutOwnerInput
      | MessageUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutOwnerInput
      | MessageUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type RoomMembersUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutUserInput,
          RoomMembersUncheckedCreateWithoutUserInput
        >
      | RoomMembersCreateWithoutUserInput[]
      | RoomMembersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutUserInput
      | RoomMembersCreateOrConnectWithoutUserInput[];
    upsert?:
      | RoomMembersUpsertWithWhereUniqueWithoutUserInput
      | RoomMembersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RoomMembersCreateManyUserInputEnvelope;
    set?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    disconnect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    delete?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    update?:
      | RoomMembersUpdateWithWhereUniqueWithoutUserInput
      | RoomMembersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RoomMembersUpdateManyWithWhereWithoutUserInput
      | RoomMembersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
  };

  export type ChatRoomUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ChatRoomCreateWithoutCreatedByInput,
          ChatRoomUncheckedCreateWithoutCreatedByInput
        >
      | ChatRoomCreateWithoutCreatedByInput[]
      | ChatRoomUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ChatRoomCreateOrConnectWithoutCreatedByInput
      | ChatRoomCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput
      | ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ChatRoomCreateManyCreatedByInputEnvelope;
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    update?:
      | ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput
      | ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ChatRoomUpdateManyWithWhereWithoutCreatedByInput
      | ChatRoomUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type MessageUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutOwnerInput,
          MessageUncheckedCreateWithoutOwnerInput
        >
      | MessageCreateWithoutOwnerInput[]
      | MessageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutOwnerInput
      | MessageCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutOwnerInput
      | MessageUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: MessageCreateManyOwnerInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutOwnerInput
      | MessageUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutOwnerInput
      | MessageUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type RoomMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutUserInput,
          RoomMembersUncheckedCreateWithoutUserInput
        >
      | RoomMembersCreateWithoutUserInput[]
      | RoomMembersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutUserInput
      | RoomMembersCreateOrConnectWithoutUserInput[];
    upsert?:
      | RoomMembersUpsertWithWhereUniqueWithoutUserInput
      | RoomMembersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RoomMembersCreateManyUserInputEnvelope;
    set?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    disconnect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    delete?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    update?:
      | RoomMembersUpdateWithWhereUniqueWithoutUserInput
      | RoomMembersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RoomMembersUpdateManyWithWhereWithoutUserInput
      | RoomMembersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
  };

  export type ChatRoomUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ChatRoomCreateWithoutCreatedByInput,
          ChatRoomUncheckedCreateWithoutCreatedByInput
        >
      | ChatRoomCreateWithoutCreatedByInput[]
      | ChatRoomUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ChatRoomCreateOrConnectWithoutCreatedByInput
      | ChatRoomCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput
      | ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ChatRoomCreateManyCreatedByInputEnvelope;
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[];
    update?:
      | ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput
      | ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ChatRoomUpdateManyWithWhereWithoutCreatedByInput
      | ChatRoomUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCreatedRoomsInput = {
    create?: XOR<
      UserCreateWithoutCreatedRoomsInput,
      UserUncheckedCreateWithoutCreatedRoomsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput;
    connect?: UserWhereUniqueInput;
  };

  export type RoomMembersCreateNestedManyWithoutRoomInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutRoomInput,
          RoomMembersUncheckedCreateWithoutRoomInput
        >
      | RoomMembersCreateWithoutRoomInput[]
      | RoomMembersUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutRoomInput
      | RoomMembersCreateOrConnectWithoutRoomInput[];
    createMany?: RoomMembersCreateManyRoomInputEnvelope;
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutRoomInput = {
    create?:
      | XOR<
          MessageCreateWithoutRoomInput,
          MessageUncheckedCreateWithoutRoomInput
        >
      | MessageCreateWithoutRoomInput[]
      | MessageUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutRoomInput
      | MessageCreateOrConnectWithoutRoomInput[];
    createMany?: MessageCreateManyRoomInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type RoomMembersUncheckedCreateNestedManyWithoutRoomInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutRoomInput,
          RoomMembersUncheckedCreateWithoutRoomInput
        >
      | RoomMembersCreateWithoutRoomInput[]
      | RoomMembersUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutRoomInput
      | RoomMembersCreateOrConnectWithoutRoomInput[];
    createMany?: RoomMembersCreateManyRoomInputEnvelope;
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?:
      | XOR<
          MessageCreateWithoutRoomInput,
          MessageUncheckedCreateWithoutRoomInput
        >
      | MessageCreateWithoutRoomInput[]
      | MessageUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutRoomInput
      | MessageCreateOrConnectWithoutRoomInput[];
    createMany?: MessageCreateManyRoomInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdateOneWithoutCreatedRoomsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedRoomsInput,
      UserUncheckedCreateWithoutCreatedRoomsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput;
    upsert?: UserUpsertWithoutCreatedRoomsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedRoomsInput,
        UserUpdateWithoutCreatedRoomsInput
      >,
      UserUncheckedUpdateWithoutCreatedRoomsInput
    >;
  };

  export type RoomMembersUpdateManyWithoutRoomNestedInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutRoomInput,
          RoomMembersUncheckedCreateWithoutRoomInput
        >
      | RoomMembersCreateWithoutRoomInput[]
      | RoomMembersUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutRoomInput
      | RoomMembersCreateOrConnectWithoutRoomInput[];
    upsert?:
      | RoomMembersUpsertWithWhereUniqueWithoutRoomInput
      | RoomMembersUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: RoomMembersCreateManyRoomInputEnvelope;
    set?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    disconnect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    delete?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    update?:
      | RoomMembersUpdateWithWhereUniqueWithoutRoomInput
      | RoomMembersUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?:
      | RoomMembersUpdateManyWithWhereWithoutRoomInput
      | RoomMembersUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutRoomNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutRoomInput,
          MessageUncheckedCreateWithoutRoomInput
        >
      | MessageCreateWithoutRoomInput[]
      | MessageUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutRoomInput
      | MessageCreateOrConnectWithoutRoomInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutRoomInput
      | MessageUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: MessageCreateManyRoomInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutRoomInput
      | MessageUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutRoomInput
      | MessageUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type RoomMembersUncheckedUpdateManyWithoutRoomNestedInput = {
    create?:
      | XOR<
          RoomMembersCreateWithoutRoomInput,
          RoomMembersUncheckedCreateWithoutRoomInput
        >
      | RoomMembersCreateWithoutRoomInput[]
      | RoomMembersUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | RoomMembersCreateOrConnectWithoutRoomInput
      | RoomMembersCreateOrConnectWithoutRoomInput[];
    upsert?:
      | RoomMembersUpsertWithWhereUniqueWithoutRoomInput
      | RoomMembersUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: RoomMembersCreateManyRoomInputEnvelope;
    set?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    disconnect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    delete?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    connect?: RoomMembersWhereUniqueInput | RoomMembersWhereUniqueInput[];
    update?:
      | RoomMembersUpdateWithWhereUniqueWithoutRoomInput
      | RoomMembersUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?:
      | RoomMembersUpdateManyWithWhereWithoutRoomInput
      | RoomMembersUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutRoomInput,
          MessageUncheckedCreateWithoutRoomInput
        >
      | MessageCreateWithoutRoomInput[]
      | MessageUncheckedCreateWithoutRoomInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutRoomInput
      | MessageCreateOrConnectWithoutRoomInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutRoomInput
      | MessageUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: MessageCreateManyRoomInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutRoomInput
      | MessageUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutRoomInput
      | MessageUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type ChatRoomCreateNestedOneWithoutMessageInput = {
    create?: XOR<
      ChatRoomCreateWithoutMessageInput,
      ChatRoomUncheckedCreateWithoutMessageInput
    >;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput;
    connect?: ChatRoomWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ChatRoomUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<
      ChatRoomCreateWithoutMessageInput,
      ChatRoomUncheckedCreateWithoutMessageInput
    >;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput;
    upsert?: ChatRoomUpsertWithoutMessageInput;
    connect?: ChatRoomWhereUniqueInput;
    update?: XOR<
      XOR<
        ChatRoomUpdateToOneWithWhereWithoutMessageInput,
        ChatRoomUpdateWithoutMessageInput
      >,
      ChatRoomUncheckedUpdateWithoutMessageInput
    >;
  };

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    upsert?: UserUpsertWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMessagesInput,
        UserUpdateWithoutMessagesInput
      >,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      UserCreateWithoutMembersInput,
      UserUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput;
    connect?: UserWhereUniqueInput;
  };

  export type ChatRoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      ChatRoomCreateWithoutMembersInput,
      ChatRoomUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput;
    connect?: ChatRoomWhereUniqueInput;
  };

  export type EnumRoomRoleFieldUpdateOperationsInput = {
    set?: $Enums.RoomRole;
  };

  export type UserUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      UserCreateWithoutMembersInput,
      UserUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput;
    upsert?: UserUpsertWithoutMembersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMembersInput,
        UserUpdateWithoutMembersInput
      >,
      UserUncheckedUpdateWithoutMembersInput
    >;
  };

  export type ChatRoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      ChatRoomCreateWithoutMembersInput,
      ChatRoomUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput;
    upsert?: ChatRoomUpsertWithoutMembersInput;
    connect?: ChatRoomWhereUniqueInput;
    update?: XOR<
      XOR<
        ChatRoomUpdateToOneWithWhereWithoutMembersInput,
        ChatRoomUpdateWithoutMembersInput
      >,
      ChatRoomUncheckedUpdateWithoutMembersInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumRoomRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomRole | EnumRoomRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoomRoleFilter<$PrismaModel> | $Enums.RoomRole;
  };

  export type NestedEnumRoomRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomRole | EnumRoomRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoomRole[] | ListEnumRoomRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRoomRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.RoomRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoomRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoomRoleFilter<$PrismaModel>;
  };

  export type UserCreateWithoutProfileInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    messages?: MessageCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    messages?: MessageUncheckedCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersUncheckedCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
  };

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    messages?: MessageUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    messages?: MessageUncheckedUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUncheckedUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type ProfileCreateWithoutUserInput = {
    id?: string;
    bgImage?: string | null;
    bio?: string | null;
  };

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    bgImage?: string | null;
    bio?: string | null;
  };

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type MessageCreateWithoutOwnerInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    room: ChatRoomCreateNestedOneWithoutMessageInput;
  };

  export type MessageUncheckedCreateWithoutOwnerInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roomId: string;
  };

  export type MessageCreateOrConnectWithoutOwnerInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutOwnerInput,
      MessageUncheckedCreateWithoutOwnerInput
    >;
  };

  export type MessageCreateManyOwnerInputEnvelope = {
    data: MessageCreateManyOwnerInput | MessageCreateManyOwnerInput[];
    skipDuplicates?: boolean;
  };

  export type RoomMembersCreateWithoutUserInput = {
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
    room: ChatRoomCreateNestedOneWithoutMembersInput;
  };

  export type RoomMembersUncheckedCreateWithoutUserInput = {
    roomId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type RoomMembersCreateOrConnectWithoutUserInput = {
    where: RoomMembersWhereUniqueInput;
    create: XOR<
      RoomMembersCreateWithoutUserInput,
      RoomMembersUncheckedCreateWithoutUserInput
    >;
  };

  export type RoomMembersCreateManyUserInputEnvelope = {
    data: RoomMembersCreateManyUserInput | RoomMembersCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ChatRoomCreateWithoutCreatedByInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    members?: RoomMembersCreateNestedManyWithoutRoomInput;
    message?: MessageCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    members?: RoomMembersUncheckedCreateNestedManyWithoutRoomInput;
    message?: MessageUncheckedCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomCreateOrConnectWithoutCreatedByInput = {
    where: ChatRoomWhereUniqueInput;
    create: XOR<
      ChatRoomCreateWithoutCreatedByInput,
      ChatRoomUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ChatRoomCreateManyCreatedByInputEnvelope = {
    data: ChatRoomCreateManyCreatedByInput | ChatRoomCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bgImage?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type MessageUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutOwnerInput,
      MessageUncheckedUpdateWithoutOwnerInput
    >;
    create: XOR<
      MessageCreateWithoutOwnerInput,
      MessageUncheckedCreateWithoutOwnerInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutOwnerInput,
      MessageUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutOwnerInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutOwnerInput
    >;
  };

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[];
    OR?: MessageScalarWhereInput[];
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[];
    id?: StringFilter<'Message'> | string;
    text?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    updatedAt?: DateTimeFilter<'Message'> | Date | string;
    roomId?: StringFilter<'Message'> | string;
    ownerId?: StringFilter<'Message'> | string;
  };

  export type RoomMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMembersWhereUniqueInput;
    update: XOR<
      RoomMembersUpdateWithoutUserInput,
      RoomMembersUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RoomMembersCreateWithoutUserInput,
      RoomMembersUncheckedCreateWithoutUserInput
    >;
  };

  export type RoomMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMembersWhereUniqueInput;
    data: XOR<
      RoomMembersUpdateWithoutUserInput,
      RoomMembersUncheckedUpdateWithoutUserInput
    >;
  };

  export type RoomMembersUpdateManyWithWhereWithoutUserInput = {
    where: RoomMembersScalarWhereInput;
    data: XOR<
      RoomMembersUpdateManyMutationInput,
      RoomMembersUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RoomMembersScalarWhereInput = {
    AND?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
    OR?: RoomMembersScalarWhereInput[];
    NOT?: RoomMembersScalarWhereInput | RoomMembersScalarWhereInput[];
    userId?: StringFilter<'RoomMembers'> | string;
    roomId?: StringFilter<'RoomMembers'> | string;
    joinedAt?: DateTimeFilter<'RoomMembers'> | Date | string;
    role?: EnumRoomRoleFilter<'RoomMembers'> | $Enums.RoomRole;
    isMuted?: BoolFilter<'RoomMembers'> | boolean;
    isBanned?: BoolFilter<'RoomMembers'> | boolean;
  };

  export type ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChatRoomWhereUniqueInput;
    update: XOR<
      ChatRoomUpdateWithoutCreatedByInput,
      ChatRoomUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      ChatRoomCreateWithoutCreatedByInput,
      ChatRoomUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChatRoomWhereUniqueInput;
    data: XOR<
      ChatRoomUpdateWithoutCreatedByInput,
      ChatRoomUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type ChatRoomUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChatRoomScalarWhereInput;
    data: XOR<
      ChatRoomUpdateManyMutationInput,
      ChatRoomUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[];
    OR?: ChatRoomScalarWhereInput[];
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[];
    id?: StringFilter<'ChatRoom'> | string;
    name?: StringNullableFilter<'ChatRoom'> | string | null;
    isGroup?: BoolFilter<'ChatRoom'> | boolean;
    createdAt?: DateTimeFilter<'ChatRoom'> | Date | string;
    createdById?: StringNullableFilter<'ChatRoom'> | string | null;
  };

  export type UserCreateWithoutCreatedRoomsInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCreatedRoomsInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutOwnerInput;
    members?: RoomMembersUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCreatedRoomsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedRoomsInput,
      UserUncheckedCreateWithoutCreatedRoomsInput
    >;
  };

  export type RoomMembersCreateWithoutRoomInput = {
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
    user: UserCreateNestedOneWithoutMembersInput;
  };

  export type RoomMembersUncheckedCreateWithoutRoomInput = {
    userId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type RoomMembersCreateOrConnectWithoutRoomInput = {
    where: RoomMembersWhereUniqueInput;
    create: XOR<
      RoomMembersCreateWithoutRoomInput,
      RoomMembersUncheckedCreateWithoutRoomInput
    >;
  };

  export type RoomMembersCreateManyRoomInputEnvelope = {
    data: RoomMembersCreateManyRoomInput | RoomMembersCreateManyRoomInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutRoomInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutRoomInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
  };

  export type MessageCreateOrConnectWithoutRoomInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutRoomInput,
      MessageUncheckedCreateWithoutRoomInput
    >;
  };

  export type MessageCreateManyRoomInputEnvelope = {
    data: MessageCreateManyRoomInput | MessageCreateManyRoomInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCreatedRoomsInput = {
    update: XOR<
      UserUpdateWithoutCreatedRoomsInput,
      UserUncheckedUpdateWithoutCreatedRoomsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedRoomsInput,
      UserUncheckedCreateWithoutCreatedRoomsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedRoomsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedRoomsInput,
      UserUncheckedUpdateWithoutCreatedRoomsInput
    >;
  };

  export type UserUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutOwnerNestedInput;
    members?: RoomMembersUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type RoomMembersUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMembersWhereUniqueInput;
    update: XOR<
      RoomMembersUpdateWithoutRoomInput,
      RoomMembersUncheckedUpdateWithoutRoomInput
    >;
    create: XOR<
      RoomMembersCreateWithoutRoomInput,
      RoomMembersUncheckedCreateWithoutRoomInput
    >;
  };

  export type RoomMembersUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMembersWhereUniqueInput;
    data: XOR<
      RoomMembersUpdateWithoutRoomInput,
      RoomMembersUncheckedUpdateWithoutRoomInput
    >;
  };

  export type RoomMembersUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMembersScalarWhereInput;
    data: XOR<
      RoomMembersUpdateManyMutationInput,
      RoomMembersUncheckedUpdateManyWithoutRoomInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutRoomInput,
      MessageUncheckedUpdateWithoutRoomInput
    >;
    create: XOR<
      MessageCreateWithoutRoomInput,
      MessageUncheckedCreateWithoutRoomInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutRoomInput,
      MessageUncheckedUpdateWithoutRoomInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutRoomInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutRoomInput
    >;
  };

  export type ChatRoomCreateWithoutMessageInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdBy?: UserCreateNestedOneWithoutCreatedRoomsInput;
    members?: RoomMembersCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomUncheckedCreateWithoutMessageInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdById?: string | null;
    members?: RoomMembersUncheckedCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomCreateOrConnectWithoutMessageInput = {
    where: ChatRoomWhereUniqueInput;
    create: XOR<
      ChatRoomCreateWithoutMessageInput,
      ChatRoomUncheckedCreateWithoutMessageInput
    >;
  };

  export type UserCreateWithoutMessagesInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    members?: RoomMembersCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    members?: RoomMembersUncheckedCreateNestedManyWithoutUserInput;
    createdRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
  };

  export type ChatRoomUpsertWithoutMessageInput = {
    update: XOR<
      ChatRoomUpdateWithoutMessageInput,
      ChatRoomUncheckedUpdateWithoutMessageInput
    >;
    create: XOR<
      ChatRoomCreateWithoutMessageInput,
      ChatRoomUncheckedCreateWithoutMessageInput
    >;
    where?: ChatRoomWhereInput;
  };

  export type ChatRoomUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatRoomWhereInput;
    data: XOR<
      ChatRoomUpdateWithoutMessageInput,
      ChatRoomUncheckedUpdateWithoutMessageInput
    >;
  };

  export type ChatRoomUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneWithoutCreatedRoomsNestedInput;
    members?: RoomMembersUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: NullableStringFieldUpdateOperationsInput | string | null;
    members?: RoomMembersUncheckedUpdateManyWithoutRoomNestedInput;
  };

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    members?: RoomMembersUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    members?: RoomMembersUncheckedUpdateManyWithoutUserNestedInput;
    createdRooms?: ChatRoomUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserCreateWithoutMembersInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutOwnerInput;
    createdRooms?: ChatRoomCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutMembersInput = {
    id?: string;
    email: string;
    avatar?: string | null;
    name?: string | null;
    password: string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutOwnerInput;
    createdRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutMembersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMembersInput,
      UserUncheckedCreateWithoutMembersInput
    >;
  };

  export type ChatRoomCreateWithoutMembersInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdBy?: UserCreateNestedOneWithoutCreatedRoomsInput;
    message?: MessageCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomUncheckedCreateWithoutMembersInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
    createdById?: string | null;
    message?: MessageUncheckedCreateNestedManyWithoutRoomInput;
  };

  export type ChatRoomCreateOrConnectWithoutMembersInput = {
    where: ChatRoomWhereUniqueInput;
    create: XOR<
      ChatRoomCreateWithoutMembersInput,
      ChatRoomUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserUpsertWithoutMembersInput = {
    update: XOR<
      UserUpdateWithoutMembersInput,
      UserUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      UserCreateWithoutMembersInput,
      UserUncheckedCreateWithoutMembersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMembersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMembersInput,
      UserUncheckedUpdateWithoutMembersInput
    >;
  };

  export type UserUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutOwnerNestedInput;
    createdRooms?: ChatRoomUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutOwnerNestedInput;
    createdRooms?: ChatRoomUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type ChatRoomUpsertWithoutMembersInput = {
    update: XOR<
      ChatRoomUpdateWithoutMembersInput,
      ChatRoomUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      ChatRoomCreateWithoutMembersInput,
      ChatRoomUncheckedCreateWithoutMembersInput
    >;
    where?: ChatRoomWhereInput;
  };

  export type ChatRoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatRoomWhereInput;
    data: XOR<
      ChatRoomUpdateWithoutMembersInput,
      ChatRoomUncheckedUpdateWithoutMembersInput
    >;
  };

  export type ChatRoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneWithoutCreatedRoomsNestedInput;
    message?: MessageUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: NullableStringFieldUpdateOperationsInput | string | null;
    message?: MessageUncheckedUpdateManyWithoutRoomNestedInput;
  };

  export type MessageCreateManyOwnerInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roomId: string;
  };

  export type RoomMembersCreateManyUserInput = {
    roomId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type ChatRoomCreateManyCreatedByInput = {
    id?: string;
    name?: string | null;
    isGroup: boolean;
    createdAt?: Date | string;
  };

  export type MessageUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    room?: ChatRoomUpdateOneRequiredWithoutMessageNestedInput;
  };

  export type MessageUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roomId?: StringFieldUpdateOperationsInput | string;
  };

  export type MessageUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roomId?: StringFieldUpdateOperationsInput | string;
  };

  export type RoomMembersUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
    room?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type RoomMembersUncheckedUpdateWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type RoomMembersUncheckedUpdateManyWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ChatRoomUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: RoomMembersUpdateManyWithoutRoomNestedInput;
    message?: MessageUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: RoomMembersUncheckedUpdateManyWithoutRoomNestedInput;
    message?: MessageUncheckedUpdateManyWithoutRoomNestedInput;
  };

  export type ChatRoomUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    isGroup?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoomMembersCreateManyRoomInput = {
    userId: string;
    joinedAt?: Date | string;
    role?: $Enums.RoomRole;
    isMuted: boolean;
    isBanned: boolean;
  };

  export type MessageCreateManyRoomInput = {
    id?: string;
    text: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
  };

  export type RoomMembersUpdateWithoutRoomInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type RoomMembersUncheckedUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type RoomMembersUncheckedUpdateManyWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: EnumRoomRoleFieldUpdateOperationsInput | $Enums.RoomRole;
    isMuted?: BoolFieldUpdateOperationsInput | boolean;
    isBanned?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type MessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
  };

  export type MessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
