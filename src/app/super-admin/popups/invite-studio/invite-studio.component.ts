import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-studio',
  templateUrl: './invite-studio.component.html',
  styleUrls: ['./invite-studio.component.scss']
})
export class InviteStudioComponent implements OnInit {
  value = 1
  constructor(public dialogRef: MatDialogRef<InviteStudioComponent>,
  ) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close('')
  }
}
