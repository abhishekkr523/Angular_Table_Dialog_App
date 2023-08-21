import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'date', 'designation'];
  dataSource = [
    {
      "id": "24323",
      "name": "Mark Smith",
      "date": "25/5/2020",
      "designation": "professor",
      "cards": [
        {
          "ID": "1",
          "Name": "Senpai",
          "Gender": "1",
          "Class": "32",
          "Seat": "15",
          "Club": "0",
          "Persona": "1",
          "Crush": "0",
          "Size": "0.5",
          "Strength": "0",
          "Hairstyle": "1",
          "Color": "Black",
          "Eyes": "Black",
          
        }
      ]
    },
    {
      "id": "24564",
      "name": "Caitlin MacDonald",
      "date": "17/5/2020",
      "designation": "professor",
      "cards": [
        {
          "ID": "1",
          "Name": "Caitlin",
          "Gender": "1",
          "Class": "32",
          "Seat": "15",
          "Club": "0",
          "Persona": "1",
          "Crush": "0",
          "Size": "0.5",
          "Strength": "0",
          "Hairstyle": "1",
          "Color": "Black",
          "Eyes": "green",
         
        }
      ]
    },
    {
      "id": "24345",
      "name": "Jessie Johnson ",
      "date": "1/5/2020",
      "designation": "professor",
      "cards": [
        {
          "ID": "2",
          "Name": "Yui Rio",
          "Gender": "0",
          "Class": "11",
          "Seat": "14",
          "Club": "1",
          "Persona": "5",
          "Crush": "0",
          "Size": "0.5",
          "Strength": "0",
          "Hairstyle": "2",
          "Color": "Red",
          "Eyes": "Red",
        
        }
      ]
    },
    {
      "id": "24874",
      "name": "Alen Williams",
      "date": "14/5/2020",
      "designation": "professor",
      "cards": [
        {
          "ID": "2",
          "Name": "Yui Rio",
          "Gender": "0",
          "Class": "11",
          "Seat": "14",
          "Club": "1",
          "Persona": "5",
          "Crush": "0",
          "Size": "0.5",
          "Strength": "0",
          "Hairstyle": "2",
          "Color": "Red",
          "Eyes": "Red",
         
        }
      ]
    },
    {
      "id": "24323",
      "name": "Maria Garcia ",
      "date": "13/5/2020",
      "designation": "professor",
      "cards": [
        {
          "ID": "2",
          "Name": "Yui Rio",
          "Gender": "0",
          "Class": "11",
          "Seat": "14",
          "Club": "1",
          "Persona": "5",
          "Crush": "0",
          "Size": "0.5",
          "Strength": "0",
          "Hairstyle": "2",
          "Color": "Red",
          "Eyes": "Red",
          
        }

      ]
    }
  ];
  title: any;
  // title = 'testing';
  constructor(public dialog: MatDialog) { }
  opendialog(cards: any) {
    // alert()
    this.dialog.open(DialogComponent, {
     
      data: cards // Pass the JSON data to the dialog component
    });
   
  }
}


