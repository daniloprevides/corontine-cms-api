import { Fields } from "./../src/plugin/entity/fields.entity";
import { AttributesDto } from "./../src/plugin/dto/attributes.dto";
import { NewAttributesDto } from "./../src/plugin/dto/new-attributes.dto";
import { FieldsDto } from "./../src/plugin/dto/fields.dto";
import { ComponentsDto } from "./../src/plugin/dto/components.dto";
import { NewFieldsDto } from "./../src/plugin/dto/new-fields.dto";
import { RequestContextMiddleware } from "../src/middlewares/request-context-middleware";
import { Pagination } from "nestjs-typeorm-paginate";
import { PluginDto } from "./../src/plugin/dto/plugin.dto";
import { ScopeEnum } from "./../src/security/enum/scope.enum";
import { ScopeEnum as PluginScopeEnum } from "./../src/plugin/enum/scope.enum";

import { Scope } from "./../src/security/entity/scope.entity";
import { HttpExceptionFilter } from "./../src/commons/filters/http-exception.filter";
import { PluginTypeEnum } from "../src/commons/enum/plugin-type.enum";
import { NewComponentsDto } from "./../src/plugin/dto/new-components.dto";
import { NewPluginDto } from "./../src/plugin/dto/new-plugin.dto";
import { PluginConstants } from "./../src/plugin/constants";
import { AppModule } from "./../src/app.module";
import request = require("supertest");
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";

import { Constants } from "../src/commons";
import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";
import { ClientCredentials } from "../src/security/entity/client-credentials.entity";
import { ClientCredentialsEnum } from "../src/security/enum/client-credentials.enum";
import { GrantTypeEnum } from "../src/security/enum/grant-type.enum";
import { PluginEnvironmentEnum } from "../src/plugin/enum/environment.enum";
import { v4 as uuidv4 } from "uuid";
import { FieldTypeEnum } from "../src/plugin/enum/field-type.enum";

const stringToBase64 = (string: string) => {
  return Buffer.from(string).toString("base64");
};

