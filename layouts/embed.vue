<template>
  <div>
    <nuxt />
    <notifSnackbar></notifSnackbar>
  </div>
</template>
<script>
import notifSnackbar from '~/components/notifSnackbar'
export default {
  components: {
    notifSnackbar,
  },
}
</script>

<style></style>
