import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAlbumComponent } from '../create-album/create-album.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albumList = [{}, {}, {}, {}, {}, {}, {}, {},]
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addAlbum() {
    const config = {

    }
    const dialogRef = this.dialog.open(CreateAlbumComponent, config)
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);

    })
  }
}
