export class MenuHelper {
  isVisible(userPermissions, requiredPermissions) {
    const permissionsRequired = requiredPermissions.split("|");
    for (const permission of permissionsRequired) {
      if (userPermissions.indexOf(permission) >= 0) {
        return true;
      }
    }
    return false;
  }

  getMenu(userPermissions, logoffAction:Function) {
    return [
      {
        text: "Home",
        id: 0,
        route: "/home",
        visible: this.isVisible(userPermissions, "cms")
      },
      {
        text: "System",
        id: 9999,
        visible: this.isVisible(userPermissions, "cms"),
        children: [
          {
            id: 99990,
            text: "Addon Manager",
            route: "/manager/addon",
            parentId: 9999,
            visible: this.isVisible(
              userPermissions,
              "plugin_create|plugin_update"
            )
          },
          {
            id: 99991,
            text: "Menu Manager",
            route: "/manager/menu",
            parentId: 9999,
            visible: this.isVisible(
              userPermissions,
              "menu_create|menu_update"
            )
          },
          {
            id: 99992,
            text: "Pages",
            route: "/manager/pages",
            parentId: 9999,
            visible: this.isVisible(
              userPermissions,
              "page_create|page_update"
            )
          },
          {
            id: 99993,
            text: "Groups",
            route: "/manager/group",
            parentId: 9999,
            visible: this.isVisible(userPermissions, "group_read")
          },
          {
            id: 99994,
            text: "Users",
            route: "/manager/user",
            parentId: 9999,
            visible: this.isVisible(userPermissions, "user_read")
          },
          {
            id: 99999,
            text: "Log off",
            action: logoffAction,
            parentId: 9999,
            visible: this.isVisible(userPermissions, "cms")
          }
        ]
      }
    ];
  }


  getVisibleMenu(userPermissions,logoffAction:Function){
    const menus = this.getMenu(userPermissions,logoffAction);
    const myMenu = [];
    const getChildren = (menu) =>{
        let children = [];
        const myChildrenMenu = menu.filter(m => m.visible);
        if (myChildrenMenu) children = myChildrenMenu;
        return children;
    }

    for (const menu of menus){
        let children = null;
        if (menu.children){
            children = getChildren(menu.children);
            if (children) menu.children = children;
        }

        if (menu.visible){
            myMenu.push(menu);
        }
    }

    return myMenu;

  }
}
