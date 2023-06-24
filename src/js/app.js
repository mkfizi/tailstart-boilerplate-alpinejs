/**
 * --------------------------------------------------------------------------
 * Tailwind Starter Kit - Boilerplate (AlpineJS) v0.1.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/tailwind-starter-kit-boilerplate-alpinejs/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

let app = {
    name: 'Tailwind Starter Kit - Boilerplate',
    version: '0.1.0',
};

app.elements = {
    footerAppName: document.getElementById('footerAppName'),
    footerAppVersion: document.getElementById('footerAppVersion'),
};

app.init = () => {
    app.view.init();
};


app.view = {
    init: () => {
        app.view.updateAppInfo();
    },

    // Update the footer with current year, app name, and version
    updateAppInfo: () => {
        if (app.elements.footerAppName) {
            app.elements.footerAppName.innerHTML = app.name;
        }

        if (app.elements.footerAppVersion) {
            app.elements.footerAppVersion.innerHTML = app.version;
        }
    },
};

app.init();