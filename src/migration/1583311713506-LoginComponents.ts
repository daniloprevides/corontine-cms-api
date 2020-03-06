import { Events } from "./../plugin/entity/events.entity";
import { FieldTypeEnum } from "./../plugin/enum/field-type.enum";
import { Attributes } from "./../plugin/entity/attributes.entity";
import { Fields } from "./../plugin/entity/fields.entity";
import { Components } from "./../plugin/entity/components.entity";
import { PluginTypeEnum } from "./../commons/enum/plugin-type.enum";
import { Plugin } from "./../plugin/entity/plugin.entity";
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";

export class LoginComponents1583311713506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const pluginRepository = getRepository<Plugin>("plugin");
    const componentsRepository = getRepository<Components>("components");

    //Finding default plugin data
    const pluginBase = await pluginRepository.findOne({
      where: { pluginType: PluginTypeEnum.BASE }
    });

    //Creating the components
    const loginComponents = new Components();
    loginComponents.clientId = pluginBase?.clientId;
    loginComponents.description = "Login Components";
    loginComponents.name = "login_component";
    loginComponents.plugin = pluginBase;
    loginComponents.url = `{plugin('pluginType','${PluginTypeEnum.BASE}').componentsUrl}/components/components.js`;
    loginComponents.fields = [
      {
        clientId: pluginBase?.clientId,
        name: "login-page",
        description: "Login Page",
        events: [
          {
            clientId: pluginBase?.clientId,
            name: "login",
            description:
              "Event triggered on user clicked login and validation is ok",
            outputObjectDefinition: {
              username: FieldTypeEnum.STRING,
              password: FieldTypeEnum.STRING
            },
            outputType: FieldTypeEnum.ANY
          } as Events,
          {
            clientId: pluginBase?.clientId,
            name: "forgot-password",
            description:
              "Event triggered on user clicked forgot password button",
            outputObjectDefinition: { username: FieldTypeEnum.STRING },
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: pluginBase?.clientId,
            defaultValue: null,
            required: false,
            name: "username",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: pluginBase?.clientId,
            defaultValue: "default",
            required: false,
            name: "theme",
            type: FieldTypeEnum.STRING
          } as Attributes
        ]
      } as Fields,
      {
        clientId: pluginBase?.clientId,
        name: "forgot-password-page",
        description: "Forgot Pasword Page",
        events: [
          {
            clientId: pluginBase?.clientId,
            name: "forgot-password",
            description:
              "Event triggered on user clicked forgot password button",
            outputObjectDefinition: { username: FieldTypeEnum.STRING },
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: pluginBase?.clientId,
            defaultValue: "default",
            required: false,
            name: "theme",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: pluginBase?.clientId,
            defaultValue: "default",
            required: false,
            name: "username",
            type: FieldTypeEnum.STRING
          } as Attributes          
        ]
      } as Fields,
      {
        clientId: pluginBase?.clientId,
        name: "password-change-page",
        description: "Password Change Page",
        events: [
          {
            clientId: pluginBase?.clientId,
            name: "change-password",
            description:
              "Event triggered on user clicked change password",
            outputObjectDefinition: { password1: FieldTypeEnum.STRING ,password2: FieldTypeEnum.STRING },
            outputType: FieldTypeEnum.ANY
          } as Events
        ],
        attributes: [
          {
            clientId: pluginBase?.clientId,
            defaultValue: null,
            required: false,
            name: "username",
            type: FieldTypeEnum.STRING
          } as Attributes,
          {
            clientId: pluginBase?.clientId,
            defaultValue: "default",
            required: false,
            name: "theme",
            type: FieldTypeEnum.STRING
          } as Attributes
        ]
      } as Fields
    ];

    await componentsRepository.save(loginComponents);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
