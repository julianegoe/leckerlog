<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Restaurant } from "../types/types";
import { useUser } from "../store/user";

const userStore = useUser();

const allEntries = ref<any[]>([]);

onMounted(async () => {
    const q = query(collection(db, "Restaurants"), where("userId", "==", userStore.userId));

    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allEntries.value.push({
            ...doc.data(),
            restaurantId: doc.id,
        });
    });
});

</script>
<template>
    <div v-if="allEntries.length > 0" class="flex flex-col gap-4 m-auto p-2">
        <RestaurantCard v-for="(entry, index) in allEntries" :key="`${index}-entry`" :lecker-log="entry" :doc-id="entry.restaurantId" />
    </div>
</template>