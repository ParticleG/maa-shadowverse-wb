import packageJson from 'app/package.json';

export default {
  components: {
    AdbDeviceCard: {
      labels: {
        title: 'Available Devices',
        disconnect: 'Disconnect',
      },
      notifications: {
        connecting: 'Connecting to {deviceName}...',
        connectSuccess: 'Connected successfully: {deviceName}',
        connectError: 'Connection error: {deviceName}',
        disconnecting: 'Disconnecting {deviceName}...',
        disconnectSuccess: 'Disconnected successfully: {deviceName}',
        disconnectError: 'Disconnection error: {deviceName}',
      },
    },
    WorkflowCard: {
      labels: {
        title: 'Available Workflows',
        noWorkflow: 'No workflow selected',
        runWorkflow: 'Run workflow',
      },
      workflows: {
        autoRankBattle: {
          name: 'Auto Rank Battle',
          description: 'Navigate to rank battle and begin auto play',
        },
        clearExclamationMarks: {
          name: 'Clear Exclamation Marks',
          description: 'Detect and clear exclamation marks on the screen',
        },
        startUp: {
          name: 'Start Up',
          description: 'Launch the app and navigate to the main screen',
        },
      },
      pipelines: {
        acquireDailyPack: {
          name: 'Acquire Daily Pack',
          description: 'Detect and acquire the daily pack from the game',
        },
        autoPlay: {
          name: 'Auto Play',
          description: 'Automatically play the battle',
        },
        launchApp: {
          name: 'Launch Application',
          description: 'Launch the app: com.netease.yzs',
        },
        navigateToMainScreen: {
          name: 'Navigate to Main Screen',
          description: 'Detect game current state and navigate to the main screen',
        },
        startRankBattle: {
          name: 'Start Rank Battle',
          description: 'Navigate to rank battle and start the battle',
        }
      },
      notifications: {
        pipelineError: 'Pipeline "{name}" threw an error',
        workflowFailure: 'Workflow "{name}" failed',
        workflowSuccess: 'Workflow "{name}" completed successfully',
      },
    },
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
    },
  },
};
