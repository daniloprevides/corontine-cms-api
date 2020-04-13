export class MenuDTO{
  name: string;
  requiredPermission: string;
  pageName: string;
  pageId: string;
  children?: MenuDTO[]
}
