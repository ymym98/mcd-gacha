<template>
  <body>
    <div class="main">
      <div class="container">
        <h1>マクドナルド大体1000円ガチャ</h1>
        <div class="menu" v-for="menu of finishArray" v-bind:key="menu.id">
          <div class="itemName">{{ menu.menuName }}</div>
          <span class="msg">{{ menu.price }}円 {{ menu.calorie }}kcal</span>
        </div>
        <div class="total">
          合計 {{ totalPrice }}円 / {{ totalCalorie }}kcal
        </div>
        <button type="button" @click="click">ガチャを回す</button>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { Menu } from "@/types/Menu";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Gacha extends Vue {
  // 商品一覧が入った配列
  private menuList = new Array<Menu>();
  // 商品の合計金額
  private totalPrice = 0;
  // ランダムに並び替えた商品を入れる配列
  private finishArray = new Array<Menu>();
  // カロリーの合計
  private totalCalorie = 0;

  /**
   * getterで呼んだ商品一覧をフィールド変数に代入する.
   */
  created(): void {
    this.menuList = this.getMenus;
  }

  /**
   * ボタンを押す度に呼ばれるメソッド
   * ランダムに並び替え、上から順に金額を足していき、900円以上1500円以下になったら配列にpush
   */
  click(): void {
    // ボタンを押す度に初期化
    this.totalPrice = 0;
    this.totalCalorie = 0;
    this.finishArray = [];

    // メニューリストをランダムに並び替える
    this.menuList = this.getMenus.sort(() => Math.random() - 0.5);

    for (let item of this.menuList) {
      // totalPriceに合計金額を代入
      this.totalPrice = this.totalPrice + item.price;
      // totalCalorieに合計カロリーを代入
      this.totalCalorie = this.totalCalorie + item.calorie;
      // ランダムに並び替えた商品を配列にpush
      this.finishArray.push(item);
      // 商品の合計金額が900円から1500円だったら処理を終わる
      if (this.totalPrice >= 900 && this.totalPrice <= 1500) {
        return;
      }
    }
  }

  /**
   * Vuexストア内の商品一覧を取得し、返す.
   */
  get getMenus(): Array<Menu> {
    return this["$store"].getters.getMenus;
  }
}
</script>

<style scoped>
button {
  width: 150px;
  height: 40px;
  margin: 10px;
  font-size: 20px;
}
.itemName {
  font-size: 30px;
}
.msg {
  font-size: 20px;
  color: gray;
}
.menu {
  background: white;
  border: solid;
  margin: 1em;
}
.total {
  font-size: 40px;
}

.container {
  border: solid 3px; /*線*/
  border-radius: 10px; /*角の丸み*/
  margin: 0 auto;
  text-align: center;
  width: 40%;
  margin-top: 50px;
  background-color: #ffc600;
}

@media (max-width: 480px) {
  .itemName {
    font-size: 15px;
  }
  .msg {
    font-size: 10px;
    color: gray;
  }
  .container {
    border: solid 3px; /*線*/
    border-radius: 10px; /*角の丸み*/
    margin: 0 auto;
    text-align: center;
    width: 80%;
    margin-top: 20px;
    background-color: #ffc600;
  }
  .total {
    font-size: 20px;
  }
  h1 {
    font-size: 15px;
  }
  button {
    width: 150px;
    height: 40px;
    margin: 10px;
    font-size: 10px;
  }
}
</style>
