<script lang="ts">
    import ChildComponent from './components/child.svelte';
    export let name = '안도영';
</script>

<h1 class="example">Hello {name}</h1>
<h1 class="example1">Hello {name}</h1>
<ChildComponent />

<style lang="scss">
    .example {
        color: red;
    }
</style>