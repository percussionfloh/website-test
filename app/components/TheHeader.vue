<script setup>
</script>

<template>
    <header class="bg-primary-500 text-white bg-pattern">
        <div class="flex justify-between items-center py-2 px-4 gap-4">
            <div class="flex gap-2 justify-end items-center">
                <UButton
                    icon="i-simple-icons-github"
                    to="https://github.com/percussionfloh/satzmodelle-tool"
                    target="_blank"
                    variant="ghost"
                    color="neutral"
                    square
                    :ui="{ label: 'hidden', base: 'text-white hover:text-black' }"
                />
                <UButton
                    icon="i-simple-icons-instagram"
                    to="https://instagram.com/percussionfloh"
                    target="_blank"
                    variant="ghost"
                    color="neutral"
                    square
                    :ui="{ label: 'hidden', base: 'text-white hover:text-black' }"
                />
            </div>
        </div>
    </header>
</template>