import { GroupDTO } from './group.dto';

export class UserDTO{
  id: string;
  name: string;
  mustChangePassword: boolean;
  email: string;
  urlFacebook: string;
  urlInstagram: string;
  homePage?: string;
  groups: GroupDTO[];
}
