import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AlbumListComponent,
    CreateAlbumComponent,
    ViewAlbumComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    SharedModule
  ],
  
})
export class StudioModule { }
