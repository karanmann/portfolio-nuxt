<template>
  <div>
    {{ projectName }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: this.$route.params.project,
    };
  },
};
</script>

<style></style>
