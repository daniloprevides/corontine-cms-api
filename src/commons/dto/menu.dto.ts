export class MenuDto{
    constructor(
        public id:string,
        public text:string,
        public description:string,
        public children:Array<MenuDto>,
        public page?:string,
        public idPage?:string,
        public parentId?:string,
        public requiredPermission?:string,
        public route?:string,
        public externalUrl?:string,
    ){}
}