//interface for single competition details
export interface Competition {
    city: string;
    country: string;
    date: {
        from: string;
        till: string;
        numberOfDays: number;
    };
    events: string[];
    externalWebsite: string | null;
    id: string;
    information: string;
    isCanceled: boolean;
    name: string;
    organisers: {
        name: string;
        email: string;
    }[];
    venue: {
        address: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        details: string;
        name: string;
    };
    wcaDelegates: {
        name: string;
        email: string;
    }[];
}


//interface for competitions
export interface ApiResonse {
    items: Competition[];
    pagination: {
        page: number;
        size: number;
    };
    total: number;
} 



//interface for competition details
export interface CompetitionDetails {
    id: string;
    name: string;
    city: string;
    country: string;
    date: {
      from: string;
      till: string;
      numberOfDays: number;
    };
    isCanceled: boolean;
    events: string[];
    wcaDelegates: {
      name: string;
      email: string;
    }[];
    organisers: {
      name: string;
      email: string;
    }[];
    venue: {
      name: string;
      address: string;
      details?: string; // Optional as it may not always be present
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    information: string;
    externalWebsite: string | null;
  }
  