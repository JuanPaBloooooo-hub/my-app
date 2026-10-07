import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonInput, IonButton, IonIcon, IonList } from '@ionic/angular';
import { addIcons } from 'ionicons';
import{ addOutline }from 'ionicons/icons';
import { AlertControllerService } from '../../services/alert';


@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.page.html',
  styleUrls: ['./talk-list.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonList

  ],
})
export class TalkListPage implements OnInit {

  private alertControllerService = inject(AlertControllerService);

public tasks: string[] =[
  // "Comprar Leche",
  // "Comprar Pan",
  // "Comprar Huevos",
]; 
public task:string='';

  constructor() {
    addIcons({
      addOutline
    })
  }

  ngOnInit() {}

  addTask(){
    console.log(this.task);
    if(!this.ifExistTask(this.task)){
   
    this.tasks.push(this.task);
    console.log(this.task)
    this.task='';
      this.alertControllerService.presentAlert('Tarea Agregada','La tarea se agrego correctamente');
    }
    else{
      this.alertControllerService.presentAlert('Tarea Existente','La tarea ya existe en la lista');
    }
    }

  




  private ifExistTask(task: string) {
    return this.tasks.find(
      (item:string) => task.toUpperCase().trim()===item.toUpperCase().trim()
      );
  }

}

