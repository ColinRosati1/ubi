export interface ItemCardProps {
  effects: string[];
  date: {
    endDate: string;
    startDate: string;
  };
  funding: string;
  id?: number;
  income: object;
  incomeType: string;
  isActive: boolean;
  label: string;
  location: string;
  organization: string;
  sample: string;
  sampleAge: string;
  src: string[];
  title: string;
}
