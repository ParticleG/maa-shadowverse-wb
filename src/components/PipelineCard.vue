<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, toRaw } from 'vue';

import type { Pipeline } from 'components/pipeline';
import { AVAILABLE_PIPELINES } from 'components/pipeline';

import { ServiceType } from 'src/types/service';
import { i18nSubPath, useService } from 'src/utils/common';

const i18n = i18nSubPath('components.PipelineCard');
const { notify } = useQuasar();
const maaService = useService(ServiceType.maa);

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  },
);

const errorStepIndex = ref(-1);
const isRunning = ref(false);
const selectedPipeline = ref<Pipeline>();
const splitterRatio = ref(30);
const stepIndex = ref(-1);

const runPipeline = async () => {
  if (props.disabled || !selectedPipeline.value) {
    return;
  }

  isRunning.value = true;
  errorStepIndex.value = -1;
  stepIndex.value = -1;
  for (const task of selectedPipeline.value.tasks) {
    try {
      stepIndex.value++;
      if (await maaService.runNewTask(toRaw(task.data))) {
        notify({
          type: 'positive',
          message: i18n('notifications.taskSuccess', { taskName: i18n(`tasks.${task.name}.name`) }),
        });
      } else {
        notify({
          type: 'negative',
          message: i18n('notifications.taskFailure', { taskName: i18n(`tasks.${task.name}.name`) }),
        });
        notify({
          type: 'negative',
          message: i18n('notifications.pipelineFailure', {
            pipelineName: i18n(`pipelines.${selectedPipeline.value.name}.name`),
          }),
        });
        errorStepIndex.value = stepIndex.value;
        stepIndex.value += 0.5;
        isRunning.value = false;
        return;
      }
    } catch (error) {
      notify({
        type: 'negative',
        message: i18n('notifications.taskError', { error: (error as Error).message }),
      });
      notify({
        type: 'negative',
        message: i18n('notifications.pipelineFailure', {
          pipelineName: i18n(`pipelines.${selectedPipeline.value.name}.name`),
        }),
      });
      errorStepIndex.value = stepIndex.value;
      stepIndex.value += 0.5;
      isRunning.value = false;
      return;
    }
  }
  notify({
    type: 'positive',
    message: i18n('notifications.pipelineSuccess', {
      pipelineName: i18n(`pipelines.${selectedPipeline.value.name}.name`),
    }),
  });
  stepIndex.value++;
  isRunning.value = false;
};

const selectPipeline = (pipeline: Pipeline) => {
  if (isRunning.value || selectedPipeline.value?.name === pipeline.name) {
    return;
  }
  errorStepIndex.value = -1;
  selectedPipeline.value = pipeline;
  stepIndex.value = -1;
  splitterRatio.value = 30;
};
</script>

<template>
  <q-card class="column">
    <q-splitter class="col-grow" v-model="splitterRatio">
      <template v-slot:before>
        <div class="column full-height">
          <q-card-section>
            <div class="text-weight-medium">
              {{ i18n('labels.title') }}
            </div>
          </q-card-section>
          <q-separator />
          <q-scroll-area class="col-grow">
            <q-list separator>
              <q-item
                v-for="pipeline in AVAILABLE_PIPELINES"
                :key="pipeline.name"
                :active="selectedPipeline?.name === pipeline.name"
                :clickable="!isRunning"
                :disable="isRunning"
                @click="selectPipeline(pipeline)"
              >
                <q-item-section avatar class="q-pr-none q-mr-none">
                  <q-avatar :icon="pipeline.icon ?? 'auto_awesome_motion'" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ i18n(`pipelines.${pipeline.name}.name`) }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </template>
      <template v-slot:after>
        <div class="column full-height">
          <q-card-section class="col-grow column">
            <div
              v-if="!selectedPipeline"
              class="self-center text-center text-h4 text-grey text-italic"
            >
              {{ i18n('labels.noPipelineSelected') }}
            </div>
            <q-stepper v-else ref="stepper" animated vertical v-model="stepIndex">
              <q-step
                v-for="(task, index) in selectedPipeline.tasks"
                :key="index"
                active-icon="play_arrow"
                error-icon="warning"
                :done="stepIndex > index"
                :error="errorStepIndex === index"
                :icon="task.icon ?? 'schema'"
                :name="index"
                :title="i18n(`tasks.${task.name}.name`)"
              >
                <div>
                  {{ task.description ?? i18n(`tasks.${task.name}.description`) }}
                </div>
              </q-step>
            </q-stepper>
          </q-card-section>
          <q-separator />
          <q-card-actions align="center">
            <q-btn
              color="primary"
              :disable="disabled || !selectedPipeline"
              :loading="isRunning"
              :label="i18n('labels.runPipeline')"
              no-caps
              @click="runPipeline"
            />
          </q-card-actions>
        </div>
      </template>
    </q-splitter>
  </q-card>
</template>

<style scoped></style>
