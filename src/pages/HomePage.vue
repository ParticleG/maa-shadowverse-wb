<script setup lang="ts">
import { i18nSubPath } from 'src/utils/common';

const i18n = i18nSubPath('pages.HomePage');
</script>

<template>
  <q-page class="row justify-center q-pa-md-xl q-pa-md">
    <div class="col-grow column items-center justify-center q-gutter-y-md">
      <div class="text-h4 text-weight-regular">
        {{ i18n('labels.title') }}
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
