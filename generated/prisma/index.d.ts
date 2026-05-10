
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SpecialistProfile
 * 
 */
export type SpecialistProfile = $Result.DefaultSelection<Prisma.$SpecialistProfilePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model AIQuery
 * 
 */
export type AIQuery = $Result.DefaultSelection<Prisma.$AIQueryPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  FARMER: 'FARMER',
  PROVIDER: 'PROVIDER',
  VETERINARIAN: 'VETERINARIAN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BookingStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const AIFeatureType: {
  CROP_ASSISTANT: 'CROP_ASSISTANT',
  RECOMMENDATION: 'RECOMMENDATION',
  CONTENT_GENERATOR: 'CONTENT_GENERATOR',
  DATA_ANALYZER: 'DATA_ANALYZER'
};

export type AIFeatureType = (typeof AIFeatureType)[keyof typeof AIFeatureType]


export const BlogCategory: {
  RICE: 'RICE',
  WHEAT: 'WHEAT',
  POTATO: 'POTATO',
  VEGETABLE: 'VEGETABLE',
  FRUIT: 'FRUIT',
  SOIL: 'SOIL',
  FERTILIZER: 'FERTILIZER',
  OTHER: 'OTHER'
};

export type BlogCategory = (typeof BlogCategory)[keyof typeof BlogCategory]


