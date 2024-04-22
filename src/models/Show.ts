export interface Show {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: Date;
  ended?: Date;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: null;
  dvdCountry?: null;
  externals?: Externals;
  image?: Image;
  summary?: string;
  updated?: number;
  _links?: ShowLinks;
  _embedded?: Embedded;
}

export interface Embedded {
  episodes?: Episode[];
  cast?: Cast[];
}

export interface Cast {
  person?: Person;
  character?: Character;
  self?: boolean;
  voice?: boolean;
}

export interface Character {
  id?: number;
  url?: string;
  name?: string;
  image?: Image | null;
  _links?: CharacterLinks;
}

export interface CharacterLinks {
  self?: Self;
}

export interface Self {
  href?: string;
}

export interface Image {
  medium?: string;
  original?: string;
}

export interface Person {
  id?: number;
  url?: string;
  name?: string;
  country?: Country;
  birthday?: Date | null;
  deathday?: null;
  gender?: Gender;
  image?: Image;
  updated?: number;
  _links?: CharacterLinks;
}

export interface Country {
  name?: string;
  code?: string;
  timezone?: string;
}


export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export interface Episode {
  id?: number;
  url?: string;
  name?: string;
  season?: number;
  number?: number;
  type?: string;
  airdate?: Date;
  airtime?: string;
  airstamp?: Date;
  runtime?: number;
  rating?: Rating;
  image?: Image;
  summary?: string;
  _links?: EpisodeLinks;
}

export interface EpisodeLinks {
  self?: Self;
  show?: Previousepisode;
}

export interface Previousepisode {
  href?: string;
  name?: string;
}


export interface Rating {
  average?: number;
}


export interface ShowLinks {
  self?: Self;
  previousepisode?: Previousepisode;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export interface Network {
  id?: number;
  name?: string;
  country?: Country;
  officialSite?: string;
}

export interface Schedule {
  time?: string;
  days?: string[];
}
