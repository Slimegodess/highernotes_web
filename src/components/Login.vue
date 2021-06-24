<template>
  <div>
    <div class="authentication">
      <div v-if="authState !== 'signedin'">You are signed out.</div>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
          <div>Hello, {{user.username}}</div>
        </div>
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authentication',
};
</script>

<style>

</style>
