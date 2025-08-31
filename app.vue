<template>
  <Html>
    <Head>
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" />
    </Head>

    <Body class="font-satoshi">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

body {
  font-family: "Satoshi", sans-serif;
}
</style>
