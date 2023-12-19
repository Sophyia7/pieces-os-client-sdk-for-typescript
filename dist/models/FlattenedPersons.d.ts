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
import { EmbeddedModelSchema, ReferencedPerson, Score } from './';
/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface FlattenedPersons
 */
export interface FlattenedPersons {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPersons
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedPerson>}
     * @memberof FlattenedPersons
     */
    iterable: Array<ReferencedPerson>;
    /**
     * This is a Map<String, int> where the the key is an person id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedPersons
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof FlattenedPersons
     */
    score?: Score;
}
export declare function FlattenedPersonsFromJSON(json: any): FlattenedPersons;
export declare function FlattenedPersonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPersons;
export declare function FlattenedPersonsToJSON(value?: FlattenedPersons | null): any;
