export interface Idictionary {
    word: string;
    phonetic?: string;
    phonetics: {text:string; audio:string}[];
    meanings: IMeaning[];
    sourceUrls: string[];
    audio?: string;
  }
  export interface IMeaning {
    partOfSpeech: string;
    definitions: IDefinition[];
    synonyms?: string[];
  }
  interface IDefinition {
    definition: string;
    example?: string; }
  export interface IErrorMessage {
    [index: string]: string;
  }