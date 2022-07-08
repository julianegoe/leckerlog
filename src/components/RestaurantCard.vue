<script lang="ts" setup>
import { Restaurant } from '../types/types';


const props = defineProps<{
    leckerLog: Restaurant;
    docId: string;
}>();

</script>
<template>
    <RouterLink :to="{name: 'Food', params: { id: docId, restaurant: leckerLog.name}}">
        <div>
            <h1 class="text-lg font-bold pb-2">{{ leckerLog.name }}</h1>
            <div>{{ leckerLog.cuisine }}</div>
        </div>
    </RouterLink>
</template>
