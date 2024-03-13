import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'abogados';

  constructor(private el:ElementRef){}
  ngOnInit(): void{ 
    
    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    console.log(alldrpdwn,'alldrpdwn#');
    alldrpdwn.forEach((item:any)=>{
        const a = item.parentElement?.querySelector('a:first-child');
        console.log(a,'a#');
        a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
        });
    });
  }


}
