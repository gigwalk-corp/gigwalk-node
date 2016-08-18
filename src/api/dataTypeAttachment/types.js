// @flow

type AttachmentFields = {
    url: string,
    file_type: 'image/gif' | 'image/jpeg' | 'image/png' | 'text/csv',
    file_name?: string
}

export type DeleteAttachmentParams = {
    data_type_id: number,
    url: string
}

export type CreateAttachmentParams = {
    data_type_id: number,
    attachment: AttachmentFields
}
