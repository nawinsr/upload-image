import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {
  loader = false
  urlArray: any = []
  fileUploaded = false
  files: any = []
  preview: any = []
  ar: any
  success = false
  name = ''

  delete(index: any) {
    this.files.splice(index, 1);
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
    moveItemInArray(this.preview, event.previousIndex, event.currentIndex);

  }
  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  base64abc = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"
  ];

  base64codes = [
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255,
    255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
    255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ];

  getBase64Code(charCode: any) {
    if (charCode >= this.base64codes.length) {
      throw new Error("Unable to parse base64 string.");
    }
    const code = this.base64codes[charCode];
    if (code === 255) {
      throw new Error("Unable to parse base64 string.");
    }
    return code;
  }

  bytesToBase64(bytes: any) {
    let result = '', i, l = bytes.length;
    for (i = 2; i < l; i += 3) {
      result += this.base64abc[bytes[i - 2] >> 2];
      result += this.base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
      result += this.base64abc[((bytes[i - 1] & 0x0F) << 2) | (bytes[i] >> 6)];
      result += this.base64abc[bytes[i] & 0x3F];
    }
    if (i === l + 1) { // 1 octet yet to write
      result += this.base64abc[bytes[i - 2] >> 2];
      result += this.base64abc[(bytes[i - 2] & 0x03) << 4];
      result += "==";
    }
    if (i === l) { // 2 octets yet to write
      result += this.base64abc[bytes[i - 2] >> 2];
      result += this.base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
      result += this.base64abc[(bytes[i - 1] & 0x0F) << 2];
      result += "=";
    }
    return result;
  }

  base64ToBytes(str: any) {
    if (str.length % 4 !== 0) {
      throw new Error("Unable to parse base64 string.");
    }
    const index = str.indexOf("=");
    if (index !== -1 && index < str.length - 2) {
      throw new Error("Unable to parse base64 string.");
    }
    let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0,
      n = str.length,
      result = new Uint8Array(3 * (n / 4)),
      buffer;
    for (let i = 0, j = 0; i < n; i += 4, j += 3) {
      buffer =
        this.getBase64Code(str.charCodeAt(i)) << 18 |
        this.getBase64Code(str.charCodeAt(i + 1)) << 12 |
        this.getBase64Code(str.charCodeAt(i + 2)) << 6 |
        this.getBase64Code(str.charCodeAt(i + 3));
      result[j] = buffer >> 16;
      result[j + 1] = (buffer >> 8) & 0xFF;
      result[j + 2] = buffer & 0xFF;
    }
    return result.subarray(0, result.length - missingOctets);
  }

  base64encode(str: any, encoder = new TextEncoder()) {
    return this.bytesToBase64(encoder.encode(str));
  }

  base64decode(str: any, decoder = new TextDecoder()) {
    return decoder.decode(this.base64ToBytes(str));
  }

  fileClick() {
    document.getElementById('fileId')?.click()
  }
  async uplaodImages(event: any) {
    this.files = []
    console.log(event.target.files);
    let s = event.target.files
    console.log(s.length);
    if (s.length > 2) {
      this._snackBar.open('uploaded files more than two !',)
      setTimeout(() => {
        this._snackBar.dismiss()
      }, 2000);
      return
    }
    if (s.length < 2) {
      this._snackBar.open('uploaded files less than two !')
      setTimeout(() => {
        this._snackBar.dismiss()
      }, 2000);
      return
    }
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      this.files.push(element)
      var reader = new FileReader();
      reader.readAsDataURL(element);
      let r
      reader.onload = (event: any) => {

        this.preview.push({ img: event.target.result })
      }

    }
    this.fileUploaded = true

  }
  async convertToBase64() {
    if (this.name == '') {
      this._snackBar.open('Enter Your name !')
      setTimeout(() => {
        this._snackBar.dismiss()
      }, 2000);
      return
    }
    this.loader = true
    console.log(this.files);

    this.files.forEach(async (element: any, index: any) => {
      await this.upload(element, index).then(url => {
        console.log(url, index);


      })

    });
  }
  async upload(file: any, i: any) {


    var formdata = new FormData();
    formdata.append("image", file, file.name);
    // formdata.append("type", "file");
    // formdata.append("action", "upload");
    // formdata.append("timestamp", "1663591231363");
    // formdata.append("auth_token", "31b647f2ef0e505c6327c251cfb0553a");

    var requestOptions: any = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    console.log(requestOptions);

    fetch("https://api.imgbb.com/1/upload?key=31b647f2ef0e505c6327c251cfb0553a", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result);
          console.log('result.image.display_url', result.data.display_url);
          console.log(result.data.width, result.data.height);


          // localStorage.setItem(i, result)
          this.ar = parseInt(result.data.width) / parseInt(result.data.height)
          this.urlArray.push({ img: result.data.display_url })
          console.log('urlArray', this.urlArray);
          if (i == 1 && result.status == 200) {
            setTimeout(() => {
              this.success = true

              console.log(this.urlArray, this.ar);
              const sa = JSON.stringify([...this.urlArray])
              localStorage.setItem('b', this.base64encode(sa))
              localStorage.setItem('ar', this.ar)
              localStorage.setItem('name', this.name)
              this.loader = false
              this.router.navigateByUrl('/share')
            }, 2000);

          }
        } else {
          this._snackBar.open('file upload error !')
          this.fileUploaded=false
          this.files=[]
          this.preview=[]
          this.urlArray=[]
          setTimeout(() => {
            this.loader = false
          })
        }

      })
      .catch(error => {
        this._snackBar.open('file upload error !')
        this.fileUploaded=false
        this.files=[]
        this.preview=[]
        this.urlArray=[]
        setTimeout(() => {
          this.loader = false
        })
        console.log('error', error)
      })
  }


}
// {
//   "data": {
//       "id": "nC3XSX2",
//       "title": "bus",
//       "url_viewer": "https://ibb.co/nC3XSX2",
//       "url": "https://i.ibb.co/8czyVy3/bus.jpg",
//       "display_url": "https://i.ibb.co/8czyVy3/bus.jpg",
//       "width": "612",
//       "height": "408",
//       "size": 33845,
//       "time": "1663653726",
//       "expiration": "0",
//       "image": {
//           "filename": "bus.jpg",
//           "name": "bus",
//           "mime": "image/jpeg",
//           "extension": "jpg",
//           "url": "https://i.ibb.co/8czyVy3/bus.jpg"
//       },
//       "thumb": {
//           "filename": "bus.jpg",
//           "name": "bus",
//           "mime": "image/jpeg",
//           "extension": "jpg",
//           "url": "https://i.ibb.co/nC3XSX2/bus.jpg"
//       },
//       "delete_url": "https://ibb.co/nC3XSX2/61f4d52a05878e0fd7ff256edaa027bc"
//   },
//   "success": true,
//   "status": 200
// }

