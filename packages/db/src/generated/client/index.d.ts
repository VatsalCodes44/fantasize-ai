
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
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model OutputImages
 * 
 */
export type OutputImages = $Result.DefaultSelection<Prisma.$OutputImagesPayload>
/**
 * Model Packs
 * 
 */
export type Packs = $Result.DefaultSelection<Prisma.$PacksPayload>
/**
 * Model PackPrompts
 * 
 */
export type PackPrompts = $Result.DefaultSelection<Prisma.$PackPromptsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModelTrainingStatusEnum: {
  Pending: 'Pending',
  generated: 'generated',
  Failed: 'Failed'
};

export type ModelTrainingStatusEnum = (typeof ModelTrainingStatusEnum)[keyof typeof ModelTrainingStatusEnum]


export const ModelTypeEnum: {
  Man: 'Man',
  Women: 'Women',
  Couple: 'Couple',
  Dog: 'Dog',
  Cat: 'Cat',
  Other: 'Other'
};

export type ModelTypeEnum = (typeof ModelTypeEnum)[keyof typeof ModelTypeEnum]


export const EthinicityEnum: {
  White: 'White',
  Black: 'Black',
  Asian: 'Asian',
  American: 'American',
  EastAsian: 'EastAsian',
  SouthEastAsian: 'SouthEastAsian',
  SouthAsian: 'SouthAsian',
  MiddleEastern: 'MiddleEastern',
  Pacific: 'Pacific',
  Hispanic: 'Hispanic'
};

export type EthinicityEnum = (typeof EthinicityEnum)[keyof typeof EthinicityEnum]


export const EyeColorEnum: {
  Black: 'Black',
  Brown: 'Brown',
  Blue: 'Blue',
  Green: 'Green',
  Hazel: 'Hazel',
  Other: 'Other'
};

export type EyeColorEnum = (typeof EyeColorEnum)[keyof typeof EyeColorEnum]


export const OutputImagesStatusEnum: {
  Pending: 'Pending',
  generated: 'generated',
  Failed: 'Failed'
};

export type OutputImagesStatusEnum = (typeof OutputImagesStatusEnum)[keyof typeof OutputImagesStatusEnum]

}

export type ModelTrainingStatusEnum = $Enums.ModelTrainingStatusEnum

export const ModelTrainingStatusEnum: typeof $Enums.ModelTrainingStatusEnum

export type ModelTypeEnum = $Enums.ModelTypeEnum

export const ModelTypeEnum: typeof $Enums.ModelTypeEnum

export type EthinicityEnum = $Enums.EthinicityEnum

export const EthinicityEnum: typeof $Enums.EthinicityEnum

export type EyeColorEnum = $Enums.EyeColorEnum

export const EyeColorEnum: typeof $Enums.EyeColorEnum

export type OutputImagesStatusEnum = $Enums.OutputImagesStatusEnum

