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
import { ClassificationGenericEnum, ClassificationSpecificEnum, EmbeddedModelSchema, FragmentFormat } from './';
/**
 * This is the output iterable model for '/machine_learning/text/technical_language/parsers/segmentation'
 *
 * specific is optional here, however you can pass in classify: true to get the specific classificaiton in the case the generic is code.
 * @export
 * @interface SegmentedTechnicalLanguageFragment
 */
export interface SegmentedTechnicalLanguageFragment {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ClassificationGenericEnum}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    generic: ClassificationGenericEnum;
    /**
     *
     * @type {ClassificationSpecificEnum}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    specific?: ClassificationSpecificEnum;
    /**
     *
     * @type {FragmentFormat}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    fragment: FragmentFormat;
}
export declare function SegmentedTechnicalLanguageFragmentFromJSON(json: any): SegmentedTechnicalLanguageFragment;
export declare function SegmentedTechnicalLanguageFragmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SegmentedTechnicalLanguageFragment;
export declare function SegmentedTechnicalLanguageFragmentToJSON(value?: SegmentedTechnicalLanguageFragment | null): any;