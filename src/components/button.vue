<template>
  <button @click="onClick" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({ text: String, onClick: Function, disabled: Boolean })
</script>

<style scoped>
button {
  background-color: #fafbfc;
  border: 1px solid #1b1f23;
  border-radius: 6px;
  box-shadow:
    #1b1f23 0 1px 0,
    #ffffff 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  vertical-align: middle;
}

button:hover {
  background-color: #f0f0f0;
  text-decoration: none;
  transition-duration: 0.1s;
}

button:active {
  background-color: #edeff2;
  box-shadow: #e1e4e8 0 1px 0 inset;
  transition: none 0s;
}

button:focus {
  outline: 1px transparent;
}

button:disabled {
  background-color: #fafbfc;
  border-color: #1b1f23;
  color: #959da5;
  cursor: default;
}
</style>
