/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmbeddedModelSchema } from './';
/**
 * This is the input model for '/model/{model}/delete/cache'
 * @export
 * @interface ModelDeleteCacheInput
 */
export interface ModelDeleteCacheInput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ModelDeleteCacheInput
     */
    schema?: EmbeddedModelSchema;
}
export declare function ModelDeleteCacheInputFromJSON(json: any): ModelDeleteCacheInput;
export declare function ModelDeleteCacheInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDeleteCacheInput;
export declare function ModelDeleteCacheInputToJSON(value?: ModelDeleteCacheInput | null): any;
