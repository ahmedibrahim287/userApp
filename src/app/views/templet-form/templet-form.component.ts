import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.css']
})
export class TempletFormComponent implements OnInit {

  constructor() { }
  onSubmit(x: any) {
  console.log(x)
}
  ngOnInit(): void {
  }

}