describe("Fields (e2e)", () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let authorization: string;
  const componentUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.COMPONENTS_ENDPOINT}`;
  const fieldsUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.FIELDS_ENDPOINT}`;
  const pluginUrl = `/${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${PluginConstants.PLUGIN_ENDPOINT}`;

  let server = null;

  const getUserClientCredentials = async (
    credential: ClientCredentialsEnum
  ) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({
      name: credential
    });
    return stringToBase64(
      `${clientCredentials.name}:${clientCredentials.secret}`
    );
  };

  const getRawClientCredentials = async (credential: ClientCredentialsEnum) => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const clientCredentials = await clientCredentialRepository.findOne({
      name: credential
    });

    return clientCredentials;
  };

  const createCredentialWithPermissions = async (
    credentialName: string,
    credentialSecret: string,
    scopeNames: string[]
  ): Promise<ClientCredentials> => {
    const clientCredentialRepository: Repository<ClientCredentials> = moduleFixture.get<
      Repository<ClientCredentials>
    >(getRepositoryToken(ClientCredentials));
    const scopeRepository: Repository<Scope> = moduleFixture.get<
      Repository<Scope>
    >(getRepositoryToken(Scope));

    let scopes: Scope[] = [];
    for (let scopeName of scopeNames) {
      scopes.push(await scopeRepository.findOne({ name: scopeName }));
    }

    let userCredential = new ClientCredentials();
    userCredential.name = credentialName;
    userCredential.secret = credentialSecret;
    userCredential.scopes = scopes;

    return clientCredentialRepository.save(userCredential);
  };

  const defaultGrantRequest = (auth?: string) => {
    return request(server)
      .post("/oauth/token")
      .set("Authorization", `Basic ${auth ? auth : authorization}`)
      .set("Content-Type", "multipart/form-data")
      .field("grant_type", GrantTypeEnum.CLIENT_CREDENTIALS);
  };

  const passwordGrantRequest = (
    auth: string,
    user: string,
    password: string
  ) => {
    return request(server)
      .post("/oauth/token")
      .set("Authorization", `Basic ${auth ? auth : authorization}`)
      .set("Content-Type", "multipart/form-data")
      .field("grant_type", GrantTypeEnum.PASSWORD)
      .field("username", user)
      .field("password", password);
  };

  const createRequest = (data: any, token: string, url: string) => {
    return request(app.getHttpServer())
      .post(url)
      .set("Authorization", `Bearer ${token}`)
      .send(data);
  };

  const updateRequest = (data: any, token: string, url: string) => {
    return request(app.getHttpServer())
      .put(url)
      .set("Authorization", `Bearer ${token}`)
      .send(data);
  };

  const deleteRequest = (token: string, url: string) => {
    return request(app.getHttpServer())
      .delete(url)
      .set("Authorization", `Bearer ${token}`)
      .send();
  };

  const getRequest = (token: string, url: string, limit = 10, page = 0) => {
    return request(app.getHttpServer())
      .get(url)
      .set("Authorization", `Bearer ${token}`);
  };

  beforeAll(async () => {
    jest.setTimeout(30000);
    return new Promise(async (resolve, reject) => {
      moduleFixture = await Test.createTestingModule({
        imports: [AppModule]
      }).compile();

      initializeTransactionalContext();
      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(
        new ValidationPipe({
          disableErrorMessages: false
        })
      );
      app.useGlobalFilters(new HttpExceptionFilter());
      app.use(RequestContextMiddleware);

      await app.init();

      setTimeout(async () => {
        // await createDefaultClientCredentialsForTesting();
        // authorization = await getUserClientCredentials(
        //   ClientCredentialsEnum["USER@APP"]
        // );
        server = app.getHttpServer();
        resolve();
      }, 4000);
    });
  });

  it("Should add new field", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.FIELDS_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description"
    } as NewFieldsDto;

    return (
      createRequest(newField, tokenField, fieldsUrl)
        // .expect(201)
        .then(async data => {
          expect(data.body.name).toBe(newField.name);

          done();
        })
    );
  });

  it("Should add new field with attributes", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.FIELDS_CREATE,
        PluginScopeEnum.ATTRIBUTES_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description",
      attributes: [
        {
          name: uuidv4(),
          value: 33,
          type: FieldTypeEnum.NUMBER
        } as NewAttributesDto
      ]
    } as NewFieldsDto;

    return createRequest(newField, tokenField, fieldsUrl)
      .expect(201)
      .then(async data => {
        expect(data.body.name).toBe(newField.name);
        expect(data.body.attributes[0].name).toStrictEqual(
          newField.attributes[0].name
        );
        expect(data.body.attributes[0].value).toStrictEqual(
          newField.attributes[0].value
        );

        done();
      });
  });

  it("Should update field with attributes", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.FIELDS_CREATE,
        PluginScopeEnum.FIELDS_UPDATE,
        PluginScopeEnum.ATTRIBUTES_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description"
    } as NewFieldsDto;
    const newFieldResponse = await createRequest(
      newField,
      tokenField,
      fieldsUrl
    );
    const field = newFieldResponse.body as FieldsDto;
    field.attributes = [
      {
        name: uuidv4(),
        value: 33,
        type: FieldTypeEnum.NUMBER
      } as AttributesDto
    ];

    return updateRequest(field, tokenField, `${fieldsUrl}/${field.id}`)
      .expect(200)
      .then(async data => {
        expect(data.body.name).toBe(field.name);
        expect(data.body.attributes[0].name).toStrictEqual(
          field.attributes[0].name
        );
        expect(data.body.attributes[0].value).toStrictEqual(
          field.attributes[0].value
        );

        done();
      });
  });

  it("Should delete field", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.FIELDS_CREATE,
        PluginScopeEnum.FIELDS_DELETE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description"
    } as NewFieldsDto;
    const newFieldResponse = await createRequest(
      newField,
      tokenField,
      fieldsUrl
    );
    const field = newFieldResponse.body as FieldsDto;

    return deleteRequest(tokenField, `${fieldsUrl}/${field.id}`)
      .expect(200)
      .then(async data => {
        done();
      });
  });

  it("Should get field by id", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.FIELDS_CREATE,
        PluginScopeEnum.FIELDS_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description"
    } as NewFieldsDto;
    const newFieldResponse = await createRequest(
      newField,
      tokenField,
      fieldsUrl
    );
    const field = newFieldResponse.body as FieldsDto;

    return getRequest(tokenField, `${fieldsUrl}/${field.id}`)
      .expect(200)
      .then(async data => {
        const responseField = data.body as FieldsDto;
        expect(responseField.name).toBe(field.name);
        expect(responseField.description).toBe(field.description);
        done();
      });
  });

  it("Should get all fields", async done => {
    const pluginCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [PluginScopeEnum.PLUGIN_CREATE, PluginScopeEnum.CMS, ScopeEnum.TOKEN_INFO]
    );
    const componentsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.COMPONENTS_CREATE,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );
    const fieldsCredential = await createCredentialWithPermissions(
      uuidv4(),
      "secret",
      [
        PluginScopeEnum.FIELDS_CREATE,
        PluginScopeEnum.FIELDS_READ,
        PluginScopeEnum.CMS,
        ScopeEnum.TOKEN_INFO
      ]
    );

    const pluginCredentials = await getUserClientCredentials(
      pluginCredential.name as any
    );
    const componentsCredentials = await getUserClientCredentials(
      componentsCredential.name as any
    );
    const fieldsCredentials = await getUserClientCredentials(
      fieldsCredential.name as any
    );

    const defaultRequestPlugin = await defaultGrantRequest(pluginCredentials);
    const defaultRequestComponent = await defaultGrantRequest(
      componentsCredentials
    );
    const defaultRequestField = await defaultGrantRequest(fieldsCredentials);
    const tokenPlugin = defaultRequestPlugin.body.accessToken;
    const tokenComponent = defaultRequestComponent.body.accessToken;
    const tokenField = defaultRequestField.body.accessToken;

    //Create a plugin
    const newPlugin = {
      name: uuidv4(),
      apiUrl: "http://localhost",
      environment: PluginEnvironmentEnum.STAGE,
      pluginType: PluginTypeEnum.CLIENT
      ,componentsUrl: "abc"
    } as NewPluginDto;
    const newPluginResponse = await createRequest(
      newPlugin,
      tokenPlugin,
      pluginUrl
    );
    const plugin = newPluginResponse.body as PluginDto;
    let newComponent = {
      name: uuidv4(),
      plugin: plugin
    } as NewComponentsDto;
    const newComponentResponse = await createRequest(
      newComponent,
      tokenComponent,
      componentUrl
    );
    const component = newComponentResponse.body as ComponentsDto;
    let newField = {
      name: uuidv4(),
      description: "description"
    } as NewFieldsDto;
    const newFieldResponse = await createRequest(
      newField,
      tokenField,
      fieldsUrl
    );
    return getRequest(tokenField, `${fieldsUrl}`)
      .expect(200)
      .then(async data => {
        const fieldsRepository: Repository<Fields> = moduleFixture.get<
          Repository<Fields>
        >(getRepositoryToken(Fields));
        let total = await fieldsRepository.count();
        const responseField = data.body as Pagination<Fields>;
        expect(responseField.itemCount).toBe(total);
        done();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
