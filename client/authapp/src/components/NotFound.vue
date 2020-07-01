<template>
  <div class="container">
      <img class="fotomajt" src="..\assets\404.jpg">
      <a class="nav-link" href="/">
      <button class="btn">→ Kliko këtu që të kthehesh në faqen kryesore.</button></a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 75%;
  left: 75%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #FFBE00;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: #FFBE78;
}
</style>