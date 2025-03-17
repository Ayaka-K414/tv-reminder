# 制作背景
NHK番組検索アプリです。想定しているユーザーは、NHKの番組を視聴したり、録画する習慣のある人です。放送時間が変更になったり、TVの番組表から録画するときにタイトルがうまく取得できず、連続録画できていなかった経験がある方に対して、簡単に検索し事前通知もできるサービスを制作しています。

## URL
* URL:（未定）
* ゲストログインボタンから簡単にログインできます。

## ER図
%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%22%20style%3D%22edgeStyle%3DentityRelationEdgeStyle%3BfontSize%3D12%3Bhtml%3D1%3BendArrow%3DERzeroToMany%3BstartArrow%3DERmandOne%3Brounded%3D0%3BexitX%3D0.419%3BexitY%3D-0.013%3BexitDx%3D0%3BexitDy%3D0%3BexitPerimeter%3D0%3BentryX%3D0.419%3BentryY%3D-0.013%3BentryDx%3D0%3BentryDy%3D0%3BentryPerimeter%3D0%3B%22%20edge%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20width%3D%22100%22%20height%3D%22100%22%20relative%3D%221%22%20as%3D%22geometry%22%3E%3CmxPoint%20x%3D%2294.99999999999996%22%20y%3D%22140.7821229050279%22%20as%3D%22sourcePoint%22%2F%3E%3CmxPoint%20x%3D%22124.9999999999999%22%20y%3D%22140.78212290502768%22%20as%3D%22targetPoint%22%2F%3E%3CArray%20as%3D%22points%22%3E%3CmxPoint%20x%3D%22134.9999999999999%22%20y%3D%22150.78212290502768%22%2F%3E%3CmxPoint%20x%3D%2299.99999999999983%22%20y%3D%22140.7821229050278%22%2F%3E%3CmxPoint%20x%3D%22109.99999999999994%22%20y%3D%22160.7821229050278%22%2F%3E%3CmxPoint%20x%3D%22101.19999999999995%22%20y%3D%22157.6621229050278%22%2F%3E%3CmxPoint%20x%3D%2289.99999999999994%22%20y%3D%22140.7821229050278%22%2F%3E%3C%2FArray%3E%3C%2FmxGeometry%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E

## 使用技術
* React 19.0.0
* React DOM 19.0.0
* React Router DOM 7.2.0
* Axios 1.7.9
* TypeScript 5.7.2
* CSS
* Firebase 11.3.1（Authentication・Firestore・Hosting・FCM）
* Vite 6.1.0
* NHK番組表API

## 機能一覧
* 新規アカウント登録
* ログイン
* ゲストユーザーログイン
* ログアウト
* 番組検索
* お気に入り登録
* 事前通知
