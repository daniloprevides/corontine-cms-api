# Corontine CMS API

Corontine is a Headless CMS platform that allows you to create modules in any language. The core concept is to use custom elements and microservices to allow communication between them.
Basically we have a SPA CMS client that load custom elements.
The name comes from my period of quarentine due to Corona Virus. 

# Core Modules
Actually the core modules are developed using Svelte framework and NodeJS (Nest Framework), but you can develop your modules using any language.

## Authentication and Authorization Modules
As part of the core module, the system provides authentication and authorization using users , groups and scopes.
Scopes can be created and extended to fit different needs.
The core module using oauth2 as protocol, and enable addons to connect and to do all tasks that can be done through CMS interface. 

## Plugin System
You can create plugins for user interface using custom elements so they can extend system functionalities, or API, that you can use your own database if you need.
The core modules provide an API for validation authentication and authorization.
Even core modules can be changed by other modules through the plugin system.

## Platforms
The core modules are built on NodeJS using typescript ( TypeORM -> MySQL)
The client interface is using Svelte framework.
As the core CMS interface basically interact with plugins, creating another interface using another language or framework , is an easy job.

## Getting Started
Download the repository;
yarn install or npm install;
To start development, run: yarn dev:all
Navigate to http://localhost:3000

To configure database, edit the .env file in root folder, or for more configurations you can chack the configuration.ts file inside src/config

The CMS Client is inside folder cms-frontend
The web components are inside folder components

The admin initial user and password is:
user:       daniloprevides@gmail.com
password:   Change@Password

# Want to Help?
This is still an early version. If you liked the idea and want to contribute somehow, contact me on daniloprevides@gmail.com

## License

Corontine is [MIT licensed](LICENSE).