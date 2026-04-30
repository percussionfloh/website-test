<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Datenbank!` : 'Datenbank!';
    },
});
</script>

<template>
        <UApp :locale="de">
            <div class="flex flex-col min-h-screen">
                <TheHeader class="mt-auto" />
                <TheNavigation />
                <main class="py-8">
                    <slot></slot>
                </main>
                <TheFooter class="mt-auto" />
            </div>
        </UApp>
</template>

<style>
html {
    font-size: 20px;
}
.bg-pattern {
    background-color: oklch(37.463% 0.2271 264.781);
}

</style>