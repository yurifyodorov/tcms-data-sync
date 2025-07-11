
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
 * Model Run
 * 
 */
export type Run = $Result.DefaultSelection<Prisma.$RunPayload>
/**
 * Model RunFeature
 * 
 */
export type RunFeature = $Result.DefaultSelection<Prisma.$RunFeaturePayload>
/**
 * Model RunScenario
 * 
 */
export type RunScenario = $Result.DefaultSelection<Prisma.$RunScenarioPayload>
/**
 * Model RunStep
 * 
 */
export type RunStep = $Result.DefaultSelection<Prisma.$RunStepPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model ScenarioStep
 * 
 */
export type ScenarioStep = $Result.DefaultSelection<Prisma.$ScenarioStepPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model FeatureTag
 * 
 */
export type FeatureTag = $Result.DefaultSelection<Prisma.$FeatureTagPayload>
/**
 * Model ScenarioTag
 * 
 */
export type ScenarioTag = $Result.DefaultSelection<Prisma.$ScenarioTagPayload>
/**
 * Model MapNode
 * 
 */
export type MapNode = $Result.DefaultSelection<Prisma.$MapNodePayload>
/**
 * Model MapNodeFeatureData
 * 
 */
export type MapNodeFeatureData = $Result.DefaultSelection<Prisma.$MapNodeFeatureDataPayload>
/**
 * Model MapNodeImageData
 * 
 */
export type MapNodeImageData = $Result.DefaultSelection<Prisma.$MapNodeImageDataPayload>
/**
 * Model MapNodeDependency
 * 
 */
export type MapNodeDependency = $Result.DefaultSelection<Prisma.$MapNodeDependencyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  passed: 'passed',
  failed: 'failed',
  blocked: 'blocked',
  retest: 'retest',
  skipped: 'skipped',
  untested: 'untested',
  undefined: 'undefined'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Runs
 * const runs = await prisma.run.findMany()
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
   * // Fetch zero or more Runs
   * const runs = await prisma.run.findMany()
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
   * `prisma.run`: Exposes CRUD operations for the **Run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.run.findMany()
    * ```
    */
  get run(): Prisma.RunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runFeature`: Exposes CRUD operations for the **RunFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunFeatures
    * const runFeatures = await prisma.runFeature.findMany()
    * ```
    */
  get runFeature(): Prisma.RunFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runScenario`: Exposes CRUD operations for the **RunScenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunScenarios
    * const runScenarios = await prisma.runScenario.findMany()
    * ```
    */
  get runScenario(): Prisma.RunScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runStep`: Exposes CRUD operations for the **RunStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunSteps
    * const runSteps = await prisma.runStep.findMany()
    * ```
    */
  get runStep(): Prisma.RunStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenarioStep`: Exposes CRUD operations for the **ScenarioStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScenarioSteps
    * const scenarioSteps = await prisma.scenarioStep.findMany()
    * ```
    */
  get scenarioStep(): Prisma.ScenarioStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureTag`: Exposes CRUD operations for the **FeatureTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureTags
    * const featureTags = await prisma.featureTag.findMany()
    * ```
    */
  get featureTag(): Prisma.FeatureTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenarioTag`: Exposes CRUD operations for the **ScenarioTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScenarioTags
    * const scenarioTags = await prisma.scenarioTag.findMany()
    * ```
    */
  get scenarioTag(): Prisma.ScenarioTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapNode`: Exposes CRUD operations for the **MapNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapNodes
    * const mapNodes = await prisma.mapNode.findMany()
    * ```
    */
  get mapNode(): Prisma.MapNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapNodeFeatureData`: Exposes CRUD operations for the **MapNodeFeatureData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapNodeFeatureData
    * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findMany()
    * ```
    */
  get mapNodeFeatureData(): Prisma.MapNodeFeatureDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapNodeImageData`: Exposes CRUD operations for the **MapNodeImageData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapNodeImageData
    * const mapNodeImageData = await prisma.mapNodeImageData.findMany()
    * ```
    */
  get mapNodeImageData(): Prisma.MapNodeImageDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapNodeDependency`: Exposes CRUD operations for the **MapNodeDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapNodeDependencies
    * const mapNodeDependencies = await prisma.mapNodeDependency.findMany()
    * ```
    */
  get mapNodeDependency(): Prisma.MapNodeDependencyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Run: 'Run',
    RunFeature: 'RunFeature',
    RunScenario: 'RunScenario',
    RunStep: 'RunStep',
    Feature: 'Feature',
    Scenario: 'Scenario',
    Step: 'Step',
    ScenarioStep: 'ScenarioStep',
    Tag: 'Tag',
    FeatureTag: 'FeatureTag',
    ScenarioTag: 'ScenarioTag',
    MapNode: 'MapNode',
    MapNodeFeatureData: 'MapNodeFeatureData',
    MapNodeImageData: 'MapNodeImageData',
    MapNodeDependency: 'MapNodeDependency'
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
      modelProps: "run" | "runFeature" | "runScenario" | "runStep" | "feature" | "scenario" | "step" | "scenarioStep" | "tag" | "featureTag" | "scenarioTag" | "mapNode" | "mapNodeFeatureData" | "mapNodeImageData" | "mapNodeDependency"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Run: {
        payload: Prisma.$RunPayload<ExtArgs>
        fields: Prisma.RunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findFirst: {
            args: Prisma.RunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findMany: {
            args: Prisma.RunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          create: {
            args: Prisma.RunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          createMany: {
            args: Prisma.RunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          delete: {
            args: Prisma.RunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          update: {
            args: Prisma.RunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          deleteMany: {
            args: Prisma.RunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          upsert: {
            args: Prisma.RunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          aggregate: {
            args: Prisma.RunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRun>
          }
          groupBy: {
            args: Prisma.RunGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunCountArgs<ExtArgs>
            result: $Utils.Optional<RunCountAggregateOutputType> | number
          }
        }
      }
      RunFeature: {
        payload: Prisma.$RunFeaturePayload<ExtArgs>
        fields: Prisma.RunFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          findFirst: {
            args: Prisma.RunFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          findMany: {
            args: Prisma.RunFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>[]
          }
          create: {
            args: Prisma.RunFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          createMany: {
            args: Prisma.RunFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>[]
          }
          delete: {
            args: Prisma.RunFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          update: {
            args: Prisma.RunFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          deleteMany: {
            args: Prisma.RunFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>[]
          }
          upsert: {
            args: Prisma.RunFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunFeaturePayload>
          }
          aggregate: {
            args: Prisma.RunFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunFeature>
          }
          groupBy: {
            args: Prisma.RunFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<RunFeatureCountAggregateOutputType> | number
          }
        }
      }
      RunScenario: {
        payload: Prisma.$RunScenarioPayload<ExtArgs>
        fields: Prisma.RunScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          findFirst: {
            args: Prisma.RunScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          findMany: {
            args: Prisma.RunScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>[]
          }
          create: {
            args: Prisma.RunScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          createMany: {
            args: Prisma.RunScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>[]
          }
          delete: {
            args: Prisma.RunScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          update: {
            args: Prisma.RunScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          deleteMany: {
            args: Prisma.RunScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>[]
          }
          upsert: {
            args: Prisma.RunScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunScenarioPayload>
          }
          aggregate: {
            args: Prisma.RunScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunScenario>
          }
          groupBy: {
            args: Prisma.RunScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<RunScenarioCountAggregateOutputType> | number
          }
        }
      }
      RunStep: {
        payload: Prisma.$RunStepPayload<ExtArgs>
        fields: Prisma.RunStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          findFirst: {
            args: Prisma.RunStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          findMany: {
            args: Prisma.RunStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>[]
          }
          create: {
            args: Prisma.RunStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          createMany: {
            args: Prisma.RunStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>[]
          }
          delete: {
            args: Prisma.RunStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          update: {
            args: Prisma.RunStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          deleteMany: {
            args: Prisma.RunStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>[]
          }
          upsert: {
            args: Prisma.RunStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunStepPayload>
          }
          aggregate: {
            args: Prisma.RunStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunStep>
          }
          groupBy: {
            args: Prisma.RunStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunStepCountArgs<ExtArgs>
            result: $Utils.Optional<RunStepCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      ScenarioStep: {
        payload: Prisma.$ScenarioStepPayload<ExtArgs>
        fields: Prisma.ScenarioStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          findFirst: {
            args: Prisma.ScenarioStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          findMany: {
            args: Prisma.ScenarioStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>[]
          }
          create: {
            args: Prisma.ScenarioStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          createMany: {
            args: Prisma.ScenarioStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>[]
          }
          delete: {
            args: Prisma.ScenarioStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          update: {
            args: Prisma.ScenarioStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioStepPayload>
          }
          aggregate: {
            args: Prisma.ScenarioStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenarioStep>
          }
          groupBy: {
            args: Prisma.ScenarioStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioStepCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioStepCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      FeatureTag: {
        payload: Prisma.$FeatureTagPayload<ExtArgs>
        fields: Prisma.FeatureTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          findFirst: {
            args: Prisma.FeatureTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          findMany: {
            args: Prisma.FeatureTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>[]
          }
          create: {
            args: Prisma.FeatureTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          createMany: {
            args: Prisma.FeatureTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>[]
          }
          delete: {
            args: Prisma.FeatureTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          update: {
            args: Prisma.FeatureTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          deleteMany: {
            args: Prisma.FeatureTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>[]
          }
          upsert: {
            args: Prisma.FeatureTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureTagPayload>
          }
          aggregate: {
            args: Prisma.FeatureTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureTag>
          }
          groupBy: {
            args: Prisma.FeatureTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureTagCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureTagCountAggregateOutputType> | number
          }
        }
      }
      ScenarioTag: {
        payload: Prisma.$ScenarioTagPayload<ExtArgs>
        fields: Prisma.ScenarioTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          findFirst: {
            args: Prisma.ScenarioTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          findMany: {
            args: Prisma.ScenarioTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>[]
          }
          create: {
            args: Prisma.ScenarioTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          createMany: {
            args: Prisma.ScenarioTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>[]
          }
          delete: {
            args: Prisma.ScenarioTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          update: {
            args: Prisma.ScenarioTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioTagPayload>
          }
          aggregate: {
            args: Prisma.ScenarioTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenarioTag>
          }
          groupBy: {
            args: Prisma.ScenarioTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioTagCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioTagCountAggregateOutputType> | number
          }
        }
      }
      MapNode: {
        payload: Prisma.$MapNodePayload<ExtArgs>
        fields: Prisma.MapNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          findFirst: {
            args: Prisma.MapNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          findMany: {
            args: Prisma.MapNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          create: {
            args: Prisma.MapNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          createMany: {
            args: Prisma.MapNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          delete: {
            args: Prisma.MapNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          update: {
            args: Prisma.MapNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          deleteMany: {
            args: Prisma.MapNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          upsert: {
            args: Prisma.MapNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          aggregate: {
            args: Prisma.MapNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapNode>
          }
          groupBy: {
            args: Prisma.MapNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapNodeCountArgs<ExtArgs>
            result: $Utils.Optional<MapNodeCountAggregateOutputType> | number
          }
        }
      }
      MapNodeFeatureData: {
        payload: Prisma.$MapNodeFeatureDataPayload<ExtArgs>
        fields: Prisma.MapNodeFeatureDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapNodeFeatureDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapNodeFeatureDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          findFirst: {
            args: Prisma.MapNodeFeatureDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapNodeFeatureDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          findMany: {
            args: Prisma.MapNodeFeatureDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>[]
          }
          create: {
            args: Prisma.MapNodeFeatureDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          createMany: {
            args: Prisma.MapNodeFeatureDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapNodeFeatureDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>[]
          }
          delete: {
            args: Prisma.MapNodeFeatureDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          update: {
            args: Prisma.MapNodeFeatureDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          deleteMany: {
            args: Prisma.MapNodeFeatureDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapNodeFeatureDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapNodeFeatureDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>[]
          }
          upsert: {
            args: Prisma.MapNodeFeatureDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeFeatureDataPayload>
          }
          aggregate: {
            args: Prisma.MapNodeFeatureDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapNodeFeatureData>
          }
          groupBy: {
            args: Prisma.MapNodeFeatureDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapNodeFeatureDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapNodeFeatureDataCountArgs<ExtArgs>
            result: $Utils.Optional<MapNodeFeatureDataCountAggregateOutputType> | number
          }
        }
      }
      MapNodeImageData: {
        payload: Prisma.$MapNodeImageDataPayload<ExtArgs>
        fields: Prisma.MapNodeImageDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapNodeImageDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapNodeImageDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          findFirst: {
            args: Prisma.MapNodeImageDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapNodeImageDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          findMany: {
            args: Prisma.MapNodeImageDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>[]
          }
          create: {
            args: Prisma.MapNodeImageDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          createMany: {
            args: Prisma.MapNodeImageDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapNodeImageDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>[]
          }
          delete: {
            args: Prisma.MapNodeImageDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          update: {
            args: Prisma.MapNodeImageDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          deleteMany: {
            args: Prisma.MapNodeImageDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapNodeImageDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapNodeImageDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>[]
          }
          upsert: {
            args: Prisma.MapNodeImageDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeImageDataPayload>
          }
          aggregate: {
            args: Prisma.MapNodeImageDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapNodeImageData>
          }
          groupBy: {
            args: Prisma.MapNodeImageDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapNodeImageDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapNodeImageDataCountArgs<ExtArgs>
            result: $Utils.Optional<MapNodeImageDataCountAggregateOutputType> | number
          }
        }
      }
      MapNodeDependency: {
        payload: Prisma.$MapNodeDependencyPayload<ExtArgs>
        fields: Prisma.MapNodeDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapNodeDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapNodeDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          findFirst: {
            args: Prisma.MapNodeDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapNodeDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          findMany: {
            args: Prisma.MapNodeDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>[]
          }
          create: {
            args: Prisma.MapNodeDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          createMany: {
            args: Prisma.MapNodeDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapNodeDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>[]
          }
          delete: {
            args: Prisma.MapNodeDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          update: {
            args: Prisma.MapNodeDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          deleteMany: {
            args: Prisma.MapNodeDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapNodeDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapNodeDependencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>[]
          }
          upsert: {
            args: Prisma.MapNodeDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodeDependencyPayload>
          }
          aggregate: {
            args: Prisma.MapNodeDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapNodeDependency>
          }
          groupBy: {
            args: Prisma.MapNodeDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapNodeDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapNodeDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<MapNodeDependencyCountAggregateOutputType> | number
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
    run?: RunOmit
    runFeature?: RunFeatureOmit
    runScenario?: RunScenarioOmit
    runStep?: RunStepOmit
    feature?: FeatureOmit
    scenario?: ScenarioOmit
    step?: StepOmit
    scenarioStep?: ScenarioStepOmit
    tag?: TagOmit
    featureTag?: FeatureTagOmit
    scenarioTag?: ScenarioTagOmit
    mapNode?: MapNodeOmit
    mapNodeFeatureData?: MapNodeFeatureDataOmit
    mapNodeImageData?: MapNodeImageDataOmit
    mapNodeDependency?: MapNodeDependencyOmit
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
   * Count Type RunCountOutputType
   */

  export type RunCountOutputType = {
    RunFeature: number
    RunScenario: number
    RunStep: number
  }

  export type RunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RunFeature?: boolean | RunCountOutputTypeCountRunFeatureArgs
    RunScenario?: boolean | RunCountOutputTypeCountRunScenarioArgs
    RunStep?: boolean | RunCountOutputTypeCountRunStepArgs
  }

  // Custom InputTypes
  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunCountOutputType
     */
    select?: RunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountRunFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunFeatureWhereInput
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountRunScenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunScenarioWhereInput
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountRunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunStepWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    featureTags: number
    RunFeature: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureTags?: boolean | FeatureCountOutputTypeCountFeatureTagsArgs
    RunFeature?: boolean | FeatureCountOutputTypeCountRunFeatureArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountFeatureTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureTagWhereInput
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountRunFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunFeatureWhereInput
  }


  /**
   * Count Type ScenarioCountOutputType
   */

  export type ScenarioCountOutputType = {
    scenarioTags: number
    steps: number
    RunScenario: number
    RunStep: number
  }

  export type ScenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenarioTags?: boolean | ScenarioCountOutputTypeCountScenarioTagsArgs
    steps?: boolean | ScenarioCountOutputTypeCountStepsArgs
    RunScenario?: boolean | ScenarioCountOutputTypeCountRunScenarioArgs
    RunStep?: boolean | ScenarioCountOutputTypeCountRunStepArgs
  }

  // Custom InputTypes
  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioCountOutputType
     */
    select?: ScenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountScenarioTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioTagWhereInput
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioStepWhereInput
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountRunScenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunScenarioWhereInput
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountRunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunStepWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    ScenarioStep: number
    RunStep: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScenarioStep?: boolean | StepCountOutputTypeCountScenarioStepArgs
    RunStep?: boolean | StepCountOutputTypeCountRunStepArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountScenarioStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioStepWhereInput
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountRunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunStepWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    featureTags: number
    scenarioTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureTags?: boolean | TagCountOutputTypeCountFeatureTagsArgs
    scenarioTags?: boolean | TagCountOutputTypeCountScenarioTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountFeatureTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountScenarioTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioTagWhereInput
  }


  /**
   * Count Type MapNodeCountOutputType
   */

  export type MapNodeCountOutputType = {
    outgoingDependencies: number
    incomingDependencies: number
  }

  export type MapNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingDependencies?: boolean | MapNodeCountOutputTypeCountOutgoingDependenciesArgs
    incomingDependencies?: boolean | MapNodeCountOutputTypeCountIncomingDependenciesArgs
  }

  // Custom InputTypes
  /**
   * MapNodeCountOutputType without action
   */
  export type MapNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeCountOutputType
     */
    select?: MapNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapNodeCountOutputType without action
   */
  export type MapNodeCountOutputTypeCountOutgoingDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeDependencyWhereInput
  }

  /**
   * MapNodeCountOutputType without action
   */
  export type MapNodeCountOutputTypeCountIncomingDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeDependencyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Run
   */

  export type AggregateRun = {
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  export type RunAvgAggregateOutputType = {
    runNumber: number | null
    featuresCount: number | null
    scenariosCount: number | null
    stepsCount: number | null
    passCount: number | null
    failCount: number | null
    skipCount: number | null
    duration: number | null
  }

  export type RunSumAggregateOutputType = {
    runNumber: number | null
    featuresCount: number | null
    scenariosCount: number | null
    stepsCount: number | null
    passCount: number | null
    failCount: number | null
    skipCount: number | null
    duration: number | null
  }

  export type RunMinAggregateOutputType = {
    id: string | null
    runNumber: number | null
    status: $Enums.Status | null
    browser: string | null
    platform: string | null
    environment: string | null
    featuresCount: number | null
    scenariosCount: number | null
    stepsCount: number | null
    passCount: number | null
    failCount: number | null
    skipCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    duration: number | null
    auto: boolean | null
  }

  export type RunMaxAggregateOutputType = {
    id: string | null
    runNumber: number | null
    status: $Enums.Status | null
    browser: string | null
    platform: string | null
    environment: string | null
    featuresCount: number | null
    scenariosCount: number | null
    stepsCount: number | null
    passCount: number | null
    failCount: number | null
    skipCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    duration: number | null
    auto: boolean | null
  }

  export type RunCountAggregateOutputType = {
    id: number
    runNumber: number
    status: number
    browser: number
    platform: number
    environment: number
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount: number
    failCount: number
    skipCount: number
    createdAt: number
    updatedAt: number
    duration: number
    auto: number
    _all: number
  }


  export type RunAvgAggregateInputType = {
    runNumber?: true
    featuresCount?: true
    scenariosCount?: true
    stepsCount?: true
    passCount?: true
    failCount?: true
    skipCount?: true
    duration?: true
  }

  export type RunSumAggregateInputType = {
    runNumber?: true
    featuresCount?: true
    scenariosCount?: true
    stepsCount?: true
    passCount?: true
    failCount?: true
    skipCount?: true
    duration?: true
  }

  export type RunMinAggregateInputType = {
    id?: true
    runNumber?: true
    status?: true
    browser?: true
    platform?: true
    environment?: true
    featuresCount?: true
    scenariosCount?: true
    stepsCount?: true
    passCount?: true
    failCount?: true
    skipCount?: true
    createdAt?: true
    updatedAt?: true
    duration?: true
    auto?: true
  }

  export type RunMaxAggregateInputType = {
    id?: true
    runNumber?: true
    status?: true
    browser?: true
    platform?: true
    environment?: true
    featuresCount?: true
    scenariosCount?: true
    stepsCount?: true
    passCount?: true
    failCount?: true
    skipCount?: true
    createdAt?: true
    updatedAt?: true
    duration?: true
    auto?: true
  }

  export type RunCountAggregateInputType = {
    id?: true
    runNumber?: true
    status?: true
    browser?: true
    platform?: true
    environment?: true
    featuresCount?: true
    scenariosCount?: true
    stepsCount?: true
    passCount?: true
    failCount?: true
    skipCount?: true
    createdAt?: true
    updatedAt?: true
    duration?: true
    auto?: true
    _all?: true
  }

  export type RunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Run to aggregate.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Runs
    **/
    _count?: true | RunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunMaxAggregateInputType
  }

  export type GetRunAggregateType<T extends RunAggregateArgs> = {
        [P in keyof T & keyof AggregateRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRun[P]>
      : GetScalarType<T[P], AggregateRun[P]>
  }




  export type RunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
    orderBy?: RunOrderByWithAggregationInput | RunOrderByWithAggregationInput[]
    by: RunScalarFieldEnum[] | RunScalarFieldEnum
    having?: RunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCountAggregateInputType | true
    _avg?: RunAvgAggregateInputType
    _sum?: RunSumAggregateInputType
    _min?: RunMinAggregateInputType
    _max?: RunMaxAggregateInputType
  }

  export type RunGroupByOutputType = {
    id: string
    runNumber: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount: number
    failCount: number
    skipCount: number
    createdAt: Date
    updatedAt: Date
    duration: number | null
    auto: boolean
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  type GetRunGroupByPayload<T extends RunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunGroupByOutputType[P]>
            : GetScalarType<T[P], RunGroupByOutputType[P]>
        }
      >
    >


  export type RunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runNumber?: boolean
    status?: boolean
    browser?: boolean
    platform?: boolean
    environment?: boolean
    featuresCount?: boolean
    scenariosCount?: boolean
    stepsCount?: boolean
    passCount?: boolean
    failCount?: boolean
    skipCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    duration?: boolean
    auto?: boolean
    RunFeature?: boolean | Run$RunFeatureArgs<ExtArgs>
    RunScenario?: boolean | Run$RunScenarioArgs<ExtArgs>
    RunStep?: boolean | Run$RunStepArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runNumber?: boolean
    status?: boolean
    browser?: boolean
    platform?: boolean
    environment?: boolean
    featuresCount?: boolean
    scenariosCount?: boolean
    stepsCount?: boolean
    passCount?: boolean
    failCount?: boolean
    skipCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    duration?: boolean
    auto?: boolean
  }, ExtArgs["result"]["run"]>

  export type RunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runNumber?: boolean
    status?: boolean
    browser?: boolean
    platform?: boolean
    environment?: boolean
    featuresCount?: boolean
    scenariosCount?: boolean
    stepsCount?: boolean
    passCount?: boolean
    failCount?: boolean
    skipCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    duration?: boolean
    auto?: boolean
  }, ExtArgs["result"]["run"]>

  export type RunSelectScalar = {
    id?: boolean
    runNumber?: boolean
    status?: boolean
    browser?: boolean
    platform?: boolean
    environment?: boolean
    featuresCount?: boolean
    scenariosCount?: boolean
    stepsCount?: boolean
    passCount?: boolean
    failCount?: boolean
    skipCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    duration?: boolean
    auto?: boolean
  }

  export type RunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runNumber" | "status" | "browser" | "platform" | "environment" | "featuresCount" | "scenariosCount" | "stepsCount" | "passCount" | "failCount" | "skipCount" | "createdAt" | "updatedAt" | "duration" | "auto", ExtArgs["result"]["run"]>
  export type RunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RunFeature?: boolean | Run$RunFeatureArgs<ExtArgs>
    RunScenario?: boolean | Run$RunScenarioArgs<ExtArgs>
    RunStep?: boolean | Run$RunStepArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Run"
    objects: {
      RunFeature: Prisma.$RunFeaturePayload<ExtArgs>[]
      RunScenario: Prisma.$RunScenarioPayload<ExtArgs>[]
      RunStep: Prisma.$RunStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runNumber: number
      status: $Enums.Status
      browser: string
      platform: string
      environment: string
      featuresCount: number
      scenariosCount: number
      stepsCount: number
      passCount: number
      failCount: number
      skipCount: number
      createdAt: Date
      updatedAt: Date
      duration: number | null
      auto: boolean
    }, ExtArgs["result"]["run"]>
    composites: {}
  }

  type RunGetPayload<S extends boolean | null | undefined | RunDefaultArgs> = $Result.GetResult<Prisma.$RunPayload, S>

  type RunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunCountAggregateInputType | true
    }

  export interface RunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Run'], meta: { name: 'Run' } }
    /**
     * Find zero or one Run that matches the filter.
     * @param {RunFindUniqueArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFindUniqueArgs>(args: SelectSubset<T, RunFindUniqueArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFindUniqueOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFindFirstArgs>(args?: SelectSubset<T, RunFindFirstArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.run.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runWithIdOnly = await prisma.run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFindManyArgs>(args?: SelectSubset<T, RunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Run.
     * @param {RunCreateArgs} args - Arguments to create a Run.
     * @example
     * // Create one Run
     * const Run = await prisma.run.create({
     *   data: {
     *     // ... data to create a Run
     *   }
     * })
     * 
     */
    create<T extends RunCreateArgs>(args: SelectSubset<T, RunCreateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Runs.
     * @param {RunCreateManyArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunCreateManyArgs>(args?: SelectSubset<T, RunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Runs and returns the data saved in the database.
     * @param {RunCreateManyAndReturnArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunCreateManyAndReturnArgs>(args?: SelectSubset<T, RunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Run.
     * @param {RunDeleteArgs} args - Arguments to delete one Run.
     * @example
     * // Delete one Run
     * const Run = await prisma.run.delete({
     *   where: {
     *     // ... filter to delete one Run
     *   }
     * })
     * 
     */
    delete<T extends RunDeleteArgs>(args: SelectSubset<T, RunDeleteArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Run.
     * @param {RunUpdateArgs} args - Arguments to update one Run.
     * @example
     * // Update one Run
     * const run = await prisma.run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunUpdateArgs>(args: SelectSubset<T, RunUpdateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Runs.
     * @param {RunDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunDeleteManyArgs>(args?: SelectSubset<T, RunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunUpdateManyArgs>(args: SelectSubset<T, RunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs and returns the data updated in the database.
     * @param {RunUpdateManyAndReturnArgs} args - Arguments to update many Runs.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunUpdateManyAndReturnArgs>(args: SelectSubset<T, RunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Run.
     * @param {RunUpsertArgs} args - Arguments to update or create a Run.
     * @example
     * // Update or create a Run
     * const run = await prisma.run.upsert({
     *   create: {
     *     // ... data to create a Run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Run we want to update
     *   }
     * })
     */
    upsert<T extends RunUpsertArgs>(args: SelectSubset<T, RunUpsertArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.run.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends RunCountArgs>(
      args?: Subset<T, RunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunAggregateArgs>(args: Subset<T, RunAggregateArgs>): Prisma.PrismaPromise<GetRunAggregateType<T>>

    /**
     * Group by Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunGroupByArgs} args - Group by arguments.
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
      T extends RunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunGroupByArgs['orderBy'] }
        : { orderBy?: RunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Run model
   */
  readonly fields: RunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RunFeature<T extends Run$RunFeatureArgs<ExtArgs> = {}>(args?: Subset<T, Run$RunFeatureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunScenario<T extends Run$RunScenarioArgs<ExtArgs> = {}>(args?: Subset<T, Run$RunScenarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunStep<T extends Run$RunStepArgs<ExtArgs> = {}>(args?: Subset<T, Run$RunStepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Run model
   */
  interface RunFieldRefs {
    readonly id: FieldRef<"Run", 'String'>
    readonly runNumber: FieldRef<"Run", 'Int'>
    readonly status: FieldRef<"Run", 'Status'>
    readonly browser: FieldRef<"Run", 'String'>
    readonly platform: FieldRef<"Run", 'String'>
    readonly environment: FieldRef<"Run", 'String'>
    readonly featuresCount: FieldRef<"Run", 'Int'>
    readonly scenariosCount: FieldRef<"Run", 'Int'>
    readonly stepsCount: FieldRef<"Run", 'Int'>
    readonly passCount: FieldRef<"Run", 'Int'>
    readonly failCount: FieldRef<"Run", 'Int'>
    readonly skipCount: FieldRef<"Run", 'Int'>
    readonly createdAt: FieldRef<"Run", 'DateTime'>
    readonly updatedAt: FieldRef<"Run", 'DateTime'>
    readonly duration: FieldRef<"Run", 'Int'>
    readonly auto: FieldRef<"Run", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Run findUnique
   */
  export type RunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findUniqueOrThrow
   */
  export type RunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findFirst
   */
  export type RunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findFirstOrThrow
   */
  export type RunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findMany
   */
  export type RunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Runs to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run create
   */
  export type RunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to create a Run.
     */
    data: XOR<RunCreateInput, RunUncheckedCreateInput>
  }

  /**
   * Run createMany
   */
  export type RunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Run createManyAndReturn
   */
  export type RunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Run update
   */
  export type RunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to update a Run.
     */
    data: XOR<RunUpdateInput, RunUncheckedUpdateInput>
    /**
     * Choose, which Run to update.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run updateMany
   */
  export type RunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run updateManyAndReturn
   */
  export type RunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run upsert
   */
  export type RunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The filter to search for the Run to update in case it exists.
     */
    where: RunWhereUniqueInput
    /**
     * In case the Run found by the `where` argument doesn't exist, create a new Run with this data.
     */
    create: XOR<RunCreateInput, RunUncheckedCreateInput>
    /**
     * In case the Run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunUpdateInput, RunUncheckedUpdateInput>
  }

  /**
   * Run delete
   */
  export type RunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter which Run to delete.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run deleteMany
   */
  export type RunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Runs to delete
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to delete.
     */
    limit?: number
  }

  /**
   * Run.RunFeature
   */
  export type Run$RunFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    where?: RunFeatureWhereInput
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    cursor?: RunFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunFeatureScalarFieldEnum | RunFeatureScalarFieldEnum[]
  }

  /**
   * Run.RunScenario
   */
  export type Run$RunScenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    where?: RunScenarioWhereInput
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    cursor?: RunScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScenarioScalarFieldEnum | RunScenarioScalarFieldEnum[]
  }

  /**
   * Run.RunStep
   */
  export type Run$RunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    where?: RunStepWhereInput
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    cursor?: RunStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * Run without action
   */
  export type RunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
  }


  /**
   * Model RunFeature
   */

  export type AggregateRunFeature = {
    _count: RunFeatureCountAggregateOutputType | null
    _avg: RunFeatureAvgAggregateOutputType | null
    _sum: RunFeatureSumAggregateOutputType | null
    _min: RunFeatureMinAggregateOutputType | null
    _max: RunFeatureMaxAggregateOutputType | null
  }

  export type RunFeatureAvgAggregateOutputType = {
    duration: number | null
  }

  export type RunFeatureSumAggregateOutputType = {
    duration: number | null
  }

  export type RunFeatureMinAggregateOutputType = {
    id: string | null
    runId: string | null
    featureId: string | null
    status: $Enums.Status | null
    duration: number | null
    createdAt: Date | null
  }

  export type RunFeatureMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    featureId: string | null
    status: $Enums.Status | null
    duration: number | null
    createdAt: Date | null
  }

  export type RunFeatureCountAggregateOutputType = {
    id: number
    runId: number
    featureId: number
    status: number
    duration: number
    createdAt: number
    _all: number
  }


  export type RunFeatureAvgAggregateInputType = {
    duration?: true
  }

  export type RunFeatureSumAggregateInputType = {
    duration?: true
  }

  export type RunFeatureMinAggregateInputType = {
    id?: true
    runId?: true
    featureId?: true
    status?: true
    duration?: true
    createdAt?: true
  }

  export type RunFeatureMaxAggregateInputType = {
    id?: true
    runId?: true
    featureId?: true
    status?: true
    duration?: true
    createdAt?: true
  }

  export type RunFeatureCountAggregateInputType = {
    id?: true
    runId?: true
    featureId?: true
    status?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type RunFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunFeature to aggregate.
     */
    where?: RunFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunFeatures to fetch.
     */
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunFeatures
    **/
    _count?: true | RunFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunFeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunFeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunFeatureMaxAggregateInputType
  }

  export type GetRunFeatureAggregateType<T extends RunFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateRunFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunFeature[P]>
      : GetScalarType<T[P], AggregateRunFeature[P]>
  }




  export type RunFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunFeatureWhereInput
    orderBy?: RunFeatureOrderByWithAggregationInput | RunFeatureOrderByWithAggregationInput[]
    by: RunFeatureScalarFieldEnum[] | RunFeatureScalarFieldEnum
    having?: RunFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunFeatureCountAggregateInputType | true
    _avg?: RunFeatureAvgAggregateInputType
    _sum?: RunFeatureSumAggregateInputType
    _min?: RunFeatureMinAggregateInputType
    _max?: RunFeatureMaxAggregateInputType
  }

  export type RunFeatureGroupByOutputType = {
    id: string
    runId: string
    featureId: string
    status: $Enums.Status
    duration: number | null
    createdAt: Date
    _count: RunFeatureCountAggregateOutputType | null
    _avg: RunFeatureAvgAggregateOutputType | null
    _sum: RunFeatureSumAggregateOutputType | null
    _min: RunFeatureMinAggregateOutputType | null
    _max: RunFeatureMaxAggregateOutputType | null
  }

  type GetRunFeatureGroupByPayload<T extends RunFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], RunFeatureGroupByOutputType[P]>
        }
      >
    >


  export type RunFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    featureId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runFeature"]>

  export type RunFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    featureId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runFeature"]>

  export type RunFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    featureId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runFeature"]>

  export type RunFeatureSelectScalar = {
    id?: boolean
    runId?: boolean
    featureId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type RunFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "featureId" | "status" | "duration" | "createdAt", ExtArgs["result"]["runFeature"]>
  export type RunFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type RunFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type RunFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $RunFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunFeature"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
      feature: Prisma.$FeaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      featureId: string
      status: $Enums.Status
      duration: number | null
      createdAt: Date
    }, ExtArgs["result"]["runFeature"]>
    composites: {}
  }

  type RunFeatureGetPayload<S extends boolean | null | undefined | RunFeatureDefaultArgs> = $Result.GetResult<Prisma.$RunFeaturePayload, S>

  type RunFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunFeatureCountAggregateInputType | true
    }

  export interface RunFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunFeature'], meta: { name: 'RunFeature' } }
    /**
     * Find zero or one RunFeature that matches the filter.
     * @param {RunFeatureFindUniqueArgs} args - Arguments to find a RunFeature
     * @example
     * // Get one RunFeature
     * const runFeature = await prisma.runFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFeatureFindUniqueArgs>(args: SelectSubset<T, RunFeatureFindUniqueArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFeatureFindUniqueOrThrowArgs} args - Arguments to find a RunFeature
     * @example
     * // Get one RunFeature
     * const runFeature = await prisma.runFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureFindFirstArgs} args - Arguments to find a RunFeature
     * @example
     * // Get one RunFeature
     * const runFeature = await prisma.runFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFeatureFindFirstArgs>(args?: SelectSubset<T, RunFeatureFindFirstArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureFindFirstOrThrowArgs} args - Arguments to find a RunFeature
     * @example
     * // Get one RunFeature
     * const runFeature = await prisma.runFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunFeatures
     * const runFeatures = await prisma.runFeature.findMany()
     * 
     * // Get first 10 RunFeatures
     * const runFeatures = await prisma.runFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runFeatureWithIdOnly = await prisma.runFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFeatureFindManyArgs>(args?: SelectSubset<T, RunFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunFeature.
     * @param {RunFeatureCreateArgs} args - Arguments to create a RunFeature.
     * @example
     * // Create one RunFeature
     * const RunFeature = await prisma.runFeature.create({
     *   data: {
     *     // ... data to create a RunFeature
     *   }
     * })
     * 
     */
    create<T extends RunFeatureCreateArgs>(args: SelectSubset<T, RunFeatureCreateArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunFeatures.
     * @param {RunFeatureCreateManyArgs} args - Arguments to create many RunFeatures.
     * @example
     * // Create many RunFeatures
     * const runFeature = await prisma.runFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunFeatureCreateManyArgs>(args?: SelectSubset<T, RunFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunFeatures and returns the data saved in the database.
     * @param {RunFeatureCreateManyAndReturnArgs} args - Arguments to create many RunFeatures.
     * @example
     * // Create many RunFeatures
     * const runFeature = await prisma.runFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunFeatures and only return the `id`
     * const runFeatureWithIdOnly = await prisma.runFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, RunFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunFeature.
     * @param {RunFeatureDeleteArgs} args - Arguments to delete one RunFeature.
     * @example
     * // Delete one RunFeature
     * const RunFeature = await prisma.runFeature.delete({
     *   where: {
     *     // ... filter to delete one RunFeature
     *   }
     * })
     * 
     */
    delete<T extends RunFeatureDeleteArgs>(args: SelectSubset<T, RunFeatureDeleteArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunFeature.
     * @param {RunFeatureUpdateArgs} args - Arguments to update one RunFeature.
     * @example
     * // Update one RunFeature
     * const runFeature = await prisma.runFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunFeatureUpdateArgs>(args: SelectSubset<T, RunFeatureUpdateArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunFeatures.
     * @param {RunFeatureDeleteManyArgs} args - Arguments to filter RunFeatures to delete.
     * @example
     * // Delete a few RunFeatures
     * const { count } = await prisma.runFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunFeatureDeleteManyArgs>(args?: SelectSubset<T, RunFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunFeatures
     * const runFeature = await prisma.runFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunFeatureUpdateManyArgs>(args: SelectSubset<T, RunFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunFeatures and returns the data updated in the database.
     * @param {RunFeatureUpdateManyAndReturnArgs} args - Arguments to update many RunFeatures.
     * @example
     * // Update many RunFeatures
     * const runFeature = await prisma.runFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunFeatures and only return the `id`
     * const runFeatureWithIdOnly = await prisma.runFeature.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, RunFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunFeature.
     * @param {RunFeatureUpsertArgs} args - Arguments to update or create a RunFeature.
     * @example
     * // Update or create a RunFeature
     * const runFeature = await prisma.runFeature.upsert({
     *   create: {
     *     // ... data to create a RunFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunFeature we want to update
     *   }
     * })
     */
    upsert<T extends RunFeatureUpsertArgs>(args: SelectSubset<T, RunFeatureUpsertArgs<ExtArgs>>): Prisma__RunFeatureClient<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureCountArgs} args - Arguments to filter RunFeatures to count.
     * @example
     * // Count the number of RunFeatures
     * const count = await prisma.runFeature.count({
     *   where: {
     *     // ... the filter for the RunFeatures we want to count
     *   }
     * })
    **/
    count<T extends RunFeatureCountArgs>(
      args?: Subset<T, RunFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunFeatureAggregateArgs>(args: Subset<T, RunFeatureAggregateArgs>): Prisma.PrismaPromise<GetRunFeatureAggregateType<T>>

    /**
     * Group by RunFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFeatureGroupByArgs} args - Group by arguments.
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
      T extends RunFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunFeatureGroupByArgs['orderBy'] }
        : { orderBy?: RunFeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunFeature model
   */
  readonly fields: RunFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RunFeature model
   */
  interface RunFeatureFieldRefs {
    readonly id: FieldRef<"RunFeature", 'String'>
    readonly runId: FieldRef<"RunFeature", 'String'>
    readonly featureId: FieldRef<"RunFeature", 'String'>
    readonly status: FieldRef<"RunFeature", 'Status'>
    readonly duration: FieldRef<"RunFeature", 'Int'>
    readonly createdAt: FieldRef<"RunFeature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RunFeature findUnique
   */
  export type RunFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter, which RunFeature to fetch.
     */
    where: RunFeatureWhereUniqueInput
  }

  /**
   * RunFeature findUniqueOrThrow
   */
  export type RunFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter, which RunFeature to fetch.
     */
    where: RunFeatureWhereUniqueInput
  }

  /**
   * RunFeature findFirst
   */
  export type RunFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter, which RunFeature to fetch.
     */
    where?: RunFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunFeatures to fetch.
     */
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunFeatures.
     */
    cursor?: RunFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunFeatures.
     */
    distinct?: RunFeatureScalarFieldEnum | RunFeatureScalarFieldEnum[]
  }

  /**
   * RunFeature findFirstOrThrow
   */
  export type RunFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter, which RunFeature to fetch.
     */
    where?: RunFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunFeatures to fetch.
     */
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunFeatures.
     */
    cursor?: RunFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunFeatures.
     */
    distinct?: RunFeatureScalarFieldEnum | RunFeatureScalarFieldEnum[]
  }

  /**
   * RunFeature findMany
   */
  export type RunFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter, which RunFeatures to fetch.
     */
    where?: RunFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunFeatures to fetch.
     */
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunFeatures.
     */
    cursor?: RunFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunFeatures.
     */
    skip?: number
    distinct?: RunFeatureScalarFieldEnum | RunFeatureScalarFieldEnum[]
  }

  /**
   * RunFeature create
   */
  export type RunFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a RunFeature.
     */
    data: XOR<RunFeatureCreateInput, RunFeatureUncheckedCreateInput>
  }

  /**
   * RunFeature createMany
   */
  export type RunFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunFeatures.
     */
    data: RunFeatureCreateManyInput | RunFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RunFeature createManyAndReturn
   */
  export type RunFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many RunFeatures.
     */
    data: RunFeatureCreateManyInput | RunFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunFeature update
   */
  export type RunFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a RunFeature.
     */
    data: XOR<RunFeatureUpdateInput, RunFeatureUncheckedUpdateInput>
    /**
     * Choose, which RunFeature to update.
     */
    where: RunFeatureWhereUniqueInput
  }

  /**
   * RunFeature updateMany
   */
  export type RunFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunFeatures.
     */
    data: XOR<RunFeatureUpdateManyMutationInput, RunFeatureUncheckedUpdateManyInput>
    /**
     * Filter which RunFeatures to update
     */
    where?: RunFeatureWhereInput
    /**
     * Limit how many RunFeatures to update.
     */
    limit?: number
  }

  /**
   * RunFeature updateManyAndReturn
   */
  export type RunFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * The data used to update RunFeatures.
     */
    data: XOR<RunFeatureUpdateManyMutationInput, RunFeatureUncheckedUpdateManyInput>
    /**
     * Filter which RunFeatures to update
     */
    where?: RunFeatureWhereInput
    /**
     * Limit how many RunFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunFeature upsert
   */
  export type RunFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the RunFeature to update in case it exists.
     */
    where: RunFeatureWhereUniqueInput
    /**
     * In case the RunFeature found by the `where` argument doesn't exist, create a new RunFeature with this data.
     */
    create: XOR<RunFeatureCreateInput, RunFeatureUncheckedCreateInput>
    /**
     * In case the RunFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunFeatureUpdateInput, RunFeatureUncheckedUpdateInput>
  }

  /**
   * RunFeature delete
   */
  export type RunFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    /**
     * Filter which RunFeature to delete.
     */
    where: RunFeatureWhereUniqueInput
  }

  /**
   * RunFeature deleteMany
   */
  export type RunFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunFeatures to delete
     */
    where?: RunFeatureWhereInput
    /**
     * Limit how many RunFeatures to delete.
     */
    limit?: number
  }

  /**
   * RunFeature without action
   */
  export type RunFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
  }


  /**
   * Model RunScenario
   */

  export type AggregateRunScenario = {
    _count: RunScenarioCountAggregateOutputType | null
    _avg: RunScenarioAvgAggregateOutputType | null
    _sum: RunScenarioSumAggregateOutputType | null
    _min: RunScenarioMinAggregateOutputType | null
    _max: RunScenarioMaxAggregateOutputType | null
  }

  export type RunScenarioAvgAggregateOutputType = {
    duration: number | null
  }

  export type RunScenarioSumAggregateOutputType = {
    duration: number | null
  }

  export type RunScenarioMinAggregateOutputType = {
    id: string | null
    runId: string | null
    scenarioId: string | null
    status: $Enums.Status | null
    duration: number | null
    createdAt: Date | null
  }

  export type RunScenarioMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    scenarioId: string | null
    status: $Enums.Status | null
    duration: number | null
    createdAt: Date | null
  }

  export type RunScenarioCountAggregateOutputType = {
    id: number
    runId: number
    scenarioId: number
    status: number
    duration: number
    createdAt: number
    _all: number
  }


  export type RunScenarioAvgAggregateInputType = {
    duration?: true
  }

  export type RunScenarioSumAggregateInputType = {
    duration?: true
  }

  export type RunScenarioMinAggregateInputType = {
    id?: true
    runId?: true
    scenarioId?: true
    status?: true
    duration?: true
    createdAt?: true
  }

  export type RunScenarioMaxAggregateInputType = {
    id?: true
    runId?: true
    scenarioId?: true
    status?: true
    duration?: true
    createdAt?: true
  }

  export type RunScenarioCountAggregateInputType = {
    id?: true
    runId?: true
    scenarioId?: true
    status?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type RunScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunScenario to aggregate.
     */
    where?: RunScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunScenarios to fetch.
     */
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunScenarios
    **/
    _count?: true | RunScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunScenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunScenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunScenarioMaxAggregateInputType
  }

  export type GetRunScenarioAggregateType<T extends RunScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRunScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunScenario[P]>
      : GetScalarType<T[P], AggregateRunScenario[P]>
  }




  export type RunScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunScenarioWhereInput
    orderBy?: RunScenarioOrderByWithAggregationInput | RunScenarioOrderByWithAggregationInput[]
    by: RunScenarioScalarFieldEnum[] | RunScenarioScalarFieldEnum
    having?: RunScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunScenarioCountAggregateInputType | true
    _avg?: RunScenarioAvgAggregateInputType
    _sum?: RunScenarioSumAggregateInputType
    _min?: RunScenarioMinAggregateInputType
    _max?: RunScenarioMaxAggregateInputType
  }

  export type RunScenarioGroupByOutputType = {
    id: string
    runId: string
    scenarioId: string
    status: $Enums.Status
    duration: number | null
    createdAt: Date
    _count: RunScenarioCountAggregateOutputType | null
    _avg: RunScenarioAvgAggregateOutputType | null
    _sum: RunScenarioSumAggregateOutputType | null
    _min: RunScenarioMinAggregateOutputType | null
    _max: RunScenarioMaxAggregateOutputType | null
  }

  type GetRunScenarioGroupByPayload<T extends RunScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], RunScenarioGroupByOutputType[P]>
        }
      >
    >


  export type RunScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runScenario"]>

  export type RunScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runScenario"]>

  export type RunScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runScenario"]>

  export type RunScenarioSelectScalar = {
    id?: boolean
    runId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type RunScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "scenarioId" | "status" | "duration" | "createdAt", ExtArgs["result"]["runScenario"]>
  export type RunScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type RunScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type RunScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }

  export type $RunScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunScenario"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
      scenario: Prisma.$ScenarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      scenarioId: string
      status: $Enums.Status
      duration: number | null
      createdAt: Date
    }, ExtArgs["result"]["runScenario"]>
    composites: {}
  }

  type RunScenarioGetPayload<S extends boolean | null | undefined | RunScenarioDefaultArgs> = $Result.GetResult<Prisma.$RunScenarioPayload, S>

  type RunScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunScenarioCountAggregateInputType | true
    }

  export interface RunScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunScenario'], meta: { name: 'RunScenario' } }
    /**
     * Find zero or one RunScenario that matches the filter.
     * @param {RunScenarioFindUniqueArgs} args - Arguments to find a RunScenario
     * @example
     * // Get one RunScenario
     * const runScenario = await prisma.runScenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunScenarioFindUniqueArgs>(args: SelectSubset<T, RunScenarioFindUniqueArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunScenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunScenarioFindUniqueOrThrowArgs} args - Arguments to find a RunScenario
     * @example
     * // Get one RunScenario
     * const runScenario = await prisma.runScenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, RunScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunScenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioFindFirstArgs} args - Arguments to find a RunScenario
     * @example
     * // Get one RunScenario
     * const runScenario = await prisma.runScenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunScenarioFindFirstArgs>(args?: SelectSubset<T, RunScenarioFindFirstArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunScenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioFindFirstOrThrowArgs} args - Arguments to find a RunScenario
     * @example
     * // Get one RunScenario
     * const runScenario = await prisma.runScenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, RunScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunScenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunScenarios
     * const runScenarios = await prisma.runScenario.findMany()
     * 
     * // Get first 10 RunScenarios
     * const runScenarios = await prisma.runScenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runScenarioWithIdOnly = await prisma.runScenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunScenarioFindManyArgs>(args?: SelectSubset<T, RunScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunScenario.
     * @param {RunScenarioCreateArgs} args - Arguments to create a RunScenario.
     * @example
     * // Create one RunScenario
     * const RunScenario = await prisma.runScenario.create({
     *   data: {
     *     // ... data to create a RunScenario
     *   }
     * })
     * 
     */
    create<T extends RunScenarioCreateArgs>(args: SelectSubset<T, RunScenarioCreateArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunScenarios.
     * @param {RunScenarioCreateManyArgs} args - Arguments to create many RunScenarios.
     * @example
     * // Create many RunScenarios
     * const runScenario = await prisma.runScenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunScenarioCreateManyArgs>(args?: SelectSubset<T, RunScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunScenarios and returns the data saved in the database.
     * @param {RunScenarioCreateManyAndReturnArgs} args - Arguments to create many RunScenarios.
     * @example
     * // Create many RunScenarios
     * const runScenario = await prisma.runScenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunScenarios and only return the `id`
     * const runScenarioWithIdOnly = await prisma.runScenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, RunScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunScenario.
     * @param {RunScenarioDeleteArgs} args - Arguments to delete one RunScenario.
     * @example
     * // Delete one RunScenario
     * const RunScenario = await prisma.runScenario.delete({
     *   where: {
     *     // ... filter to delete one RunScenario
     *   }
     * })
     * 
     */
    delete<T extends RunScenarioDeleteArgs>(args: SelectSubset<T, RunScenarioDeleteArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunScenario.
     * @param {RunScenarioUpdateArgs} args - Arguments to update one RunScenario.
     * @example
     * // Update one RunScenario
     * const runScenario = await prisma.runScenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunScenarioUpdateArgs>(args: SelectSubset<T, RunScenarioUpdateArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunScenarios.
     * @param {RunScenarioDeleteManyArgs} args - Arguments to filter RunScenarios to delete.
     * @example
     * // Delete a few RunScenarios
     * const { count } = await prisma.runScenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunScenarioDeleteManyArgs>(args?: SelectSubset<T, RunScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunScenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunScenarios
     * const runScenario = await prisma.runScenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunScenarioUpdateManyArgs>(args: SelectSubset<T, RunScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunScenarios and returns the data updated in the database.
     * @param {RunScenarioUpdateManyAndReturnArgs} args - Arguments to update many RunScenarios.
     * @example
     * // Update many RunScenarios
     * const runScenario = await prisma.runScenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunScenarios and only return the `id`
     * const runScenarioWithIdOnly = await prisma.runScenario.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, RunScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunScenario.
     * @param {RunScenarioUpsertArgs} args - Arguments to update or create a RunScenario.
     * @example
     * // Update or create a RunScenario
     * const runScenario = await prisma.runScenario.upsert({
     *   create: {
     *     // ... data to create a RunScenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunScenario we want to update
     *   }
     * })
     */
    upsert<T extends RunScenarioUpsertArgs>(args: SelectSubset<T, RunScenarioUpsertArgs<ExtArgs>>): Prisma__RunScenarioClient<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunScenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioCountArgs} args - Arguments to filter RunScenarios to count.
     * @example
     * // Count the number of RunScenarios
     * const count = await prisma.runScenario.count({
     *   where: {
     *     // ... the filter for the RunScenarios we want to count
     *   }
     * })
    **/
    count<T extends RunScenarioCountArgs>(
      args?: Subset<T, RunScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunScenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunScenarioAggregateArgs>(args: Subset<T, RunScenarioAggregateArgs>): Prisma.PrismaPromise<GetRunScenarioAggregateType<T>>

    /**
     * Group by RunScenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunScenarioGroupByArgs} args - Group by arguments.
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
      T extends RunScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunScenarioGroupByArgs['orderBy'] }
        : { orderBy?: RunScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunScenario model
   */
  readonly fields: RunScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunScenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RunScenario model
   */
  interface RunScenarioFieldRefs {
    readonly id: FieldRef<"RunScenario", 'String'>
    readonly runId: FieldRef<"RunScenario", 'String'>
    readonly scenarioId: FieldRef<"RunScenario", 'String'>
    readonly status: FieldRef<"RunScenario", 'Status'>
    readonly duration: FieldRef<"RunScenario", 'Int'>
    readonly createdAt: FieldRef<"RunScenario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RunScenario findUnique
   */
  export type RunScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter, which RunScenario to fetch.
     */
    where: RunScenarioWhereUniqueInput
  }

  /**
   * RunScenario findUniqueOrThrow
   */
  export type RunScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter, which RunScenario to fetch.
     */
    where: RunScenarioWhereUniqueInput
  }

  /**
   * RunScenario findFirst
   */
  export type RunScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter, which RunScenario to fetch.
     */
    where?: RunScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunScenarios to fetch.
     */
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunScenarios.
     */
    cursor?: RunScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunScenarios.
     */
    distinct?: RunScenarioScalarFieldEnum | RunScenarioScalarFieldEnum[]
  }

  /**
   * RunScenario findFirstOrThrow
   */
  export type RunScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter, which RunScenario to fetch.
     */
    where?: RunScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunScenarios to fetch.
     */
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunScenarios.
     */
    cursor?: RunScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunScenarios.
     */
    distinct?: RunScenarioScalarFieldEnum | RunScenarioScalarFieldEnum[]
  }

  /**
   * RunScenario findMany
   */
  export type RunScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter, which RunScenarios to fetch.
     */
    where?: RunScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunScenarios to fetch.
     */
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunScenarios.
     */
    cursor?: RunScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunScenarios.
     */
    skip?: number
    distinct?: RunScenarioScalarFieldEnum | RunScenarioScalarFieldEnum[]
  }

  /**
   * RunScenario create
   */
  export type RunScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a RunScenario.
     */
    data: XOR<RunScenarioCreateInput, RunScenarioUncheckedCreateInput>
  }

  /**
   * RunScenario createMany
   */
  export type RunScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunScenarios.
     */
    data: RunScenarioCreateManyInput | RunScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RunScenario createManyAndReturn
   */
  export type RunScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many RunScenarios.
     */
    data: RunScenarioCreateManyInput | RunScenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunScenario update
   */
  export type RunScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a RunScenario.
     */
    data: XOR<RunScenarioUpdateInput, RunScenarioUncheckedUpdateInput>
    /**
     * Choose, which RunScenario to update.
     */
    where: RunScenarioWhereUniqueInput
  }

  /**
   * RunScenario updateMany
   */
  export type RunScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunScenarios.
     */
    data: XOR<RunScenarioUpdateManyMutationInput, RunScenarioUncheckedUpdateManyInput>
    /**
     * Filter which RunScenarios to update
     */
    where?: RunScenarioWhereInput
    /**
     * Limit how many RunScenarios to update.
     */
    limit?: number
  }

  /**
   * RunScenario updateManyAndReturn
   */
  export type RunScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * The data used to update RunScenarios.
     */
    data: XOR<RunScenarioUpdateManyMutationInput, RunScenarioUncheckedUpdateManyInput>
    /**
     * Filter which RunScenarios to update
     */
    where?: RunScenarioWhereInput
    /**
     * Limit how many RunScenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunScenario upsert
   */
  export type RunScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the RunScenario to update in case it exists.
     */
    where: RunScenarioWhereUniqueInput
    /**
     * In case the RunScenario found by the `where` argument doesn't exist, create a new RunScenario with this data.
     */
    create: XOR<RunScenarioCreateInput, RunScenarioUncheckedCreateInput>
    /**
     * In case the RunScenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunScenarioUpdateInput, RunScenarioUncheckedUpdateInput>
  }

  /**
   * RunScenario delete
   */
  export type RunScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    /**
     * Filter which RunScenario to delete.
     */
    where: RunScenarioWhereUniqueInput
  }

  /**
   * RunScenario deleteMany
   */
  export type RunScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunScenarios to delete
     */
    where?: RunScenarioWhereInput
    /**
     * Limit how many RunScenarios to delete.
     */
    limit?: number
  }

  /**
   * RunScenario without action
   */
  export type RunScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
  }


  /**
   * Model RunStep
   */

  export type AggregateRunStep = {
    _count: RunStepCountAggregateOutputType | null
    _avg: RunStepAvgAggregateOutputType | null
    _sum: RunStepSumAggregateOutputType | null
    _min: RunStepMinAggregateOutputType | null
    _max: RunStepMaxAggregateOutputType | null
  }

  export type RunStepAvgAggregateOutputType = {
    duration: number | null
  }

  export type RunStepSumAggregateOutputType = {
    duration: number | null
  }

  export type RunStepMinAggregateOutputType = {
    id: string | null
    runId: string | null
    stepId: string | null
    scenarioId: string | null
    status: $Enums.Status | null
    duration: number | null
    errorMessage: string | null
    stackTrace: string | null
    createdAt: Date | null
  }

  export type RunStepMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    stepId: string | null
    scenarioId: string | null
    status: $Enums.Status | null
    duration: number | null
    errorMessage: string | null
    stackTrace: string | null
    createdAt: Date | null
  }

  export type RunStepCountAggregateOutputType = {
    id: number
    runId: number
    stepId: number
    scenarioId: number
    status: number
    duration: number
    errorMessage: number
    stackTrace: number
    createdAt: number
    _all: number
  }


  export type RunStepAvgAggregateInputType = {
    duration?: true
  }

  export type RunStepSumAggregateInputType = {
    duration?: true
  }

  export type RunStepMinAggregateInputType = {
    id?: true
    runId?: true
    stepId?: true
    scenarioId?: true
    status?: true
    duration?: true
    errorMessage?: true
    stackTrace?: true
    createdAt?: true
  }

  export type RunStepMaxAggregateInputType = {
    id?: true
    runId?: true
    stepId?: true
    scenarioId?: true
    status?: true
    duration?: true
    errorMessage?: true
    stackTrace?: true
    createdAt?: true
  }

  export type RunStepCountAggregateInputType = {
    id?: true
    runId?: true
    stepId?: true
    scenarioId?: true
    status?: true
    duration?: true
    errorMessage?: true
    stackTrace?: true
    createdAt?: true
    _all?: true
  }

  export type RunStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunStep to aggregate.
     */
    where?: RunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunSteps to fetch.
     */
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunSteps
    **/
    _count?: true | RunStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunStepMaxAggregateInputType
  }

  export type GetRunStepAggregateType<T extends RunStepAggregateArgs> = {
        [P in keyof T & keyof AggregateRunStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunStep[P]>
      : GetScalarType<T[P], AggregateRunStep[P]>
  }




  export type RunStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunStepWhereInput
    orderBy?: RunStepOrderByWithAggregationInput | RunStepOrderByWithAggregationInput[]
    by: RunStepScalarFieldEnum[] | RunStepScalarFieldEnum
    having?: RunStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunStepCountAggregateInputType | true
    _avg?: RunStepAvgAggregateInputType
    _sum?: RunStepSumAggregateInputType
    _min?: RunStepMinAggregateInputType
    _max?: RunStepMaxAggregateInputType
  }

  export type RunStepGroupByOutputType = {
    id: string
    runId: string
    stepId: string
    scenarioId: string
    status: $Enums.Status
    duration: number | null
    errorMessage: string | null
    stackTrace: string | null
    createdAt: Date
    _count: RunStepCountAggregateOutputType | null
    _avg: RunStepAvgAggregateOutputType | null
    _sum: RunStepSumAggregateOutputType | null
    _min: RunStepMinAggregateOutputType | null
    _max: RunStepMaxAggregateOutputType | null
  }

  type GetRunStepGroupByPayload<T extends RunStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunStepGroupByOutputType[P]>
            : GetScalarType<T[P], RunStepGroupByOutputType[P]>
        }
      >
    >


  export type RunStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    stepId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runStep"]>

  export type RunStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    stepId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runStep"]>

  export type RunStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    stepId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runStep"]>

  export type RunStepSelectScalar = {
    id?: boolean
    runId?: boolean
    stepId?: boolean
    scenarioId?: boolean
    status?: boolean
    duration?: boolean
    errorMessage?: boolean
    stackTrace?: boolean
    createdAt?: boolean
  }

  export type RunStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "stepId" | "scenarioId" | "status" | "duration" | "errorMessage" | "stackTrace" | "createdAt", ExtArgs["result"]["runStep"]>
  export type RunStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type RunStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type RunStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }

  export type $RunStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunStep"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
      step: Prisma.$StepPayload<ExtArgs>
      scenario: Prisma.$ScenarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      stepId: string
      scenarioId: string
      status: $Enums.Status
      duration: number | null
      errorMessage: string | null
      stackTrace: string | null
      createdAt: Date
    }, ExtArgs["result"]["runStep"]>
    composites: {}
  }

  type RunStepGetPayload<S extends boolean | null | undefined | RunStepDefaultArgs> = $Result.GetResult<Prisma.$RunStepPayload, S>

  type RunStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunStepCountAggregateInputType | true
    }

  export interface RunStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunStep'], meta: { name: 'RunStep' } }
    /**
     * Find zero or one RunStep that matches the filter.
     * @param {RunStepFindUniqueArgs} args - Arguments to find a RunStep
     * @example
     * // Get one RunStep
     * const runStep = await prisma.runStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunStepFindUniqueArgs>(args: SelectSubset<T, RunStepFindUniqueArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunStepFindUniqueOrThrowArgs} args - Arguments to find a RunStep
     * @example
     * // Get one RunStep
     * const runStep = await prisma.runStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunStepFindUniqueOrThrowArgs>(args: SelectSubset<T, RunStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepFindFirstArgs} args - Arguments to find a RunStep
     * @example
     * // Get one RunStep
     * const runStep = await prisma.runStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunStepFindFirstArgs>(args?: SelectSubset<T, RunStepFindFirstArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepFindFirstOrThrowArgs} args - Arguments to find a RunStep
     * @example
     * // Get one RunStep
     * const runStep = await prisma.runStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunStepFindFirstOrThrowArgs>(args?: SelectSubset<T, RunStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunSteps
     * const runSteps = await prisma.runStep.findMany()
     * 
     * // Get first 10 RunSteps
     * const runSteps = await prisma.runStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runStepWithIdOnly = await prisma.runStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunStepFindManyArgs>(args?: SelectSubset<T, RunStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunStep.
     * @param {RunStepCreateArgs} args - Arguments to create a RunStep.
     * @example
     * // Create one RunStep
     * const RunStep = await prisma.runStep.create({
     *   data: {
     *     // ... data to create a RunStep
     *   }
     * })
     * 
     */
    create<T extends RunStepCreateArgs>(args: SelectSubset<T, RunStepCreateArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunSteps.
     * @param {RunStepCreateManyArgs} args - Arguments to create many RunSteps.
     * @example
     * // Create many RunSteps
     * const runStep = await prisma.runStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunStepCreateManyArgs>(args?: SelectSubset<T, RunStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunSteps and returns the data saved in the database.
     * @param {RunStepCreateManyAndReturnArgs} args - Arguments to create many RunSteps.
     * @example
     * // Create many RunSteps
     * const runStep = await prisma.runStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunSteps and only return the `id`
     * const runStepWithIdOnly = await prisma.runStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunStepCreateManyAndReturnArgs>(args?: SelectSubset<T, RunStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunStep.
     * @param {RunStepDeleteArgs} args - Arguments to delete one RunStep.
     * @example
     * // Delete one RunStep
     * const RunStep = await prisma.runStep.delete({
     *   where: {
     *     // ... filter to delete one RunStep
     *   }
     * })
     * 
     */
    delete<T extends RunStepDeleteArgs>(args: SelectSubset<T, RunStepDeleteArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunStep.
     * @param {RunStepUpdateArgs} args - Arguments to update one RunStep.
     * @example
     * // Update one RunStep
     * const runStep = await prisma.runStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunStepUpdateArgs>(args: SelectSubset<T, RunStepUpdateArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunSteps.
     * @param {RunStepDeleteManyArgs} args - Arguments to filter RunSteps to delete.
     * @example
     * // Delete a few RunSteps
     * const { count } = await prisma.runStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunStepDeleteManyArgs>(args?: SelectSubset<T, RunStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunSteps
     * const runStep = await prisma.runStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunStepUpdateManyArgs>(args: SelectSubset<T, RunStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunSteps and returns the data updated in the database.
     * @param {RunStepUpdateManyAndReturnArgs} args - Arguments to update many RunSteps.
     * @example
     * // Update many RunSteps
     * const runStep = await prisma.runStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunSteps and only return the `id`
     * const runStepWithIdOnly = await prisma.runStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunStepUpdateManyAndReturnArgs>(args: SelectSubset<T, RunStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunStep.
     * @param {RunStepUpsertArgs} args - Arguments to update or create a RunStep.
     * @example
     * // Update or create a RunStep
     * const runStep = await prisma.runStep.upsert({
     *   create: {
     *     // ... data to create a RunStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunStep we want to update
     *   }
     * })
     */
    upsert<T extends RunStepUpsertArgs>(args: SelectSubset<T, RunStepUpsertArgs<ExtArgs>>): Prisma__RunStepClient<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepCountArgs} args - Arguments to filter RunSteps to count.
     * @example
     * // Count the number of RunSteps
     * const count = await prisma.runStep.count({
     *   where: {
     *     // ... the filter for the RunSteps we want to count
     *   }
     * })
    **/
    count<T extends RunStepCountArgs>(
      args?: Subset<T, RunStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunStepAggregateArgs>(args: Subset<T, RunStepAggregateArgs>): Prisma.PrismaPromise<GetRunStepAggregateType<T>>

    /**
     * Group by RunStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunStepGroupByArgs} args - Group by arguments.
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
      T extends RunStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunStepGroupByArgs['orderBy'] }
        : { orderBy?: RunStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunStep model
   */
  readonly fields: RunStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    step<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RunStep model
   */
  interface RunStepFieldRefs {
    readonly id: FieldRef<"RunStep", 'String'>
    readonly runId: FieldRef<"RunStep", 'String'>
    readonly stepId: FieldRef<"RunStep", 'String'>
    readonly scenarioId: FieldRef<"RunStep", 'String'>
    readonly status: FieldRef<"RunStep", 'Status'>
    readonly duration: FieldRef<"RunStep", 'Int'>
    readonly errorMessage: FieldRef<"RunStep", 'String'>
    readonly stackTrace: FieldRef<"RunStep", 'String'>
    readonly createdAt: FieldRef<"RunStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RunStep findUnique
   */
  export type RunStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter, which RunStep to fetch.
     */
    where: RunStepWhereUniqueInput
  }

  /**
   * RunStep findUniqueOrThrow
   */
  export type RunStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter, which RunStep to fetch.
     */
    where: RunStepWhereUniqueInput
  }

  /**
   * RunStep findFirst
   */
  export type RunStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter, which RunStep to fetch.
     */
    where?: RunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunSteps to fetch.
     */
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunSteps.
     */
    cursor?: RunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunSteps.
     */
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * RunStep findFirstOrThrow
   */
  export type RunStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter, which RunStep to fetch.
     */
    where?: RunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunSteps to fetch.
     */
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunSteps.
     */
    cursor?: RunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunSteps.
     */
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * RunStep findMany
   */
  export type RunStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter, which RunSteps to fetch.
     */
    where?: RunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunSteps to fetch.
     */
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunSteps.
     */
    cursor?: RunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunSteps.
     */
    skip?: number
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * RunStep create
   */
  export type RunStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * The data needed to create a RunStep.
     */
    data: XOR<RunStepCreateInput, RunStepUncheckedCreateInput>
  }

  /**
   * RunStep createMany
   */
  export type RunStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunSteps.
     */
    data: RunStepCreateManyInput | RunStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RunStep createManyAndReturn
   */
  export type RunStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * The data used to create many RunSteps.
     */
    data: RunStepCreateManyInput | RunStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunStep update
   */
  export type RunStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * The data needed to update a RunStep.
     */
    data: XOR<RunStepUpdateInput, RunStepUncheckedUpdateInput>
    /**
     * Choose, which RunStep to update.
     */
    where: RunStepWhereUniqueInput
  }

  /**
   * RunStep updateMany
   */
  export type RunStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunSteps.
     */
    data: XOR<RunStepUpdateManyMutationInput, RunStepUncheckedUpdateManyInput>
    /**
     * Filter which RunSteps to update
     */
    where?: RunStepWhereInput
    /**
     * Limit how many RunSteps to update.
     */
    limit?: number
  }

  /**
   * RunStep updateManyAndReturn
   */
  export type RunStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * The data used to update RunSteps.
     */
    data: XOR<RunStepUpdateManyMutationInput, RunStepUncheckedUpdateManyInput>
    /**
     * Filter which RunSteps to update
     */
    where?: RunStepWhereInput
    /**
     * Limit how many RunSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunStep upsert
   */
  export type RunStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * The filter to search for the RunStep to update in case it exists.
     */
    where: RunStepWhereUniqueInput
    /**
     * In case the RunStep found by the `where` argument doesn't exist, create a new RunStep with this data.
     */
    create: XOR<RunStepCreateInput, RunStepUncheckedCreateInput>
    /**
     * In case the RunStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunStepUpdateInput, RunStepUncheckedUpdateInput>
  }

  /**
   * RunStep delete
   */
  export type RunStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    /**
     * Filter which RunStep to delete.
     */
    where: RunStepWhereUniqueInput
  }

  /**
   * RunStep deleteMany
   */
  export type RunStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunSteps to delete
     */
    where?: RunStepWhereInput
    /**
     * Limit how many RunSteps to delete.
     */
    limit?: number
  }

  /**
   * RunStep without action
   */
  export type RunStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    name: string | null
    description: string | null
    active: boolean | null
    contentHash: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    name: string | null
    description: string | null
    active: boolean | null
    contentHash: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    keyword: number
    name: number
    description: number
    active: number
    contentHash: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    keyword: string
    name: string
    description: string | null
    active: boolean
    contentHash: string | null
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
    featureTags?: boolean | Feature$featureTagsArgs<ExtArgs>
    RunFeature?: boolean | Feature$RunFeatureArgs<ExtArgs>
    MapNodeFeatureData?: boolean | Feature$MapNodeFeatureDataArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "name" | "description" | "active" | "contentHash", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureTags?: boolean | Feature$featureTagsArgs<ExtArgs>
    RunFeature?: boolean | Feature$RunFeatureArgs<ExtArgs>
    MapNodeFeatureData?: boolean | Feature$MapNodeFeatureDataArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      featureTags: Prisma.$FeatureTagPayload<ExtArgs>[]
      RunFeature: Prisma.$RunFeaturePayload<ExtArgs>[]
      MapNodeFeatureData: Prisma.$MapNodeFeatureDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      name: string
      description: string | null
      active: boolean
      contentHash: string | null
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureTags<T extends Feature$featureTagsArgs<ExtArgs> = {}>(args?: Subset<T, Feature$featureTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunFeature<T extends Feature$RunFeatureArgs<ExtArgs> = {}>(args?: Subset<T, Feature$RunFeatureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MapNodeFeatureData<T extends Feature$MapNodeFeatureDataArgs<ExtArgs> = {}>(args?: Subset<T, Feature$MapNodeFeatureDataArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly keyword: FieldRef<"Feature", 'String'>
    readonly name: FieldRef<"Feature", 'String'>
    readonly description: FieldRef<"Feature", 'String'>
    readonly active: FieldRef<"Feature", 'Boolean'>
    readonly contentHash: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.featureTags
   */
  export type Feature$featureTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    where?: FeatureTagWhereInput
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    cursor?: FeatureTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureTagScalarFieldEnum | FeatureTagScalarFieldEnum[]
  }

  /**
   * Feature.RunFeature
   */
  export type Feature$RunFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunFeature
     */
    select?: RunFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunFeature
     */
    omit?: RunFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunFeatureInclude<ExtArgs> | null
    where?: RunFeatureWhereInput
    orderBy?: RunFeatureOrderByWithRelationInput | RunFeatureOrderByWithRelationInput[]
    cursor?: RunFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunFeatureScalarFieldEnum | RunFeatureScalarFieldEnum[]
  }

  /**
   * Feature.MapNodeFeatureData
   */
  export type Feature$MapNodeFeatureDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    where?: MapNodeFeatureDataWhereInput
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    featureId: string | null
    keyword: string | null
    name: string | null
    description: string | null
    active: boolean | null
    contentHash: string | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    featureId: string | null
    keyword: string | null
    name: string | null
    description: string | null
    active: boolean | null
    contentHash: string | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    featureId: number
    keyword: number
    name: number
    description: number
    active: number
    contentHash: number
    _all: number
  }


  export type ScenarioMinAggregateInputType = {
    id?: true
    featureId?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    featureId?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    featureId?: true
    keyword?: true
    name?: true
    description?: true
    active?: true
    contentHash?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    featureId: string
    keyword: string
    name: string
    description: string | null
    active: boolean
    contentHash: string | null
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
    scenarioTags?: boolean | Scenario$scenarioTagsArgs<ExtArgs>
    steps?: boolean | Scenario$stepsArgs<ExtArgs>
    RunScenario?: boolean | Scenario$RunScenarioArgs<ExtArgs>
    RunStep?: boolean | Scenario$RunStepArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    featureId?: boolean
    keyword?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    contentHash?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureId" | "keyword" | "name" | "description" | "active" | "contentHash", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenarioTags?: boolean | Scenario$scenarioTagsArgs<ExtArgs>
    steps?: boolean | Scenario$stepsArgs<ExtArgs>
    RunScenario?: boolean | Scenario$RunScenarioArgs<ExtArgs>
    RunStep?: boolean | Scenario$RunStepArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      scenarioTags: Prisma.$ScenarioTagPayload<ExtArgs>[]
      steps: Prisma.$ScenarioStepPayload<ExtArgs>[]
      RunScenario: Prisma.$RunScenarioPayload<ExtArgs>[]
      RunStep: Prisma.$RunStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureId: string
      keyword: string
      name: string
      description: string | null
      active: boolean
      contentHash: string | null
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
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
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenarioTags<T extends Scenario$scenarioTagsArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$scenarioTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Scenario$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunScenario<T extends Scenario$RunScenarioArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$RunScenarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunStep<T extends Scenario$RunStepArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$RunStepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly featureId: FieldRef<"Scenario", 'String'>
    readonly keyword: FieldRef<"Scenario", 'String'>
    readonly name: FieldRef<"Scenario", 'String'>
    readonly description: FieldRef<"Scenario", 'String'>
    readonly active: FieldRef<"Scenario", 'Boolean'>
    readonly contentHash: FieldRef<"Scenario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario.scenarioTags
   */
  export type Scenario$scenarioTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    where?: ScenarioTagWhereInput
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    cursor?: ScenarioTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioTagScalarFieldEnum | ScenarioTagScalarFieldEnum[]
  }

  /**
   * Scenario.steps
   */
  export type Scenario$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    where?: ScenarioStepWhereInput
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    cursor?: ScenarioStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioStepScalarFieldEnum | ScenarioStepScalarFieldEnum[]
  }

  /**
   * Scenario.RunScenario
   */
  export type Scenario$RunScenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunScenario
     */
    select?: RunScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunScenario
     */
    omit?: RunScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunScenarioInclude<ExtArgs> | null
    where?: RunScenarioWhereInput
    orderBy?: RunScenarioOrderByWithRelationInput | RunScenarioOrderByWithRelationInput[]
    cursor?: RunScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScenarioScalarFieldEnum | RunScenarioScalarFieldEnum[]
  }

  /**
   * Scenario.RunStep
   */
  export type Scenario$RunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    where?: RunStepWhereInput
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    cursor?: RunStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    name: string | null
    contentHash: string | null
    active: boolean | null
  }

  export type StepMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    name: string | null
    contentHash: string | null
    active: boolean | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    keyword: number
    name: number
    contentHash: number
    active: number
    media: number
    _all: number
  }


  export type StepMinAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    contentHash?: true
    active?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    contentHash?: true
    active?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    keyword?: true
    name?: true
    contentHash?: true
    active?: true
    media?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: string
    keyword: string
    name: string
    contentHash: string | null
    active: boolean
    media: JsonValue | null
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    contentHash?: boolean
    active?: boolean
    media?: boolean
    ScenarioStep?: boolean | Step$ScenarioStepArgs<ExtArgs>
    RunStep?: boolean | Step$RunStepArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    contentHash?: boolean
    active?: boolean
    media?: boolean
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    name?: boolean
    contentHash?: boolean
    active?: boolean
    media?: boolean
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    keyword?: boolean
    name?: boolean
    contentHash?: boolean
    active?: boolean
    media?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "name" | "contentHash" | "active" | "media", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScenarioStep?: boolean | Step$ScenarioStepArgs<ExtArgs>
    RunStep?: boolean | Step$RunStepArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      ScenarioStep: Prisma.$ScenarioStepPayload<ExtArgs>[]
      RunStep: Prisma.$RunStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      name: string
      contentHash: string | null
      active: boolean
      media: Prisma.JsonValue | null
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
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
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ScenarioStep<T extends Step$ScenarioStepArgs<ExtArgs> = {}>(args?: Subset<T, Step$ScenarioStepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RunStep<T extends Step$RunStepArgs<ExtArgs> = {}>(args?: Subset<T, Step$RunStepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'String'>
    readonly keyword: FieldRef<"Step", 'String'>
    readonly name: FieldRef<"Step", 'String'>
    readonly contentHash: FieldRef<"Step", 'String'>
    readonly active: FieldRef<"Step", 'Boolean'>
    readonly media: FieldRef<"Step", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.ScenarioStep
   */
  export type Step$ScenarioStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    where?: ScenarioStepWhereInput
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    cursor?: ScenarioStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioStepScalarFieldEnum | ScenarioStepScalarFieldEnum[]
  }

  /**
   * Step.RunStep
   */
  export type Step$RunStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunStep
     */
    select?: RunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunStep
     */
    omit?: RunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunStepInclude<ExtArgs> | null
    where?: RunStepWhereInput
    orderBy?: RunStepOrderByWithRelationInput | RunStepOrderByWithRelationInput[]
    cursor?: RunStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunStepScalarFieldEnum | RunStepScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model ScenarioStep
   */

  export type AggregateScenarioStep = {
    _count: ScenarioStepCountAggregateOutputType | null
    _min: ScenarioStepMinAggregateOutputType | null
    _max: ScenarioStepMaxAggregateOutputType | null
  }

  export type ScenarioStepMinAggregateOutputType = {
    scenarioId: string | null
    stepId: string | null
    keyword: string | null
  }

  export type ScenarioStepMaxAggregateOutputType = {
    scenarioId: string | null
    stepId: string | null
    keyword: string | null
  }

  export type ScenarioStepCountAggregateOutputType = {
    scenarioId: number
    stepId: number
    keyword: number
    _all: number
  }


  export type ScenarioStepMinAggregateInputType = {
    scenarioId?: true
    stepId?: true
    keyword?: true
  }

  export type ScenarioStepMaxAggregateInputType = {
    scenarioId?: true
    stepId?: true
    keyword?: true
  }

  export type ScenarioStepCountAggregateInputType = {
    scenarioId?: true
    stepId?: true
    keyword?: true
    _all?: true
  }

  export type ScenarioStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScenarioStep to aggregate.
     */
    where?: ScenarioStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioSteps to fetch.
     */
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScenarioSteps
    **/
    _count?: true | ScenarioStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioStepMaxAggregateInputType
  }

  export type GetScenarioStepAggregateType<T extends ScenarioStepAggregateArgs> = {
        [P in keyof T & keyof AggregateScenarioStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenarioStep[P]>
      : GetScalarType<T[P], AggregateScenarioStep[P]>
  }




  export type ScenarioStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioStepWhereInput
    orderBy?: ScenarioStepOrderByWithAggregationInput | ScenarioStepOrderByWithAggregationInput[]
    by: ScenarioStepScalarFieldEnum[] | ScenarioStepScalarFieldEnum
    having?: ScenarioStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioStepCountAggregateInputType | true
    _min?: ScenarioStepMinAggregateInputType
    _max?: ScenarioStepMaxAggregateInputType
  }

  export type ScenarioStepGroupByOutputType = {
    scenarioId: string
    stepId: string
    keyword: string
    _count: ScenarioStepCountAggregateOutputType | null
    _min: ScenarioStepMinAggregateOutputType | null
    _max: ScenarioStepMaxAggregateOutputType | null
  }

  type GetScenarioStepGroupByPayload<T extends ScenarioStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioStepGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioStepGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    stepId?: boolean
    keyword?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioStep"]>

  export type ScenarioStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    stepId?: boolean
    keyword?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioStep"]>

  export type ScenarioStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    stepId?: boolean
    keyword?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioStep"]>

  export type ScenarioStepSelectScalar = {
    scenarioId?: boolean
    stepId?: boolean
    keyword?: boolean
  }

  export type ScenarioStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scenarioId" | "stepId" | "keyword", ExtArgs["result"]["scenarioStep"]>
  export type ScenarioStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }
  export type ScenarioStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }
  export type ScenarioStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    step?: boolean | StepDefaultArgs<ExtArgs>
  }

  export type $ScenarioStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScenarioStep"
    objects: {
      scenario: Prisma.$ScenarioPayload<ExtArgs>
      step: Prisma.$StepPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scenarioId: string
      stepId: string
      keyword: string
    }, ExtArgs["result"]["scenarioStep"]>
    composites: {}
  }

  type ScenarioStepGetPayload<S extends boolean | null | undefined | ScenarioStepDefaultArgs> = $Result.GetResult<Prisma.$ScenarioStepPayload, S>

  type ScenarioStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioStepCountAggregateInputType | true
    }

  export interface ScenarioStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScenarioStep'], meta: { name: 'ScenarioStep' } }
    /**
     * Find zero or one ScenarioStep that matches the filter.
     * @param {ScenarioStepFindUniqueArgs} args - Arguments to find a ScenarioStep
     * @example
     * // Get one ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioStepFindUniqueArgs>(args: SelectSubset<T, ScenarioStepFindUniqueArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScenarioStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioStepFindUniqueOrThrowArgs} args - Arguments to find a ScenarioStep
     * @example
     * // Get one ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScenarioStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepFindFirstArgs} args - Arguments to find a ScenarioStep
     * @example
     * // Get one ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioStepFindFirstArgs>(args?: SelectSubset<T, ScenarioStepFindFirstArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScenarioStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepFindFirstOrThrowArgs} args - Arguments to find a ScenarioStep
     * @example
     * // Get one ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScenarioSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScenarioSteps
     * const scenarioSteps = await prisma.scenarioStep.findMany()
     * 
     * // Get first 10 ScenarioSteps
     * const scenarioSteps = await prisma.scenarioStep.findMany({ take: 10 })
     * 
     * // Only select the `scenarioId`
     * const scenarioStepWithScenarioIdOnly = await prisma.scenarioStep.findMany({ select: { scenarioId: true } })
     * 
     */
    findMany<T extends ScenarioStepFindManyArgs>(args?: SelectSubset<T, ScenarioStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScenarioStep.
     * @param {ScenarioStepCreateArgs} args - Arguments to create a ScenarioStep.
     * @example
     * // Create one ScenarioStep
     * const ScenarioStep = await prisma.scenarioStep.create({
     *   data: {
     *     // ... data to create a ScenarioStep
     *   }
     * })
     * 
     */
    create<T extends ScenarioStepCreateArgs>(args: SelectSubset<T, ScenarioStepCreateArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScenarioSteps.
     * @param {ScenarioStepCreateManyArgs} args - Arguments to create many ScenarioSteps.
     * @example
     * // Create many ScenarioSteps
     * const scenarioStep = await prisma.scenarioStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioStepCreateManyArgs>(args?: SelectSubset<T, ScenarioStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScenarioSteps and returns the data saved in the database.
     * @param {ScenarioStepCreateManyAndReturnArgs} args - Arguments to create many ScenarioSteps.
     * @example
     * // Create many ScenarioSteps
     * const scenarioStep = await prisma.scenarioStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScenarioSteps and only return the `scenarioId`
     * const scenarioStepWithScenarioIdOnly = await prisma.scenarioStep.createManyAndReturn({
     *   select: { scenarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioStepCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScenarioStep.
     * @param {ScenarioStepDeleteArgs} args - Arguments to delete one ScenarioStep.
     * @example
     * // Delete one ScenarioStep
     * const ScenarioStep = await prisma.scenarioStep.delete({
     *   where: {
     *     // ... filter to delete one ScenarioStep
     *   }
     * })
     * 
     */
    delete<T extends ScenarioStepDeleteArgs>(args: SelectSubset<T, ScenarioStepDeleteArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScenarioStep.
     * @param {ScenarioStepUpdateArgs} args - Arguments to update one ScenarioStep.
     * @example
     * // Update one ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioStepUpdateArgs>(args: SelectSubset<T, ScenarioStepUpdateArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScenarioSteps.
     * @param {ScenarioStepDeleteManyArgs} args - Arguments to filter ScenarioSteps to delete.
     * @example
     * // Delete a few ScenarioSteps
     * const { count } = await prisma.scenarioStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioStepDeleteManyArgs>(args?: SelectSubset<T, ScenarioStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScenarioSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScenarioSteps
     * const scenarioStep = await prisma.scenarioStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioStepUpdateManyArgs>(args: SelectSubset<T, ScenarioStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScenarioSteps and returns the data updated in the database.
     * @param {ScenarioStepUpdateManyAndReturnArgs} args - Arguments to update many ScenarioSteps.
     * @example
     * // Update many ScenarioSteps
     * const scenarioStep = await prisma.scenarioStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScenarioSteps and only return the `scenarioId`
     * const scenarioStepWithScenarioIdOnly = await prisma.scenarioStep.updateManyAndReturn({
     *   select: { scenarioId: true },
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
    updateManyAndReturn<T extends ScenarioStepUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScenarioStep.
     * @param {ScenarioStepUpsertArgs} args - Arguments to update or create a ScenarioStep.
     * @example
     * // Update or create a ScenarioStep
     * const scenarioStep = await prisma.scenarioStep.upsert({
     *   create: {
     *     // ... data to create a ScenarioStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScenarioStep we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioStepUpsertArgs>(args: SelectSubset<T, ScenarioStepUpsertArgs<ExtArgs>>): Prisma__ScenarioStepClient<$Result.GetResult<Prisma.$ScenarioStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScenarioSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepCountArgs} args - Arguments to filter ScenarioSteps to count.
     * @example
     * // Count the number of ScenarioSteps
     * const count = await prisma.scenarioStep.count({
     *   where: {
     *     // ... the filter for the ScenarioSteps we want to count
     *   }
     * })
    **/
    count<T extends ScenarioStepCountArgs>(
      args?: Subset<T, ScenarioStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScenarioStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioStepAggregateArgs>(args: Subset<T, ScenarioStepAggregateArgs>): Prisma.PrismaPromise<GetScenarioStepAggregateType<T>>

    /**
     * Group by ScenarioStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioStepGroupByArgs} args - Group by arguments.
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
      T extends ScenarioStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioStepGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScenarioStep model
   */
  readonly fields: ScenarioStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScenarioStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    step<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScenarioStep model
   */
  interface ScenarioStepFieldRefs {
    readonly scenarioId: FieldRef<"ScenarioStep", 'String'>
    readonly stepId: FieldRef<"ScenarioStep", 'String'>
    readonly keyword: FieldRef<"ScenarioStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScenarioStep findUnique
   */
  export type ScenarioStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioStep to fetch.
     */
    where: ScenarioStepWhereUniqueInput
  }

  /**
   * ScenarioStep findUniqueOrThrow
   */
  export type ScenarioStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioStep to fetch.
     */
    where: ScenarioStepWhereUniqueInput
  }

  /**
   * ScenarioStep findFirst
   */
  export type ScenarioStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioStep to fetch.
     */
    where?: ScenarioStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioSteps to fetch.
     */
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScenarioSteps.
     */
    cursor?: ScenarioStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScenarioSteps.
     */
    distinct?: ScenarioStepScalarFieldEnum | ScenarioStepScalarFieldEnum[]
  }

  /**
   * ScenarioStep findFirstOrThrow
   */
  export type ScenarioStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioStep to fetch.
     */
    where?: ScenarioStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioSteps to fetch.
     */
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScenarioSteps.
     */
    cursor?: ScenarioStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScenarioSteps.
     */
    distinct?: ScenarioStepScalarFieldEnum | ScenarioStepScalarFieldEnum[]
  }

  /**
   * ScenarioStep findMany
   */
  export type ScenarioStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioSteps to fetch.
     */
    where?: ScenarioStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioSteps to fetch.
     */
    orderBy?: ScenarioStepOrderByWithRelationInput | ScenarioStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScenarioSteps.
     */
    cursor?: ScenarioStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioSteps.
     */
    skip?: number
    distinct?: ScenarioStepScalarFieldEnum | ScenarioStepScalarFieldEnum[]
  }

  /**
   * ScenarioStep create
   */
  export type ScenarioStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ScenarioStep.
     */
    data: XOR<ScenarioStepCreateInput, ScenarioStepUncheckedCreateInput>
  }

  /**
   * ScenarioStep createMany
   */
  export type ScenarioStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScenarioSteps.
     */
    data: ScenarioStepCreateManyInput | ScenarioStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScenarioStep createManyAndReturn
   */
  export type ScenarioStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * The data used to create many ScenarioSteps.
     */
    data: ScenarioStepCreateManyInput | ScenarioStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScenarioStep update
   */
  export type ScenarioStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ScenarioStep.
     */
    data: XOR<ScenarioStepUpdateInput, ScenarioStepUncheckedUpdateInput>
    /**
     * Choose, which ScenarioStep to update.
     */
    where: ScenarioStepWhereUniqueInput
  }

  /**
   * ScenarioStep updateMany
   */
  export type ScenarioStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScenarioSteps.
     */
    data: XOR<ScenarioStepUpdateManyMutationInput, ScenarioStepUncheckedUpdateManyInput>
    /**
     * Filter which ScenarioSteps to update
     */
    where?: ScenarioStepWhereInput
    /**
     * Limit how many ScenarioSteps to update.
     */
    limit?: number
  }

  /**
   * ScenarioStep updateManyAndReturn
   */
  export type ScenarioStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * The data used to update ScenarioSteps.
     */
    data: XOR<ScenarioStepUpdateManyMutationInput, ScenarioStepUncheckedUpdateManyInput>
    /**
     * Filter which ScenarioSteps to update
     */
    where?: ScenarioStepWhereInput
    /**
     * Limit how many ScenarioSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScenarioStep upsert
   */
  export type ScenarioStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ScenarioStep to update in case it exists.
     */
    where: ScenarioStepWhereUniqueInput
    /**
     * In case the ScenarioStep found by the `where` argument doesn't exist, create a new ScenarioStep with this data.
     */
    create: XOR<ScenarioStepCreateInput, ScenarioStepUncheckedCreateInput>
    /**
     * In case the ScenarioStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioStepUpdateInput, ScenarioStepUncheckedUpdateInput>
  }

  /**
   * ScenarioStep delete
   */
  export type ScenarioStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
    /**
     * Filter which ScenarioStep to delete.
     */
    where: ScenarioStepWhereUniqueInput
  }

  /**
   * ScenarioStep deleteMany
   */
  export type ScenarioStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScenarioSteps to delete
     */
    where?: ScenarioStepWhereInput
    /**
     * Limit how many ScenarioSteps to delete.
     */
    limit?: number
  }

  /**
   * ScenarioStep without action
   */
  export type ScenarioStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioStep
     */
    select?: ScenarioStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioStep
     */
    omit?: ScenarioStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioStepInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    featureTags?: boolean | Tag$featureTagsArgs<ExtArgs>
    scenarioTags?: boolean | Tag$scenarioTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureTags?: boolean | Tag$featureTagsArgs<ExtArgs>
    scenarioTags?: boolean | Tag$scenarioTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      featureTags: Prisma.$FeatureTagPayload<ExtArgs>[]
      scenarioTags: Prisma.$ScenarioTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureTags<T extends Tag$featureTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$featureTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenarioTags<T extends Tag$scenarioTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$scenarioTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.featureTags
   */
  export type Tag$featureTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    where?: FeatureTagWhereInput
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    cursor?: FeatureTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureTagScalarFieldEnum | FeatureTagScalarFieldEnum[]
  }

  /**
   * Tag.scenarioTags
   */
  export type Tag$scenarioTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    where?: ScenarioTagWhereInput
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    cursor?: ScenarioTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioTagScalarFieldEnum | ScenarioTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model FeatureTag
   */

  export type AggregateFeatureTag = {
    _count: FeatureTagCountAggregateOutputType | null
    _min: FeatureTagMinAggregateOutputType | null
    _max: FeatureTagMaxAggregateOutputType | null
  }

  export type FeatureTagMinAggregateOutputType = {
    featureId: string | null
    tagId: string | null
  }

  export type FeatureTagMaxAggregateOutputType = {
    featureId: string | null
    tagId: string | null
  }

  export type FeatureTagCountAggregateOutputType = {
    featureId: number
    tagId: number
    _all: number
  }


  export type FeatureTagMinAggregateInputType = {
    featureId?: true
    tagId?: true
  }

  export type FeatureTagMaxAggregateInputType = {
    featureId?: true
    tagId?: true
  }

  export type FeatureTagCountAggregateInputType = {
    featureId?: true
    tagId?: true
    _all?: true
  }

  export type FeatureTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureTag to aggregate.
     */
    where?: FeatureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureTags to fetch.
     */
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureTags
    **/
    _count?: true | FeatureTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureTagMaxAggregateInputType
  }

  export type GetFeatureTagAggregateType<T extends FeatureTagAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureTag[P]>
      : GetScalarType<T[P], AggregateFeatureTag[P]>
  }




  export type FeatureTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureTagWhereInput
    orderBy?: FeatureTagOrderByWithAggregationInput | FeatureTagOrderByWithAggregationInput[]
    by: FeatureTagScalarFieldEnum[] | FeatureTagScalarFieldEnum
    having?: FeatureTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureTagCountAggregateInputType | true
    _min?: FeatureTagMinAggregateInputType
    _max?: FeatureTagMaxAggregateInputType
  }

  export type FeatureTagGroupByOutputType = {
    featureId: string
    tagId: string
    _count: FeatureTagCountAggregateOutputType | null
    _min: FeatureTagMinAggregateOutputType | null
    _max: FeatureTagMaxAggregateOutputType | null
  }

  type GetFeatureTagGroupByPayload<T extends FeatureTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureTagGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureTagGroupByOutputType[P]>
        }
      >
    >


  export type FeatureTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    featureId?: boolean
    tagId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureTag"]>

  export type FeatureTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    featureId?: boolean
    tagId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureTag"]>

  export type FeatureTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    featureId?: boolean
    tagId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureTag"]>

  export type FeatureTagSelectScalar = {
    featureId?: boolean
    tagId?: boolean
  }

  export type FeatureTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"featureId" | "tagId", ExtArgs["result"]["featureTag"]>
  export type FeatureTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type FeatureTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type FeatureTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $FeatureTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureTag"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      featureId: string
      tagId: string
    }, ExtArgs["result"]["featureTag"]>
    composites: {}
  }

  type FeatureTagGetPayload<S extends boolean | null | undefined | FeatureTagDefaultArgs> = $Result.GetResult<Prisma.$FeatureTagPayload, S>

  type FeatureTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureTagCountAggregateInputType | true
    }

  export interface FeatureTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureTag'], meta: { name: 'FeatureTag' } }
    /**
     * Find zero or one FeatureTag that matches the filter.
     * @param {FeatureTagFindUniqueArgs} args - Arguments to find a FeatureTag
     * @example
     * // Get one FeatureTag
     * const featureTag = await prisma.featureTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureTagFindUniqueArgs>(args: SelectSubset<T, FeatureTagFindUniqueArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureTagFindUniqueOrThrowArgs} args - Arguments to find a FeatureTag
     * @example
     * // Get one FeatureTag
     * const featureTag = await prisma.featureTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureTagFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagFindFirstArgs} args - Arguments to find a FeatureTag
     * @example
     * // Get one FeatureTag
     * const featureTag = await prisma.featureTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureTagFindFirstArgs>(args?: SelectSubset<T, FeatureTagFindFirstArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagFindFirstOrThrowArgs} args - Arguments to find a FeatureTag
     * @example
     * // Get one FeatureTag
     * const featureTag = await prisma.featureTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureTagFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureTags
     * const featureTags = await prisma.featureTag.findMany()
     * 
     * // Get first 10 FeatureTags
     * const featureTags = await prisma.featureTag.findMany({ take: 10 })
     * 
     * // Only select the `featureId`
     * const featureTagWithFeatureIdOnly = await prisma.featureTag.findMany({ select: { featureId: true } })
     * 
     */
    findMany<T extends FeatureTagFindManyArgs>(args?: SelectSubset<T, FeatureTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureTag.
     * @param {FeatureTagCreateArgs} args - Arguments to create a FeatureTag.
     * @example
     * // Create one FeatureTag
     * const FeatureTag = await prisma.featureTag.create({
     *   data: {
     *     // ... data to create a FeatureTag
     *   }
     * })
     * 
     */
    create<T extends FeatureTagCreateArgs>(args: SelectSubset<T, FeatureTagCreateArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureTags.
     * @param {FeatureTagCreateManyArgs} args - Arguments to create many FeatureTags.
     * @example
     * // Create many FeatureTags
     * const featureTag = await prisma.featureTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureTagCreateManyArgs>(args?: SelectSubset<T, FeatureTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureTags and returns the data saved in the database.
     * @param {FeatureTagCreateManyAndReturnArgs} args - Arguments to create many FeatureTags.
     * @example
     * // Create many FeatureTags
     * const featureTag = await prisma.featureTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureTags and only return the `featureId`
     * const featureTagWithFeatureIdOnly = await prisma.featureTag.createManyAndReturn({
     *   select: { featureId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureTagCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeatureTag.
     * @param {FeatureTagDeleteArgs} args - Arguments to delete one FeatureTag.
     * @example
     * // Delete one FeatureTag
     * const FeatureTag = await prisma.featureTag.delete({
     *   where: {
     *     // ... filter to delete one FeatureTag
     *   }
     * })
     * 
     */
    delete<T extends FeatureTagDeleteArgs>(args: SelectSubset<T, FeatureTagDeleteArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureTag.
     * @param {FeatureTagUpdateArgs} args - Arguments to update one FeatureTag.
     * @example
     * // Update one FeatureTag
     * const featureTag = await prisma.featureTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureTagUpdateArgs>(args: SelectSubset<T, FeatureTagUpdateArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureTags.
     * @param {FeatureTagDeleteManyArgs} args - Arguments to filter FeatureTags to delete.
     * @example
     * // Delete a few FeatureTags
     * const { count } = await prisma.featureTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureTagDeleteManyArgs>(args?: SelectSubset<T, FeatureTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureTags
     * const featureTag = await prisma.featureTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureTagUpdateManyArgs>(args: SelectSubset<T, FeatureTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureTags and returns the data updated in the database.
     * @param {FeatureTagUpdateManyAndReturnArgs} args - Arguments to update many FeatureTags.
     * @example
     * // Update many FeatureTags
     * const featureTag = await prisma.featureTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeatureTags and only return the `featureId`
     * const featureTagWithFeatureIdOnly = await prisma.featureTag.updateManyAndReturn({
     *   select: { featureId: true },
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
    updateManyAndReturn<T extends FeatureTagUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeatureTag.
     * @param {FeatureTagUpsertArgs} args - Arguments to update or create a FeatureTag.
     * @example
     * // Update or create a FeatureTag
     * const featureTag = await prisma.featureTag.upsert({
     *   create: {
     *     // ... data to create a FeatureTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureTag we want to update
     *   }
     * })
     */
    upsert<T extends FeatureTagUpsertArgs>(args: SelectSubset<T, FeatureTagUpsertArgs<ExtArgs>>): Prisma__FeatureTagClient<$Result.GetResult<Prisma.$FeatureTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagCountArgs} args - Arguments to filter FeatureTags to count.
     * @example
     * // Count the number of FeatureTags
     * const count = await prisma.featureTag.count({
     *   where: {
     *     // ... the filter for the FeatureTags we want to count
     *   }
     * })
    **/
    count<T extends FeatureTagCountArgs>(
      args?: Subset<T, FeatureTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureTagAggregateArgs>(args: Subset<T, FeatureTagAggregateArgs>): Prisma.PrismaPromise<GetFeatureTagAggregateType<T>>

    /**
     * Group by FeatureTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureTagGroupByArgs} args - Group by arguments.
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
      T extends FeatureTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureTagGroupByArgs['orderBy'] }
        : { orderBy?: FeatureTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureTag model
   */
  readonly fields: FeatureTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FeatureTag model
   */
  interface FeatureTagFieldRefs {
    readonly featureId: FieldRef<"FeatureTag", 'String'>
    readonly tagId: FieldRef<"FeatureTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeatureTag findUnique
   */
  export type FeatureTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureTag to fetch.
     */
    where: FeatureTagWhereUniqueInput
  }

  /**
   * FeatureTag findUniqueOrThrow
   */
  export type FeatureTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureTag to fetch.
     */
    where: FeatureTagWhereUniqueInput
  }

  /**
   * FeatureTag findFirst
   */
  export type FeatureTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureTag to fetch.
     */
    where?: FeatureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureTags to fetch.
     */
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureTags.
     */
    cursor?: FeatureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureTags.
     */
    distinct?: FeatureTagScalarFieldEnum | FeatureTagScalarFieldEnum[]
  }

  /**
   * FeatureTag findFirstOrThrow
   */
  export type FeatureTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureTag to fetch.
     */
    where?: FeatureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureTags to fetch.
     */
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureTags.
     */
    cursor?: FeatureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureTags.
     */
    distinct?: FeatureTagScalarFieldEnum | FeatureTagScalarFieldEnum[]
  }

  /**
   * FeatureTag findMany
   */
  export type FeatureTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter, which FeatureTags to fetch.
     */
    where?: FeatureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureTags to fetch.
     */
    orderBy?: FeatureTagOrderByWithRelationInput | FeatureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureTags.
     */
    cursor?: FeatureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureTags.
     */
    skip?: number
    distinct?: FeatureTagScalarFieldEnum | FeatureTagScalarFieldEnum[]
  }

  /**
   * FeatureTag create
   */
  export type FeatureTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureTag.
     */
    data: XOR<FeatureTagCreateInput, FeatureTagUncheckedCreateInput>
  }

  /**
   * FeatureTag createMany
   */
  export type FeatureTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureTags.
     */
    data: FeatureTagCreateManyInput | FeatureTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureTag createManyAndReturn
   */
  export type FeatureTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * The data used to create many FeatureTags.
     */
    data: FeatureTagCreateManyInput | FeatureTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureTag update
   */
  export type FeatureTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureTag.
     */
    data: XOR<FeatureTagUpdateInput, FeatureTagUncheckedUpdateInput>
    /**
     * Choose, which FeatureTag to update.
     */
    where: FeatureTagWhereUniqueInput
  }

  /**
   * FeatureTag updateMany
   */
  export type FeatureTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureTags.
     */
    data: XOR<FeatureTagUpdateManyMutationInput, FeatureTagUncheckedUpdateManyInput>
    /**
     * Filter which FeatureTags to update
     */
    where?: FeatureTagWhereInput
    /**
     * Limit how many FeatureTags to update.
     */
    limit?: number
  }

  /**
   * FeatureTag updateManyAndReturn
   */
  export type FeatureTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * The data used to update FeatureTags.
     */
    data: XOR<FeatureTagUpdateManyMutationInput, FeatureTagUncheckedUpdateManyInput>
    /**
     * Filter which FeatureTags to update
     */
    where?: FeatureTagWhereInput
    /**
     * Limit how many FeatureTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureTag upsert
   */
  export type FeatureTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureTag to update in case it exists.
     */
    where: FeatureTagWhereUniqueInput
    /**
     * In case the FeatureTag found by the `where` argument doesn't exist, create a new FeatureTag with this data.
     */
    create: XOR<FeatureTagCreateInput, FeatureTagUncheckedCreateInput>
    /**
     * In case the FeatureTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureTagUpdateInput, FeatureTagUncheckedUpdateInput>
  }

  /**
   * FeatureTag delete
   */
  export type FeatureTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
    /**
     * Filter which FeatureTag to delete.
     */
    where: FeatureTagWhereUniqueInput
  }

  /**
   * FeatureTag deleteMany
   */
  export type FeatureTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureTags to delete
     */
    where?: FeatureTagWhereInput
    /**
     * Limit how many FeatureTags to delete.
     */
    limit?: number
  }

  /**
   * FeatureTag without action
   */
  export type FeatureTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureTag
     */
    select?: FeatureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureTag
     */
    omit?: FeatureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureTagInclude<ExtArgs> | null
  }


  /**
   * Model ScenarioTag
   */

  export type AggregateScenarioTag = {
    _count: ScenarioTagCountAggregateOutputType | null
    _min: ScenarioTagMinAggregateOutputType | null
    _max: ScenarioTagMaxAggregateOutputType | null
  }

  export type ScenarioTagMinAggregateOutputType = {
    scenarioId: string | null
    tagId: string | null
  }

  export type ScenarioTagMaxAggregateOutputType = {
    scenarioId: string | null
    tagId: string | null
  }

  export type ScenarioTagCountAggregateOutputType = {
    scenarioId: number
    tagId: number
    _all: number
  }


  export type ScenarioTagMinAggregateInputType = {
    scenarioId?: true
    tagId?: true
  }

  export type ScenarioTagMaxAggregateInputType = {
    scenarioId?: true
    tagId?: true
  }

  export type ScenarioTagCountAggregateInputType = {
    scenarioId?: true
    tagId?: true
    _all?: true
  }

  export type ScenarioTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScenarioTag to aggregate.
     */
    where?: ScenarioTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioTags to fetch.
     */
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScenarioTags
    **/
    _count?: true | ScenarioTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioTagMaxAggregateInputType
  }

  export type GetScenarioTagAggregateType<T extends ScenarioTagAggregateArgs> = {
        [P in keyof T & keyof AggregateScenarioTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenarioTag[P]>
      : GetScalarType<T[P], AggregateScenarioTag[P]>
  }




  export type ScenarioTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioTagWhereInput
    orderBy?: ScenarioTagOrderByWithAggregationInput | ScenarioTagOrderByWithAggregationInput[]
    by: ScenarioTagScalarFieldEnum[] | ScenarioTagScalarFieldEnum
    having?: ScenarioTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioTagCountAggregateInputType | true
    _min?: ScenarioTagMinAggregateInputType
    _max?: ScenarioTagMaxAggregateInputType
  }

  export type ScenarioTagGroupByOutputType = {
    scenarioId: string
    tagId: string
    _count: ScenarioTagCountAggregateOutputType | null
    _min: ScenarioTagMinAggregateOutputType | null
    _max: ScenarioTagMaxAggregateOutputType | null
  }

  type GetScenarioTagGroupByPayload<T extends ScenarioTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioTagGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioTagGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    tagId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioTag"]>

  export type ScenarioTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    tagId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioTag"]>

  export type ScenarioTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scenarioId?: boolean
    tagId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenarioTag"]>

  export type ScenarioTagSelectScalar = {
    scenarioId?: boolean
    tagId?: boolean
  }

  export type ScenarioTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scenarioId" | "tagId", ExtArgs["result"]["scenarioTag"]>
  export type ScenarioTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ScenarioTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ScenarioTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ScenarioTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScenarioTag"
    objects: {
      scenario: Prisma.$ScenarioPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scenarioId: string
      tagId: string
    }, ExtArgs["result"]["scenarioTag"]>
    composites: {}
  }

  type ScenarioTagGetPayload<S extends boolean | null | undefined | ScenarioTagDefaultArgs> = $Result.GetResult<Prisma.$ScenarioTagPayload, S>

  type ScenarioTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioTagCountAggregateInputType | true
    }

  export interface ScenarioTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScenarioTag'], meta: { name: 'ScenarioTag' } }
    /**
     * Find zero or one ScenarioTag that matches the filter.
     * @param {ScenarioTagFindUniqueArgs} args - Arguments to find a ScenarioTag
     * @example
     * // Get one ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioTagFindUniqueArgs>(args: SelectSubset<T, ScenarioTagFindUniqueArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScenarioTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioTagFindUniqueOrThrowArgs} args - Arguments to find a ScenarioTag
     * @example
     * // Get one ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScenarioTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagFindFirstArgs} args - Arguments to find a ScenarioTag
     * @example
     * // Get one ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioTagFindFirstArgs>(args?: SelectSubset<T, ScenarioTagFindFirstArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScenarioTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagFindFirstOrThrowArgs} args - Arguments to find a ScenarioTag
     * @example
     * // Get one ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScenarioTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScenarioTags
     * const scenarioTags = await prisma.scenarioTag.findMany()
     * 
     * // Get first 10 ScenarioTags
     * const scenarioTags = await prisma.scenarioTag.findMany({ take: 10 })
     * 
     * // Only select the `scenarioId`
     * const scenarioTagWithScenarioIdOnly = await prisma.scenarioTag.findMany({ select: { scenarioId: true } })
     * 
     */
    findMany<T extends ScenarioTagFindManyArgs>(args?: SelectSubset<T, ScenarioTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScenarioTag.
     * @param {ScenarioTagCreateArgs} args - Arguments to create a ScenarioTag.
     * @example
     * // Create one ScenarioTag
     * const ScenarioTag = await prisma.scenarioTag.create({
     *   data: {
     *     // ... data to create a ScenarioTag
     *   }
     * })
     * 
     */
    create<T extends ScenarioTagCreateArgs>(args: SelectSubset<T, ScenarioTagCreateArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScenarioTags.
     * @param {ScenarioTagCreateManyArgs} args - Arguments to create many ScenarioTags.
     * @example
     * // Create many ScenarioTags
     * const scenarioTag = await prisma.scenarioTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioTagCreateManyArgs>(args?: SelectSubset<T, ScenarioTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScenarioTags and returns the data saved in the database.
     * @param {ScenarioTagCreateManyAndReturnArgs} args - Arguments to create many ScenarioTags.
     * @example
     * // Create many ScenarioTags
     * const scenarioTag = await prisma.scenarioTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScenarioTags and only return the `scenarioId`
     * const scenarioTagWithScenarioIdOnly = await prisma.scenarioTag.createManyAndReturn({
     *   select: { scenarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScenarioTag.
     * @param {ScenarioTagDeleteArgs} args - Arguments to delete one ScenarioTag.
     * @example
     * // Delete one ScenarioTag
     * const ScenarioTag = await prisma.scenarioTag.delete({
     *   where: {
     *     // ... filter to delete one ScenarioTag
     *   }
     * })
     * 
     */
    delete<T extends ScenarioTagDeleteArgs>(args: SelectSubset<T, ScenarioTagDeleteArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScenarioTag.
     * @param {ScenarioTagUpdateArgs} args - Arguments to update one ScenarioTag.
     * @example
     * // Update one ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioTagUpdateArgs>(args: SelectSubset<T, ScenarioTagUpdateArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScenarioTags.
     * @param {ScenarioTagDeleteManyArgs} args - Arguments to filter ScenarioTags to delete.
     * @example
     * // Delete a few ScenarioTags
     * const { count } = await prisma.scenarioTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioTagDeleteManyArgs>(args?: SelectSubset<T, ScenarioTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScenarioTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScenarioTags
     * const scenarioTag = await prisma.scenarioTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioTagUpdateManyArgs>(args: SelectSubset<T, ScenarioTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScenarioTags and returns the data updated in the database.
     * @param {ScenarioTagUpdateManyAndReturnArgs} args - Arguments to update many ScenarioTags.
     * @example
     * // Update many ScenarioTags
     * const scenarioTag = await prisma.scenarioTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScenarioTags and only return the `scenarioId`
     * const scenarioTagWithScenarioIdOnly = await prisma.scenarioTag.updateManyAndReturn({
     *   select: { scenarioId: true },
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
    updateManyAndReturn<T extends ScenarioTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScenarioTag.
     * @param {ScenarioTagUpsertArgs} args - Arguments to update or create a ScenarioTag.
     * @example
     * // Update or create a ScenarioTag
     * const scenarioTag = await prisma.scenarioTag.upsert({
     *   create: {
     *     // ... data to create a ScenarioTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScenarioTag we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioTagUpsertArgs>(args: SelectSubset<T, ScenarioTagUpsertArgs<ExtArgs>>): Prisma__ScenarioTagClient<$Result.GetResult<Prisma.$ScenarioTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScenarioTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagCountArgs} args - Arguments to filter ScenarioTags to count.
     * @example
     * // Count the number of ScenarioTags
     * const count = await prisma.scenarioTag.count({
     *   where: {
     *     // ... the filter for the ScenarioTags we want to count
     *   }
     * })
    **/
    count<T extends ScenarioTagCountArgs>(
      args?: Subset<T, ScenarioTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScenarioTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioTagAggregateArgs>(args: Subset<T, ScenarioTagAggregateArgs>): Prisma.PrismaPromise<GetScenarioTagAggregateType<T>>

    /**
     * Group by ScenarioTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioTagGroupByArgs} args - Group by arguments.
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
      T extends ScenarioTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioTagGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScenarioTag model
   */
  readonly fields: ScenarioTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScenarioTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScenarioTag model
   */
  interface ScenarioTagFieldRefs {
    readonly scenarioId: FieldRef<"ScenarioTag", 'String'>
    readonly tagId: FieldRef<"ScenarioTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScenarioTag findUnique
   */
  export type ScenarioTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioTag to fetch.
     */
    where: ScenarioTagWhereUniqueInput
  }

  /**
   * ScenarioTag findUniqueOrThrow
   */
  export type ScenarioTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioTag to fetch.
     */
    where: ScenarioTagWhereUniqueInput
  }

  /**
   * ScenarioTag findFirst
   */
  export type ScenarioTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioTag to fetch.
     */
    where?: ScenarioTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioTags to fetch.
     */
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScenarioTags.
     */
    cursor?: ScenarioTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScenarioTags.
     */
    distinct?: ScenarioTagScalarFieldEnum | ScenarioTagScalarFieldEnum[]
  }

  /**
   * ScenarioTag findFirstOrThrow
   */
  export type ScenarioTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioTag to fetch.
     */
    where?: ScenarioTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioTags to fetch.
     */
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScenarioTags.
     */
    cursor?: ScenarioTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScenarioTags.
     */
    distinct?: ScenarioTagScalarFieldEnum | ScenarioTagScalarFieldEnum[]
  }

  /**
   * ScenarioTag findMany
   */
  export type ScenarioTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter, which ScenarioTags to fetch.
     */
    where?: ScenarioTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScenarioTags to fetch.
     */
    orderBy?: ScenarioTagOrderByWithRelationInput | ScenarioTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScenarioTags.
     */
    cursor?: ScenarioTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScenarioTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScenarioTags.
     */
    skip?: number
    distinct?: ScenarioTagScalarFieldEnum | ScenarioTagScalarFieldEnum[]
  }

  /**
   * ScenarioTag create
   */
  export type ScenarioTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ScenarioTag.
     */
    data: XOR<ScenarioTagCreateInput, ScenarioTagUncheckedCreateInput>
  }

  /**
   * ScenarioTag createMany
   */
  export type ScenarioTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScenarioTags.
     */
    data: ScenarioTagCreateManyInput | ScenarioTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScenarioTag createManyAndReturn
   */
  export type ScenarioTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * The data used to create many ScenarioTags.
     */
    data: ScenarioTagCreateManyInput | ScenarioTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScenarioTag update
   */
  export type ScenarioTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ScenarioTag.
     */
    data: XOR<ScenarioTagUpdateInput, ScenarioTagUncheckedUpdateInput>
    /**
     * Choose, which ScenarioTag to update.
     */
    where: ScenarioTagWhereUniqueInput
  }

  /**
   * ScenarioTag updateMany
   */
  export type ScenarioTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScenarioTags.
     */
    data: XOR<ScenarioTagUpdateManyMutationInput, ScenarioTagUncheckedUpdateManyInput>
    /**
     * Filter which ScenarioTags to update
     */
    where?: ScenarioTagWhereInput
    /**
     * Limit how many ScenarioTags to update.
     */
    limit?: number
  }

  /**
   * ScenarioTag updateManyAndReturn
   */
  export type ScenarioTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * The data used to update ScenarioTags.
     */
    data: XOR<ScenarioTagUpdateManyMutationInput, ScenarioTagUncheckedUpdateManyInput>
    /**
     * Filter which ScenarioTags to update
     */
    where?: ScenarioTagWhereInput
    /**
     * Limit how many ScenarioTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScenarioTag upsert
   */
  export type ScenarioTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ScenarioTag to update in case it exists.
     */
    where: ScenarioTagWhereUniqueInput
    /**
     * In case the ScenarioTag found by the `where` argument doesn't exist, create a new ScenarioTag with this data.
     */
    create: XOR<ScenarioTagCreateInput, ScenarioTagUncheckedCreateInput>
    /**
     * In case the ScenarioTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioTagUpdateInput, ScenarioTagUncheckedUpdateInput>
  }

  /**
   * ScenarioTag delete
   */
  export type ScenarioTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
    /**
     * Filter which ScenarioTag to delete.
     */
    where: ScenarioTagWhereUniqueInput
  }

  /**
   * ScenarioTag deleteMany
   */
  export type ScenarioTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScenarioTags to delete
     */
    where?: ScenarioTagWhereInput
    /**
     * Limit how many ScenarioTags to delete.
     */
    limit?: number
  }

  /**
   * ScenarioTag without action
   */
  export type ScenarioTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioTag
     */
    select?: ScenarioTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScenarioTag
     */
    omit?: ScenarioTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioTagInclude<ExtArgs> | null
  }


  /**
   * Model MapNode
   */

  export type AggregateMapNode = {
    _count: MapNodeCountAggregateOutputType | null
    _avg: MapNodeAvgAggregateOutputType | null
    _sum: MapNodeSumAggregateOutputType | null
    _min: MapNodeMinAggregateOutputType | null
    _max: MapNodeMaxAggregateOutputType | null
  }

  export type MapNodeAvgAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    rotation: number | null
    scale: number | null
    zIndex: number | null
  }

  export type MapNodeSumAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    rotation: number | null
    scale: number | null
    zIndex: number | null
  }

  export type MapNodeMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    rotation: number | null
    scale: number | null
    hidden: boolean | null
    zIndex: number | null
  }

  export type MapNodeMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    rotation: number | null
    scale: number | null
    hidden: boolean | null
    zIndex: number | null
  }

  export type MapNodeCountAggregateOutputType = {
    id: number
    x: number
    y: number
    width: number
    height: number
    rotation: number
    scale: number
    hidden: number
    zIndex: number
    _all: number
  }


  export type MapNodeAvgAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    scale?: true
    zIndex?: true
  }

  export type MapNodeSumAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    scale?: true
    zIndex?: true
  }

  export type MapNodeMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    scale?: true
    hidden?: true
    zIndex?: true
  }

  export type MapNodeMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    scale?: true
    hidden?: true
    zIndex?: true
  }

  export type MapNodeCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    rotation?: true
    scale?: true
    hidden?: true
    zIndex?: true
    _all?: true
  }

  export type MapNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNode to aggregate.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapNodes
    **/
    _count?: true | MapNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapNodeMaxAggregateInputType
  }

  export type GetMapNodeAggregateType<T extends MapNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateMapNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapNode[P]>
      : GetScalarType<T[P], AggregateMapNode[P]>
  }




  export type MapNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeWhereInput
    orderBy?: MapNodeOrderByWithAggregationInput | MapNodeOrderByWithAggregationInput[]
    by: MapNodeScalarFieldEnum[] | MapNodeScalarFieldEnum
    having?: MapNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapNodeCountAggregateInputType | true
    _avg?: MapNodeAvgAggregateInputType
    _sum?: MapNodeSumAggregateInputType
    _min?: MapNodeMinAggregateInputType
    _max?: MapNodeMaxAggregateInputType
  }

  export type MapNodeGroupByOutputType = {
    id: string
    x: number
    y: number
    width: number
    height: number
    rotation: number
    scale: number
    hidden: boolean
    zIndex: number | null
    _count: MapNodeCountAggregateOutputType | null
    _avg: MapNodeAvgAggregateOutputType | null
    _sum: MapNodeSumAggregateOutputType | null
    _min: MapNodeMinAggregateOutputType | null
    _max: MapNodeMaxAggregateOutputType | null
  }

  type GetMapNodeGroupByPayload<T extends MapNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapNodeGroupByOutputType[P]>
            : GetScalarType<T[P], MapNodeGroupByOutputType[P]>
        }
      >
    >


  export type MapNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    rotation?: boolean
    scale?: boolean
    hidden?: boolean
    zIndex?: boolean
    featureData?: boolean | MapNode$featureDataArgs<ExtArgs>
    imageData?: boolean | MapNode$imageDataArgs<ExtArgs>
    outgoingDependencies?: boolean | MapNode$outgoingDependenciesArgs<ExtArgs>
    incomingDependencies?: boolean | MapNode$incomingDependenciesArgs<ExtArgs>
    _count?: boolean | MapNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    rotation?: boolean
    scale?: boolean
    hidden?: boolean
    zIndex?: boolean
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    rotation?: boolean
    scale?: boolean
    hidden?: boolean
    zIndex?: boolean
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    rotation?: boolean
    scale?: boolean
    hidden?: boolean
    zIndex?: boolean
  }

  export type MapNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "width" | "height" | "rotation" | "scale" | "hidden" | "zIndex", ExtArgs["result"]["mapNode"]>
  export type MapNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureData?: boolean | MapNode$featureDataArgs<ExtArgs>
    imageData?: boolean | MapNode$imageDataArgs<ExtArgs>
    outgoingDependencies?: boolean | MapNode$outgoingDependenciesArgs<ExtArgs>
    incomingDependencies?: boolean | MapNode$incomingDependenciesArgs<ExtArgs>
    _count?: boolean | MapNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MapNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MapNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapNode"
    objects: {
      featureData: Prisma.$MapNodeFeatureDataPayload<ExtArgs> | null
      imageData: Prisma.$MapNodeImageDataPayload<ExtArgs> | null
      outgoingDependencies: Prisma.$MapNodeDependencyPayload<ExtArgs>[]
      incomingDependencies: Prisma.$MapNodeDependencyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      width: number
      height: number
      rotation: number
      scale: number
      hidden: boolean
      zIndex: number | null
    }, ExtArgs["result"]["mapNode"]>
    composites: {}
  }

  type MapNodeGetPayload<S extends boolean | null | undefined | MapNodeDefaultArgs> = $Result.GetResult<Prisma.$MapNodePayload, S>

  type MapNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapNodeCountAggregateInputType | true
    }

  export interface MapNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapNode'], meta: { name: 'MapNode' } }
    /**
     * Find zero or one MapNode that matches the filter.
     * @param {MapNodeFindUniqueArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapNodeFindUniqueArgs>(args: SelectSubset<T, MapNodeFindUniqueArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapNodeFindUniqueOrThrowArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, MapNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindFirstArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapNodeFindFirstArgs>(args?: SelectSubset<T, MapNodeFindFirstArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindFirstOrThrowArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, MapNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapNodes
     * const mapNodes = await prisma.mapNode.findMany()
     * 
     * // Get first 10 MapNodes
     * const mapNodes = await prisma.mapNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapNodeFindManyArgs>(args?: SelectSubset<T, MapNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapNode.
     * @param {MapNodeCreateArgs} args - Arguments to create a MapNode.
     * @example
     * // Create one MapNode
     * const MapNode = await prisma.mapNode.create({
     *   data: {
     *     // ... data to create a MapNode
     *   }
     * })
     * 
     */
    create<T extends MapNodeCreateArgs>(args: SelectSubset<T, MapNodeCreateArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapNodes.
     * @param {MapNodeCreateManyArgs} args - Arguments to create many MapNodes.
     * @example
     * // Create many MapNodes
     * const mapNode = await prisma.mapNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapNodeCreateManyArgs>(args?: SelectSubset<T, MapNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapNodes and returns the data saved in the database.
     * @param {MapNodeCreateManyAndReturnArgs} args - Arguments to create many MapNodes.
     * @example
     * // Create many MapNodes
     * const mapNode = await prisma.mapNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapNodes and only return the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, MapNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapNode.
     * @param {MapNodeDeleteArgs} args - Arguments to delete one MapNode.
     * @example
     * // Delete one MapNode
     * const MapNode = await prisma.mapNode.delete({
     *   where: {
     *     // ... filter to delete one MapNode
     *   }
     * })
     * 
     */
    delete<T extends MapNodeDeleteArgs>(args: SelectSubset<T, MapNodeDeleteArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapNode.
     * @param {MapNodeUpdateArgs} args - Arguments to update one MapNode.
     * @example
     * // Update one MapNode
     * const mapNode = await prisma.mapNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapNodeUpdateArgs>(args: SelectSubset<T, MapNodeUpdateArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapNodes.
     * @param {MapNodeDeleteManyArgs} args - Arguments to filter MapNodes to delete.
     * @example
     * // Delete a few MapNodes
     * const { count } = await prisma.mapNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapNodeDeleteManyArgs>(args?: SelectSubset<T, MapNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapNodes
     * const mapNode = await prisma.mapNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapNodeUpdateManyArgs>(args: SelectSubset<T, MapNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodes and returns the data updated in the database.
     * @param {MapNodeUpdateManyAndReturnArgs} args - Arguments to update many MapNodes.
     * @example
     * // Update many MapNodes
     * const mapNode = await prisma.mapNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapNodes and only return the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, MapNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapNode.
     * @param {MapNodeUpsertArgs} args - Arguments to update or create a MapNode.
     * @example
     * // Update or create a MapNode
     * const mapNode = await prisma.mapNode.upsert({
     *   create: {
     *     // ... data to create a MapNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapNode we want to update
     *   }
     * })
     */
    upsert<T extends MapNodeUpsertArgs>(args: SelectSubset<T, MapNodeUpsertArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeCountArgs} args - Arguments to filter MapNodes to count.
     * @example
     * // Count the number of MapNodes
     * const count = await prisma.mapNode.count({
     *   where: {
     *     // ... the filter for the MapNodes we want to count
     *   }
     * })
    **/
    count<T extends MapNodeCountArgs>(
      args?: Subset<T, MapNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapNodeAggregateArgs>(args: Subset<T, MapNodeAggregateArgs>): Prisma.PrismaPromise<GetMapNodeAggregateType<T>>

    /**
     * Group by MapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeGroupByArgs} args - Group by arguments.
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
      T extends MapNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapNodeGroupByArgs['orderBy'] }
        : { orderBy?: MapNodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapNode model
   */
  readonly fields: MapNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureData<T extends MapNode$featureDataArgs<ExtArgs> = {}>(args?: Subset<T, MapNode$featureDataArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    imageData<T extends MapNode$imageDataArgs<ExtArgs> = {}>(args?: Subset<T, MapNode$imageDataArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outgoingDependencies<T extends MapNode$outgoingDependenciesArgs<ExtArgs> = {}>(args?: Subset<T, MapNode$outgoingDependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingDependencies<T extends MapNode$incomingDependenciesArgs<ExtArgs> = {}>(args?: Subset<T, MapNode$incomingDependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MapNode model
   */
  interface MapNodeFieldRefs {
    readonly id: FieldRef<"MapNode", 'String'>
    readonly x: FieldRef<"MapNode", 'Float'>
    readonly y: FieldRef<"MapNode", 'Float'>
    readonly width: FieldRef<"MapNode", 'Int'>
    readonly height: FieldRef<"MapNode", 'Int'>
    readonly rotation: FieldRef<"MapNode", 'Int'>
    readonly scale: FieldRef<"MapNode", 'Float'>
    readonly hidden: FieldRef<"MapNode", 'Boolean'>
    readonly zIndex: FieldRef<"MapNode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MapNode findUnique
   */
  export type MapNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode findUniqueOrThrow
   */
  export type MapNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode findFirst
   */
  export type MapNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodes.
     */
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode findFirstOrThrow
   */
  export type MapNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodes.
     */
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode findMany
   */
  export type MapNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNodes to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode create
   */
  export type MapNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a MapNode.
     */
    data: XOR<MapNodeCreateInput, MapNodeUncheckedCreateInput>
  }

  /**
   * MapNode createMany
   */
  export type MapNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapNodes.
     */
    data: MapNodeCreateManyInput | MapNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapNode createManyAndReturn
   */
  export type MapNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * The data used to create many MapNodes.
     */
    data: MapNodeCreateManyInput | MapNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapNode update
   */
  export type MapNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a MapNode.
     */
    data: XOR<MapNodeUpdateInput, MapNodeUncheckedUpdateInput>
    /**
     * Choose, which MapNode to update.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode updateMany
   */
  export type MapNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapNodes.
     */
    data: XOR<MapNodeUpdateManyMutationInput, MapNodeUncheckedUpdateManyInput>
    /**
     * Filter which MapNodes to update
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to update.
     */
    limit?: number
  }

  /**
   * MapNode updateManyAndReturn
   */
  export type MapNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * The data used to update MapNodes.
     */
    data: XOR<MapNodeUpdateManyMutationInput, MapNodeUncheckedUpdateManyInput>
    /**
     * Filter which MapNodes to update
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to update.
     */
    limit?: number
  }

  /**
   * MapNode upsert
   */
  export type MapNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the MapNode to update in case it exists.
     */
    where: MapNodeWhereUniqueInput
    /**
     * In case the MapNode found by the `where` argument doesn't exist, create a new MapNode with this data.
     */
    create: XOR<MapNodeCreateInput, MapNodeUncheckedCreateInput>
    /**
     * In case the MapNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapNodeUpdateInput, MapNodeUncheckedUpdateInput>
  }

  /**
   * MapNode delete
   */
  export type MapNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter which MapNode to delete.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode deleteMany
   */
  export type MapNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodes to delete
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to delete.
     */
    limit?: number
  }

  /**
   * MapNode.featureData
   */
  export type MapNode$featureDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    where?: MapNodeFeatureDataWhereInput
  }

  /**
   * MapNode.imageData
   */
  export type MapNode$imageDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    where?: MapNodeImageDataWhereInput
  }

  /**
   * MapNode.outgoingDependencies
   */
  export type MapNode$outgoingDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    where?: MapNodeDependencyWhereInput
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    cursor?: MapNodeDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapNodeDependencyScalarFieldEnum | MapNodeDependencyScalarFieldEnum[]
  }

  /**
   * MapNode.incomingDependencies
   */
  export type MapNode$incomingDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    where?: MapNodeDependencyWhereInput
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    cursor?: MapNodeDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapNodeDependencyScalarFieldEnum | MapNodeDependencyScalarFieldEnum[]
  }

  /**
   * MapNode without action
   */
  export type MapNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
  }


  /**
   * Model MapNodeFeatureData
   */

  export type AggregateMapNodeFeatureData = {
    _count: MapNodeFeatureDataCountAggregateOutputType | null
    _min: MapNodeFeatureDataMinAggregateOutputType | null
    _max: MapNodeFeatureDataMaxAggregateOutputType | null
  }

  export type MapNodeFeatureDataMinAggregateOutputType = {
    id: string | null
    featureId: string | null
    mapNodeId: string | null
  }

  export type MapNodeFeatureDataMaxAggregateOutputType = {
    id: string | null
    featureId: string | null
    mapNodeId: string | null
  }

  export type MapNodeFeatureDataCountAggregateOutputType = {
    id: number
    featureId: number
    mapNodeId: number
    _all: number
  }


  export type MapNodeFeatureDataMinAggregateInputType = {
    id?: true
    featureId?: true
    mapNodeId?: true
  }

  export type MapNodeFeatureDataMaxAggregateInputType = {
    id?: true
    featureId?: true
    mapNodeId?: true
  }

  export type MapNodeFeatureDataCountAggregateInputType = {
    id?: true
    featureId?: true
    mapNodeId?: true
    _all?: true
  }

  export type MapNodeFeatureDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeFeatureData to aggregate.
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeFeatureData to fetch.
     */
    orderBy?: MapNodeFeatureDataOrderByWithRelationInput | MapNodeFeatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapNodeFeatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeFeatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeFeatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapNodeFeatureData
    **/
    _count?: true | MapNodeFeatureDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapNodeFeatureDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapNodeFeatureDataMaxAggregateInputType
  }

  export type GetMapNodeFeatureDataAggregateType<T extends MapNodeFeatureDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMapNodeFeatureData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapNodeFeatureData[P]>
      : GetScalarType<T[P], AggregateMapNodeFeatureData[P]>
  }




  export type MapNodeFeatureDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeFeatureDataWhereInput
    orderBy?: MapNodeFeatureDataOrderByWithAggregationInput | MapNodeFeatureDataOrderByWithAggregationInput[]
    by: MapNodeFeatureDataScalarFieldEnum[] | MapNodeFeatureDataScalarFieldEnum
    having?: MapNodeFeatureDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapNodeFeatureDataCountAggregateInputType | true
    _min?: MapNodeFeatureDataMinAggregateInputType
    _max?: MapNodeFeatureDataMaxAggregateInputType
  }

  export type MapNodeFeatureDataGroupByOutputType = {
    id: string
    featureId: string
    mapNodeId: string
    _count: MapNodeFeatureDataCountAggregateOutputType | null
    _min: MapNodeFeatureDataMinAggregateOutputType | null
    _max: MapNodeFeatureDataMaxAggregateOutputType | null
  }

  type GetMapNodeFeatureDataGroupByPayload<T extends MapNodeFeatureDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapNodeFeatureDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapNodeFeatureDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapNodeFeatureDataGroupByOutputType[P]>
            : GetScalarType<T[P], MapNodeFeatureDataGroupByOutputType[P]>
        }
      >
    >


  export type MapNodeFeatureDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeFeatureData"]>

  export type MapNodeFeatureDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeFeatureData"]>

  export type MapNodeFeatureDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeFeatureData"]>

  export type MapNodeFeatureDataSelectScalar = {
    id?: boolean
    featureId?: boolean
    mapNodeId?: boolean
  }

  export type MapNodeFeatureDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureId" | "mapNodeId", ExtArgs["result"]["mapNodeFeatureData"]>
  export type MapNodeFeatureDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type MapNodeFeatureDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type MapNodeFeatureDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $MapNodeFeatureDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapNodeFeatureData"
    objects: {
      mapNode: Prisma.$MapNodePayload<ExtArgs>
      feature: Prisma.$FeaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureId: string
      mapNodeId: string
    }, ExtArgs["result"]["mapNodeFeatureData"]>
    composites: {}
  }

  type MapNodeFeatureDataGetPayload<S extends boolean | null | undefined | MapNodeFeatureDataDefaultArgs> = $Result.GetResult<Prisma.$MapNodeFeatureDataPayload, S>

  type MapNodeFeatureDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapNodeFeatureDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapNodeFeatureDataCountAggregateInputType | true
    }

  export interface MapNodeFeatureDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapNodeFeatureData'], meta: { name: 'MapNodeFeatureData' } }
    /**
     * Find zero or one MapNodeFeatureData that matches the filter.
     * @param {MapNodeFeatureDataFindUniqueArgs} args - Arguments to find a MapNodeFeatureData
     * @example
     * // Get one MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapNodeFeatureDataFindUniqueArgs>(args: SelectSubset<T, MapNodeFeatureDataFindUniqueArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapNodeFeatureData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapNodeFeatureDataFindUniqueOrThrowArgs} args - Arguments to find a MapNodeFeatureData
     * @example
     * // Get one MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapNodeFeatureDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MapNodeFeatureDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeFeatureData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataFindFirstArgs} args - Arguments to find a MapNodeFeatureData
     * @example
     * // Get one MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapNodeFeatureDataFindFirstArgs>(args?: SelectSubset<T, MapNodeFeatureDataFindFirstArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeFeatureData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataFindFirstOrThrowArgs} args - Arguments to find a MapNodeFeatureData
     * @example
     * // Get one MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapNodeFeatureDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MapNodeFeatureDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapNodeFeatureData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findMany()
     * 
     * // Get first 10 MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapNodeFeatureDataWithIdOnly = await prisma.mapNodeFeatureData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapNodeFeatureDataFindManyArgs>(args?: SelectSubset<T, MapNodeFeatureDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapNodeFeatureData.
     * @param {MapNodeFeatureDataCreateArgs} args - Arguments to create a MapNodeFeatureData.
     * @example
     * // Create one MapNodeFeatureData
     * const MapNodeFeatureData = await prisma.mapNodeFeatureData.create({
     *   data: {
     *     // ... data to create a MapNodeFeatureData
     *   }
     * })
     * 
     */
    create<T extends MapNodeFeatureDataCreateArgs>(args: SelectSubset<T, MapNodeFeatureDataCreateArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapNodeFeatureData.
     * @param {MapNodeFeatureDataCreateManyArgs} args - Arguments to create many MapNodeFeatureData.
     * @example
     * // Create many MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapNodeFeatureDataCreateManyArgs>(args?: SelectSubset<T, MapNodeFeatureDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapNodeFeatureData and returns the data saved in the database.
     * @param {MapNodeFeatureDataCreateManyAndReturnArgs} args - Arguments to create many MapNodeFeatureData.
     * @example
     * // Create many MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapNodeFeatureData and only return the `id`
     * const mapNodeFeatureDataWithIdOnly = await prisma.mapNodeFeatureData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapNodeFeatureDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MapNodeFeatureDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapNodeFeatureData.
     * @param {MapNodeFeatureDataDeleteArgs} args - Arguments to delete one MapNodeFeatureData.
     * @example
     * // Delete one MapNodeFeatureData
     * const MapNodeFeatureData = await prisma.mapNodeFeatureData.delete({
     *   where: {
     *     // ... filter to delete one MapNodeFeatureData
     *   }
     * })
     * 
     */
    delete<T extends MapNodeFeatureDataDeleteArgs>(args: SelectSubset<T, MapNodeFeatureDataDeleteArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapNodeFeatureData.
     * @param {MapNodeFeatureDataUpdateArgs} args - Arguments to update one MapNodeFeatureData.
     * @example
     * // Update one MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapNodeFeatureDataUpdateArgs>(args: SelectSubset<T, MapNodeFeatureDataUpdateArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapNodeFeatureData.
     * @param {MapNodeFeatureDataDeleteManyArgs} args - Arguments to filter MapNodeFeatureData to delete.
     * @example
     * // Delete a few MapNodeFeatureData
     * const { count } = await prisma.mapNodeFeatureData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapNodeFeatureDataDeleteManyArgs>(args?: SelectSubset<T, MapNodeFeatureDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeFeatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapNodeFeatureDataUpdateManyArgs>(args: SelectSubset<T, MapNodeFeatureDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeFeatureData and returns the data updated in the database.
     * @param {MapNodeFeatureDataUpdateManyAndReturnArgs} args - Arguments to update many MapNodeFeatureData.
     * @example
     * // Update many MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapNodeFeatureData and only return the `id`
     * const mapNodeFeatureDataWithIdOnly = await prisma.mapNodeFeatureData.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapNodeFeatureDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MapNodeFeatureDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapNodeFeatureData.
     * @param {MapNodeFeatureDataUpsertArgs} args - Arguments to update or create a MapNodeFeatureData.
     * @example
     * // Update or create a MapNodeFeatureData
     * const mapNodeFeatureData = await prisma.mapNodeFeatureData.upsert({
     *   create: {
     *     // ... data to create a MapNodeFeatureData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapNodeFeatureData we want to update
     *   }
     * })
     */
    upsert<T extends MapNodeFeatureDataUpsertArgs>(args: SelectSubset<T, MapNodeFeatureDataUpsertArgs<ExtArgs>>): Prisma__MapNodeFeatureDataClient<$Result.GetResult<Prisma.$MapNodeFeatureDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapNodeFeatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataCountArgs} args - Arguments to filter MapNodeFeatureData to count.
     * @example
     * // Count the number of MapNodeFeatureData
     * const count = await prisma.mapNodeFeatureData.count({
     *   where: {
     *     // ... the filter for the MapNodeFeatureData we want to count
     *   }
     * })
    **/
    count<T extends MapNodeFeatureDataCountArgs>(
      args?: Subset<T, MapNodeFeatureDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapNodeFeatureDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapNodeFeatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapNodeFeatureDataAggregateArgs>(args: Subset<T, MapNodeFeatureDataAggregateArgs>): Prisma.PrismaPromise<GetMapNodeFeatureDataAggregateType<T>>

    /**
     * Group by MapNodeFeatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFeatureDataGroupByArgs} args - Group by arguments.
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
      T extends MapNodeFeatureDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapNodeFeatureDataGroupByArgs['orderBy'] }
        : { orderBy?: MapNodeFeatureDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapNodeFeatureDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapNodeFeatureDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapNodeFeatureData model
   */
  readonly fields: MapNodeFeatureDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapNodeFeatureData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapNodeFeatureDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapNode<T extends MapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapNodeDefaultArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapNodeFeatureData model
   */
  interface MapNodeFeatureDataFieldRefs {
    readonly id: FieldRef<"MapNodeFeatureData", 'String'>
    readonly featureId: FieldRef<"MapNodeFeatureData", 'String'>
    readonly mapNodeId: FieldRef<"MapNodeFeatureData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapNodeFeatureData findUnique
   */
  export type MapNodeFeatureDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeFeatureData to fetch.
     */
    where: MapNodeFeatureDataWhereUniqueInput
  }

  /**
   * MapNodeFeatureData findUniqueOrThrow
   */
  export type MapNodeFeatureDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeFeatureData to fetch.
     */
    where: MapNodeFeatureDataWhereUniqueInput
  }

  /**
   * MapNodeFeatureData findFirst
   */
  export type MapNodeFeatureDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeFeatureData to fetch.
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeFeatureData to fetch.
     */
    orderBy?: MapNodeFeatureDataOrderByWithRelationInput | MapNodeFeatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeFeatureData.
     */
    cursor?: MapNodeFeatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeFeatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeFeatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeFeatureData.
     */
    distinct?: MapNodeFeatureDataScalarFieldEnum | MapNodeFeatureDataScalarFieldEnum[]
  }

  /**
   * MapNodeFeatureData findFirstOrThrow
   */
  export type MapNodeFeatureDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeFeatureData to fetch.
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeFeatureData to fetch.
     */
    orderBy?: MapNodeFeatureDataOrderByWithRelationInput | MapNodeFeatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeFeatureData.
     */
    cursor?: MapNodeFeatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeFeatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeFeatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeFeatureData.
     */
    distinct?: MapNodeFeatureDataScalarFieldEnum | MapNodeFeatureDataScalarFieldEnum[]
  }

  /**
   * MapNodeFeatureData findMany
   */
  export type MapNodeFeatureDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeFeatureData to fetch.
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeFeatureData to fetch.
     */
    orderBy?: MapNodeFeatureDataOrderByWithRelationInput | MapNodeFeatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapNodeFeatureData.
     */
    cursor?: MapNodeFeatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeFeatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeFeatureData.
     */
    skip?: number
    distinct?: MapNodeFeatureDataScalarFieldEnum | MapNodeFeatureDataScalarFieldEnum[]
  }

  /**
   * MapNodeFeatureData create
   */
  export type MapNodeFeatureDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MapNodeFeatureData.
     */
    data: XOR<MapNodeFeatureDataCreateInput, MapNodeFeatureDataUncheckedCreateInput>
  }

  /**
   * MapNodeFeatureData createMany
   */
  export type MapNodeFeatureDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapNodeFeatureData.
     */
    data: MapNodeFeatureDataCreateManyInput | MapNodeFeatureDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapNodeFeatureData createManyAndReturn
   */
  export type MapNodeFeatureDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * The data used to create many MapNodeFeatureData.
     */
    data: MapNodeFeatureDataCreateManyInput | MapNodeFeatureDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeFeatureData update
   */
  export type MapNodeFeatureDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MapNodeFeatureData.
     */
    data: XOR<MapNodeFeatureDataUpdateInput, MapNodeFeatureDataUncheckedUpdateInput>
    /**
     * Choose, which MapNodeFeatureData to update.
     */
    where: MapNodeFeatureDataWhereUniqueInput
  }

  /**
   * MapNodeFeatureData updateMany
   */
  export type MapNodeFeatureDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapNodeFeatureData.
     */
    data: XOR<MapNodeFeatureDataUpdateManyMutationInput, MapNodeFeatureDataUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeFeatureData to update
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * Limit how many MapNodeFeatureData to update.
     */
    limit?: number
  }

  /**
   * MapNodeFeatureData updateManyAndReturn
   */
  export type MapNodeFeatureDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * The data used to update MapNodeFeatureData.
     */
    data: XOR<MapNodeFeatureDataUpdateManyMutationInput, MapNodeFeatureDataUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeFeatureData to update
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * Limit how many MapNodeFeatureData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeFeatureData upsert
   */
  export type MapNodeFeatureDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MapNodeFeatureData to update in case it exists.
     */
    where: MapNodeFeatureDataWhereUniqueInput
    /**
     * In case the MapNodeFeatureData found by the `where` argument doesn't exist, create a new MapNodeFeatureData with this data.
     */
    create: XOR<MapNodeFeatureDataCreateInput, MapNodeFeatureDataUncheckedCreateInput>
    /**
     * In case the MapNodeFeatureData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapNodeFeatureDataUpdateInput, MapNodeFeatureDataUncheckedUpdateInput>
  }

  /**
   * MapNodeFeatureData delete
   */
  export type MapNodeFeatureDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
    /**
     * Filter which MapNodeFeatureData to delete.
     */
    where: MapNodeFeatureDataWhereUniqueInput
  }

  /**
   * MapNodeFeatureData deleteMany
   */
  export type MapNodeFeatureDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeFeatureData to delete
     */
    where?: MapNodeFeatureDataWhereInput
    /**
     * Limit how many MapNodeFeatureData to delete.
     */
    limit?: number
  }

  /**
   * MapNodeFeatureData without action
   */
  export type MapNodeFeatureDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeFeatureData
     */
    select?: MapNodeFeatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeFeatureData
     */
    omit?: MapNodeFeatureDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeFeatureDataInclude<ExtArgs> | null
  }


  /**
   * Model MapNodeImageData
   */

  export type AggregateMapNodeImageData = {
    _count: MapNodeImageDataCountAggregateOutputType | null
    _min: MapNodeImageDataMinAggregateOutputType | null
    _max: MapNodeImageDataMaxAggregateOutputType | null
  }

  export type MapNodeImageDataMinAggregateOutputType = {
    id: string | null
    src: string | null
    mapNodeId: string | null
  }

  export type MapNodeImageDataMaxAggregateOutputType = {
    id: string | null
    src: string | null
    mapNodeId: string | null
  }

  export type MapNodeImageDataCountAggregateOutputType = {
    id: number
    src: number
    mapNodeId: number
    _all: number
  }


  export type MapNodeImageDataMinAggregateInputType = {
    id?: true
    src?: true
    mapNodeId?: true
  }

  export type MapNodeImageDataMaxAggregateInputType = {
    id?: true
    src?: true
    mapNodeId?: true
  }

  export type MapNodeImageDataCountAggregateInputType = {
    id?: true
    src?: true
    mapNodeId?: true
    _all?: true
  }

  export type MapNodeImageDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeImageData to aggregate.
     */
    where?: MapNodeImageDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeImageData to fetch.
     */
    orderBy?: MapNodeImageDataOrderByWithRelationInput | MapNodeImageDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapNodeImageDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeImageData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeImageData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapNodeImageData
    **/
    _count?: true | MapNodeImageDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapNodeImageDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapNodeImageDataMaxAggregateInputType
  }

  export type GetMapNodeImageDataAggregateType<T extends MapNodeImageDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMapNodeImageData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapNodeImageData[P]>
      : GetScalarType<T[P], AggregateMapNodeImageData[P]>
  }




  export type MapNodeImageDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeImageDataWhereInput
    orderBy?: MapNodeImageDataOrderByWithAggregationInput | MapNodeImageDataOrderByWithAggregationInput[]
    by: MapNodeImageDataScalarFieldEnum[] | MapNodeImageDataScalarFieldEnum
    having?: MapNodeImageDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapNodeImageDataCountAggregateInputType | true
    _min?: MapNodeImageDataMinAggregateInputType
    _max?: MapNodeImageDataMaxAggregateInputType
  }

  export type MapNodeImageDataGroupByOutputType = {
    id: string
    src: string
    mapNodeId: string
    _count: MapNodeImageDataCountAggregateOutputType | null
    _min: MapNodeImageDataMinAggregateOutputType | null
    _max: MapNodeImageDataMaxAggregateOutputType | null
  }

  type GetMapNodeImageDataGroupByPayload<T extends MapNodeImageDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapNodeImageDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapNodeImageDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapNodeImageDataGroupByOutputType[P]>
            : GetScalarType<T[P], MapNodeImageDataGroupByOutputType[P]>
        }
      >
    >


  export type MapNodeImageDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeImageData"]>

  export type MapNodeImageDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeImageData"]>

  export type MapNodeImageDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    mapNodeId?: boolean
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeImageData"]>

  export type MapNodeImageDataSelectScalar = {
    id?: boolean
    src?: boolean
    mapNodeId?: boolean
  }

  export type MapNodeImageDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "mapNodeId", ExtArgs["result"]["mapNodeImageData"]>
  export type MapNodeImageDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }
  export type MapNodeImageDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }
  export type MapNodeImageDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }

  export type $MapNodeImageDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapNodeImageData"
    objects: {
      mapNode: Prisma.$MapNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      src: string
      mapNodeId: string
    }, ExtArgs["result"]["mapNodeImageData"]>
    composites: {}
  }

  type MapNodeImageDataGetPayload<S extends boolean | null | undefined | MapNodeImageDataDefaultArgs> = $Result.GetResult<Prisma.$MapNodeImageDataPayload, S>

  type MapNodeImageDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapNodeImageDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapNodeImageDataCountAggregateInputType | true
    }

  export interface MapNodeImageDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapNodeImageData'], meta: { name: 'MapNodeImageData' } }
    /**
     * Find zero or one MapNodeImageData that matches the filter.
     * @param {MapNodeImageDataFindUniqueArgs} args - Arguments to find a MapNodeImageData
     * @example
     * // Get one MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapNodeImageDataFindUniqueArgs>(args: SelectSubset<T, MapNodeImageDataFindUniqueArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapNodeImageData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapNodeImageDataFindUniqueOrThrowArgs} args - Arguments to find a MapNodeImageData
     * @example
     * // Get one MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapNodeImageDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MapNodeImageDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeImageData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataFindFirstArgs} args - Arguments to find a MapNodeImageData
     * @example
     * // Get one MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapNodeImageDataFindFirstArgs>(args?: SelectSubset<T, MapNodeImageDataFindFirstArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeImageData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataFindFirstOrThrowArgs} args - Arguments to find a MapNodeImageData
     * @example
     * // Get one MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapNodeImageDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MapNodeImageDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapNodeImageData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findMany()
     * 
     * // Get first 10 MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapNodeImageDataWithIdOnly = await prisma.mapNodeImageData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapNodeImageDataFindManyArgs>(args?: SelectSubset<T, MapNodeImageDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapNodeImageData.
     * @param {MapNodeImageDataCreateArgs} args - Arguments to create a MapNodeImageData.
     * @example
     * // Create one MapNodeImageData
     * const MapNodeImageData = await prisma.mapNodeImageData.create({
     *   data: {
     *     // ... data to create a MapNodeImageData
     *   }
     * })
     * 
     */
    create<T extends MapNodeImageDataCreateArgs>(args: SelectSubset<T, MapNodeImageDataCreateArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapNodeImageData.
     * @param {MapNodeImageDataCreateManyArgs} args - Arguments to create many MapNodeImageData.
     * @example
     * // Create many MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapNodeImageDataCreateManyArgs>(args?: SelectSubset<T, MapNodeImageDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapNodeImageData and returns the data saved in the database.
     * @param {MapNodeImageDataCreateManyAndReturnArgs} args - Arguments to create many MapNodeImageData.
     * @example
     * // Create many MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapNodeImageData and only return the `id`
     * const mapNodeImageDataWithIdOnly = await prisma.mapNodeImageData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapNodeImageDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MapNodeImageDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapNodeImageData.
     * @param {MapNodeImageDataDeleteArgs} args - Arguments to delete one MapNodeImageData.
     * @example
     * // Delete one MapNodeImageData
     * const MapNodeImageData = await prisma.mapNodeImageData.delete({
     *   where: {
     *     // ... filter to delete one MapNodeImageData
     *   }
     * })
     * 
     */
    delete<T extends MapNodeImageDataDeleteArgs>(args: SelectSubset<T, MapNodeImageDataDeleteArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapNodeImageData.
     * @param {MapNodeImageDataUpdateArgs} args - Arguments to update one MapNodeImageData.
     * @example
     * // Update one MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapNodeImageDataUpdateArgs>(args: SelectSubset<T, MapNodeImageDataUpdateArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapNodeImageData.
     * @param {MapNodeImageDataDeleteManyArgs} args - Arguments to filter MapNodeImageData to delete.
     * @example
     * // Delete a few MapNodeImageData
     * const { count } = await prisma.mapNodeImageData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapNodeImageDataDeleteManyArgs>(args?: SelectSubset<T, MapNodeImageDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeImageData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapNodeImageDataUpdateManyArgs>(args: SelectSubset<T, MapNodeImageDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeImageData and returns the data updated in the database.
     * @param {MapNodeImageDataUpdateManyAndReturnArgs} args - Arguments to update many MapNodeImageData.
     * @example
     * // Update many MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapNodeImageData and only return the `id`
     * const mapNodeImageDataWithIdOnly = await prisma.mapNodeImageData.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapNodeImageDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MapNodeImageDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapNodeImageData.
     * @param {MapNodeImageDataUpsertArgs} args - Arguments to update or create a MapNodeImageData.
     * @example
     * // Update or create a MapNodeImageData
     * const mapNodeImageData = await prisma.mapNodeImageData.upsert({
     *   create: {
     *     // ... data to create a MapNodeImageData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapNodeImageData we want to update
     *   }
     * })
     */
    upsert<T extends MapNodeImageDataUpsertArgs>(args: SelectSubset<T, MapNodeImageDataUpsertArgs<ExtArgs>>): Prisma__MapNodeImageDataClient<$Result.GetResult<Prisma.$MapNodeImageDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapNodeImageData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataCountArgs} args - Arguments to filter MapNodeImageData to count.
     * @example
     * // Count the number of MapNodeImageData
     * const count = await prisma.mapNodeImageData.count({
     *   where: {
     *     // ... the filter for the MapNodeImageData we want to count
     *   }
     * })
    **/
    count<T extends MapNodeImageDataCountArgs>(
      args?: Subset<T, MapNodeImageDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapNodeImageDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapNodeImageData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapNodeImageDataAggregateArgs>(args: Subset<T, MapNodeImageDataAggregateArgs>): Prisma.PrismaPromise<GetMapNodeImageDataAggregateType<T>>

    /**
     * Group by MapNodeImageData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeImageDataGroupByArgs} args - Group by arguments.
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
      T extends MapNodeImageDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapNodeImageDataGroupByArgs['orderBy'] }
        : { orderBy?: MapNodeImageDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapNodeImageDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapNodeImageDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapNodeImageData model
   */
  readonly fields: MapNodeImageDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapNodeImageData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapNodeImageDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapNode<T extends MapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapNodeDefaultArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapNodeImageData model
   */
  interface MapNodeImageDataFieldRefs {
    readonly id: FieldRef<"MapNodeImageData", 'String'>
    readonly src: FieldRef<"MapNodeImageData", 'String'>
    readonly mapNodeId: FieldRef<"MapNodeImageData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapNodeImageData findUnique
   */
  export type MapNodeImageDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeImageData to fetch.
     */
    where: MapNodeImageDataWhereUniqueInput
  }

  /**
   * MapNodeImageData findUniqueOrThrow
   */
  export type MapNodeImageDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeImageData to fetch.
     */
    where: MapNodeImageDataWhereUniqueInput
  }

  /**
   * MapNodeImageData findFirst
   */
  export type MapNodeImageDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeImageData to fetch.
     */
    where?: MapNodeImageDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeImageData to fetch.
     */
    orderBy?: MapNodeImageDataOrderByWithRelationInput | MapNodeImageDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeImageData.
     */
    cursor?: MapNodeImageDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeImageData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeImageData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeImageData.
     */
    distinct?: MapNodeImageDataScalarFieldEnum | MapNodeImageDataScalarFieldEnum[]
  }

  /**
   * MapNodeImageData findFirstOrThrow
   */
  export type MapNodeImageDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeImageData to fetch.
     */
    where?: MapNodeImageDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeImageData to fetch.
     */
    orderBy?: MapNodeImageDataOrderByWithRelationInput | MapNodeImageDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeImageData.
     */
    cursor?: MapNodeImageDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeImageData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeImageData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeImageData.
     */
    distinct?: MapNodeImageDataScalarFieldEnum | MapNodeImageDataScalarFieldEnum[]
  }

  /**
   * MapNodeImageData findMany
   */
  export type MapNodeImageDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeImageData to fetch.
     */
    where?: MapNodeImageDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeImageData to fetch.
     */
    orderBy?: MapNodeImageDataOrderByWithRelationInput | MapNodeImageDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapNodeImageData.
     */
    cursor?: MapNodeImageDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeImageData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeImageData.
     */
    skip?: number
    distinct?: MapNodeImageDataScalarFieldEnum | MapNodeImageDataScalarFieldEnum[]
  }

  /**
   * MapNodeImageData create
   */
  export type MapNodeImageDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MapNodeImageData.
     */
    data: XOR<MapNodeImageDataCreateInput, MapNodeImageDataUncheckedCreateInput>
  }

  /**
   * MapNodeImageData createMany
   */
  export type MapNodeImageDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapNodeImageData.
     */
    data: MapNodeImageDataCreateManyInput | MapNodeImageDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapNodeImageData createManyAndReturn
   */
  export type MapNodeImageDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * The data used to create many MapNodeImageData.
     */
    data: MapNodeImageDataCreateManyInput | MapNodeImageDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeImageData update
   */
  export type MapNodeImageDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MapNodeImageData.
     */
    data: XOR<MapNodeImageDataUpdateInput, MapNodeImageDataUncheckedUpdateInput>
    /**
     * Choose, which MapNodeImageData to update.
     */
    where: MapNodeImageDataWhereUniqueInput
  }

  /**
   * MapNodeImageData updateMany
   */
  export type MapNodeImageDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapNodeImageData.
     */
    data: XOR<MapNodeImageDataUpdateManyMutationInput, MapNodeImageDataUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeImageData to update
     */
    where?: MapNodeImageDataWhereInput
    /**
     * Limit how many MapNodeImageData to update.
     */
    limit?: number
  }

  /**
   * MapNodeImageData updateManyAndReturn
   */
  export type MapNodeImageDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * The data used to update MapNodeImageData.
     */
    data: XOR<MapNodeImageDataUpdateManyMutationInput, MapNodeImageDataUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeImageData to update
     */
    where?: MapNodeImageDataWhereInput
    /**
     * Limit how many MapNodeImageData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeImageData upsert
   */
  export type MapNodeImageDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MapNodeImageData to update in case it exists.
     */
    where: MapNodeImageDataWhereUniqueInput
    /**
     * In case the MapNodeImageData found by the `where` argument doesn't exist, create a new MapNodeImageData with this data.
     */
    create: XOR<MapNodeImageDataCreateInput, MapNodeImageDataUncheckedCreateInput>
    /**
     * In case the MapNodeImageData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapNodeImageDataUpdateInput, MapNodeImageDataUncheckedUpdateInput>
  }

  /**
   * MapNodeImageData delete
   */
  export type MapNodeImageDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
    /**
     * Filter which MapNodeImageData to delete.
     */
    where: MapNodeImageDataWhereUniqueInput
  }

  /**
   * MapNodeImageData deleteMany
   */
  export type MapNodeImageDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeImageData to delete
     */
    where?: MapNodeImageDataWhereInput
    /**
     * Limit how many MapNodeImageData to delete.
     */
    limit?: number
  }

  /**
   * MapNodeImageData without action
   */
  export type MapNodeImageDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeImageData
     */
    select?: MapNodeImageDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeImageData
     */
    omit?: MapNodeImageDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeImageDataInclude<ExtArgs> | null
  }


  /**
   * Model MapNodeDependency
   */

  export type AggregateMapNodeDependency = {
    _count: MapNodeDependencyCountAggregateOutputType | null
    _min: MapNodeDependencyMinAggregateOutputType | null
    _max: MapNodeDependencyMaxAggregateOutputType | null
  }

  export type MapNodeDependencyMinAggregateOutputType = {
    id: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
  }

  export type MapNodeDependencyMaxAggregateOutputType = {
    id: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
  }

  export type MapNodeDependencyCountAggregateOutputType = {
    id: number
    sourceNodeId: number
    targetNodeId: number
    _all: number
  }


  export type MapNodeDependencyMinAggregateInputType = {
    id?: true
    sourceNodeId?: true
    targetNodeId?: true
  }

  export type MapNodeDependencyMaxAggregateInputType = {
    id?: true
    sourceNodeId?: true
    targetNodeId?: true
  }

  export type MapNodeDependencyCountAggregateInputType = {
    id?: true
    sourceNodeId?: true
    targetNodeId?: true
    _all?: true
  }

  export type MapNodeDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeDependency to aggregate.
     */
    where?: MapNodeDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeDependencies to fetch.
     */
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapNodeDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapNodeDependencies
    **/
    _count?: true | MapNodeDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapNodeDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapNodeDependencyMaxAggregateInputType
  }

  export type GetMapNodeDependencyAggregateType<T extends MapNodeDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateMapNodeDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapNodeDependency[P]>
      : GetScalarType<T[P], AggregateMapNodeDependency[P]>
  }




  export type MapNodeDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeDependencyWhereInput
    orderBy?: MapNodeDependencyOrderByWithAggregationInput | MapNodeDependencyOrderByWithAggregationInput[]
    by: MapNodeDependencyScalarFieldEnum[] | MapNodeDependencyScalarFieldEnum
    having?: MapNodeDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapNodeDependencyCountAggregateInputType | true
    _min?: MapNodeDependencyMinAggregateInputType
    _max?: MapNodeDependencyMaxAggregateInputType
  }

  export type MapNodeDependencyGroupByOutputType = {
    id: string
    sourceNodeId: string
    targetNodeId: string
    _count: MapNodeDependencyCountAggregateOutputType | null
    _min: MapNodeDependencyMinAggregateOutputType | null
    _max: MapNodeDependencyMaxAggregateOutputType | null
  }

  type GetMapNodeDependencyGroupByPayload<T extends MapNodeDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapNodeDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapNodeDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapNodeDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], MapNodeDependencyGroupByOutputType[P]>
        }
      >
    >


  export type MapNodeDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeDependency"]>

  export type MapNodeDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeDependency"]>

  export type MapNodeDependencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNodeDependency"]>

  export type MapNodeDependencySelectScalar = {
    id?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
  }

  export type MapNodeDependencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceNodeId" | "targetNodeId", ExtArgs["result"]["mapNodeDependency"]>
  export type MapNodeDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }
  export type MapNodeDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }
  export type MapNodeDependencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceNode?: boolean | MapNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | MapNodeDefaultArgs<ExtArgs>
  }

  export type $MapNodeDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapNodeDependency"
    objects: {
      sourceNode: Prisma.$MapNodePayload<ExtArgs>
      targetNode: Prisma.$MapNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceNodeId: string
      targetNodeId: string
    }, ExtArgs["result"]["mapNodeDependency"]>
    composites: {}
  }

  type MapNodeDependencyGetPayload<S extends boolean | null | undefined | MapNodeDependencyDefaultArgs> = $Result.GetResult<Prisma.$MapNodeDependencyPayload, S>

  type MapNodeDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapNodeDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapNodeDependencyCountAggregateInputType | true
    }

  export interface MapNodeDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapNodeDependency'], meta: { name: 'MapNodeDependency' } }
    /**
     * Find zero or one MapNodeDependency that matches the filter.
     * @param {MapNodeDependencyFindUniqueArgs} args - Arguments to find a MapNodeDependency
     * @example
     * // Get one MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapNodeDependencyFindUniqueArgs>(args: SelectSubset<T, MapNodeDependencyFindUniqueArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapNodeDependency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapNodeDependencyFindUniqueOrThrowArgs} args - Arguments to find a MapNodeDependency
     * @example
     * // Get one MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapNodeDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, MapNodeDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyFindFirstArgs} args - Arguments to find a MapNodeDependency
     * @example
     * // Get one MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapNodeDependencyFindFirstArgs>(args?: SelectSubset<T, MapNodeDependencyFindFirstArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNodeDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyFindFirstOrThrowArgs} args - Arguments to find a MapNodeDependency
     * @example
     * // Get one MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapNodeDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, MapNodeDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapNodeDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapNodeDependencies
     * const mapNodeDependencies = await prisma.mapNodeDependency.findMany()
     * 
     * // Get first 10 MapNodeDependencies
     * const mapNodeDependencies = await prisma.mapNodeDependency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapNodeDependencyWithIdOnly = await prisma.mapNodeDependency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapNodeDependencyFindManyArgs>(args?: SelectSubset<T, MapNodeDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapNodeDependency.
     * @param {MapNodeDependencyCreateArgs} args - Arguments to create a MapNodeDependency.
     * @example
     * // Create one MapNodeDependency
     * const MapNodeDependency = await prisma.mapNodeDependency.create({
     *   data: {
     *     // ... data to create a MapNodeDependency
     *   }
     * })
     * 
     */
    create<T extends MapNodeDependencyCreateArgs>(args: SelectSubset<T, MapNodeDependencyCreateArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapNodeDependencies.
     * @param {MapNodeDependencyCreateManyArgs} args - Arguments to create many MapNodeDependencies.
     * @example
     * // Create many MapNodeDependencies
     * const mapNodeDependency = await prisma.mapNodeDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapNodeDependencyCreateManyArgs>(args?: SelectSubset<T, MapNodeDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapNodeDependencies and returns the data saved in the database.
     * @param {MapNodeDependencyCreateManyAndReturnArgs} args - Arguments to create many MapNodeDependencies.
     * @example
     * // Create many MapNodeDependencies
     * const mapNodeDependency = await prisma.mapNodeDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapNodeDependencies and only return the `id`
     * const mapNodeDependencyWithIdOnly = await prisma.mapNodeDependency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapNodeDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, MapNodeDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapNodeDependency.
     * @param {MapNodeDependencyDeleteArgs} args - Arguments to delete one MapNodeDependency.
     * @example
     * // Delete one MapNodeDependency
     * const MapNodeDependency = await prisma.mapNodeDependency.delete({
     *   where: {
     *     // ... filter to delete one MapNodeDependency
     *   }
     * })
     * 
     */
    delete<T extends MapNodeDependencyDeleteArgs>(args: SelectSubset<T, MapNodeDependencyDeleteArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapNodeDependency.
     * @param {MapNodeDependencyUpdateArgs} args - Arguments to update one MapNodeDependency.
     * @example
     * // Update one MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapNodeDependencyUpdateArgs>(args: SelectSubset<T, MapNodeDependencyUpdateArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapNodeDependencies.
     * @param {MapNodeDependencyDeleteManyArgs} args - Arguments to filter MapNodeDependencies to delete.
     * @example
     * // Delete a few MapNodeDependencies
     * const { count } = await prisma.mapNodeDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapNodeDependencyDeleteManyArgs>(args?: SelectSubset<T, MapNodeDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapNodeDependencies
     * const mapNodeDependency = await prisma.mapNodeDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapNodeDependencyUpdateManyArgs>(args: SelectSubset<T, MapNodeDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodeDependencies and returns the data updated in the database.
     * @param {MapNodeDependencyUpdateManyAndReturnArgs} args - Arguments to update many MapNodeDependencies.
     * @example
     * // Update many MapNodeDependencies
     * const mapNodeDependency = await prisma.mapNodeDependency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapNodeDependencies and only return the `id`
     * const mapNodeDependencyWithIdOnly = await prisma.mapNodeDependency.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapNodeDependencyUpdateManyAndReturnArgs>(args: SelectSubset<T, MapNodeDependencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapNodeDependency.
     * @param {MapNodeDependencyUpsertArgs} args - Arguments to update or create a MapNodeDependency.
     * @example
     * // Update or create a MapNodeDependency
     * const mapNodeDependency = await prisma.mapNodeDependency.upsert({
     *   create: {
     *     // ... data to create a MapNodeDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapNodeDependency we want to update
     *   }
     * })
     */
    upsert<T extends MapNodeDependencyUpsertArgs>(args: SelectSubset<T, MapNodeDependencyUpsertArgs<ExtArgs>>): Prisma__MapNodeDependencyClient<$Result.GetResult<Prisma.$MapNodeDependencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapNodeDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyCountArgs} args - Arguments to filter MapNodeDependencies to count.
     * @example
     * // Count the number of MapNodeDependencies
     * const count = await prisma.mapNodeDependency.count({
     *   where: {
     *     // ... the filter for the MapNodeDependencies we want to count
     *   }
     * })
    **/
    count<T extends MapNodeDependencyCountArgs>(
      args?: Subset<T, MapNodeDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapNodeDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapNodeDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapNodeDependencyAggregateArgs>(args: Subset<T, MapNodeDependencyAggregateArgs>): Prisma.PrismaPromise<GetMapNodeDependencyAggregateType<T>>

    /**
     * Group by MapNodeDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeDependencyGroupByArgs} args - Group by arguments.
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
      T extends MapNodeDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapNodeDependencyGroupByArgs['orderBy'] }
        : { orderBy?: MapNodeDependencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapNodeDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapNodeDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapNodeDependency model
   */
  readonly fields: MapNodeDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapNodeDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapNodeDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceNode<T extends MapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapNodeDefaultArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetNode<T extends MapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapNodeDefaultArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapNodeDependency model
   */
  interface MapNodeDependencyFieldRefs {
    readonly id: FieldRef<"MapNodeDependency", 'String'>
    readonly sourceNodeId: FieldRef<"MapNodeDependency", 'String'>
    readonly targetNodeId: FieldRef<"MapNodeDependency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapNodeDependency findUnique
   */
  export type MapNodeDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeDependency to fetch.
     */
    where: MapNodeDependencyWhereUniqueInput
  }

  /**
   * MapNodeDependency findUniqueOrThrow
   */
  export type MapNodeDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeDependency to fetch.
     */
    where: MapNodeDependencyWhereUniqueInput
  }

  /**
   * MapNodeDependency findFirst
   */
  export type MapNodeDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeDependency to fetch.
     */
    where?: MapNodeDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeDependencies to fetch.
     */
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeDependencies.
     */
    cursor?: MapNodeDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeDependencies.
     */
    distinct?: MapNodeDependencyScalarFieldEnum | MapNodeDependencyScalarFieldEnum[]
  }

  /**
   * MapNodeDependency findFirstOrThrow
   */
  export type MapNodeDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeDependency to fetch.
     */
    where?: MapNodeDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeDependencies to fetch.
     */
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodeDependencies.
     */
    cursor?: MapNodeDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodeDependencies.
     */
    distinct?: MapNodeDependencyScalarFieldEnum | MapNodeDependencyScalarFieldEnum[]
  }

  /**
   * MapNodeDependency findMany
   */
  export type MapNodeDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter, which MapNodeDependencies to fetch.
     */
    where?: MapNodeDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodeDependencies to fetch.
     */
    orderBy?: MapNodeDependencyOrderByWithRelationInput | MapNodeDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapNodeDependencies.
     */
    cursor?: MapNodeDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodeDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodeDependencies.
     */
    skip?: number
    distinct?: MapNodeDependencyScalarFieldEnum | MapNodeDependencyScalarFieldEnum[]
  }

  /**
   * MapNodeDependency create
   */
  export type MapNodeDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a MapNodeDependency.
     */
    data: XOR<MapNodeDependencyCreateInput, MapNodeDependencyUncheckedCreateInput>
  }

  /**
   * MapNodeDependency createMany
   */
  export type MapNodeDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapNodeDependencies.
     */
    data: MapNodeDependencyCreateManyInput | MapNodeDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapNodeDependency createManyAndReturn
   */
  export type MapNodeDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * The data used to create many MapNodeDependencies.
     */
    data: MapNodeDependencyCreateManyInput | MapNodeDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeDependency update
   */
  export type MapNodeDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a MapNodeDependency.
     */
    data: XOR<MapNodeDependencyUpdateInput, MapNodeDependencyUncheckedUpdateInput>
    /**
     * Choose, which MapNodeDependency to update.
     */
    where: MapNodeDependencyWhereUniqueInput
  }

  /**
   * MapNodeDependency updateMany
   */
  export type MapNodeDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapNodeDependencies.
     */
    data: XOR<MapNodeDependencyUpdateManyMutationInput, MapNodeDependencyUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeDependencies to update
     */
    where?: MapNodeDependencyWhereInput
    /**
     * Limit how many MapNodeDependencies to update.
     */
    limit?: number
  }

  /**
   * MapNodeDependency updateManyAndReturn
   */
  export type MapNodeDependencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * The data used to update MapNodeDependencies.
     */
    data: XOR<MapNodeDependencyUpdateManyMutationInput, MapNodeDependencyUncheckedUpdateManyInput>
    /**
     * Filter which MapNodeDependencies to update
     */
    where?: MapNodeDependencyWhereInput
    /**
     * Limit how many MapNodeDependencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNodeDependency upsert
   */
  export type MapNodeDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the MapNodeDependency to update in case it exists.
     */
    where: MapNodeDependencyWhereUniqueInput
    /**
     * In case the MapNodeDependency found by the `where` argument doesn't exist, create a new MapNodeDependency with this data.
     */
    create: XOR<MapNodeDependencyCreateInput, MapNodeDependencyUncheckedCreateInput>
    /**
     * In case the MapNodeDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapNodeDependencyUpdateInput, MapNodeDependencyUncheckedUpdateInput>
  }

  /**
   * MapNodeDependency delete
   */
  export type MapNodeDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
    /**
     * Filter which MapNodeDependency to delete.
     */
    where: MapNodeDependencyWhereUniqueInput
  }

  /**
   * MapNodeDependency deleteMany
   */
  export type MapNodeDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodeDependencies to delete
     */
    where?: MapNodeDependencyWhereInput
    /**
     * Limit how many MapNodeDependencies to delete.
     */
    limit?: number
  }

  /**
   * MapNodeDependency without action
   */
  export type MapNodeDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNodeDependency
     */
    select?: MapNodeDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNodeDependency
     */
    omit?: MapNodeDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeDependencyInclude<ExtArgs> | null
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


  export const RunScalarFieldEnum: {
    id: 'id',
    runNumber: 'runNumber',
    status: 'status',
    browser: 'browser',
    platform: 'platform',
    environment: 'environment',
    featuresCount: 'featuresCount',
    scenariosCount: 'scenariosCount',
    stepsCount: 'stepsCount',
    passCount: 'passCount',
    failCount: 'failCount',
    skipCount: 'skipCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    duration: 'duration',
    auto: 'auto'
  };

  export type RunScalarFieldEnum = (typeof RunScalarFieldEnum)[keyof typeof RunScalarFieldEnum]


  export const RunFeatureScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    featureId: 'featureId',
    status: 'status',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type RunFeatureScalarFieldEnum = (typeof RunFeatureScalarFieldEnum)[keyof typeof RunFeatureScalarFieldEnum]


  export const RunScenarioScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    scenarioId: 'scenarioId',
    status: 'status',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type RunScenarioScalarFieldEnum = (typeof RunScenarioScalarFieldEnum)[keyof typeof RunScenarioScalarFieldEnum]


  export const RunStepScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    stepId: 'stepId',
    scenarioId: 'scenarioId',
    status: 'status',
    duration: 'duration',
    errorMessage: 'errorMessage',
    stackTrace: 'stackTrace',
    createdAt: 'createdAt'
  };

  export type RunStepScalarFieldEnum = (typeof RunStepScalarFieldEnum)[keyof typeof RunStepScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    name: 'name',
    description: 'description',
    active: 'active',
    contentHash: 'contentHash'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    featureId: 'featureId',
    keyword: 'keyword',
    name: 'name',
    description: 'description',
    active: 'active',
    contentHash: 'contentHash'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    name: 'name',
    contentHash: 'contentHash',
    active: 'active',
    media: 'media'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const ScenarioStepScalarFieldEnum: {
    scenarioId: 'scenarioId',
    stepId: 'stepId',
    keyword: 'keyword'
  };

  export type ScenarioStepScalarFieldEnum = (typeof ScenarioStepScalarFieldEnum)[keyof typeof ScenarioStepScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const FeatureTagScalarFieldEnum: {
    featureId: 'featureId',
    tagId: 'tagId'
  };

  export type FeatureTagScalarFieldEnum = (typeof FeatureTagScalarFieldEnum)[keyof typeof FeatureTagScalarFieldEnum]


  export const ScenarioTagScalarFieldEnum: {
    scenarioId: 'scenarioId',
    tagId: 'tagId'
  };

  export type ScenarioTagScalarFieldEnum = (typeof ScenarioTagScalarFieldEnum)[keyof typeof ScenarioTagScalarFieldEnum]


  export const MapNodeScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    rotation: 'rotation',
    scale: 'scale',
    hidden: 'hidden',
    zIndex: 'zIndex'
  };

  export type MapNodeScalarFieldEnum = (typeof MapNodeScalarFieldEnum)[keyof typeof MapNodeScalarFieldEnum]


  export const MapNodeFeatureDataScalarFieldEnum: {
    id: 'id',
    featureId: 'featureId',
    mapNodeId: 'mapNodeId'
  };

  export type MapNodeFeatureDataScalarFieldEnum = (typeof MapNodeFeatureDataScalarFieldEnum)[keyof typeof MapNodeFeatureDataScalarFieldEnum]


  export const MapNodeImageDataScalarFieldEnum: {
    id: 'id',
    src: 'src',
    mapNodeId: 'mapNodeId'
  };

  export type MapNodeImageDataScalarFieldEnum = (typeof MapNodeImageDataScalarFieldEnum)[keyof typeof MapNodeImageDataScalarFieldEnum]


  export const MapNodeDependencyScalarFieldEnum: {
    id: 'id',
    sourceNodeId: 'sourceNodeId',
    targetNodeId: 'targetNodeId'
  };

  export type MapNodeDependencyScalarFieldEnum = (typeof MapNodeDependencyScalarFieldEnum)[keyof typeof MapNodeDependencyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type RunWhereInput = {
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    id?: StringFilter<"Run"> | string
    runNumber?: IntFilter<"Run"> | number
    status?: EnumStatusFilter<"Run"> | $Enums.Status
    browser?: StringFilter<"Run"> | string
    platform?: StringFilter<"Run"> | string
    environment?: StringFilter<"Run"> | string
    featuresCount?: IntFilter<"Run"> | number
    scenariosCount?: IntFilter<"Run"> | number
    stepsCount?: IntFilter<"Run"> | number
    passCount?: IntFilter<"Run"> | number
    failCount?: IntFilter<"Run"> | number
    skipCount?: IntFilter<"Run"> | number
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    duration?: IntNullableFilter<"Run"> | number | null
    auto?: BoolFilter<"Run"> | boolean
    RunFeature?: RunFeatureListRelationFilter
    RunScenario?: RunScenarioListRelationFilter
    RunStep?: RunStepListRelationFilter
  }

  export type RunOrderByWithRelationInput = {
    id?: SortOrder
    runNumber?: SortOrder
    status?: SortOrder
    browser?: SortOrder
    platform?: SortOrder
    environment?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    duration?: SortOrderInput | SortOrder
    auto?: SortOrder
    RunFeature?: RunFeatureOrderByRelationAggregateInput
    RunScenario?: RunScenarioOrderByRelationAggregateInput
    RunStep?: RunStepOrderByRelationAggregateInput
  }

  export type RunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runNumber?: number
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    status?: EnumStatusFilter<"Run"> | $Enums.Status
    browser?: StringFilter<"Run"> | string
    platform?: StringFilter<"Run"> | string
    environment?: StringFilter<"Run"> | string
    featuresCount?: IntFilter<"Run"> | number
    scenariosCount?: IntFilter<"Run"> | number
    stepsCount?: IntFilter<"Run"> | number
    passCount?: IntFilter<"Run"> | number
    failCount?: IntFilter<"Run"> | number
    skipCount?: IntFilter<"Run"> | number
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    duration?: IntNullableFilter<"Run"> | number | null
    auto?: BoolFilter<"Run"> | boolean
    RunFeature?: RunFeatureListRelationFilter
    RunScenario?: RunScenarioListRelationFilter
    RunStep?: RunStepListRelationFilter
  }, "id" | "runNumber">

  export type RunOrderByWithAggregationInput = {
    id?: SortOrder
    runNumber?: SortOrder
    status?: SortOrder
    browser?: SortOrder
    platform?: SortOrder
    environment?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    duration?: SortOrderInput | SortOrder
    auto?: SortOrder
    _count?: RunCountOrderByAggregateInput
    _avg?: RunAvgOrderByAggregateInput
    _max?: RunMaxOrderByAggregateInput
    _min?: RunMinOrderByAggregateInput
    _sum?: RunSumOrderByAggregateInput
  }

  export type RunScalarWhereWithAggregatesInput = {
    AND?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    OR?: RunScalarWhereWithAggregatesInput[]
    NOT?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Run"> | string
    runNumber?: IntWithAggregatesFilter<"Run"> | number
    status?: EnumStatusWithAggregatesFilter<"Run"> | $Enums.Status
    browser?: StringWithAggregatesFilter<"Run"> | string
    platform?: StringWithAggregatesFilter<"Run"> | string
    environment?: StringWithAggregatesFilter<"Run"> | string
    featuresCount?: IntWithAggregatesFilter<"Run"> | number
    scenariosCount?: IntWithAggregatesFilter<"Run"> | number
    stepsCount?: IntWithAggregatesFilter<"Run"> | number
    passCount?: IntWithAggregatesFilter<"Run"> | number
    failCount?: IntWithAggregatesFilter<"Run"> | number
    skipCount?: IntWithAggregatesFilter<"Run"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    duration?: IntNullableWithAggregatesFilter<"Run"> | number | null
    auto?: BoolWithAggregatesFilter<"Run"> | boolean
  }

  export type RunFeatureWhereInput = {
    AND?: RunFeatureWhereInput | RunFeatureWhereInput[]
    OR?: RunFeatureWhereInput[]
    NOT?: RunFeatureWhereInput | RunFeatureWhereInput[]
    id?: StringFilter<"RunFeature"> | string
    runId?: StringFilter<"RunFeature"> | string
    featureId?: StringFilter<"RunFeature"> | string
    status?: EnumStatusFilter<"RunFeature"> | $Enums.Status
    duration?: IntNullableFilter<"RunFeature"> | number | null
    createdAt?: DateTimeFilter<"RunFeature"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }

  export type RunFeatureOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    featureId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: RunOrderByWithRelationInput
    feature?: FeatureOrderByWithRelationInput
  }

  export type RunFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_featureId?: RunFeatureRunIdFeatureIdCompoundUniqueInput
    AND?: RunFeatureWhereInput | RunFeatureWhereInput[]
    OR?: RunFeatureWhereInput[]
    NOT?: RunFeatureWhereInput | RunFeatureWhereInput[]
    runId?: StringFilter<"RunFeature"> | string
    featureId?: StringFilter<"RunFeature"> | string
    status?: EnumStatusFilter<"RunFeature"> | $Enums.Status
    duration?: IntNullableFilter<"RunFeature"> | number | null
    createdAt?: DateTimeFilter<"RunFeature"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }, "id" | "runId_featureId">

  export type RunFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    featureId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RunFeatureCountOrderByAggregateInput
    _avg?: RunFeatureAvgOrderByAggregateInput
    _max?: RunFeatureMaxOrderByAggregateInput
    _min?: RunFeatureMinOrderByAggregateInput
    _sum?: RunFeatureSumOrderByAggregateInput
  }

  export type RunFeatureScalarWhereWithAggregatesInput = {
    AND?: RunFeatureScalarWhereWithAggregatesInput | RunFeatureScalarWhereWithAggregatesInput[]
    OR?: RunFeatureScalarWhereWithAggregatesInput[]
    NOT?: RunFeatureScalarWhereWithAggregatesInput | RunFeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RunFeature"> | string
    runId?: StringWithAggregatesFilter<"RunFeature"> | string
    featureId?: StringWithAggregatesFilter<"RunFeature"> | string
    status?: EnumStatusWithAggregatesFilter<"RunFeature"> | $Enums.Status
    duration?: IntNullableWithAggregatesFilter<"RunFeature"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RunFeature"> | Date | string
  }

  export type RunScenarioWhereInput = {
    AND?: RunScenarioWhereInput | RunScenarioWhereInput[]
    OR?: RunScenarioWhereInput[]
    NOT?: RunScenarioWhereInput | RunScenarioWhereInput[]
    id?: StringFilter<"RunScenario"> | string
    runId?: StringFilter<"RunScenario"> | string
    scenarioId?: StringFilter<"RunScenario"> | string
    status?: EnumStatusFilter<"RunScenario"> | $Enums.Status
    duration?: IntNullableFilter<"RunScenario"> | number | null
    createdAt?: DateTimeFilter<"RunScenario"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }

  export type RunScenarioOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: RunOrderByWithRelationInput
    scenario?: ScenarioOrderByWithRelationInput
  }

  export type RunScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_scenarioId?: RunScenarioRunIdScenarioIdCompoundUniqueInput
    AND?: RunScenarioWhereInput | RunScenarioWhereInput[]
    OR?: RunScenarioWhereInput[]
    NOT?: RunScenarioWhereInput | RunScenarioWhereInput[]
    runId?: StringFilter<"RunScenario"> | string
    scenarioId?: StringFilter<"RunScenario"> | string
    status?: EnumStatusFilter<"RunScenario"> | $Enums.Status
    duration?: IntNullableFilter<"RunScenario"> | number | null
    createdAt?: DateTimeFilter<"RunScenario"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }, "id" | "runId_scenarioId">

  export type RunScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RunScenarioCountOrderByAggregateInput
    _avg?: RunScenarioAvgOrderByAggregateInput
    _max?: RunScenarioMaxOrderByAggregateInput
    _min?: RunScenarioMinOrderByAggregateInput
    _sum?: RunScenarioSumOrderByAggregateInput
  }

  export type RunScenarioScalarWhereWithAggregatesInput = {
    AND?: RunScenarioScalarWhereWithAggregatesInput | RunScenarioScalarWhereWithAggregatesInput[]
    OR?: RunScenarioScalarWhereWithAggregatesInput[]
    NOT?: RunScenarioScalarWhereWithAggregatesInput | RunScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RunScenario"> | string
    runId?: StringWithAggregatesFilter<"RunScenario"> | string
    scenarioId?: StringWithAggregatesFilter<"RunScenario"> | string
    status?: EnumStatusWithAggregatesFilter<"RunScenario"> | $Enums.Status
    duration?: IntNullableWithAggregatesFilter<"RunScenario"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RunScenario"> | Date | string
  }

  export type RunStepWhereInput = {
    AND?: RunStepWhereInput | RunStepWhereInput[]
    OR?: RunStepWhereInput[]
    NOT?: RunStepWhereInput | RunStepWhereInput[]
    id?: StringFilter<"RunStep"> | string
    runId?: StringFilter<"RunStep"> | string
    stepId?: StringFilter<"RunStep"> | string
    scenarioId?: StringFilter<"RunStep"> | string
    status?: EnumStatusFilter<"RunStep"> | $Enums.Status
    duration?: IntNullableFilter<"RunStep"> | number | null
    errorMessage?: StringNullableFilter<"RunStep"> | string | null
    stackTrace?: StringNullableFilter<"RunStep"> | string | null
    createdAt?: DateTimeFilter<"RunStep"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }

  export type RunStepOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    stepId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    stackTrace?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: RunOrderByWithRelationInput
    step?: StepOrderByWithRelationInput
    scenario?: ScenarioOrderByWithRelationInput
  }

  export type RunStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_stepId_scenarioId?: RunStepRunIdStepIdScenarioIdCompoundUniqueInput
    AND?: RunStepWhereInput | RunStepWhereInput[]
    OR?: RunStepWhereInput[]
    NOT?: RunStepWhereInput | RunStepWhereInput[]
    runId?: StringFilter<"RunStep"> | string
    stepId?: StringFilter<"RunStep"> | string
    scenarioId?: StringFilter<"RunStep"> | string
    status?: EnumStatusFilter<"RunStep"> | $Enums.Status
    duration?: IntNullableFilter<"RunStep"> | number | null
    errorMessage?: StringNullableFilter<"RunStep"> | string | null
    stackTrace?: StringNullableFilter<"RunStep"> | string | null
    createdAt?: DateTimeFilter<"RunStep"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }, "id" | "runId_stepId_scenarioId">

  export type RunStepOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    stepId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    stackTrace?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RunStepCountOrderByAggregateInput
    _avg?: RunStepAvgOrderByAggregateInput
    _max?: RunStepMaxOrderByAggregateInput
    _min?: RunStepMinOrderByAggregateInput
    _sum?: RunStepSumOrderByAggregateInput
  }

  export type RunStepScalarWhereWithAggregatesInput = {
    AND?: RunStepScalarWhereWithAggregatesInput | RunStepScalarWhereWithAggregatesInput[]
    OR?: RunStepScalarWhereWithAggregatesInput[]
    NOT?: RunStepScalarWhereWithAggregatesInput | RunStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RunStep"> | string
    runId?: StringWithAggregatesFilter<"RunStep"> | string
    stepId?: StringWithAggregatesFilter<"RunStep"> | string
    scenarioId?: StringWithAggregatesFilter<"RunStep"> | string
    status?: EnumStatusWithAggregatesFilter<"RunStep"> | $Enums.Status
    duration?: IntNullableWithAggregatesFilter<"RunStep"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"RunStep"> | string | null
    stackTrace?: StringNullableWithAggregatesFilter<"RunStep"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RunStep"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    keyword?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    description?: StringNullableFilter<"Feature"> | string | null
    active?: BoolFilter<"Feature"> | boolean
    contentHash?: StringNullableFilter<"Feature"> | string | null
    featureTags?: FeatureTagListRelationFilter
    RunFeature?: RunFeatureListRelationFilter
    MapNodeFeatureData?: XOR<MapNodeFeatureDataNullableScalarRelationFilter, MapNodeFeatureDataWhereInput> | null
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    featureTags?: FeatureTagOrderByRelationAggregateInput
    RunFeature?: RunFeatureOrderByRelationAggregateInput
    MapNodeFeatureData?: MapNodeFeatureDataOrderByWithRelationInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    keyword?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    description?: StringNullableFilter<"Feature"> | string | null
    active?: BoolFilter<"Feature"> | boolean
    contentHash?: StringNullableFilter<"Feature"> | string | null
    featureTags?: FeatureTagListRelationFilter
    RunFeature?: RunFeatureListRelationFilter
    MapNodeFeatureData?: XOR<MapNodeFeatureDataNullableScalarRelationFilter, MapNodeFeatureDataWhereInput> | null
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    keyword?: StringWithAggregatesFilter<"Feature"> | string
    name?: StringWithAggregatesFilter<"Feature"> | string
    description?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    active?: BoolWithAggregatesFilter<"Feature"> | boolean
    contentHash?: StringNullableWithAggregatesFilter<"Feature"> | string | null
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    featureId?: StringFilter<"Scenario"> | string
    keyword?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    description?: StringNullableFilter<"Scenario"> | string | null
    active?: BoolFilter<"Scenario"> | boolean
    contentHash?: StringNullableFilter<"Scenario"> | string | null
    scenarioTags?: ScenarioTagListRelationFilter
    steps?: ScenarioStepListRelationFilter
    RunScenario?: RunScenarioListRelationFilter
    RunStep?: RunStepListRelationFilter
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    featureId?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    scenarioTags?: ScenarioTagOrderByRelationAggregateInput
    steps?: ScenarioStepOrderByRelationAggregateInput
    RunScenario?: RunScenarioOrderByRelationAggregateInput
    RunStep?: RunStepOrderByRelationAggregateInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    featureId?: StringFilter<"Scenario"> | string
    keyword?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    description?: StringNullableFilter<"Scenario"> | string | null
    active?: BoolFilter<"Scenario"> | boolean
    contentHash?: StringNullableFilter<"Scenario"> | string | null
    scenarioTags?: ScenarioTagListRelationFilter
    steps?: ScenarioStepListRelationFilter
    RunScenario?: RunScenarioListRelationFilter
    RunStep?: RunStepListRelationFilter
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    featureId?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    featureId?: StringWithAggregatesFilter<"Scenario"> | string
    keyword?: StringWithAggregatesFilter<"Scenario"> | string
    name?: StringWithAggregatesFilter<"Scenario"> | string
    description?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
    active?: BoolWithAggregatesFilter<"Scenario"> | boolean
    contentHash?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: StringFilter<"Step"> | string
    keyword?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    contentHash?: StringNullableFilter<"Step"> | string | null
    active?: BoolFilter<"Step"> | boolean
    media?: JsonNullableFilter<"Step">
    ScenarioStep?: ScenarioStepListRelationFilter
    RunStep?: RunStepListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    active?: SortOrder
    media?: SortOrderInput | SortOrder
    ScenarioStep?: ScenarioStepOrderByRelationAggregateInput
    RunStep?: RunStepOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    keyword?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    contentHash?: StringNullableFilter<"Step"> | string | null
    active?: BoolFilter<"Step"> | boolean
    media?: JsonNullableFilter<"Step">
    ScenarioStep?: ScenarioStepListRelationFilter
    RunStep?: RunStepListRelationFilter
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    contentHash?: SortOrderInput | SortOrder
    active?: SortOrder
    media?: SortOrderInput | SortOrder
    _count?: StepCountOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Step"> | string
    keyword?: StringWithAggregatesFilter<"Step"> | string
    name?: StringWithAggregatesFilter<"Step"> | string
    contentHash?: StringNullableWithAggregatesFilter<"Step"> | string | null
    active?: BoolWithAggregatesFilter<"Step"> | boolean
    media?: JsonNullableWithAggregatesFilter<"Step">
  }

  export type ScenarioStepWhereInput = {
    AND?: ScenarioStepWhereInput | ScenarioStepWhereInput[]
    OR?: ScenarioStepWhereInput[]
    NOT?: ScenarioStepWhereInput | ScenarioStepWhereInput[]
    scenarioId?: StringFilter<"ScenarioStep"> | string
    stepId?: StringFilter<"ScenarioStep"> | string
    keyword?: StringFilter<"ScenarioStep"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
  }

  export type ScenarioStepOrderByWithRelationInput = {
    scenarioId?: SortOrder
    stepId?: SortOrder
    keyword?: SortOrder
    scenario?: ScenarioOrderByWithRelationInput
    step?: StepOrderByWithRelationInput
  }

  export type ScenarioStepWhereUniqueInput = Prisma.AtLeast<{
    scenarioId_stepId_keyword?: ScenarioStepScenarioIdStepIdKeywordCompoundUniqueInput
    AND?: ScenarioStepWhereInput | ScenarioStepWhereInput[]
    OR?: ScenarioStepWhereInput[]
    NOT?: ScenarioStepWhereInput | ScenarioStepWhereInput[]
    scenarioId?: StringFilter<"ScenarioStep"> | string
    stepId?: StringFilter<"ScenarioStep"> | string
    keyword?: StringFilter<"ScenarioStep"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
  }, "scenarioId_stepId_keyword">

  export type ScenarioStepOrderByWithAggregationInput = {
    scenarioId?: SortOrder
    stepId?: SortOrder
    keyword?: SortOrder
    _count?: ScenarioStepCountOrderByAggregateInput
    _max?: ScenarioStepMaxOrderByAggregateInput
    _min?: ScenarioStepMinOrderByAggregateInput
  }

  export type ScenarioStepScalarWhereWithAggregatesInput = {
    AND?: ScenarioStepScalarWhereWithAggregatesInput | ScenarioStepScalarWhereWithAggregatesInput[]
    OR?: ScenarioStepScalarWhereWithAggregatesInput[]
    NOT?: ScenarioStepScalarWhereWithAggregatesInput | ScenarioStepScalarWhereWithAggregatesInput[]
    scenarioId?: StringWithAggregatesFilter<"ScenarioStep"> | string
    stepId?: StringWithAggregatesFilter<"ScenarioStep"> | string
    keyword?: StringWithAggregatesFilter<"ScenarioStep"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    featureTags?: FeatureTagListRelationFilter
    scenarioTags?: ScenarioTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    featureTags?: FeatureTagOrderByRelationAggregateInput
    scenarioTags?: ScenarioTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    featureTags?: FeatureTagListRelationFilter
    scenarioTags?: ScenarioTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type FeatureTagWhereInput = {
    AND?: FeatureTagWhereInput | FeatureTagWhereInput[]
    OR?: FeatureTagWhereInput[]
    NOT?: FeatureTagWhereInput | FeatureTagWhereInput[]
    featureId?: StringFilter<"FeatureTag"> | string
    tagId?: StringFilter<"FeatureTag"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type FeatureTagOrderByWithRelationInput = {
    featureId?: SortOrder
    tagId?: SortOrder
    feature?: FeatureOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type FeatureTagWhereUniqueInput = Prisma.AtLeast<{
    featureId_tagId?: FeatureTagFeatureIdTagIdCompoundUniqueInput
    AND?: FeatureTagWhereInput | FeatureTagWhereInput[]
    OR?: FeatureTagWhereInput[]
    NOT?: FeatureTagWhereInput | FeatureTagWhereInput[]
    featureId?: StringFilter<"FeatureTag"> | string
    tagId?: StringFilter<"FeatureTag"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "featureId_tagId">

  export type FeatureTagOrderByWithAggregationInput = {
    featureId?: SortOrder
    tagId?: SortOrder
    _count?: FeatureTagCountOrderByAggregateInput
    _max?: FeatureTagMaxOrderByAggregateInput
    _min?: FeatureTagMinOrderByAggregateInput
  }

  export type FeatureTagScalarWhereWithAggregatesInput = {
    AND?: FeatureTagScalarWhereWithAggregatesInput | FeatureTagScalarWhereWithAggregatesInput[]
    OR?: FeatureTagScalarWhereWithAggregatesInput[]
    NOT?: FeatureTagScalarWhereWithAggregatesInput | FeatureTagScalarWhereWithAggregatesInput[]
    featureId?: StringWithAggregatesFilter<"FeatureTag"> | string
    tagId?: StringWithAggregatesFilter<"FeatureTag"> | string
  }

  export type ScenarioTagWhereInput = {
    AND?: ScenarioTagWhereInput | ScenarioTagWhereInput[]
    OR?: ScenarioTagWhereInput[]
    NOT?: ScenarioTagWhereInput | ScenarioTagWhereInput[]
    scenarioId?: StringFilter<"ScenarioTag"> | string
    tagId?: StringFilter<"ScenarioTag"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ScenarioTagOrderByWithRelationInput = {
    scenarioId?: SortOrder
    tagId?: SortOrder
    scenario?: ScenarioOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ScenarioTagWhereUniqueInput = Prisma.AtLeast<{
    scenarioId_tagId?: ScenarioTagScenarioIdTagIdCompoundUniqueInput
    AND?: ScenarioTagWhereInput | ScenarioTagWhereInput[]
    OR?: ScenarioTagWhereInput[]
    NOT?: ScenarioTagWhereInput | ScenarioTagWhereInput[]
    scenarioId?: StringFilter<"ScenarioTag"> | string
    tagId?: StringFilter<"ScenarioTag"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "scenarioId_tagId">

  export type ScenarioTagOrderByWithAggregationInput = {
    scenarioId?: SortOrder
    tagId?: SortOrder
    _count?: ScenarioTagCountOrderByAggregateInput
    _max?: ScenarioTagMaxOrderByAggregateInput
    _min?: ScenarioTagMinOrderByAggregateInput
  }

  export type ScenarioTagScalarWhereWithAggregatesInput = {
    AND?: ScenarioTagScalarWhereWithAggregatesInput | ScenarioTagScalarWhereWithAggregatesInput[]
    OR?: ScenarioTagScalarWhereWithAggregatesInput[]
    NOT?: ScenarioTagScalarWhereWithAggregatesInput | ScenarioTagScalarWhereWithAggregatesInput[]
    scenarioId?: StringWithAggregatesFilter<"ScenarioTag"> | string
    tagId?: StringWithAggregatesFilter<"ScenarioTag"> | string
  }

  export type MapNodeWhereInput = {
    AND?: MapNodeWhereInput | MapNodeWhereInput[]
    OR?: MapNodeWhereInput[]
    NOT?: MapNodeWhereInput | MapNodeWhereInput[]
    id?: StringFilter<"MapNode"> | string
    x?: FloatFilter<"MapNode"> | number
    y?: FloatFilter<"MapNode"> | number
    width?: IntFilter<"MapNode"> | number
    height?: IntFilter<"MapNode"> | number
    rotation?: IntFilter<"MapNode"> | number
    scale?: FloatFilter<"MapNode"> | number
    hidden?: BoolFilter<"MapNode"> | boolean
    zIndex?: IntNullableFilter<"MapNode"> | number | null
    featureData?: XOR<MapNodeFeatureDataNullableScalarRelationFilter, MapNodeFeatureDataWhereInput> | null
    imageData?: XOR<MapNodeImageDataNullableScalarRelationFilter, MapNodeImageDataWhereInput> | null
    outgoingDependencies?: MapNodeDependencyListRelationFilter
    incomingDependencies?: MapNodeDependencyListRelationFilter
  }

  export type MapNodeOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    hidden?: SortOrder
    zIndex?: SortOrderInput | SortOrder
    featureData?: MapNodeFeatureDataOrderByWithRelationInput
    imageData?: MapNodeImageDataOrderByWithRelationInput
    outgoingDependencies?: MapNodeDependencyOrderByRelationAggregateInput
    incomingDependencies?: MapNodeDependencyOrderByRelationAggregateInput
  }

  export type MapNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapNodeWhereInput | MapNodeWhereInput[]
    OR?: MapNodeWhereInput[]
    NOT?: MapNodeWhereInput | MapNodeWhereInput[]
    x?: FloatFilter<"MapNode"> | number
    y?: FloatFilter<"MapNode"> | number
    width?: IntFilter<"MapNode"> | number
    height?: IntFilter<"MapNode"> | number
    rotation?: IntFilter<"MapNode"> | number
    scale?: FloatFilter<"MapNode"> | number
    hidden?: BoolFilter<"MapNode"> | boolean
    zIndex?: IntNullableFilter<"MapNode"> | number | null
    featureData?: XOR<MapNodeFeatureDataNullableScalarRelationFilter, MapNodeFeatureDataWhereInput> | null
    imageData?: XOR<MapNodeImageDataNullableScalarRelationFilter, MapNodeImageDataWhereInput> | null
    outgoingDependencies?: MapNodeDependencyListRelationFilter
    incomingDependencies?: MapNodeDependencyListRelationFilter
  }, "id">

  export type MapNodeOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    hidden?: SortOrder
    zIndex?: SortOrderInput | SortOrder
    _count?: MapNodeCountOrderByAggregateInput
    _avg?: MapNodeAvgOrderByAggregateInput
    _max?: MapNodeMaxOrderByAggregateInput
    _min?: MapNodeMinOrderByAggregateInput
    _sum?: MapNodeSumOrderByAggregateInput
  }

  export type MapNodeScalarWhereWithAggregatesInput = {
    AND?: MapNodeScalarWhereWithAggregatesInput | MapNodeScalarWhereWithAggregatesInput[]
    OR?: MapNodeScalarWhereWithAggregatesInput[]
    NOT?: MapNodeScalarWhereWithAggregatesInput | MapNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapNode"> | string
    x?: FloatWithAggregatesFilter<"MapNode"> | number
    y?: FloatWithAggregatesFilter<"MapNode"> | number
    width?: IntWithAggregatesFilter<"MapNode"> | number
    height?: IntWithAggregatesFilter<"MapNode"> | number
    rotation?: IntWithAggregatesFilter<"MapNode"> | number
    scale?: FloatWithAggregatesFilter<"MapNode"> | number
    hidden?: BoolWithAggregatesFilter<"MapNode"> | boolean
    zIndex?: IntNullableWithAggregatesFilter<"MapNode"> | number | null
  }

  export type MapNodeFeatureDataWhereInput = {
    AND?: MapNodeFeatureDataWhereInput | MapNodeFeatureDataWhereInput[]
    OR?: MapNodeFeatureDataWhereInput[]
    NOT?: MapNodeFeatureDataWhereInput | MapNodeFeatureDataWhereInput[]
    id?: StringFilter<"MapNodeFeatureData"> | string
    featureId?: StringFilter<"MapNodeFeatureData"> | string
    mapNodeId?: StringFilter<"MapNodeFeatureData"> | string
    mapNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }

  export type MapNodeFeatureDataOrderByWithRelationInput = {
    id?: SortOrder
    featureId?: SortOrder
    mapNodeId?: SortOrder
    mapNode?: MapNodeOrderByWithRelationInput
    feature?: FeatureOrderByWithRelationInput
  }

  export type MapNodeFeatureDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    featureId?: string
    mapNodeId?: string
    AND?: MapNodeFeatureDataWhereInput | MapNodeFeatureDataWhereInput[]
    OR?: MapNodeFeatureDataWhereInput[]
    NOT?: MapNodeFeatureDataWhereInput | MapNodeFeatureDataWhereInput[]
    mapNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }, "id" | "featureId" | "mapNodeId">

  export type MapNodeFeatureDataOrderByWithAggregationInput = {
    id?: SortOrder
    featureId?: SortOrder
    mapNodeId?: SortOrder
    _count?: MapNodeFeatureDataCountOrderByAggregateInput
    _max?: MapNodeFeatureDataMaxOrderByAggregateInput
    _min?: MapNodeFeatureDataMinOrderByAggregateInput
  }

  export type MapNodeFeatureDataScalarWhereWithAggregatesInput = {
    AND?: MapNodeFeatureDataScalarWhereWithAggregatesInput | MapNodeFeatureDataScalarWhereWithAggregatesInput[]
    OR?: MapNodeFeatureDataScalarWhereWithAggregatesInput[]
    NOT?: MapNodeFeatureDataScalarWhereWithAggregatesInput | MapNodeFeatureDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapNodeFeatureData"> | string
    featureId?: StringWithAggregatesFilter<"MapNodeFeatureData"> | string
    mapNodeId?: StringWithAggregatesFilter<"MapNodeFeatureData"> | string
  }

  export type MapNodeImageDataWhereInput = {
    AND?: MapNodeImageDataWhereInput | MapNodeImageDataWhereInput[]
    OR?: MapNodeImageDataWhereInput[]
    NOT?: MapNodeImageDataWhereInput | MapNodeImageDataWhereInput[]
    id?: StringFilter<"MapNodeImageData"> | string
    src?: StringFilter<"MapNodeImageData"> | string
    mapNodeId?: StringFilter<"MapNodeImageData"> | string
    mapNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
  }

  export type MapNodeImageDataOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    mapNodeId?: SortOrder
    mapNode?: MapNodeOrderByWithRelationInput
  }

  export type MapNodeImageDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mapNodeId?: string
    AND?: MapNodeImageDataWhereInput | MapNodeImageDataWhereInput[]
    OR?: MapNodeImageDataWhereInput[]
    NOT?: MapNodeImageDataWhereInput | MapNodeImageDataWhereInput[]
    src?: StringFilter<"MapNodeImageData"> | string
    mapNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
  }, "id" | "mapNodeId">

  export type MapNodeImageDataOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    mapNodeId?: SortOrder
    _count?: MapNodeImageDataCountOrderByAggregateInput
    _max?: MapNodeImageDataMaxOrderByAggregateInput
    _min?: MapNodeImageDataMinOrderByAggregateInput
  }

  export type MapNodeImageDataScalarWhereWithAggregatesInput = {
    AND?: MapNodeImageDataScalarWhereWithAggregatesInput | MapNodeImageDataScalarWhereWithAggregatesInput[]
    OR?: MapNodeImageDataScalarWhereWithAggregatesInput[]
    NOT?: MapNodeImageDataScalarWhereWithAggregatesInput | MapNodeImageDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapNodeImageData"> | string
    src?: StringWithAggregatesFilter<"MapNodeImageData"> | string
    mapNodeId?: StringWithAggregatesFilter<"MapNodeImageData"> | string
  }

  export type MapNodeDependencyWhereInput = {
    AND?: MapNodeDependencyWhereInput | MapNodeDependencyWhereInput[]
    OR?: MapNodeDependencyWhereInput[]
    NOT?: MapNodeDependencyWhereInput | MapNodeDependencyWhereInput[]
    id?: StringFilter<"MapNodeDependency"> | string
    sourceNodeId?: StringFilter<"MapNodeDependency"> | string
    targetNodeId?: StringFilter<"MapNodeDependency"> | string
    sourceNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
    targetNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
  }

  export type MapNodeDependencyOrderByWithRelationInput = {
    id?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    sourceNode?: MapNodeOrderByWithRelationInput
    targetNode?: MapNodeOrderByWithRelationInput
  }

  export type MapNodeDependencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceNodeId_targetNodeId?: MapNodeDependencySourceNodeIdTargetNodeIdCompoundUniqueInput
    AND?: MapNodeDependencyWhereInput | MapNodeDependencyWhereInput[]
    OR?: MapNodeDependencyWhereInput[]
    NOT?: MapNodeDependencyWhereInput | MapNodeDependencyWhereInput[]
    sourceNodeId?: StringFilter<"MapNodeDependency"> | string
    targetNodeId?: StringFilter<"MapNodeDependency"> | string
    sourceNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
    targetNode?: XOR<MapNodeScalarRelationFilter, MapNodeWhereInput>
  }, "id" | "sourceNodeId_targetNodeId">

  export type MapNodeDependencyOrderByWithAggregationInput = {
    id?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    _count?: MapNodeDependencyCountOrderByAggregateInput
    _max?: MapNodeDependencyMaxOrderByAggregateInput
    _min?: MapNodeDependencyMinOrderByAggregateInput
  }

  export type MapNodeDependencyScalarWhereWithAggregatesInput = {
    AND?: MapNodeDependencyScalarWhereWithAggregatesInput | MapNodeDependencyScalarWhereWithAggregatesInput[]
    OR?: MapNodeDependencyScalarWhereWithAggregatesInput[]
    NOT?: MapNodeDependencyScalarWhereWithAggregatesInput | MapNodeDependencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapNodeDependency"> | string
    sourceNodeId?: StringWithAggregatesFilter<"MapNodeDependency"> | string
    targetNodeId?: StringWithAggregatesFilter<"MapNodeDependency"> | string
  }

  export type RunCreateInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureCreateNestedManyWithoutRunInput
    RunScenario?: RunScenarioCreateNestedManyWithoutRunInput
    RunStep?: RunStepCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutRunInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutRunInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUpdateManyWithoutRunNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutRunNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunCreateManyInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
  }

  export type RunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RunFeatureCreateInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunFeatureInput
    feature: FeatureCreateNestedOneWithoutRunFeatureInput
  }

  export type RunFeatureUncheckedCreateInput = {
    id?: string
    runId: string
    featureId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunFeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunFeatureNestedInput
    feature?: FeatureUpdateOneRequiredWithoutRunFeatureNestedInput
  }

  export type RunFeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunFeatureCreateManyInput = {
    id?: string
    runId: string
    featureId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunFeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunFeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioCreateInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunScenarioInput
    scenario: ScenarioCreateNestedOneWithoutRunScenarioInput
  }

  export type RunScenarioUncheckedCreateInput = {
    id?: string
    runId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunScenarioNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunScenarioNestedInput
  }

  export type RunScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioCreateManyInput = {
    id?: string
    runId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepCreateInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunStepInput
    step: StepCreateNestedOneWithoutRunStepInput
    scenario: ScenarioCreateNestedOneWithoutRunStepInput
  }

  export type RunStepUncheckedCreateInput = {
    id?: string
    runId: string
    stepId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunStepNestedInput
    step?: StepUpdateOneRequiredWithoutRunStepNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunStepNestedInput
  }

  export type RunStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepCreateManyInput = {
    id?: string
    runId: string
    stepId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagCreateNestedManyWithoutFeatureInput
    RunFeature?: RunFeatureCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataCreateNestedOneWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagUncheckedCreateNestedManyWithoutFeatureInput
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUpdateManyWithoutFeatureNestedInput
    RunFeature?: RunFeatureUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUpdateOneWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUncheckedUpdateManyWithoutFeatureNestedInput
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScenarioCreateInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepUncheckedCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUncheckedUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioCreateManyInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepCreateInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepCreateNestedManyWithoutStepInput
    RunStep?: RunStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUncheckedCreateNestedManyWithoutStepInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUpdateManyWithoutStepNestedInput
    RunStep?: RunStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUncheckedUpdateManyWithoutStepNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepCreateManyInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScenarioStepCreateInput = {
    keyword: string
    scenario: ScenarioCreateNestedOneWithoutStepsInput
    step: StepCreateNestedOneWithoutScenarioStepInput
  }

  export type ScenarioStepUncheckedCreateInput = {
    scenarioId: string
    stepId: string
    keyword: string
  }

  export type ScenarioStepUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutStepsNestedInput
    step?: StepUpdateOneRequiredWithoutScenarioStepNestedInput
  }

  export type ScenarioStepUncheckedUpdateInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioStepCreateManyInput = {
    scenarioId: string
    stepId: string
    keyword: string
  }

  export type ScenarioStepUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioStepUncheckedUpdateManyInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    featureTags?: FeatureTagCreateNestedManyWithoutTagInput
    scenarioTags?: ScenarioTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    featureTags?: FeatureTagUncheckedCreateNestedManyWithoutTagInput
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    featureTags?: FeatureTagUpdateManyWithoutTagNestedInput
    scenarioTags?: ScenarioTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    featureTags?: FeatureTagUncheckedUpdateManyWithoutTagNestedInput
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureTagCreateInput = {
    feature: FeatureCreateNestedOneWithoutFeatureTagsInput
    tag: TagCreateNestedOneWithoutFeatureTagsInput
  }

  export type FeatureTagUncheckedCreateInput = {
    featureId: string
    tagId: string
  }

  export type FeatureTagUpdateInput = {
    feature?: FeatureUpdateOneRequiredWithoutFeatureTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutFeatureTagsNestedInput
  }

  export type FeatureTagUncheckedUpdateInput = {
    featureId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureTagCreateManyInput = {
    featureId: string
    tagId: string
  }

  export type FeatureTagUpdateManyMutationInput = {

  }

  export type FeatureTagUncheckedUpdateManyInput = {
    featureId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagCreateInput = {
    scenario: ScenarioCreateNestedOneWithoutScenarioTagsInput
    tag: TagCreateNestedOneWithoutScenarioTagsInput
  }

  export type ScenarioTagUncheckedCreateInput = {
    scenarioId: string
    tagId: string
  }

  export type ScenarioTagUpdateInput = {
    scenario?: ScenarioUpdateOneRequiredWithoutScenarioTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutScenarioTagsNestedInput
  }

  export type ScenarioTagUncheckedUpdateInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagCreateManyInput = {
    scenarioId: string
    tagId: string
  }

  export type ScenarioTagUpdateManyMutationInput = {

  }

  export type ScenarioTagUncheckedUpdateManyInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeCreateInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataUncheckedCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUncheckedUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeCreateManyInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
  }

  export type MapNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MapNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MapNodeFeatureDataCreateInput = {
    id?: string
    mapNode: MapNodeCreateNestedOneWithoutFeatureDataInput
    feature: FeatureCreateNestedOneWithoutMapNodeFeatureDataInput
  }

  export type MapNodeFeatureDataUncheckedCreateInput = {
    id?: string
    featureId: string
    mapNodeId: string
  }

  export type MapNodeFeatureDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNode?: MapNodeUpdateOneRequiredWithoutFeatureDataNestedInput
    feature?: FeatureUpdateOneRequiredWithoutMapNodeFeatureDataNestedInput
  }

  export type MapNodeFeatureDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    mapNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeFeatureDataCreateManyInput = {
    id?: string
    featureId: string
    mapNodeId: string
  }

  export type MapNodeFeatureDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeFeatureDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    mapNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeImageDataCreateInput = {
    id?: string
    src: string
    mapNode: MapNodeCreateNestedOneWithoutImageDataInput
  }

  export type MapNodeImageDataUncheckedCreateInput = {
    id?: string
    src: string
    mapNodeId: string
  }

  export type MapNodeImageDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    mapNode?: MapNodeUpdateOneRequiredWithoutImageDataNestedInput
  }

  export type MapNodeImageDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    mapNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeImageDataCreateManyInput = {
    id?: string
    src: string
    mapNodeId: string
  }

  export type MapNodeImageDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeImageDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    mapNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyCreateInput = {
    id?: string
    sourceNode: MapNodeCreateNestedOneWithoutOutgoingDependenciesInput
    targetNode: MapNodeCreateNestedOneWithoutIncomingDependenciesInput
  }

  export type MapNodeDependencyUncheckedCreateInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
  }

  export type MapNodeDependencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNode?: MapNodeUpdateOneRequiredWithoutOutgoingDependenciesNestedInput
    targetNode?: MapNodeUpdateOneRequiredWithoutIncomingDependenciesNestedInput
  }

  export type MapNodeDependencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyCreateManyInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
  }

  export type MapNodeDependencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RunFeatureListRelationFilter = {
    every?: RunFeatureWhereInput
    some?: RunFeatureWhereInput
    none?: RunFeatureWhereInput
  }

  export type RunScenarioListRelationFilter = {
    every?: RunScenarioWhereInput
    some?: RunScenarioWhereInput
    none?: RunScenarioWhereInput
  }

  export type RunStepListRelationFilter = {
    every?: RunStepWhereInput
    some?: RunStepWhereInput
    none?: RunStepWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RunFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunScenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunCountOrderByAggregateInput = {
    id?: SortOrder
    runNumber?: SortOrder
    status?: SortOrder
    browser?: SortOrder
    platform?: SortOrder
    environment?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    duration?: SortOrder
    auto?: SortOrder
  }

  export type RunAvgOrderByAggregateInput = {
    runNumber?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    duration?: SortOrder
  }

  export type RunMaxOrderByAggregateInput = {
    id?: SortOrder
    runNumber?: SortOrder
    status?: SortOrder
    browser?: SortOrder
    platform?: SortOrder
    environment?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    duration?: SortOrder
    auto?: SortOrder
  }

  export type RunMinOrderByAggregateInput = {
    id?: SortOrder
    runNumber?: SortOrder
    status?: SortOrder
    browser?: SortOrder
    platform?: SortOrder
    environment?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    duration?: SortOrder
    auto?: SortOrder
  }

  export type RunSumOrderByAggregateInput = {
    runNumber?: SortOrder
    featuresCount?: SortOrder
    scenariosCount?: SortOrder
    stepsCount?: SortOrder
    passCount?: SortOrder
    failCount?: SortOrder
    skipCount?: SortOrder
    duration?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RunScalarRelationFilter = {
    is?: RunWhereInput
    isNot?: RunWhereInput
  }

  export type FeatureScalarRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type RunFeatureRunIdFeatureIdCompoundUniqueInput = {
    runId: string
    featureId: string
  }

  export type RunFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    featureId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunFeatureAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type RunFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    featureId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    featureId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunFeatureSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ScenarioScalarRelationFilter = {
    is?: ScenarioWhereInput
    isNot?: ScenarioWhereInput
  }

  export type RunScenarioRunIdScenarioIdCompoundUniqueInput = {
    runId: string
    scenarioId: string
  }

  export type RunScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunScenarioAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type RunScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type RunScenarioSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type StepScalarRelationFilter = {
    is?: StepWhereInput
    isNot?: StepWhereInput
  }

  export type RunStepRunIdStepIdScenarioIdCompoundUniqueInput = {
    runId: string
    stepId: string
    scenarioId: string
  }

  export type RunStepCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    stepId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    createdAt?: SortOrder
  }

  export type RunStepAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type RunStepMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    stepId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    createdAt?: SortOrder
  }

  export type RunStepMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    stepId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    errorMessage?: SortOrder
    stackTrace?: SortOrder
    createdAt?: SortOrder
  }

  export type RunStepSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type FeatureTagListRelationFilter = {
    every?: FeatureTagWhereInput
    some?: FeatureTagWhereInput
    none?: FeatureTagWhereInput
  }

  export type MapNodeFeatureDataNullableScalarRelationFilter = {
    is?: MapNodeFeatureDataWhereInput | null
    isNot?: MapNodeFeatureDataWhereInput | null
  }

  export type FeatureTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }

  export type ScenarioTagListRelationFilter = {
    every?: ScenarioTagWhereInput
    some?: ScenarioTagWhereInput
    none?: ScenarioTagWhereInput
  }

  export type ScenarioStepListRelationFilter = {
    every?: ScenarioStepWhereInput
    some?: ScenarioStepWhereInput
    none?: ScenarioStepWhereInput
  }

  export type ScenarioTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    contentHash?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    contentHash?: SortOrder
    active?: SortOrder
    media?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    contentHash?: SortOrder
    active?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    name?: SortOrder
    contentHash?: SortOrder
    active?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ScenarioStepScenarioIdStepIdKeywordCompoundUniqueInput = {
    scenarioId: string
    stepId: string
    keyword: string
  }

  export type ScenarioStepCountOrderByAggregateInput = {
    scenarioId?: SortOrder
    stepId?: SortOrder
    keyword?: SortOrder
  }

  export type ScenarioStepMaxOrderByAggregateInput = {
    scenarioId?: SortOrder
    stepId?: SortOrder
    keyword?: SortOrder
  }

  export type ScenarioStepMinOrderByAggregateInput = {
    scenarioId?: SortOrder
    stepId?: SortOrder
    keyword?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type FeatureTagFeatureIdTagIdCompoundUniqueInput = {
    featureId: string
    tagId: string
  }

  export type FeatureTagCountOrderByAggregateInput = {
    featureId?: SortOrder
    tagId?: SortOrder
  }

  export type FeatureTagMaxOrderByAggregateInput = {
    featureId?: SortOrder
    tagId?: SortOrder
  }

  export type FeatureTagMinOrderByAggregateInput = {
    featureId?: SortOrder
    tagId?: SortOrder
  }

  export type ScenarioTagScenarioIdTagIdCompoundUniqueInput = {
    scenarioId: string
    tagId: string
  }

  export type ScenarioTagCountOrderByAggregateInput = {
    scenarioId?: SortOrder
    tagId?: SortOrder
  }

  export type ScenarioTagMaxOrderByAggregateInput = {
    scenarioId?: SortOrder
    tagId?: SortOrder
  }

  export type ScenarioTagMinOrderByAggregateInput = {
    scenarioId?: SortOrder
    tagId?: SortOrder
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

  export type MapNodeImageDataNullableScalarRelationFilter = {
    is?: MapNodeImageDataWhereInput | null
    isNot?: MapNodeImageDataWhereInput | null
  }

  export type MapNodeDependencyListRelationFilter = {
    every?: MapNodeDependencyWhereInput
    some?: MapNodeDependencyWhereInput
    none?: MapNodeDependencyWhereInput
  }

  export type MapNodeDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapNodeCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    hidden?: SortOrder
    zIndex?: SortOrder
  }

  export type MapNodeAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    zIndex?: SortOrder
  }

  export type MapNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    hidden?: SortOrder
    zIndex?: SortOrder
  }

  export type MapNodeMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    hidden?: SortOrder
    zIndex?: SortOrder
  }

  export type MapNodeSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    rotation?: SortOrder
    scale?: SortOrder
    zIndex?: SortOrder
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

  export type MapNodeScalarRelationFilter = {
    is?: MapNodeWhereInput
    isNot?: MapNodeWhereInput
  }

  export type MapNodeFeatureDataCountOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeFeatureDataMaxOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeFeatureDataMinOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeImageDataCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeImageDataMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeImageDataMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    mapNodeId?: SortOrder
  }

  export type MapNodeDependencySourceNodeIdTargetNodeIdCompoundUniqueInput = {
    sourceNodeId: string
    targetNodeId: string
  }

  export type MapNodeDependencyCountOrderByAggregateInput = {
    id?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
  }

  export type MapNodeDependencyMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
  }

  export type MapNodeDependencyMinOrderByAggregateInput = {
    id?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
  }

  export type RunFeatureCreateNestedManyWithoutRunInput = {
    create?: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput> | RunFeatureCreateWithoutRunInput[] | RunFeatureUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutRunInput | RunFeatureCreateOrConnectWithoutRunInput[]
    createMany?: RunFeatureCreateManyRunInputEnvelope
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
  }

  export type RunScenarioCreateNestedManyWithoutRunInput = {
    create?: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput> | RunScenarioCreateWithoutRunInput[] | RunScenarioUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutRunInput | RunScenarioCreateOrConnectWithoutRunInput[]
    createMany?: RunScenarioCreateManyRunInputEnvelope
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
  }

  export type RunStepCreateNestedManyWithoutRunInput = {
    create?: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput> | RunStepCreateWithoutRunInput[] | RunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutRunInput | RunStepCreateOrConnectWithoutRunInput[]
    createMany?: RunStepCreateManyRunInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type RunFeatureUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput> | RunFeatureCreateWithoutRunInput[] | RunFeatureUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutRunInput | RunFeatureCreateOrConnectWithoutRunInput[]
    createMany?: RunFeatureCreateManyRunInputEnvelope
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
  }

  export type RunScenarioUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput> | RunScenarioCreateWithoutRunInput[] | RunScenarioUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutRunInput | RunScenarioCreateOrConnectWithoutRunInput[]
    createMany?: RunScenarioCreateManyRunInputEnvelope
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
  }

  export type RunStepUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput> | RunStepCreateWithoutRunInput[] | RunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutRunInput | RunStepCreateOrConnectWithoutRunInput[]
    createMany?: RunStepCreateManyRunInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RunFeatureUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput> | RunFeatureCreateWithoutRunInput[] | RunFeatureUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutRunInput | RunFeatureCreateOrConnectWithoutRunInput[]
    upsert?: RunFeatureUpsertWithWhereUniqueWithoutRunInput | RunFeatureUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunFeatureCreateManyRunInputEnvelope
    set?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    disconnect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    delete?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    update?: RunFeatureUpdateWithWhereUniqueWithoutRunInput | RunFeatureUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunFeatureUpdateManyWithWhereWithoutRunInput | RunFeatureUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
  }

  export type RunScenarioUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput> | RunScenarioCreateWithoutRunInput[] | RunScenarioUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutRunInput | RunScenarioCreateOrConnectWithoutRunInput[]
    upsert?: RunScenarioUpsertWithWhereUniqueWithoutRunInput | RunScenarioUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunScenarioCreateManyRunInputEnvelope
    set?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    disconnect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    delete?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    update?: RunScenarioUpdateWithWhereUniqueWithoutRunInput | RunScenarioUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunScenarioUpdateManyWithWhereWithoutRunInput | RunScenarioUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
  }

  export type RunStepUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput> | RunStepCreateWithoutRunInput[] | RunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutRunInput | RunStepCreateOrConnectWithoutRunInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutRunInput | RunStepUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunStepCreateManyRunInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutRunInput | RunStepUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutRunInput | RunStepUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type RunFeatureUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput> | RunFeatureCreateWithoutRunInput[] | RunFeatureUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutRunInput | RunFeatureCreateOrConnectWithoutRunInput[]
    upsert?: RunFeatureUpsertWithWhereUniqueWithoutRunInput | RunFeatureUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunFeatureCreateManyRunInputEnvelope
    set?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    disconnect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    delete?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    update?: RunFeatureUpdateWithWhereUniqueWithoutRunInput | RunFeatureUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunFeatureUpdateManyWithWhereWithoutRunInput | RunFeatureUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
  }

  export type RunScenarioUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput> | RunScenarioCreateWithoutRunInput[] | RunScenarioUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutRunInput | RunScenarioCreateOrConnectWithoutRunInput[]
    upsert?: RunScenarioUpsertWithWhereUniqueWithoutRunInput | RunScenarioUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunScenarioCreateManyRunInputEnvelope
    set?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    disconnect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    delete?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    update?: RunScenarioUpdateWithWhereUniqueWithoutRunInput | RunScenarioUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunScenarioUpdateManyWithWhereWithoutRunInput | RunScenarioUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
  }

  export type RunStepUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput> | RunStepCreateWithoutRunInput[] | RunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutRunInput | RunStepCreateOrConnectWithoutRunInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutRunInput | RunStepUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunStepCreateManyRunInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutRunInput | RunStepUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutRunInput | RunStepUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type RunCreateNestedOneWithoutRunFeatureInput = {
    create?: XOR<RunCreateWithoutRunFeatureInput, RunUncheckedCreateWithoutRunFeatureInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunFeatureInput
    connect?: RunWhereUniqueInput
  }

  export type FeatureCreateNestedOneWithoutRunFeatureInput = {
    create?: XOR<FeatureCreateWithoutRunFeatureInput, FeatureUncheckedCreateWithoutRunFeatureInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutRunFeatureInput
    connect?: FeatureWhereUniqueInput
  }

  export type RunUpdateOneRequiredWithoutRunFeatureNestedInput = {
    create?: XOR<RunCreateWithoutRunFeatureInput, RunUncheckedCreateWithoutRunFeatureInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunFeatureInput
    upsert?: RunUpsertWithoutRunFeatureInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutRunFeatureInput, RunUpdateWithoutRunFeatureInput>, RunUncheckedUpdateWithoutRunFeatureInput>
  }

  export type FeatureUpdateOneRequiredWithoutRunFeatureNestedInput = {
    create?: XOR<FeatureCreateWithoutRunFeatureInput, FeatureUncheckedCreateWithoutRunFeatureInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutRunFeatureInput
    upsert?: FeatureUpsertWithoutRunFeatureInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutRunFeatureInput, FeatureUpdateWithoutRunFeatureInput>, FeatureUncheckedUpdateWithoutRunFeatureInput>
  }

  export type RunCreateNestedOneWithoutRunScenarioInput = {
    create?: XOR<RunCreateWithoutRunScenarioInput, RunUncheckedCreateWithoutRunScenarioInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunScenarioInput
    connect?: RunWhereUniqueInput
  }

  export type ScenarioCreateNestedOneWithoutRunScenarioInput = {
    create?: XOR<ScenarioCreateWithoutRunScenarioInput, ScenarioUncheckedCreateWithoutRunScenarioInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunScenarioInput
    connect?: ScenarioWhereUniqueInput
  }

  export type RunUpdateOneRequiredWithoutRunScenarioNestedInput = {
    create?: XOR<RunCreateWithoutRunScenarioInput, RunUncheckedCreateWithoutRunScenarioInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunScenarioInput
    upsert?: RunUpsertWithoutRunScenarioInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutRunScenarioInput, RunUpdateWithoutRunScenarioInput>, RunUncheckedUpdateWithoutRunScenarioInput>
  }

  export type ScenarioUpdateOneRequiredWithoutRunScenarioNestedInput = {
    create?: XOR<ScenarioCreateWithoutRunScenarioInput, ScenarioUncheckedCreateWithoutRunScenarioInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunScenarioInput
    upsert?: ScenarioUpsertWithoutRunScenarioInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutRunScenarioInput, ScenarioUpdateWithoutRunScenarioInput>, ScenarioUncheckedUpdateWithoutRunScenarioInput>
  }

  export type RunCreateNestedOneWithoutRunStepInput = {
    create?: XOR<RunCreateWithoutRunStepInput, RunUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunStepInput
    connect?: RunWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutRunStepInput = {
    create?: XOR<StepCreateWithoutRunStepInput, StepUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: StepCreateOrConnectWithoutRunStepInput
    connect?: StepWhereUniqueInput
  }

  export type ScenarioCreateNestedOneWithoutRunStepInput = {
    create?: XOR<ScenarioCreateWithoutRunStepInput, ScenarioUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunStepInput
    connect?: ScenarioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RunUpdateOneRequiredWithoutRunStepNestedInput = {
    create?: XOR<RunCreateWithoutRunStepInput, RunUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: RunCreateOrConnectWithoutRunStepInput
    upsert?: RunUpsertWithoutRunStepInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutRunStepInput, RunUpdateWithoutRunStepInput>, RunUncheckedUpdateWithoutRunStepInput>
  }

  export type StepUpdateOneRequiredWithoutRunStepNestedInput = {
    create?: XOR<StepCreateWithoutRunStepInput, StepUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: StepCreateOrConnectWithoutRunStepInput
    upsert?: StepUpsertWithoutRunStepInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutRunStepInput, StepUpdateWithoutRunStepInput>, StepUncheckedUpdateWithoutRunStepInput>
  }

  export type ScenarioUpdateOneRequiredWithoutRunStepNestedInput = {
    create?: XOR<ScenarioCreateWithoutRunStepInput, ScenarioUncheckedCreateWithoutRunStepInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunStepInput
    upsert?: ScenarioUpsertWithoutRunStepInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutRunStepInput, ScenarioUpdateWithoutRunStepInput>, ScenarioUncheckedUpdateWithoutRunStepInput>
  }

  export type FeatureTagCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput> | FeatureTagCreateWithoutFeatureInput[] | FeatureTagUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutFeatureInput | FeatureTagCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureTagCreateManyFeatureInputEnvelope
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
  }

  export type RunFeatureCreateNestedManyWithoutFeatureInput = {
    create?: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput> | RunFeatureCreateWithoutFeatureInput[] | RunFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutFeatureInput | RunFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: RunFeatureCreateManyFeatureInputEnvelope
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
  }

  export type MapNodeFeatureDataCreateNestedOneWithoutFeatureInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutFeatureInput
    connect?: MapNodeFeatureDataWhereUniqueInput
  }

  export type FeatureTagUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput> | FeatureTagCreateWithoutFeatureInput[] | FeatureTagUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutFeatureInput | FeatureTagCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureTagCreateManyFeatureInputEnvelope
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
  }

  export type RunFeatureUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput> | RunFeatureCreateWithoutFeatureInput[] | RunFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutFeatureInput | RunFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: RunFeatureCreateManyFeatureInputEnvelope
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
  }

  export type MapNodeFeatureDataUncheckedCreateNestedOneWithoutFeatureInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutFeatureInput
    connect?: MapNodeFeatureDataWhereUniqueInput
  }

  export type FeatureTagUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput> | FeatureTagCreateWithoutFeatureInput[] | FeatureTagUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutFeatureInput | FeatureTagCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureTagUpsertWithWhereUniqueWithoutFeatureInput | FeatureTagUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureTagCreateManyFeatureInputEnvelope
    set?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    disconnect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    delete?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    update?: FeatureTagUpdateWithWhereUniqueWithoutFeatureInput | FeatureTagUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureTagUpdateManyWithWhereWithoutFeatureInput | FeatureTagUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
  }

  export type RunFeatureUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput> | RunFeatureCreateWithoutFeatureInput[] | RunFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutFeatureInput | RunFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: RunFeatureUpsertWithWhereUniqueWithoutFeatureInput | RunFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: RunFeatureCreateManyFeatureInputEnvelope
    set?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    disconnect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    delete?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    update?: RunFeatureUpdateWithWhereUniqueWithoutFeatureInput | RunFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: RunFeatureUpdateManyWithWhereWithoutFeatureInput | RunFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
  }

  export type MapNodeFeatureDataUpdateOneWithoutFeatureNestedInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutFeatureInput
    upsert?: MapNodeFeatureDataUpsertWithoutFeatureInput
    disconnect?: MapNodeFeatureDataWhereInput | boolean
    delete?: MapNodeFeatureDataWhereInput | boolean
    connect?: MapNodeFeatureDataWhereUniqueInput
    update?: XOR<XOR<MapNodeFeatureDataUpdateToOneWithWhereWithoutFeatureInput, MapNodeFeatureDataUpdateWithoutFeatureInput>, MapNodeFeatureDataUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureTagUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput> | FeatureTagCreateWithoutFeatureInput[] | FeatureTagUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutFeatureInput | FeatureTagCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureTagUpsertWithWhereUniqueWithoutFeatureInput | FeatureTagUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureTagCreateManyFeatureInputEnvelope
    set?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    disconnect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    delete?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    update?: FeatureTagUpdateWithWhereUniqueWithoutFeatureInput | FeatureTagUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureTagUpdateManyWithWhereWithoutFeatureInput | FeatureTagUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
  }

  export type RunFeatureUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput> | RunFeatureCreateWithoutFeatureInput[] | RunFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: RunFeatureCreateOrConnectWithoutFeatureInput | RunFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: RunFeatureUpsertWithWhereUniqueWithoutFeatureInput | RunFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: RunFeatureCreateManyFeatureInputEnvelope
    set?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    disconnect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    delete?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    connect?: RunFeatureWhereUniqueInput | RunFeatureWhereUniqueInput[]
    update?: RunFeatureUpdateWithWhereUniqueWithoutFeatureInput | RunFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: RunFeatureUpdateManyWithWhereWithoutFeatureInput | RunFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
  }

  export type MapNodeFeatureDataUncheckedUpdateOneWithoutFeatureNestedInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutFeatureInput
    upsert?: MapNodeFeatureDataUpsertWithoutFeatureInput
    disconnect?: MapNodeFeatureDataWhereInput | boolean
    delete?: MapNodeFeatureDataWhereInput | boolean
    connect?: MapNodeFeatureDataWhereUniqueInput
    update?: XOR<XOR<MapNodeFeatureDataUpdateToOneWithWhereWithoutFeatureInput, MapNodeFeatureDataUpdateWithoutFeatureInput>, MapNodeFeatureDataUncheckedUpdateWithoutFeatureInput>
  }

  export type ScenarioTagCreateNestedManyWithoutScenarioInput = {
    create?: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput> | ScenarioTagCreateWithoutScenarioInput[] | ScenarioTagUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutScenarioInput | ScenarioTagCreateOrConnectWithoutScenarioInput[]
    createMany?: ScenarioTagCreateManyScenarioInputEnvelope
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
  }

  export type ScenarioStepCreateNestedManyWithoutScenarioInput = {
    create?: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput> | ScenarioStepCreateWithoutScenarioInput[] | ScenarioStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutScenarioInput | ScenarioStepCreateOrConnectWithoutScenarioInput[]
    createMany?: ScenarioStepCreateManyScenarioInputEnvelope
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
  }

  export type RunScenarioCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput> | RunScenarioCreateWithoutScenarioInput[] | RunScenarioUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutScenarioInput | RunScenarioCreateOrConnectWithoutScenarioInput[]
    createMany?: RunScenarioCreateManyScenarioInputEnvelope
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
  }

  export type RunStepCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput> | RunStepCreateWithoutScenarioInput[] | RunStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutScenarioInput | RunStepCreateOrConnectWithoutScenarioInput[]
    createMany?: RunStepCreateManyScenarioInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type ScenarioTagUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput> | ScenarioTagCreateWithoutScenarioInput[] | ScenarioTagUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutScenarioInput | ScenarioTagCreateOrConnectWithoutScenarioInput[]
    createMany?: ScenarioTagCreateManyScenarioInputEnvelope
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
  }

  export type ScenarioStepUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput> | ScenarioStepCreateWithoutScenarioInput[] | ScenarioStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutScenarioInput | ScenarioStepCreateOrConnectWithoutScenarioInput[]
    createMany?: ScenarioStepCreateManyScenarioInputEnvelope
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
  }

  export type RunScenarioUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput> | RunScenarioCreateWithoutScenarioInput[] | RunScenarioUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutScenarioInput | RunScenarioCreateOrConnectWithoutScenarioInput[]
    createMany?: RunScenarioCreateManyScenarioInputEnvelope
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
  }

  export type RunStepUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput> | RunStepCreateWithoutScenarioInput[] | RunStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutScenarioInput | RunStepCreateOrConnectWithoutScenarioInput[]
    createMany?: RunStepCreateManyScenarioInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type ScenarioTagUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput> | ScenarioTagCreateWithoutScenarioInput[] | ScenarioTagUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutScenarioInput | ScenarioTagCreateOrConnectWithoutScenarioInput[]
    upsert?: ScenarioTagUpsertWithWhereUniqueWithoutScenarioInput | ScenarioTagUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: ScenarioTagCreateManyScenarioInputEnvelope
    set?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    disconnect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    delete?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    update?: ScenarioTagUpdateWithWhereUniqueWithoutScenarioInput | ScenarioTagUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: ScenarioTagUpdateManyWithWhereWithoutScenarioInput | ScenarioTagUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
  }

  export type ScenarioStepUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput> | ScenarioStepCreateWithoutScenarioInput[] | ScenarioStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutScenarioInput | ScenarioStepCreateOrConnectWithoutScenarioInput[]
    upsert?: ScenarioStepUpsertWithWhereUniqueWithoutScenarioInput | ScenarioStepUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: ScenarioStepCreateManyScenarioInputEnvelope
    set?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    disconnect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    delete?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    update?: ScenarioStepUpdateWithWhereUniqueWithoutScenarioInput | ScenarioStepUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: ScenarioStepUpdateManyWithWhereWithoutScenarioInput | ScenarioStepUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
  }

  export type RunScenarioUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput> | RunScenarioCreateWithoutScenarioInput[] | RunScenarioUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutScenarioInput | RunScenarioCreateOrConnectWithoutScenarioInput[]
    upsert?: RunScenarioUpsertWithWhereUniqueWithoutScenarioInput | RunScenarioUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunScenarioCreateManyScenarioInputEnvelope
    set?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    disconnect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    delete?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    update?: RunScenarioUpdateWithWhereUniqueWithoutScenarioInput | RunScenarioUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunScenarioUpdateManyWithWhereWithoutScenarioInput | RunScenarioUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
  }

  export type RunStepUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput> | RunStepCreateWithoutScenarioInput[] | RunStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutScenarioInput | RunStepCreateOrConnectWithoutScenarioInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutScenarioInput | RunStepUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunStepCreateManyScenarioInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutScenarioInput | RunStepUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutScenarioInput | RunStepUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type ScenarioTagUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput> | ScenarioTagCreateWithoutScenarioInput[] | ScenarioTagUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutScenarioInput | ScenarioTagCreateOrConnectWithoutScenarioInput[]
    upsert?: ScenarioTagUpsertWithWhereUniqueWithoutScenarioInput | ScenarioTagUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: ScenarioTagCreateManyScenarioInputEnvelope
    set?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    disconnect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    delete?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    update?: ScenarioTagUpdateWithWhereUniqueWithoutScenarioInput | ScenarioTagUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: ScenarioTagUpdateManyWithWhereWithoutScenarioInput | ScenarioTagUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
  }

  export type ScenarioStepUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput> | ScenarioStepCreateWithoutScenarioInput[] | ScenarioStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutScenarioInput | ScenarioStepCreateOrConnectWithoutScenarioInput[]
    upsert?: ScenarioStepUpsertWithWhereUniqueWithoutScenarioInput | ScenarioStepUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: ScenarioStepCreateManyScenarioInputEnvelope
    set?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    disconnect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    delete?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    update?: ScenarioStepUpdateWithWhereUniqueWithoutScenarioInput | ScenarioStepUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: ScenarioStepUpdateManyWithWhereWithoutScenarioInput | ScenarioStepUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
  }

  export type RunScenarioUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput> | RunScenarioCreateWithoutScenarioInput[] | RunScenarioUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunScenarioCreateOrConnectWithoutScenarioInput | RunScenarioCreateOrConnectWithoutScenarioInput[]
    upsert?: RunScenarioUpsertWithWhereUniqueWithoutScenarioInput | RunScenarioUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunScenarioCreateManyScenarioInputEnvelope
    set?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    disconnect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    delete?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    connect?: RunScenarioWhereUniqueInput | RunScenarioWhereUniqueInput[]
    update?: RunScenarioUpdateWithWhereUniqueWithoutScenarioInput | RunScenarioUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunScenarioUpdateManyWithWhereWithoutScenarioInput | RunScenarioUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
  }

  export type RunStepUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput> | RunStepCreateWithoutScenarioInput[] | RunStepUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutScenarioInput | RunStepCreateOrConnectWithoutScenarioInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutScenarioInput | RunStepUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunStepCreateManyScenarioInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutScenarioInput | RunStepUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutScenarioInput | RunStepUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type ScenarioStepCreateNestedManyWithoutStepInput = {
    create?: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput> | ScenarioStepCreateWithoutStepInput[] | ScenarioStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutStepInput | ScenarioStepCreateOrConnectWithoutStepInput[]
    createMany?: ScenarioStepCreateManyStepInputEnvelope
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
  }

  export type RunStepCreateNestedManyWithoutStepInput = {
    create?: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput> | RunStepCreateWithoutStepInput[] | RunStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutStepInput | RunStepCreateOrConnectWithoutStepInput[]
    createMany?: RunStepCreateManyStepInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type ScenarioStepUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput> | ScenarioStepCreateWithoutStepInput[] | ScenarioStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutStepInput | ScenarioStepCreateOrConnectWithoutStepInput[]
    createMany?: ScenarioStepCreateManyStepInputEnvelope
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
  }

  export type RunStepUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput> | RunStepCreateWithoutStepInput[] | RunStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutStepInput | RunStepCreateOrConnectWithoutStepInput[]
    createMany?: RunStepCreateManyStepInputEnvelope
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
  }

  export type ScenarioStepUpdateManyWithoutStepNestedInput = {
    create?: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput> | ScenarioStepCreateWithoutStepInput[] | ScenarioStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutStepInput | ScenarioStepCreateOrConnectWithoutStepInput[]
    upsert?: ScenarioStepUpsertWithWhereUniqueWithoutStepInput | ScenarioStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: ScenarioStepCreateManyStepInputEnvelope
    set?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    disconnect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    delete?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    update?: ScenarioStepUpdateWithWhereUniqueWithoutStepInput | ScenarioStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: ScenarioStepUpdateManyWithWhereWithoutStepInput | ScenarioStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
  }

  export type RunStepUpdateManyWithoutStepNestedInput = {
    create?: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput> | RunStepCreateWithoutStepInput[] | RunStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutStepInput | RunStepCreateOrConnectWithoutStepInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutStepInput | RunStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: RunStepCreateManyStepInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutStepInput | RunStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutStepInput | RunStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type ScenarioStepUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput> | ScenarioStepCreateWithoutStepInput[] | ScenarioStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: ScenarioStepCreateOrConnectWithoutStepInput | ScenarioStepCreateOrConnectWithoutStepInput[]
    upsert?: ScenarioStepUpsertWithWhereUniqueWithoutStepInput | ScenarioStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: ScenarioStepCreateManyStepInputEnvelope
    set?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    disconnect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    delete?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    connect?: ScenarioStepWhereUniqueInput | ScenarioStepWhereUniqueInput[]
    update?: ScenarioStepUpdateWithWhereUniqueWithoutStepInput | ScenarioStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: ScenarioStepUpdateManyWithWhereWithoutStepInput | ScenarioStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
  }

  export type RunStepUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput> | RunStepCreateWithoutStepInput[] | RunStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: RunStepCreateOrConnectWithoutStepInput | RunStepCreateOrConnectWithoutStepInput[]
    upsert?: RunStepUpsertWithWhereUniqueWithoutStepInput | RunStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: RunStepCreateManyStepInputEnvelope
    set?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    disconnect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    delete?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    connect?: RunStepWhereUniqueInput | RunStepWhereUniqueInput[]
    update?: RunStepUpdateWithWhereUniqueWithoutStepInput | RunStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: RunStepUpdateManyWithWhereWithoutStepInput | RunStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
  }

  export type ScenarioCreateNestedOneWithoutStepsInput = {
    create?: XOR<ScenarioCreateWithoutStepsInput, ScenarioUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutStepsInput
    connect?: ScenarioWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutScenarioStepInput = {
    create?: XOR<StepCreateWithoutScenarioStepInput, StepUncheckedCreateWithoutScenarioStepInput>
    connectOrCreate?: StepCreateOrConnectWithoutScenarioStepInput
    connect?: StepWhereUniqueInput
  }

  export type ScenarioUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<ScenarioCreateWithoutStepsInput, ScenarioUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutStepsInput
    upsert?: ScenarioUpsertWithoutStepsInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutStepsInput, ScenarioUpdateWithoutStepsInput>, ScenarioUncheckedUpdateWithoutStepsInput>
  }

  export type StepUpdateOneRequiredWithoutScenarioStepNestedInput = {
    create?: XOR<StepCreateWithoutScenarioStepInput, StepUncheckedCreateWithoutScenarioStepInput>
    connectOrCreate?: StepCreateOrConnectWithoutScenarioStepInput
    upsert?: StepUpsertWithoutScenarioStepInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutScenarioStepInput, StepUpdateWithoutScenarioStepInput>, StepUncheckedUpdateWithoutScenarioStepInput>
  }

  export type FeatureTagCreateNestedManyWithoutTagInput = {
    create?: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput> | FeatureTagCreateWithoutTagInput[] | FeatureTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutTagInput | FeatureTagCreateOrConnectWithoutTagInput[]
    createMany?: FeatureTagCreateManyTagInputEnvelope
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
  }

  export type ScenarioTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput> | ScenarioTagCreateWithoutTagInput[] | ScenarioTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutTagInput | ScenarioTagCreateOrConnectWithoutTagInput[]
    createMany?: ScenarioTagCreateManyTagInputEnvelope
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
  }

  export type FeatureTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput> | FeatureTagCreateWithoutTagInput[] | FeatureTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutTagInput | FeatureTagCreateOrConnectWithoutTagInput[]
    createMany?: FeatureTagCreateManyTagInputEnvelope
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
  }

  export type ScenarioTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput> | ScenarioTagCreateWithoutTagInput[] | ScenarioTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutTagInput | ScenarioTagCreateOrConnectWithoutTagInput[]
    createMany?: ScenarioTagCreateManyTagInputEnvelope
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
  }

  export type FeatureTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput> | FeatureTagCreateWithoutTagInput[] | FeatureTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutTagInput | FeatureTagCreateOrConnectWithoutTagInput[]
    upsert?: FeatureTagUpsertWithWhereUniqueWithoutTagInput | FeatureTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: FeatureTagCreateManyTagInputEnvelope
    set?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    disconnect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    delete?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    update?: FeatureTagUpdateWithWhereUniqueWithoutTagInput | FeatureTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: FeatureTagUpdateManyWithWhereWithoutTagInput | FeatureTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
  }

  export type ScenarioTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput> | ScenarioTagCreateWithoutTagInput[] | ScenarioTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutTagInput | ScenarioTagCreateOrConnectWithoutTagInput[]
    upsert?: ScenarioTagUpsertWithWhereUniqueWithoutTagInput | ScenarioTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ScenarioTagCreateManyTagInputEnvelope
    set?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    disconnect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    delete?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    update?: ScenarioTagUpdateWithWhereUniqueWithoutTagInput | ScenarioTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ScenarioTagUpdateManyWithWhereWithoutTagInput | ScenarioTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
  }

  export type FeatureTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput> | FeatureTagCreateWithoutTagInput[] | FeatureTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: FeatureTagCreateOrConnectWithoutTagInput | FeatureTagCreateOrConnectWithoutTagInput[]
    upsert?: FeatureTagUpsertWithWhereUniqueWithoutTagInput | FeatureTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: FeatureTagCreateManyTagInputEnvelope
    set?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    disconnect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    delete?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    connect?: FeatureTagWhereUniqueInput | FeatureTagWhereUniqueInput[]
    update?: FeatureTagUpdateWithWhereUniqueWithoutTagInput | FeatureTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: FeatureTagUpdateManyWithWhereWithoutTagInput | FeatureTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
  }

  export type ScenarioTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput> | ScenarioTagCreateWithoutTagInput[] | ScenarioTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ScenarioTagCreateOrConnectWithoutTagInput | ScenarioTagCreateOrConnectWithoutTagInput[]
    upsert?: ScenarioTagUpsertWithWhereUniqueWithoutTagInput | ScenarioTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ScenarioTagCreateManyTagInputEnvelope
    set?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    disconnect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    delete?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    connect?: ScenarioTagWhereUniqueInput | ScenarioTagWhereUniqueInput[]
    update?: ScenarioTagUpdateWithWhereUniqueWithoutTagInput | ScenarioTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ScenarioTagUpdateManyWithWhereWithoutTagInput | ScenarioTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
  }

  export type FeatureCreateNestedOneWithoutFeatureTagsInput = {
    create?: XOR<FeatureCreateWithoutFeatureTagsInput, FeatureUncheckedCreateWithoutFeatureTagsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutFeatureTagsInput
    connect?: FeatureWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutFeatureTagsInput = {
    create?: XOR<TagCreateWithoutFeatureTagsInput, TagUncheckedCreateWithoutFeatureTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutFeatureTagsInput
    connect?: TagWhereUniqueInput
  }

  export type FeatureUpdateOneRequiredWithoutFeatureTagsNestedInput = {
    create?: XOR<FeatureCreateWithoutFeatureTagsInput, FeatureUncheckedCreateWithoutFeatureTagsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutFeatureTagsInput
    upsert?: FeatureUpsertWithoutFeatureTagsInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutFeatureTagsInput, FeatureUpdateWithoutFeatureTagsInput>, FeatureUncheckedUpdateWithoutFeatureTagsInput>
  }

  export type TagUpdateOneRequiredWithoutFeatureTagsNestedInput = {
    create?: XOR<TagCreateWithoutFeatureTagsInput, TagUncheckedCreateWithoutFeatureTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutFeatureTagsInput
    upsert?: TagUpsertWithoutFeatureTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutFeatureTagsInput, TagUpdateWithoutFeatureTagsInput>, TagUncheckedUpdateWithoutFeatureTagsInput>
  }

  export type ScenarioCreateNestedOneWithoutScenarioTagsInput = {
    create?: XOR<ScenarioCreateWithoutScenarioTagsInput, ScenarioUncheckedCreateWithoutScenarioTagsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutScenarioTagsInput
    connect?: ScenarioWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutScenarioTagsInput = {
    create?: XOR<TagCreateWithoutScenarioTagsInput, TagUncheckedCreateWithoutScenarioTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutScenarioTagsInput
    connect?: TagWhereUniqueInput
  }

  export type ScenarioUpdateOneRequiredWithoutScenarioTagsNestedInput = {
    create?: XOR<ScenarioCreateWithoutScenarioTagsInput, ScenarioUncheckedCreateWithoutScenarioTagsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutScenarioTagsInput
    upsert?: ScenarioUpsertWithoutScenarioTagsInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutScenarioTagsInput, ScenarioUpdateWithoutScenarioTagsInput>, ScenarioUncheckedUpdateWithoutScenarioTagsInput>
  }

  export type TagUpdateOneRequiredWithoutScenarioTagsNestedInput = {
    create?: XOR<TagCreateWithoutScenarioTagsInput, TagUncheckedCreateWithoutScenarioTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutScenarioTagsInput
    upsert?: TagUpsertWithoutScenarioTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutScenarioTagsInput, TagUpdateWithoutScenarioTagsInput>, TagUncheckedUpdateWithoutScenarioTagsInput>
  }

  export type MapNodeFeatureDataCreateNestedOneWithoutMapNodeInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutMapNodeInput
    connect?: MapNodeFeatureDataWhereUniqueInput
  }

  export type MapNodeImageDataCreateNestedOneWithoutMapNodeInput = {
    create?: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeImageDataCreateOrConnectWithoutMapNodeInput
    connect?: MapNodeImageDataWhereUniqueInput
  }

  export type MapNodeDependencyCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput> | MapNodeDependencyCreateWithoutSourceNodeInput[] | MapNodeDependencyUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutSourceNodeInput | MapNodeDependencyCreateOrConnectWithoutSourceNodeInput[]
    createMany?: MapNodeDependencyCreateManySourceNodeInputEnvelope
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
  }

  export type MapNodeDependencyCreateNestedManyWithoutTargetNodeInput = {
    create?: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput> | MapNodeDependencyCreateWithoutTargetNodeInput[] | MapNodeDependencyUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutTargetNodeInput | MapNodeDependencyCreateOrConnectWithoutTargetNodeInput[]
    createMany?: MapNodeDependencyCreateManyTargetNodeInputEnvelope
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
  }

  export type MapNodeFeatureDataUncheckedCreateNestedOneWithoutMapNodeInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutMapNodeInput
    connect?: MapNodeFeatureDataWhereUniqueInput
  }

  export type MapNodeImageDataUncheckedCreateNestedOneWithoutMapNodeInput = {
    create?: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeImageDataCreateOrConnectWithoutMapNodeInput
    connect?: MapNodeImageDataWhereUniqueInput
  }

  export type MapNodeDependencyUncheckedCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput> | MapNodeDependencyCreateWithoutSourceNodeInput[] | MapNodeDependencyUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutSourceNodeInput | MapNodeDependencyCreateOrConnectWithoutSourceNodeInput[]
    createMany?: MapNodeDependencyCreateManySourceNodeInputEnvelope
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
  }

  export type MapNodeDependencyUncheckedCreateNestedManyWithoutTargetNodeInput = {
    create?: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput> | MapNodeDependencyCreateWithoutTargetNodeInput[] | MapNodeDependencyUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutTargetNodeInput | MapNodeDependencyCreateOrConnectWithoutTargetNodeInput[]
    createMany?: MapNodeDependencyCreateManyTargetNodeInputEnvelope
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MapNodeFeatureDataUpdateOneWithoutMapNodeNestedInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutMapNodeInput
    upsert?: MapNodeFeatureDataUpsertWithoutMapNodeInput
    disconnect?: MapNodeFeatureDataWhereInput | boolean
    delete?: MapNodeFeatureDataWhereInput | boolean
    connect?: MapNodeFeatureDataWhereUniqueInput
    update?: XOR<XOR<MapNodeFeatureDataUpdateToOneWithWhereWithoutMapNodeInput, MapNodeFeatureDataUpdateWithoutMapNodeInput>, MapNodeFeatureDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeImageDataUpdateOneWithoutMapNodeNestedInput = {
    create?: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeImageDataCreateOrConnectWithoutMapNodeInput
    upsert?: MapNodeImageDataUpsertWithoutMapNodeInput
    disconnect?: MapNodeImageDataWhereInput | boolean
    delete?: MapNodeImageDataWhereInput | boolean
    connect?: MapNodeImageDataWhereUniqueInput
    update?: XOR<XOR<MapNodeImageDataUpdateToOneWithWhereWithoutMapNodeInput, MapNodeImageDataUpdateWithoutMapNodeInput>, MapNodeImageDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeDependencyUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput> | MapNodeDependencyCreateWithoutSourceNodeInput[] | MapNodeDependencyUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutSourceNodeInput | MapNodeDependencyCreateOrConnectWithoutSourceNodeInput[]
    upsert?: MapNodeDependencyUpsertWithWhereUniqueWithoutSourceNodeInput | MapNodeDependencyUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: MapNodeDependencyCreateManySourceNodeInputEnvelope
    set?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    disconnect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    delete?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    update?: MapNodeDependencyUpdateWithWhereUniqueWithoutSourceNodeInput | MapNodeDependencyUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: MapNodeDependencyUpdateManyWithWhereWithoutSourceNodeInput | MapNodeDependencyUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
  }

  export type MapNodeDependencyUpdateManyWithoutTargetNodeNestedInput = {
    create?: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput> | MapNodeDependencyCreateWithoutTargetNodeInput[] | MapNodeDependencyUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutTargetNodeInput | MapNodeDependencyCreateOrConnectWithoutTargetNodeInput[]
    upsert?: MapNodeDependencyUpsertWithWhereUniqueWithoutTargetNodeInput | MapNodeDependencyUpsertWithWhereUniqueWithoutTargetNodeInput[]
    createMany?: MapNodeDependencyCreateManyTargetNodeInputEnvelope
    set?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    disconnect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    delete?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    update?: MapNodeDependencyUpdateWithWhereUniqueWithoutTargetNodeInput | MapNodeDependencyUpdateWithWhereUniqueWithoutTargetNodeInput[]
    updateMany?: MapNodeDependencyUpdateManyWithWhereWithoutTargetNodeInput | MapNodeDependencyUpdateManyWithWhereWithoutTargetNodeInput[]
    deleteMany?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
  }

  export type MapNodeFeatureDataUncheckedUpdateOneWithoutMapNodeNestedInput = {
    create?: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeFeatureDataCreateOrConnectWithoutMapNodeInput
    upsert?: MapNodeFeatureDataUpsertWithoutMapNodeInput
    disconnect?: MapNodeFeatureDataWhereInput | boolean
    delete?: MapNodeFeatureDataWhereInput | boolean
    connect?: MapNodeFeatureDataWhereUniqueInput
    update?: XOR<XOR<MapNodeFeatureDataUpdateToOneWithWhereWithoutMapNodeInput, MapNodeFeatureDataUpdateWithoutMapNodeInput>, MapNodeFeatureDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeImageDataUncheckedUpdateOneWithoutMapNodeNestedInput = {
    create?: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
    connectOrCreate?: MapNodeImageDataCreateOrConnectWithoutMapNodeInput
    upsert?: MapNodeImageDataUpsertWithoutMapNodeInput
    disconnect?: MapNodeImageDataWhereInput | boolean
    delete?: MapNodeImageDataWhereInput | boolean
    connect?: MapNodeImageDataWhereUniqueInput
    update?: XOR<XOR<MapNodeImageDataUpdateToOneWithWhereWithoutMapNodeInput, MapNodeImageDataUpdateWithoutMapNodeInput>, MapNodeImageDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput> | MapNodeDependencyCreateWithoutSourceNodeInput[] | MapNodeDependencyUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutSourceNodeInput | MapNodeDependencyCreateOrConnectWithoutSourceNodeInput[]
    upsert?: MapNodeDependencyUpsertWithWhereUniqueWithoutSourceNodeInput | MapNodeDependencyUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: MapNodeDependencyCreateManySourceNodeInputEnvelope
    set?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    disconnect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    delete?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    update?: MapNodeDependencyUpdateWithWhereUniqueWithoutSourceNodeInput | MapNodeDependencyUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: MapNodeDependencyUpdateManyWithWhereWithoutSourceNodeInput | MapNodeDependencyUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
  }

  export type MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeNestedInput = {
    create?: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput> | MapNodeDependencyCreateWithoutTargetNodeInput[] | MapNodeDependencyUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: MapNodeDependencyCreateOrConnectWithoutTargetNodeInput | MapNodeDependencyCreateOrConnectWithoutTargetNodeInput[]
    upsert?: MapNodeDependencyUpsertWithWhereUniqueWithoutTargetNodeInput | MapNodeDependencyUpsertWithWhereUniqueWithoutTargetNodeInput[]
    createMany?: MapNodeDependencyCreateManyTargetNodeInputEnvelope
    set?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    disconnect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    delete?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    connect?: MapNodeDependencyWhereUniqueInput | MapNodeDependencyWhereUniqueInput[]
    update?: MapNodeDependencyUpdateWithWhereUniqueWithoutTargetNodeInput | MapNodeDependencyUpdateWithWhereUniqueWithoutTargetNodeInput[]
    updateMany?: MapNodeDependencyUpdateManyWithWhereWithoutTargetNodeInput | MapNodeDependencyUpdateManyWithWhereWithoutTargetNodeInput[]
    deleteMany?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
  }

  export type MapNodeCreateNestedOneWithoutFeatureDataInput = {
    create?: XOR<MapNodeCreateWithoutFeatureDataInput, MapNodeUncheckedCreateWithoutFeatureDataInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutFeatureDataInput
    connect?: MapNodeWhereUniqueInput
  }

  export type FeatureCreateNestedOneWithoutMapNodeFeatureDataInput = {
    create?: XOR<FeatureCreateWithoutMapNodeFeatureDataInput, FeatureUncheckedCreateWithoutMapNodeFeatureDataInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutMapNodeFeatureDataInput
    connect?: FeatureWhereUniqueInput
  }

  export type MapNodeUpdateOneRequiredWithoutFeatureDataNestedInput = {
    create?: XOR<MapNodeCreateWithoutFeatureDataInput, MapNodeUncheckedCreateWithoutFeatureDataInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutFeatureDataInput
    upsert?: MapNodeUpsertWithoutFeatureDataInput
    connect?: MapNodeWhereUniqueInput
    update?: XOR<XOR<MapNodeUpdateToOneWithWhereWithoutFeatureDataInput, MapNodeUpdateWithoutFeatureDataInput>, MapNodeUncheckedUpdateWithoutFeatureDataInput>
  }

  export type FeatureUpdateOneRequiredWithoutMapNodeFeatureDataNestedInput = {
    create?: XOR<FeatureCreateWithoutMapNodeFeatureDataInput, FeatureUncheckedCreateWithoutMapNodeFeatureDataInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutMapNodeFeatureDataInput
    upsert?: FeatureUpsertWithoutMapNodeFeatureDataInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutMapNodeFeatureDataInput, FeatureUpdateWithoutMapNodeFeatureDataInput>, FeatureUncheckedUpdateWithoutMapNodeFeatureDataInput>
  }

  export type MapNodeCreateNestedOneWithoutImageDataInput = {
    create?: XOR<MapNodeCreateWithoutImageDataInput, MapNodeUncheckedCreateWithoutImageDataInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutImageDataInput
    connect?: MapNodeWhereUniqueInput
  }

  export type MapNodeUpdateOneRequiredWithoutImageDataNestedInput = {
    create?: XOR<MapNodeCreateWithoutImageDataInput, MapNodeUncheckedCreateWithoutImageDataInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutImageDataInput
    upsert?: MapNodeUpsertWithoutImageDataInput
    connect?: MapNodeWhereUniqueInput
    update?: XOR<XOR<MapNodeUpdateToOneWithWhereWithoutImageDataInput, MapNodeUpdateWithoutImageDataInput>, MapNodeUncheckedUpdateWithoutImageDataInput>
  }

  export type MapNodeCreateNestedOneWithoutOutgoingDependenciesInput = {
    create?: XOR<MapNodeCreateWithoutOutgoingDependenciesInput, MapNodeUncheckedCreateWithoutOutgoingDependenciesInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutOutgoingDependenciesInput
    connect?: MapNodeWhereUniqueInput
  }

  export type MapNodeCreateNestedOneWithoutIncomingDependenciesInput = {
    create?: XOR<MapNodeCreateWithoutIncomingDependenciesInput, MapNodeUncheckedCreateWithoutIncomingDependenciesInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutIncomingDependenciesInput
    connect?: MapNodeWhereUniqueInput
  }

  export type MapNodeUpdateOneRequiredWithoutOutgoingDependenciesNestedInput = {
    create?: XOR<MapNodeCreateWithoutOutgoingDependenciesInput, MapNodeUncheckedCreateWithoutOutgoingDependenciesInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutOutgoingDependenciesInput
    upsert?: MapNodeUpsertWithoutOutgoingDependenciesInput
    connect?: MapNodeWhereUniqueInput
    update?: XOR<XOR<MapNodeUpdateToOneWithWhereWithoutOutgoingDependenciesInput, MapNodeUpdateWithoutOutgoingDependenciesInput>, MapNodeUncheckedUpdateWithoutOutgoingDependenciesInput>
  }

  export type MapNodeUpdateOneRequiredWithoutIncomingDependenciesNestedInput = {
    create?: XOR<MapNodeCreateWithoutIncomingDependenciesInput, MapNodeUncheckedCreateWithoutIncomingDependenciesInput>
    connectOrCreate?: MapNodeCreateOrConnectWithoutIncomingDependenciesInput
    upsert?: MapNodeUpsertWithoutIncomingDependenciesInput
    connect?: MapNodeWhereUniqueInput
    update?: XOR<XOR<MapNodeUpdateToOneWithWhereWithoutIncomingDependenciesInput, MapNodeUpdateWithoutIncomingDependenciesInput>, MapNodeUncheckedUpdateWithoutIncomingDependenciesInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type RunFeatureCreateWithoutRunInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    feature: FeatureCreateNestedOneWithoutRunFeatureInput
  }

  export type RunFeatureUncheckedCreateWithoutRunInput = {
    id?: string
    featureId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunFeatureCreateOrConnectWithoutRunInput = {
    where: RunFeatureWhereUniqueInput
    create: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput>
  }

  export type RunFeatureCreateManyRunInputEnvelope = {
    data: RunFeatureCreateManyRunInput | RunFeatureCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type RunScenarioCreateWithoutRunInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    scenario: ScenarioCreateNestedOneWithoutRunScenarioInput
  }

  export type RunScenarioUncheckedCreateWithoutRunInput = {
    id?: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunScenarioCreateOrConnectWithoutRunInput = {
    where: RunScenarioWhereUniqueInput
    create: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput>
  }

  export type RunScenarioCreateManyRunInputEnvelope = {
    data: RunScenarioCreateManyRunInput | RunScenarioCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type RunStepCreateWithoutRunInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
    step: StepCreateNestedOneWithoutRunStepInput
    scenario: ScenarioCreateNestedOneWithoutRunStepInput
  }

  export type RunStepUncheckedCreateWithoutRunInput = {
    id?: string
    stepId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunStepCreateOrConnectWithoutRunInput = {
    where: RunStepWhereUniqueInput
    create: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput>
  }

  export type RunStepCreateManyRunInputEnvelope = {
    data: RunStepCreateManyRunInput | RunStepCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type RunFeatureUpsertWithWhereUniqueWithoutRunInput = {
    where: RunFeatureWhereUniqueInput
    update: XOR<RunFeatureUpdateWithoutRunInput, RunFeatureUncheckedUpdateWithoutRunInput>
    create: XOR<RunFeatureCreateWithoutRunInput, RunFeatureUncheckedCreateWithoutRunInput>
  }

  export type RunFeatureUpdateWithWhereUniqueWithoutRunInput = {
    where: RunFeatureWhereUniqueInput
    data: XOR<RunFeatureUpdateWithoutRunInput, RunFeatureUncheckedUpdateWithoutRunInput>
  }

  export type RunFeatureUpdateManyWithWhereWithoutRunInput = {
    where: RunFeatureScalarWhereInput
    data: XOR<RunFeatureUpdateManyMutationInput, RunFeatureUncheckedUpdateManyWithoutRunInput>
  }

  export type RunFeatureScalarWhereInput = {
    AND?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
    OR?: RunFeatureScalarWhereInput[]
    NOT?: RunFeatureScalarWhereInput | RunFeatureScalarWhereInput[]
    id?: StringFilter<"RunFeature"> | string
    runId?: StringFilter<"RunFeature"> | string
    featureId?: StringFilter<"RunFeature"> | string
    status?: EnumStatusFilter<"RunFeature"> | $Enums.Status
    duration?: IntNullableFilter<"RunFeature"> | number | null
    createdAt?: DateTimeFilter<"RunFeature"> | Date | string
  }

  export type RunScenarioUpsertWithWhereUniqueWithoutRunInput = {
    where: RunScenarioWhereUniqueInput
    update: XOR<RunScenarioUpdateWithoutRunInput, RunScenarioUncheckedUpdateWithoutRunInput>
    create: XOR<RunScenarioCreateWithoutRunInput, RunScenarioUncheckedCreateWithoutRunInput>
  }

  export type RunScenarioUpdateWithWhereUniqueWithoutRunInput = {
    where: RunScenarioWhereUniqueInput
    data: XOR<RunScenarioUpdateWithoutRunInput, RunScenarioUncheckedUpdateWithoutRunInput>
  }

  export type RunScenarioUpdateManyWithWhereWithoutRunInput = {
    where: RunScenarioScalarWhereInput
    data: XOR<RunScenarioUpdateManyMutationInput, RunScenarioUncheckedUpdateManyWithoutRunInput>
  }

  export type RunScenarioScalarWhereInput = {
    AND?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
    OR?: RunScenarioScalarWhereInput[]
    NOT?: RunScenarioScalarWhereInput | RunScenarioScalarWhereInput[]
    id?: StringFilter<"RunScenario"> | string
    runId?: StringFilter<"RunScenario"> | string
    scenarioId?: StringFilter<"RunScenario"> | string
    status?: EnumStatusFilter<"RunScenario"> | $Enums.Status
    duration?: IntNullableFilter<"RunScenario"> | number | null
    createdAt?: DateTimeFilter<"RunScenario"> | Date | string
  }

  export type RunStepUpsertWithWhereUniqueWithoutRunInput = {
    where: RunStepWhereUniqueInput
    update: XOR<RunStepUpdateWithoutRunInput, RunStepUncheckedUpdateWithoutRunInput>
    create: XOR<RunStepCreateWithoutRunInput, RunStepUncheckedCreateWithoutRunInput>
  }

  export type RunStepUpdateWithWhereUniqueWithoutRunInput = {
    where: RunStepWhereUniqueInput
    data: XOR<RunStepUpdateWithoutRunInput, RunStepUncheckedUpdateWithoutRunInput>
  }

  export type RunStepUpdateManyWithWhereWithoutRunInput = {
    where: RunStepScalarWhereInput
    data: XOR<RunStepUpdateManyMutationInput, RunStepUncheckedUpdateManyWithoutRunInput>
  }

  export type RunStepScalarWhereInput = {
    AND?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
    OR?: RunStepScalarWhereInput[]
    NOT?: RunStepScalarWhereInput | RunStepScalarWhereInput[]
    id?: StringFilter<"RunStep"> | string
    runId?: StringFilter<"RunStep"> | string
    stepId?: StringFilter<"RunStep"> | string
    scenarioId?: StringFilter<"RunStep"> | string
    status?: EnumStatusFilter<"RunStep"> | $Enums.Status
    duration?: IntNullableFilter<"RunStep"> | number | null
    errorMessage?: StringNullableFilter<"RunStep"> | string | null
    stackTrace?: StringNullableFilter<"RunStep"> | string | null
    createdAt?: DateTimeFilter<"RunStep"> | Date | string
  }

  export type RunCreateWithoutRunFeatureInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunScenario?: RunScenarioCreateNestedManyWithoutRunInput
    RunStep?: RunStepCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutRunFeatureInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutRunInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutRunFeatureInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutRunFeatureInput, RunUncheckedCreateWithoutRunFeatureInput>
  }

  export type FeatureCreateWithoutRunFeatureInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataCreateNestedOneWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutRunFeatureInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagUncheckedCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutRunFeatureInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutRunFeatureInput, FeatureUncheckedCreateWithoutRunFeatureInput>
  }

  export type RunUpsertWithoutRunFeatureInput = {
    update: XOR<RunUpdateWithoutRunFeatureInput, RunUncheckedUpdateWithoutRunFeatureInput>
    create: XOR<RunCreateWithoutRunFeatureInput, RunUncheckedCreateWithoutRunFeatureInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutRunFeatureInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutRunFeatureInput, RunUncheckedUpdateWithoutRunFeatureInput>
  }

  export type RunUpdateWithoutRunFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunScenario?: RunScenarioUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutRunFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    runNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutRunNestedInput
  }

  export type FeatureUpsertWithoutRunFeatureInput = {
    update: XOR<FeatureUpdateWithoutRunFeatureInput, FeatureUncheckedUpdateWithoutRunFeatureInput>
    create: XOR<FeatureCreateWithoutRunFeatureInput, FeatureUncheckedCreateWithoutRunFeatureInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutRunFeatureInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutRunFeatureInput, FeatureUncheckedUpdateWithoutRunFeatureInput>
  }

  export type FeatureUpdateWithoutRunFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUpdateOneWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutRunFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUncheckedUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutFeatureNestedInput
  }

  export type RunCreateWithoutRunScenarioInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureCreateNestedManyWithoutRunInput
    RunStep?: RunStepCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutRunScenarioInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutRunInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutRunScenarioInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutRunScenarioInput, RunUncheckedCreateWithoutRunScenarioInput>
  }

  export type ScenarioCreateWithoutRunScenarioInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutRunScenarioInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepUncheckedCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutRunScenarioInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutRunScenarioInput, ScenarioUncheckedCreateWithoutRunScenarioInput>
  }

  export type RunUpsertWithoutRunScenarioInput = {
    update: XOR<RunUpdateWithoutRunScenarioInput, RunUncheckedUpdateWithoutRunScenarioInput>
    create: XOR<RunCreateWithoutRunScenarioInput, RunUncheckedCreateWithoutRunScenarioInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutRunScenarioInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutRunScenarioInput, RunUncheckedUpdateWithoutRunScenarioInput>
  }

  export type RunUpdateWithoutRunScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutRunScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    runNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutRunNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutRunNestedInput
  }

  export type ScenarioUpsertWithoutRunScenarioInput = {
    update: XOR<ScenarioUpdateWithoutRunScenarioInput, ScenarioUncheckedUpdateWithoutRunScenarioInput>
    create: XOR<ScenarioCreateWithoutRunScenarioInput, ScenarioUncheckedCreateWithoutRunScenarioInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutRunScenarioInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutRunScenarioInput, ScenarioUncheckedUpdateWithoutRunScenarioInput>
  }

  export type ScenarioUpdateWithoutRunScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutRunScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUncheckedUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type RunCreateWithoutRunStepInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureCreateNestedManyWithoutRunInput
    RunScenario?: RunScenarioCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutRunStepInput = {
    id?: string
    runNumber?: number
    status: $Enums.Status
    browser: string
    platform: string
    environment: string
    featuresCount: number
    scenariosCount: number
    stepsCount: number
    passCount?: number
    failCount?: number
    skipCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    duration?: number | null
    auto: boolean
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutRunInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutRunStepInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutRunStepInput, RunUncheckedCreateWithoutRunStepInput>
  }

  export type StepCreateWithoutRunStepInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutRunStepInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutRunStepInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutRunStepInput, StepUncheckedCreateWithoutRunStepInput>
  }

  export type ScenarioCreateWithoutRunStepInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutRunStepInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutScenarioInput
    steps?: ScenarioStepUncheckedCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutRunStepInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutRunStepInput, ScenarioUncheckedCreateWithoutRunStepInput>
  }

  export type RunUpsertWithoutRunStepInput = {
    update: XOR<RunUpdateWithoutRunStepInput, RunUncheckedUpdateWithoutRunStepInput>
    create: XOR<RunCreateWithoutRunStepInput, RunUncheckedCreateWithoutRunStepInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutRunStepInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutRunStepInput, RunUncheckedUpdateWithoutRunStepInput>
  }

  export type RunUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUpdateManyWithoutRunNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    runNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    browser?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    featuresCount?: IntFieldUpdateOperationsInput | number
    scenariosCount?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    passCount?: IntFieldUpdateOperationsInput | number
    failCount?: IntFieldUpdateOperationsInput | number
    skipCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    auto?: BoolFieldUpdateOperationsInput | boolean
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutRunNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutRunNestedInput
  }

  export type StepUpsertWithoutRunStepInput = {
    update: XOR<StepUpdateWithoutRunStepInput, StepUncheckedUpdateWithoutRunStepInput>
    create: XOR<StepCreateWithoutRunStepInput, StepUncheckedCreateWithoutRunStepInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutRunStepInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutRunStepInput, StepUncheckedUpdateWithoutRunStepInput>
  }

  export type StepUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    ScenarioStep?: ScenarioStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type ScenarioUpsertWithoutRunStepInput = {
    update: XOR<ScenarioUpdateWithoutRunStepInput, ScenarioUncheckedUpdateWithoutRunStepInput>
    create: XOR<ScenarioCreateWithoutRunStepInput, ScenarioUncheckedCreateWithoutRunStepInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutRunStepInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutRunStepInput, ScenarioUncheckedUpdateWithoutRunStepInput>
  }

  export type ScenarioUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutRunStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutScenarioNestedInput
    steps?: ScenarioStepUncheckedUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type FeatureTagCreateWithoutFeatureInput = {
    tag: TagCreateNestedOneWithoutFeatureTagsInput
  }

  export type FeatureTagUncheckedCreateWithoutFeatureInput = {
    tagId: string
  }

  export type FeatureTagCreateOrConnectWithoutFeatureInput = {
    where: FeatureTagWhereUniqueInput
    create: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureTagCreateManyFeatureInputEnvelope = {
    data: FeatureTagCreateManyFeatureInput | FeatureTagCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type RunFeatureCreateWithoutFeatureInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunFeatureInput
  }

  export type RunFeatureUncheckedCreateWithoutFeatureInput = {
    id?: string
    runId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunFeatureCreateOrConnectWithoutFeatureInput = {
    where: RunFeatureWhereUniqueInput
    create: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type RunFeatureCreateManyFeatureInputEnvelope = {
    data: RunFeatureCreateManyFeatureInput | RunFeatureCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type MapNodeFeatureDataCreateWithoutFeatureInput = {
    id?: string
    mapNode: MapNodeCreateNestedOneWithoutFeatureDataInput
  }

  export type MapNodeFeatureDataUncheckedCreateWithoutFeatureInput = {
    id?: string
    mapNodeId: string
  }

  export type MapNodeFeatureDataCreateOrConnectWithoutFeatureInput = {
    where: MapNodeFeatureDataWhereUniqueInput
    create: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureTagUpsertWithWhereUniqueWithoutFeatureInput = {
    where: FeatureTagWhereUniqueInput
    update: XOR<FeatureTagUpdateWithoutFeatureInput, FeatureTagUncheckedUpdateWithoutFeatureInput>
    create: XOR<FeatureTagCreateWithoutFeatureInput, FeatureTagUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureTagUpdateWithWhereUniqueWithoutFeatureInput = {
    where: FeatureTagWhereUniqueInput
    data: XOR<FeatureTagUpdateWithoutFeatureInput, FeatureTagUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureTagUpdateManyWithWhereWithoutFeatureInput = {
    where: FeatureTagScalarWhereInput
    data: XOR<FeatureTagUpdateManyMutationInput, FeatureTagUncheckedUpdateManyWithoutFeatureInput>
  }

  export type FeatureTagScalarWhereInput = {
    AND?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
    OR?: FeatureTagScalarWhereInput[]
    NOT?: FeatureTagScalarWhereInput | FeatureTagScalarWhereInput[]
    featureId?: StringFilter<"FeatureTag"> | string
    tagId?: StringFilter<"FeatureTag"> | string
  }

  export type RunFeatureUpsertWithWhereUniqueWithoutFeatureInput = {
    where: RunFeatureWhereUniqueInput
    update: XOR<RunFeatureUpdateWithoutFeatureInput, RunFeatureUncheckedUpdateWithoutFeatureInput>
    create: XOR<RunFeatureCreateWithoutFeatureInput, RunFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type RunFeatureUpdateWithWhereUniqueWithoutFeatureInput = {
    where: RunFeatureWhereUniqueInput
    data: XOR<RunFeatureUpdateWithoutFeatureInput, RunFeatureUncheckedUpdateWithoutFeatureInput>
  }

  export type RunFeatureUpdateManyWithWhereWithoutFeatureInput = {
    where: RunFeatureScalarWhereInput
    data: XOR<RunFeatureUpdateManyMutationInput, RunFeatureUncheckedUpdateManyWithoutFeatureInput>
  }

  export type MapNodeFeatureDataUpsertWithoutFeatureInput = {
    update: XOR<MapNodeFeatureDataUpdateWithoutFeatureInput, MapNodeFeatureDataUncheckedUpdateWithoutFeatureInput>
    create: XOR<MapNodeFeatureDataCreateWithoutFeatureInput, MapNodeFeatureDataUncheckedCreateWithoutFeatureInput>
    where?: MapNodeFeatureDataWhereInput
  }

  export type MapNodeFeatureDataUpdateToOneWithWhereWithoutFeatureInput = {
    where?: MapNodeFeatureDataWhereInput
    data: XOR<MapNodeFeatureDataUpdateWithoutFeatureInput, MapNodeFeatureDataUncheckedUpdateWithoutFeatureInput>
  }

  export type MapNodeFeatureDataUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNode?: MapNodeUpdateOneRequiredWithoutFeatureDataNestedInput
  }

  export type MapNodeFeatureDataUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagCreateWithoutScenarioInput = {
    tag: TagCreateNestedOneWithoutScenarioTagsInput
  }

  export type ScenarioTagUncheckedCreateWithoutScenarioInput = {
    tagId: string
  }

  export type ScenarioTagCreateOrConnectWithoutScenarioInput = {
    where: ScenarioTagWhereUniqueInput
    create: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput>
  }

  export type ScenarioTagCreateManyScenarioInputEnvelope = {
    data: ScenarioTagCreateManyScenarioInput | ScenarioTagCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioStepCreateWithoutScenarioInput = {
    keyword: string
    step: StepCreateNestedOneWithoutScenarioStepInput
  }

  export type ScenarioStepUncheckedCreateWithoutScenarioInput = {
    stepId: string
    keyword: string
  }

  export type ScenarioStepCreateOrConnectWithoutScenarioInput = {
    where: ScenarioStepWhereUniqueInput
    create: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput>
  }

  export type ScenarioStepCreateManyScenarioInputEnvelope = {
    data: ScenarioStepCreateManyScenarioInput | ScenarioStepCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type RunScenarioCreateWithoutScenarioInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunScenarioInput
  }

  export type RunScenarioUncheckedCreateWithoutScenarioInput = {
    id?: string
    runId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunScenarioCreateOrConnectWithoutScenarioInput = {
    where: RunScenarioWhereUniqueInput
    create: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput>
  }

  export type RunScenarioCreateManyScenarioInputEnvelope = {
    data: RunScenarioCreateManyScenarioInput | RunScenarioCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type RunStepCreateWithoutScenarioInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunStepInput
    step: StepCreateNestedOneWithoutRunStepInput
  }

  export type RunStepUncheckedCreateWithoutScenarioInput = {
    id?: string
    runId: string
    stepId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunStepCreateOrConnectWithoutScenarioInput = {
    where: RunStepWhereUniqueInput
    create: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput>
  }

  export type RunStepCreateManyScenarioInputEnvelope = {
    data: RunStepCreateManyScenarioInput | RunStepCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioTagUpsertWithWhereUniqueWithoutScenarioInput = {
    where: ScenarioTagWhereUniqueInput
    update: XOR<ScenarioTagUpdateWithoutScenarioInput, ScenarioTagUncheckedUpdateWithoutScenarioInput>
    create: XOR<ScenarioTagCreateWithoutScenarioInput, ScenarioTagUncheckedCreateWithoutScenarioInput>
  }

  export type ScenarioTagUpdateWithWhereUniqueWithoutScenarioInput = {
    where: ScenarioTagWhereUniqueInput
    data: XOR<ScenarioTagUpdateWithoutScenarioInput, ScenarioTagUncheckedUpdateWithoutScenarioInput>
  }

  export type ScenarioTagUpdateManyWithWhereWithoutScenarioInput = {
    where: ScenarioTagScalarWhereInput
    data: XOR<ScenarioTagUpdateManyMutationInput, ScenarioTagUncheckedUpdateManyWithoutScenarioInput>
  }

  export type ScenarioTagScalarWhereInput = {
    AND?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
    OR?: ScenarioTagScalarWhereInput[]
    NOT?: ScenarioTagScalarWhereInput | ScenarioTagScalarWhereInput[]
    scenarioId?: StringFilter<"ScenarioTag"> | string
    tagId?: StringFilter<"ScenarioTag"> | string
  }

  export type ScenarioStepUpsertWithWhereUniqueWithoutScenarioInput = {
    where: ScenarioStepWhereUniqueInput
    update: XOR<ScenarioStepUpdateWithoutScenarioInput, ScenarioStepUncheckedUpdateWithoutScenarioInput>
    create: XOR<ScenarioStepCreateWithoutScenarioInput, ScenarioStepUncheckedCreateWithoutScenarioInput>
  }

  export type ScenarioStepUpdateWithWhereUniqueWithoutScenarioInput = {
    where: ScenarioStepWhereUniqueInput
    data: XOR<ScenarioStepUpdateWithoutScenarioInput, ScenarioStepUncheckedUpdateWithoutScenarioInput>
  }

  export type ScenarioStepUpdateManyWithWhereWithoutScenarioInput = {
    where: ScenarioStepScalarWhereInput
    data: XOR<ScenarioStepUpdateManyMutationInput, ScenarioStepUncheckedUpdateManyWithoutScenarioInput>
  }

  export type ScenarioStepScalarWhereInput = {
    AND?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
    OR?: ScenarioStepScalarWhereInput[]
    NOT?: ScenarioStepScalarWhereInput | ScenarioStepScalarWhereInput[]
    scenarioId?: StringFilter<"ScenarioStep"> | string
    stepId?: StringFilter<"ScenarioStep"> | string
    keyword?: StringFilter<"ScenarioStep"> | string
  }

  export type RunScenarioUpsertWithWhereUniqueWithoutScenarioInput = {
    where: RunScenarioWhereUniqueInput
    update: XOR<RunScenarioUpdateWithoutScenarioInput, RunScenarioUncheckedUpdateWithoutScenarioInput>
    create: XOR<RunScenarioCreateWithoutScenarioInput, RunScenarioUncheckedCreateWithoutScenarioInput>
  }

  export type RunScenarioUpdateWithWhereUniqueWithoutScenarioInput = {
    where: RunScenarioWhereUniqueInput
    data: XOR<RunScenarioUpdateWithoutScenarioInput, RunScenarioUncheckedUpdateWithoutScenarioInput>
  }

  export type RunScenarioUpdateManyWithWhereWithoutScenarioInput = {
    where: RunScenarioScalarWhereInput
    data: XOR<RunScenarioUpdateManyMutationInput, RunScenarioUncheckedUpdateManyWithoutScenarioInput>
  }

  export type RunStepUpsertWithWhereUniqueWithoutScenarioInput = {
    where: RunStepWhereUniqueInput
    update: XOR<RunStepUpdateWithoutScenarioInput, RunStepUncheckedUpdateWithoutScenarioInput>
    create: XOR<RunStepCreateWithoutScenarioInput, RunStepUncheckedCreateWithoutScenarioInput>
  }

  export type RunStepUpdateWithWhereUniqueWithoutScenarioInput = {
    where: RunStepWhereUniqueInput
    data: XOR<RunStepUpdateWithoutScenarioInput, RunStepUncheckedUpdateWithoutScenarioInput>
  }

  export type RunStepUpdateManyWithWhereWithoutScenarioInput = {
    where: RunStepScalarWhereInput
    data: XOR<RunStepUpdateManyMutationInput, RunStepUncheckedUpdateManyWithoutScenarioInput>
  }

  export type ScenarioStepCreateWithoutStepInput = {
    keyword: string
    scenario: ScenarioCreateNestedOneWithoutStepsInput
  }

  export type ScenarioStepUncheckedCreateWithoutStepInput = {
    scenarioId: string
    keyword: string
  }

  export type ScenarioStepCreateOrConnectWithoutStepInput = {
    where: ScenarioStepWhereUniqueInput
    create: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput>
  }

  export type ScenarioStepCreateManyStepInputEnvelope = {
    data: ScenarioStepCreateManyStepInput | ScenarioStepCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type RunStepCreateWithoutStepInput = {
    id?: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutRunStepInput
    scenario: ScenarioCreateNestedOneWithoutRunStepInput
  }

  export type RunStepUncheckedCreateWithoutStepInput = {
    id?: string
    runId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunStepCreateOrConnectWithoutStepInput = {
    where: RunStepWhereUniqueInput
    create: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput>
  }

  export type RunStepCreateManyStepInputEnvelope = {
    data: RunStepCreateManyStepInput | RunStepCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioStepUpsertWithWhereUniqueWithoutStepInput = {
    where: ScenarioStepWhereUniqueInput
    update: XOR<ScenarioStepUpdateWithoutStepInput, ScenarioStepUncheckedUpdateWithoutStepInput>
    create: XOR<ScenarioStepCreateWithoutStepInput, ScenarioStepUncheckedCreateWithoutStepInput>
  }

  export type ScenarioStepUpdateWithWhereUniqueWithoutStepInput = {
    where: ScenarioStepWhereUniqueInput
    data: XOR<ScenarioStepUpdateWithoutStepInput, ScenarioStepUncheckedUpdateWithoutStepInput>
  }

  export type ScenarioStepUpdateManyWithWhereWithoutStepInput = {
    where: ScenarioStepScalarWhereInput
    data: XOR<ScenarioStepUpdateManyMutationInput, ScenarioStepUncheckedUpdateManyWithoutStepInput>
  }

  export type RunStepUpsertWithWhereUniqueWithoutStepInput = {
    where: RunStepWhereUniqueInput
    update: XOR<RunStepUpdateWithoutStepInput, RunStepUncheckedUpdateWithoutStepInput>
    create: XOR<RunStepCreateWithoutStepInput, RunStepUncheckedCreateWithoutStepInput>
  }

  export type RunStepUpdateWithWhereUniqueWithoutStepInput = {
    where: RunStepWhereUniqueInput
    data: XOR<RunStepUpdateWithoutStepInput, RunStepUncheckedUpdateWithoutStepInput>
  }

  export type RunStepUpdateManyWithWhereWithoutStepInput = {
    where: RunStepScalarWhereInput
    data: XOR<RunStepUpdateManyMutationInput, RunStepUncheckedUpdateManyWithoutStepInput>
  }

  export type ScenarioCreateWithoutStepsInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutStepsInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutStepsInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutStepsInput, ScenarioUncheckedCreateWithoutStepsInput>
  }

  export type StepCreateWithoutScenarioStepInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    RunStep?: RunStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutScenarioStepInput = {
    id?: string
    keyword: string
    name: string
    contentHash?: string | null
    active?: boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    RunStep?: RunStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutScenarioStepInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutScenarioStepInput, StepUncheckedCreateWithoutScenarioStepInput>
  }

  export type ScenarioUpsertWithoutStepsInput = {
    update: XOR<ScenarioUpdateWithoutStepsInput, ScenarioUncheckedUpdateWithoutStepsInput>
    create: XOR<ScenarioCreateWithoutStepsInput, ScenarioUncheckedCreateWithoutStepsInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutStepsInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutStepsInput, ScenarioUncheckedUpdateWithoutStepsInput>
  }

  export type ScenarioUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type StepUpsertWithoutScenarioStepInput = {
    update: XOR<StepUpdateWithoutScenarioStepInput, StepUncheckedUpdateWithoutScenarioStepInput>
    create: XOR<StepCreateWithoutScenarioStepInput, StepUncheckedCreateWithoutScenarioStepInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutScenarioStepInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutScenarioStepInput, StepUncheckedUpdateWithoutScenarioStepInput>
  }

  export type StepUpdateWithoutScenarioStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    RunStep?: RunStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutScenarioStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    media?: NullableJsonNullValueInput | InputJsonValue
    RunStep?: RunStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type FeatureTagCreateWithoutTagInput = {
    feature: FeatureCreateNestedOneWithoutFeatureTagsInput
  }

  export type FeatureTagUncheckedCreateWithoutTagInput = {
    featureId: string
  }

  export type FeatureTagCreateOrConnectWithoutTagInput = {
    where: FeatureTagWhereUniqueInput
    create: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput>
  }

  export type FeatureTagCreateManyTagInputEnvelope = {
    data: FeatureTagCreateManyTagInput | FeatureTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioTagCreateWithoutTagInput = {
    scenario: ScenarioCreateNestedOneWithoutScenarioTagsInput
  }

  export type ScenarioTagUncheckedCreateWithoutTagInput = {
    scenarioId: string
  }

  export type ScenarioTagCreateOrConnectWithoutTagInput = {
    where: ScenarioTagWhereUniqueInput
    create: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput>
  }

  export type ScenarioTagCreateManyTagInputEnvelope = {
    data: ScenarioTagCreateManyTagInput | ScenarioTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type FeatureTagUpsertWithWhereUniqueWithoutTagInput = {
    where: FeatureTagWhereUniqueInput
    update: XOR<FeatureTagUpdateWithoutTagInput, FeatureTagUncheckedUpdateWithoutTagInput>
    create: XOR<FeatureTagCreateWithoutTagInput, FeatureTagUncheckedCreateWithoutTagInput>
  }

  export type FeatureTagUpdateWithWhereUniqueWithoutTagInput = {
    where: FeatureTagWhereUniqueInput
    data: XOR<FeatureTagUpdateWithoutTagInput, FeatureTagUncheckedUpdateWithoutTagInput>
  }

  export type FeatureTagUpdateManyWithWhereWithoutTagInput = {
    where: FeatureTagScalarWhereInput
    data: XOR<FeatureTagUpdateManyMutationInput, FeatureTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ScenarioTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ScenarioTagWhereUniqueInput
    update: XOR<ScenarioTagUpdateWithoutTagInput, ScenarioTagUncheckedUpdateWithoutTagInput>
    create: XOR<ScenarioTagCreateWithoutTagInput, ScenarioTagUncheckedCreateWithoutTagInput>
  }

  export type ScenarioTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ScenarioTagWhereUniqueInput
    data: XOR<ScenarioTagUpdateWithoutTagInput, ScenarioTagUncheckedUpdateWithoutTagInput>
  }

  export type ScenarioTagUpdateManyWithWhereWithoutTagInput = {
    where: ScenarioTagScalarWhereInput
    data: XOR<ScenarioTagUpdateManyMutationInput, ScenarioTagUncheckedUpdateManyWithoutTagInput>
  }

  export type FeatureCreateWithoutFeatureTagsInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    RunFeature?: RunFeatureCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataCreateNestedOneWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutFeatureTagsInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutFeatureInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutFeatureTagsInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutFeatureTagsInput, FeatureUncheckedCreateWithoutFeatureTagsInput>
  }

  export type TagCreateWithoutFeatureTagsInput = {
    id?: string
    name: string
    scenarioTags?: ScenarioTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutFeatureTagsInput = {
    id?: string
    name: string
    scenarioTags?: ScenarioTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutFeatureTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutFeatureTagsInput, TagUncheckedCreateWithoutFeatureTagsInput>
  }

  export type FeatureUpsertWithoutFeatureTagsInput = {
    update: XOR<FeatureUpdateWithoutFeatureTagsInput, FeatureUncheckedUpdateWithoutFeatureTagsInput>
    create: XOR<FeatureCreateWithoutFeatureTagsInput, FeatureUncheckedCreateWithoutFeatureTagsInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutFeatureTagsInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutFeatureTagsInput, FeatureUncheckedUpdateWithoutFeatureTagsInput>
  }

  export type FeatureUpdateWithoutFeatureTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    RunFeature?: RunFeatureUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUpdateOneWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutFeatureTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutFeatureNestedInput
    MapNodeFeatureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutFeatureNestedInput
  }

  export type TagUpsertWithoutFeatureTagsInput = {
    update: XOR<TagUpdateWithoutFeatureTagsInput, TagUncheckedUpdateWithoutFeatureTagsInput>
    create: XOR<TagCreateWithoutFeatureTagsInput, TagUncheckedCreateWithoutFeatureTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutFeatureTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutFeatureTagsInput, TagUncheckedUpdateWithoutFeatureTagsInput>
  }

  export type TagUpdateWithoutFeatureTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scenarioTags?: ScenarioTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutFeatureTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scenarioTags?: ScenarioTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ScenarioCreateWithoutScenarioTagsInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    steps?: ScenarioStepCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutScenarioTagsInput = {
    id?: string
    featureId: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    steps?: ScenarioStepUncheckedCreateNestedManyWithoutScenarioInput
    RunScenario?: RunScenarioUncheckedCreateNestedManyWithoutScenarioInput
    RunStep?: RunStepUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutScenarioTagsInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutScenarioTagsInput, ScenarioUncheckedCreateWithoutScenarioTagsInput>
  }

  export type TagCreateWithoutScenarioTagsInput = {
    id?: string
    name: string
    featureTags?: FeatureTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutScenarioTagsInput = {
    id?: string
    name: string
    featureTags?: FeatureTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutScenarioTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutScenarioTagsInput, TagUncheckedCreateWithoutScenarioTagsInput>
  }

  export type ScenarioUpsertWithoutScenarioTagsInput = {
    update: XOR<ScenarioUpdateWithoutScenarioTagsInput, ScenarioUncheckedUpdateWithoutScenarioTagsInput>
    create: XOR<ScenarioCreateWithoutScenarioTagsInput, ScenarioUncheckedCreateWithoutScenarioTagsInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutScenarioTagsInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutScenarioTagsInput, ScenarioUncheckedUpdateWithoutScenarioTagsInput>
  }

  export type ScenarioUpdateWithoutScenarioTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: ScenarioStepUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutScenarioTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: ScenarioStepUncheckedUpdateManyWithoutScenarioNestedInput
    RunScenario?: RunScenarioUncheckedUpdateManyWithoutScenarioNestedInput
    RunStep?: RunStepUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type TagUpsertWithoutScenarioTagsInput = {
    update: XOR<TagUpdateWithoutScenarioTagsInput, TagUncheckedUpdateWithoutScenarioTagsInput>
    create: XOR<TagCreateWithoutScenarioTagsInput, TagUncheckedCreateWithoutScenarioTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutScenarioTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutScenarioTagsInput, TagUncheckedUpdateWithoutScenarioTagsInput>
  }

  export type TagUpdateWithoutScenarioTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    featureTags?: FeatureTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutScenarioTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    featureTags?: FeatureTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type MapNodeFeatureDataCreateWithoutMapNodeInput = {
    id?: string
    feature: FeatureCreateNestedOneWithoutMapNodeFeatureDataInput
  }

  export type MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput = {
    id?: string
    featureId: string
  }

  export type MapNodeFeatureDataCreateOrConnectWithoutMapNodeInput = {
    where: MapNodeFeatureDataWhereUniqueInput
    create: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
  }

  export type MapNodeImageDataCreateWithoutMapNodeInput = {
    id?: string
    src: string
  }

  export type MapNodeImageDataUncheckedCreateWithoutMapNodeInput = {
    id?: string
    src: string
  }

  export type MapNodeImageDataCreateOrConnectWithoutMapNodeInput = {
    where: MapNodeImageDataWhereUniqueInput
    create: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
  }

  export type MapNodeDependencyCreateWithoutSourceNodeInput = {
    id?: string
    targetNode: MapNodeCreateNestedOneWithoutIncomingDependenciesInput
  }

  export type MapNodeDependencyUncheckedCreateWithoutSourceNodeInput = {
    id?: string
    targetNodeId: string
  }

  export type MapNodeDependencyCreateOrConnectWithoutSourceNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    create: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput>
  }

  export type MapNodeDependencyCreateManySourceNodeInputEnvelope = {
    data: MapNodeDependencyCreateManySourceNodeInput | MapNodeDependencyCreateManySourceNodeInput[]
    skipDuplicates?: boolean
  }

  export type MapNodeDependencyCreateWithoutTargetNodeInput = {
    id?: string
    sourceNode: MapNodeCreateNestedOneWithoutOutgoingDependenciesInput
  }

  export type MapNodeDependencyUncheckedCreateWithoutTargetNodeInput = {
    id?: string
    sourceNodeId: string
  }

  export type MapNodeDependencyCreateOrConnectWithoutTargetNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    create: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput>
  }

  export type MapNodeDependencyCreateManyTargetNodeInputEnvelope = {
    data: MapNodeDependencyCreateManyTargetNodeInput | MapNodeDependencyCreateManyTargetNodeInput[]
    skipDuplicates?: boolean
  }

  export type MapNodeFeatureDataUpsertWithoutMapNodeInput = {
    update: XOR<MapNodeFeatureDataUpdateWithoutMapNodeInput, MapNodeFeatureDataUncheckedUpdateWithoutMapNodeInput>
    create: XOR<MapNodeFeatureDataCreateWithoutMapNodeInput, MapNodeFeatureDataUncheckedCreateWithoutMapNodeInput>
    where?: MapNodeFeatureDataWhereInput
  }

  export type MapNodeFeatureDataUpdateToOneWithWhereWithoutMapNodeInput = {
    where?: MapNodeFeatureDataWhereInput
    data: XOR<MapNodeFeatureDataUpdateWithoutMapNodeInput, MapNodeFeatureDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeFeatureDataUpdateWithoutMapNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: FeatureUpdateOneRequiredWithoutMapNodeFeatureDataNestedInput
  }

  export type MapNodeFeatureDataUncheckedUpdateWithoutMapNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeImageDataUpsertWithoutMapNodeInput = {
    update: XOR<MapNodeImageDataUpdateWithoutMapNodeInput, MapNodeImageDataUncheckedUpdateWithoutMapNodeInput>
    create: XOR<MapNodeImageDataCreateWithoutMapNodeInput, MapNodeImageDataUncheckedCreateWithoutMapNodeInput>
    where?: MapNodeImageDataWhereInput
  }

  export type MapNodeImageDataUpdateToOneWithWhereWithoutMapNodeInput = {
    where?: MapNodeImageDataWhereInput
    data: XOR<MapNodeImageDataUpdateWithoutMapNodeInput, MapNodeImageDataUncheckedUpdateWithoutMapNodeInput>
  }

  export type MapNodeImageDataUpdateWithoutMapNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeImageDataUncheckedUpdateWithoutMapNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyUpsertWithWhereUniqueWithoutSourceNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    update: XOR<MapNodeDependencyUpdateWithoutSourceNodeInput, MapNodeDependencyUncheckedUpdateWithoutSourceNodeInput>
    create: XOR<MapNodeDependencyCreateWithoutSourceNodeInput, MapNodeDependencyUncheckedCreateWithoutSourceNodeInput>
  }

  export type MapNodeDependencyUpdateWithWhereUniqueWithoutSourceNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    data: XOR<MapNodeDependencyUpdateWithoutSourceNodeInput, MapNodeDependencyUncheckedUpdateWithoutSourceNodeInput>
  }

  export type MapNodeDependencyUpdateManyWithWhereWithoutSourceNodeInput = {
    where: MapNodeDependencyScalarWhereInput
    data: XOR<MapNodeDependencyUpdateManyMutationInput, MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeInput>
  }

  export type MapNodeDependencyScalarWhereInput = {
    AND?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
    OR?: MapNodeDependencyScalarWhereInput[]
    NOT?: MapNodeDependencyScalarWhereInput | MapNodeDependencyScalarWhereInput[]
    id?: StringFilter<"MapNodeDependency"> | string
    sourceNodeId?: StringFilter<"MapNodeDependency"> | string
    targetNodeId?: StringFilter<"MapNodeDependency"> | string
  }

  export type MapNodeDependencyUpsertWithWhereUniqueWithoutTargetNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    update: XOR<MapNodeDependencyUpdateWithoutTargetNodeInput, MapNodeDependencyUncheckedUpdateWithoutTargetNodeInput>
    create: XOR<MapNodeDependencyCreateWithoutTargetNodeInput, MapNodeDependencyUncheckedCreateWithoutTargetNodeInput>
  }

  export type MapNodeDependencyUpdateWithWhereUniqueWithoutTargetNodeInput = {
    where: MapNodeDependencyWhereUniqueInput
    data: XOR<MapNodeDependencyUpdateWithoutTargetNodeInput, MapNodeDependencyUncheckedUpdateWithoutTargetNodeInput>
  }

  export type MapNodeDependencyUpdateManyWithWhereWithoutTargetNodeInput = {
    where: MapNodeDependencyScalarWhereInput
    data: XOR<MapNodeDependencyUpdateManyMutationInput, MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeInput>
  }

  export type MapNodeCreateWithoutFeatureDataInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    imageData?: MapNodeImageDataCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeUncheckedCreateWithoutFeatureDataInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    imageData?: MapNodeImageDataUncheckedCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeCreateOrConnectWithoutFeatureDataInput = {
    where: MapNodeWhereUniqueInput
    create: XOR<MapNodeCreateWithoutFeatureDataInput, MapNodeUncheckedCreateWithoutFeatureDataInput>
  }

  export type FeatureCreateWithoutMapNodeFeatureDataInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagCreateNestedManyWithoutFeatureInput
    RunFeature?: RunFeatureCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutMapNodeFeatureDataInput = {
    id?: string
    keyword: string
    name: string
    description?: string | null
    active?: boolean
    contentHash?: string | null
    featureTags?: FeatureTagUncheckedCreateNestedManyWithoutFeatureInput
    RunFeature?: RunFeatureUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutMapNodeFeatureDataInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutMapNodeFeatureDataInput, FeatureUncheckedCreateWithoutMapNodeFeatureDataInput>
  }

  export type MapNodeUpsertWithoutFeatureDataInput = {
    update: XOR<MapNodeUpdateWithoutFeatureDataInput, MapNodeUncheckedUpdateWithoutFeatureDataInput>
    create: XOR<MapNodeCreateWithoutFeatureDataInput, MapNodeUncheckedCreateWithoutFeatureDataInput>
    where?: MapNodeWhereInput
  }

  export type MapNodeUpdateToOneWithWhereWithoutFeatureDataInput = {
    where?: MapNodeWhereInput
    data: XOR<MapNodeUpdateWithoutFeatureDataInput, MapNodeUncheckedUpdateWithoutFeatureDataInput>
  }

  export type MapNodeUpdateWithoutFeatureDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    imageData?: MapNodeImageDataUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeUncheckedUpdateWithoutFeatureDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    imageData?: MapNodeImageDataUncheckedUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type FeatureUpsertWithoutMapNodeFeatureDataInput = {
    update: XOR<FeatureUpdateWithoutMapNodeFeatureDataInput, FeatureUncheckedUpdateWithoutMapNodeFeatureDataInput>
    create: XOR<FeatureCreateWithoutMapNodeFeatureDataInput, FeatureUncheckedCreateWithoutMapNodeFeatureDataInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutMapNodeFeatureDataInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutMapNodeFeatureDataInput, FeatureUncheckedUpdateWithoutMapNodeFeatureDataInput>
  }

  export type FeatureUpdateWithoutMapNodeFeatureDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUpdateManyWithoutFeatureNestedInput
    RunFeature?: RunFeatureUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutMapNodeFeatureDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    featureTags?: FeatureTagUncheckedUpdateManyWithoutFeatureNestedInput
    RunFeature?: RunFeatureUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type MapNodeCreateWithoutImageDataInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeUncheckedCreateWithoutImageDataInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeCreateOrConnectWithoutImageDataInput = {
    where: MapNodeWhereUniqueInput
    create: XOR<MapNodeCreateWithoutImageDataInput, MapNodeUncheckedCreateWithoutImageDataInput>
  }

  export type MapNodeUpsertWithoutImageDataInput = {
    update: XOR<MapNodeUpdateWithoutImageDataInput, MapNodeUncheckedUpdateWithoutImageDataInput>
    create: XOR<MapNodeCreateWithoutImageDataInput, MapNodeUncheckedCreateWithoutImageDataInput>
    where?: MapNodeWhereInput
  }

  export type MapNodeUpdateToOneWithWhereWithoutImageDataInput = {
    where?: MapNodeWhereInput
    data: XOR<MapNodeUpdateWithoutImageDataInput, MapNodeUncheckedUpdateWithoutImageDataInput>
  }

  export type MapNodeUpdateWithoutImageDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeUncheckedUpdateWithoutImageDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeCreateWithoutOutgoingDependenciesInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataCreateNestedOneWithoutMapNodeInput
    incomingDependencies?: MapNodeDependencyCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeUncheckedCreateWithoutOutgoingDependenciesInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataUncheckedCreateNestedOneWithoutMapNodeInput
    incomingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type MapNodeCreateOrConnectWithoutOutgoingDependenciesInput = {
    where: MapNodeWhereUniqueInput
    create: XOR<MapNodeCreateWithoutOutgoingDependenciesInput, MapNodeUncheckedCreateWithoutOutgoingDependenciesInput>
  }

  export type MapNodeCreateWithoutIncomingDependenciesInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyCreateNestedManyWithoutSourceNodeInput
  }

  export type MapNodeUncheckedCreateWithoutIncomingDependenciesInput = {
    id?: string
    x: number
    y: number
    width?: number
    height?: number
    rotation?: number
    scale?: number
    hidden: boolean
    zIndex?: number | null
    featureData?: MapNodeFeatureDataUncheckedCreateNestedOneWithoutMapNodeInput
    imageData?: MapNodeImageDataUncheckedCreateNestedOneWithoutMapNodeInput
    outgoingDependencies?: MapNodeDependencyUncheckedCreateNestedManyWithoutSourceNodeInput
  }

  export type MapNodeCreateOrConnectWithoutIncomingDependenciesInput = {
    where: MapNodeWhereUniqueInput
    create: XOR<MapNodeCreateWithoutIncomingDependenciesInput, MapNodeUncheckedCreateWithoutIncomingDependenciesInput>
  }

  export type MapNodeUpsertWithoutOutgoingDependenciesInput = {
    update: XOR<MapNodeUpdateWithoutOutgoingDependenciesInput, MapNodeUncheckedUpdateWithoutOutgoingDependenciesInput>
    create: XOR<MapNodeCreateWithoutOutgoingDependenciesInput, MapNodeUncheckedCreateWithoutOutgoingDependenciesInput>
    where?: MapNodeWhereInput
  }

  export type MapNodeUpdateToOneWithWhereWithoutOutgoingDependenciesInput = {
    where?: MapNodeWhereInput
    data: XOR<MapNodeUpdateWithoutOutgoingDependenciesInput, MapNodeUncheckedUpdateWithoutOutgoingDependenciesInput>
  }

  export type MapNodeUpdateWithoutOutgoingDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUpdateOneWithoutMapNodeNestedInput
    incomingDependencies?: MapNodeDependencyUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeUncheckedUpdateWithoutOutgoingDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUncheckedUpdateOneWithoutMapNodeNestedInput
    incomingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type MapNodeUpsertWithoutIncomingDependenciesInput = {
    update: XOR<MapNodeUpdateWithoutIncomingDependenciesInput, MapNodeUncheckedUpdateWithoutIncomingDependenciesInput>
    create: XOR<MapNodeCreateWithoutIncomingDependenciesInput, MapNodeUncheckedCreateWithoutIncomingDependenciesInput>
    where?: MapNodeWhereInput
  }

  export type MapNodeUpdateToOneWithWhereWithoutIncomingDependenciesInput = {
    where?: MapNodeWhereInput
    data: XOR<MapNodeUpdateWithoutIncomingDependenciesInput, MapNodeUncheckedUpdateWithoutIncomingDependenciesInput>
  }

  export type MapNodeUpdateWithoutIncomingDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUpdateManyWithoutSourceNodeNestedInput
  }

  export type MapNodeUncheckedUpdateWithoutIncomingDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    rotation?: IntFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    zIndex?: NullableIntFieldUpdateOperationsInput | number | null
    featureData?: MapNodeFeatureDataUncheckedUpdateOneWithoutMapNodeNestedInput
    imageData?: MapNodeImageDataUncheckedUpdateOneWithoutMapNodeNestedInput
    outgoingDependencies?: MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeNestedInput
  }

  export type RunFeatureCreateManyRunInput = {
    id?: string
    featureId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunScenarioCreateManyRunInput = {
    id?: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunStepCreateManyRunInput = {
    id?: string
    stepId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type RunFeatureUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutRunFeatureNestedInput
  }

  export type RunFeatureUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunFeatureUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenario?: ScenarioUpdateOneRequiredWithoutRunScenarioNestedInput
  }

  export type RunScenarioUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneRequiredWithoutRunStepNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunStepNestedInput
  }

  export type RunStepUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureTagCreateManyFeatureInput = {
    tagId: string
  }

  export type RunFeatureCreateManyFeatureInput = {
    id?: string
    runId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type FeatureTagUpdateWithoutFeatureInput = {
    tag?: TagUpdateOneRequiredWithoutFeatureTagsNestedInput
  }

  export type FeatureTagUncheckedUpdateWithoutFeatureInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureTagUncheckedUpdateManyWithoutFeatureInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type RunFeatureUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunFeatureNestedInput
  }

  export type RunFeatureUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunFeatureUncheckedUpdateManyWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioTagCreateManyScenarioInput = {
    tagId: string
  }

  export type ScenarioStepCreateManyScenarioInput = {
    stepId: string
    keyword: string
  }

  export type RunScenarioCreateManyScenarioInput = {
    id?: string
    runId: string
    status: $Enums.Status
    duration?: number | null
    createdAt?: Date | string
  }

  export type RunStepCreateManyScenarioInput = {
    id?: string
    runId: string
    stepId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type ScenarioTagUpdateWithoutScenarioInput = {
    tag?: TagUpdateOneRequiredWithoutScenarioTagsNestedInput
  }

  export type ScenarioTagUncheckedUpdateWithoutScenarioInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagUncheckedUpdateManyWithoutScenarioInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioStepUpdateWithoutScenarioInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    step?: StepUpdateOneRequiredWithoutScenarioStepNestedInput
  }

  export type ScenarioStepUncheckedUpdateWithoutScenarioInput = {
    stepId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioStepUncheckedUpdateManyWithoutScenarioInput = {
    stepId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type RunScenarioUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunScenarioNestedInput
  }

  export type RunScenarioUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunScenarioUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunStepNestedInput
    step?: StepUpdateOneRequiredWithoutRunStepNestedInput
  }

  export type RunStepUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    stepId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioStepCreateManyStepInput = {
    scenarioId: string
    keyword: string
  }

  export type RunStepCreateManyStepInput = {
    id?: string
    runId: string
    scenarioId: string
    status: $Enums.Status
    duration?: number | null
    errorMessage?: string | null
    stackTrace?: string | null
    createdAt?: Date | string
  }

  export type ScenarioStepUpdateWithoutStepInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutStepsNestedInput
  }

  export type ScenarioStepUncheckedUpdateWithoutStepInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioStepUncheckedUpdateManyWithoutStepInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type RunStepUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutRunStepNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunStepNestedInput
  }

  export type RunStepUncheckedUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunStepUncheckedUpdateManyWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stackTrace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureTagCreateManyTagInput = {
    featureId: string
  }

  export type ScenarioTagCreateManyTagInput = {
    scenarioId: string
  }

  export type FeatureTagUpdateWithoutTagInput = {
    feature?: FeatureUpdateOneRequiredWithoutFeatureTagsNestedInput
  }

  export type FeatureTagUncheckedUpdateWithoutTagInput = {
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureTagUncheckedUpdateManyWithoutTagInput = {
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagUpdateWithoutTagInput = {
    scenario?: ScenarioUpdateOneRequiredWithoutScenarioTagsNestedInput
  }

  export type ScenarioTagUncheckedUpdateWithoutTagInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ScenarioTagUncheckedUpdateManyWithoutTagInput = {
    scenarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyCreateManySourceNodeInput = {
    id?: string
    targetNodeId: string
  }

  export type MapNodeDependencyCreateManyTargetNodeInput = {
    id?: string
    sourceNodeId: string
  }

  export type MapNodeDependencyUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetNode?: MapNodeUpdateOneRequiredWithoutIncomingDependenciesNestedInput
  }

  export type MapNodeDependencyUncheckedUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyUncheckedUpdateManyWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyUpdateWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNode?: MapNodeUpdateOneRequiredWithoutOutgoingDependenciesNestedInput
  }

  export type MapNodeDependencyUncheckedUpdateWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type MapNodeDependencyUncheckedUpdateManyWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
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