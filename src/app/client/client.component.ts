import { 
    Component ,
    OnInit,
    ViewEncapsulation,
    AfterViewInit,
  }from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientComponent implements OnInit,AfterViewInit{
   
ngAfterViewInit(): void {
  
}
ngOnInit(): void {
  
}
img_cart=''
}
