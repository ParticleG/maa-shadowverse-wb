import { BaseWindow } from 'app/src-electron/main/service/window/base';

import { WindowType } from 'src/types/service/window/types';

export class MainWindow extends BaseWindow {
  constructor() {
    super(WindowType.main, {
      storePosition: true,
      useContentSize: true,
      frame: false,
    });
  }
}
