import { i18nGlobal } from 'boot/i18n';
import type { ServiceTrait, ServiceType } from 'src/types/service';
import type { AsyncClass } from 'src/types/common';

export const i18nSubPath =
  (baseName: string) => (relativePath: string, data?: Record<string, unknown>) => {
    if (data) {
      return i18nGlobal.t(`${baseName}.${relativePath}`, data);
    } else {
      return i18nGlobal.t(`${baseName}.${relativePath}`);
    }
  };

export const useService = <T extends ServiceType>(serviceName: T) =>
  new Proxy(
    {},
    {
      get:
        (_, functionName) =>
        (...payloads: never[]) =>
          window.service.invoke(serviceName, functionName, ...payloads),
    },
  ) as AsyncClass<ServiceTrait<T>>;
