import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  list: any;
  searchList: any;
  deleteList: any;
  searchVal: string = ""
  badRequeststring = "400 Bad Request";
  itemList: string[] = [];
  deleteTitleVisibility: boolean = false;
  constructor(private services: ServicesService) {

    this.getList();
    this.getListItem();
}
  ngOnInit() {

   
  }
  //list API
  getList() {
    this.services.getListAPI().subscribe(data => {
      this.list = JSON.stringify(data);
     
    });


    return this.list;
  }

  //search API
  searchLists(val:any) {
  
    if (val.replace("h", "H").replace("e", "E").replace("l", "L").replace("l", "L").replace("o", "O") == "HELLO") {
      this.services.getSearchAPI().subscribe(data => {
        this.searchList = JSON.stringify(data);


      });
      return this.searchList;
    }
    else {
      return this.searchList = this.badRequeststring
    };
  }

  //list API listed by items
  getListItem() {
    this.services.getListAPI().subscribe(data => {
      this.itemList = data.map((item: any, index: number) => `${index + 1}-${JSON.stringify(item)}`);
    });
  }
  //delete API
  getDelete() {
      this.services.getDeleteAPI().subscribe(data => {
      this.deleteList = JSON.stringify(data);
     
        this.deleteTitleVisibility = true;
    });
      return this.deleteList;
  }

}
