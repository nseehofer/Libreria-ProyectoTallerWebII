import { Component } from '@angular/core';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgxUiLoaderModule],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {

}
