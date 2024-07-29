import { StaticImageData } from "next/image";
import drugImage from "@/image/24673275.png"

/** 薬の種類 */
export type drugType = "総合風邪薬" | "解熱鎮痛薬" | "総合胃腸薬" | "整腸剤" | "かゆみ用塗り薬" | "傷用塗り薬" | "湿布薬"

/**
 * #### 常備薬の仮想値の型
 * - icon: アイコン画像
 * - name: 薬の名前
 * - type: 薬の種類
 * - stockCount: 薬の在庫数（ケース単位）
 * - stockAmount: 薬の在庫量（残量）
 */
export type drugParameterType = {
  id: number;
  icon: StaticImageData | string;
  name: string;
  type: drugType;
  stockCount: number;
  stockAmount: string;
}

/**
 * #### 常備薬の仮想値
 */
export const DrugParameter: drugParameterType[] = [
  { id: 1, icon: drugImage, name: '薬品A', type: '総合風邪薬', stockCount: 3, stockAmount: '100mg' },
  { id: 2, icon: drugImage, name: '薬品B', type: '傷用塗り薬', stockCount: 1, stockAmount: '10ml' },
  { id: 3, icon: drugImage, name: '薬品C', type: '整腸剤', stockCount: 2, stockAmount: '60mg' },
  { id: 4, icon: drugImage, name: '薬品D', type: '湿布薬', stockCount: 5, stockAmount: '5枚' },
  { id: 5, icon: drugImage, name: '薬品E', type: '総合胃腸薬', stockCount: 3, stockAmount: '60mg' },
  { id: 6, icon: drugImage, name: '薬品F', type: '解熱鎮痛薬', stockCount: 2, stockAmount: '30mg' },
  { id: 7, icon: drugImage, name: '薬品G', type: 'かゆみ用塗り薬', stockCount: 0, stockAmount: '0ml' },
];
