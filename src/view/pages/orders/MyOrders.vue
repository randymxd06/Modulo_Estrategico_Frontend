<template>

  <main>

    <h1 class="mb-10">Mis Pedidos</h1>

    <v-app>

      <v-expansion-panels class="card p-5" style="border-radius: 20px">

        <v-infinite-scroll
          class="col-sm-12"
          :loading="loading" 
          @top="prevPage" 
          @bottom="nextPage" 
          :offset='20' 
          style="max-height: 75vh; overflow-y: scroll;"
        >

          <section class="m-0 row justify-content-center">
            <img
              class="img-fluid"
              v-show="(orders.length === 0)"
              src="@/view/pages/orders/assets/images/loading_food.gif"
              alt="Loading Gif"
            >
          </section>

          <v-expansion-panel class="mb-5" multiple style="border-radius: 20px" v-for="(data, index) in orders" :key="index">

            <v-expansion-panel-header>

              <div class="col-sm-12 col-md-6 text-left">

                <div class="row">
                  <h3>{{fullname}}</h3>
                </div>

                <div class="row">
                  <h5 class="lead">{{data.created_at.split(' ')[0]}}</h5>
                </div>

              </div>

              <div class="col-sm-12 col-md-6 text-right">
                <h5>TOTAL A PAGADO: <span class="text-primary">RD$ {{getTotalAccount(data.order_details).toFixed(2)}}</span></h5>
              </div>

            </v-expansion-panel-header>

            <v-expansion-panel-content class="text-center">
    
              <img class="img-fluid bg-primary mb-5" width="600px" height="200px" src="assets/daraguma-banner.png" alt="Daraguma Image">
              <h4>{{data.created_at.split(' ')[0]}}, {{data.created_at.split(' ')[1].slice(0, 8)}}</h4>
              <span class="lead">www.daragumard.com</span>
              <p class="lead">(849) 858-2406</p>

              <div class="table-responsive-xxl">

                <b-table-simple class="table" sticky-header="450px" fixed hover>

                  <!-- TABLE TITLE -->
                  <b-thead>
                    <b-tr>
                      <b-th>PRODUCTO</b-th>
                      <b-th>CANTIDAD</b-th>
                      <b-th>PRECIO</b-th>
                      <b-th>DESCUENTO</b-th>
                      <b-th>SUBTOTAL</b-th>
                    </b-tr>
                  </b-thead>

                  <!-- TABLE BODY -->
                  <b-tbody v-for="(orderDetail, index) in data.order_details" :key="index">
                    <b-tr>
                      <b-td>{{orderDetail.product_name}}</b-td>
                      <b-td>{{orderDetail.quantity}}</b-td>
                      <b-td>RD$ {{orderDetail.product_price}}</b-td>
                      <b-td>{{(orderDetail.discount != null) ? +orderDetail.discount : 0}}%</b-td>
                      <b-td>RD$ {{getSubtotal(orderDetail)}}</b-td>
                    </b-tr>
                  </b-tbody>

                </b-table-simple>

                <b-button @click="goToPayment(data.id)" size="lg" variant="primary" class="col-sm-5 my-5">
                  <i class="fas fa-redo-alt"></i> Volver a Ordenar
                </b-button>

              </div>

            </v-expansion-panel-content>

          </v-expansion-panel>

        </v-infinite-scroll>

      </v-expansion-panels>

    </v-app>

  </main>

</template>

<script>

import restaurantApi from '@/core/services/api/restaurantApi';
import { mapMutations } from 'vuex';

export default {

  data(){
    return{
      loading: false,
      offsetOrders: 0,
      limitOrders: 10,
      fullname: '',
      orders: [],
    }
  },

  methods: {

    ...mapMutations("productsStore", ["setSelectedCart"]),

    nextPage () {
      this.loading = true;
      this.orders = [];
      this.limitOrders += 10;
      restaurantApi.get(`orders/?offset=${this.offsetOrders}&limit=${this.limitOrders}`)
      .then(({data}) => {
        data.data.forEach(ele => {
          this.orders.push(ele);
        })
        this.loading = false
      })
    },

    async goToPayment(id){

      await restaurantApi.get(`orders/${id}`)
      .then(({data}) => {
        this.setSelectedCart(data.data);
        this.$router.push({ name: 'selected-payment' });
      })
      // .catch(({response}) => {
      //   console.error(response.data);
      // })

    },

    getDate(){
      return new Date().toLocaleDateString('es-ES');
    },

    getFullDate(){
      return new Date().toLocaleString();
    },

    getSubtotal(data){

      let subtotal = (+data.quantity * +data.product_price)

      let total = Number(subtotal - (+data.discount / 100) * subtotal).toFixed(2);

      return total;

    },

    getTotalAccount(data){
      var sum = 0;
      data.forEach(ele => {
        sum += ((+ele.product_price * ele.quantity) - (+ele.discount / 100) * (+ele.product_price * ele.quantity));
      })
      return sum;
    },

  },

  async created(){

    this.fullname = JSON.parse(localStorage.getItem('user')).fullname;

    await restaurantApi.get(`orders/?limit=${this.limitOrders}`)
    .then(({data}) => {
      data.data.forEach(ele => {
        this.orders.push(ele);
      })
    })
    // .catch(({response}) => {
    //   console.error(response.data);
    // })

  },

}

</script>

<style>
.text-blue{
  color: blue;
}
</style>