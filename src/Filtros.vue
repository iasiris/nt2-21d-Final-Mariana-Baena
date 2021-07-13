<template lang="html">
  <section class="filtros">
    <input type="text" id="input" v-model="palabra" />

    <h3>Contador: {{ cantidad }}</h3>
    <!--2) Todo en mayúscula.-->
    <h3>{{ palabra | pasarAmayuscula }}</h3>
    <!--3) Todo en minúscula.-->
    <h3>{{ palabra | pasarAminuscula }}</h3>
    <!--4) Minúsculas y mayúsculas intercaladas, empezando por mayúscula.-->
    <h3>{{ palabra | iniciarConMayus }}</h3>
    <!--5) Minúsculas y mayúsculas intercaladas, empezando por minúscula-->
    <h3>{{ palabra | iniciarConMinus }}</h3>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'filtros',
    props: [],
    mounted () {

    },
    data () {
      return {
        palabra:''
      }
    },
    methods: {

    },
    computed: {
      cantidad(){
        return this.palabra.length
      }
    }
}
</script>

<style scoped lang="css"></style>
