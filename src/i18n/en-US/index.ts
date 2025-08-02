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
        autoFishing: {
          name: 'Auto Fishing',
          description: 'Automatically fish in the game',
        },
        autoRankBattle: {
          name: 'Auto Rank Battle',
          description: 'Navigate to rank battle and begin auto play',
        },
        clearRedDots: {
          name: 'Clear Red Dots',
          description: 'Navigate to the main screen and clear all red dots',
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
        claimAchievementsRewards:{
          name: 'Claim Achievements Rewards',
          description: 'Detect and navigate to the achievements screen, then claim rewards',
        },
        claimBattlePassRewards: {
          name: 'Claim Battle Pass Rewards',
          description: 'Detect and navigate to the battle pass screen, then claim rewards',
        },
        confirmCollectionLevel: {
          name: 'Confirm Collection Level',
          description: 'Detect and navigate to the card collection screen, then confirm achievements',
        },
        launchApp: {
          name: 'Launch Application',
          description: 'Launch the app: com.netease.yzs',
        },
        navigateToMainScreen: {
          name: 'Navigate to Main Screen',
          description: 'Detect game current state and navigate to the main screen',
        },
        receiveGift: {
          name: 'Receive Gift',
          description: 'Detect and navigate to the gift screen, then receive gifts',
        },
        startFishing: {
          name: 'Start Fishing',
          description: 'Navigate to the fishing scene',
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
