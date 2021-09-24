```vue
<!-- CounterButton.vue -->
<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  const incrementCount = () => {
    count.value += 1
  }
</script>

<​template>
  <button @click="incrementCount">
    This button's been clicked {{ count }} times.
  </button>
</template>
```