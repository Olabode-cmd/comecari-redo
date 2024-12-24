declare module '../data/bidsData' {
  interface Bid {
    id: number;
    route: string;
    bidAmount: string;
    status: 'Pending' | 'Accepted' | 'Closed';
    vanImage: string;
  }

  const bidsData: Bid[];
  export default bidsData;
}
