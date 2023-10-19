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
 *
 * @export
 * @interface SeededUser
 */
export interface SeededUser {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededUser
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<string>}
     * @memberof SeededUser
     */
    emails: Array<string>;
}
export declare function SeededUserFromJSON(json: any): SeededUser;
export declare function SeededUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededUser;
export declare function SeededUserToJSON(value?: SeededUser | null): any;