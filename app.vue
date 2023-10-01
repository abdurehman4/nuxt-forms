<template>
  <div class="h-full w-full">
    <Header />
    <div>
      <!-- Form to log in and out -->
      <button @click="signIn" class="rounded px-4 py-2 text-white  hover:ring-2 m-2 rounded bg-black-600">Sign In</button>
      <button @click="signOut" class="rounded px-4 py-2 text-white  hover:ring-2 m-2 rounded bg-black-600">Sign Out</button>
    </div>
    <pre>
      {{ credentials }}
    </pre>
  </div>
</template>


<script setup>
const credentials = ref();
const signIn = async () => {
  const email = "arehmanimran4@gmail.com";
  const password = "123456";
credentials.value = await signInUser(email, password);

}

const signOut = async () => {
  credentials.value=await signOutUser();
}
</script>



<style>
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  src: local("Product Sans"), url('assets/ProductSans/ProductSans-Regular.ttf') format("truetype");
}

@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  src: local("Product Sans"), url('assets/ProductSans/ProductSans-Italic.ttf') format("truetype");
}

@font-face {
  font-family: 'Gulzar Regular';
  font-style: italic;
  direction: rtl;
  src: local("Gulzar Regular"), url('assets/Gulzar/Gulzar-Regular.ttf') format("truetype");
  unicode-range: U+20, U+24-25, U+27-29, U+2B-3A, U+3C-3E, U+5B-5F, U+7C, U+A0, U+A9, U+60C-60D, U+61B, U+61F, U+621, U+627-628, U+62A-63A, U+641-642, U+644-646, U+648, U+66B-66C, U+679, U+67E, U+686, U+688, U+691, U+698, U+6A9, U+6AF, U+6BE, U+6C1, U+6CC, U+6D2, U+6D4, U+6F0-6F9, U+200E, U+2011, U+2030, U+20AC, U+06??;
}

* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  font-family: 'Product Sans', 'Gulzar Regular';
  font-size: large;
}

.center {
  text-align: center;
}</style>
