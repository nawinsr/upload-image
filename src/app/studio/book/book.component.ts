import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  url: any
  constructor(private router: Router, private sb: MatSnackBar) { }

  ngOnInit(): void {
    let b = localStorage.getItem('b')

    let name = localStorage.getItem('name')

    let ar = localStorage.getItem('ar')
    if (!b || !name || !ar) this.router.navigateByUrl('/create')
    this.url = `https://nawinsr.github.io/turnjs/?test=${b}&name=${name}&ar=${ar}`
  }
  open() {
    window.open(this.url)
  }
  copy() {
    navigator.clipboard.writeText(this.url);
    this.sb.open("Link Copied !")
    setTimeout(() => {
      this.sb.dismiss()
    }, 2000);
  }
}
