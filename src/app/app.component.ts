import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  facts: any[];
  currentTab: any = 1;
  maxTabs: any;

  constructor(db: AngularFireDatabase){
    db.database.ref('/').once('value').then(val=>{
console.log(val.val());
this.facts = val.val();
this.maxTabs = (this.facts.length)-1;
    });
  }

  clickNext(){
    if(this.currentTab<this.maxTabs){
      this.currentTab++;
    }
  }
  clickPrevious(){
    if(this.currentTab>0){
      this.currentTab--;
    }
  }
}
