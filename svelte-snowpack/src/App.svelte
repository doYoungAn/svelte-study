<script lang="ts">
  import ChildComponent from './components/child.svelte';
  export let name = '안도영';
</script>

<h1>Hello {name}</h1>
<ChildComponent />