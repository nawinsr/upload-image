import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteStudioComponent } from '../popups/invite-studio/invite-studio.component';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {
  data: any
  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: true,
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return cell.row.index + 1;
        }
      },
      name: {
        title: 'Name',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      },
      mobile: {
        title: 'Mobile',
        filter: true
      },
      status: {
        title: 'Status',
        filter: true
      },



    },
    pager:
    {
      perPage: 50
    },
    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          class: 'center',
          name: 'edit',
          type: 'html',
          title: '<i class="fas fa-edit"></i>'
        },
        {
          class: 'center',
          name: 'edit',
          type: 'html',
          title: "&nbsp;&nbsp;<i style='margin-left:5px;' class='fas fa-eye'></i>"
        },

      ]
    }
  };
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = [
      {
        name: 'test studio',
        email: " test@gmail.com",
        mobile: "+918056313027",
        status: 'active'
      },
      {
        name: 'test studio',
        email: " test@gmail.com",
        mobile: "+918056313027",
        status: 'active'
      }, {
        name: 'test studio',
        email: " test@gmail.com",
        mobile: "+918056313027",
        status: 'active'
      }, {
        name: 'test studio',
        email: " test@gmail.com",
        mobile: "+918056313027",
        status: 'active'
      }, {
        name: 'test studio',
        email: " test@gmail.com",
        mobile: "+918056313027",
        status: 'active'
      }
    ]
  }
  inviteStudio() {
      const config = {
        width: '500px',

      }
      const dialogRef = this.dialog.open(InviteStudioComponent, config)
      dialogRef.afterClosed().subscribe(res => {
        console.log(res);

      })
  }
  onCustomAction(event: any) {

  }
}
