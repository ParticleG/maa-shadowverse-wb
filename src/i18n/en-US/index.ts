import packageJson from 'app/package.json';

export default {
  components: {
    ThemeButton: {
      labels: {
        switchTheme: 'Switch Theme',
      },
    },
  },
  layouts: {
    drawers: {
      LeftMainDrawer: {
        labels: {
          home: 'Home',
        },
      },
    },
    headers: {
      MainHeader: {
        labels: {
          title: packageJson.productName,
        },
        tooltips: {
          setAlwaysOnTop: 'Set Always on Top',
          unsetAlwaysOnTop: 'Unset Always on Top',
          minimize: 'Minimize',
          toggleMaximize: 'Toggle Maximize',
          close: 'Close',
        },
      },
    },
  },
  pages: {
    HomePage: {
      labels: {
        title: 'Home',
      },
      notifications: {
        connectSuccess: 'Connected successfully: {deviceName}',
        connectError: 'Connection error: {deviceName}',
        disconnectSuccess: 'Disconnected successfully: {deviceName}',
        disconnectError: 'Disconnection error: {deviceName}',
      },
    },
  },
};
