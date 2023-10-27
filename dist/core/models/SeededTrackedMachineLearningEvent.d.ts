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
import { EmbeddedModelSchema, GraphicalMachineLearningProcessingEvent, TLPMachineLearningProcessingEvent } from './';
/**
 *
 * @export
 * @interface SeededTrackedMachineLearningEvent
 */
export interface SeededTrackedMachineLearningEvent {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedMachineLearningEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TLPMachineLearningProcessingEvent}
     * @memberof SeededTrackedMachineLearningEvent
     */
    tlp?: TLPMachineLearningProcessingEvent;
    /**
     *
     * @type {GraphicalMachineLearningProcessingEvent}
     * @memberof SeededTrackedMachineLearningEvent
     */
    graphical?: GraphicalMachineLearningProcessingEvent;
}
export declare function SeededTrackedMachineLearningEventFromJSON(json: any): SeededTrackedMachineLearningEvent;
export declare function SeededTrackedMachineLearningEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedMachineLearningEvent;
export declare function SeededTrackedMachineLearningEventToJSON(value?: SeededTrackedMachineLearningEvent | null): any;