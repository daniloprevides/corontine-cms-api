import login from './login.svelte';
import forgotPassword from './forgotPassword.svelte';
import changePassword from './change-password.svelte';
import header from './header.svelte';
import footer from './footer.svelte';
import dataTable from './data-table.svelte';
import newPassword from './new-password.svelte';
import PageBuilder from './page-builder.svelte';

//Vaading components
import '@vaadin/vaadin-login';
import '../node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-text-field';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-text-area';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-email-field';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-integer-field';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-number-field';
import '../node_modules/@vaadin/vaadin-text-field/vaadin-password-field';
import '../node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox';
import '../node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker';
import '../node_modules/@vaadin/vaadin-select';


export {login, forgotPassword, header, footer, dataTable, changePassword, newPassword, PageBuilder};