export type UBIMeta = {
    title?: string;
    isActive?: boolean;
    label?: string;
    location?: string;
    startDate?: string;
    endDate?: string
}

export type UBIType = {
    [code: string]: UBIMeta;
}
