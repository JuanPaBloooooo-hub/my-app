import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonInput, IonButton, IonIcon, IonList, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/angular';
import { addIcons } from 'ionicons';
import{ addOutline,trashOutline }from 'ionicons/icons';

import { ChangeDetectorRef } from '@angular/core';

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
    IonList,
    IonItemSliding,
    IonItemOption,
    IonItemOptions

  ],
})
export class TalkListPage implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  private alertControllerService = inject(AlertControllerService);

public tasks: string[] =[
   "Comprar Leche",
   "Comprar Pan",
   "Comprar Huevos",
]; 
public task:string='';

  constructor() {
    addIcons({
      addOutline,
      trashOutline
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

  confirmDeleteTask(task: string) {
    // console.log('Confirmar eliminación de tarea:', task);
this.alertControllerService.alertConfirm(
   'Confirmar Eliminación',
    'Eliminar Tarea',
    `¿Estás seguro de que deseas eliminar esta tarea?`,
    'Eliminar',


  //funcion anonima
  () => this.deleteTask(task),
  
)

  }

  private deleteTask(task: string) {
    console.log('La tarea a eliminar es:', task);

    const index = this.tasks.findIndex(
      (item: string) => item.toLowerCase().trim() === task.toLowerCase().trim()
    );

    console.log(index);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.cdr.markForCheck();
    }
  }
}

