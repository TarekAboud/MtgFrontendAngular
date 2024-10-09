export interface SetData {
    block: string
    booster: string[]
    border: any
    code: string
    expansion: any
    gathererCode: any
    magicCardsInfoCode: any
    name: string
    oldCode: any
    onlineOnly: boolean
    releaseDate: string
    type: string
  }
  
  
  export interface CardData {
    name: string;
    image_uris: ImageUris;
  }
  
  export interface ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  }