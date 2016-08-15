// @flow

export type DataType = {
    value_type: string,
    id: number,
    expected_value_expression: Object,
    parent_id: number,
    attachments: Array<Object>,
    is_required: boolean,
    description: string,
    importance: number,
    questions: {
        question_text: string,
        question_type: string,
        propositions?: Array<string>
    },
    observation_target_type_id: number,
    is_shared: boolean,
    time_estimate: number,
    dashboard_visible: boolean
}

type DataTypeFields = {
    description: string,
    value_type: 'SIGNATURE' | 'MULTIPLE_CHOICE' | 'MULTI_SELECT' | 'CHECKBOXES' | 'CURRENCY',
    questions: {
        question_text?: string,
        question_type?: 'SIGNATURE' | 'MULTIPLE_CHOICE' | 'MULTI_SELECT' | 'CHECKBOXES' | 'CURRENCY',
        propositions?: Array<string>
    },
    parent_id?: number,
    expected_value_expression?: string
}

type SearchDataTypesWithFieldQuery = {
    limit?: number,
    offset?: number
}

export type SearchDataTypesWithFieldParams = {
    organization_id: number,
    search_field: string,
    query_string: string,
    query?: SearchDataTypesWithFieldQuery
}

type SearchDataTypesQuery = {
    limit?: number,
    offset?: number
}

export type SearchDataTypesParams = {
    organization_id: number,
    query_string: string,
    query?: SearchDataTypesQuery
}

type GetAllDataTypesQuery = {
    limit?: number,
    offset?: number
}

export type GetAllDataTypesParams = {
    observation_target_type_id?: number,
    dashboard_visible?: number,
    query?: GetAllDataTypesQuery
}

export type CreateDataTypeParams = {
    dataType?: DataTypeFields
}

type GetDataTypeQuery = {
    limit?: number,
    offset?: number
}

export type GetDataTypeParams = {
    data_type_id: number,
    observation_target_type_id?: number,
    dashboard_visible?: number,
    query?: GetDataTypeQuery
}

export type UpdateDataTypeParams = {
    data_type_id: number,
    dataType?: DataTypeFields
}