export const OutputImagesStatusEnum: typeof $Enums.OutputImagesStatusEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Models
 * const models = await prisma.model.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Models
   * const models = await prisma.model.findMany()
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
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outputImages`: Exposes CRUD operations for the **OutputImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutputImages
    * const outputImages = await prisma.outputImages.findMany()
    * ```
    */
  get outputImages(): Prisma.OutputImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packs`: Exposes CRUD operations for the **Packs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.packs.findMany()
    * ```
    */
  get packs(): Prisma.PacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packPrompts`: Exposes CRUD operations for the **PackPrompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackPrompts
    * const packPrompts = await prisma.packPrompts.findMany()
    * ```
    */
  get packPrompts(): Prisma.PackPromptsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Model: 'Model',
    OutputImages: 'OutputImages',
    Packs: 'Packs',
    PackPrompts: 'PackPrompts'
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
      modelProps: "model" | "outputImages" | "packs" | "packPrompts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      OutputImages: {
        payload: Prisma.$OutputImagesPayload<ExtArgs>
        fields: Prisma.OutputImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          findFirst: {
            args: Prisma.OutputImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          findMany: {
            args: Prisma.OutputImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>[]
          }
          create: {
            args: Prisma.OutputImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          createMany: {
            args: Prisma.OutputImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutputImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>[]
          }
          delete: {
            args: Prisma.OutputImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          update: {
            args: Prisma.OutputImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          deleteMany: {
            args: Prisma.OutputImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutputImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutputImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>[]
          }
          upsert: {
            args: Prisma.OutputImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutputImagesPayload>
          }
          aggregate: {
            args: Prisma.OutputImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutputImages>
          }
          groupBy: {
            args: Prisma.OutputImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutputImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputImagesCountArgs<ExtArgs>
            result: $Utils.Optional<OutputImagesCountAggregateOutputType> | number
          }
        }
      }
      Packs: {
        payload: Prisma.$PacksPayload<ExtArgs>
        fields: Prisma.PacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          findFirst: {
            args: Prisma.PacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          findMany: {
            args: Prisma.PacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          create: {
            args: Prisma.PacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          createMany: {
            args: Prisma.PacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          delete: {
            args: Prisma.PacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          update: {
            args: Prisma.PacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          deleteMany: {
            args: Prisma.PacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>[]
          }
          upsert: {
            args: Prisma.PacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacksPayload>
          }
          aggregate: {
            args: Prisma.PacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacks>
          }
          groupBy: {
            args: Prisma.PacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacksCountArgs<ExtArgs>
            result: $Utils.Optional<PacksCountAggregateOutputType> | number
          }
        }
      }
      PackPrompts: {
        payload: Prisma.$PackPromptsPayload<ExtArgs>
        fields: Prisma.PackPromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackPromptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackPromptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          findFirst: {
            args: Prisma.PackPromptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackPromptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          findMany: {
            args: Prisma.PackPromptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>[]
          }
          create: {
            args: Prisma.PackPromptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          createMany: {
            args: Prisma.PackPromptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackPromptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>[]
          }
          delete: {
            args: Prisma.PackPromptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          update: {
            args: Prisma.PackPromptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          deleteMany: {
            args: Prisma.PackPromptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackPromptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackPromptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>[]
          }
          upsert: {
            args: Prisma.PackPromptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPromptsPayload>
          }
          aggregate: {
            args: Prisma.PackPromptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackPrompts>
          }
          groupBy: {
            args: Prisma.PackPromptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackPromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackPromptsCountArgs<ExtArgs>
            result: $Utils.Optional<PackPromptsCountAggregateOutputType> | number
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
    model?: ModelOmit
    outputImages?: OutputImagesOmit
    packs?: PacksOmit
    packPrompts?: PackPromptsOmit
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
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    outputImages: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outputImages?: boolean | ModelCountOutputTypeCountOutputImagesArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountOutputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImagesWhereInput
  }


  /**
   * Count Type PacksCountOutputType
   */

  export type PacksCountOutputType = {
    packPrompts: number
  }

  export type PacksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packPrompts?: boolean | PacksCountOutputTypeCountPackPromptsArgs
  }

  // Custom InputTypes
  /**
   * PacksCountOutputType without action
   */
  export type PacksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacksCountOutputType
     */
    select?: PacksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacksCountOutputType without action
   */
  export type PacksCountOutputTypeCountPackPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    age: number | null
  }

  export type ModelSumAggregateOutputType = {
    age: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ModelTypeEnum | null
    age: number | null
    ethinicity: $Enums.EthinicityEnum | null
    bald: boolean | null
    eyeColor: $Enums.EyeColorEnum | null
    userId: string | null
    falAiRequestId: string | null
    trainingStatus: $Enums.ModelTrainingStatusEnum | null
    triggerWord: string | null
    tensorPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    zipUrl: string | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ModelTypeEnum | null
    age: number | null
    ethinicity: $Enums.EthinicityEnum | null
    bald: boolean | null
    eyeColor: $Enums.EyeColorEnum | null
    userId: string | null
    falAiRequestId: string | null
    trainingStatus: $Enums.ModelTrainingStatusEnum | null
    triggerWord: string | null
    tensorPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    zipUrl: string | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    type: number
    age: number
    ethinicity: number
    bald: number
    eyeColor: number
    userId: number
    falAiRequestId: number
    trainingStatus: number
    images: number
    triggerWord: number
    tensorPath: number
    createdAt: number
    updatedAt: number
    zipUrl: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    age?: true
  }

  export type ModelSumAggregateInputType = {
    age?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    bald?: true
    eyeColor?: true
    userId?: true
    falAiRequestId?: true
    trainingStatus?: true
    triggerWord?: true
    tensorPath?: true
    createdAt?: true
    updatedAt?: true
    zipUrl?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    bald?: true
    eyeColor?: true
    userId?: true
    falAiRequestId?: true
    trainingStatus?: true
    triggerWord?: true
    tensorPath?: true
    createdAt?: true
    updatedAt?: true
    zipUrl?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    age?: true
    ethinicity?: true
    bald?: true
    eyeColor?: true
    userId?: true
    falAiRequestId?: true
    trainingStatus?: true
    images?: true
    triggerWord?: true
    tensorPath?: true
    createdAt?: true
    updatedAt?: true
    zipUrl?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId: string | null
    trainingStatus: $Enums.ModelTrainingStatusEnum
    images: string[]
    triggerWord: string | null
    tensorPath: string | null
    createdAt: Date
    updatedAt: Date
    zipUrl: string
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    bald?: boolean
    eyeColor?: boolean
    userId?: boolean
    falAiRequestId?: boolean
    trainingStatus?: boolean
    images?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zipUrl?: boolean
    outputImages?: boolean | Model$outputImagesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    bald?: boolean
    eyeColor?: boolean
    userId?: boolean
    falAiRequestId?: boolean
    trainingStatus?: boolean
    images?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zipUrl?: boolean
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    bald?: boolean
    eyeColor?: boolean
    userId?: boolean
    falAiRequestId?: boolean
    trainingStatus?: boolean
    images?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zipUrl?: boolean
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    age?: boolean
    ethinicity?: boolean
    bald?: boolean
    eyeColor?: boolean
    userId?: boolean
    falAiRequestId?: boolean
    trainingStatus?: boolean
    images?: boolean
    triggerWord?: boolean
    tensorPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zipUrl?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "age" | "ethinicity" | "bald" | "eyeColor" | "userId" | "falAiRequestId" | "trainingStatus" | "images" | "triggerWord" | "tensorPath" | "createdAt" | "updatedAt" | "zipUrl", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outputImages?: boolean | Model$outputImagesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      outputImages: Prisma.$OutputImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ModelTypeEnum
      age: number
      ethinicity: $Enums.EthinicityEnum
      bald: boolean
      eyeColor: $Enums.EyeColorEnum
      userId: string
      falAiRequestId: string | null
      trainingStatus: $Enums.ModelTrainingStatusEnum
      images: string[]
      triggerWord: string | null
      tensorPath: string | null
      createdAt: Date
      updatedAt: Date
      zipUrl: string
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outputImages<T extends Model$outputImagesArgs<ExtArgs> = {}>(args?: Subset<T, Model$outputImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'String'>
    readonly name: FieldRef<"Model", 'String'>
    readonly type: FieldRef<"Model", 'ModelTypeEnum'>
    readonly age: FieldRef<"Model", 'Int'>
    readonly ethinicity: FieldRef<"Model", 'EthinicityEnum'>
    readonly bald: FieldRef<"Model", 'Boolean'>
    readonly eyeColor: FieldRef<"Model", 'EyeColorEnum'>
    readonly userId: FieldRef<"Model", 'String'>
    readonly falAiRequestId: FieldRef<"Model", 'String'>
    readonly trainingStatus: FieldRef<"Model", 'ModelTrainingStatusEnum'>
    readonly images: FieldRef<"Model", 'String[]'>
    readonly triggerWord: FieldRef<"Model", 'String'>
    readonly tensorPath: FieldRef<"Model", 'String'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
    readonly zipUrl: FieldRef<"Model", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.outputImages
   */
  export type Model$outputImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    where?: OutputImagesWhereInput
    orderBy?: OutputImagesOrderByWithRelationInput | OutputImagesOrderByWithRelationInput[]
    cursor?: OutputImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputImagesScalarFieldEnum | OutputImagesScalarFieldEnum[]
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model OutputImages
   */

  export type AggregateOutputImages = {
    _count: OutputImagesCountAggregateOutputType | null
    _min: OutputImagesMinAggregateOutputType | null
    _max: OutputImagesMaxAggregateOutputType | null
  }

  export type OutputImagesMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    prompt: string | null
    status: $Enums.OutputImagesStatusEnum | null
    userId: string | null
    modelId: string | null
    falAiRequestId: string | null
  }

  export type OutputImagesMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    prompt: string | null
    status: $Enums.OutputImagesStatusEnum | null
    userId: string | null
    modelId: string | null
    falAiRequestId: string | null
  }

  export type OutputImagesCountAggregateOutputType = {
    id: number
    imageUrl: number
    prompt: number
    status: number
    userId: number
    modelId: number
    falAiRequestId: number
    _all: number
  }


  export type OutputImagesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    prompt?: true
    status?: true
    userId?: true
    modelId?: true
    falAiRequestId?: true
  }

  export type OutputImagesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    prompt?: true
    status?: true
    userId?: true
    modelId?: true
    falAiRequestId?: true
  }

  export type OutputImagesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    prompt?: true
    status?: true
    userId?: true
    modelId?: true
    falAiRequestId?: true
    _all?: true
  }

  export type OutputImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImages to aggregate.
     */
    where?: OutputImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImagesOrderByWithRelationInput | OutputImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutputImages
    **/
    _count?: true | OutputImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputImagesMaxAggregateInputType
  }

  export type GetOutputImagesAggregateType<T extends OutputImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputImages[P]>
      : GetScalarType<T[P], AggregateOutputImages[P]>
  }




  export type OutputImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputImagesWhereInput
    orderBy?: OutputImagesOrderByWithAggregationInput | OutputImagesOrderByWithAggregationInput[]
    by: OutputImagesScalarFieldEnum[] | OutputImagesScalarFieldEnum
    having?: OutputImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputImagesCountAggregateInputType | true
    _min?: OutputImagesMinAggregateInputType
    _max?: OutputImagesMaxAggregateInputType
  }

  export type OutputImagesGroupByOutputType = {
    id: string
    imageUrl: string
    prompt: string
    status: $Enums.OutputImagesStatusEnum
    userId: string
    modelId: string
    falAiRequestId: string | null
    _count: OutputImagesCountAggregateOutputType | null
    _min: OutputImagesMinAggregateOutputType | null
    _max: OutputImagesMaxAggregateOutputType | null
  }

  type GetOutputImagesGroupByPayload<T extends OutputImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputImagesGroupByOutputType[P]>
            : GetScalarType<T[P], OutputImagesGroupByOutputType[P]>
        }
      >
    >


  export type OutputImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    prompt?: boolean
    status?: boolean
    userId?: boolean
    modelId?: boolean
    falAiRequestId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImages"]>

  export type OutputImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    prompt?: boolean
    status?: boolean
    userId?: boolean
    modelId?: boolean
    falAiRequestId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImages"]>

  export type OutputImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    prompt?: boolean
    status?: boolean
    userId?: boolean
    modelId?: boolean
    falAiRequestId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputImages"]>

  export type OutputImagesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    prompt?: boolean
    status?: boolean
    userId?: boolean
    modelId?: boolean
    falAiRequestId?: boolean
  }

  export type OutputImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "prompt" | "status" | "userId" | "modelId" | "falAiRequestId", ExtArgs["result"]["outputImages"]>
  export type OutputImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }
  export type OutputImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }
  export type OutputImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }

  export type $OutputImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutputImages"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      prompt: string
      status: $Enums.OutputImagesStatusEnum
      userId: string
      modelId: string
      falAiRequestId: string | null
    }, ExtArgs["result"]["outputImages"]>
    composites: {}
  }

  type OutputImagesGetPayload<S extends boolean | null | undefined | OutputImagesDefaultArgs> = $Result.GetResult<Prisma.$OutputImagesPayload, S>

  type OutputImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutputImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutputImagesCountAggregateInputType | true
    }

  export interface OutputImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutputImages'], meta: { name: 'OutputImages' } }
    /**
     * Find zero or one OutputImages that matches the filter.
     * @param {OutputImagesFindUniqueArgs} args - Arguments to find a OutputImages
     * @example
     * // Get one OutputImages
     * const outputImages = await prisma.outputImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutputImagesFindUniqueArgs>(args: SelectSubset<T, OutputImagesFindUniqueArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutputImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutputImagesFindUniqueOrThrowArgs} args - Arguments to find a OutputImages
     * @example
     * // Get one OutputImages
     * const outputImages = await prisma.outputImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutputImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, OutputImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesFindFirstArgs} args - Arguments to find a OutputImages
     * @example
     * // Get one OutputImages
     * const outputImages = await prisma.outputImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutputImagesFindFirstArgs>(args?: SelectSubset<T, OutputImagesFindFirstArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutputImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesFindFirstOrThrowArgs} args - Arguments to find a OutputImages
     * @example
     * // Get one OutputImages
     * const outputImages = await prisma.outputImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutputImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, OutputImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutputImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutputImages
     * const outputImages = await prisma.outputImages.findMany()
     * 
     * // Get first 10 OutputImages
     * const outputImages = await prisma.outputImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputImagesWithIdOnly = await prisma.outputImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutputImagesFindManyArgs>(args?: SelectSubset<T, OutputImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutputImages.
     * @param {OutputImagesCreateArgs} args - Arguments to create a OutputImages.
     * @example
     * // Create one OutputImages
     * const OutputImages = await prisma.outputImages.create({
     *   data: {
     *     // ... data to create a OutputImages
     *   }
     * })
     * 
     */
    create<T extends OutputImagesCreateArgs>(args: SelectSubset<T, OutputImagesCreateArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutputImages.
     * @param {OutputImagesCreateManyArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImages = await prisma.outputImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutputImagesCreateManyArgs>(args?: SelectSubset<T, OutputImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutputImages and returns the data saved in the database.
     * @param {OutputImagesCreateManyAndReturnArgs} args - Arguments to create many OutputImages.
     * @example
     * // Create many OutputImages
     * const outputImages = await prisma.outputImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutputImages and only return the `id`
     * const outputImagesWithIdOnly = await prisma.outputImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutputImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, OutputImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutputImages.
     * @param {OutputImagesDeleteArgs} args - Arguments to delete one OutputImages.
     * @example
     * // Delete one OutputImages
     * const OutputImages = await prisma.outputImages.delete({
     *   where: {
     *     // ... filter to delete one OutputImages
     *   }
     * })
     * 
     */
    delete<T extends OutputImagesDeleteArgs>(args: SelectSubset<T, OutputImagesDeleteArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutputImages.
     * @param {OutputImagesUpdateArgs} args - Arguments to update one OutputImages.
     * @example
     * // Update one OutputImages
     * const outputImages = await prisma.outputImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutputImagesUpdateArgs>(args: SelectSubset<T, OutputImagesUpdateArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutputImages.
     * @param {OutputImagesDeleteManyArgs} args - Arguments to filter OutputImages to delete.
     * @example
     * // Delete a few OutputImages
     * const { count } = await prisma.outputImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutputImagesDeleteManyArgs>(args?: SelectSubset<T, OutputImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutputImages
     * const outputImages = await prisma.outputImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutputImagesUpdateManyArgs>(args: SelectSubset<T, OutputImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputImages and returns the data updated in the database.
     * @param {OutputImagesUpdateManyAndReturnArgs} args - Arguments to update many OutputImages.
     * @example
     * // Update many OutputImages
     * const outputImages = await prisma.outputImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutputImages and only return the `id`
     * const outputImagesWithIdOnly = await prisma.outputImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutputImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, OutputImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutputImages.
     * @param {OutputImagesUpsertArgs} args - Arguments to update or create a OutputImages.
     * @example
     * // Update or create a OutputImages
     * const outputImages = await prisma.outputImages.upsert({
     *   create: {
     *     // ... data to create a OutputImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutputImages we want to update
     *   }
     * })
     */
    upsert<T extends OutputImagesUpsertArgs>(args: SelectSubset<T, OutputImagesUpsertArgs<ExtArgs>>): Prisma__OutputImagesClient<$Result.GetResult<Prisma.$OutputImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesCountArgs} args - Arguments to filter OutputImages to count.
     * @example
     * // Count the number of OutputImages
     * const count = await prisma.outputImages.count({
     *   where: {
     *     // ... the filter for the OutputImages we want to count
     *   }
     * })
    **/
    count<T extends OutputImagesCountArgs>(
      args?: Subset<T, OutputImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutputImagesAggregateArgs>(args: Subset<T, OutputImagesAggregateArgs>): Prisma.PrismaPromise<GetOutputImagesAggregateType<T>>

    /**
     * Group by OutputImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputImagesGroupByArgs} args - Group by arguments.
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
      T extends OutputImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputImagesGroupByArgs['orderBy'] }
        : { orderBy?: OutputImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutputImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutputImages model
   */
  readonly fields: OutputImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutputImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OutputImages model
   */
  interface OutputImagesFieldRefs {
    readonly id: FieldRef<"OutputImages", 'String'>
    readonly imageUrl: FieldRef<"OutputImages", 'String'>
    readonly prompt: FieldRef<"OutputImages", 'String'>
    readonly status: FieldRef<"OutputImages", 'OutputImagesStatusEnum'>
    readonly userId: FieldRef<"OutputImages", 'String'>
    readonly modelId: FieldRef<"OutputImages", 'String'>
    readonly falAiRequestId: FieldRef<"OutputImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutputImages findUnique
   */
  export type OutputImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where: OutputImagesWhereUniqueInput
  }

  /**
   * OutputImages findUniqueOrThrow
   */
  export type OutputImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where: OutputImagesWhereUniqueInput
  }

  /**
   * OutputImages findFirst
   */
  export type OutputImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where?: OutputImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImagesOrderByWithRelationInput | OutputImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImagesScalarFieldEnum | OutputImagesScalarFieldEnum[]
  }

  /**
   * OutputImages findFirstOrThrow
   */
  export type OutputImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where?: OutputImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImagesOrderByWithRelationInput | OutputImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputImages.
     */
    cursor?: OutputImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputImages.
     */
    distinct?: OutputImagesScalarFieldEnum | OutputImagesScalarFieldEnum[]
  }

  /**
   * OutputImages findMany
   */
  export type OutputImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter, which OutputImages to fetch.
     */
    where?: OutputImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputImages to fetch.
     */
    orderBy?: OutputImagesOrderByWithRelationInput | OutputImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutputImages.
     */
    cursor?: OutputImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputImages.
     */
    skip?: number
    distinct?: OutputImagesScalarFieldEnum | OutputImagesScalarFieldEnum[]
  }

  /**
   * OutputImages create
   */
  export type OutputImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a OutputImages.
     */
    data: XOR<OutputImagesCreateInput, OutputImagesUncheckedCreateInput>
  }

  /**
   * OutputImages createMany
   */
  export type OutputImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImagesCreateManyInput | OutputImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutputImages createManyAndReturn
   */
  export type OutputImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * The data used to create many OutputImages.
     */
    data: OutputImagesCreateManyInput | OutputImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImages update
   */
  export type OutputImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a OutputImages.
     */
    data: XOR<OutputImagesUpdateInput, OutputImagesUncheckedUpdateInput>
    /**
     * Choose, which OutputImages to update.
     */
    where: OutputImagesWhereUniqueInput
  }

  /**
   * OutputImages updateMany
   */
  export type OutputImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImagesUpdateManyMutationInput, OutputImagesUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImagesWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
  }

  /**
   * OutputImages updateManyAndReturn
   */
  export type OutputImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * The data used to update OutputImages.
     */
    data: XOR<OutputImagesUpdateManyMutationInput, OutputImagesUncheckedUpdateManyInput>
    /**
     * Filter which OutputImages to update
     */
    where?: OutputImagesWhereInput
    /**
     * Limit how many OutputImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutputImages upsert
   */
  export type OutputImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the OutputImages to update in case it exists.
     */
    where: OutputImagesWhereUniqueInput
    /**
     * In case the OutputImages found by the `where` argument doesn't exist, create a new OutputImages with this data.
     */
    create: XOR<OutputImagesCreateInput, OutputImagesUncheckedCreateInput>
    /**
     * In case the OutputImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputImagesUpdateInput, OutputImagesUncheckedUpdateInput>
  }

  /**
   * OutputImages delete
   */
  export type OutputImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
    /**
     * Filter which OutputImages to delete.
     */
    where: OutputImagesWhereUniqueInput
  }

  /**
   * OutputImages deleteMany
   */
  export type OutputImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputImages to delete
     */
    where?: OutputImagesWhereInput
    /**
     * Limit how many OutputImages to delete.
     */
    limit?: number
  }

  /**
   * OutputImages without action
   */
  export type OutputImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputImages
     */
    select?: OutputImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutputImages
     */
    omit?: OutputImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutputImagesInclude<ExtArgs> | null
  }


  /**
   * Model Packs
   */

  export type AggregatePacks = {
    _count: PacksCountAggregateOutputType | null
    _min: PacksMinAggregateOutputType | null
    _max: PacksMaxAggregateOutputType | null
  }

  export type PacksMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PacksMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PacksCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PacksMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PacksMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PacksCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to aggregate.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacksMaxAggregateInputType
  }

  export type GetPacksAggregateType<T extends PacksAggregateArgs> = {
        [P in keyof T & keyof AggregatePacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacks[P]>
      : GetScalarType<T[P], AggregatePacks[P]>
  }




  export type PacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacksWhereInput
    orderBy?: PacksOrderByWithAggregationInput | PacksOrderByWithAggregationInput[]
    by: PacksScalarFieldEnum[] | PacksScalarFieldEnum
    having?: PacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacksCountAggregateInputType | true
    _min?: PacksMinAggregateInputType
    _max?: PacksMaxAggregateInputType
  }

  export type PacksGroupByOutputType = {
    id: string
    name: string
    _count: PacksCountAggregateOutputType | null
    _min: PacksMinAggregateOutputType | null
    _max: PacksMaxAggregateOutputType | null
  }

  type GetPacksGroupByPayload<T extends PacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacksGroupByOutputType[P]>
            : GetScalarType<T[P], PacksGroupByOutputType[P]>
        }
      >
    >


  export type PacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    packPrompts?: boolean | Packs$packPromptsArgs<ExtArgs>
    _count?: boolean | PacksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["packs"]>

  export type PacksSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["packs"]>
  export type PacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packPrompts?: boolean | Packs$packPromptsArgs<ExtArgs>
    _count?: boolean | PacksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Packs"
    objects: {
      packPrompts: Prisma.$PackPromptsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["packs"]>
    composites: {}
  }

  type PacksGetPayload<S extends boolean | null | undefined | PacksDefaultArgs> = $Result.GetResult<Prisma.$PacksPayload, S>

  type PacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacksCountAggregateInputType | true
    }

  export interface PacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Packs'], meta: { name: 'Packs' } }
    /**
     * Find zero or one Packs that matches the filter.
     * @param {PacksFindUniqueArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacksFindUniqueArgs>(args: SelectSubset<T, PacksFindUniqueArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Packs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacksFindUniqueOrThrowArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacksFindUniqueOrThrowArgs>(args: SelectSubset<T, PacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindFirstArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacksFindFirstArgs>(args?: SelectSubset<T, PacksFindFirstArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindFirstOrThrowArgs} args - Arguments to find a Packs
     * @example
     * // Get one Packs
     * const packs = await prisma.packs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacksFindFirstOrThrowArgs>(args?: SelectSubset<T, PacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.packs.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.packs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packsWithIdOnly = await prisma.packs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacksFindManyArgs>(args?: SelectSubset<T, PacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Packs.
     * @param {PacksCreateArgs} args - Arguments to create a Packs.
     * @example
     * // Create one Packs
     * const Packs = await prisma.packs.create({
     *   data: {
     *     // ... data to create a Packs
     *   }
     * })
     * 
     */
    create<T extends PacksCreateArgs>(args: SelectSubset<T, PacksCreateArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packs.
     * @param {PacksCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const packs = await prisma.packs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacksCreateManyArgs>(args?: SelectSubset<T, PacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PacksCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const packs = await prisma.packs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packsWithIdOnly = await prisma.packs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacksCreateManyAndReturnArgs>(args?: SelectSubset<T, PacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Packs.
     * @param {PacksDeleteArgs} args - Arguments to delete one Packs.
     * @example
     * // Delete one Packs
     * const Packs = await prisma.packs.delete({
     *   where: {
     *     // ... filter to delete one Packs
     *   }
     * })
     * 
     */
    delete<T extends PacksDeleteArgs>(args: SelectSubset<T, PacksDeleteArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Packs.
     * @param {PacksUpdateArgs} args - Arguments to update one Packs.
     * @example
     * // Update one Packs
     * const packs = await prisma.packs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacksUpdateArgs>(args: SelectSubset<T, PacksUpdateArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packs.
     * @param {PacksDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.packs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacksDeleteManyArgs>(args?: SelectSubset<T, PacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const packs = await prisma.packs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacksUpdateManyArgs>(args: SelectSubset<T, PacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs and returns the data updated in the database.
     * @param {PacksUpdateManyAndReturnArgs} args - Arguments to update many Packs.
     * @example
     * // Update many Packs
     * const packs = await prisma.packs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packs and only return the `id`
     * const packsWithIdOnly = await prisma.packs.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacksUpdateManyAndReturnArgs>(args: SelectSubset<T, PacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Packs.
     * @param {PacksUpsertArgs} args - Arguments to update or create a Packs.
     * @example
     * // Update or create a Packs
     * const packs = await prisma.packs.upsert({
     *   create: {
     *     // ... data to create a Packs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Packs we want to update
     *   }
     * })
     */
    upsert<T extends PacksUpsertArgs>(args: SelectSubset<T, PacksUpsertArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.packs.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PacksCountArgs>(
      args?: Subset<T, PacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacksAggregateArgs>(args: Subset<T, PacksAggregateArgs>): Prisma.PrismaPromise<GetPacksAggregateType<T>>

    /**
     * Group by Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacksGroupByArgs} args - Group by arguments.
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
      T extends PacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacksGroupByArgs['orderBy'] }
        : { orderBy?: PacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Packs model
   */
  readonly fields: PacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Packs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packPrompts<T extends Packs$packPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Packs$packPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Packs model
   */
  interface PacksFieldRefs {
    readonly id: FieldRef<"Packs", 'String'>
    readonly name: FieldRef<"Packs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Packs findUnique
   */
  export type PacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs findUniqueOrThrow
   */
  export type PacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs findFirst
   */
  export type PacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs findFirstOrThrow
   */
  export type PacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs findMany
   */
  export type PacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PacksOrderByWithRelationInput | PacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    distinct?: PacksScalarFieldEnum | PacksScalarFieldEnum[]
  }

  /**
   * Packs create
   */
  export type PacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The data needed to create a Packs.
     */
    data: XOR<PacksCreateInput, PacksUncheckedCreateInput>
  }

  /**
   * Packs createMany
   */
  export type PacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PacksCreateManyInput | PacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Packs createManyAndReturn
   */
  export type PacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PacksCreateManyInput | PacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Packs update
   */
  export type PacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The data needed to update a Packs.
     */
    data: XOR<PacksUpdateInput, PacksUncheckedUpdateInput>
    /**
     * Choose, which Packs to update.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs updateMany
   */
  export type PacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PacksUpdateManyMutationInput, PacksUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Packs updateManyAndReturn
   */
  export type PacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * The data used to update Packs.
     */
    data: XOR<PacksUpdateManyMutationInput, PacksUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Packs upsert
   */
  export type PacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * The filter to search for the Packs to update in case it exists.
     */
    where: PacksWhereUniqueInput
    /**
     * In case the Packs found by the `where` argument doesn't exist, create a new Packs with this data.
     */
    create: XOR<PacksCreateInput, PacksUncheckedCreateInput>
    /**
     * In case the Packs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacksUpdateInput, PacksUncheckedUpdateInput>
  }

  /**
   * Packs delete
   */
  export type PacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
    /**
     * Filter which Packs to delete.
     */
    where: PacksWhereUniqueInput
  }

  /**
   * Packs deleteMany
   */
  export type PacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PacksWhereInput
    /**
     * Limit how many Packs to delete.
     */
    limit?: number
  }

  /**
   * Packs.packPrompts
   */
  export type Packs$packPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    where?: PackPromptsWhereInput
    orderBy?: PackPromptsOrderByWithRelationInput | PackPromptsOrderByWithRelationInput[]
    cursor?: PackPromptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackPromptsScalarFieldEnum | PackPromptsScalarFieldEnum[]
  }

  /**
   * Packs without action
   */
  export type PacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packs
     */
    select?: PacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packs
     */
    omit?: PacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacksInclude<ExtArgs> | null
  }


  /**
   * Model PackPrompts
   */

  export type AggregatePackPrompts = {
    _count: PackPromptsCountAggregateOutputType | null
    _min: PackPromptsMinAggregateOutputType | null
    _max: PackPromptsMaxAggregateOutputType | null
  }

  export type PackPromptsMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptsMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    packId: string | null
  }

  export type PackPromptsCountAggregateOutputType = {
    id: number
    prompt: number
    packId: number
    _all: number
  }


  export type PackPromptsMinAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptsMaxAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
  }

  export type PackPromptsCountAggregateInputType = {
    id?: true
    prompt?: true
    packId?: true
    _all?: true
  }

  export type PackPromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompts to aggregate.
     */
    where?: PackPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptsOrderByWithRelationInput | PackPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackPrompts
    **/
    _count?: true | PackPromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackPromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackPromptsMaxAggregateInputType
  }

  export type GetPackPromptsAggregateType<T extends PackPromptsAggregateArgs> = {
        [P in keyof T & keyof AggregatePackPrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackPrompts[P]>
      : GetScalarType<T[P], AggregatePackPrompts[P]>
  }




  export type PackPromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackPromptsWhereInput
    orderBy?: PackPromptsOrderByWithAggregationInput | PackPromptsOrderByWithAggregationInput[]
    by: PackPromptsScalarFieldEnum[] | PackPromptsScalarFieldEnum
    having?: PackPromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackPromptsCountAggregateInputType | true
    _min?: PackPromptsMinAggregateInputType
    _max?: PackPromptsMaxAggregateInputType
  }

  export type PackPromptsGroupByOutputType = {
    id: string
    prompt: string
    packId: string
    _count: PackPromptsCountAggregateOutputType | null
    _min: PackPromptsMinAggregateOutputType | null
    _max: PackPromptsMaxAggregateOutputType | null
  }

  type GetPackPromptsGroupByPayload<T extends PackPromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackPromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackPromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackPromptsGroupByOutputType[P]>
            : GetScalarType<T[P], PackPromptsGroupByOutputType[P]>
        }
      >
    >


  export type PackPromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompts"]>

  export type PackPromptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompts"]>

  export type PackPromptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    packId?: boolean
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packPrompts"]>

  export type PackPromptsSelectScalar = {
    id?: boolean
    prompt?: boolean
    packId?: boolean
  }

  export type PackPromptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "packId", ExtArgs["result"]["packPrompts"]>
  export type PackPromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }
  export type PackPromptsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }
  export type PackPromptsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pack?: boolean | PacksDefaultArgs<ExtArgs>
  }

  export type $PackPromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackPrompts"
    objects: {
      pack: Prisma.$PacksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      packId: string
    }, ExtArgs["result"]["packPrompts"]>
    composites: {}
  }

  type PackPromptsGetPayload<S extends boolean | null | undefined | PackPromptsDefaultArgs> = $Result.GetResult<Prisma.$PackPromptsPayload, S>

  type PackPromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackPromptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackPromptsCountAggregateInputType | true
    }

  export interface PackPromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackPrompts'], meta: { name: 'PackPrompts' } }
    /**
     * Find zero or one PackPrompts that matches the filter.
     * @param {PackPromptsFindUniqueArgs} args - Arguments to find a PackPrompts
     * @example
     * // Get one PackPrompts
     * const packPrompts = await prisma.packPrompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackPromptsFindUniqueArgs>(args: SelectSubset<T, PackPromptsFindUniqueArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackPrompts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackPromptsFindUniqueOrThrowArgs} args - Arguments to find a PackPrompts
     * @example
     * // Get one PackPrompts
     * const packPrompts = await prisma.packPrompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackPromptsFindUniqueOrThrowArgs>(args: SelectSubset<T, PackPromptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsFindFirstArgs} args - Arguments to find a PackPrompts
     * @example
     * // Get one PackPrompts
     * const packPrompts = await prisma.packPrompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackPromptsFindFirstArgs>(args?: SelectSubset<T, PackPromptsFindFirstArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackPrompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsFindFirstOrThrowArgs} args - Arguments to find a PackPrompts
     * @example
     * // Get one PackPrompts
     * const packPrompts = await prisma.packPrompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackPromptsFindFirstOrThrowArgs>(args?: SelectSubset<T, PackPromptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackPrompts
     * const packPrompts = await prisma.packPrompts.findMany()
     * 
     * // Get first 10 PackPrompts
     * const packPrompts = await prisma.packPrompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packPromptsWithIdOnly = await prisma.packPrompts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackPromptsFindManyArgs>(args?: SelectSubset<T, PackPromptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackPrompts.
     * @param {PackPromptsCreateArgs} args - Arguments to create a PackPrompts.
     * @example
     * // Create one PackPrompts
     * const PackPrompts = await prisma.packPrompts.create({
     *   data: {
     *     // ... data to create a PackPrompts
     *   }
     * })
     * 
     */
    create<T extends PackPromptsCreateArgs>(args: SelectSubset<T, PackPromptsCreateArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackPrompts.
     * @param {PackPromptsCreateManyArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompts = await prisma.packPrompts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackPromptsCreateManyArgs>(args?: SelectSubset<T, PackPromptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackPrompts and returns the data saved in the database.
     * @param {PackPromptsCreateManyAndReturnArgs} args - Arguments to create many PackPrompts.
     * @example
     * // Create many PackPrompts
     * const packPrompts = await prisma.packPrompts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackPrompts and only return the `id`
     * const packPromptsWithIdOnly = await prisma.packPrompts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackPromptsCreateManyAndReturnArgs>(args?: SelectSubset<T, PackPromptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackPrompts.
     * @param {PackPromptsDeleteArgs} args - Arguments to delete one PackPrompts.
     * @example
     * // Delete one PackPrompts
     * const PackPrompts = await prisma.packPrompts.delete({
     *   where: {
     *     // ... filter to delete one PackPrompts
     *   }
     * })
     * 
     */
    delete<T extends PackPromptsDeleteArgs>(args: SelectSubset<T, PackPromptsDeleteArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackPrompts.
     * @param {PackPromptsUpdateArgs} args - Arguments to update one PackPrompts.
     * @example
     * // Update one PackPrompts
     * const packPrompts = await prisma.packPrompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackPromptsUpdateArgs>(args: SelectSubset<T, PackPromptsUpdateArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackPrompts.
     * @param {PackPromptsDeleteManyArgs} args - Arguments to filter PackPrompts to delete.
     * @example
     * // Delete a few PackPrompts
     * const { count } = await prisma.packPrompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackPromptsDeleteManyArgs>(args?: SelectSubset<T, PackPromptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackPrompts
     * const packPrompts = await prisma.packPrompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackPromptsUpdateManyArgs>(args: SelectSubset<T, PackPromptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackPrompts and returns the data updated in the database.
     * @param {PackPromptsUpdateManyAndReturnArgs} args - Arguments to update many PackPrompts.
     * @example
     * // Update many PackPrompts
     * const packPrompts = await prisma.packPrompts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackPrompts and only return the `id`
     * const packPromptsWithIdOnly = await prisma.packPrompts.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackPromptsUpdateManyAndReturnArgs>(args: SelectSubset<T, PackPromptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackPrompts.
     * @param {PackPromptsUpsertArgs} args - Arguments to update or create a PackPrompts.
     * @example
     * // Update or create a PackPrompts
     * const packPrompts = await prisma.packPrompts.upsert({
     *   create: {
     *     // ... data to create a PackPrompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackPrompts we want to update
     *   }
     * })
     */
    upsert<T extends PackPromptsUpsertArgs>(args: SelectSubset<T, PackPromptsUpsertArgs<ExtArgs>>): Prisma__PackPromptsClient<$Result.GetResult<Prisma.$PackPromptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsCountArgs} args - Arguments to filter PackPrompts to count.
     * @example
     * // Count the number of PackPrompts
     * const count = await prisma.packPrompts.count({
     *   where: {
     *     // ... the filter for the PackPrompts we want to count
     *   }
     * })
    **/
    count<T extends PackPromptsCountArgs>(
      args?: Subset<T, PackPromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackPromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackPromptsAggregateArgs>(args: Subset<T, PackPromptsAggregateArgs>): Prisma.PrismaPromise<GetPackPromptsAggregateType<T>>

    /**
     * Group by PackPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackPromptsGroupByArgs} args - Group by arguments.
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
      T extends PackPromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackPromptsGroupByArgs['orderBy'] }
        : { orderBy?: PackPromptsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackPromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackPrompts model
   */
  readonly fields: PackPromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackPrompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackPromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pack<T extends PacksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacksDefaultArgs<ExtArgs>>): Prisma__PacksClient<$Result.GetResult<Prisma.$PacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackPrompts model
   */
  interface PackPromptsFieldRefs {
    readonly id: FieldRef<"PackPrompts", 'String'>
    readonly prompt: FieldRef<"PackPrompts", 'String'>
    readonly packId: FieldRef<"PackPrompts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackPrompts findUnique
   */
  export type PackPromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where: PackPromptsWhereUniqueInput
  }

  /**
   * PackPrompts findUniqueOrThrow
   */
  export type PackPromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where: PackPromptsWhereUniqueInput
  }

  /**
   * PackPrompts findFirst
   */
  export type PackPromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where?: PackPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptsOrderByWithRelationInput | PackPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptsScalarFieldEnum | PackPromptsScalarFieldEnum[]
  }

  /**
   * PackPrompts findFirstOrThrow
   */
  export type PackPromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where?: PackPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptsOrderByWithRelationInput | PackPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackPrompts.
     */
    cursor?: PackPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackPrompts.
     */
    distinct?: PackPromptsScalarFieldEnum | PackPromptsScalarFieldEnum[]
  }

  /**
   * PackPrompts findMany
   */
  export type PackPromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter, which PackPrompts to fetch.
     */
    where?: PackPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackPrompts to fetch.
     */
    orderBy?: PackPromptsOrderByWithRelationInput | PackPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackPrompts.
     */
    cursor?: PackPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackPrompts.
     */
    skip?: number
    distinct?: PackPromptsScalarFieldEnum | PackPromptsScalarFieldEnum[]
  }

  /**
   * PackPrompts create
   */
  export type PackPromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a PackPrompts.
     */
    data: XOR<PackPromptsCreateInput, PackPromptsUncheckedCreateInput>
  }

  /**
   * PackPrompts createMany
   */
  export type PackPromptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptsCreateManyInput | PackPromptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackPrompts createManyAndReturn
   */
  export type PackPromptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * The data used to create many PackPrompts.
     */
    data: PackPromptsCreateManyInput | PackPromptsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompts update
   */
  export type PackPromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a PackPrompts.
     */
    data: XOR<PackPromptsUpdateInput, PackPromptsUncheckedUpdateInput>
    /**
     * Choose, which PackPrompts to update.
     */
    where: PackPromptsWhereUniqueInput
  }

  /**
   * PackPrompts updateMany
   */
  export type PackPromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptsUpdateManyMutationInput, PackPromptsUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptsWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
  }

  /**
   * PackPrompts updateManyAndReturn
   */
  export type PackPromptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * The data used to update PackPrompts.
     */
    data: XOR<PackPromptsUpdateManyMutationInput, PackPromptsUncheckedUpdateManyInput>
    /**
     * Filter which PackPrompts to update
     */
    where?: PackPromptsWhereInput
    /**
     * Limit how many PackPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackPrompts upsert
   */
  export type PackPromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the PackPrompts to update in case it exists.
     */
    where: PackPromptsWhereUniqueInput
    /**
     * In case the PackPrompts found by the `where` argument doesn't exist, create a new PackPrompts with this data.
     */
    create: XOR<PackPromptsCreateInput, PackPromptsUncheckedCreateInput>
    /**
     * In case the PackPrompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackPromptsUpdateInput, PackPromptsUncheckedUpdateInput>
  }

  /**
   * PackPrompts delete
   */
  export type PackPromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
    /**
     * Filter which PackPrompts to delete.
     */
    where: PackPromptsWhereUniqueInput
  }

  /**
   * PackPrompts deleteMany
   */
  export type PackPromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackPrompts to delete
     */
    where?: PackPromptsWhereInput
    /**
     * Limit how many PackPrompts to delete.
     */
    limit?: number
  }

  /**
   * PackPrompts without action
   */
  export type PackPromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackPrompts
     */
    select?: PackPromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackPrompts
     */
    omit?: PackPromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackPromptsInclude<ExtArgs> | null
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


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    age: 'age',
    ethinicity: 'ethinicity',
    bald: 'bald',
    eyeColor: 'eyeColor',
    userId: 'userId',
    falAiRequestId: 'falAiRequestId',
    trainingStatus: 'trainingStatus',
    images: 'images',
    triggerWord: 'triggerWord',
    tensorPath: 'tensorPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    zipUrl: 'zipUrl'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const OutputImagesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    prompt: 'prompt',
    status: 'status',
    userId: 'userId',
    modelId: 'modelId',
    falAiRequestId: 'falAiRequestId'
  };

  export type OutputImagesScalarFieldEnum = (typeof OutputImagesScalarFieldEnum)[keyof typeof OutputImagesScalarFieldEnum]


  export const PacksScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PacksScalarFieldEnum = (typeof PacksScalarFieldEnum)[keyof typeof PacksScalarFieldEnum]


  export const PackPromptsScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    packId: 'packId'
  };

  export type PackPromptsScalarFieldEnum = (typeof PackPromptsScalarFieldEnum)[keyof typeof PackPromptsScalarFieldEnum]


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
   * Reference to a field of type 'ModelTypeEnum'
   */
  export type EnumModelTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTypeEnum'>
    


  /**
   * Reference to a field of type 'ModelTypeEnum[]'
   */
  export type ListEnumModelTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EthinicityEnum'
   */
  export type EnumEthinicityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EthinicityEnum'>
    


  /**
   * Reference to a field of type 'EthinicityEnum[]'
   */
  export type ListEnumEthinicityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EthinicityEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EyeColorEnum'
   */
  export type EnumEyeColorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EyeColorEnum'>
    


  /**
   * Reference to a field of type 'EyeColorEnum[]'
   */
  export type ListEnumEyeColorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EyeColorEnum[]'>
    


  /**
   * Reference to a field of type 'ModelTrainingStatusEnum'
   */
  export type EnumModelTrainingStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTrainingStatusEnum'>
    


  /**
   * Reference to a field of type 'ModelTrainingStatusEnum[]'
   */
  export type ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelTrainingStatusEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OutputImagesStatusEnum'
   */
  export type EnumOutputImagesStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImagesStatusEnum'>
    


  /**
   * Reference to a field of type 'OutputImagesStatusEnum[]'
   */
  export type ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputImagesStatusEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: StringFilter<"Model"> | string
    name?: StringFilter<"Model"> | string
    type?: EnumModelTypeEnumFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumFilter<"Model"> | $Enums.EthinicityEnum
    bald?: BoolFilter<"Model"> | boolean
    eyeColor?: EnumEyeColorEnumFilter<"Model"> | $Enums.EyeColorEnum
    userId?: StringFilter<"Model"> | string
    falAiRequestId?: StringNullableFilter<"Model"> | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFilter<"Model"> | $Enums.ModelTrainingStatusEnum
    images?: StringNullableListFilter<"Model">
    triggerWord?: StringNullableFilter<"Model"> | string | null
    tensorPath?: StringNullableFilter<"Model"> | string | null
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    zipUrl?: StringFilter<"Model"> | string
    outputImages?: OutputImagesListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    bald?: SortOrder
    eyeColor?: SortOrder
    userId?: SortOrder
    falAiRequestId?: SortOrderInput | SortOrder
    trainingStatus?: SortOrder
    images?: SortOrder
    triggerWord?: SortOrderInput | SortOrder
    tensorPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zipUrl?: SortOrder
    outputImages?: OutputImagesOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    type?: EnumModelTypeEnumFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumFilter<"Model"> | $Enums.EthinicityEnum
    bald?: BoolFilter<"Model"> | boolean
    eyeColor?: EnumEyeColorEnumFilter<"Model"> | $Enums.EyeColorEnum
    userId?: StringFilter<"Model"> | string
    falAiRequestId?: StringNullableFilter<"Model"> | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFilter<"Model"> | $Enums.ModelTrainingStatusEnum
    images?: StringNullableListFilter<"Model">
    triggerWord?: StringNullableFilter<"Model"> | string | null
    tensorPath?: StringNullableFilter<"Model"> | string | null
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    zipUrl?: StringFilter<"Model"> | string
    outputImages?: OutputImagesListRelationFilter
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    bald?: SortOrder
    eyeColor?: SortOrder
    userId?: SortOrder
    falAiRequestId?: SortOrderInput | SortOrder
    trainingStatus?: SortOrder
    images?: SortOrder
    triggerWord?: SortOrderInput | SortOrder
    tensorPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zipUrl?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Model"> | string
    name?: StringWithAggregatesFilter<"Model"> | string
    type?: EnumModelTypeEnumWithAggregatesFilter<"Model"> | $Enums.ModelTypeEnum
    age?: IntWithAggregatesFilter<"Model"> | number
    ethinicity?: EnumEthinicityEnumWithAggregatesFilter<"Model"> | $Enums.EthinicityEnum
    bald?: BoolWithAggregatesFilter<"Model"> | boolean
    eyeColor?: EnumEyeColorEnumWithAggregatesFilter<"Model"> | $Enums.EyeColorEnum
    userId?: StringWithAggregatesFilter<"Model"> | string
    falAiRequestId?: StringNullableWithAggregatesFilter<"Model"> | string | null
    trainingStatus?: EnumModelTrainingStatusEnumWithAggregatesFilter<"Model"> | $Enums.ModelTrainingStatusEnum
    images?: StringNullableListFilter<"Model">
    triggerWord?: StringNullableWithAggregatesFilter<"Model"> | string | null
    tensorPath?: StringNullableWithAggregatesFilter<"Model"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    zipUrl?: StringWithAggregatesFilter<"Model"> | string
  }

  export type OutputImagesWhereInput = {
    AND?: OutputImagesWhereInput | OutputImagesWhereInput[]
    OR?: OutputImagesWhereInput[]
    NOT?: OutputImagesWhereInput | OutputImagesWhereInput[]
    id?: StringFilter<"OutputImages"> | string
    imageUrl?: StringFilter<"OutputImages"> | string
    prompt?: StringFilter<"OutputImages"> | string
    status?: EnumOutputImagesStatusEnumFilter<"OutputImages"> | $Enums.OutputImagesStatusEnum
    userId?: StringFilter<"OutputImages"> | string
    modelId?: StringFilter<"OutputImages"> | string
    falAiRequestId?: StringNullableFilter<"OutputImages"> | string | null
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }

  export type OutputImagesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    falAiRequestId?: SortOrderInput | SortOrder
    model?: ModelOrderByWithRelationInput
  }

  export type OutputImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutputImagesWhereInput | OutputImagesWhereInput[]
    OR?: OutputImagesWhereInput[]
    NOT?: OutputImagesWhereInput | OutputImagesWhereInput[]
    imageUrl?: StringFilter<"OutputImages"> | string
    prompt?: StringFilter<"OutputImages"> | string
    status?: EnumOutputImagesStatusEnumFilter<"OutputImages"> | $Enums.OutputImagesStatusEnum
    userId?: StringFilter<"OutputImages"> | string
    modelId?: StringFilter<"OutputImages"> | string
    falAiRequestId?: StringNullableFilter<"OutputImages"> | string | null
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }, "id">

  export type OutputImagesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    falAiRequestId?: SortOrderInput | SortOrder
    _count?: OutputImagesCountOrderByAggregateInput
    _max?: OutputImagesMaxOrderByAggregateInput
    _min?: OutputImagesMinOrderByAggregateInput
  }

  export type OutputImagesScalarWhereWithAggregatesInput = {
    AND?: OutputImagesScalarWhereWithAggregatesInput | OutputImagesScalarWhereWithAggregatesInput[]
    OR?: OutputImagesScalarWhereWithAggregatesInput[]
    NOT?: OutputImagesScalarWhereWithAggregatesInput | OutputImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutputImages"> | string
    imageUrl?: StringWithAggregatesFilter<"OutputImages"> | string
    prompt?: StringWithAggregatesFilter<"OutputImages"> | string
    status?: EnumOutputImagesStatusEnumWithAggregatesFilter<"OutputImages"> | $Enums.OutputImagesStatusEnum
    userId?: StringWithAggregatesFilter<"OutputImages"> | string
    modelId?: StringWithAggregatesFilter<"OutputImages"> | string
    falAiRequestId?: StringNullableWithAggregatesFilter<"OutputImages"> | string | null
  }

  export type PacksWhereInput = {
    AND?: PacksWhereInput | PacksWhereInput[]
    OR?: PacksWhereInput[]
    NOT?: PacksWhereInput | PacksWhereInput[]
    id?: StringFilter<"Packs"> | string
    name?: StringFilter<"Packs"> | string
    packPrompts?: PackPromptsListRelationFilter
  }

  export type PacksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    packPrompts?: PackPromptsOrderByRelationAggregateInput
  }

  export type PacksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacksWhereInput | PacksWhereInput[]
    OR?: PacksWhereInput[]
    NOT?: PacksWhereInput | PacksWhereInput[]
    name?: StringFilter<"Packs"> | string
    packPrompts?: PackPromptsListRelationFilter
  }, "id">

  export type PacksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PacksCountOrderByAggregateInput
    _max?: PacksMaxOrderByAggregateInput
    _min?: PacksMinOrderByAggregateInput
  }

  export type PacksScalarWhereWithAggregatesInput = {
    AND?: PacksScalarWhereWithAggregatesInput | PacksScalarWhereWithAggregatesInput[]
    OR?: PacksScalarWhereWithAggregatesInput[]
    NOT?: PacksScalarWhereWithAggregatesInput | PacksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Packs"> | string
    name?: StringWithAggregatesFilter<"Packs"> | string
  }

  export type PackPromptsWhereInput = {
    AND?: PackPromptsWhereInput | PackPromptsWhereInput[]
    OR?: PackPromptsWhereInput[]
    NOT?: PackPromptsWhereInput | PackPromptsWhereInput[]
    id?: StringFilter<"PackPrompts"> | string
    prompt?: StringFilter<"PackPrompts"> | string
    packId?: StringFilter<"PackPrompts"> | string
    pack?: XOR<PacksScalarRelationFilter, PacksWhereInput>
  }

  export type PackPromptsOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    pack?: PacksOrderByWithRelationInput
  }

  export type PackPromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackPromptsWhereInput | PackPromptsWhereInput[]
    OR?: PackPromptsWhereInput[]
    NOT?: PackPromptsWhereInput | PackPromptsWhereInput[]
    prompt?: StringFilter<"PackPrompts"> | string
    packId?: StringFilter<"PackPrompts"> | string
    pack?: XOR<PacksScalarRelationFilter, PacksWhereInput>
  }, "id">

  export type PackPromptsOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
    _count?: PackPromptsCountOrderByAggregateInput
    _max?: PackPromptsMaxOrderByAggregateInput
    _min?: PackPromptsMinOrderByAggregateInput
  }

  export type PackPromptsScalarWhereWithAggregatesInput = {
    AND?: PackPromptsScalarWhereWithAggregatesInput | PackPromptsScalarWhereWithAggregatesInput[]
    OR?: PackPromptsScalarWhereWithAggregatesInput[]
    NOT?: PackPromptsScalarWhereWithAggregatesInput | PackPromptsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackPrompts"> | string
    prompt?: StringWithAggregatesFilter<"PackPrompts"> | string
    packId?: StringWithAggregatesFilter<"PackPrompts"> | string
  }

  export type ModelCreateInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId?: string | null
    trainingStatus?: $Enums.ModelTrainingStatusEnum
    images?: ModelCreateimagesInput | string[]
    triggerWord?: string | null
    tensorPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    zipUrl: string
    outputImages?: OutputImagesCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId?: string | null
    trainingStatus?: $Enums.ModelTrainingStatusEnum
    images?: ModelCreateimagesInput | string[]
    triggerWord?: string | null
    tensorPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    zipUrl: string
    outputImages?: OutputImagesUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
    outputImages?: OutputImagesUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
    outputImages?: OutputImagesUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId?: string | null
    trainingStatus?: $Enums.ModelTrainingStatusEnum
    images?: ModelCreateimagesInput | string[]
    triggerWord?: string | null
    tensorPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    zipUrl: string
  }

  export type ModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImagesCreateInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    falAiRequestId?: string | null
    model: ModelCreateNestedOneWithoutOutputImagesInput
  }

  export type OutputImagesUncheckedCreateInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    modelId: string
    falAiRequestId?: string | null
  }

  export type OutputImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    model?: ModelUpdateOneRequiredWithoutOutputImagesNestedInput
  }

  export type OutputImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImagesCreateManyInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    modelId: string
    falAiRequestId?: string | null
  }

  export type OutputImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacksCreateInput = {
    id?: string
    name: string
    packPrompts?: PackPromptsCreateNestedManyWithoutPackInput
  }

  export type PacksUncheckedCreateInput = {
    id?: string
    name: string
    packPrompts?: PackPromptsUncheckedCreateNestedManyWithoutPackInput
  }

  export type PacksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packPrompts?: PackPromptsUpdateManyWithoutPackNestedInput
  }

  export type PacksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packPrompts?: PackPromptsUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PacksCreateManyInput = {
    id?: string
    name: string
  }

  export type PacksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PacksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsCreateInput = {
    id?: string
    prompt: string
    pack: PacksCreateNestedOneWithoutPackPromptsInput
  }

  export type PackPromptsUncheckedCreateInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    pack?: PacksUpdateOneRequiredWithoutPackPromptsNestedInput
  }

  export type PackPromptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsCreateManyInput = {
    id?: string
    prompt: string
    packId: string
  }

  export type PackPromptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    packId?: StringFieldUpdateOperationsInput | string
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

  export type EnumModelTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumFilter<$PrismaModel> | $Enums.ModelTypeEnum
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

  export type EnumEthinicityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumFilter<$PrismaModel> | $Enums.EthinicityEnum
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumEyeColorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumFilter<$PrismaModel> | $Enums.EyeColorEnum
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

  export type EnumModelTrainingStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatusEnum | EnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel> | $Enums.ModelTrainingStatusEnum
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type OutputImagesListRelationFilter = {
    every?: OutputImagesWhereInput
    some?: OutputImagesWhereInput
    none?: OutputImagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutputImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    bald?: SortOrder
    eyeColor?: SortOrder
    userId?: SortOrder
    falAiRequestId?: SortOrder
    trainingStatus?: SortOrder
    images?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zipUrl?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    bald?: SortOrder
    eyeColor?: SortOrder
    userId?: SortOrder
    falAiRequestId?: SortOrder
    trainingStatus?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zipUrl?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    age?: SortOrder
    ethinicity?: SortOrder
    bald?: SortOrder
    eyeColor?: SortOrder
    userId?: SortOrder
    falAiRequestId?: SortOrder
    trainingStatus?: SortOrder
    triggerWord?: SortOrder
    tensorPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zipUrl?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type EnumModelTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTypeEnumFilter<$PrismaModel>
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

  export type EnumEthinicityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel> | $Enums.EthinicityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthinicityEnumFilter<$PrismaModel>
    _max?: NestedEnumEthinicityEnumFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEyeColorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel> | $Enums.EyeColorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEyeColorEnumFilter<$PrismaModel>
    _max?: NestedEnumEyeColorEnumFilter<$PrismaModel>
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

  export type EnumModelTrainingStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatusEnum | EnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTrainingStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTrainingStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel>
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

  export type EnumOutputImagesStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatusEnum | EnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel> | $Enums.OutputImagesStatusEnum
  }

  export type ModelScalarRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type OutputImagesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    falAiRequestId?: SortOrder
  }

  export type OutputImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    falAiRequestId?: SortOrder
  }

  export type OutputImagesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    prompt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    modelId?: SortOrder
    falAiRequestId?: SortOrder
  }

  export type EnumOutputImagesStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatusEnum | EnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OutputImagesStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel>
  }

  export type PackPromptsListRelationFilter = {
    every?: PackPromptsWhereInput
    some?: PackPromptsWhereInput
    none?: PackPromptsWhereInput
  }

  export type PackPromptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PacksScalarRelationFilter = {
    is?: PacksWhereInput
    isNot?: PacksWhereInput
  }

  export type PackPromptsCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type PackPromptsMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    packId?: SortOrder
  }

  export type ModelCreateimagesInput = {
    set: string[]
  }

  export type OutputImagesCreateNestedManyWithoutModelInput = {
    create?: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput> | OutputImagesCreateWithoutModelInput[] | OutputImagesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImagesCreateOrConnectWithoutModelInput | OutputImagesCreateOrConnectWithoutModelInput[]
    createMany?: OutputImagesCreateManyModelInputEnvelope
    connect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
  }

  export type OutputImagesUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput> | OutputImagesCreateWithoutModelInput[] | OutputImagesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImagesCreateOrConnectWithoutModelInput | OutputImagesCreateOrConnectWithoutModelInput[]
    createMany?: OutputImagesCreateManyModelInputEnvelope
    connect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumModelTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.ModelTypeEnum
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEthinicityEnumFieldUpdateOperationsInput = {
    set?: $Enums.EthinicityEnum
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumEyeColorEnumFieldUpdateOperationsInput = {
    set?: $Enums.EyeColorEnum
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumModelTrainingStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.ModelTrainingStatusEnum
  }

  export type ModelUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OutputImagesUpdateManyWithoutModelNestedInput = {
    create?: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput> | OutputImagesCreateWithoutModelInput[] | OutputImagesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImagesCreateOrConnectWithoutModelInput | OutputImagesCreateOrConnectWithoutModelInput[]
    upsert?: OutputImagesUpsertWithWhereUniqueWithoutModelInput | OutputImagesUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: OutputImagesCreateManyModelInputEnvelope
    set?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    disconnect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    delete?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    connect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    update?: OutputImagesUpdateWithWhereUniqueWithoutModelInput | OutputImagesUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: OutputImagesUpdateManyWithWhereWithoutModelInput | OutputImagesUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: OutputImagesScalarWhereInput | OutputImagesScalarWhereInput[]
  }

  export type OutputImagesUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput> | OutputImagesCreateWithoutModelInput[] | OutputImagesUncheckedCreateWithoutModelInput[]
    connectOrCreate?: OutputImagesCreateOrConnectWithoutModelInput | OutputImagesCreateOrConnectWithoutModelInput[]
    upsert?: OutputImagesUpsertWithWhereUniqueWithoutModelInput | OutputImagesUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: OutputImagesCreateManyModelInputEnvelope
    set?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    disconnect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    delete?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    connect?: OutputImagesWhereUniqueInput | OutputImagesWhereUniqueInput[]
    update?: OutputImagesUpdateWithWhereUniqueWithoutModelInput | OutputImagesUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: OutputImagesUpdateManyWithWhereWithoutModelInput | OutputImagesUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: OutputImagesScalarWhereInput | OutputImagesScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutOutputImagesInput = {
    create?: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutOutputImagesInput
    connect?: ModelWhereUniqueInput
  }

  export type EnumOutputImagesStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.OutputImagesStatusEnum
  }

  export type ModelUpdateOneRequiredWithoutOutputImagesNestedInput = {
    create?: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutOutputImagesInput
    upsert?: ModelUpsertWithoutOutputImagesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutOutputImagesInput, ModelUpdateWithoutOutputImagesInput>, ModelUncheckedUpdateWithoutOutputImagesInput>
  }

  export type PackPromptsCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput> | PackPromptsCreateWithoutPackInput[] | PackPromptsUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptsCreateOrConnectWithoutPackInput | PackPromptsCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptsCreateManyPackInputEnvelope
    connect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
  }

  export type PackPromptsUncheckedCreateNestedManyWithoutPackInput = {
    create?: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput> | PackPromptsCreateWithoutPackInput[] | PackPromptsUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptsCreateOrConnectWithoutPackInput | PackPromptsCreateOrConnectWithoutPackInput[]
    createMany?: PackPromptsCreateManyPackInputEnvelope
    connect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
  }

  export type PackPromptsUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput> | PackPromptsCreateWithoutPackInput[] | PackPromptsUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptsCreateOrConnectWithoutPackInput | PackPromptsCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptsUpsertWithWhereUniqueWithoutPackInput | PackPromptsUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptsCreateManyPackInputEnvelope
    set?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    disconnect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    delete?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    connect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    update?: PackPromptsUpdateWithWhereUniqueWithoutPackInput | PackPromptsUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptsUpdateManyWithWhereWithoutPackInput | PackPromptsUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptsScalarWhereInput | PackPromptsScalarWhereInput[]
  }

  export type PackPromptsUncheckedUpdateManyWithoutPackNestedInput = {
    create?: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput> | PackPromptsCreateWithoutPackInput[] | PackPromptsUncheckedCreateWithoutPackInput[]
    connectOrCreate?: PackPromptsCreateOrConnectWithoutPackInput | PackPromptsCreateOrConnectWithoutPackInput[]
    upsert?: PackPromptsUpsertWithWhereUniqueWithoutPackInput | PackPromptsUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: PackPromptsCreateManyPackInputEnvelope
    set?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    disconnect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    delete?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    connect?: PackPromptsWhereUniqueInput | PackPromptsWhereUniqueInput[]
    update?: PackPromptsUpdateWithWhereUniqueWithoutPackInput | PackPromptsUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: PackPromptsUpdateManyWithWhereWithoutPackInput | PackPromptsUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: PackPromptsScalarWhereInput | PackPromptsScalarWhereInput[]
  }

  export type PacksCreateNestedOneWithoutPackPromptsInput = {
    create?: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    connectOrCreate?: PacksCreateOrConnectWithoutPackPromptsInput
    connect?: PacksWhereUniqueInput
  }

  export type PacksUpdateOneRequiredWithoutPackPromptsNestedInput = {
    create?: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    connectOrCreate?: PacksCreateOrConnectWithoutPackPromptsInput
    upsert?: PacksUpsertWithoutPackPromptsInput
    connect?: PacksWhereUniqueInput
    update?: XOR<XOR<PacksUpdateToOneWithWhereWithoutPackPromptsInput, PacksUpdateWithoutPackPromptsInput>, PacksUncheckedUpdateWithoutPackPromptsInput>
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

  export type NestedEnumModelTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumFilter<$PrismaModel> | $Enums.ModelTypeEnum
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

  export type NestedEnumEthinicityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumFilter<$PrismaModel> | $Enums.EthinicityEnum
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEyeColorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumFilter<$PrismaModel> | $Enums.EyeColorEnum
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

  export type NestedEnumModelTrainingStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatusEnum | EnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel> | $Enums.ModelTrainingStatusEnum
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

  export type NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTypeEnum | EnumModelTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTypeEnum[] | ListEnumModelTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTypeEnumFilter<$PrismaModel>
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

  export type NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EthinicityEnum | EnumEthinicityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EthinicityEnum[] | ListEnumEthinicityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEthinicityEnumWithAggregatesFilter<$PrismaModel> | $Enums.EthinicityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEthinicityEnumFilter<$PrismaModel>
    _max?: NestedEnumEthinicityEnumFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EyeColorEnum | EnumEyeColorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.EyeColorEnum[] | ListEnumEyeColorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumEyeColorEnumWithAggregatesFilter<$PrismaModel> | $Enums.EyeColorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEyeColorEnumFilter<$PrismaModel>
    _max?: NestedEnumEyeColorEnumFilter<$PrismaModel>
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

  export type NestedEnumModelTrainingStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelTrainingStatusEnum | EnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelTrainingStatusEnum[] | ListEnumModelTrainingStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTrainingStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ModelTrainingStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumModelTrainingStatusEnumFilter<$PrismaModel>
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

  export type NestedEnumOutputImagesStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatusEnum | EnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel> | $Enums.OutputImagesStatusEnum
  }

  export type NestedEnumOutputImagesStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputImagesStatusEnum | EnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputImagesStatusEnum[] | ListEnumOutputImagesStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputImagesStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OutputImagesStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOutputImagesStatusEnumFilter<$PrismaModel>
  }

  export type OutputImagesCreateWithoutModelInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    falAiRequestId?: string | null
  }

  export type OutputImagesUncheckedCreateWithoutModelInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    falAiRequestId?: string | null
  }

  export type OutputImagesCreateOrConnectWithoutModelInput = {
    where: OutputImagesWhereUniqueInput
    create: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput>
  }

  export type OutputImagesCreateManyModelInputEnvelope = {
    data: OutputImagesCreateManyModelInput | OutputImagesCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type OutputImagesUpsertWithWhereUniqueWithoutModelInput = {
    where: OutputImagesWhereUniqueInput
    update: XOR<OutputImagesUpdateWithoutModelInput, OutputImagesUncheckedUpdateWithoutModelInput>
    create: XOR<OutputImagesCreateWithoutModelInput, OutputImagesUncheckedCreateWithoutModelInput>
  }

  export type OutputImagesUpdateWithWhereUniqueWithoutModelInput = {
    where: OutputImagesWhereUniqueInput
    data: XOR<OutputImagesUpdateWithoutModelInput, OutputImagesUncheckedUpdateWithoutModelInput>
  }

  export type OutputImagesUpdateManyWithWhereWithoutModelInput = {
    where: OutputImagesScalarWhereInput
    data: XOR<OutputImagesUpdateManyMutationInput, OutputImagesUncheckedUpdateManyWithoutModelInput>
  }

  export type OutputImagesScalarWhereInput = {
    AND?: OutputImagesScalarWhereInput | OutputImagesScalarWhereInput[]
    OR?: OutputImagesScalarWhereInput[]
    NOT?: OutputImagesScalarWhereInput | OutputImagesScalarWhereInput[]
    id?: StringFilter<"OutputImages"> | string
    imageUrl?: StringFilter<"OutputImages"> | string
    prompt?: StringFilter<"OutputImages"> | string
    status?: EnumOutputImagesStatusEnumFilter<"OutputImages"> | $Enums.OutputImagesStatusEnum
    userId?: StringFilter<"OutputImages"> | string
    modelId?: StringFilter<"OutputImages"> | string
    falAiRequestId?: StringNullableFilter<"OutputImages"> | string | null
  }

  export type ModelCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId?: string | null
    trainingStatus?: $Enums.ModelTrainingStatusEnum
    images?: ModelCreateimagesInput | string[]
    triggerWord?: string | null
    tensorPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    zipUrl: string
  }

  export type ModelUncheckedCreateWithoutOutputImagesInput = {
    id?: string
    name: string
    type: $Enums.ModelTypeEnum
    age: number
    ethinicity: $Enums.EthinicityEnum
    bald: boolean
    eyeColor: $Enums.EyeColorEnum
    userId: string
    falAiRequestId?: string | null
    trainingStatus?: $Enums.ModelTrainingStatusEnum
    images?: ModelCreateimagesInput | string[]
    triggerWord?: string | null
    tensorPath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    zipUrl: string
  }

  export type ModelCreateOrConnectWithoutOutputImagesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
  }

  export type ModelUpsertWithoutOutputImagesInput = {
    update: XOR<ModelUpdateWithoutOutputImagesInput, ModelUncheckedUpdateWithoutOutputImagesInput>
    create: XOR<ModelCreateWithoutOutputImagesInput, ModelUncheckedCreateWithoutOutputImagesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutOutputImagesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutOutputImagesInput, ModelUncheckedUpdateWithoutOutputImagesInput>
  }

  export type ModelUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateWithoutOutputImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModelTypeEnumFieldUpdateOperationsInput | $Enums.ModelTypeEnum
    age?: IntFieldUpdateOperationsInput | number
    ethinicity?: EnumEthinicityEnumFieldUpdateOperationsInput | $Enums.EthinicityEnum
    bald?: BoolFieldUpdateOperationsInput | boolean
    eyeColor?: EnumEyeColorEnumFieldUpdateOperationsInput | $Enums.EyeColorEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    trainingStatus?: EnumModelTrainingStatusEnumFieldUpdateOperationsInput | $Enums.ModelTrainingStatusEnum
    images?: ModelUpdateimagesInput | string[]
    triggerWord?: NullableStringFieldUpdateOperationsInput | string | null
    tensorPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zipUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptsUncheckedCreateWithoutPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptsCreateOrConnectWithoutPackInput = {
    where: PackPromptsWhereUniqueInput
    create: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput>
  }

  export type PackPromptsCreateManyPackInputEnvelope = {
    data: PackPromptsCreateManyPackInput | PackPromptsCreateManyPackInput[]
    skipDuplicates?: boolean
  }

  export type PackPromptsUpsertWithWhereUniqueWithoutPackInput = {
    where: PackPromptsWhereUniqueInput
    update: XOR<PackPromptsUpdateWithoutPackInput, PackPromptsUncheckedUpdateWithoutPackInput>
    create: XOR<PackPromptsCreateWithoutPackInput, PackPromptsUncheckedCreateWithoutPackInput>
  }

  export type PackPromptsUpdateWithWhereUniqueWithoutPackInput = {
    where: PackPromptsWhereUniqueInput
    data: XOR<PackPromptsUpdateWithoutPackInput, PackPromptsUncheckedUpdateWithoutPackInput>
  }

  export type PackPromptsUpdateManyWithWhereWithoutPackInput = {
    where: PackPromptsScalarWhereInput
    data: XOR<PackPromptsUpdateManyMutationInput, PackPromptsUncheckedUpdateManyWithoutPackInput>
  }

  export type PackPromptsScalarWhereInput = {
    AND?: PackPromptsScalarWhereInput | PackPromptsScalarWhereInput[]
    OR?: PackPromptsScalarWhereInput[]
    NOT?: PackPromptsScalarWhereInput | PackPromptsScalarWhereInput[]
    id?: StringFilter<"PackPrompts"> | string
    prompt?: StringFilter<"PackPrompts"> | string
    packId?: StringFilter<"PackPrompts"> | string
  }

  export type PacksCreateWithoutPackPromptsInput = {
    id?: string
    name: string
  }

  export type PacksUncheckedCreateWithoutPackPromptsInput = {
    id?: string
    name: string
  }

  export type PacksCreateOrConnectWithoutPackPromptsInput = {
    where: PacksWhereUniqueInput
    create: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
  }

  export type PacksUpsertWithoutPackPromptsInput = {
    update: XOR<PacksUpdateWithoutPackPromptsInput, PacksUncheckedUpdateWithoutPackPromptsInput>
    create: XOR<PacksCreateWithoutPackPromptsInput, PacksUncheckedCreateWithoutPackPromptsInput>
    where?: PacksWhereInput
  }

  export type PacksUpdateToOneWithWhereWithoutPackPromptsInput = {
    where?: PacksWhereInput
    data: XOR<PacksUpdateWithoutPackPromptsInput, PacksUncheckedUpdateWithoutPackPromptsInput>
  }

  export type PacksUpdateWithoutPackPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PacksUncheckedUpdateWithoutPackPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OutputImagesCreateManyModelInput = {
    id?: string
    imageUrl?: string
    prompt: string
    status?: $Enums.OutputImagesStatusEnum
    userId: string
    falAiRequestId?: string | null
  }

  export type OutputImagesUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImagesUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputImagesUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    status?: EnumOutputImagesStatusEnumFieldUpdateOperationsInput | $Enums.OutputImagesStatusEnum
    userId?: StringFieldUpdateOperationsInput | string
    falAiRequestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackPromptsCreateManyPackInput = {
    id?: string
    prompt: string
  }

  export type PackPromptsUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsUncheckedUpdateWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
  }

  export type PackPromptsUncheckedUpdateManyWithoutPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
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