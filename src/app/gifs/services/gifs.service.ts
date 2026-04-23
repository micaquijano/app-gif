import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifMapper } from '../mapper/gif.mapper';
import { GiphyResponse } from '../interface/giphy.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs/trending?api_key=h1ZXILFblSA5zF0HydGcLworkeX2RTxX&limit=25&offset=0&rating=g&bundle=messaging_non_clips';

  public trendingGifs: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarTrending();
  }

  cargarTrending() {
    this.http.get<GiphyResponse>(this.servicioUrl)
      .subscribe((resp: GiphyResponse) => {
        this.trendingGifs = resp.data.map(item => {
          return {
            id: item.id,
            title: item.title,
            url: item.images.original.url,
          }
        })
      });
  }
}
