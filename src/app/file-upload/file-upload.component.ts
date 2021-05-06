import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FILE_SERVICE} from '../shared/app.constant';
import {map, tap} from 'rxjs/operators';
import {FileDto} from '../shared/fileDto';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  public file: File;
  public dto: FileDto = new FileDto('', '', '');
  public dtoList: FileDto[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onChange(event): any {
    this.file = event.target.files[0];
  }

  onSubmit(): any {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.http.post<any>(FILE_SERVICE.FILE_UPLOAD, formData).subscribe(value => this.dto = value);
  }
}
