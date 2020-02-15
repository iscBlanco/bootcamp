<template>
    <div>
        <input 
            type="checkbox" 
            v-bind:checked="todo.completes"
            v-on:change="$emit('mark-complete',todo-id)"
        />
        <label>{{todo.title}}</label>
        <button v-on:click="$emit('evento-personalizado','valir que lo acompa;a')">Emit event</button>
    </div>
</template>

<script>
export default {
    name:'TodoItem',
    props:["todo"],
}
</script>

<style>

</style>