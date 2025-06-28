import { getService, initContainer } from 'app/src-electron/main/service';

import { ServiceType } from 'src/types/service';

initContainer();

getService(ServiceType.app).init();
