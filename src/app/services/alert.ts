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

  async alertConfirm(
    header: string,
    subHeader: string,
    message: string,
    confirmButtonText: string,
    functionOK: Function,
    cancelText: string = 'Cancelar',
    confirmText: string = 'Confirmar'
  ){
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [
         {
      text: 'Cancel',
      role: 'cancel',
      
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        functionOK();
      },
    },
      ],
    
  
})
await alert.present();
  }
}

