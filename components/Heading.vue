<template>
    <div class="w-2/3 my-12">
        <div class="font-semibold antialiased text-3xl">{{heading}}</div>
        <p class="font-light text-md mt-2 w-fit">
            {{ subheading }}
        </p>
    </div>
</template>

<script>
export default {
    props:['heading','subheading']
}
</script>