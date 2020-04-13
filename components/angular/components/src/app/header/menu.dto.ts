export class MenuDTO{
  id: string;
  text: string;
  action?: Function;
  parentId?: string;
  visible = true;
  children?:Array<MenuDTO>;
}
