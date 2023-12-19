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
/**
 * This is a simple enum used to determine the status of the Updating process.(of PiecesOS)
 *
 * UpdatingStatusEnum(READY_TO_RESTART, AVAILABLE(but not downloaded), DOWNLOADING, UNKNOWN, UP_TO_DATE)
 *
 * UNKNOWN: should never be the case
 *
 * These are some enums that are currently not implemented but are for future support( REINSTALL_REQUIRED, CONTACT_SUPPORT)
 * @export
 * @enum {string}
 */
export declare enum UpdatingStatusEnum {
    ReadyToRestart = "READY_TO_RESTART",
    Available = "AVAILABLE",
    Downloading = "DOWNLOADING",
    Unknown = "UNKNOWN",
    UpToDate = "UP_TO_DATE",
    ReinstallRequired = "REINSTALL_REQUIRED",
    ContactSupport = "CONTACT_SUPPORT"
}
export declare function UpdatingStatusEnumFromJSON(json: any): UpdatingStatusEnum;
export declare function UpdatingStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatingStatusEnum;
export declare function UpdatingStatusEnumToJSON(value?: UpdatingStatusEnum | null): any;
