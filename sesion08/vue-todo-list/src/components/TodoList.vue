<template>
    <div>
        <h1>Hola Todo List</h1>
        <ul>
            <li 
                v-for="todo in todos"
                v-bind:key="todo.id">{{todo}}
            >
            
            <TodoItem
                v-bind:todo='todo'
                v-on:mark-complete="$emit
                ('mark-complete',todo.id)"
                v-on:evento-personalizado = "metodoParaEventoPersonalizado"
            />
            
            </li>
            
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name:'TodoList',
    props:["todos"],
      
    components:{
        TodoItem
    },
    methods:{
        metodoParaEventoPersonalizado(){
            //alert('***Evento personalizado***',receivedValue)
            //
            //eslint-disable-next-line no-console
            console.log('***Evento Personalizado')
        }
    }
}
</script>

<style>

</style>