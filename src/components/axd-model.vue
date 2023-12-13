<template>
    <primitive :object="model"></primitive>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos'

const { scene: model } = await useGLTF(
    '/models/AXD.gltf',
    { draco: true }
)
</script>

<style lang="scss"></style>