<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref, toRaw } from 'vue';

import { ServiceType } from 'src/types/service';
import type { AdbDevice } from 'src/types/service/maa/types';
import { i18nSubPath, useService } from 'src/utils/common';

const i18n = i18nSubPath('pages.HomePage');
const { notify } = useQuasar();
const maaService = useService(ServiceType.maa);

const adbDevices = ref<AdbDevice[]>([]);
const connecting = ref(false);
const connected = ref(false);

const connect = async (device: AdbDevice) => {
  connecting.value = true;
  if (await maaService.connect(toRaw(device))) {
    connected.value = true;
    notify({
      type: 'positive',
      message: i18n('notifications.connectSuccess', { deviceName: device.name }),
      caption: device.address,
    });
  } else {
    connected.value = false;
    notify({
      type: 'negative',
      message: i18n('notifications.connectError', { deviceName: device.name }),
      caption: device.address,
    });
  }
  connecting.value = false;
};

const testPipeline = async () => {
  if (!connected.value) {
    return;
  }
  try {
    const result = await maaService.runPipeline({
      begin: {
        next: ['splashScreen'],
      },
      splashScreen: {
        action: 'Click',
        recognition: 'OCR',
        expected: '点击开始游戏',
        next: [],
      },
    });
    notify({
      type: 'positive',
      message: i18n('notifications.pipelineTestSuccess', { result }),
    });
  } catch (error) {
    notify({
      type: 'negative',
      message: i18n('notifications.pipelineTestError', { error: (error as Error).message }),
    });
  }
};

onMounted(async () => {
  try {
    adbDevices.value = await maaService.listDevices();
  } catch (error) {
    console.error('Failed to fetch ADB devices:', error);
  }
});
</script>

<template>
  <q-page class="row justify-center q-pa-md-xl q-pa-md">
    <div class="col-grow column items-center justify-center q-gutter-y-md">
      <div class="text-h4 text-weight-regular">
        {{ i18n('labels.title') }}
      </div>
      <q-card>
        <q-list separator>
          <q-item
            v-for="(device, index) in adbDevices"
            :key="index"
            :clickable="!connecting"
            @click="connect(device)"
          >
            <q-item-section>
              <q-item-label>
                {{ device.name }}
              </q-item-label>
              <q-item-label caption>
                {{ device.config }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                {{ device.address }}
              </q-item-label>
            </q-item-section>
            <q-tooltip>
              <div class="text-caption">Path: {{ device.adb_path }}</div>
              <div class="text-caption">Screencap Methods: {{ device.screencap_methods }}</div>
              <div class="text-caption">Input Methods: {{ device.input_methods }}</div>
            </q-tooltip>
          </q-item>
        </q-list>
      </q-card>
      <q-btn :disable="!connected" label="Test Pipeline" @click="testPipeline" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
