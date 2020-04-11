export type UBIMeta = {
  effects?: string;
  endDate?: string;
  funding?: string;
  income?: string;
  incomeType?: string;
  isActive?: boolean;
  label?: string;
  location?: string;
  organization?: string;
  sample?: string;
  sampleAge?: string;
  startDate?: string;
  title?: string;
};

export type UBIType = {
  [code: string]: UBIMeta;
};
