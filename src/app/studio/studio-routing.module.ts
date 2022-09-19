import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { BookComponent } from './book/book.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';

const routes: Routes = [
  { path: "",redirectTo:"create"},
  {path:'create',component:ViewAlbumComponent},
  {path:'share',component:BookComponent},
  { path: "**",redirectTo:"create"}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
