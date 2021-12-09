/**
 * マクドナルドのメニューの部品用クラス.
 */
export class Menu {
  constructor(
    // ID
    private _id: number,
    // 商品名
    private _menuName: string,
    // カロリー
    private _calorie: number,
    // 値段
    private _price: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get menuName(): string {
    return this._menuName;
  }

  public set menuName(menuName: string) {
    this._menuName = menuName;
  }

  public get calorie(): number {
    return this._calorie;
  }

  public set calorie(calorie: number) {
    this._calorie = calorie;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }
}
