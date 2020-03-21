import {userDataStorage} from '../stores/user-data.store';

export class AuthorizationService {
    
    hasPermission(requiredPermission){
        const userInfo = userDataStorage.get();
        if (!userInfo) return false;
        if (!userInfo.scope) return false;
        let permissionArray = userInfo.scope.split(" ");
        return permissionArray.indexOf(requiredPermission) >= 0;
    }
}