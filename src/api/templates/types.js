// @flow

export type Template = {
    id: number,
    self_directed: boolean,
    data_types: Array<Object>,
    title: string,
    organization_id: number,
    required_args: Array<string>,
    type: string
}

type TemplateField = {
    title?: string,
    data_types?: Array<{
        data_type_id?: number,
        required_args?: Array<string>,
        organization_id?: number,
        state?: 'ACTIVE' | 'INACTIVE',
        self_directed?: boolean
    }>
}

type GetAllTemplatesQuery = {
    limit?: number,
    offset?: number
}

export type GetAllTemplatesParams = {
    query?: GetAllTemplatesQuery
}

export type BulkCreateTemplateParams = {
    templates: Array<TemplateField>
}

export type DeleteTemplateParams = {
    template_id: number
}

type GetTemplateQuery = {
    limit?: number,
    offset?: number
}

export type GetTemplateParams = {
    template_id: number,
    query?: GetTemplateQuery
}

export type UpdateTemplateParams = {
    template_id: number,
    template: TemplateField
}
