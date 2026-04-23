import { Gif } from "../interface/gif.interface";
import { GiphyItem } from "../interface/giphy.interface";

export class GifMapper {
  static mapGiphyItemToGif (item: GiphyItem) : Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToArrays(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
