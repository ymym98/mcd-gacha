<template>
  <div>
    <h1>マクドナルド大体1000円ガチャ</h1>
    <div v-for="menu of finishArray" v-bind:key="menu.id">
      {{ menu.menuName }}
      {{ menu.price }}円
    </div>
    <div>合計金額は{{ totalPrice }}円です</div>
    <button type="button" @click="click">ガチャを回す</button>
  </div>
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
    this.finishArray = [];

    // メニューリストをランダムに並び替える
    this.menuList = this.getMenus.sort(() => Math.random() - 0.5);

    for (let item of this.menuList) {
      // totalPriceに合計金額を代入
      this.totalPrice = this.totalPrice + item.price;
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

<style scoped></style>
