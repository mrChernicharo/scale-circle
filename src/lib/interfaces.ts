export type Note = {
  name: string;
  fullname: string;
  freq: number;
  i: number;
};

// prettier-ignore
export type Interval = "b2" | "2" | "m3" | "3" | "4J" | "#4" | "b5" | "m6" | "6" | "7" | "Maj7" | "8" | "b9" | "9" | "#9" | "11" | "#11" | "b13" | "13"

export type Scale = Interval[];
