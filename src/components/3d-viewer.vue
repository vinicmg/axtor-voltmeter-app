<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import AxdModel from '../components/axd-model.vue';
</script>

<template>
    <v-container>
        <Suspense>
            <TresCanvas clear-color="#BBDEFB" shadows alpha window-size power-preference="high-performance">
                <TresPerspectiveCamera :position="[20, 10, 10]" :fov="75" :near="0.1" :far="1000" />
                <OrbitControls />
                <TresAmbientLight :color="0xffffff" :intensity="0.25" />
                <TresDirectionalLight :position="[0, 8, 4]" :intensity="1" cast-shadow />
                <Suspense>
                    <AxdModel />
                </Suspense>
            </TresCanvas>
        </Suspense>
    </v-container>
</template>
