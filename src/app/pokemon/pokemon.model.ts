
export interface Pokemon {
    name: string;
    url: string;
  }

  export interface responsePokemon {
    count: number;
    next: string;
    previous?: any;
    results: Pokemon[];
  }
  
 
 
  
 