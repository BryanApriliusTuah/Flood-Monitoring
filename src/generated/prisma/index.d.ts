
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Signup
 * 
 */
export type Signup = $Result.DefaultSelection<Prisma.$SignupPayload>
/**
 * Model Elevation
 * 
 */
export type Elevation = $Result.DefaultSelection<Prisma.$ElevationPayload>
/**
 * Model Hardware
 * 
 */
export type Hardware = $Result.DefaultSelection<Prisma.$HardwarePayload>
/**
 * Model Whatsapp
 * 
 */
export type Whatsapp = $Result.DefaultSelection<Prisma.$WhatsappPayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signup`: Exposes CRUD operations for the **Signup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signups
    * const signups = await prisma.signup.findMany()
    * ```
    */
  get signup(): Prisma.SignupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elevation`: Exposes CRUD operations for the **Elevation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elevations
    * const elevations = await prisma.elevation.findMany()
    * ```
    */
  get elevation(): Prisma.ElevationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hardware`: Exposes CRUD operations for the **Hardware** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hardware
    * const hardware = await prisma.hardware.findMany()
    * ```
    */
  get hardware(): Prisma.HardwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsapp`: Exposes CRUD operations for the **Whatsapp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whatsapps
    * const whatsapps = await prisma.whatsapp.findMany()
    * ```
    */
  get whatsapp(): Prisma.WhatsappDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Admin: 'Admin',
    Signup: 'Signup',
    Elevation: 'Elevation',
    Hardware: 'Hardware',
    Whatsapp: 'Whatsapp',
    Level: 'Level'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "signup" | "elevation" | "hardware" | "whatsapp" | "level"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Signup: {
        payload: Prisma.$SignupPayload<ExtArgs>
        fields: Prisma.SignupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          findFirst: {
            args: Prisma.SignupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          findMany: {
            args: Prisma.SignupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>[]
          }
          create: {
            args: Prisma.SignupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          createMany: {
            args: Prisma.SignupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SignupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          update: {
            args: Prisma.SignupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          deleteMany: {
            args: Prisma.SignupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SignupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          aggregate: {
            args: Prisma.SignupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignup>
          }
          groupBy: {
            args: Prisma.SignupGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignupGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignupCountArgs<ExtArgs>
            result: $Utils.Optional<SignupCountAggregateOutputType> | number
          }
        }
      }
      Elevation: {
        payload: Prisma.$ElevationPayload<ExtArgs>
        fields: Prisma.ElevationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElevationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElevationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          findFirst: {
            args: Prisma.ElevationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElevationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          findMany: {
            args: Prisma.ElevationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>[]
          }
          create: {
            args: Prisma.ElevationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          createMany: {
            args: Prisma.ElevationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ElevationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          update: {
            args: Prisma.ElevationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          deleteMany: {
            args: Prisma.ElevationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElevationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ElevationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElevationPayload>
          }
          aggregate: {
            args: Prisma.ElevationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElevation>
          }
          groupBy: {
            args: Prisma.ElevationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElevationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElevationCountArgs<ExtArgs>
            result: $Utils.Optional<ElevationCountAggregateOutputType> | number
          }
        }
      }
      Hardware: {
        payload: Prisma.$HardwarePayload<ExtArgs>
        fields: Prisma.HardwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HardwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HardwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          findFirst: {
            args: Prisma.HardwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HardwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          findMany: {
            args: Prisma.HardwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>[]
          }
          create: {
            args: Prisma.HardwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          createMany: {
            args: Prisma.HardwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HardwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          update: {
            args: Prisma.HardwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          deleteMany: {
            args: Prisma.HardwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HardwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HardwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwarePayload>
          }
          aggregate: {
            args: Prisma.HardwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHardware>
          }
          groupBy: {
            args: Prisma.HardwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<HardwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.HardwareCountArgs<ExtArgs>
            result: $Utils.Optional<HardwareCountAggregateOutputType> | number
          }
        }
      }
      Whatsapp: {
        payload: Prisma.$WhatsappPayload<ExtArgs>
        fields: Prisma.WhatsappFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          findFirst: {
            args: Prisma.WhatsappFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          findMany: {
            args: Prisma.WhatsappFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>[]
          }
          create: {
            args: Prisma.WhatsappCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          createMany: {
            args: Prisma.WhatsappCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsappDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          update: {
            args: Prisma.WhatsappUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          deleteMany: {
            args: Prisma.WhatsappDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsappUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappPayload>
          }
          aggregate: {
            args: Prisma.WhatsappAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsapp>
          }
          groupBy: {
            args: Prisma.WhatsappGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    signup?: SignupOmit
    elevation?: ElevationOmit
    hardware?: HardwareOmit
    whatsapp?: WhatsappOmit
    level?: LevelOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type HardwareCountOutputType
   */

  export type HardwareCountOutputType = {
    Elevation: number
    Whatsapp: number
  }

  export type HardwareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Elevation?: boolean | HardwareCountOutputTypeCountElevationArgs
    Whatsapp?: boolean | HardwareCountOutputTypeCountWhatsappArgs
  }

  // Custom InputTypes
  /**
   * HardwareCountOutputType without action
   */
  export type HardwareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCountOutputType
     */
    select?: HardwareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HardwareCountOutputType without action
   */
  export type HardwareCountOutputTypeCountElevationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElevationWhereInput
  }

  /**
   * HardwareCountOutputType without action
   */
  export type HardwareCountOutputTypeCountWhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "created_at", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly created_at: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Signup
   */

  export type AggregateSignup = {
    _count: SignupCountAggregateOutputType | null
    _avg: SignupAvgAggregateOutputType | null
    _sum: SignupSumAggregateOutputType | null
    _min: SignupMinAggregateOutputType | null
    _max: SignupMaxAggregateOutputType | null
  }

  export type SignupAvgAggregateOutputType = {
    id: number | null
  }

  export type SignupSumAggregateOutputType = {
    id: number | null
  }

  export type SignupMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    accepted: boolean | null
    created_at: Date | null
  }

  export type SignupMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    accepted: boolean | null
    created_at: Date | null
  }

  export type SignupCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    accepted: number
    created_at: number
    _all: number
  }


  export type SignupAvgAggregateInputType = {
    id?: true
  }

  export type SignupSumAggregateInputType = {
    id?: true
  }

  export type SignupMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    accepted?: true
    created_at?: true
  }

  export type SignupMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    accepted?: true
    created_at?: true
  }

  export type SignupCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    accepted?: true
    created_at?: true
    _all?: true
  }

  export type SignupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signup to aggregate.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signups
    **/
    _count?: true | SignupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignupMaxAggregateInputType
  }

  export type GetSignupAggregateType<T extends SignupAggregateArgs> = {
        [P in keyof T & keyof AggregateSignup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignup[P]>
      : GetScalarType<T[P], AggregateSignup[P]>
  }




  export type SignupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignupWhereInput
    orderBy?: SignupOrderByWithAggregationInput | SignupOrderByWithAggregationInput[]
    by: SignupScalarFieldEnum[] | SignupScalarFieldEnum
    having?: SignupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignupCountAggregateInputType | true
    _avg?: SignupAvgAggregateInputType
    _sum?: SignupSumAggregateInputType
    _min?: SignupMinAggregateInputType
    _max?: SignupMaxAggregateInputType
  }

  export type SignupGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    accepted: boolean
    created_at: Date
    _count: SignupCountAggregateOutputType | null
    _avg: SignupAvgAggregateOutputType | null
    _sum: SignupSumAggregateOutputType | null
    _min: SignupMinAggregateOutputType | null
    _max: SignupMaxAggregateOutputType | null
  }

  type GetSignupGroupByPayload<T extends SignupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignupGroupByOutputType[P]>
            : GetScalarType<T[P], SignupGroupByOutputType[P]>
        }
      >
    >


  export type SignupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    accepted?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["signup"]>



  export type SignupSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    accepted?: boolean
    created_at?: boolean
  }

  export type SignupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "accepted" | "created_at", ExtArgs["result"]["signup"]>

  export type $SignupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      accepted: boolean
      created_at: Date
    }, ExtArgs["result"]["signup"]>
    composites: {}
  }

  type SignupGetPayload<S extends boolean | null | undefined | SignupDefaultArgs> = $Result.GetResult<Prisma.$SignupPayload, S>

  type SignupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignupCountAggregateInputType | true
    }

  export interface SignupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signup'], meta: { name: 'Signup' } }
    /**
     * Find zero or one Signup that matches the filter.
     * @param {SignupFindUniqueArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignupFindUniqueArgs>(args: SelectSubset<T, SignupFindUniqueArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignupFindUniqueOrThrowArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignupFindUniqueOrThrowArgs>(args: SelectSubset<T, SignupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindFirstArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignupFindFirstArgs>(args?: SelectSubset<T, SignupFindFirstArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindFirstOrThrowArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignupFindFirstOrThrowArgs>(args?: SelectSubset<T, SignupFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signups
     * const signups = await prisma.signup.findMany()
     * 
     * // Get first 10 Signups
     * const signups = await prisma.signup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signupWithIdOnly = await prisma.signup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignupFindManyArgs>(args?: SelectSubset<T, SignupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signup.
     * @param {SignupCreateArgs} args - Arguments to create a Signup.
     * @example
     * // Create one Signup
     * const Signup = await prisma.signup.create({
     *   data: {
     *     // ... data to create a Signup
     *   }
     * })
     * 
     */
    create<T extends SignupCreateArgs>(args: SelectSubset<T, SignupCreateArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signups.
     * @param {SignupCreateManyArgs} args - Arguments to create many Signups.
     * @example
     * // Create many Signups
     * const signup = await prisma.signup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignupCreateManyArgs>(args?: SelectSubset<T, SignupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Signup.
     * @param {SignupDeleteArgs} args - Arguments to delete one Signup.
     * @example
     * // Delete one Signup
     * const Signup = await prisma.signup.delete({
     *   where: {
     *     // ... filter to delete one Signup
     *   }
     * })
     * 
     */
    delete<T extends SignupDeleteArgs>(args: SelectSubset<T, SignupDeleteArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signup.
     * @param {SignupUpdateArgs} args - Arguments to update one Signup.
     * @example
     * // Update one Signup
     * const signup = await prisma.signup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignupUpdateArgs>(args: SelectSubset<T, SignupUpdateArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signups.
     * @param {SignupDeleteManyArgs} args - Arguments to filter Signups to delete.
     * @example
     * // Delete a few Signups
     * const { count } = await prisma.signup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignupDeleteManyArgs>(args?: SelectSubset<T, SignupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signups
     * const signup = await prisma.signup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignupUpdateManyArgs>(args: SelectSubset<T, SignupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Signup.
     * @param {SignupUpsertArgs} args - Arguments to update or create a Signup.
     * @example
     * // Update or create a Signup
     * const signup = await prisma.signup.upsert({
     *   create: {
     *     // ... data to create a Signup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signup we want to update
     *   }
     * })
     */
    upsert<T extends SignupUpsertArgs>(args: SelectSubset<T, SignupUpsertArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupCountArgs} args - Arguments to filter Signups to count.
     * @example
     * // Count the number of Signups
     * const count = await prisma.signup.count({
     *   where: {
     *     // ... the filter for the Signups we want to count
     *   }
     * })
    **/
    count<T extends SignupCountArgs>(
      args?: Subset<T, SignupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignupAggregateArgs>(args: Subset<T, SignupAggregateArgs>): Prisma.PrismaPromise<GetSignupAggregateType<T>>

    /**
     * Group by Signup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupGroupByArgs} args - Group by arguments.
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
      T extends SignupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignupGroupByArgs['orderBy'] }
        : { orderBy?: SignupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signup model
   */
  readonly fields: SignupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Signup model
   */
  interface SignupFieldRefs {
    readonly id: FieldRef<"Signup", 'Int'>
    readonly username: FieldRef<"Signup", 'String'>
    readonly password: FieldRef<"Signup", 'String'>
    readonly email: FieldRef<"Signup", 'String'>
    readonly accepted: FieldRef<"Signup", 'Boolean'>
    readonly created_at: FieldRef<"Signup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signup findUnique
   */
  export type SignupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup findUniqueOrThrow
   */
  export type SignupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup findFirst
   */
  export type SignupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signups.
     */
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup findFirstOrThrow
   */
  export type SignupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signups.
     */
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup findMany
   */
  export type SignupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter, which Signups to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup create
   */
  export type SignupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * The data needed to create a Signup.
     */
    data: XOR<SignupCreateInput, SignupUncheckedCreateInput>
  }

  /**
   * Signup createMany
   */
  export type SignupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signups.
     */
    data: SignupCreateManyInput | SignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signup update
   */
  export type SignupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * The data needed to update a Signup.
     */
    data: XOR<SignupUpdateInput, SignupUncheckedUpdateInput>
    /**
     * Choose, which Signup to update.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup updateMany
   */
  export type SignupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signups.
     */
    data: XOR<SignupUpdateManyMutationInput, SignupUncheckedUpdateManyInput>
    /**
     * Filter which Signups to update
     */
    where?: SignupWhereInput
    /**
     * Limit how many Signups to update.
     */
    limit?: number
  }

  /**
   * Signup upsert
   */
  export type SignupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * The filter to search for the Signup to update in case it exists.
     */
    where: SignupWhereUniqueInput
    /**
     * In case the Signup found by the `where` argument doesn't exist, create a new Signup with this data.
     */
    create: XOR<SignupCreateInput, SignupUncheckedCreateInput>
    /**
     * In case the Signup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignupUpdateInput, SignupUncheckedUpdateInput>
  }

  /**
   * Signup delete
   */
  export type SignupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Filter which Signup to delete.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup deleteMany
   */
  export type SignupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signups to delete
     */
    where?: SignupWhereInput
    /**
     * Limit how many Signups to delete.
     */
    limit?: number
  }

  /**
   * Signup without action
   */
  export type SignupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
  }


  /**
   * Model Elevation
   */

  export type AggregateElevation = {
    _count: ElevationCountAggregateOutputType | null
    _avg: ElevationAvgAggregateOutputType | null
    _sum: ElevationSumAggregateOutputType | null
    _min: ElevationMinAggregateOutputType | null
    _max: ElevationMaxAggregateOutputType | null
  }

  export type ElevationAvgAggregateOutputType = {
    id: number | null
    water_elevation: number | null
    hardwareId: number | null
  }

  export type ElevationSumAggregateOutputType = {
    id: number | null
    water_elevation: number | null
    hardwareId: number | null
  }

  export type ElevationMinAggregateOutputType = {
    id: number | null
    water_elevation: number | null
    latitude: string | null
    longitude: string | null
    created_at: Date | null
    hardwareId: number | null
  }

  export type ElevationMaxAggregateOutputType = {
    id: number | null
    water_elevation: number | null
    latitude: string | null
    longitude: string | null
    created_at: Date | null
    hardwareId: number | null
  }

  export type ElevationCountAggregateOutputType = {
    id: number
    water_elevation: number
    latitude: number
    longitude: number
    created_at: number
    hardwareId: number
    _all: number
  }


  export type ElevationAvgAggregateInputType = {
    id?: true
    water_elevation?: true
    hardwareId?: true
  }

  export type ElevationSumAggregateInputType = {
    id?: true
    water_elevation?: true
    hardwareId?: true
  }

  export type ElevationMinAggregateInputType = {
    id?: true
    water_elevation?: true
    latitude?: true
    longitude?: true
    created_at?: true
    hardwareId?: true
  }

  export type ElevationMaxAggregateInputType = {
    id?: true
    water_elevation?: true
    latitude?: true
    longitude?: true
    created_at?: true
    hardwareId?: true
  }

  export type ElevationCountAggregateInputType = {
    id?: true
    water_elevation?: true
    latitude?: true
    longitude?: true
    created_at?: true
    hardwareId?: true
    _all?: true
  }

  export type ElevationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elevation to aggregate.
     */
    where?: ElevationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elevations to fetch.
     */
    orderBy?: ElevationOrderByWithRelationInput | ElevationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElevationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elevations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elevations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elevations
    **/
    _count?: true | ElevationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElevationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElevationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElevationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElevationMaxAggregateInputType
  }

  export type GetElevationAggregateType<T extends ElevationAggregateArgs> = {
        [P in keyof T & keyof AggregateElevation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElevation[P]>
      : GetScalarType<T[P], AggregateElevation[P]>
  }




  export type ElevationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElevationWhereInput
    orderBy?: ElevationOrderByWithAggregationInput | ElevationOrderByWithAggregationInput[]
    by: ElevationScalarFieldEnum[] | ElevationScalarFieldEnum
    having?: ElevationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElevationCountAggregateInputType | true
    _avg?: ElevationAvgAggregateInputType
    _sum?: ElevationSumAggregateInputType
    _min?: ElevationMinAggregateInputType
    _max?: ElevationMaxAggregateInputType
  }

  export type ElevationGroupByOutputType = {
    id: number
    water_elevation: number
    latitude: string
    longitude: string
    created_at: Date
    hardwareId: number
    _count: ElevationCountAggregateOutputType | null
    _avg: ElevationAvgAggregateOutputType | null
    _sum: ElevationSumAggregateOutputType | null
    _min: ElevationMinAggregateOutputType | null
    _max: ElevationMaxAggregateOutputType | null
  }

  type GetElevationGroupByPayload<T extends ElevationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElevationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElevationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElevationGroupByOutputType[P]>
            : GetScalarType<T[P], ElevationGroupByOutputType[P]>
        }
      >
    >


  export type ElevationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    water_elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    hardwareId?: boolean
    Hardware?: boolean | HardwareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elevation"]>



  export type ElevationSelectScalar = {
    id?: boolean
    water_elevation?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    hardwareId?: boolean
  }

  export type ElevationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "water_elevation" | "latitude" | "longitude" | "created_at" | "hardwareId", ExtArgs["result"]["elevation"]>
  export type ElevationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hardware?: boolean | HardwareDefaultArgs<ExtArgs>
  }

  export type $ElevationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Elevation"
    objects: {
      Hardware: Prisma.$HardwarePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      water_elevation: number
      latitude: string
      longitude: string
      created_at: Date
      hardwareId: number
    }, ExtArgs["result"]["elevation"]>
    composites: {}
  }

  type ElevationGetPayload<S extends boolean | null | undefined | ElevationDefaultArgs> = $Result.GetResult<Prisma.$ElevationPayload, S>

  type ElevationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElevationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElevationCountAggregateInputType | true
    }

  export interface ElevationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Elevation'], meta: { name: 'Elevation' } }
    /**
     * Find zero or one Elevation that matches the filter.
     * @param {ElevationFindUniqueArgs} args - Arguments to find a Elevation
     * @example
     * // Get one Elevation
     * const elevation = await prisma.elevation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElevationFindUniqueArgs>(args: SelectSubset<T, ElevationFindUniqueArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elevation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElevationFindUniqueOrThrowArgs} args - Arguments to find a Elevation
     * @example
     * // Get one Elevation
     * const elevation = await prisma.elevation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElevationFindUniqueOrThrowArgs>(args: SelectSubset<T, ElevationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elevation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationFindFirstArgs} args - Arguments to find a Elevation
     * @example
     * // Get one Elevation
     * const elevation = await prisma.elevation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElevationFindFirstArgs>(args?: SelectSubset<T, ElevationFindFirstArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elevation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationFindFirstOrThrowArgs} args - Arguments to find a Elevation
     * @example
     * // Get one Elevation
     * const elevation = await prisma.elevation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElevationFindFirstOrThrowArgs>(args?: SelectSubset<T, ElevationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elevations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elevations
     * const elevations = await prisma.elevation.findMany()
     * 
     * // Get first 10 Elevations
     * const elevations = await prisma.elevation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elevationWithIdOnly = await prisma.elevation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElevationFindManyArgs>(args?: SelectSubset<T, ElevationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elevation.
     * @param {ElevationCreateArgs} args - Arguments to create a Elevation.
     * @example
     * // Create one Elevation
     * const Elevation = await prisma.elevation.create({
     *   data: {
     *     // ... data to create a Elevation
     *   }
     * })
     * 
     */
    create<T extends ElevationCreateArgs>(args: SelectSubset<T, ElevationCreateArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elevations.
     * @param {ElevationCreateManyArgs} args - Arguments to create many Elevations.
     * @example
     * // Create many Elevations
     * const elevation = await prisma.elevation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElevationCreateManyArgs>(args?: SelectSubset<T, ElevationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Elevation.
     * @param {ElevationDeleteArgs} args - Arguments to delete one Elevation.
     * @example
     * // Delete one Elevation
     * const Elevation = await prisma.elevation.delete({
     *   where: {
     *     // ... filter to delete one Elevation
     *   }
     * })
     * 
     */
    delete<T extends ElevationDeleteArgs>(args: SelectSubset<T, ElevationDeleteArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elevation.
     * @param {ElevationUpdateArgs} args - Arguments to update one Elevation.
     * @example
     * // Update one Elevation
     * const elevation = await prisma.elevation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElevationUpdateArgs>(args: SelectSubset<T, ElevationUpdateArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elevations.
     * @param {ElevationDeleteManyArgs} args - Arguments to filter Elevations to delete.
     * @example
     * // Delete a few Elevations
     * const { count } = await prisma.elevation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElevationDeleteManyArgs>(args?: SelectSubset<T, ElevationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elevations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elevations
     * const elevation = await prisma.elevation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElevationUpdateManyArgs>(args: SelectSubset<T, ElevationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Elevation.
     * @param {ElevationUpsertArgs} args - Arguments to update or create a Elevation.
     * @example
     * // Update or create a Elevation
     * const elevation = await prisma.elevation.upsert({
     *   create: {
     *     // ... data to create a Elevation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elevation we want to update
     *   }
     * })
     */
    upsert<T extends ElevationUpsertArgs>(args: SelectSubset<T, ElevationUpsertArgs<ExtArgs>>): Prisma__ElevationClient<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elevations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationCountArgs} args - Arguments to filter Elevations to count.
     * @example
     * // Count the number of Elevations
     * const count = await prisma.elevation.count({
     *   where: {
     *     // ... the filter for the Elevations we want to count
     *   }
     * })
    **/
    count<T extends ElevationCountArgs>(
      args?: Subset<T, ElevationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElevationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elevation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElevationAggregateArgs>(args: Subset<T, ElevationAggregateArgs>): Prisma.PrismaPromise<GetElevationAggregateType<T>>

    /**
     * Group by Elevation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElevationGroupByArgs} args - Group by arguments.
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
      T extends ElevationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElevationGroupByArgs['orderBy'] }
        : { orderBy?: ElevationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ElevationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElevationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Elevation model
   */
  readonly fields: ElevationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Elevation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElevationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Hardware<T extends HardwareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HardwareDefaultArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Elevation model
   */
  interface ElevationFieldRefs {
    readonly id: FieldRef<"Elevation", 'Int'>
    readonly water_elevation: FieldRef<"Elevation", 'Float'>
    readonly latitude: FieldRef<"Elevation", 'String'>
    readonly longitude: FieldRef<"Elevation", 'String'>
    readonly created_at: FieldRef<"Elevation", 'DateTime'>
    readonly hardwareId: FieldRef<"Elevation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Elevation findUnique
   */
  export type ElevationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter, which Elevation to fetch.
     */
    where: ElevationWhereUniqueInput
  }

  /**
   * Elevation findUniqueOrThrow
   */
  export type ElevationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter, which Elevation to fetch.
     */
    where: ElevationWhereUniqueInput
  }

  /**
   * Elevation findFirst
   */
  export type ElevationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter, which Elevation to fetch.
     */
    where?: ElevationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elevations to fetch.
     */
    orderBy?: ElevationOrderByWithRelationInput | ElevationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elevations.
     */
    cursor?: ElevationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elevations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elevations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elevations.
     */
    distinct?: ElevationScalarFieldEnum | ElevationScalarFieldEnum[]
  }

  /**
   * Elevation findFirstOrThrow
   */
  export type ElevationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter, which Elevation to fetch.
     */
    where?: ElevationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elevations to fetch.
     */
    orderBy?: ElevationOrderByWithRelationInput | ElevationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elevations.
     */
    cursor?: ElevationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elevations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elevations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elevations.
     */
    distinct?: ElevationScalarFieldEnum | ElevationScalarFieldEnum[]
  }

  /**
   * Elevation findMany
   */
  export type ElevationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter, which Elevations to fetch.
     */
    where?: ElevationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elevations to fetch.
     */
    orderBy?: ElevationOrderByWithRelationInput | ElevationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elevations.
     */
    cursor?: ElevationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elevations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elevations.
     */
    skip?: number
    distinct?: ElevationScalarFieldEnum | ElevationScalarFieldEnum[]
  }

  /**
   * Elevation create
   */
  export type ElevationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * The data needed to create a Elevation.
     */
    data: XOR<ElevationCreateInput, ElevationUncheckedCreateInput>
  }

  /**
   * Elevation createMany
   */
  export type ElevationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elevations.
     */
    data: ElevationCreateManyInput | ElevationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Elevation update
   */
  export type ElevationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * The data needed to update a Elevation.
     */
    data: XOR<ElevationUpdateInput, ElevationUncheckedUpdateInput>
    /**
     * Choose, which Elevation to update.
     */
    where: ElevationWhereUniqueInput
  }

  /**
   * Elevation updateMany
   */
  export type ElevationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elevations.
     */
    data: XOR<ElevationUpdateManyMutationInput, ElevationUncheckedUpdateManyInput>
    /**
     * Filter which Elevations to update
     */
    where?: ElevationWhereInput
    /**
     * Limit how many Elevations to update.
     */
    limit?: number
  }

  /**
   * Elevation upsert
   */
  export type ElevationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * The filter to search for the Elevation to update in case it exists.
     */
    where: ElevationWhereUniqueInput
    /**
     * In case the Elevation found by the `where` argument doesn't exist, create a new Elevation with this data.
     */
    create: XOR<ElevationCreateInput, ElevationUncheckedCreateInput>
    /**
     * In case the Elevation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElevationUpdateInput, ElevationUncheckedUpdateInput>
  }

  /**
   * Elevation delete
   */
  export type ElevationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    /**
     * Filter which Elevation to delete.
     */
    where: ElevationWhereUniqueInput
  }

  /**
   * Elevation deleteMany
   */
  export type ElevationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elevations to delete
     */
    where?: ElevationWhereInput
    /**
     * Limit how many Elevations to delete.
     */
    limit?: number
  }

  /**
   * Elevation without action
   */
  export type ElevationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
  }


  /**
   * Model Hardware
   */

  export type AggregateHardware = {
    _count: HardwareCountAggregateOutputType | null
    _avg: HardwareAvgAggregateOutputType | null
    _sum: HardwareSumAggregateOutputType | null
    _min: HardwareMinAggregateOutputType | null
    _max: HardwareMaxAggregateOutputType | null
  }

  export type HardwareAvgAggregateOutputType = {
    id: number | null
  }

  export type HardwareSumAggregateOutputType = {
    id: number | null
  }

  export type HardwareMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HardwareMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HardwareCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HardwareAvgAggregateInputType = {
    id?: true
  }

  export type HardwareSumAggregateInputType = {
    id?: true
  }

  export type HardwareMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HardwareMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HardwareCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HardwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hardware to aggregate.
     */
    where?: HardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hardware to fetch.
     */
    orderBy?: HardwareOrderByWithRelationInput | HardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hardware
    **/
    _count?: true | HardwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HardwareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HardwareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HardwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HardwareMaxAggregateInputType
  }

  export type GetHardwareAggregateType<T extends HardwareAggregateArgs> = {
        [P in keyof T & keyof AggregateHardware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHardware[P]>
      : GetScalarType<T[P], AggregateHardware[P]>
  }




  export type HardwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HardwareWhereInput
    orderBy?: HardwareOrderByWithAggregationInput | HardwareOrderByWithAggregationInput[]
    by: HardwareScalarFieldEnum[] | HardwareScalarFieldEnum
    having?: HardwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HardwareCountAggregateInputType | true
    _avg?: HardwareAvgAggregateInputType
    _sum?: HardwareSumAggregateInputType
    _min?: HardwareMinAggregateInputType
    _max?: HardwareMaxAggregateInputType
  }

  export type HardwareGroupByOutputType = {
    id: number
    name: string
    _count: HardwareCountAggregateOutputType | null
    _avg: HardwareAvgAggregateOutputType | null
    _sum: HardwareSumAggregateOutputType | null
    _min: HardwareMinAggregateOutputType | null
    _max: HardwareMaxAggregateOutputType | null
  }

  type GetHardwareGroupByPayload<T extends HardwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HardwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HardwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HardwareGroupByOutputType[P]>
            : GetScalarType<T[P], HardwareGroupByOutputType[P]>
        }
      >
    >


  export type HardwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Elevation?: boolean | Hardware$ElevationArgs<ExtArgs>
    Whatsapp?: boolean | Hardware$WhatsappArgs<ExtArgs>
    _count?: boolean | HardwareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hardware"]>



  export type HardwareSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HardwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["hardware"]>
  export type HardwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Elevation?: boolean | Hardware$ElevationArgs<ExtArgs>
    Whatsapp?: boolean | Hardware$WhatsappArgs<ExtArgs>
    _count?: boolean | HardwareCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HardwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hardware"
    objects: {
      Elevation: Prisma.$ElevationPayload<ExtArgs>[]
      Whatsapp: Prisma.$WhatsappPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["hardware"]>
    composites: {}
  }

  type HardwareGetPayload<S extends boolean | null | undefined | HardwareDefaultArgs> = $Result.GetResult<Prisma.$HardwarePayload, S>

  type HardwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HardwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HardwareCountAggregateInputType | true
    }

  export interface HardwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hardware'], meta: { name: 'Hardware' } }
    /**
     * Find zero or one Hardware that matches the filter.
     * @param {HardwareFindUniqueArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HardwareFindUniqueArgs>(args: SelectSubset<T, HardwareFindUniqueArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hardware that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HardwareFindUniqueOrThrowArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HardwareFindUniqueOrThrowArgs>(args: SelectSubset<T, HardwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hardware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareFindFirstArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HardwareFindFirstArgs>(args?: SelectSubset<T, HardwareFindFirstArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hardware that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareFindFirstOrThrowArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HardwareFindFirstOrThrowArgs>(args?: SelectSubset<T, HardwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hardware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hardware
     * const hardware = await prisma.hardware.findMany()
     * 
     * // Get first 10 Hardware
     * const hardware = await prisma.hardware.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hardwareWithIdOnly = await prisma.hardware.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HardwareFindManyArgs>(args?: SelectSubset<T, HardwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hardware.
     * @param {HardwareCreateArgs} args - Arguments to create a Hardware.
     * @example
     * // Create one Hardware
     * const Hardware = await prisma.hardware.create({
     *   data: {
     *     // ... data to create a Hardware
     *   }
     * })
     * 
     */
    create<T extends HardwareCreateArgs>(args: SelectSubset<T, HardwareCreateArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hardware.
     * @param {HardwareCreateManyArgs} args - Arguments to create many Hardware.
     * @example
     * // Create many Hardware
     * const hardware = await prisma.hardware.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HardwareCreateManyArgs>(args?: SelectSubset<T, HardwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hardware.
     * @param {HardwareDeleteArgs} args - Arguments to delete one Hardware.
     * @example
     * // Delete one Hardware
     * const Hardware = await prisma.hardware.delete({
     *   where: {
     *     // ... filter to delete one Hardware
     *   }
     * })
     * 
     */
    delete<T extends HardwareDeleteArgs>(args: SelectSubset<T, HardwareDeleteArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hardware.
     * @param {HardwareUpdateArgs} args - Arguments to update one Hardware.
     * @example
     * // Update one Hardware
     * const hardware = await prisma.hardware.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HardwareUpdateArgs>(args: SelectSubset<T, HardwareUpdateArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hardware.
     * @param {HardwareDeleteManyArgs} args - Arguments to filter Hardware to delete.
     * @example
     * // Delete a few Hardware
     * const { count } = await prisma.hardware.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HardwareDeleteManyArgs>(args?: SelectSubset<T, HardwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hardware
     * const hardware = await prisma.hardware.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HardwareUpdateManyArgs>(args: SelectSubset<T, HardwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hardware.
     * @param {HardwareUpsertArgs} args - Arguments to update or create a Hardware.
     * @example
     * // Update or create a Hardware
     * const hardware = await prisma.hardware.upsert({
     *   create: {
     *     // ... data to create a Hardware
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hardware we want to update
     *   }
     * })
     */
    upsert<T extends HardwareUpsertArgs>(args: SelectSubset<T, HardwareUpsertArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCountArgs} args - Arguments to filter Hardware to count.
     * @example
     * // Count the number of Hardware
     * const count = await prisma.hardware.count({
     *   where: {
     *     // ... the filter for the Hardware we want to count
     *   }
     * })
    **/
    count<T extends HardwareCountArgs>(
      args?: Subset<T, HardwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HardwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HardwareAggregateArgs>(args: Subset<T, HardwareAggregateArgs>): Prisma.PrismaPromise<GetHardwareAggregateType<T>>

    /**
     * Group by Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareGroupByArgs} args - Group by arguments.
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
      T extends HardwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HardwareGroupByArgs['orderBy'] }
        : { orderBy?: HardwareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HardwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHardwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hardware model
   */
  readonly fields: HardwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hardware.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HardwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Elevation<T extends Hardware$ElevationArgs<ExtArgs> = {}>(args?: Subset<T, Hardware$ElevationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElevationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Whatsapp<T extends Hardware$WhatsappArgs<ExtArgs> = {}>(args?: Subset<T, Hardware$WhatsappArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hardware model
   */
  interface HardwareFieldRefs {
    readonly id: FieldRef<"Hardware", 'Int'>
    readonly name: FieldRef<"Hardware", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hardware findUnique
   */
  export type HardwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter, which Hardware to fetch.
     */
    where: HardwareWhereUniqueInput
  }

  /**
   * Hardware findUniqueOrThrow
   */
  export type HardwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter, which Hardware to fetch.
     */
    where: HardwareWhereUniqueInput
  }

  /**
   * Hardware findFirst
   */
  export type HardwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter, which Hardware to fetch.
     */
    where?: HardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hardware to fetch.
     */
    orderBy?: HardwareOrderByWithRelationInput | HardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hardware.
     */
    cursor?: HardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hardware.
     */
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * Hardware findFirstOrThrow
   */
  export type HardwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter, which Hardware to fetch.
     */
    where?: HardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hardware to fetch.
     */
    orderBy?: HardwareOrderByWithRelationInput | HardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hardware.
     */
    cursor?: HardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hardware.
     */
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * Hardware findMany
   */
  export type HardwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter, which Hardware to fetch.
     */
    where?: HardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hardware to fetch.
     */
    orderBy?: HardwareOrderByWithRelationInput | HardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hardware.
     */
    cursor?: HardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hardware.
     */
    skip?: number
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * Hardware create
   */
  export type HardwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * The data needed to create a Hardware.
     */
    data: XOR<HardwareCreateInput, HardwareUncheckedCreateInput>
  }

  /**
   * Hardware createMany
   */
  export type HardwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hardware.
     */
    data: HardwareCreateManyInput | HardwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hardware update
   */
  export type HardwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * The data needed to update a Hardware.
     */
    data: XOR<HardwareUpdateInput, HardwareUncheckedUpdateInput>
    /**
     * Choose, which Hardware to update.
     */
    where: HardwareWhereUniqueInput
  }

  /**
   * Hardware updateMany
   */
  export type HardwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hardware.
     */
    data: XOR<HardwareUpdateManyMutationInput, HardwareUncheckedUpdateManyInput>
    /**
     * Filter which Hardware to update
     */
    where?: HardwareWhereInput
    /**
     * Limit how many Hardware to update.
     */
    limit?: number
  }

  /**
   * Hardware upsert
   */
  export type HardwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * The filter to search for the Hardware to update in case it exists.
     */
    where: HardwareWhereUniqueInput
    /**
     * In case the Hardware found by the `where` argument doesn't exist, create a new Hardware with this data.
     */
    create: XOR<HardwareCreateInput, HardwareUncheckedCreateInput>
    /**
     * In case the Hardware was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HardwareUpdateInput, HardwareUncheckedUpdateInput>
  }

  /**
   * Hardware delete
   */
  export type HardwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
    /**
     * Filter which Hardware to delete.
     */
    where: HardwareWhereUniqueInput
  }

  /**
   * Hardware deleteMany
   */
  export type HardwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hardware to delete
     */
    where?: HardwareWhereInput
    /**
     * Limit how many Hardware to delete.
     */
    limit?: number
  }

  /**
   * Hardware.Elevation
   */
  export type Hardware$ElevationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elevation
     */
    select?: ElevationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elevation
     */
    omit?: ElevationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElevationInclude<ExtArgs> | null
    where?: ElevationWhereInput
    orderBy?: ElevationOrderByWithRelationInput | ElevationOrderByWithRelationInput[]
    cursor?: ElevationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElevationScalarFieldEnum | ElevationScalarFieldEnum[]
  }

  /**
   * Hardware.Whatsapp
   */
  export type Hardware$WhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    where?: WhatsappWhereInput
    orderBy?: WhatsappOrderByWithRelationInput | WhatsappOrderByWithRelationInput[]
    cursor?: WhatsappWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappScalarFieldEnum | WhatsappScalarFieldEnum[]
  }

  /**
   * Hardware without action
   */
  export type HardwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hardware
     */
    select?: HardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hardware
     */
    omit?: HardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HardwareInclude<ExtArgs> | null
  }


  /**
   * Model Whatsapp
   */

  export type AggregateWhatsapp = {
    _count: WhatsappCountAggregateOutputType | null
    _avg: WhatsappAvgAggregateOutputType | null
    _sum: WhatsappSumAggregateOutputType | null
    _min: WhatsappMinAggregateOutputType | null
    _max: WhatsappMaxAggregateOutputType | null
  }

  export type WhatsappAvgAggregateOutputType = {
    id: number | null
    hardwareId: number | null
  }

  export type WhatsappSumAggregateOutputType = {
    id: number | null
    hardwareId: number | null
  }

  export type WhatsappMinAggregateOutputType = {
    id: number | null
    whatsapp_number: string | null
    hardwareId: number | null
  }

  export type WhatsappMaxAggregateOutputType = {
    id: number | null
    whatsapp_number: string | null
    hardwareId: number | null
  }

  export type WhatsappCountAggregateOutputType = {
    id: number
    whatsapp_number: number
    hardwareId: number
    _all: number
  }


  export type WhatsappAvgAggregateInputType = {
    id?: true
    hardwareId?: true
  }

  export type WhatsappSumAggregateInputType = {
    id?: true
    hardwareId?: true
  }

  export type WhatsappMinAggregateInputType = {
    id?: true
    whatsapp_number?: true
    hardwareId?: true
  }

  export type WhatsappMaxAggregateInputType = {
    id?: true
    whatsapp_number?: true
    hardwareId?: true
  }

  export type WhatsappCountAggregateInputType = {
    id?: true
    whatsapp_number?: true
    hardwareId?: true
    _all?: true
  }

  export type WhatsappAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whatsapp to aggregate.
     */
    where?: WhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whatsapps to fetch.
     */
    orderBy?: WhatsappOrderByWithRelationInput | WhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Whatsapps
    **/
    _count?: true | WhatsappCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsappAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsappSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappMaxAggregateInputType
  }

  export type GetWhatsappAggregateType<T extends WhatsappAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsapp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsapp[P]>
      : GetScalarType<T[P], AggregateWhatsapp[P]>
  }




  export type WhatsappGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappWhereInput
    orderBy?: WhatsappOrderByWithAggregationInput | WhatsappOrderByWithAggregationInput[]
    by: WhatsappScalarFieldEnum[] | WhatsappScalarFieldEnum
    having?: WhatsappScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappCountAggregateInputType | true
    _avg?: WhatsappAvgAggregateInputType
    _sum?: WhatsappSumAggregateInputType
    _min?: WhatsappMinAggregateInputType
    _max?: WhatsappMaxAggregateInputType
  }

  export type WhatsappGroupByOutputType = {
    id: number
    whatsapp_number: string
    hardwareId: number
    _count: WhatsappCountAggregateOutputType | null
    _avg: WhatsappAvgAggregateOutputType | null
    _sum: WhatsappSumAggregateOutputType | null
    _min: WhatsappMinAggregateOutputType | null
    _max: WhatsappMaxAggregateOutputType | null
  }

  type GetWhatsappGroupByPayload<T extends WhatsappGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsapp_number?: boolean
    hardwareId?: boolean
    Hardware?: boolean | HardwareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp"]>



  export type WhatsappSelectScalar = {
    id?: boolean
    whatsapp_number?: boolean
    hardwareId?: boolean
  }

  export type WhatsappOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsapp_number" | "hardwareId", ExtArgs["result"]["whatsapp"]>
  export type WhatsappInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hardware?: boolean | HardwareDefaultArgs<ExtArgs>
  }

  export type $WhatsappPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Whatsapp"
    objects: {
      Hardware: Prisma.$HardwarePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      whatsapp_number: string
      hardwareId: number
    }, ExtArgs["result"]["whatsapp"]>
    composites: {}
  }

  type WhatsappGetPayload<S extends boolean | null | undefined | WhatsappDefaultArgs> = $Result.GetResult<Prisma.$WhatsappPayload, S>

  type WhatsappCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappCountAggregateInputType | true
    }

  export interface WhatsappDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Whatsapp'], meta: { name: 'Whatsapp' } }
    /**
     * Find zero or one Whatsapp that matches the filter.
     * @param {WhatsappFindUniqueArgs} args - Arguments to find a Whatsapp
     * @example
     * // Get one Whatsapp
     * const whatsapp = await prisma.whatsapp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappFindUniqueArgs>(args: SelectSubset<T, WhatsappFindUniqueArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whatsapp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappFindUniqueOrThrowArgs} args - Arguments to find a Whatsapp
     * @example
     * // Get one Whatsapp
     * const whatsapp = await prisma.whatsapp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappFindFirstArgs} args - Arguments to find a Whatsapp
     * @example
     * // Get one Whatsapp
     * const whatsapp = await prisma.whatsapp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappFindFirstArgs>(args?: SelectSubset<T, WhatsappFindFirstArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappFindFirstOrThrowArgs} args - Arguments to find a Whatsapp
     * @example
     * // Get one Whatsapp
     * const whatsapp = await prisma.whatsapp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whatsapps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whatsapps
     * const whatsapps = await prisma.whatsapp.findMany()
     * 
     * // Get first 10 Whatsapps
     * const whatsapps = await prisma.whatsapp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappWithIdOnly = await prisma.whatsapp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappFindManyArgs>(args?: SelectSubset<T, WhatsappFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whatsapp.
     * @param {WhatsappCreateArgs} args - Arguments to create a Whatsapp.
     * @example
     * // Create one Whatsapp
     * const Whatsapp = await prisma.whatsapp.create({
     *   data: {
     *     // ... data to create a Whatsapp
     *   }
     * })
     * 
     */
    create<T extends WhatsappCreateArgs>(args: SelectSubset<T, WhatsappCreateArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whatsapps.
     * @param {WhatsappCreateManyArgs} args - Arguments to create many Whatsapps.
     * @example
     * // Create many Whatsapps
     * const whatsapp = await prisma.whatsapp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappCreateManyArgs>(args?: SelectSubset<T, WhatsappCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Whatsapp.
     * @param {WhatsappDeleteArgs} args - Arguments to delete one Whatsapp.
     * @example
     * // Delete one Whatsapp
     * const Whatsapp = await prisma.whatsapp.delete({
     *   where: {
     *     // ... filter to delete one Whatsapp
     *   }
     * })
     * 
     */
    delete<T extends WhatsappDeleteArgs>(args: SelectSubset<T, WhatsappDeleteArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whatsapp.
     * @param {WhatsappUpdateArgs} args - Arguments to update one Whatsapp.
     * @example
     * // Update one Whatsapp
     * const whatsapp = await prisma.whatsapp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappUpdateArgs>(args: SelectSubset<T, WhatsappUpdateArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whatsapps.
     * @param {WhatsappDeleteManyArgs} args - Arguments to filter Whatsapps to delete.
     * @example
     * // Delete a few Whatsapps
     * const { count } = await prisma.whatsapp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappDeleteManyArgs>(args?: SelectSubset<T, WhatsappDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whatsapps
     * const whatsapp = await prisma.whatsapp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappUpdateManyArgs>(args: SelectSubset<T, WhatsappUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Whatsapp.
     * @param {WhatsappUpsertArgs} args - Arguments to update or create a Whatsapp.
     * @example
     * // Update or create a Whatsapp
     * const whatsapp = await prisma.whatsapp.upsert({
     *   create: {
     *     // ... data to create a Whatsapp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whatsapp we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappUpsertArgs>(args: SelectSubset<T, WhatsappUpsertArgs<ExtArgs>>): Prisma__WhatsappClient<$Result.GetResult<Prisma.$WhatsappPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whatsapps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappCountArgs} args - Arguments to filter Whatsapps to count.
     * @example
     * // Count the number of Whatsapps
     * const count = await prisma.whatsapp.count({
     *   where: {
     *     // ... the filter for the Whatsapps we want to count
     *   }
     * })
    **/
    count<T extends WhatsappCountArgs>(
      args?: Subset<T, WhatsappCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whatsapp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhatsappAggregateArgs>(args: Subset<T, WhatsappAggregateArgs>): Prisma.PrismaPromise<GetWhatsappAggregateType<T>>

    /**
     * Group by Whatsapp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappGroupByArgs} args - Group by arguments.
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
      T extends WhatsappGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhatsappGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Whatsapp model
   */
  readonly fields: WhatsappFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Whatsapp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Hardware<T extends HardwareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HardwareDefaultArgs<ExtArgs>>): Prisma__HardwareClient<$Result.GetResult<Prisma.$HardwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Whatsapp model
   */
  interface WhatsappFieldRefs {
    readonly id: FieldRef<"Whatsapp", 'Int'>
    readonly whatsapp_number: FieldRef<"Whatsapp", 'String'>
    readonly hardwareId: FieldRef<"Whatsapp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Whatsapp findUnique
   */
  export type WhatsappFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter, which Whatsapp to fetch.
     */
    where: WhatsappWhereUniqueInput
  }

  /**
   * Whatsapp findUniqueOrThrow
   */
  export type WhatsappFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter, which Whatsapp to fetch.
     */
    where: WhatsappWhereUniqueInput
  }

  /**
   * Whatsapp findFirst
   */
  export type WhatsappFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter, which Whatsapp to fetch.
     */
    where?: WhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whatsapps to fetch.
     */
    orderBy?: WhatsappOrderByWithRelationInput | WhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whatsapps.
     */
    cursor?: WhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whatsapps.
     */
    distinct?: WhatsappScalarFieldEnum | WhatsappScalarFieldEnum[]
  }

  /**
   * Whatsapp findFirstOrThrow
   */
  export type WhatsappFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter, which Whatsapp to fetch.
     */
    where?: WhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whatsapps to fetch.
     */
    orderBy?: WhatsappOrderByWithRelationInput | WhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whatsapps.
     */
    cursor?: WhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whatsapps.
     */
    distinct?: WhatsappScalarFieldEnum | WhatsappScalarFieldEnum[]
  }

  /**
   * Whatsapp findMany
   */
  export type WhatsappFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter, which Whatsapps to fetch.
     */
    where?: WhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whatsapps to fetch.
     */
    orderBy?: WhatsappOrderByWithRelationInput | WhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Whatsapps.
     */
    cursor?: WhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whatsapps.
     */
    skip?: number
    distinct?: WhatsappScalarFieldEnum | WhatsappScalarFieldEnum[]
  }

  /**
   * Whatsapp create
   */
  export type WhatsappCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * The data needed to create a Whatsapp.
     */
    data: XOR<WhatsappCreateInput, WhatsappUncheckedCreateInput>
  }

  /**
   * Whatsapp createMany
   */
  export type WhatsappCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Whatsapps.
     */
    data: WhatsappCreateManyInput | WhatsappCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whatsapp update
   */
  export type WhatsappUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * The data needed to update a Whatsapp.
     */
    data: XOR<WhatsappUpdateInput, WhatsappUncheckedUpdateInput>
    /**
     * Choose, which Whatsapp to update.
     */
    where: WhatsappWhereUniqueInput
  }

  /**
   * Whatsapp updateMany
   */
  export type WhatsappUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Whatsapps.
     */
    data: XOR<WhatsappUpdateManyMutationInput, WhatsappUncheckedUpdateManyInput>
    /**
     * Filter which Whatsapps to update
     */
    where?: WhatsappWhereInput
    /**
     * Limit how many Whatsapps to update.
     */
    limit?: number
  }

  /**
   * Whatsapp upsert
   */
  export type WhatsappUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * The filter to search for the Whatsapp to update in case it exists.
     */
    where: WhatsappWhereUniqueInput
    /**
     * In case the Whatsapp found by the `where` argument doesn't exist, create a new Whatsapp with this data.
     */
    create: XOR<WhatsappCreateInput, WhatsappUncheckedCreateInput>
    /**
     * In case the Whatsapp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappUpdateInput, WhatsappUncheckedUpdateInput>
  }

  /**
   * Whatsapp delete
   */
  export type WhatsappDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
    /**
     * Filter which Whatsapp to delete.
     */
    where: WhatsappWhereUniqueInput
  }

  /**
   * Whatsapp deleteMany
   */
  export type WhatsappDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whatsapps to delete
     */
    where?: WhatsappWhereInput
    /**
     * Limit how many Whatsapps to delete.
     */
    limit?: number
  }

  /**
   * Whatsapp without action
   */
  export type WhatsappDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whatsapp
     */
    select?: WhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whatsapp
     */
    omit?: WhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappInclude<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    id: number | null
    Normal: number | null
    Banjir: number | null
  }

  export type LevelSumAggregateOutputType = {
    id: number | null
    Normal: number | null
    Banjir: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: number | null
    Normal: number | null
    Banjir: number | null
  }

  export type LevelMaxAggregateOutputType = {
    id: number | null
    Normal: number | null
    Banjir: number | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    Normal: number
    Banjir: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    id?: true
    Normal?: true
    Banjir?: true
  }

  export type LevelSumAggregateInputType = {
    id?: true
    Normal?: true
    Banjir?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    Normal?: true
    Banjir?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    Normal?: true
    Banjir?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    Normal?: true
    Banjir?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: number
    Normal: number
    Banjir: number
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Normal?: boolean
    Banjir?: boolean
  }, ExtArgs["result"]["level"]>



  export type LevelSelectScalar = {
    id?: boolean
    Normal?: boolean
    Banjir?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Normal" | "Banjir", ExtArgs["result"]["level"]>

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Normal: number
      Banjir: number
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'Int'>
    readonly Normal: FieldRef<"Level", 'Int'>
    readonly Banjir: FieldRef<"Level", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SignupScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    accepted: 'accepted',
    created_at: 'created_at'
  };

  export type SignupScalarFieldEnum = (typeof SignupScalarFieldEnum)[keyof typeof SignupScalarFieldEnum]


  export const ElevationScalarFieldEnum: {
    id: 'id',
    water_elevation: 'water_elevation',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    hardwareId: 'hardwareId'
  };

  export type ElevationScalarFieldEnum = (typeof ElevationScalarFieldEnum)[keyof typeof ElevationScalarFieldEnum]


  export const HardwareScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HardwareScalarFieldEnum = (typeof HardwareScalarFieldEnum)[keyof typeof HardwareScalarFieldEnum]


  export const WhatsappScalarFieldEnum: {
    id: 'id',
    whatsapp_number: 'whatsapp_number',
    hardwareId: 'hardwareId'
  };

  export type WhatsappScalarFieldEnum = (typeof WhatsappScalarFieldEnum)[keyof typeof WhatsappScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    Normal: 'Normal',
    Banjir: 'Banjir'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const SignupOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    email: 'email'
  };

  export type SignupOrderByRelevanceFieldEnum = (typeof SignupOrderByRelevanceFieldEnum)[keyof typeof SignupOrderByRelevanceFieldEnum]


  export const ElevationOrderByRelevanceFieldEnum: {
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type ElevationOrderByRelevanceFieldEnum = (typeof ElevationOrderByRelevanceFieldEnum)[keyof typeof ElevationOrderByRelevanceFieldEnum]


  export const HardwareOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type HardwareOrderByRelevanceFieldEnum = (typeof HardwareOrderByRelevanceFieldEnum)[keyof typeof HardwareOrderByRelevanceFieldEnum]


  export const WhatsappOrderByRelevanceFieldEnum: {
    whatsapp_number: 'whatsapp_number'
  };

  export type WhatsappOrderByRelevanceFieldEnum = (typeof WhatsappOrderByRelevanceFieldEnum)[keyof typeof WhatsappOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SignupWhereInput = {
    AND?: SignupWhereInput | SignupWhereInput[]
    OR?: SignupWhereInput[]
    NOT?: SignupWhereInput | SignupWhereInput[]
    id?: IntFilter<"Signup"> | number
    username?: StringFilter<"Signup"> | string
    password?: StringFilter<"Signup"> | string
    email?: StringFilter<"Signup"> | string
    accepted?: BoolFilter<"Signup"> | boolean
    created_at?: DateTimeFilter<"Signup"> | Date | string
  }

  export type SignupOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    accepted?: SortOrder
    created_at?: SortOrder
    _relevance?: SignupOrderByRelevanceInput
  }

  export type SignupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: SignupWhereInput | SignupWhereInput[]
    OR?: SignupWhereInput[]
    NOT?: SignupWhereInput | SignupWhereInput[]
    password?: StringFilter<"Signup"> | string
    accepted?: BoolFilter<"Signup"> | boolean
    created_at?: DateTimeFilter<"Signup"> | Date | string
  }, "id" | "username" | "email">

  export type SignupOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    accepted?: SortOrder
    created_at?: SortOrder
    _count?: SignupCountOrderByAggregateInput
    _avg?: SignupAvgOrderByAggregateInput
    _max?: SignupMaxOrderByAggregateInput
    _min?: SignupMinOrderByAggregateInput
    _sum?: SignupSumOrderByAggregateInput
  }

  export type SignupScalarWhereWithAggregatesInput = {
    AND?: SignupScalarWhereWithAggregatesInput | SignupScalarWhereWithAggregatesInput[]
    OR?: SignupScalarWhereWithAggregatesInput[]
    NOT?: SignupScalarWhereWithAggregatesInput | SignupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Signup"> | number
    username?: StringWithAggregatesFilter<"Signup"> | string
    password?: StringWithAggregatesFilter<"Signup"> | string
    email?: StringWithAggregatesFilter<"Signup"> | string
    accepted?: BoolWithAggregatesFilter<"Signup"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Signup"> | Date | string
  }

  export type ElevationWhereInput = {
    AND?: ElevationWhereInput | ElevationWhereInput[]
    OR?: ElevationWhereInput[]
    NOT?: ElevationWhereInput | ElevationWhereInput[]
    id?: IntFilter<"Elevation"> | number
    water_elevation?: FloatFilter<"Elevation"> | number
    latitude?: StringFilter<"Elevation"> | string
    longitude?: StringFilter<"Elevation"> | string
    created_at?: DateTimeFilter<"Elevation"> | Date | string
    hardwareId?: IntFilter<"Elevation"> | number
    Hardware?: XOR<HardwareScalarRelationFilter, HardwareWhereInput>
  }

  export type ElevationOrderByWithRelationInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    hardwareId?: SortOrder
    Hardware?: HardwareOrderByWithRelationInput
    _relevance?: ElevationOrderByRelevanceInput
  }

  export type ElevationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ElevationWhereInput | ElevationWhereInput[]
    OR?: ElevationWhereInput[]
    NOT?: ElevationWhereInput | ElevationWhereInput[]
    water_elevation?: FloatFilter<"Elevation"> | number
    latitude?: StringFilter<"Elevation"> | string
    longitude?: StringFilter<"Elevation"> | string
    created_at?: DateTimeFilter<"Elevation"> | Date | string
    hardwareId?: IntFilter<"Elevation"> | number
    Hardware?: XOR<HardwareScalarRelationFilter, HardwareWhereInput>
  }, "id">

  export type ElevationOrderByWithAggregationInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    hardwareId?: SortOrder
    _count?: ElevationCountOrderByAggregateInput
    _avg?: ElevationAvgOrderByAggregateInput
    _max?: ElevationMaxOrderByAggregateInput
    _min?: ElevationMinOrderByAggregateInput
    _sum?: ElevationSumOrderByAggregateInput
  }

  export type ElevationScalarWhereWithAggregatesInput = {
    AND?: ElevationScalarWhereWithAggregatesInput | ElevationScalarWhereWithAggregatesInput[]
    OR?: ElevationScalarWhereWithAggregatesInput[]
    NOT?: ElevationScalarWhereWithAggregatesInput | ElevationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Elevation"> | number
    water_elevation?: FloatWithAggregatesFilter<"Elevation"> | number
    latitude?: StringWithAggregatesFilter<"Elevation"> | string
    longitude?: StringWithAggregatesFilter<"Elevation"> | string
    created_at?: DateTimeWithAggregatesFilter<"Elevation"> | Date | string
    hardwareId?: IntWithAggregatesFilter<"Elevation"> | number
  }

  export type HardwareWhereInput = {
    AND?: HardwareWhereInput | HardwareWhereInput[]
    OR?: HardwareWhereInput[]
    NOT?: HardwareWhereInput | HardwareWhereInput[]
    id?: IntFilter<"Hardware"> | number
    name?: StringFilter<"Hardware"> | string
    Elevation?: ElevationListRelationFilter
    Whatsapp?: WhatsappListRelationFilter
  }

  export type HardwareOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Elevation?: ElevationOrderByRelationAggregateInput
    Whatsapp?: WhatsappOrderByRelationAggregateInput
    _relevance?: HardwareOrderByRelevanceInput
  }

  export type HardwareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HardwareWhereInput | HardwareWhereInput[]
    OR?: HardwareWhereInput[]
    NOT?: HardwareWhereInput | HardwareWhereInput[]
    name?: StringFilter<"Hardware"> | string
    Elevation?: ElevationListRelationFilter
    Whatsapp?: WhatsappListRelationFilter
  }, "id">

  export type HardwareOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HardwareCountOrderByAggregateInput
    _avg?: HardwareAvgOrderByAggregateInput
    _max?: HardwareMaxOrderByAggregateInput
    _min?: HardwareMinOrderByAggregateInput
    _sum?: HardwareSumOrderByAggregateInput
  }

  export type HardwareScalarWhereWithAggregatesInput = {
    AND?: HardwareScalarWhereWithAggregatesInput | HardwareScalarWhereWithAggregatesInput[]
    OR?: HardwareScalarWhereWithAggregatesInput[]
    NOT?: HardwareScalarWhereWithAggregatesInput | HardwareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hardware"> | number
    name?: StringWithAggregatesFilter<"Hardware"> | string
  }

  export type WhatsappWhereInput = {
    AND?: WhatsappWhereInput | WhatsappWhereInput[]
    OR?: WhatsappWhereInput[]
    NOT?: WhatsappWhereInput | WhatsappWhereInput[]
    id?: IntFilter<"Whatsapp"> | number
    whatsapp_number?: StringFilter<"Whatsapp"> | string
    hardwareId?: IntFilter<"Whatsapp"> | number
    Hardware?: XOR<HardwareScalarRelationFilter, HardwareWhereInput>
  }

  export type WhatsappOrderByWithRelationInput = {
    id?: SortOrder
    whatsapp_number?: SortOrder
    hardwareId?: SortOrder
    Hardware?: HardwareOrderByWithRelationInput
    _relevance?: WhatsappOrderByRelevanceInput
  }

  export type WhatsappWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WhatsappWhereInput | WhatsappWhereInput[]
    OR?: WhatsappWhereInput[]
    NOT?: WhatsappWhereInput | WhatsappWhereInput[]
    whatsapp_number?: StringFilter<"Whatsapp"> | string
    hardwareId?: IntFilter<"Whatsapp"> | number
    Hardware?: XOR<HardwareScalarRelationFilter, HardwareWhereInput>
  }, "id">

  export type WhatsappOrderByWithAggregationInput = {
    id?: SortOrder
    whatsapp_number?: SortOrder
    hardwareId?: SortOrder
    _count?: WhatsappCountOrderByAggregateInput
    _avg?: WhatsappAvgOrderByAggregateInput
    _max?: WhatsappMaxOrderByAggregateInput
    _min?: WhatsappMinOrderByAggregateInput
    _sum?: WhatsappSumOrderByAggregateInput
  }

  export type WhatsappScalarWhereWithAggregatesInput = {
    AND?: WhatsappScalarWhereWithAggregatesInput | WhatsappScalarWhereWithAggregatesInput[]
    OR?: WhatsappScalarWhereWithAggregatesInput[]
    NOT?: WhatsappScalarWhereWithAggregatesInput | WhatsappScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Whatsapp"> | number
    whatsapp_number?: StringWithAggregatesFilter<"Whatsapp"> | string
    hardwareId?: IntWithAggregatesFilter<"Whatsapp"> | number
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: IntFilter<"Level"> | number
    Normal?: IntFilter<"Level"> | number
    Banjir?: IntFilter<"Level"> | number
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    Normal?: IntFilter<"Level"> | number
    Banjir?: IntFilter<"Level"> | number
  }, "id">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Level"> | number
    Normal?: IntWithAggregatesFilter<"Level"> | number
    Banjir?: IntWithAggregatesFilter<"Level"> | number
  }

  export type AdminCreateInput = {
    email: string
    password: string
    role?: string
    created_at?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: string
    created_at?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: string
    created_at?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupCreateInput = {
    username: string
    password: string
    email: string
    accepted?: boolean
    created_at?: Date | string
  }

  export type SignupUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    accepted?: boolean
    created_at?: Date | string
  }

  export type SignupUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    accepted?: boolean
    created_at?: Date | string
  }

  export type SignupUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElevationCreateInput = {
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
    Hardware: HardwareCreateNestedOneWithoutElevationInput
  }

  export type ElevationUncheckedCreateInput = {
    id?: number
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
    hardwareId: number
  }

  export type ElevationUpdateInput = {
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Hardware?: HardwareUpdateOneRequiredWithoutElevationNestedInput
  }

  export type ElevationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hardwareId?: IntFieldUpdateOperationsInput | number
  }

  export type ElevationCreateManyInput = {
    id?: number
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
    hardwareId: number
  }

  export type ElevationUpdateManyMutationInput = {
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElevationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hardwareId?: IntFieldUpdateOperationsInput | number
  }

  export type HardwareCreateInput = {
    name: string
    Elevation?: ElevationCreateNestedManyWithoutHardwareInput
    Whatsapp?: WhatsappCreateNestedManyWithoutHardwareInput
  }

  export type HardwareUncheckedCreateInput = {
    id?: number
    name: string
    Elevation?: ElevationUncheckedCreateNestedManyWithoutHardwareInput
    Whatsapp?: WhatsappUncheckedCreateNestedManyWithoutHardwareInput
  }

  export type HardwareUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Elevation?: ElevationUpdateManyWithoutHardwareNestedInput
    Whatsapp?: WhatsappUpdateManyWithoutHardwareNestedInput
  }

  export type HardwareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Elevation?: ElevationUncheckedUpdateManyWithoutHardwareNestedInput
    Whatsapp?: WhatsappUncheckedUpdateManyWithoutHardwareNestedInput
  }

  export type HardwareCreateManyInput = {
    id?: number
    name: string
  }

  export type HardwareUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HardwareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsappCreateInput = {
    whatsapp_number: string
    Hardware: HardwareCreateNestedOneWithoutWhatsappInput
  }

  export type WhatsappUncheckedCreateInput = {
    id?: number
    whatsapp_number: string
    hardwareId: number
  }

  export type WhatsappUpdateInput = {
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    Hardware?: HardwareUpdateOneRequiredWithoutWhatsappNestedInput
  }

  export type WhatsappUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    hardwareId?: IntFieldUpdateOperationsInput | number
  }

  export type WhatsappCreateManyInput = {
    id?: number
    whatsapp_number: string
    hardwareId: number
  }

  export type WhatsappUpdateManyMutationInput = {
    whatsapp_number?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsappUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    hardwareId?: IntFieldUpdateOperationsInput | number
  }

  export type LevelCreateInput = {
    Normal: number
    Banjir: number
  }

  export type LevelUncheckedCreateInput = {
    id?: number
    Normal: number
    Banjir: number
  }

  export type LevelUpdateInput = {
    Normal?: IntFieldUpdateOperationsInput | number
    Banjir?: IntFieldUpdateOperationsInput | number
  }

  export type LevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Normal?: IntFieldUpdateOperationsInput | number
    Banjir?: IntFieldUpdateOperationsInput | number
  }

  export type LevelCreateManyInput = {
    id?: number
    Normal: number
    Banjir: number
  }

  export type LevelUpdateManyMutationInput = {
    Normal?: IntFieldUpdateOperationsInput | number
    Banjir?: IntFieldUpdateOperationsInput | number
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Normal?: IntFieldUpdateOperationsInput | number
    Banjir?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SignupOrderByRelevanceInput = {
    fields: SignupOrderByRelevanceFieldEnum | SignupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SignupCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    accepted?: SortOrder
    created_at?: SortOrder
  }

  export type SignupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SignupMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    accepted?: SortOrder
    created_at?: SortOrder
  }

  export type SignupMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    accepted?: SortOrder
    created_at?: SortOrder
  }

  export type SignupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HardwareScalarRelationFilter = {
    is?: HardwareWhereInput
    isNot?: HardwareWhereInput
  }

  export type ElevationOrderByRelevanceInput = {
    fields: ElevationOrderByRelevanceFieldEnum | ElevationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ElevationCountOrderByAggregateInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    hardwareId?: SortOrder
  }

  export type ElevationAvgOrderByAggregateInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    hardwareId?: SortOrder
  }

  export type ElevationMaxOrderByAggregateInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    hardwareId?: SortOrder
  }

  export type ElevationMinOrderByAggregateInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    hardwareId?: SortOrder
  }

  export type ElevationSumOrderByAggregateInput = {
    id?: SortOrder
    water_elevation?: SortOrder
    hardwareId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ElevationListRelationFilter = {
    every?: ElevationWhereInput
    some?: ElevationWhereInput
    none?: ElevationWhereInput
  }

  export type WhatsappListRelationFilter = {
    every?: WhatsappWhereInput
    some?: WhatsappWhereInput
    none?: WhatsappWhereInput
  }

  export type ElevationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HardwareOrderByRelevanceInput = {
    fields: HardwareOrderByRelevanceFieldEnum | HardwareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HardwareCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HardwareAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HardwareMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HardwareMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HardwareSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WhatsappOrderByRelevanceInput = {
    fields: WhatsappOrderByRelevanceFieldEnum | WhatsappOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsappCountOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_number?: SortOrder
    hardwareId?: SortOrder
  }

  export type WhatsappAvgOrderByAggregateInput = {
    id?: SortOrder
    hardwareId?: SortOrder
  }

  export type WhatsappMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_number?: SortOrder
    hardwareId?: SortOrder
  }

  export type WhatsappMinOrderByAggregateInput = {
    id?: SortOrder
    whatsapp_number?: SortOrder
    hardwareId?: SortOrder
  }

  export type WhatsappSumOrderByAggregateInput = {
    id?: SortOrder
    hardwareId?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    id?: SortOrder
    Normal?: SortOrder
    Banjir?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HardwareCreateNestedOneWithoutElevationInput = {
    create?: XOR<HardwareCreateWithoutElevationInput, HardwareUncheckedCreateWithoutElevationInput>
    connectOrCreate?: HardwareCreateOrConnectWithoutElevationInput
    connect?: HardwareWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HardwareUpdateOneRequiredWithoutElevationNestedInput = {
    create?: XOR<HardwareCreateWithoutElevationInput, HardwareUncheckedCreateWithoutElevationInput>
    connectOrCreate?: HardwareCreateOrConnectWithoutElevationInput
    upsert?: HardwareUpsertWithoutElevationInput
    connect?: HardwareWhereUniqueInput
    update?: XOR<XOR<HardwareUpdateToOneWithWhereWithoutElevationInput, HardwareUpdateWithoutElevationInput>, HardwareUncheckedUpdateWithoutElevationInput>
  }

  export type ElevationCreateNestedManyWithoutHardwareInput = {
    create?: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput> | ElevationCreateWithoutHardwareInput[] | ElevationUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: ElevationCreateOrConnectWithoutHardwareInput | ElevationCreateOrConnectWithoutHardwareInput[]
    createMany?: ElevationCreateManyHardwareInputEnvelope
    connect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
  }

  export type WhatsappCreateNestedManyWithoutHardwareInput = {
    create?: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput> | WhatsappCreateWithoutHardwareInput[] | WhatsappUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: WhatsappCreateOrConnectWithoutHardwareInput | WhatsappCreateOrConnectWithoutHardwareInput[]
    createMany?: WhatsappCreateManyHardwareInputEnvelope
    connect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
  }

  export type ElevationUncheckedCreateNestedManyWithoutHardwareInput = {
    create?: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput> | ElevationCreateWithoutHardwareInput[] | ElevationUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: ElevationCreateOrConnectWithoutHardwareInput | ElevationCreateOrConnectWithoutHardwareInput[]
    createMany?: ElevationCreateManyHardwareInputEnvelope
    connect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
  }

  export type WhatsappUncheckedCreateNestedManyWithoutHardwareInput = {
    create?: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput> | WhatsappCreateWithoutHardwareInput[] | WhatsappUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: WhatsappCreateOrConnectWithoutHardwareInput | WhatsappCreateOrConnectWithoutHardwareInput[]
    createMany?: WhatsappCreateManyHardwareInputEnvelope
    connect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
  }

  export type ElevationUpdateManyWithoutHardwareNestedInput = {
    create?: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput> | ElevationCreateWithoutHardwareInput[] | ElevationUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: ElevationCreateOrConnectWithoutHardwareInput | ElevationCreateOrConnectWithoutHardwareInput[]
    upsert?: ElevationUpsertWithWhereUniqueWithoutHardwareInput | ElevationUpsertWithWhereUniqueWithoutHardwareInput[]
    createMany?: ElevationCreateManyHardwareInputEnvelope
    set?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    disconnect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    delete?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    connect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    update?: ElevationUpdateWithWhereUniqueWithoutHardwareInput | ElevationUpdateWithWhereUniqueWithoutHardwareInput[]
    updateMany?: ElevationUpdateManyWithWhereWithoutHardwareInput | ElevationUpdateManyWithWhereWithoutHardwareInput[]
    deleteMany?: ElevationScalarWhereInput | ElevationScalarWhereInput[]
  }

  export type WhatsappUpdateManyWithoutHardwareNestedInput = {
    create?: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput> | WhatsappCreateWithoutHardwareInput[] | WhatsappUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: WhatsappCreateOrConnectWithoutHardwareInput | WhatsappCreateOrConnectWithoutHardwareInput[]
    upsert?: WhatsappUpsertWithWhereUniqueWithoutHardwareInput | WhatsappUpsertWithWhereUniqueWithoutHardwareInput[]
    createMany?: WhatsappCreateManyHardwareInputEnvelope
    set?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    disconnect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    delete?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    connect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    update?: WhatsappUpdateWithWhereUniqueWithoutHardwareInput | WhatsappUpdateWithWhereUniqueWithoutHardwareInput[]
    updateMany?: WhatsappUpdateManyWithWhereWithoutHardwareInput | WhatsappUpdateManyWithWhereWithoutHardwareInput[]
    deleteMany?: WhatsappScalarWhereInput | WhatsappScalarWhereInput[]
  }

  export type ElevationUncheckedUpdateManyWithoutHardwareNestedInput = {
    create?: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput> | ElevationCreateWithoutHardwareInput[] | ElevationUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: ElevationCreateOrConnectWithoutHardwareInput | ElevationCreateOrConnectWithoutHardwareInput[]
    upsert?: ElevationUpsertWithWhereUniqueWithoutHardwareInput | ElevationUpsertWithWhereUniqueWithoutHardwareInput[]
    createMany?: ElevationCreateManyHardwareInputEnvelope
    set?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    disconnect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    delete?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    connect?: ElevationWhereUniqueInput | ElevationWhereUniqueInput[]
    update?: ElevationUpdateWithWhereUniqueWithoutHardwareInput | ElevationUpdateWithWhereUniqueWithoutHardwareInput[]
    updateMany?: ElevationUpdateManyWithWhereWithoutHardwareInput | ElevationUpdateManyWithWhereWithoutHardwareInput[]
    deleteMany?: ElevationScalarWhereInput | ElevationScalarWhereInput[]
  }

  export type WhatsappUncheckedUpdateManyWithoutHardwareNestedInput = {
    create?: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput> | WhatsappCreateWithoutHardwareInput[] | WhatsappUncheckedCreateWithoutHardwareInput[]
    connectOrCreate?: WhatsappCreateOrConnectWithoutHardwareInput | WhatsappCreateOrConnectWithoutHardwareInput[]
    upsert?: WhatsappUpsertWithWhereUniqueWithoutHardwareInput | WhatsappUpsertWithWhereUniqueWithoutHardwareInput[]
    createMany?: WhatsappCreateManyHardwareInputEnvelope
    set?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    disconnect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    delete?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    connect?: WhatsappWhereUniqueInput | WhatsappWhereUniqueInput[]
    update?: WhatsappUpdateWithWhereUniqueWithoutHardwareInput | WhatsappUpdateWithWhereUniqueWithoutHardwareInput[]
    updateMany?: WhatsappUpdateManyWithWhereWithoutHardwareInput | WhatsappUpdateManyWithWhereWithoutHardwareInput[]
    deleteMany?: WhatsappScalarWhereInput | WhatsappScalarWhereInput[]
  }

  export type HardwareCreateNestedOneWithoutWhatsappInput = {
    create?: XOR<HardwareCreateWithoutWhatsappInput, HardwareUncheckedCreateWithoutWhatsappInput>
    connectOrCreate?: HardwareCreateOrConnectWithoutWhatsappInput
    connect?: HardwareWhereUniqueInput
  }

  export type HardwareUpdateOneRequiredWithoutWhatsappNestedInput = {
    create?: XOR<HardwareCreateWithoutWhatsappInput, HardwareUncheckedCreateWithoutWhatsappInput>
    connectOrCreate?: HardwareCreateOrConnectWithoutWhatsappInput
    upsert?: HardwareUpsertWithoutWhatsappInput
    connect?: HardwareWhereUniqueInput
    update?: XOR<XOR<HardwareUpdateToOneWithWhereWithoutWhatsappInput, HardwareUpdateWithoutWhatsappInput>, HardwareUncheckedUpdateWithoutWhatsappInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type HardwareCreateWithoutElevationInput = {
    name: string
    Whatsapp?: WhatsappCreateNestedManyWithoutHardwareInput
  }

  export type HardwareUncheckedCreateWithoutElevationInput = {
    id?: number
    name: string
    Whatsapp?: WhatsappUncheckedCreateNestedManyWithoutHardwareInput
  }

  export type HardwareCreateOrConnectWithoutElevationInput = {
    where: HardwareWhereUniqueInput
    create: XOR<HardwareCreateWithoutElevationInput, HardwareUncheckedCreateWithoutElevationInput>
  }

  export type HardwareUpsertWithoutElevationInput = {
    update: XOR<HardwareUpdateWithoutElevationInput, HardwareUncheckedUpdateWithoutElevationInput>
    create: XOR<HardwareCreateWithoutElevationInput, HardwareUncheckedCreateWithoutElevationInput>
    where?: HardwareWhereInput
  }

  export type HardwareUpdateToOneWithWhereWithoutElevationInput = {
    where?: HardwareWhereInput
    data: XOR<HardwareUpdateWithoutElevationInput, HardwareUncheckedUpdateWithoutElevationInput>
  }

  export type HardwareUpdateWithoutElevationInput = {
    name?: StringFieldUpdateOperationsInput | string
    Whatsapp?: WhatsappUpdateManyWithoutHardwareNestedInput
  }

  export type HardwareUncheckedUpdateWithoutElevationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Whatsapp?: WhatsappUncheckedUpdateManyWithoutHardwareNestedInput
  }

  export type ElevationCreateWithoutHardwareInput = {
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
  }

  export type ElevationUncheckedCreateWithoutHardwareInput = {
    id?: number
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
  }

  export type ElevationCreateOrConnectWithoutHardwareInput = {
    where: ElevationWhereUniqueInput
    create: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput>
  }

  export type ElevationCreateManyHardwareInputEnvelope = {
    data: ElevationCreateManyHardwareInput | ElevationCreateManyHardwareInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappCreateWithoutHardwareInput = {
    whatsapp_number: string
  }

  export type WhatsappUncheckedCreateWithoutHardwareInput = {
    id?: number
    whatsapp_number: string
  }

  export type WhatsappCreateOrConnectWithoutHardwareInput = {
    where: WhatsappWhereUniqueInput
    create: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput>
  }

  export type WhatsappCreateManyHardwareInputEnvelope = {
    data: WhatsappCreateManyHardwareInput | WhatsappCreateManyHardwareInput[]
    skipDuplicates?: boolean
  }

  export type ElevationUpsertWithWhereUniqueWithoutHardwareInput = {
    where: ElevationWhereUniqueInput
    update: XOR<ElevationUpdateWithoutHardwareInput, ElevationUncheckedUpdateWithoutHardwareInput>
    create: XOR<ElevationCreateWithoutHardwareInput, ElevationUncheckedCreateWithoutHardwareInput>
  }

  export type ElevationUpdateWithWhereUniqueWithoutHardwareInput = {
    where: ElevationWhereUniqueInput
    data: XOR<ElevationUpdateWithoutHardwareInput, ElevationUncheckedUpdateWithoutHardwareInput>
  }

  export type ElevationUpdateManyWithWhereWithoutHardwareInput = {
    where: ElevationScalarWhereInput
    data: XOR<ElevationUpdateManyMutationInput, ElevationUncheckedUpdateManyWithoutHardwareInput>
  }

  export type ElevationScalarWhereInput = {
    AND?: ElevationScalarWhereInput | ElevationScalarWhereInput[]
    OR?: ElevationScalarWhereInput[]
    NOT?: ElevationScalarWhereInput | ElevationScalarWhereInput[]
    id?: IntFilter<"Elevation"> | number
    water_elevation?: FloatFilter<"Elevation"> | number
    latitude?: StringFilter<"Elevation"> | string
    longitude?: StringFilter<"Elevation"> | string
    created_at?: DateTimeFilter<"Elevation"> | Date | string
    hardwareId?: IntFilter<"Elevation"> | number
  }

  export type WhatsappUpsertWithWhereUniqueWithoutHardwareInput = {
    where: WhatsappWhereUniqueInput
    update: XOR<WhatsappUpdateWithoutHardwareInput, WhatsappUncheckedUpdateWithoutHardwareInput>
    create: XOR<WhatsappCreateWithoutHardwareInput, WhatsappUncheckedCreateWithoutHardwareInput>
  }

  export type WhatsappUpdateWithWhereUniqueWithoutHardwareInput = {
    where: WhatsappWhereUniqueInput
    data: XOR<WhatsappUpdateWithoutHardwareInput, WhatsappUncheckedUpdateWithoutHardwareInput>
  }

  export type WhatsappUpdateManyWithWhereWithoutHardwareInput = {
    where: WhatsappScalarWhereInput
    data: XOR<WhatsappUpdateManyMutationInput, WhatsappUncheckedUpdateManyWithoutHardwareInput>
  }

  export type WhatsappScalarWhereInput = {
    AND?: WhatsappScalarWhereInput | WhatsappScalarWhereInput[]
    OR?: WhatsappScalarWhereInput[]
    NOT?: WhatsappScalarWhereInput | WhatsappScalarWhereInput[]
    id?: IntFilter<"Whatsapp"> | number
    whatsapp_number?: StringFilter<"Whatsapp"> | string
    hardwareId?: IntFilter<"Whatsapp"> | number
  }

  export type HardwareCreateWithoutWhatsappInput = {
    name: string
    Elevation?: ElevationCreateNestedManyWithoutHardwareInput
  }

  export type HardwareUncheckedCreateWithoutWhatsappInput = {
    id?: number
    name: string
    Elevation?: ElevationUncheckedCreateNestedManyWithoutHardwareInput
  }

  export type HardwareCreateOrConnectWithoutWhatsappInput = {
    where: HardwareWhereUniqueInput
    create: XOR<HardwareCreateWithoutWhatsappInput, HardwareUncheckedCreateWithoutWhatsappInput>
  }

  export type HardwareUpsertWithoutWhatsappInput = {
    update: XOR<HardwareUpdateWithoutWhatsappInput, HardwareUncheckedUpdateWithoutWhatsappInput>
    create: XOR<HardwareCreateWithoutWhatsappInput, HardwareUncheckedCreateWithoutWhatsappInput>
    where?: HardwareWhereInput
  }

  export type HardwareUpdateToOneWithWhereWithoutWhatsappInput = {
    where?: HardwareWhereInput
    data: XOR<HardwareUpdateWithoutWhatsappInput, HardwareUncheckedUpdateWithoutWhatsappInput>
  }

  export type HardwareUpdateWithoutWhatsappInput = {
    name?: StringFieldUpdateOperationsInput | string
    Elevation?: ElevationUpdateManyWithoutHardwareNestedInput
  }

  export type HardwareUncheckedUpdateWithoutWhatsappInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Elevation?: ElevationUncheckedUpdateManyWithoutHardwareNestedInput
  }

  export type ElevationCreateManyHardwareInput = {
    id?: number
    water_elevation: number
    latitude: string
    longitude: string
    created_at?: Date | string
  }

  export type WhatsappCreateManyHardwareInput = {
    id?: number
    whatsapp_number: string
  }

  export type ElevationUpdateWithoutHardwareInput = {
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElevationUncheckedUpdateWithoutHardwareInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElevationUncheckedUpdateManyWithoutHardwareInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_elevation?: FloatFieldUpdateOperationsInput | number
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappUpdateWithoutHardwareInput = {
    whatsapp_number?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsappUncheckedUpdateWithoutHardwareInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsapp_number?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsappUncheckedUpdateManyWithoutHardwareInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsapp_number?: StringFieldUpdateOperationsInput | string
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