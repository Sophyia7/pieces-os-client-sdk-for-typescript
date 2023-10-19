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
import { AllocationStatusEnum } from './';
/**
 *
 * @export
 * @interface AllocationStatus
 */
export interface AllocationStatus {
    /**
     *
     * @type {AllocationStatusEnum}
     * @memberof AllocationStatus
     */
    pod: AllocationStatusEnum;
    /**
     *
     * @type {AllocationStatusEnum}
     * @memberof AllocationStatus
     */
    dns: AllocationStatusEnum;
}
export declare function AllocationStatusFromJSON(json: any): AllocationStatus;
export declare function AllocationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationStatus;
export declare function AllocationStatusToJSON(value?: AllocationStatus | null): any;