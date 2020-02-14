<template>
      <div>
        <div class="card m-2" style="width: 40rem; margin-top:80px;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <h5 class="Child" v-text="fromChild"></h5>
                <button type="submit" @click="sendMessage" class="blue white--text">Parent Click</button>
                <child-card :parentmessage="parentmessage" v-on:childToParent="onChildClick" @finished="finished"></child-card>
            </div>
        </div>
    </div>
</template>

<script>
import ChildCard from './ChildCard.vue'; 

    export default {
     components: {
      ChildCard
    },
    data() {
            return {
                thecardtitle: 'Parent Component!',
                parentmessage: '',
                fromChild: ''
            }
        },
 
        methods: {
            sendMessage() {
                this.fromChild = '';
                this.parentmessage = '<b>Message From Parent:</b> Hi there, this msg from parent';
            },
            finished() {
                this.parentmessage = ''
            },
            onChildClick (value) {        
               this.fromChild = value
            }
        }
    
  }
</script>