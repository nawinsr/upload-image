import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  albumForm=new FormGroup({
    eventName:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
