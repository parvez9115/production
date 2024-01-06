// This file can be replaced during build by using the fileReplacements array.
// ng build replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.
let url = '';

let appName = 'live';
let testing: string;
let s3ServerName = '';

export const host = {
  apmKT: 'mvt.apmkingstrack.com',
  windowServer: 'mvttesting.apmkingstrack.com',
};

switch (appName) {
  case 'live':
    url = 'https://' + host.apmKT + '/fleettracking';
    // url = 'http://' + '192.168.0.101:8081' + '/fleettracking';
    break;
  case 'testing':
    if (location.protocol == 'https:') {
      testing = 'https://';
    } else {
      testing = 'http://';
    }
    url = testing + host.windowServer + '/fleettracking';
}

export const ServerUrl = {
  live: url,
  s3ServerName: s3ServerName,
};

export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as zone.run, zoneDelegate.invokeTask.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.