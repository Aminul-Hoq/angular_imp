import { Component, OnInit } from '@angular/core';
import {FILE_SERVICE} from '../shared/app.constant';
import {FileDto} from '../shared/fileDto';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../shared/loader/loader.service';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public dtoList: FileDto[] = [];
  constructor(private http: HttpClient,
              public loader: LoaderService) { }

  ngOnInit(): void {
    this.http.get(FILE_SERVICE.FILE_LIST).subscribe(value => { this.dtoList = value as FileDto[]; });
  }

}
