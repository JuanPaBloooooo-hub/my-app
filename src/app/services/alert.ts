import { inject, Service } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Service()
export class AlertControllerService {
private alertController = inject(AlertController);

async presentAlert( 
    header: string,
    message:string
){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}

