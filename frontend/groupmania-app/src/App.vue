
<script setup></script>
import  UserProfileCard from "."
<template>
  <div class="container">
<img class = "logo" src="./img/icon-left-font.svg" alt="logo" width="200" height="60">
<nav>
  <RouterLink class = "linked" to="/"> Home </RouterLink>
  <RouterLink class = "linked" to="/signin"> SignIn </RouterLink>
  <RouterLink class = "linked" to="/signup"> Signup </RouterLink>
  <RouterLink class = "linked" to="/profile"> Profile </RouterLink>
  </nav>
</div>

  <RouterView />
<UserProfileCard />
  
</template>
<style>

nav{
float:right;


}

.logo{
  object-fit:cover;
  overflow: hidden;
}
.linked{
  display: flex;
  background-color: rgb(255, 255, 255);
  color: rgb(3, 3, 3);

  text-decoration: none;

  padding: 10px;
  margin:5px;

}
  linked:hover{
    background-color: rgb(230, 9, 9);
    color: rgb(243, 243, 243);
    text-decoration: none;

  } 
nav {

display: flex;

}.container{
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  height: 70px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

}

</style>