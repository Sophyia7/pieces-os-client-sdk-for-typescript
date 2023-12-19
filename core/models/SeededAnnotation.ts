/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    AnnotationTypeEnum,
    AnnotationTypeEnumFromJSON,
    AnnotationTypeEnumFromJSONTyped,
    AnnotationTypeEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedConversationMessages,
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './';

/**
 * This is the percursor to a fully referenced Annotation.
 * @export
 * @interface SeededAnnotation
 */
export interface SeededAnnotation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAnnotation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededAnnotation
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededAnnotation
     */
    asset?: string;
    /**
     * 
     * @type {string}
     * @memberof SeededAnnotation
     */
    person?: string;
    /**
     * 
     * @type {AnnotationTypeEnum}
     * @memberof SeededAnnotation
     */
    type: AnnotationTypeEnum;
    /**
     * This is the text of the annotation.
     * @type {string}
     * @memberof SeededAnnotation
     */
    text: string;
    /**
     * 
     * @type {string}
     * @memberof SeededAnnotation
     */
    model?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeededAnnotation
     */
    pseudo?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeededAnnotation
     */
    favorited?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeededAnnotation
     */
    anchor?: string;
    /**
     * 
     * @type {string}
     * @memberof SeededAnnotation
     */
    conversation?: string;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof SeededAnnotation
     */
    messages?: FlattenedConversationMessages;
}

export function SeededAnnotationFromJSON(json: any): SeededAnnotation {
    return SeededAnnotationFromJSONTyped(json, false);
}

export function SeededAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAnnotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'person': !exists(json, 'person') ? undefined : json['person'],
        'type': AnnotationTypeEnumFromJSON(json['type']),
        'text': json['text'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'favorited': !exists(json, 'favorited') ? undefined : json['favorited'],
        'anchor': !exists(json, 'anchor') ? undefined : json['anchor'],
        'conversation': !exists(json, 'conversation') ? undefined : json['conversation'],
        'messages': !exists(json, 'messages') ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
    };
}

export function SeededAnnotationToJSON(value?: SeededAnnotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'asset': value.asset,
        'person': value.person,
        'type': AnnotationTypeEnumToJSON(value.type),
        'text': value.text,
        'model': value.model,
        'pseudo': value.pseudo,
        'favorited': value.favorited,
        'anchor': value.anchor,
        'conversation': value.conversation,
        'messages': FlattenedConversationMessagesToJSON(value.messages),
    };
}


