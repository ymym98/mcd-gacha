import { Menu } from "@/types/Menu";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [
      new Menu(1, "ハンバーガー", 256, 110),
      new Menu(2, "チーズバーガー", 307, 140),
      new Menu(3, "チキンクリスプ", 345, 110),
      new Menu(4, "チキチー", 431, 200),
      new Menu(5, "エグチ", 387, 200),
      new Menu(6, "スパチキ", 386, 200),
      new Menu(7, "スパビー", 329, 200),
      new Menu(8, "えびフィレオ", 395, 390),
      new Menu(9, "ベーコンレタスバーガー", 374, 360),
      new Menu(10, "てりやきチキンフィレオ", 498, 370),
      new Menu(11, "チキンフィレオ", 465, 360),
      new Menu(12, "フィレオフィッシュ", 323, 340),
      new Menu(13, "てりやきマックバーガー", 478, 340),
      new Menu(14, "ダブルチーズバーガー", 457, 340),
      new Menu(15, "炙り醤油風 ベーコントマト肉厚ビーフ", 471, 490),
      new Menu(16, "炙り醤油風 ダブル肉厚ビーフ", 625, 490),
      new Menu(17, "ビッグマック", 525, 390),
      new Menu(18, "コク旨アンガスビーフボロネーゼグラコロ", 437, 390),
      new Menu(19, "グラコロ", 407, 340),
      new Menu(20, "チキンナゲット15ピース", 810, 390),
      new Menu(21, "チキンナゲット5ピース", 270, 200),
      new Menu(22, "マックフライポテトS", 225, 150),
      new Menu(23, "マックフライポテトM", 410, 280),
      new Menu(24, "マックフライポテトL", 517, 330),
      new Menu(25, "サイドサラダ", 10, 280),
      new Menu(26, "えだまめコーン", 83, 250),
      new Menu(27, "ヨーグルト", 59, 190),
      new Menu(28, "シャカチキ", 243, 150),
      new Menu(29, "コカ・コーラ ゼロS", 0, 100),
      new Menu(30, "コカ・コーラ ゼロM", 0, 220),
      new Menu(31, "コカ・コーラ ゼロL", 0, 250),
      new Menu(32, "コカ・コーラS", 90, 100),
      new Menu(33, "コカ・コーラM", 140, 220),
      new Menu(34, "コカ・コーラ L", 181, 250),
      new Menu(35, "スプライト S", 80, 100),
      new Menu(36, "スプライト M", 124, 220),
      new Menu(37, "スプライト L", 164, 250),
      new Menu(38, "ファンタグレープ S", 101, 100),
      new Menu(39, "ファンタグレープ M", 156, 220),
      new Menu(40, "ファンタグレープ L", 202, 250),
      new Menu(41, "Qoo すっきり白ブドウ S", 94, 100),
      new Menu(42, "Qoo すっきり白ブドウ M", 146, 220),
      new Menu(43, "Qoo すっきり白ブドウ L", 189, 250),
      new Menu(44, "爽健美茶 S", 0, 100),
      new Menu(45, "爽健美茶 M", 0, 220),
      new Menu(46, "爽健美茶 L", 0, 250),
      new Menu(47, "プレミアムローストコーヒー S", 11, 100),
      new Menu(48, "プレミアムローストコーヒー M", 20, 150),
      new Menu(49, "カフェラテ S", 86, 150),
      new Menu(50, "カフェラテ M", 120, 200),
      new Menu(51, "キャラメルラテ S", 137, 210),
      new Menu(52, "キャラメルラテ M", 171, 260),
    ],
  }, // end state
  mutations: {}, // end mutations
  actions: {}, // end actions
  modules: {}, // end modules
  getters: {
    /**
     * 商品情報一覧を返す.
     * @param state ステート
     * @returns 商品情報一覧
     */
    getMenus(state) {
      return state.menus;
    },
  },
});
