import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('total') AllCourse:number= 0;
  @Input() FreeCourses:number= 0;
  @Input() PremiumCourses:number= 0;
  
  select:any = 'AllCourse'
  
  searchvalue:any = ''
  @Output() 
  textchange:EventEmitter<any>=new EventEmitter<any>();
  datachaged(){
    this.textchange.emit(this.searchvalue)
  }
    
  @Output() 
  events:EventEmitter<any> = new EventEmitter<any>();
  
  selectedbtn(){
    this.events.emit(this.select)
    // console.log(this.select);
    
  }

}
