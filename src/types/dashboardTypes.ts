export type DashboardCardsTypes = {
  icon: JSX.Element;
  amount: string;
  totalCategory: string;
  rate: number;
  arrowIcon: JSX.Element;
  arrowDir: string;
}[];

export type MultiAxisChartTypes = {
  id: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
}[];

export type CompoChartTypes = {
  day: string;
  sales: number;
  salesColor: string;
  revenue: number;
  revenueColor: string;
}[];

export type PieChartTypes = {
  id: string;
  label: string;
  value: number;
  color: string;
}[];

export type GeoChartFeaturesTypes = {
  type: string;
  features: {
    type: string;
    properties: {
      name: string;
    };
    geometry: {
      type: string;
      coordinates: [number, number][][] | [number, number][][][];
    };
    id: string;
  }[];
};

export type GeoChartData = {
  id: string;
  value: number;
}[];

export type ChatData = {
  userName: string;
  userImg: string;
  status: string;
  msg: string;
  timeMsgSentIn: string;
  seen: boolean;
  newMsgs: number;
}[];
