import path = require("path");
import { HandlebarsAdapter } from '@nest-modules/mailer';

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    api: {
        title: process.env.API_TITLE || "API",
        description: process.env.API_DESCRIPTION || 'API description',
        version: process.env.API_VERSION || 'API Version',
        path: process.env.API_PATH || 'api'
    },
    changePasswordExpirationTime: process.env.CHANGE_PASSWORD_EXPIRATION_TIME || 100000000,
    jwt: {
        secret: process.env.JWT_SECRET,
        tokenExpiration: process.env.JWT_EXPIRES_TOKEN,
        refreshExpiration: process.env.JWT_EXPIRES_REFRESH
    },
    serverUrl: process.env.SERVER_URL,
    mail: {
        from: process.env.SMTP_FROM,
        transport: {
            host: process.env.SMTP_HOST || "localhost",
            port: process.env.SMTP_PORT || 25,
            secure: process.env.SMTP_SECURE != null ? process.env.SMTP_SECURE : false || "ssl",
            requireTLS: process.env.SMTP_REQUIRE_TLS === 'true' ? true : false || true,
            tls: {
              rejectUnauthorized: false
            },
            // auth: {
            //   type: "login",
            //   user: process.env.SMPT_USER ,
            //   pass: process.env.SMTP_PASSWORD,
            // },
          },
          template: {
            dir: path.resolve(path.join(__dirname, '..', '..')) + '/templates',
            adapter: new HandlebarsAdapter(), // or new PugAdapter()
            options: {
              strict: true,
            },
          },
    },
    database: {
        type: process.env.DB_TYPE || "mysql",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "cooker",
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        autoSchemaSync: true,
        synchronize: process.env.DB_SYNCRONIZE === "true" ? true : false || true,
        migrations: [__dirname + '/../migration/*{.ts,.js}'],
        migrationsRun: false,
        logging: true,
        cli: {
          migrationsDir: 'src/migration',
        },        
    },
    testDatabase: {
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      synchronize: false,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      autoSchemaSync: false,
      migrations: [__dirname + '/../migration/*{.ts,.js}'],
      migrationsRun: false,
      logging: false,
      cli: {
        migrationsDir: 'src/migration',
      },        
    }
  });