export const BlogStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type BlogStatus = (typeof BlogStatus)[keyof typeof BlogStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type AIFeatureType = $Enums.AIFeatureType

export const AIFeatureType: typeof $Enums.AIFeatureType

export type BlogCategory = $Enums.BlogCategory

export const BlogCategory: typeof $Enums.BlogCategory

export type BlogStatus = $Enums.BlogStatus

export const BlogStatus: typeof $Enums.BlogStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.specialistProfile`: Exposes CRUD operations for the **SpecialistProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialistProfiles
    * const specialistProfiles = await prisma.specialistProfile.findMany()
    * ```
    */
  get specialistProfile(): Prisma.SpecialistProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIQuery`: Exposes CRUD operations for the **AIQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIQueries
    * const aIQueries = await prisma.aIQuery.findMany()
    * ```
    */
  get aIQuery(): Prisma.AIQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SpecialistProfile: 'SpecialistProfile',
    Appointment: 'Appointment',
    Provider: 'Provider',
    Equipment: 'Equipment',
    Category: 'Category',
    Booking: 'Booking',
    Review: 'Review',
    AIQuery: 'AIQuery',
    Blog: 'Blog',
    Notification: 'Notification',
    ChatRoom: 'ChatRoom',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "specialistProfile" | "appointment" | "provider" | "equipment" | "category" | "booking" | "review" | "aIQuery" | "blog" | "notification" | "chatRoom" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SpecialistProfile: {
        payload: Prisma.$SpecialistProfilePayload<ExtArgs>
        fields: Prisma.SpecialistProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialistProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialistProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          findFirst: {
            args: Prisma.SpecialistProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialistProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          findMany: {
            args: Prisma.SpecialistProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>[]
          }
          create: {
            args: Prisma.SpecialistProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          createMany: {
            args: Prisma.SpecialistProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialistProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>[]
          }
          delete: {
            args: Prisma.SpecialistProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          update: {
            args: Prisma.SpecialistProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          deleteMany: {
            args: Prisma.SpecialistProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialistProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialistProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>[]
          }
          upsert: {
            args: Prisma.SpecialistProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistProfilePayload>
          }
          aggregate: {
            args: Prisma.SpecialistProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialistProfile>
          }
          groupBy: {
            args: Prisma.SpecialistProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialistProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialistProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialistProfileCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      AIQuery: {
        payload: Prisma.$AIQueryPayload<ExtArgs>
        fields: Prisma.AIQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          findFirst: {
            args: Prisma.AIQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          findMany: {
            args: Prisma.AIQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>[]
          }
          create: {
            args: Prisma.AIQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          createMany: {
            args: Prisma.AIQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>[]
          }
          delete: {
            args: Prisma.AIQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          update: {
            args: Prisma.AIQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          deleteMany: {
            args: Prisma.AIQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>[]
          }
          upsert: {
            args: Prisma.AIQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIQueryPayload>
          }
          aggregate: {
            args: Prisma.AIQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIQuery>
          }
          groupBy: {
            args: Prisma.AIQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIQueryCountArgs<ExtArgs>
            result: $Utils.Optional<AIQueryCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    specialistProfile?: SpecialistProfileOmit
    appointment?: AppointmentOmit
    provider?: ProviderOmit
    equipment?: EquipmentOmit
    category?: CategoryOmit
    booking?: BookingOmit
    review?: ReviewOmit
    aIQuery?: AIQueryOmit
    blog?: BlogOmit
    notification?: NotificationOmit
    chatRoom?: ChatRoomOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    aiQueries: number
    appointments: number
    blogs: number
    bookingsAsFarmer: number
    notifications: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiQueries?: boolean | UserCountOutputTypeCountAiQueriesArgs
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    bookingsAsFarmer?: boolean | UserCountOutputTypeCountBookingsAsFarmerArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIQueryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsFarmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type SpecialistProfileCountOutputType
   */

  export type SpecialistProfileCountOutputType = {
    appointments: number
  }

  export type SpecialistProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | SpecialistProfileCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * SpecialistProfileCountOutputType without action
   */
  export type SpecialistProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfileCountOutputType
     */
    select?: SpecialistProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialistProfileCountOutputType without action
   */
  export type SpecialistProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    aiQueries: number
    blogs: number
    bookingsAsProvider: number
    equipment: number
    notifications: number
    reviews: number
    appointments: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiQueries?: boolean | ProviderCountOutputTypeCountAiQueriesArgs
    blogs?: boolean | ProviderCountOutputTypeCountBlogsArgs
    bookingsAsProvider?: boolean | ProviderCountOutputTypeCountBookingsAsProviderArgs
    equipment?: boolean | ProviderCountOutputTypeCountEquipmentArgs
    notifications?: boolean | ProviderCountOutputTypeCountNotificationsArgs
    reviews?: boolean | ProviderCountOutputTypeCountReviewsArgs
    appointments?: boolean | ProviderCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountAiQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIQueryWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountBookingsAsProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    bookings: number
    reviews: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EquipmentCountOutputTypeCountBookingsArgs
    reviews?: boolean | EquipmentCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    equipment: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | CategoryCountOutputTypeCountEquipmentArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    messages: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    location: number
    avatar: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiQueries?: boolean | User$aiQueriesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    bookingsAsFarmer?: boolean | User$bookingsAsFarmerArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    specialistProfile?: boolean | User$specialistProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "location" | "avatar" | "role" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiQueries?: boolean | User$aiQueriesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    bookingsAsFarmer?: boolean | User$bookingsAsFarmerArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    specialistProfile?: boolean | User$specialistProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      aiQueries: Prisma.$AIQueryPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      bookingsAsFarmer: Prisma.$BookingPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      specialistProfile: Prisma.$SpecialistProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      location: string | null
      avatar: string | null
      role: $Enums.Role
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiQueries<T extends User$aiQueriesArgs<ExtArgs> = {}>(args?: Subset<T, User$aiQueriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsFarmer<T extends User$bookingsAsFarmerArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsFarmerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialistProfile<T extends User$specialistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$specialistProfileArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.aiQueries
   */
  export type User$aiQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    where?: AIQueryWhereInput
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    cursor?: AIQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIQueryScalarFieldEnum | AIQueryScalarFieldEnum[]
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.bookingsAsFarmer
   */
  export type User$bookingsAsFarmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.specialistProfile
   */
  export type User$specialistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    where?: SpecialistProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SpecialistProfile
   */

  export type AggregateSpecialistProfile = {
    _count: SpecialistProfileCountAggregateOutputType | null
    _avg: SpecialistProfileAvgAggregateOutputType | null
    _sum: SpecialistProfileSumAggregateOutputType | null
    _min: SpecialistProfileMinAggregateOutputType | null
    _max: SpecialistProfileMaxAggregateOutputType | null
  }

  export type SpecialistProfileAvgAggregateOutputType = {
    experienceYears: number | null
    consultationFee: number | null
  }

  export type SpecialistProfileSumAggregateOutputType = {
    experienceYears: number | null
    consultationFee: number | null
  }

  export type SpecialistProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    qualifications: string | null
    registrationNo: string | null
    experienceYears: number | null
    consultationFee: number | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialistProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    qualifications: string | null
    registrationNo: string | null
    experienceYears: number | null
    consultationFee: number | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialistProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    qualifications: number
    registrationNo: number
    experienceYears: number
    consultationFee: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialistProfileAvgAggregateInputType = {
    experienceYears?: true
    consultationFee?: true
  }

  export type SpecialistProfileSumAggregateInputType = {
    experienceYears?: true
    consultationFee?: true
  }

  export type SpecialistProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    qualifications?: true
    registrationNo?: true
    experienceYears?: true
    consultationFee?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialistProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    qualifications?: true
    registrationNo?: true
    experienceYears?: true
    consultationFee?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialistProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    qualifications?: true
    registrationNo?: true
    experienceYears?: true
    consultationFee?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialistProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialistProfile to aggregate.
     */
    where?: SpecialistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistProfiles to fetch.
     */
    orderBy?: SpecialistProfileOrderByWithRelationInput | SpecialistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialistProfiles
    **/
    _count?: true | SpecialistProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialistProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialistProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialistProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialistProfileMaxAggregateInputType
  }

  export type GetSpecialistProfileAggregateType<T extends SpecialistProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialistProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialistProfile[P]>
      : GetScalarType<T[P], AggregateSpecialistProfile[P]>
  }




  export type SpecialistProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistProfileWhereInput
    orderBy?: SpecialistProfileOrderByWithAggregationInput | SpecialistProfileOrderByWithAggregationInput[]
    by: SpecialistProfileScalarFieldEnum[] | SpecialistProfileScalarFieldEnum
    having?: SpecialistProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialistProfileCountAggregateInputType | true
    _avg?: SpecialistProfileAvgAggregateInputType
    _sum?: SpecialistProfileSumAggregateInputType
    _min?: SpecialistProfileMinAggregateInputType
    _max?: SpecialistProfileMaxAggregateInputType
  }

  export type SpecialistProfileGroupByOutputType = {
    id: string
    userId: string
    specialization: string | null
    qualifications: string | null
    registrationNo: string | null
    experienceYears: number | null
    consultationFee: number | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: SpecialistProfileCountAggregateOutputType | null
    _avg: SpecialistProfileAvgAggregateOutputType | null
    _sum: SpecialistProfileSumAggregateOutputType | null
    _min: SpecialistProfileMinAggregateOutputType | null
    _max: SpecialistProfileMaxAggregateOutputType | null
  }

  type GetSpecialistProfileGroupByPayload<T extends SpecialistProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialistProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialistProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistProfileGroupByOutputType[P]>
        }
      >
    >


  export type SpecialistProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    qualifications?: boolean
    registrationNo?: boolean
    experienceYears?: boolean
    consultationFee?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | SpecialistProfile$appointmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SpecialistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistProfile"]>

  export type SpecialistProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    qualifications?: boolean
    registrationNo?: boolean
    experienceYears?: boolean
    consultationFee?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistProfile"]>

  export type SpecialistProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    qualifications?: boolean
    registrationNo?: boolean
    experienceYears?: boolean
    consultationFee?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistProfile"]>

  export type SpecialistProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    qualifications?: boolean
    registrationNo?: boolean
    experienceYears?: boolean
    consultationFee?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialistProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "qualifications" | "registrationNo" | "experienceYears" | "consultationFee" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["specialistProfile"]>
  export type SpecialistProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | SpecialistProfile$appointmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SpecialistProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialistProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpecialistProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpecialistProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialistProfile"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialization: string | null
      qualifications: string | null
      registrationNo: string | null
      experienceYears: number | null
      consultationFee: number | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialistProfile"]>
    composites: {}
  }

  type SpecialistProfileGetPayload<S extends boolean | null | undefined | SpecialistProfileDefaultArgs> = $Result.GetResult<Prisma.$SpecialistProfilePayload, S>

  type SpecialistProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialistProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialistProfileCountAggregateInputType | true
    }

  export interface SpecialistProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialistProfile'], meta: { name: 'SpecialistProfile' } }
    /**
     * Find zero or one SpecialistProfile that matches the filter.
     * @param {SpecialistProfileFindUniqueArgs} args - Arguments to find a SpecialistProfile
     * @example
     * // Get one SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialistProfileFindUniqueArgs>(args: SelectSubset<T, SpecialistProfileFindUniqueArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialistProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialistProfileFindUniqueOrThrowArgs} args - Arguments to find a SpecialistProfile
     * @example
     * // Get one SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialistProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialistProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialistProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileFindFirstArgs} args - Arguments to find a SpecialistProfile
     * @example
     * // Get one SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialistProfileFindFirstArgs>(args?: SelectSubset<T, SpecialistProfileFindFirstArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialistProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileFindFirstOrThrowArgs} args - Arguments to find a SpecialistProfile
     * @example
     * // Get one SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialistProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialistProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialistProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialistProfiles
     * const specialistProfiles = await prisma.specialistProfile.findMany()
     * 
     * // Get first 10 SpecialistProfiles
     * const specialistProfiles = await prisma.specialistProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialistProfileWithIdOnly = await prisma.specialistProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialistProfileFindManyArgs>(args?: SelectSubset<T, SpecialistProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialistProfile.
     * @param {SpecialistProfileCreateArgs} args - Arguments to create a SpecialistProfile.
     * @example
     * // Create one SpecialistProfile
     * const SpecialistProfile = await prisma.specialistProfile.create({
     *   data: {
     *     // ... data to create a SpecialistProfile
     *   }
     * })
     * 
     */
    create<T extends SpecialistProfileCreateArgs>(args: SelectSubset<T, SpecialistProfileCreateArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialistProfiles.
     * @param {SpecialistProfileCreateManyArgs} args - Arguments to create many SpecialistProfiles.
     * @example
     * // Create many SpecialistProfiles
     * const specialistProfile = await prisma.specialistProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialistProfileCreateManyArgs>(args?: SelectSubset<T, SpecialistProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialistProfiles and returns the data saved in the database.
     * @param {SpecialistProfileCreateManyAndReturnArgs} args - Arguments to create many SpecialistProfiles.
     * @example
     * // Create many SpecialistProfiles
     * const specialistProfile = await prisma.specialistProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialistProfiles and only return the `id`
     * const specialistProfileWithIdOnly = await prisma.specialistProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialistProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialistProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialistProfile.
     * @param {SpecialistProfileDeleteArgs} args - Arguments to delete one SpecialistProfile.
     * @example
     * // Delete one SpecialistProfile
     * const SpecialistProfile = await prisma.specialistProfile.delete({
     *   where: {
     *     // ... filter to delete one SpecialistProfile
     *   }
     * })
     * 
     */
    delete<T extends SpecialistProfileDeleteArgs>(args: SelectSubset<T, SpecialistProfileDeleteArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialistProfile.
     * @param {SpecialistProfileUpdateArgs} args - Arguments to update one SpecialistProfile.
     * @example
     * // Update one SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialistProfileUpdateArgs>(args: SelectSubset<T, SpecialistProfileUpdateArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialistProfiles.
     * @param {SpecialistProfileDeleteManyArgs} args - Arguments to filter SpecialistProfiles to delete.
     * @example
     * // Delete a few SpecialistProfiles
     * const { count } = await prisma.specialistProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialistProfileDeleteManyArgs>(args?: SelectSubset<T, SpecialistProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialistProfiles
     * const specialistProfile = await prisma.specialistProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialistProfileUpdateManyArgs>(args: SelectSubset<T, SpecialistProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialistProfiles and returns the data updated in the database.
     * @param {SpecialistProfileUpdateManyAndReturnArgs} args - Arguments to update many SpecialistProfiles.
     * @example
     * // Update many SpecialistProfiles
     * const specialistProfile = await prisma.specialistProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialistProfiles and only return the `id`
     * const specialistProfileWithIdOnly = await prisma.specialistProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpecialistProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialistProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialistProfile.
     * @param {SpecialistProfileUpsertArgs} args - Arguments to update or create a SpecialistProfile.
     * @example
     * // Update or create a SpecialistProfile
     * const specialistProfile = await prisma.specialistProfile.upsert({
     *   create: {
     *     // ... data to create a SpecialistProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialistProfile we want to update
     *   }
     * })
     */
    upsert<T extends SpecialistProfileUpsertArgs>(args: SelectSubset<T, SpecialistProfileUpsertArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileCountArgs} args - Arguments to filter SpecialistProfiles to count.
     * @example
     * // Count the number of SpecialistProfiles
     * const count = await prisma.specialistProfile.count({
     *   where: {
     *     // ... the filter for the SpecialistProfiles we want to count
     *   }
     * })
    **/
    count<T extends SpecialistProfileCountArgs>(
      args?: Subset<T, SpecialistProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialistProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialistProfileAggregateArgs>(args: Subset<T, SpecialistProfileAggregateArgs>): Prisma.PrismaPromise<GetSpecialistProfileAggregateType<T>>

    /**
     * Group by SpecialistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistProfileGroupByArgs} args - Group by arguments.
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
      T extends SpecialistProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialistProfileGroupByArgs['orderBy'] }
        : { orderBy?: SpecialistProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, SpecialistProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialistProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialistProfile model
   */
  readonly fields: SpecialistProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialistProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialistProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends SpecialistProfile$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialistProfile model
   */
  interface SpecialistProfileFieldRefs {
    readonly id: FieldRef<"SpecialistProfile", 'String'>
    readonly userId: FieldRef<"SpecialistProfile", 'String'>
    readonly specialization: FieldRef<"SpecialistProfile", 'String'>
    readonly qualifications: FieldRef<"SpecialistProfile", 'String'>
    readonly registrationNo: FieldRef<"SpecialistProfile", 'String'>
    readonly experienceYears: FieldRef<"SpecialistProfile", 'Int'>
    readonly consultationFee: FieldRef<"SpecialistProfile", 'Float'>
    readonly bio: FieldRef<"SpecialistProfile", 'String'>
    readonly createdAt: FieldRef<"SpecialistProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SpecialistProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialistProfile findUnique
   */
  export type SpecialistProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistProfile to fetch.
     */
    where: SpecialistProfileWhereUniqueInput
  }

  /**
   * SpecialistProfile findUniqueOrThrow
   */
  export type SpecialistProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistProfile to fetch.
     */
    where: SpecialistProfileWhereUniqueInput
  }

  /**
   * SpecialistProfile findFirst
   */
  export type SpecialistProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistProfile to fetch.
     */
    where?: SpecialistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistProfiles to fetch.
     */
    orderBy?: SpecialistProfileOrderByWithRelationInput | SpecialistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialistProfiles.
     */
    cursor?: SpecialistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistProfiles.
     */
    distinct?: SpecialistProfileScalarFieldEnum | SpecialistProfileScalarFieldEnum[]
  }

  /**
   * SpecialistProfile findFirstOrThrow
   */
  export type SpecialistProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistProfile to fetch.
     */
    where?: SpecialistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistProfiles to fetch.
     */
    orderBy?: SpecialistProfileOrderByWithRelationInput | SpecialistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialistProfiles.
     */
    cursor?: SpecialistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistProfiles.
     */
    distinct?: SpecialistProfileScalarFieldEnum | SpecialistProfileScalarFieldEnum[]
  }

  /**
   * SpecialistProfile findMany
   */
  export type SpecialistProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistProfiles to fetch.
     */
    where?: SpecialistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistProfiles to fetch.
     */
    orderBy?: SpecialistProfileOrderByWithRelationInput | SpecialistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialistProfiles.
     */
    cursor?: SpecialistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistProfiles.
     */
    distinct?: SpecialistProfileScalarFieldEnum | SpecialistProfileScalarFieldEnum[]
  }

  /**
   * SpecialistProfile create
   */
  export type SpecialistProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialistProfile.
     */
    data: XOR<SpecialistProfileCreateInput, SpecialistProfileUncheckedCreateInput>
  }

  /**
   * SpecialistProfile createMany
   */
  export type SpecialistProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialistProfiles.
     */
    data: SpecialistProfileCreateManyInput | SpecialistProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialistProfile createManyAndReturn
   */
  export type SpecialistProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialistProfiles.
     */
    data: SpecialistProfileCreateManyInput | SpecialistProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialistProfile update
   */
  export type SpecialistProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialistProfile.
     */
    data: XOR<SpecialistProfileUpdateInput, SpecialistProfileUncheckedUpdateInput>
    /**
     * Choose, which SpecialistProfile to update.
     */
    where: SpecialistProfileWhereUniqueInput
  }

  /**
   * SpecialistProfile updateMany
   */
  export type SpecialistProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialistProfiles.
     */
    data: XOR<SpecialistProfileUpdateManyMutationInput, SpecialistProfileUncheckedUpdateManyInput>
    /**
     * Filter which SpecialistProfiles to update
     */
    where?: SpecialistProfileWhereInput
    /**
     * Limit how many SpecialistProfiles to update.
     */
    limit?: number
  }

  /**
   * SpecialistProfile updateManyAndReturn
   */
  export type SpecialistProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * The data used to update SpecialistProfiles.
     */
    data: XOR<SpecialistProfileUpdateManyMutationInput, SpecialistProfileUncheckedUpdateManyInput>
    /**
     * Filter which SpecialistProfiles to update
     */
    where?: SpecialistProfileWhereInput
    /**
     * Limit how many SpecialistProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialistProfile upsert
   */
  export type SpecialistProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialistProfile to update in case it exists.
     */
    where: SpecialistProfileWhereUniqueInput
    /**
     * In case the SpecialistProfile found by the `where` argument doesn't exist, create a new SpecialistProfile with this data.
     */
    create: XOR<SpecialistProfileCreateInput, SpecialistProfileUncheckedCreateInput>
    /**
     * In case the SpecialistProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialistProfileUpdateInput, SpecialistProfileUncheckedUpdateInput>
  }

  /**
   * SpecialistProfile delete
   */
  export type SpecialistProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
    /**
     * Filter which SpecialistProfile to delete.
     */
    where: SpecialistProfileWhereUniqueInput
  }

  /**
   * SpecialistProfile deleteMany
   */
  export type SpecialistProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialistProfiles to delete
     */
    where?: SpecialistProfileWhereInput
    /**
     * Limit how many SpecialistProfiles to delete.
     */
    limit?: number
  }

  /**
   * SpecialistProfile.appointments
   */
  export type SpecialistProfile$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * SpecialistProfile without action
   */
  export type SpecialistProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistProfile
     */
    select?: SpecialistProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistProfile
     */
    omit?: SpecialistProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistProfileInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    farmerId: string | null
    providerId: string | null
    specialistId: string | null
    status: $Enums.BookingStatus | null
    appointmentDate: Date | null
    problemDesc: string | null
    meetingLink: string | null
    createdAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    farmerId: string | null
    providerId: string | null
    specialistId: string | null
    status: $Enums.BookingStatus | null
    appointmentDate: Date | null
    problemDesc: string | null
    meetingLink: string | null
    createdAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    farmerId: number
    providerId: number
    specialistId: number
    status: number
    appointmentDate: number
    problemDesc: number
    meetingLink: number
    createdAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    farmerId?: true
    providerId?: true
    specialistId?: true
    status?: true
    appointmentDate?: true
    problemDesc?: true
    meetingLink?: true
    createdAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    farmerId?: true
    providerId?: true
    specialistId?: true
    status?: true
    appointmentDate?: true
    problemDesc?: true
    meetingLink?: true
    createdAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    farmerId?: true
    providerId?: true
    specialistId?: true
    status?: true
    appointmentDate?: true
    problemDesc?: true
    meetingLink?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    farmerId: string | null
    providerId: string | null
    specialistId: string
    status: $Enums.BookingStatus
    appointmentDate: Date
    problemDesc: string | null
    meetingLink: string | null
    createdAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    providerId?: boolean
    specialistId?: boolean
    status?: boolean
    appointmentDate?: boolean
    problemDesc?: boolean
    meetingLink?: boolean
    createdAt?: boolean
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    providerId?: boolean
    specialistId?: boolean
    status?: boolean
    appointmentDate?: boolean
    problemDesc?: boolean
    meetingLink?: boolean
    createdAt?: boolean
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    providerId?: boolean
    specialistId?: boolean
    status?: boolean
    appointmentDate?: boolean
    problemDesc?: boolean
    meetingLink?: boolean
    createdAt?: boolean
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    farmerId?: boolean
    providerId?: boolean
    specialistId?: boolean
    status?: boolean
    appointmentDate?: boolean
    problemDesc?: boolean
    meetingLink?: boolean
    createdAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "providerId" | "specialistId" | "status" | "appointmentDate" | "problemDesc" | "meetingLink" | "createdAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Appointment$farmerArgs<ExtArgs>
    provider?: boolean | Appointment$providerArgs<ExtArgs>
    specialist?: boolean | SpecialistProfileDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      farmer: Prisma.$UserPayload<ExtArgs> | null
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      specialist: Prisma.$SpecialistProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmerId: string | null
      providerId: string | null
      specialistId: string
      status: $Enums.BookingStatus
      appointmentDate: Date
      problemDesc: string | null
      meetingLink: string | null
      createdAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends Appointment$farmerArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$farmerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provider<T extends Appointment$providerArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    specialist<T extends SpecialistProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistProfileDefaultArgs<ExtArgs>>): Prisma__SpecialistProfileClient<$Result.GetResult<Prisma.$SpecialistProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly farmerId: FieldRef<"Appointment", 'String'>
    readonly providerId: FieldRef<"Appointment", 'String'>
    readonly specialistId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'BookingStatus'>
    readonly appointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly problemDesc: FieldRef<"Appointment", 'String'>
    readonly meetingLink: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.farmer
   */
  export type Appointment$farmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Appointment.provider
   */
  export type Appointment$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    location: number
    avatar: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    location?: true
    avatar?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    location: string | null
    avatar: string | null
    role: $Enums.Role
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiQueries?: boolean | Provider$aiQueriesArgs<ExtArgs>
    blogs?: boolean | Provider$blogsArgs<ExtArgs>
    bookingsAsProvider?: boolean | Provider$bookingsAsProviderArgs<ExtArgs>
    equipment?: boolean | Provider$equipmentArgs<ExtArgs>
    notifications?: boolean | Provider$notificationsArgs<ExtArgs>
    reviews?: boolean | Provider$reviewsArgs<ExtArgs>
    appointments?: boolean | Provider$appointmentsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "location" | "avatar" | "role" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiQueries?: boolean | Provider$aiQueriesArgs<ExtArgs>
    blogs?: boolean | Provider$blogsArgs<ExtArgs>
    bookingsAsProvider?: boolean | Provider$bookingsAsProviderArgs<ExtArgs>
    equipment?: boolean | Provider$equipmentArgs<ExtArgs>
    notifications?: boolean | Provider$notificationsArgs<ExtArgs>
    reviews?: boolean | Provider$reviewsArgs<ExtArgs>
    appointments?: boolean | Provider$appointmentsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      aiQueries: Prisma.$AIQueryPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      bookingsAsProvider: Prisma.$BookingPayload<ExtArgs>[]
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      location: string | null
      avatar: string | null
      role: $Enums.Role
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiQueries<T extends Provider$aiQueriesArgs<ExtArgs> = {}>(args?: Subset<T, Provider$aiQueriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogs<T extends Provider$blogsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsProvider<T extends Provider$bookingsAsProviderArgs<ExtArgs> = {}>(args?: Subset<T, Provider$bookingsAsProviderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipment<T extends Provider$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Provider$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Provider$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Provider$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Provider$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly email: FieldRef<"Provider", 'String'>
    readonly password: FieldRef<"Provider", 'String'>
    readonly phone: FieldRef<"Provider", 'String'>
    readonly location: FieldRef<"Provider", 'String'>
    readonly avatar: FieldRef<"Provider", 'String'>
    readonly role: FieldRef<"Provider", 'Role'>
    readonly isVerified: FieldRef<"Provider", 'Boolean'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.aiQueries
   */
  export type Provider$aiQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    where?: AIQueryWhereInput
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    cursor?: AIQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIQueryScalarFieldEnum | AIQueryScalarFieldEnum[]
  }

  /**
   * Provider.blogs
   */
  export type Provider$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Provider.bookingsAsProvider
   */
  export type Provider$bookingsAsProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Provider.equipment
   */
  export type Provider$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Provider.notifications
   */
  export type Provider$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Provider.reviews
   */
  export type Provider$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Provider.appointments
   */
  export type Provider$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    pricePerDay: number | null
    rating: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    pricePerDay: number | null
    rating: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pricePerDay: number | null
    location: string | null
    availability: boolean | null
    rating: number | null
    categoryId: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pricePerDay: number | null
    location: string | null
    availability: boolean | null
    rating: number | null
    categoryId: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    pricePerDay: number
    location: number
    availability: number
    rating: number
    images: number
    categoryId: number
    providerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    pricePerDay?: true
    rating?: true
  }

  export type EquipmentSumAggregateInputType = {
    pricePerDay?: true
    rating?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pricePerDay?: true
    location?: true
    availability?: true
    rating?: true
    categoryId?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pricePerDay?: true
    location?: true
    availability?: true
    rating?: true
    categoryId?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pricePerDay?: true
    location?: true
    availability?: true
    rating?: true
    images?: true
    categoryId?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability: boolean
    rating: number
    images: string[]
    categoryId: string
    providerId: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pricePerDay?: boolean
    location?: boolean
    availability?: boolean
    rating?: boolean
    images?: boolean
    categoryId?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Equipment$bookingsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    reviews?: boolean | Equipment$reviewsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pricePerDay?: boolean
    location?: boolean
    availability?: boolean
    rating?: boolean
    images?: boolean
    categoryId?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pricePerDay?: boolean
    location?: boolean
    availability?: boolean
    rating?: boolean
    images?: boolean
    categoryId?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    pricePerDay?: boolean
    location?: boolean
    availability?: boolean
    rating?: boolean
    images?: boolean
    categoryId?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "pricePerDay" | "location" | "availability" | "rating" | "images" | "categoryId" | "providerId" | "createdAt" | "updatedAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Equipment$bookingsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    reviews?: boolean | Equipment$reviewsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      pricePerDay: number
      location: string
      availability: boolean
      rating: number
      images: string[]
      categoryId: string
      providerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Equipment$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Equipment$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly title: FieldRef<"Equipment", 'String'>
    readonly description: FieldRef<"Equipment", 'String'>
    readonly pricePerDay: FieldRef<"Equipment", 'Float'>
    readonly location: FieldRef<"Equipment", 'String'>
    readonly availability: FieldRef<"Equipment", 'Boolean'>
    readonly rating: FieldRef<"Equipment", 'Float'>
    readonly images: FieldRef<"Equipment", 'String[]'>
    readonly categoryId: FieldRef<"Equipment", 'String'>
    readonly providerId: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.bookings
   */
  export type Equipment$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Equipment.reviews
   */
  export type Equipment$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    equipment?: boolean | Category$equipmentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | Category$equipmentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends Category$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Category$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.equipment
   */
  export type Category$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    farmerId: string | null
    equipmentId: string | null
    status: $Enums.BookingStatus | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    farmerId: string | null
    equipmentId: string | null
    status: $Enums.BookingStatus | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    farmerId: number
    equipmentId: number
    status: number
    startDate: number
    endDate: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    providerId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    farmerId?: true
    equipmentId?: true
    status?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    farmerId?: true
    equipmentId?: true
    status?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    farmerId?: true
    equipmentId?: true
    status?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    farmerId: string
    equipmentId: string
    status: $Enums.BookingStatus
    startDate: Date
    endDate: Date
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    providerId: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    equipmentId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    equipmentId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    equipmentId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    farmerId?: boolean
    equipmentId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "equipmentId" | "status" | "startDate" | "endDate" | "totalPrice" | "createdAt" | "updatedAt" | "providerId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | Booking$providerArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      farmer: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmerId: string
      equipmentId: string
      status: $Enums.BookingStatus
      startDate: Date
      endDate: Date
      totalPrice: number
      createdAt: Date
      updatedAt: Date
      providerId: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    farmer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends Booking$providerArgs<ExtArgs> = {}>(args?: Subset<T, Booking$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly farmerId: FieldRef<"Booking", 'String'>
    readonly equipmentId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly startDate: FieldRef<"Booking", 'DateTime'>
    readonly endDate: FieldRef<"Booking", 'DateTime'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly providerId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.provider
   */
  export type Booking$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    userId: string | null
    equipmentId: string | null
    createdAt: Date | null
    providerId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    userId: string | null
    equipmentId: string | null
    createdAt: Date | null
    providerId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    equipmentId: number
    createdAt: number
    providerId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    equipmentId?: true
    createdAt?: true
    providerId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    equipmentId?: true
    createdAt?: true
    providerId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    equipmentId?: true
    createdAt?: true
    providerId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    userId: string | null
    equipmentId: string
    createdAt: Date
    providerId: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    equipmentId?: boolean
    createdAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    equipmentId?: boolean
    createdAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    equipmentId?: boolean
    createdAt?: boolean
    providerId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    equipmentId?: boolean
    createdAt?: boolean
    providerId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "equipmentId" | "createdAt" | "providerId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    provider?: boolean | Review$providerArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      userId: string | null
      equipmentId: string
      createdAt: Date
      providerId: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends Review$providerArgs<ExtArgs> = {}>(args?: Subset<T, Review$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Review$userArgs<ExtArgs> = {}>(args?: Subset<T, Review$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly equipmentId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly providerId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.provider
   */
  export type Review$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Review.user
   */
  export type Review$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model AIQuery
   */

  export type AggregateAIQuery = {
    _count: AIQueryCountAggregateOutputType | null
    _min: AIQueryMinAggregateOutputType | null
    _max: AIQueryMaxAggregateOutputType | null
  }

  export type AIQueryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    prompt: string | null
    response: string | null
    featureType: $Enums.AIFeatureType | null
    createdAt: Date | null
    providerId: string | null
  }

  export type AIQueryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    prompt: string | null
    response: string | null
    featureType: $Enums.AIFeatureType | null
    createdAt: Date | null
    providerId: string | null
  }

  export type AIQueryCountAggregateOutputType = {
    id: number
    userId: number
    prompt: number
    response: number
    featureType: number
    createdAt: number
    providerId: number
    _all: number
  }


  export type AIQueryMinAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    featureType?: true
    createdAt?: true
    providerId?: true
  }

  export type AIQueryMaxAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    featureType?: true
    createdAt?: true
    providerId?: true
  }

  export type AIQueryCountAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    featureType?: true
    createdAt?: true
    providerId?: true
    _all?: true
  }

  export type AIQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIQuery to aggregate.
     */
    where?: AIQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIQueries to fetch.
     */
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIQueries
    **/
    _count?: true | AIQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIQueryMaxAggregateInputType
  }

  export type GetAIQueryAggregateType<T extends AIQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateAIQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIQuery[P]>
      : GetScalarType<T[P], AggregateAIQuery[P]>
  }




  export type AIQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIQueryWhereInput
    orderBy?: AIQueryOrderByWithAggregationInput | AIQueryOrderByWithAggregationInput[]
    by: AIQueryScalarFieldEnum[] | AIQueryScalarFieldEnum
    having?: AIQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIQueryCountAggregateInputType | true
    _min?: AIQueryMinAggregateInputType
    _max?: AIQueryMaxAggregateInputType
  }

  export type AIQueryGroupByOutputType = {
    id: string
    userId: string | null
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt: Date
    providerId: string | null
    _count: AIQueryCountAggregateOutputType | null
    _min: AIQueryMinAggregateOutputType | null
    _max: AIQueryMaxAggregateOutputType | null
  }

  type GetAIQueryGroupByPayload<T extends AIQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIQueryGroupByOutputType[P]>
            : GetScalarType<T[P], AIQueryGroupByOutputType[P]>
        }
      >
    >


  export type AIQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    featureType?: boolean
    createdAt?: boolean
    providerId?: boolean
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIQuery"]>

  export type AIQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    featureType?: boolean
    createdAt?: boolean
    providerId?: boolean
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIQuery"]>

  export type AIQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    featureType?: boolean
    createdAt?: boolean
    providerId?: boolean
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIQuery"]>

  export type AIQuerySelectScalar = {
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    featureType?: boolean
    createdAt?: boolean
    providerId?: boolean
  }

  export type AIQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "prompt" | "response" | "featureType" | "createdAt" | "providerId", ExtArgs["result"]["aIQuery"]>
  export type AIQueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }
  export type AIQueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }
  export type AIQueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AIQuery$providerArgs<ExtArgs>
    user?: boolean | AIQuery$userArgs<ExtArgs>
  }

  export type $AIQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIQuery"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      prompt: string
      response: string
      featureType: $Enums.AIFeatureType
      createdAt: Date
      providerId: string | null
    }, ExtArgs["result"]["aIQuery"]>
    composites: {}
  }

  type AIQueryGetPayload<S extends boolean | null | undefined | AIQueryDefaultArgs> = $Result.GetResult<Prisma.$AIQueryPayload, S>

  type AIQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIQueryCountAggregateInputType | true
    }

  export interface AIQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIQuery'], meta: { name: 'AIQuery' } }
    /**
     * Find zero or one AIQuery that matches the filter.
     * @param {AIQueryFindUniqueArgs} args - Arguments to find a AIQuery
     * @example
     * // Get one AIQuery
     * const aIQuery = await prisma.aIQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIQueryFindUniqueArgs>(args: SelectSubset<T, AIQueryFindUniqueArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIQueryFindUniqueOrThrowArgs} args - Arguments to find a AIQuery
     * @example
     * // Get one AIQuery
     * const aIQuery = await prisma.aIQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, AIQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryFindFirstArgs} args - Arguments to find a AIQuery
     * @example
     * // Get one AIQuery
     * const aIQuery = await prisma.aIQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIQueryFindFirstArgs>(args?: SelectSubset<T, AIQueryFindFirstArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryFindFirstOrThrowArgs} args - Arguments to find a AIQuery
     * @example
     * // Get one AIQuery
     * const aIQuery = await prisma.aIQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, AIQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIQueries
     * const aIQueries = await prisma.aIQuery.findMany()
     * 
     * // Get first 10 AIQueries
     * const aIQueries = await prisma.aIQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIQueryWithIdOnly = await prisma.aIQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIQueryFindManyArgs>(args?: SelectSubset<T, AIQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIQuery.
     * @param {AIQueryCreateArgs} args - Arguments to create a AIQuery.
     * @example
     * // Create one AIQuery
     * const AIQuery = await prisma.aIQuery.create({
     *   data: {
     *     // ... data to create a AIQuery
     *   }
     * })
     * 
     */
    create<T extends AIQueryCreateArgs>(args: SelectSubset<T, AIQueryCreateArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIQueries.
     * @param {AIQueryCreateManyArgs} args - Arguments to create many AIQueries.
     * @example
     * // Create many AIQueries
     * const aIQuery = await prisma.aIQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIQueryCreateManyArgs>(args?: SelectSubset<T, AIQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIQueries and returns the data saved in the database.
     * @param {AIQueryCreateManyAndReturnArgs} args - Arguments to create many AIQueries.
     * @example
     * // Create many AIQueries
     * const aIQuery = await prisma.aIQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIQueries and only return the `id`
     * const aIQueryWithIdOnly = await prisma.aIQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, AIQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIQuery.
     * @param {AIQueryDeleteArgs} args - Arguments to delete one AIQuery.
     * @example
     * // Delete one AIQuery
     * const AIQuery = await prisma.aIQuery.delete({
     *   where: {
     *     // ... filter to delete one AIQuery
     *   }
     * })
     * 
     */
    delete<T extends AIQueryDeleteArgs>(args: SelectSubset<T, AIQueryDeleteArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIQuery.
     * @param {AIQueryUpdateArgs} args - Arguments to update one AIQuery.
     * @example
     * // Update one AIQuery
     * const aIQuery = await prisma.aIQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIQueryUpdateArgs>(args: SelectSubset<T, AIQueryUpdateArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIQueries.
     * @param {AIQueryDeleteManyArgs} args - Arguments to filter AIQueries to delete.
     * @example
     * // Delete a few AIQueries
     * const { count } = await prisma.aIQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIQueryDeleteManyArgs>(args?: SelectSubset<T, AIQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIQueries
     * const aIQuery = await prisma.aIQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIQueryUpdateManyArgs>(args: SelectSubset<T, AIQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIQueries and returns the data updated in the database.
     * @param {AIQueryUpdateManyAndReturnArgs} args - Arguments to update many AIQueries.
     * @example
     * // Update many AIQueries
     * const aIQuery = await prisma.aIQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIQueries and only return the `id`
     * const aIQueryWithIdOnly = await prisma.aIQuery.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, AIQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIQuery.
     * @param {AIQueryUpsertArgs} args - Arguments to update or create a AIQuery.
     * @example
     * // Update or create a AIQuery
     * const aIQuery = await prisma.aIQuery.upsert({
     *   create: {
     *     // ... data to create a AIQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIQuery we want to update
     *   }
     * })
     */
    upsert<T extends AIQueryUpsertArgs>(args: SelectSubset<T, AIQueryUpsertArgs<ExtArgs>>): Prisma__AIQueryClient<$Result.GetResult<Prisma.$AIQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryCountArgs} args - Arguments to filter AIQueries to count.
     * @example
     * // Count the number of AIQueries
     * const count = await prisma.aIQuery.count({
     *   where: {
     *     // ... the filter for the AIQueries we want to count
     *   }
     * })
    **/
    count<T extends AIQueryCountArgs>(
      args?: Subset<T, AIQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIQueryAggregateArgs>(args: Subset<T, AIQueryAggregateArgs>): Prisma.PrismaPromise<GetAIQueryAggregateType<T>>

    /**
     * Group by AIQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIQueryGroupByArgs} args - Group by arguments.
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
      T extends AIQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIQueryGroupByArgs['orderBy'] }
        : { orderBy?: AIQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, AIQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIQuery model
   */
  readonly fields: AIQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends AIQuery$providerArgs<ExtArgs> = {}>(args?: Subset<T, AIQuery$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends AIQuery$userArgs<ExtArgs> = {}>(args?: Subset<T, AIQuery$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIQuery model
   */
  interface AIQueryFieldRefs {
    readonly id: FieldRef<"AIQuery", 'String'>
    readonly userId: FieldRef<"AIQuery", 'String'>
    readonly prompt: FieldRef<"AIQuery", 'String'>
    readonly response: FieldRef<"AIQuery", 'String'>
    readonly featureType: FieldRef<"AIQuery", 'AIFeatureType'>
    readonly createdAt: FieldRef<"AIQuery", 'DateTime'>
    readonly providerId: FieldRef<"AIQuery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIQuery findUnique
   */
  export type AIQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter, which AIQuery to fetch.
     */
    where: AIQueryWhereUniqueInput
  }

  /**
   * AIQuery findUniqueOrThrow
   */
  export type AIQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter, which AIQuery to fetch.
     */
    where: AIQueryWhereUniqueInput
  }

  /**
   * AIQuery findFirst
   */
  export type AIQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter, which AIQuery to fetch.
     */
    where?: AIQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIQueries to fetch.
     */
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIQueries.
     */
    cursor?: AIQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIQueries.
     */
    distinct?: AIQueryScalarFieldEnum | AIQueryScalarFieldEnum[]
  }

  /**
   * AIQuery findFirstOrThrow
   */
  export type AIQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter, which AIQuery to fetch.
     */
    where?: AIQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIQueries to fetch.
     */
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIQueries.
     */
    cursor?: AIQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIQueries.
     */
    distinct?: AIQueryScalarFieldEnum | AIQueryScalarFieldEnum[]
  }

  /**
   * AIQuery findMany
   */
  export type AIQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter, which AIQueries to fetch.
     */
    where?: AIQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIQueries to fetch.
     */
    orderBy?: AIQueryOrderByWithRelationInput | AIQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIQueries.
     */
    cursor?: AIQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIQueries.
     */
    distinct?: AIQueryScalarFieldEnum | AIQueryScalarFieldEnum[]
  }

  /**
   * AIQuery create
   */
  export type AIQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * The data needed to create a AIQuery.
     */
    data: XOR<AIQueryCreateInput, AIQueryUncheckedCreateInput>
  }

  /**
   * AIQuery createMany
   */
  export type AIQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIQueries.
     */
    data: AIQueryCreateManyInput | AIQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIQuery createManyAndReturn
   */
  export type AIQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * The data used to create many AIQueries.
     */
    data: AIQueryCreateManyInput | AIQueryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIQuery update
   */
  export type AIQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * The data needed to update a AIQuery.
     */
    data: XOR<AIQueryUpdateInput, AIQueryUncheckedUpdateInput>
    /**
     * Choose, which AIQuery to update.
     */
    where: AIQueryWhereUniqueInput
  }

  /**
   * AIQuery updateMany
   */
  export type AIQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIQueries.
     */
    data: XOR<AIQueryUpdateManyMutationInput, AIQueryUncheckedUpdateManyInput>
    /**
     * Filter which AIQueries to update
     */
    where?: AIQueryWhereInput
    /**
     * Limit how many AIQueries to update.
     */
    limit?: number
  }

  /**
   * AIQuery updateManyAndReturn
   */
  export type AIQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * The data used to update AIQueries.
     */
    data: XOR<AIQueryUpdateManyMutationInput, AIQueryUncheckedUpdateManyInput>
    /**
     * Filter which AIQueries to update
     */
    where?: AIQueryWhereInput
    /**
     * Limit how many AIQueries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIQuery upsert
   */
  export type AIQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * The filter to search for the AIQuery to update in case it exists.
     */
    where: AIQueryWhereUniqueInput
    /**
     * In case the AIQuery found by the `where` argument doesn't exist, create a new AIQuery with this data.
     */
    create: XOR<AIQueryCreateInput, AIQueryUncheckedCreateInput>
    /**
     * In case the AIQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIQueryUpdateInput, AIQueryUncheckedUpdateInput>
  }

  /**
   * AIQuery delete
   */
  export type AIQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
    /**
     * Filter which AIQuery to delete.
     */
    where: AIQueryWhereUniqueInput
  }

  /**
   * AIQuery deleteMany
   */
  export type AIQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIQueries to delete
     */
    where?: AIQueryWhereInput
    /**
     * Limit how many AIQueries to delete.
     */
    limit?: number
  }

  /**
   * AIQuery.provider
   */
  export type AIQuery$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * AIQuery.user
   */
  export type AIQuery$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AIQuery without action
   */
  export type AIQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIQuery
     */
    select?: AIQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIQuery
     */
    omit?: AIQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIQueryInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorEmail: string | null
    authorName: string | null
    category: $Enums.BlogCategory | null
    image: string | null
    providerId: string | null
    status: $Enums.BlogStatus | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorEmail: string | null
    authorName: string | null
    category: $Enums.BlogCategory | null
    image: string | null
    providerId: string | null
    status: $Enums.BlogStatus | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    excerpt: number
    authorId: number
    createdAt: number
    updatedAt: number
    authorEmail: number
    authorName: number
    category: number
    image: number
    providerId: number
    status: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    authorEmail?: true
    authorName?: true
    category?: true
    image?: true
    providerId?: true
    status?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    authorEmail?: true
    authorName?: true
    category?: true
    image?: true
    providerId?: true
    status?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    authorEmail?: true
    authorName?: true
    category?: true
    image?: true
    providerId?: true
    status?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    excerpt: string | null
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    authorEmail: string
    authorName: string
    category: $Enums.BlogCategory
    image: string | null
    providerId: string | null
    status: $Enums.BlogStatus
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorEmail?: boolean
    authorName?: boolean
    category?: boolean
    image?: boolean
    providerId?: boolean
    status?: boolean
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorEmail?: boolean
    authorName?: boolean
    category?: boolean
    image?: boolean
    providerId?: boolean
    status?: boolean
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorEmail?: boolean
    authorName?: boolean
    category?: boolean
    image?: boolean
    providerId?: boolean
    status?: boolean
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorEmail?: boolean
    authorName?: boolean
    category?: boolean
    image?: boolean
    providerId?: boolean
    status?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "excerpt" | "authorId" | "createdAt" | "updatedAt" | "authorEmail" | "authorName" | "category" | "image" | "providerId" | "status", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Blog$authorArgs<ExtArgs>
    provider?: boolean | Blog$providerArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      provider: Prisma.$ProviderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      excerpt: string | null
      authorId: string | null
      createdAt: Date
      updatedAt: Date
      authorEmail: string
      authorName: string
      category: $Enums.BlogCategory
      image: string | null
      providerId: string | null
      status: $Enums.BlogStatus
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Blog$authorArgs<ExtArgs> = {}>(args?: Subset<T, Blog$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provider<T extends Blog$providerArgs<ExtArgs> = {}>(args?: Subset<T, Blog$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly authorId: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
    readonly authorEmail: FieldRef<"Blog", 'String'>
    readonly authorName: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'BlogCategory'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly providerId: FieldRef<"Blog", 'String'>
    readonly status: FieldRef<"Blog", 'BlogStatus'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.author
   */
  export type Blog$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Blog.provider
   */
  export type Blog$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    appointmentId: string | null
    bookingId: string | null
    aiQueryId: string | null
    blogId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    appointmentId: string | null
    bookingId: string | null
    aiQueryId: string | null
    blogId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    providerId: number
    title: number
    message: number
    type: number
    isRead: number
    createdAt: number
    appointmentId: number
    bookingId: number
    aiQueryId: number
    blogId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
    bookingId?: true
    aiQueryId?: true
    blogId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
    bookingId?: true
    aiQueryId?: true
    blogId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
    bookingId?: true
    aiQueryId?: true
    blogId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
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




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string | null
    providerId: string | null
    title: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    appointmentId: string | null
    bookingId: string | null
    aiQueryId: string | null
    blogId: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    bookingId?: boolean
    aiQueryId?: boolean
    blogId?: boolean
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    bookingId?: boolean
    aiQueryId?: boolean
    blogId?: boolean
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    bookingId?: boolean
    aiQueryId?: boolean
    blogId?: boolean
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    providerId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    bookingId?: boolean
    aiQueryId?: boolean
    blogId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "providerId" | "title" | "message" | "type" | "isRead" | "createdAt" | "appointmentId" | "bookingId" | "aiQueryId" | "blogId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | Notification$providerArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      providerId: string | null
      title: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
      appointmentId: string | null
      bookingId: string | null
      aiQueryId: string | null
      blogId: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
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
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends Notification$providerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly providerId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly appointmentId: FieldRef<"Notification", 'String'>
    readonly bookingId: FieldRef<"Notification", 'String'>
    readonly aiQueryId: FieldRef<"Notification", 'String'>
    readonly blogId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.provider
   */
  export type Notification$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    contextType: string | null
    contextId: string | null
    createdAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    contextType: string | null
    contextId: string | null
    createdAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    contextType: number
    contextId: number
    createdAt: number
    _all: number
  }


  export type ChatRoomMinAggregateInputType = {
    id?: true
    contextType?: true
    contextId?: true
    createdAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    contextType?: true
    contextId?: true
    createdAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    contextType?: true
    contextId?: true
    createdAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    contextType: string
    contextId: string
    createdAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextType?: boolean
    contextId?: boolean
    createdAt?: boolean
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextType?: boolean
    contextId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextType?: boolean
    contextId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    contextType?: boolean
    contextId?: boolean
    createdAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contextType" | "contextId" | "createdAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contextType: string
      contextId: string
      createdAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
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
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly contextType: FieldRef<"ChatRoom", 'String'>
    readonly contextId: FieldRef<"ChatRoom", 'String'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderType: string | null
    senderId: string | null
    senderName: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderType: string | null
    senderId: string | null
    senderName: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    roomId: number
    senderType: number
    senderId: number
    senderName: number
    content: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    senderType?: true
    senderId?: true
    senderName?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderType?: true
    senderId?: true
    senderName?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    senderType?: true
    senderId?: true
    senderName?: true
    content?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    roomId: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead: boolean
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderType?: boolean
    senderId?: boolean
    senderName?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderType?: boolean
    senderId?: boolean
    senderName?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderType?: boolean
    senderId?: boolean
    senderName?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderType?: boolean
    senderId?: boolean
    senderName?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderType" | "senderId" | "senderName" | "content" | "isRead" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      room: Prisma.$ChatRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderType: string
      senderId: string
      senderName: string
      content: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly roomId: FieldRef<"ChatMessage", 'String'>
    readonly senderType: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly senderName: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly isRead: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    location: 'location',
    avatar: 'avatar',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpecialistProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    qualifications: 'qualifications',
    registrationNo: 'registrationNo',
    experienceYears: 'experienceYears',
    consultationFee: 'consultationFee',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialistProfileScalarFieldEnum = (typeof SpecialistProfileScalarFieldEnum)[keyof typeof SpecialistProfileScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    providerId: 'providerId',
    specialistId: 'specialistId',
    status: 'status',
    appointmentDate: 'appointmentDate',
    problemDesc: 'problemDesc',
    meetingLink: 'meetingLink',
    createdAt: 'createdAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    location: 'location',
    avatar: 'avatar',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    pricePerDay: 'pricePerDay',
    location: 'location',
    availability: 'availability',
    rating: 'rating',
    images: 'images',
    categoryId: 'categoryId',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    equipmentId: 'equipmentId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    providerId: 'providerId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    equipmentId: 'equipmentId',
    createdAt: 'createdAt',
    providerId: 'providerId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AIQueryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    prompt: 'prompt',
    response: 'response',
    featureType: 'featureType',
    createdAt: 'createdAt',
    providerId: 'providerId'
  };

  export type AIQueryScalarFieldEnum = (typeof AIQueryScalarFieldEnum)[keyof typeof AIQueryScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorEmail: 'authorEmail',
    authorName: 'authorName',
    category: 'category',
    image: 'image',
    providerId: 'providerId',
    status: 'status'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerId: 'providerId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt',
    appointmentId: 'appointmentId',
    bookingId: 'bookingId',
    aiQueryId: 'aiQueryId',
    blogId: 'blogId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    contextType: 'contextType',
    contextId: 'contextId',
    createdAt: 'createdAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderType: 'senderType',
    senderId: 'senderId',
    senderName: 'senderName',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'AIFeatureType'
   */
  export type EnumAIFeatureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIFeatureType'>
    


  /**
   * Reference to a field of type 'AIFeatureType[]'
   */
  export type ListEnumAIFeatureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIFeatureType[]'>
    


  /**
   * Reference to a field of type 'BlogCategory'
   */
  export type EnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory'>
    


  /**
   * Reference to a field of type 'BlogCategory[]'
   */
  export type ListEnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory[]'>
    


  /**
   * Reference to a field of type 'BlogStatus'
   */
  export type EnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus'>
    


  /**
   * Reference to a field of type 'BlogStatus[]'
   */
  export type ListEnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    aiQueries?: AIQueryListRelationFilter
    appointments?: AppointmentListRelationFilter
    blogs?: BlogListRelationFilter
    bookingsAsFarmer?: BookingListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    specialistProfile?: XOR<SpecialistProfileNullableScalarRelationFilter, SpecialistProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiQueries?: AIQueryOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
    bookingsAsFarmer?: BookingOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    specialistProfile?: SpecialistProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    location?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    aiQueries?: AIQueryListRelationFilter
    appointments?: AppointmentListRelationFilter
    blogs?: BlogListRelationFilter
    bookingsAsFarmer?: BookingListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    specialistProfile?: XOR<SpecialistProfileNullableScalarRelationFilter, SpecialistProfileWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SpecialistProfileWhereInput = {
    AND?: SpecialistProfileWhereInput | SpecialistProfileWhereInput[]
    OR?: SpecialistProfileWhereInput[]
    NOT?: SpecialistProfileWhereInput | SpecialistProfileWhereInput[]
    id?: StringFilter<"SpecialistProfile"> | string
    userId?: StringFilter<"SpecialistProfile"> | string
    specialization?: StringNullableFilter<"SpecialistProfile"> | string | null
    qualifications?: StringNullableFilter<"SpecialistProfile"> | string | null
    registrationNo?: StringNullableFilter<"SpecialistProfile"> | string | null
    experienceYears?: IntNullableFilter<"SpecialistProfile"> | number | null
    consultationFee?: FloatNullableFilter<"SpecialistProfile"> | number | null
    bio?: StringNullableFilter<"SpecialistProfile"> | string | null
    createdAt?: DateTimeFilter<"SpecialistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialistProfile"> | Date | string
    appointments?: AppointmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SpecialistProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    registrationNo?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SpecialistProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SpecialistProfileWhereInput | SpecialistProfileWhereInput[]
    OR?: SpecialistProfileWhereInput[]
    NOT?: SpecialistProfileWhereInput | SpecialistProfileWhereInput[]
    specialization?: StringNullableFilter<"SpecialistProfile"> | string | null
    qualifications?: StringNullableFilter<"SpecialistProfile"> | string | null
    registrationNo?: StringNullableFilter<"SpecialistProfile"> | string | null
    experienceYears?: IntNullableFilter<"SpecialistProfile"> | number | null
    consultationFee?: FloatNullableFilter<"SpecialistProfile"> | number | null
    bio?: StringNullableFilter<"SpecialistProfile"> | string | null
    createdAt?: DateTimeFilter<"SpecialistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialistProfile"> | Date | string
    appointments?: AppointmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SpecialistProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    registrationNo?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialistProfileCountOrderByAggregateInput
    _avg?: SpecialistProfileAvgOrderByAggregateInput
    _max?: SpecialistProfileMaxOrderByAggregateInput
    _min?: SpecialistProfileMinOrderByAggregateInput
    _sum?: SpecialistProfileSumOrderByAggregateInput
  }

  export type SpecialistProfileScalarWhereWithAggregatesInput = {
    AND?: SpecialistProfileScalarWhereWithAggregatesInput | SpecialistProfileScalarWhereWithAggregatesInput[]
    OR?: SpecialistProfileScalarWhereWithAggregatesInput[]
    NOT?: SpecialistProfileScalarWhereWithAggregatesInput | SpecialistProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecialistProfile"> | string
    userId?: StringWithAggregatesFilter<"SpecialistProfile"> | string
    specialization?: StringNullableWithAggregatesFilter<"SpecialistProfile"> | string | null
    qualifications?: StringNullableWithAggregatesFilter<"SpecialistProfile"> | string | null
    registrationNo?: StringNullableWithAggregatesFilter<"SpecialistProfile"> | string | null
    experienceYears?: IntNullableWithAggregatesFilter<"SpecialistProfile"> | number | null
    consultationFee?: FloatNullableWithAggregatesFilter<"SpecialistProfile"> | number | null
    bio?: StringNullableWithAggregatesFilter<"SpecialistProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpecialistProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpecialistProfile"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    farmerId?: StringNullableFilter<"Appointment"> | string | null
    providerId?: StringNullableFilter<"Appointment"> | string | null
    specialistId?: StringFilter<"Appointment"> | string
    status?: EnumBookingStatusFilter<"Appointment"> | $Enums.BookingStatus
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    problemDesc?: StringNullableFilter<"Appointment"> | string | null
    meetingLink?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    farmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    specialist?: XOR<SpecialistProfileScalarRelationFilter, SpecialistProfileWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    specialistId?: SortOrder
    status?: SortOrder
    appointmentDate?: SortOrder
    problemDesc?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    farmer?: UserOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    specialist?: SpecialistProfileOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    farmerId?: StringNullableFilter<"Appointment"> | string | null
    providerId?: StringNullableFilter<"Appointment"> | string | null
    specialistId?: StringFilter<"Appointment"> | string
    status?: EnumBookingStatusFilter<"Appointment"> | $Enums.BookingStatus
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    problemDesc?: StringNullableFilter<"Appointment"> | string | null
    meetingLink?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    farmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    specialist?: XOR<SpecialistProfileScalarRelationFilter, SpecialistProfileWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    specialistId?: SortOrder
    status?: SortOrder
    appointmentDate?: SortOrder
    problemDesc?: SortOrderInput | SortOrder
    meetingLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    farmerId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    specialistId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Appointment"> | $Enums.BookingStatus
    appointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    problemDesc?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    meetingLink?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    email?: StringFilter<"Provider"> | string
    password?: StringFilter<"Provider"> | string
    phone?: StringNullableFilter<"Provider"> | string | null
    location?: StringNullableFilter<"Provider"> | string | null
    avatar?: StringNullableFilter<"Provider"> | string | null
    role?: EnumRoleFilter<"Provider"> | $Enums.Role
    isVerified?: BoolFilter<"Provider"> | boolean
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    aiQueries?: AIQueryListRelationFilter
    blogs?: BlogListRelationFilter
    bookingsAsProvider?: BookingListRelationFilter
    equipment?: EquipmentListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiQueries?: AIQueryOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
    bookingsAsProvider?: BookingOrderByRelationAggregateInput
    equipment?: EquipmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringFilter<"Provider"> | string
    password?: StringFilter<"Provider"> | string
    location?: StringNullableFilter<"Provider"> | string | null
    avatar?: StringNullableFilter<"Provider"> | string | null
    role?: EnumRoleFilter<"Provider"> | $Enums.Role
    isVerified?: BoolFilter<"Provider"> | boolean
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    aiQueries?: AIQueryListRelationFilter
    blogs?: BlogListRelationFilter
    bookingsAsProvider?: BookingListRelationFilter
    equipment?: EquipmentListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id" | "email" | "phone">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    email?: StringWithAggregatesFilter<"Provider"> | string
    password?: StringWithAggregatesFilter<"Provider"> | string
    phone?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    location?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Provider"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"Provider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    title?: StringFilter<"Equipment"> | string
    description?: StringFilter<"Equipment"> | string
    pricePerDay?: FloatFilter<"Equipment"> | number
    location?: StringFilter<"Equipment"> | string
    availability?: BoolFilter<"Equipment"> | boolean
    rating?: FloatFilter<"Equipment"> | number
    images?: StringNullableListFilter<"Equipment">
    categoryId?: StringFilter<"Equipment"> | string
    providerId?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    bookings?: BookingListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    categoryId?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    title?: StringFilter<"Equipment"> | string
    description?: StringFilter<"Equipment"> | string
    pricePerDay?: FloatFilter<"Equipment"> | number
    location?: StringFilter<"Equipment"> | string
    availability?: BoolFilter<"Equipment"> | boolean
    rating?: FloatFilter<"Equipment"> | number
    images?: StringNullableListFilter<"Equipment">
    categoryId?: StringFilter<"Equipment"> | string
    providerId?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    bookings?: BookingListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    categoryId?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    title?: StringWithAggregatesFilter<"Equipment"> | string
    description?: StringWithAggregatesFilter<"Equipment"> | string
    pricePerDay?: FloatWithAggregatesFilter<"Equipment"> | number
    location?: StringWithAggregatesFilter<"Equipment"> | string
    availability?: BoolWithAggregatesFilter<"Equipment"> | boolean
    rating?: FloatWithAggregatesFilter<"Equipment"> | number
    images?: StringNullableListFilter<"Equipment">
    categoryId?: StringWithAggregatesFilter<"Equipment"> | string
    providerId?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    equipment?: EquipmentListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    equipment?: EquipmentListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    farmerId?: StringFilter<"Booking"> | string
    equipmentId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    providerId?: StringNullableFilter<"Booking"> | string | null
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    equipmentId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    farmer?: UserOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    farmerId?: StringFilter<"Booking"> | string
    equipmentId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    providerId?: StringNullableFilter<"Booking"> | string | null
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    equipmentId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    farmerId?: StringWithAggregatesFilter<"Booking"> | string
    equipmentId?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    startDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    providerId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    equipmentId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    providerId?: StringNullableFilter<"Review"> | string | null
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    equipmentId?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    equipmentId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    providerId?: StringNullableFilter<"Review"> | string | null
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    equipmentId?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    equipmentId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    providerId?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type AIQueryWhereInput = {
    AND?: AIQueryWhereInput | AIQueryWhereInput[]
    OR?: AIQueryWhereInput[]
    NOT?: AIQueryWhereInput | AIQueryWhereInput[]
    id?: StringFilter<"AIQuery"> | string
    userId?: StringNullableFilter<"AIQuery"> | string | null
    prompt?: StringFilter<"AIQuery"> | string
    response?: StringFilter<"AIQuery"> | string
    featureType?: EnumAIFeatureTypeFilter<"AIQuery"> | $Enums.AIFeatureType
    createdAt?: DateTimeFilter<"AIQuery"> | Date | string
    providerId?: StringNullableFilter<"AIQuery"> | string | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AIQueryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    featureType?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    provider?: ProviderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AIQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIQueryWhereInput | AIQueryWhereInput[]
    OR?: AIQueryWhereInput[]
    NOT?: AIQueryWhereInput | AIQueryWhereInput[]
    userId?: StringNullableFilter<"AIQuery"> | string | null
    prompt?: StringFilter<"AIQuery"> | string
    response?: StringFilter<"AIQuery"> | string
    featureType?: EnumAIFeatureTypeFilter<"AIQuery"> | $Enums.AIFeatureType
    createdAt?: DateTimeFilter<"AIQuery"> | Date | string
    providerId?: StringNullableFilter<"AIQuery"> | string | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AIQueryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    featureType?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrderInput | SortOrder
    _count?: AIQueryCountOrderByAggregateInput
    _max?: AIQueryMaxOrderByAggregateInput
    _min?: AIQueryMinOrderByAggregateInput
  }

  export type AIQueryScalarWhereWithAggregatesInput = {
    AND?: AIQueryScalarWhereWithAggregatesInput | AIQueryScalarWhereWithAggregatesInput[]
    OR?: AIQueryScalarWhereWithAggregatesInput[]
    NOT?: AIQueryScalarWhereWithAggregatesInput | AIQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIQuery"> | string
    userId?: StringNullableWithAggregatesFilter<"AIQuery"> | string | null
    prompt?: StringWithAggregatesFilter<"AIQuery"> | string
    response?: StringWithAggregatesFilter<"AIQuery"> | string
    featureType?: EnumAIFeatureTypeWithAggregatesFilter<"AIQuery"> | $Enums.AIFeatureType
    createdAt?: DateTimeWithAggregatesFilter<"AIQuery"> | Date | string
    providerId?: StringNullableWithAggregatesFilter<"AIQuery"> | string | null
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    authorEmail?: StringFilter<"Blog"> | string
    authorName?: StringFilter<"Blog"> | string
    category?: EnumBlogCategoryFilter<"Blog"> | $Enums.BlogCategory
    image?: StringNullableFilter<"Blog"> | string | null
    providerId?: StringNullableFilter<"Blog"> | string | null
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorEmail?: SortOrder
    authorName?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    status?: SortOrder
    author?: UserOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    authorEmail?: StringFilter<"Blog"> | string
    authorName?: StringFilter<"Blog"> | string
    category?: EnumBlogCategoryFilter<"Blog"> | $Enums.BlogCategory
    image?: StringNullableFilter<"Blog"> | string | null
    providerId?: StringNullableFilter<"Blog"> | string | null
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorEmail?: SortOrder
    authorName?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    authorId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    authorEmail?: StringWithAggregatesFilter<"Blog"> | string
    authorName?: StringWithAggregatesFilter<"Blog"> | string
    category?: EnumBlogCategoryWithAggregatesFilter<"Blog"> | $Enums.BlogCategory
    image?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    status?: EnumBlogStatusWithAggregatesFilter<"Blog"> | $Enums.BlogStatus
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    providerId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    bookingId?: StringNullableFilter<"Notification"> | string | null
    aiQueryId?: StringNullableFilter<"Notification"> | string | null
    blogId?: StringNullableFilter<"Notification"> | string | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    aiQueryId?: SortOrderInput | SortOrder
    blogId?: SortOrderInput | SortOrder
    provider?: ProviderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringNullableFilter<"Notification"> | string | null
    providerId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    bookingId?: StringNullableFilter<"Notification"> | string | null
    aiQueryId?: StringNullableFilter<"Notification"> | string | null
    blogId?: StringNullableFilter<"Notification"> | string | null
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    aiQueryId?: SortOrderInput | SortOrder
    blogId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    appointmentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    bookingId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    aiQueryId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    blogId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    contextType?: StringFilter<"ChatRoom"> | string
    contextId?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    messages?: ChatMessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    contextType?: SortOrder
    contextId?: SortOrder
    createdAt?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    contextType?: StringFilter<"ChatRoom"> | string
    contextId?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    contextType?: SortOrder
    contextId?: SortOrder
    createdAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    contextType?: StringWithAggregatesFilter<"ChatRoom"> | string
    contextId?: StringWithAggregatesFilter<"ChatRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    roomId?: StringFilter<"ChatMessage"> | string
    senderType?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    senderName?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    room?: ChatRoomOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    roomId?: StringFilter<"ChatMessage"> | string
    senderType?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    senderName?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    roomId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderType?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderName?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    isRead?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistProfileCreateInput = {
    id?: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutSpecialistInput
    user: UserCreateNestedOneWithoutSpecialistProfileInput
  }

  export type SpecialistProfileUncheckedCreateInput = {
    id?: string
    userId: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutSpecialistNestedInput
    user?: UserUpdateOneRequiredWithoutSpecialistProfileNestedInput
  }

  export type SpecialistProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistProfileCreateManyInput = {
    id?: string
    userId: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialistProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
    farmer?: UserCreateNestedOneWithoutAppointmentsInput
    provider?: ProviderCreateNestedOneWithoutAppointmentsInput
    specialist: SpecialistProfileCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    farmerId?: string | null
    providerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutAppointmentsNestedInput
    provider?: ProviderUpdateOneWithoutAppointmentsNestedInput
    specialist?: SpecialistProfileUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    farmerId?: string | null
    providerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutEquipmentInput
    category: CategoryCreateNestedOneWithoutEquipmentInput
    provider: ProviderCreateNestedOneWithoutEquipmentInput
    reviews?: ReviewCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEquipmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutEquipmentNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentNestedInput
    provider?: ProviderUpdateOneRequiredWithoutEquipmentNestedInput
    reviews?: ReviewUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEquipmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    equipment?: EquipmentCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: EquipmentUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: EquipmentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutBookingsInput
    farmer: UserCreateNestedOneWithoutBookingsAsFarmerInput
    provider?: ProviderCreateNestedOneWithoutBookingsAsProviderInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    farmerId: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutBookingsNestedInput
    farmer?: UserUpdateOneRequiredWithoutBookingsAsFarmerNestedInput
    provider?: ProviderUpdateOneWithoutBookingsAsProviderNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyInput = {
    id?: string
    farmerId: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutReviewsInput
    provider?: ProviderCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    equipmentId: string
    createdAt?: Date | string
    providerId?: string | null
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutReviewsNestedInput
    provider?: ProviderUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    equipmentId: string
    createdAt?: Date | string
    providerId?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIQueryCreateInput = {
    id?: string
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutAiQueriesInput
    user?: UserCreateNestedOneWithoutAiQueriesInput
  }

  export type AIQueryUncheckedCreateInput = {
    id?: string
    userId?: string | null
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    providerId?: string | null
  }

  export type AIQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutAiQueriesNestedInput
    user?: UserUpdateOneWithoutAiQueriesNestedInput
  }

  export type AIQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIQueryCreateManyInput = {
    id?: string
    userId?: string | null
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    providerId?: string | null
  }

  export type AIQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    status?: $Enums.BlogStatus
    author?: UserCreateNestedOneWithoutBlogsInput
    provider?: ProviderCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    providerId?: string | null
    status?: $Enums.BlogStatus
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    author?: UserUpdateOneWithoutBlogsNestedInput
    provider?: ProviderUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    providerId?: string | null
    status?: $Enums.BlogStatus
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
    provider?: ProviderCreateNestedOneWithoutNotificationsInput
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    providerId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: ProviderUpdateOneWithoutNotificationsNestedInput
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId?: string | null
    providerId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomCreateInput = {
    id?: string
    contextType: string
    contextId: string
    createdAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    contextType: string
    contextId: string
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    contextType: string
    contextId: string
    createdAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    roomId: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    roomId: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AIQueryListRelationFilter = {
    every?: AIQueryWhereInput
    some?: AIQueryWhereInput
    none?: AIQueryWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SpecialistProfileNullableScalarRelationFilter = {
    is?: SpecialistProfileWhereInput | null
    isNot?: SpecialistProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AIQueryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpecialistProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    registrationNo?: SortOrder
    experienceYears?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialistProfileAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
    consultationFee?: SortOrder
  }

  export type SpecialistProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    registrationNo?: SortOrder
    experienceYears?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialistProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    qualifications?: SortOrder
    registrationNo?: SortOrder
    experienceYears?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialistProfileSumOrderByAggregateInput = {
    experienceYears?: SortOrder
    consultationFee?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProviderNullableScalarRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type SpecialistProfileScalarRelationFilter = {
    is?: SpecialistProfileWhereInput
    isNot?: SpecialistProfileWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    providerId?: SortOrder
    specialistId?: SortOrder
    status?: SortOrder
    appointmentDate?: SortOrder
    problemDesc?: SortOrder
    meetingLink?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    providerId?: SortOrder
    specialistId?: SortOrder
    status?: SortOrder
    appointmentDate?: SortOrder
    problemDesc?: SortOrder
    meetingLink?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    providerId?: SortOrder
    specialistId?: SortOrder
    status?: SortOrder
    appointmentDate?: SortOrder
    problemDesc?: SortOrder
    meetingLink?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    categoryId?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    pricePerDay?: SortOrder
    rating?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    categoryId?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    categoryId?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    pricePerDay?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    equipmentId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    equipmentId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    equipmentId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    equipmentId?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    equipmentId?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    equipmentId?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAIFeatureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIFeatureType | EnumAIFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIFeatureTypeFilter<$PrismaModel> | $Enums.AIFeatureType
  }

  export type AIQueryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    featureType?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type AIQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    featureType?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type AIQueryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    featureType?: SortOrder
    createdAt?: SortOrder
    providerId?: SortOrder
  }

  export type EnumAIFeatureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIFeatureType | EnumAIFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIFeatureTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIFeatureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIFeatureTypeFilter<$PrismaModel>
    _max?: NestedEnumAIFeatureTypeFilter<$PrismaModel>
  }

  export type EnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type EnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorEmail?: SortOrder
    authorName?: SortOrder
    category?: SortOrder
    image?: SortOrder
    providerId?: SortOrder
    status?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorEmail?: SortOrder
    authorName?: SortOrder
    category?: SortOrder
    image?: SortOrder
    providerId?: SortOrder
    status?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorEmail?: SortOrder
    authorName?: SortOrder
    category?: SortOrder
    image?: SortOrder
    providerId?: SortOrder
    status?: SortOrder
  }

  export type EnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type EnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
    bookingId?: SortOrder
    aiQueryId?: SortOrder
    blogId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
    bookingId?: SortOrder
    aiQueryId?: SortOrder
    blogId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
    bookingId?: SortOrder
    aiQueryId?: SortOrder
    blogId?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    contextType?: SortOrder
    contextId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    contextType?: SortOrder
    contextId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    contextType?: SortOrder
    contextId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type AIQueryCreateNestedManyWithoutUserInput = {
    create?: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput> | AIQueryCreateWithoutUserInput[] | AIQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutUserInput | AIQueryCreateOrConnectWithoutUserInput[]
    createMany?: AIQueryCreateManyUserInputEnvelope
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutFarmerInput = {
    create?: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput> | AppointmentCreateWithoutFarmerInput[] | AppointmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFarmerInput | AppointmentCreateOrConnectWithoutFarmerInput[]
    createMany?: AppointmentCreateManyFarmerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutFarmerInput = {
    create?: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput> | BookingCreateWithoutFarmerInput[] | BookingUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFarmerInput | BookingCreateOrConnectWithoutFarmerInput[]
    createMany?: BookingCreateManyFarmerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SpecialistProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutUserInput
    connect?: SpecialistProfileWhereUniqueInput
  }

  export type AIQueryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput> | AIQueryCreateWithoutUserInput[] | AIQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutUserInput | AIQueryCreateOrConnectWithoutUserInput[]
    createMany?: AIQueryCreateManyUserInputEnvelope
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput> | AppointmentCreateWithoutFarmerInput[] | AppointmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFarmerInput | AppointmentCreateOrConnectWithoutFarmerInput[]
    createMany?: AppointmentCreateManyFarmerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput> | BookingCreateWithoutFarmerInput[] | BookingUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFarmerInput | BookingCreateOrConnectWithoutFarmerInput[]
    createMany?: BookingCreateManyFarmerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SpecialistProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutUserInput
    connect?: SpecialistProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AIQueryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput> | AIQueryCreateWithoutUserInput[] | AIQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutUserInput | AIQueryCreateOrConnectWithoutUserInput[]
    upsert?: AIQueryUpsertWithWhereUniqueWithoutUserInput | AIQueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIQueryCreateManyUserInputEnvelope
    set?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    disconnect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    delete?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    update?: AIQueryUpdateWithWhereUniqueWithoutUserInput | AIQueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIQueryUpdateManyWithWhereWithoutUserInput | AIQueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput> | AppointmentCreateWithoutFarmerInput[] | AppointmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFarmerInput | AppointmentCreateOrConnectWithoutFarmerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutFarmerInput | AppointmentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: AppointmentCreateManyFarmerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutFarmerInput | AppointmentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutFarmerInput | AppointmentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput> | BookingCreateWithoutFarmerInput[] | BookingUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFarmerInput | BookingCreateOrConnectWithoutFarmerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFarmerInput | BookingUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: BookingCreateManyFarmerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFarmerInput | BookingUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFarmerInput | BookingUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SpecialistProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutUserInput
    upsert?: SpecialistProfileUpsertWithoutUserInput
    disconnect?: SpecialistProfileWhereInput | boolean
    delete?: SpecialistProfileWhereInput | boolean
    connect?: SpecialistProfileWhereUniqueInput
    update?: XOR<XOR<SpecialistProfileUpdateToOneWithWhereWithoutUserInput, SpecialistProfileUpdateWithoutUserInput>, SpecialistProfileUncheckedUpdateWithoutUserInput>
  }

  export type AIQueryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput> | AIQueryCreateWithoutUserInput[] | AIQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutUserInput | AIQueryCreateOrConnectWithoutUserInput[]
    upsert?: AIQueryUpsertWithWhereUniqueWithoutUserInput | AIQueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIQueryCreateManyUserInputEnvelope
    set?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    disconnect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    delete?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    update?: AIQueryUpdateWithWhereUniqueWithoutUserInput | AIQueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIQueryUpdateManyWithWhereWithoutUserInput | AIQueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput> | AppointmentCreateWithoutFarmerInput[] | AppointmentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFarmerInput | AppointmentCreateOrConnectWithoutFarmerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutFarmerInput | AppointmentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: AppointmentCreateManyFarmerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutFarmerInput | AppointmentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutFarmerInput | AppointmentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput> | BookingCreateWithoutFarmerInput[] | BookingUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFarmerInput | BookingCreateOrConnectWithoutFarmerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFarmerInput | BookingUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: BookingCreateManyFarmerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFarmerInput | BookingUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFarmerInput | BookingUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutUserInput
    upsert?: SpecialistProfileUpsertWithoutUserInput
    disconnect?: SpecialistProfileWhereInput | boolean
    delete?: SpecialistProfileWhereInput | boolean
    connect?: SpecialistProfileWhereUniqueInput
    update?: XOR<XOR<SpecialistProfileUpdateToOneWithWhereWithoutUserInput, SpecialistProfileUpdateWithoutUserInput>, SpecialistProfileUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput> | AppointmentCreateWithoutSpecialistInput[] | AppointmentUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSpecialistInput | AppointmentCreateOrConnectWithoutSpecialistInput[]
    createMany?: AppointmentCreateManySpecialistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSpecialistProfileInput = {
    create?: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput> | AppointmentCreateWithoutSpecialistInput[] | AppointmentUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSpecialistInput | AppointmentCreateOrConnectWithoutSpecialistInput[]
    createMany?: AppointmentCreateManySpecialistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput> | AppointmentCreateWithoutSpecialistInput[] | AppointmentUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSpecialistInput | AppointmentCreateOrConnectWithoutSpecialistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSpecialistInput | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: AppointmentCreateManySpecialistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSpecialistInput | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSpecialistInput | AppointmentUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSpecialistProfileNestedInput = {
    create?: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistProfileInput
    upsert?: UserUpsertWithoutSpecialistProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpecialistProfileInput, UserUpdateWithoutSpecialistProfileInput>, UserUncheckedUpdateWithoutSpecialistProfileInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput> | AppointmentCreateWithoutSpecialistInput[] | AppointmentUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSpecialistInput | AppointmentCreateOrConnectWithoutSpecialistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSpecialistInput | AppointmentUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: AppointmentCreateManySpecialistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSpecialistInput | AppointmentUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSpecialistInput | AppointmentUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ProviderCreateWithoutAppointmentsInput, ProviderUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAppointmentsInput
    connect?: ProviderWhereUniqueInput
  }

  export type SpecialistProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<SpecialistProfileCreateWithoutAppointmentsInput, SpecialistProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutAppointmentsInput
    connect?: SpecialistProfileWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProviderUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<ProviderCreateWithoutAppointmentsInput, ProviderUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAppointmentsInput
    upsert?: ProviderUpsertWithoutAppointmentsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutAppointmentsInput, ProviderUpdateWithoutAppointmentsInput>, ProviderUncheckedUpdateWithoutAppointmentsInput>
  }

  export type SpecialistProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<SpecialistProfileCreateWithoutAppointmentsInput, SpecialistProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SpecialistProfileCreateOrConnectWithoutAppointmentsInput
    upsert?: SpecialistProfileUpsertWithoutAppointmentsInput
    connect?: SpecialistProfileWhereUniqueInput
    update?: XOR<XOR<SpecialistProfileUpdateToOneWithWhereWithoutAppointmentsInput, SpecialistProfileUpdateWithoutAppointmentsInput>, SpecialistProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AIQueryCreateNestedManyWithoutProviderInput = {
    create?: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput> | AIQueryCreateWithoutProviderInput[] | AIQueryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutProviderInput | AIQueryCreateOrConnectWithoutProviderInput[]
    createMany?: AIQueryCreateManyProviderInputEnvelope
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutProviderInput = {
    create?: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput> | BlogCreateWithoutProviderInput[] | BlogUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutProviderInput | BlogCreateOrConnectWithoutProviderInput[]
    createMany?: BlogCreateManyProviderInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutProviderInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutProviderInput = {
    create?: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput> | EquipmentCreateWithoutProviderInput[] | EquipmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProviderInput | EquipmentCreateOrConnectWithoutProviderInput[]
    createMany?: EquipmentCreateManyProviderInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutProviderInput = {
    create?: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput> | NotificationCreateWithoutProviderInput[] | NotificationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProviderInput | NotificationCreateOrConnectWithoutProviderInput[]
    createMany?: NotificationCreateManyProviderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProviderInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutProviderInput = {
    create?: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput> | AppointmentCreateWithoutProviderInput[] | AppointmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProviderInput | AppointmentCreateOrConnectWithoutProviderInput[]
    createMany?: AppointmentCreateManyProviderInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AIQueryUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput> | AIQueryCreateWithoutProviderInput[] | AIQueryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutProviderInput | AIQueryCreateOrConnectWithoutProviderInput[]
    createMany?: AIQueryCreateManyProviderInputEnvelope
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput> | BlogCreateWithoutProviderInput[] | BlogUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutProviderInput | BlogCreateOrConnectWithoutProviderInput[]
    createMany?: BlogCreateManyProviderInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput> | EquipmentCreateWithoutProviderInput[] | EquipmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProviderInput | EquipmentCreateOrConnectWithoutProviderInput[]
    createMany?: EquipmentCreateManyProviderInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput> | NotificationCreateWithoutProviderInput[] | NotificationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProviderInput | NotificationCreateOrConnectWithoutProviderInput[]
    createMany?: NotificationCreateManyProviderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput> | AppointmentCreateWithoutProviderInput[] | AppointmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProviderInput | AppointmentCreateOrConnectWithoutProviderInput[]
    createMany?: AppointmentCreateManyProviderInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AIQueryUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput> | AIQueryCreateWithoutProviderInput[] | AIQueryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutProviderInput | AIQueryCreateOrConnectWithoutProviderInput[]
    upsert?: AIQueryUpsertWithWhereUniqueWithoutProviderInput | AIQueryUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AIQueryCreateManyProviderInputEnvelope
    set?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    disconnect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    delete?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    update?: AIQueryUpdateWithWhereUniqueWithoutProviderInput | AIQueryUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AIQueryUpdateManyWithWhereWithoutProviderInput | AIQueryUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput> | BlogCreateWithoutProviderInput[] | BlogUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutProviderInput | BlogCreateOrConnectWithoutProviderInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutProviderInput | BlogUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BlogCreateManyProviderInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutProviderInput | BlogUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutProviderInput | BlogUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutProviderInput | BookingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutProviderInput | BookingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutProviderInput | BookingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput> | EquipmentCreateWithoutProviderInput[] | EquipmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProviderInput | EquipmentCreateOrConnectWithoutProviderInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutProviderInput | EquipmentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: EquipmentCreateManyProviderInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutProviderInput | EquipmentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutProviderInput | EquipmentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutProviderNestedInput = {
    create?: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput> | NotificationCreateWithoutProviderInput[] | NotificationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProviderInput | NotificationCreateOrConnectWithoutProviderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProviderInput | NotificationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: NotificationCreateManyProviderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProviderInput | NotificationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProviderInput | NotificationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProviderInput | ReviewUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProviderInput | ReviewUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProviderInput | ReviewUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput> | AppointmentCreateWithoutProviderInput[] | AppointmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProviderInput | AppointmentCreateOrConnectWithoutProviderInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProviderInput | AppointmentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AppointmentCreateManyProviderInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProviderInput | AppointmentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProviderInput | AppointmentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AIQueryUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput> | AIQueryCreateWithoutProviderInput[] | AIQueryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AIQueryCreateOrConnectWithoutProviderInput | AIQueryCreateOrConnectWithoutProviderInput[]
    upsert?: AIQueryUpsertWithWhereUniqueWithoutProviderInput | AIQueryUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AIQueryCreateManyProviderInputEnvelope
    set?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    disconnect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    delete?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    connect?: AIQueryWhereUniqueInput | AIQueryWhereUniqueInput[]
    update?: AIQueryUpdateWithWhereUniqueWithoutProviderInput | AIQueryUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AIQueryUpdateManyWithWhereWithoutProviderInput | AIQueryUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput> | BlogCreateWithoutProviderInput[] | BlogUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutProviderInput | BlogCreateOrConnectWithoutProviderInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutProviderInput | BlogUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BlogCreateManyProviderInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutProviderInput | BlogUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutProviderInput | BlogUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput> | BookingCreateWithoutProviderInput[] | BookingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutProviderInput | BookingCreateOrConnectWithoutProviderInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutProviderInput | BookingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: BookingCreateManyProviderInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutProviderInput | BookingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutProviderInput | BookingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput> | EquipmentCreateWithoutProviderInput[] | EquipmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProviderInput | EquipmentCreateOrConnectWithoutProviderInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutProviderInput | EquipmentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: EquipmentCreateManyProviderInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutProviderInput | EquipmentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutProviderInput | EquipmentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput> | NotificationCreateWithoutProviderInput[] | NotificationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProviderInput | NotificationCreateOrConnectWithoutProviderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProviderInput | NotificationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: NotificationCreateManyProviderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProviderInput | NotificationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProviderInput | NotificationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput> | ReviewCreateWithoutProviderInput[] | ReviewUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProviderInput | ReviewCreateOrConnectWithoutProviderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProviderInput | ReviewUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ReviewCreateManyProviderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProviderInput | ReviewUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProviderInput | ReviewUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput> | AppointmentCreateWithoutProviderInput[] | AppointmentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProviderInput | AppointmentCreateOrConnectWithoutProviderInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProviderInput | AppointmentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AppointmentCreateManyProviderInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProviderInput | AppointmentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProviderInput | AppointmentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EquipmentCreateimagesInput = {
    set: string[]
  }

  export type BookingCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput> | BookingCreateWithoutEquipmentInput[] | BookingUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEquipmentInput | BookingCreateOrConnectWithoutEquipmentInput[]
    createMany?: BookingCreateManyEquipmentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<CategoryCreateWithoutEquipmentInput, CategoryUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEquipmentInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<ProviderCreateWithoutEquipmentInput, ProviderUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutEquipmentInput
    connect?: ProviderWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput> | ReviewCreateWithoutEquipmentInput[] | ReviewUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEquipmentInput | ReviewCreateOrConnectWithoutEquipmentInput[]
    createMany?: ReviewCreateManyEquipmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput> | BookingCreateWithoutEquipmentInput[] | BookingUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEquipmentInput | BookingCreateOrConnectWithoutEquipmentInput[]
    createMany?: BookingCreateManyEquipmentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput> | ReviewCreateWithoutEquipmentInput[] | ReviewUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEquipmentInput | ReviewCreateOrConnectWithoutEquipmentInput[]
    createMany?: ReviewCreateManyEquipmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BookingUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput> | BookingCreateWithoutEquipmentInput[] | BookingUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEquipmentInput | BookingCreateOrConnectWithoutEquipmentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEquipmentInput | BookingUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: BookingCreateManyEquipmentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEquipmentInput | BookingUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEquipmentInput | BookingUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<CategoryCreateWithoutEquipmentInput, CategoryUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEquipmentInput
    upsert?: CategoryUpsertWithoutEquipmentInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutEquipmentInput, CategoryUpdateWithoutEquipmentInput>, CategoryUncheckedUpdateWithoutEquipmentInput>
  }

  export type ProviderUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<ProviderCreateWithoutEquipmentInput, ProviderUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutEquipmentInput
    upsert?: ProviderUpsertWithoutEquipmentInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutEquipmentInput, ProviderUpdateWithoutEquipmentInput>, ProviderUncheckedUpdateWithoutEquipmentInput>
  }

  export type ReviewUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput> | ReviewCreateWithoutEquipmentInput[] | ReviewUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEquipmentInput | ReviewCreateOrConnectWithoutEquipmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEquipmentInput | ReviewUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ReviewCreateManyEquipmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEquipmentInput | ReviewUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEquipmentInput | ReviewUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput> | BookingCreateWithoutEquipmentInput[] | BookingUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEquipmentInput | BookingCreateOrConnectWithoutEquipmentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEquipmentInput | BookingUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: BookingCreateManyEquipmentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEquipmentInput | BookingUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEquipmentInput | BookingUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput> | ReviewCreateWithoutEquipmentInput[] | ReviewUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEquipmentInput | ReviewCreateOrConnectWithoutEquipmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEquipmentInput | ReviewUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ReviewCreateManyEquipmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEquipmentInput | ReviewUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEquipmentInput | ReviewUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutBookingsInput = {
    create?: XOR<EquipmentCreateWithoutBookingsInput, EquipmentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBookingsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsAsFarmerInput = {
    create?: XOR<UserCreateWithoutBookingsAsFarmerInput, UserUncheckedCreateWithoutBookingsAsFarmerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsFarmerInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutBookingsAsProviderInput = {
    create?: XOR<ProviderCreateWithoutBookingsAsProviderInput, ProviderUncheckedCreateWithoutBookingsAsProviderInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutBookingsAsProviderInput
    connect?: ProviderWhereUniqueInput
  }

  export type EquipmentUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<EquipmentCreateWithoutBookingsInput, EquipmentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBookingsInput
    upsert?: EquipmentUpsertWithoutBookingsInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutBookingsInput, EquipmentUpdateWithoutBookingsInput>, EquipmentUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsAsFarmerNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsFarmerInput, UserUncheckedCreateWithoutBookingsAsFarmerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsFarmerInput
    upsert?: UserUpsertWithoutBookingsAsFarmerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsFarmerInput, UserUpdateWithoutBookingsAsFarmerInput>, UserUncheckedUpdateWithoutBookingsAsFarmerInput>
  }

  export type ProviderUpdateOneWithoutBookingsAsProviderNestedInput = {
    create?: XOR<ProviderCreateWithoutBookingsAsProviderInput, ProviderUncheckedCreateWithoutBookingsAsProviderInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutBookingsAsProviderInput
    upsert?: ProviderUpsertWithoutBookingsAsProviderInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutBookingsAsProviderInput, ProviderUpdateWithoutBookingsAsProviderInput>, ProviderUncheckedUpdateWithoutBookingsAsProviderInput>
  }

  export type EquipmentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EquipmentCreateWithoutReviewsInput, EquipmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutReviewsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProviderCreateWithoutReviewsInput, ProviderUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutReviewsInput
    connect?: ProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EquipmentCreateWithoutReviewsInput, EquipmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutReviewsInput
    upsert?: EquipmentUpsertWithoutReviewsInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutReviewsInput, EquipmentUpdateWithoutReviewsInput>, EquipmentUncheckedUpdateWithoutReviewsInput>
  }

  export type ProviderUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ProviderCreateWithoutReviewsInput, ProviderUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutReviewsInput
    upsert?: ProviderUpsertWithoutReviewsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutReviewsInput, ProviderUpdateWithoutReviewsInput>, ProviderUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProviderCreateNestedOneWithoutAiQueriesInput = {
    create?: XOR<ProviderCreateWithoutAiQueriesInput, ProviderUncheckedCreateWithoutAiQueriesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAiQueriesInput
    connect?: ProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAiQueriesInput = {
    create?: XOR<UserCreateWithoutAiQueriesInput, UserUncheckedCreateWithoutAiQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiQueriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAIFeatureTypeFieldUpdateOperationsInput = {
    set?: $Enums.AIFeatureType
  }

  export type ProviderUpdateOneWithoutAiQueriesNestedInput = {
    create?: XOR<ProviderCreateWithoutAiQueriesInput, ProviderUncheckedCreateWithoutAiQueriesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAiQueriesInput
    upsert?: ProviderUpsertWithoutAiQueriesInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutAiQueriesInput, ProviderUpdateWithoutAiQueriesInput>, ProviderUncheckedUpdateWithoutAiQueriesInput>
  }

  export type UserUpdateOneWithoutAiQueriesNestedInput = {
    create?: XOR<UserCreateWithoutAiQueriesInput, UserUncheckedCreateWithoutAiQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiQueriesInput
    upsert?: UserUpsertWithoutAiQueriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiQueriesInput, UserUpdateWithoutAiQueriesInput>, UserUncheckedUpdateWithoutAiQueriesInput>
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutBlogsInput = {
    create?: XOR<ProviderCreateWithoutBlogsInput, ProviderUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutBlogsInput
    connect?: ProviderWhereUniqueInput
  }

  export type EnumBlogCategoryFieldUpdateOperationsInput = {
    set?: $Enums.BlogCategory
  }

  export type EnumBlogStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogStatus
  }

  export type UserUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type ProviderUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<ProviderCreateWithoutBlogsInput, ProviderUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutBlogsInput
    upsert?: ProviderUpsertWithoutBlogsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutBlogsInput, ProviderUpdateWithoutBlogsInput>, ProviderUncheckedUpdateWithoutBlogsInput>
  }

  export type ProviderCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ProviderCreateWithoutNotificationsInput, ProviderUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutNotificationsInput
    connect?: ProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ProviderCreateWithoutNotificationsInput, ProviderUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutNotificationsInput
    upsert?: ProviderUpsertWithoutNotificationsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutNotificationsInput, ProviderUpdateWithoutNotificationsInput>, ProviderUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type ChatMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRoomInput | ChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRoomInput | ChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRoomInput | ChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRoomInput | ChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRoomInput | ChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRoomInput | ChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumAIFeatureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIFeatureType | EnumAIFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIFeatureTypeFilter<$PrismaModel> | $Enums.AIFeatureType
  }

  export type NestedEnumAIFeatureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIFeatureType | EnumAIFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIFeatureType[] | ListEnumAIFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIFeatureTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIFeatureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIFeatureTypeFilter<$PrismaModel>
    _max?: NestedEnumAIFeatureTypeFilter<$PrismaModel>
  }

  export type NestedEnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type NestedEnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type AIQueryCreateWithoutUserInput = {
    id?: string
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutAiQueriesInput
  }

  export type AIQueryUncheckedCreateWithoutUserInput = {
    id?: string
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    providerId?: string | null
  }

  export type AIQueryCreateOrConnectWithoutUserInput = {
    where: AIQueryWhereUniqueInput
    create: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput>
  }

  export type AIQueryCreateManyUserInputEnvelope = {
    data: AIQueryCreateManyUserInput | AIQueryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutFarmerInput = {
    id?: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutAppointmentsInput
    specialist: SpecialistProfileCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutFarmerInput = {
    id?: string
    providerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutFarmerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput>
  }

  export type AppointmentCreateManyFarmerInputEnvelope = {
    data: AppointmentCreateManyFarmerInput | AppointmentCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    status?: $Enums.BlogStatus
    provider?: ProviderCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    providerId?: string | null
    status?: $Enums.BlogStatus
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: BlogCreateManyAuthorInput | BlogCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutFarmerInput = {
    id?: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutBookingsInput
    provider?: ProviderCreateNestedOneWithoutBookingsAsProviderInput
  }

  export type BookingUncheckedCreateWithoutFarmerInput = {
    id?: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type BookingCreateOrConnectWithoutFarmerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput>
  }

  export type BookingCreateManyFarmerInputEnvelope = {
    data: BookingCreateManyFarmerInput | BookingCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
    provider?: ProviderCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    providerId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutReviewsInput
    provider?: ProviderCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    equipmentId: string
    createdAt?: Date | string
    providerId?: string | null
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpecialistProfileCreateWithoutUserInput = {
    id?: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistProfileUncheckedCreateWithoutUserInput = {
    id?: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistProfileCreateOrConnectWithoutUserInput = {
    where: SpecialistProfileWhereUniqueInput
    create: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
  }

  export type AIQueryUpsertWithWhereUniqueWithoutUserInput = {
    where: AIQueryWhereUniqueInput
    update: XOR<AIQueryUpdateWithoutUserInput, AIQueryUncheckedUpdateWithoutUserInput>
    create: XOR<AIQueryCreateWithoutUserInput, AIQueryUncheckedCreateWithoutUserInput>
  }

  export type AIQueryUpdateWithWhereUniqueWithoutUserInput = {
    where: AIQueryWhereUniqueInput
    data: XOR<AIQueryUpdateWithoutUserInput, AIQueryUncheckedUpdateWithoutUserInput>
  }

  export type AIQueryUpdateManyWithWhereWithoutUserInput = {
    where: AIQueryScalarWhereInput
    data: XOR<AIQueryUpdateManyMutationInput, AIQueryUncheckedUpdateManyWithoutUserInput>
  }

  export type AIQueryScalarWhereInput = {
    AND?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
    OR?: AIQueryScalarWhereInput[]
    NOT?: AIQueryScalarWhereInput | AIQueryScalarWhereInput[]
    id?: StringFilter<"AIQuery"> | string
    userId?: StringNullableFilter<"AIQuery"> | string | null
    prompt?: StringFilter<"AIQuery"> | string
    response?: StringFilter<"AIQuery"> | string
    featureType?: EnumAIFeatureTypeFilter<"AIQuery"> | $Enums.AIFeatureType
    createdAt?: DateTimeFilter<"AIQuery"> | Date | string
    providerId?: StringNullableFilter<"AIQuery"> | string | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutFarmerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutFarmerInput, AppointmentUncheckedUpdateWithoutFarmerInput>
    create: XOR<AppointmentCreateWithoutFarmerInput, AppointmentUncheckedCreateWithoutFarmerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutFarmerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutFarmerInput, AppointmentUncheckedUpdateWithoutFarmerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutFarmerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutFarmerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    farmerId?: StringNullableFilter<"Appointment"> | string | null
    providerId?: StringNullableFilter<"Appointment"> | string | null
    specialistId?: StringFilter<"Appointment"> | string
    status?: EnumBookingStatusFilter<"Appointment"> | $Enums.BookingStatus
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    problemDesc?: StringNullableFilter<"Appointment"> | string | null
    meetingLink?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    authorEmail?: StringFilter<"Blog"> | string
    authorName?: StringFilter<"Blog"> | string
    category?: EnumBlogCategoryFilter<"Blog"> | $Enums.BlogCategory
    image?: StringNullableFilter<"Blog"> | string | null
    providerId?: StringNullableFilter<"Blog"> | string | null
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
  }

  export type BookingUpsertWithWhereUniqueWithoutFarmerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutFarmerInput, BookingUncheckedUpdateWithoutFarmerInput>
    create: XOR<BookingCreateWithoutFarmerInput, BookingUncheckedCreateWithoutFarmerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutFarmerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutFarmerInput, BookingUncheckedUpdateWithoutFarmerInput>
  }

  export type BookingUpdateManyWithWhereWithoutFarmerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutFarmerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    farmerId?: StringFilter<"Booking"> | string
    equipmentId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    providerId?: StringNullableFilter<"Booking"> | string | null
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
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    providerId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    bookingId?: StringNullableFilter<"Notification"> | string | null
    aiQueryId?: StringNullableFilter<"Notification"> | string | null
    blogId?: StringNullableFilter<"Notification"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    equipmentId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    providerId?: StringNullableFilter<"Review"> | string | null
  }

  export type SpecialistProfileUpsertWithoutUserInput = {
    update: XOR<SpecialistProfileUpdateWithoutUserInput, SpecialistProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SpecialistProfileCreateWithoutUserInput, SpecialistProfileUncheckedCreateWithoutUserInput>
    where?: SpecialistProfileWhereInput
  }

  export type SpecialistProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SpecialistProfileWhereInput
    data: XOR<SpecialistProfileUpdateWithoutUserInput, SpecialistProfileUncheckedUpdateWithoutUserInput>
  }

  export type SpecialistProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type AppointmentCreateWithoutSpecialistInput = {
    id?: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
    farmer?: UserCreateNestedOneWithoutAppointmentsInput
    provider?: ProviderCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutSpecialistInput = {
    id?: string
    farmerId?: string | null
    providerId?: string | null
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput>
  }

  export type AppointmentCreateManySpecialistInputEnvelope = {
    data: AppointmentCreateManySpecialistInput | AppointmentCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSpecialistProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpecialistProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpecialistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutSpecialistInput, AppointmentUncheckedUpdateWithoutSpecialistInput>
    create: XOR<AppointmentCreateWithoutSpecialistInput, AppointmentUncheckedCreateWithoutSpecialistInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutSpecialistInput, AppointmentUncheckedUpdateWithoutSpecialistInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutSpecialistInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type UserUpsertWithoutSpecialistProfileInput = {
    update: XOR<UserUpdateWithoutSpecialistProfileInput, UserUncheckedUpdateWithoutSpecialistProfileInput>
    create: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpecialistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpecialistProfileInput, UserUncheckedUpdateWithoutSpecialistProfileInput>
  }

  export type UserUpdateWithoutSpecialistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecialistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type ProviderCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutAppointmentsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutAppointmentsInput, ProviderUncheckedCreateWithoutAppointmentsInput>
  }

  export type SpecialistProfileCreateWithoutAppointmentsInput = {
    id?: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpecialistProfileInput
  }

  export type SpecialistProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialization?: string | null
    qualifications?: string | null
    registrationNo?: string | null
    experienceYears?: number | null
    consultationFee?: number | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialistProfileCreateOrConnectWithoutAppointmentsInput = {
    where: SpecialistProfileWhereUniqueInput
    create: XOR<SpecialistProfileCreateWithoutAppointmentsInput, SpecialistProfileUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProviderUpsertWithoutAppointmentsInput = {
    update: XOR<ProviderUpdateWithoutAppointmentsInput, ProviderUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ProviderCreateWithoutAppointmentsInput, ProviderUncheckedCreateWithoutAppointmentsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutAppointmentsInput, ProviderUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProviderUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type SpecialistProfileUpsertWithoutAppointmentsInput = {
    update: XOR<SpecialistProfileUpdateWithoutAppointmentsInput, SpecialistProfileUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<SpecialistProfileCreateWithoutAppointmentsInput, SpecialistProfileUncheckedCreateWithoutAppointmentsInput>
    where?: SpecialistProfileWhereInput
  }

  export type SpecialistProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: SpecialistProfileWhereInput
    data: XOR<SpecialistProfileUpdateWithoutAppointmentsInput, SpecialistProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type SpecialistProfileUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpecialistProfileNestedInput
  }

  export type SpecialistProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableFloatFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIQueryCreateWithoutProviderInput = {
    id?: string
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAiQueriesInput
  }

  export type AIQueryUncheckedCreateWithoutProviderInput = {
    id?: string
    userId?: string | null
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
  }

  export type AIQueryCreateOrConnectWithoutProviderInput = {
    where: AIQueryWhereUniqueInput
    create: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput>
  }

  export type AIQueryCreateManyProviderInputEnvelope = {
    data: AIQueryCreateManyProviderInput | AIQueryCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutProviderInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    status?: $Enums.BlogStatus
    author?: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateWithoutProviderInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    status?: $Enums.BlogStatus
  }

  export type BlogCreateOrConnectWithoutProviderInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput>
  }

  export type BlogCreateManyProviderInputEnvelope = {
    data: BlogCreateManyProviderInput | BlogCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutProviderInput = {
    id?: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutBookingsInput
    farmer: UserCreateNestedOneWithoutBookingsAsFarmerInput
  }

  export type BookingUncheckedCreateWithoutProviderInput = {
    id?: string
    farmerId: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutProviderInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput>
  }

  export type BookingCreateManyProviderInputEnvelope = {
    data: BookingCreateManyProviderInput | BookingCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutProviderInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutEquipmentInput
    category: CategoryCreateNestedOneWithoutEquipmentInput
    reviews?: ReviewCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutProviderInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEquipmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutProviderInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput>
  }

  export type EquipmentCreateManyProviderInputEnvelope = {
    data: EquipmentCreateManyProviderInput | EquipmentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutProviderInput = {
    id?: string
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutProviderInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type NotificationCreateOrConnectWithoutProviderInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput>
  }

  export type NotificationCreateManyProviderInputEnvelope = {
    data: NotificationCreateManyProviderInput | NotificationCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProviderInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProviderInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    equipmentId: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput>
  }

  export type ReviewCreateManyProviderInputEnvelope = {
    data: ReviewCreateManyProviderInput | ReviewCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutProviderInput = {
    id?: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
    farmer?: UserCreateNestedOneWithoutAppointmentsInput
    specialist: SpecialistProfileCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutProviderInput = {
    id?: string
    farmerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutProviderInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput>
  }

  export type AppointmentCreateManyProviderInputEnvelope = {
    data: AppointmentCreateManyProviderInput | AppointmentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type AIQueryUpsertWithWhereUniqueWithoutProviderInput = {
    where: AIQueryWhereUniqueInput
    update: XOR<AIQueryUpdateWithoutProviderInput, AIQueryUncheckedUpdateWithoutProviderInput>
    create: XOR<AIQueryCreateWithoutProviderInput, AIQueryUncheckedCreateWithoutProviderInput>
  }

  export type AIQueryUpdateWithWhereUniqueWithoutProviderInput = {
    where: AIQueryWhereUniqueInput
    data: XOR<AIQueryUpdateWithoutProviderInput, AIQueryUncheckedUpdateWithoutProviderInput>
  }

  export type AIQueryUpdateManyWithWhereWithoutProviderInput = {
    where: AIQueryScalarWhereInput
    data: XOR<AIQueryUpdateManyMutationInput, AIQueryUncheckedUpdateManyWithoutProviderInput>
  }

  export type BlogUpsertWithWhereUniqueWithoutProviderInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutProviderInput, BlogUncheckedUpdateWithoutProviderInput>
    create: XOR<BlogCreateWithoutProviderInput, BlogUncheckedCreateWithoutProviderInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutProviderInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutProviderInput, BlogUncheckedUpdateWithoutProviderInput>
  }

  export type BlogUpdateManyWithWhereWithoutProviderInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutProviderInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutProviderInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutProviderInput, BookingUncheckedUpdateWithoutProviderInput>
    create: XOR<BookingCreateWithoutProviderInput, BookingUncheckedCreateWithoutProviderInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutProviderInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutProviderInput, BookingUncheckedUpdateWithoutProviderInput>
  }

  export type BookingUpdateManyWithWhereWithoutProviderInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutProviderInput>
  }

  export type EquipmentUpsertWithWhereUniqueWithoutProviderInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutProviderInput, EquipmentUncheckedUpdateWithoutProviderInput>
    create: XOR<EquipmentCreateWithoutProviderInput, EquipmentUncheckedCreateWithoutProviderInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutProviderInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutProviderInput, EquipmentUncheckedUpdateWithoutProviderInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutProviderInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutProviderInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    title?: StringFilter<"Equipment"> | string
    description?: StringFilter<"Equipment"> | string
    pricePerDay?: FloatFilter<"Equipment"> | number
    location?: StringFilter<"Equipment"> | string
    availability?: BoolFilter<"Equipment"> | boolean
    rating?: FloatFilter<"Equipment"> | number
    images?: StringNullableListFilter<"Equipment">
    categoryId?: StringFilter<"Equipment"> | string
    providerId?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutProviderInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutProviderInput, NotificationUncheckedUpdateWithoutProviderInput>
    create: XOR<NotificationCreateWithoutProviderInput, NotificationUncheckedCreateWithoutProviderInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutProviderInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutProviderInput, NotificationUncheckedUpdateWithoutProviderInput>
  }

  export type NotificationUpdateManyWithWhereWithoutProviderInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutProviderInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProviderInput, ReviewUncheckedUpdateWithoutProviderInput>
    create: XOR<ReviewCreateWithoutProviderInput, ReviewUncheckedCreateWithoutProviderInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProviderInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProviderInput, ReviewUncheckedUpdateWithoutProviderInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProviderInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProviderInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProviderInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProviderInput, AppointmentUncheckedUpdateWithoutProviderInput>
    create: XOR<AppointmentCreateWithoutProviderInput, AppointmentUncheckedCreateWithoutProviderInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProviderInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProviderInput, AppointmentUncheckedUpdateWithoutProviderInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProviderInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProviderInput>
  }

  export type BookingCreateWithoutEquipmentInput = {
    id?: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutBookingsAsFarmerInput
    provider?: ProviderCreateNestedOneWithoutBookingsAsProviderInput
  }

  export type BookingUncheckedCreateWithoutEquipmentInput = {
    id?: string
    farmerId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type BookingCreateOrConnectWithoutEquipmentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput>
  }

  export type BookingCreateManyEquipmentInputEnvelope = {
    data: BookingCreateManyEquipmentInput | BookingCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutEquipmentInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
  }

  export type CategoryUncheckedCreateWithoutEquipmentInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
  }

  export type CategoryCreateOrConnectWithoutEquipmentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEquipmentInput, CategoryUncheckedCreateWithoutEquipmentInput>
  }

  export type ProviderCreateWithoutEquipmentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutEquipmentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutEquipmentInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutEquipmentInput, ProviderUncheckedCreateWithoutEquipmentInput>
  }

  export type ReviewCreateWithoutEquipmentInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutEquipmentInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    createdAt?: Date | string
    providerId?: string | null
  }

  export type ReviewCreateOrConnectWithoutEquipmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput>
  }

  export type ReviewCreateManyEquipmentInputEnvelope = {
    data: ReviewCreateManyEquipmentInput | ReviewCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutEquipmentInput, BookingUncheckedUpdateWithoutEquipmentInput>
    create: XOR<BookingCreateWithoutEquipmentInput, BookingUncheckedCreateWithoutEquipmentInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutEquipmentInput, BookingUncheckedUpdateWithoutEquipmentInput>
  }

  export type BookingUpdateManyWithWhereWithoutEquipmentInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type CategoryUpsertWithoutEquipmentInput = {
    update: XOR<CategoryUpdateWithoutEquipmentInput, CategoryUncheckedUpdateWithoutEquipmentInput>
    create: XOR<CategoryCreateWithoutEquipmentInput, CategoryUncheckedCreateWithoutEquipmentInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutEquipmentInput, CategoryUncheckedUpdateWithoutEquipmentInput>
  }

  export type CategoryUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderUpsertWithoutEquipmentInput = {
    update: XOR<ProviderUpdateWithoutEquipmentInput, ProviderUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ProviderCreateWithoutEquipmentInput, ProviderUncheckedCreateWithoutEquipmentInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutEquipmentInput, ProviderUncheckedUpdateWithoutEquipmentInput>
  }

  export type ProviderUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEquipmentInput, ReviewUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ReviewCreateWithoutEquipmentInput, ReviewUncheckedCreateWithoutEquipmentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEquipmentInput, ReviewUncheckedUpdateWithoutEquipmentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEquipmentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type EquipmentCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutEquipmentInput
    provider: ProviderCreateNestedOneWithoutEquipmentInput
    reviews?: ReviewCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEquipmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentCreateManyCategoryInputEnvelope = {
    data: EquipmentCreateManyCategoryInput | EquipmentCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCategoryInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EquipmentCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutEquipmentInput
    provider: ProviderCreateNestedOneWithoutEquipmentInput
    reviews?: ReviewCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutBookingsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutBookingsInput, EquipmentUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsAsFarmerInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsAsFarmerInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsAsFarmerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsFarmerInput, UserUncheckedCreateWithoutBookingsAsFarmerInput>
  }

  export type ProviderCreateWithoutBookingsAsProviderInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutBookingsAsProviderInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutBookingsAsProviderInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutBookingsAsProviderInput, ProviderUncheckedCreateWithoutBookingsAsProviderInput>
  }

  export type EquipmentUpsertWithoutBookingsInput = {
    update: XOR<EquipmentUpdateWithoutBookingsInput, EquipmentUncheckedUpdateWithoutBookingsInput>
    create: XOR<EquipmentCreateWithoutBookingsInput, EquipmentUncheckedCreateWithoutBookingsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutBookingsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutBookingsInput, EquipmentUncheckedUpdateWithoutBookingsInput>
  }

  export type EquipmentUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEquipmentNestedInput
    provider?: ProviderUpdateOneRequiredWithoutEquipmentNestedInput
    reviews?: ReviewUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type UserUpsertWithoutBookingsAsFarmerInput = {
    update: XOR<UserUpdateWithoutBookingsAsFarmerInput, UserUncheckedUpdateWithoutBookingsAsFarmerInput>
    create: XOR<UserCreateWithoutBookingsAsFarmerInput, UserUncheckedCreateWithoutBookingsAsFarmerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsFarmerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsFarmerInput, UserUncheckedUpdateWithoutBookingsAsFarmerInput>
  }

  export type UserUpdateWithoutBookingsAsFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProviderUpsertWithoutBookingsAsProviderInput = {
    update: XOR<ProviderUpdateWithoutBookingsAsProviderInput, ProviderUncheckedUpdateWithoutBookingsAsProviderInput>
    create: XOR<ProviderCreateWithoutBookingsAsProviderInput, ProviderUncheckedCreateWithoutBookingsAsProviderInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutBookingsAsProviderInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutBookingsAsProviderInput, ProviderUncheckedUpdateWithoutBookingsAsProviderInput>
  }

  export type ProviderUpdateWithoutBookingsAsProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutBookingsAsProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type EquipmentCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutEquipmentInput
    category: CategoryCreateNestedOneWithoutEquipmentInput
    provider: ProviderCreateNestedOneWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutReviewsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutReviewsInput, EquipmentUncheckedCreateWithoutReviewsInput>
  }

  export type ProviderCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutReviewsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutReviewsInput, ProviderUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EquipmentUpsertWithoutReviewsInput = {
    update: XOR<EquipmentUpdateWithoutReviewsInput, EquipmentUncheckedUpdateWithoutReviewsInput>
    create: XOR<EquipmentCreateWithoutReviewsInput, EquipmentUncheckedCreateWithoutReviewsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutReviewsInput, EquipmentUncheckedUpdateWithoutReviewsInput>
  }

  export type EquipmentUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutEquipmentNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentNestedInput
    provider?: ProviderUpdateOneRequiredWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type ProviderUpsertWithoutReviewsInput = {
    update: XOR<ProviderUpdateWithoutReviewsInput, ProviderUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProviderCreateWithoutReviewsInput, ProviderUncheckedCreateWithoutReviewsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutReviewsInput, ProviderUncheckedUpdateWithoutReviewsInput>
  }

  export type ProviderUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProviderCreateWithoutAiQueriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutAiQueriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutAiQueriesInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutAiQueriesInput, ProviderUncheckedCreateWithoutAiQueriesInput>
  }

  export type UserCreateWithoutAiQueriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiQueriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiQueriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiQueriesInput, UserUncheckedCreateWithoutAiQueriesInput>
  }

  export type ProviderUpsertWithoutAiQueriesInput = {
    update: XOR<ProviderUpdateWithoutAiQueriesInput, ProviderUncheckedUpdateWithoutAiQueriesInput>
    create: XOR<ProviderCreateWithoutAiQueriesInput, ProviderUncheckedCreateWithoutAiQueriesInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutAiQueriesInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutAiQueriesInput, ProviderUncheckedUpdateWithoutAiQueriesInput>
  }

  export type ProviderUpdateWithoutAiQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutAiQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserUpsertWithoutAiQueriesInput = {
    update: XOR<UserUpdateWithoutAiQueriesInput, UserUncheckedUpdateWithoutAiQueriesInput>
    create: XOR<UserCreateWithoutAiQueriesInput, UserUncheckedCreateWithoutAiQueriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiQueriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiQueriesInput, UserUncheckedUpdateWithoutAiQueriesInput>
  }

  export type UserUpdateWithoutAiQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type ProviderCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutBlogsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutBlogsInput, ProviderUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProviderUpsertWithoutBlogsInput = {
    update: XOR<ProviderUpdateWithoutBlogsInput, ProviderUncheckedUpdateWithoutBlogsInput>
    create: XOR<ProviderCreateWithoutBlogsInput, ProviderUncheckedCreateWithoutBlogsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutBlogsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutBlogsInput, ProviderUncheckedUpdateWithoutBlogsInput>
  }

  export type ProviderUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutProviderInput
    blogs?: BlogCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingCreateNestedManyWithoutProviderInput
    equipment?: EquipmentCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutProviderInput
    appointments?: AppointmentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutProviderInput
    blogs?: BlogUncheckedCreateNestedManyWithoutProviderInput
    bookingsAsProvider?: BookingUncheckedCreateNestedManyWithoutProviderInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProviderInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutNotificationsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutNotificationsInput, ProviderUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutFarmerInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingCreateNestedManyWithoutFarmerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    location?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aiQueries?: AIQueryUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFarmerInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    bookingsAsFarmer?: BookingUncheckedCreateNestedManyWithoutFarmerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    specialistProfile?: SpecialistProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ProviderUpsertWithoutNotificationsInput = {
    update: XOR<ProviderUpdateWithoutNotificationsInput, ProviderUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ProviderCreateWithoutNotificationsInput, ProviderUncheckedCreateWithoutNotificationsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutNotificationsInput, ProviderUncheckedUpdateWithoutNotificationsInput>
  }

  export type ProviderUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutProviderNestedInput
    blogs?: BlogUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutProviderNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutProviderNestedInput
    bookingsAsProvider?: BookingUncheckedUpdateManyWithoutProviderNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProviderNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUpdateManyWithoutFarmerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiQueries?: AIQueryUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFarmerNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    bookingsAsFarmer?: BookingUncheckedUpdateManyWithoutFarmerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    specialistProfile?: SpecialistProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatMessageCreateWithoutRoomInput = {
    id?: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type ChatMessageCreateManyRoomInputEnvelope = {
    data: ChatMessageCreateManyRoomInput | ChatMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutRoomInput, ChatMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutRoomInput, ChatMessageUncheckedUpdateWithoutRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    roomId?: StringFilter<"ChatMessage"> | string
    senderType?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    senderName?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    id?: string
    contextType: string
    contextId: string
    createdAt?: Date | string
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    contextType: string
    contextId: string
    createdAt?: Date | string
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIQueryCreateManyUserInput = {
    id?: string
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
    providerId?: string | null
  }

  export type AppointmentCreateManyFarmerInput = {
    id?: string
    providerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type BlogCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    providerId?: string | null
    status?: $Enums.BlogStatus
  }

  export type BookingCreateManyFarmerInput = {
    id?: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    providerId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    comment?: string | null
    equipmentId: string
    createdAt?: Date | string
    providerId?: string | null
  }

  export type AIQueryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutAiQueriesNestedInput
  }

  export type AIQueryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIQueryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutAppointmentsNestedInput
    specialist?: SpecialistProfileUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    provider?: ProviderUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BookingUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutBookingsNestedInput
    provider?: ProviderUpdateOneWithoutBookingsAsProviderNestedInput
  }

  export type BookingUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: ProviderUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutReviewsNestedInput
    provider?: ProviderUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManySpecialistInput = {
    id?: string
    farmerId?: string | null
    providerId?: string | null
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutAppointmentsNestedInput
    provider?: ProviderUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIQueryCreateManyProviderInput = {
    id?: string
    userId?: string | null
    prompt: string
    response: string
    featureType: $Enums.AIFeatureType
    createdAt?: Date | string
  }

  export type BlogCreateManyProviderInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorEmail: string
    authorName: string
    category?: $Enums.BlogCategory
    image?: string | null
    status?: $Enums.BlogStatus
  }

  export type BookingCreateManyProviderInput = {
    id?: string
    farmerId: string
    equipmentId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateManyProviderInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyProviderInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: string | null
    bookingId?: string | null
    aiQueryId?: string | null
    blogId?: string | null
  }

  export type ReviewCreateManyProviderInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    equipmentId: string
    createdAt?: Date | string
  }

  export type AppointmentCreateManyProviderInput = {
    id?: string
    farmerId?: string | null
    specialistId: string
    status?: $Enums.BookingStatus
    appointmentDate: Date | string
    problemDesc?: string | null
    meetingLink?: string | null
    createdAt?: Date | string
  }

  export type AIQueryUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiQueriesNestedInput
  }

  export type AIQueryUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIQueryUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    featureType?: EnumAIFeatureTypeFieldUpdateOperationsInput | $Enums.AIFeatureType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    author?: UserUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BlogUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorEmail?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
  }

  export type BookingUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutBookingsNestedInput
    farmer?: UserUpdateOneRequiredWithoutBookingsAsFarmerNestedInput
  }

  export type BookingUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutEquipmentNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentNestedInput
    reviews?: ReviewUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEquipmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    aiQueryId?: NullableStringFieldUpdateOperationsInput | string | null
    blogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutAppointmentsNestedInput
    specialist?: SpecialistProfileUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    specialistId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    problemDesc?: NullableStringFieldUpdateOperationsInput | string | null
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyEquipmentInput = {
    id?: string
    farmerId: string
    status?: $Enums.BookingStatus
    startDate: Date | string
    endDate: Date | string
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId?: string | null
  }

  export type ReviewCreateManyEquipmentInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    createdAt?: Date | string
    providerId?: string | null
  }

  export type BookingUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutBookingsAsFarmerNestedInput
    provider?: ProviderUpdateOneWithoutBookingsAsProviderNestedInput
  }

  export type BookingUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    pricePerDay: number
    location: string
    availability?: boolean
    rating?: number
    images?: EquipmentCreateimagesInput | string[]
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutEquipmentNestedInput
    provider?: ProviderUpdateOneRequiredWithoutEquipmentNestedInput
    reviews?: ReviewUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEquipmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    images?: EquipmentUpdateimagesInput | string[]
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyRoomInput = {
    id?: string
    senderType: string
    senderId: string
    senderName: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
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