import { Injectable } from '@angular/core';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ModelService{

  async changePasswordById(userId, newPassword, confirmNewPassword){
      const plugin = this.storageService.getPluginByName("user_api");
      if (plugin){
        const url = `${plugin.apiUrl}/forgot-password/${userId}`;
        return this.httpClient.post(url, {
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword
        }).toPromise();
      }

      return null;
  }

  async changeUserPassword(userId, newPassword, confirmNewPassword){
    const plugin = this.storageService.getPluginByName("user_api");
    if (plugin){
      const url = `${plugin.apiUrl}/${userId}/change-password`;
      return this.httpClient.put(url, {
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
      }).toPromise();
    }

    return null;
}
}
