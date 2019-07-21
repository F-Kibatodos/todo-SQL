# 待辦事項

本網站程式可以記錄代辦事項，並勾選是否完成

## 開發作業系統

- macOS Sierra 10.14.5

## 使用軟體及套件

- bcryptjs: ^2.4.3

- body-parser: ^1.19.0

- dotenv: ^8.0.0

- express: ^4.17.1

- express-handlebars: ^3.1.0

- express-session: ^1.16.2

- method-override: ^3.0.0

- passport: ^0.4.0

- passport-facebook: ^3.0.0

- passport-local: ^1.0.0

- sequelize- ^5.10.1

- sequelize-cli- ^5.5.0

- mysql2:-^1.6.5

- [MySQL](https://dev.mysql.com/downloads/mysql/) 8.0.16

- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) 8.0.16

## 安裝

- 安裝 MySQL

打開安裝檔，同意並點擊完安裝後，選擇 "Use Legacy Password Encryption"，按繼續並設置一組密碼，記得要勾選安裝完畢後啟動 MySQL

- 安裝 MySQL Workbench

安裝好後請務必注意 MySQL server 是否開啟

開啟 MySQL Workbench，點擊左下角已經先建好的連線「Local instance 3306」，密碼即是安裝時設定的密碼
在工作區寫以下程式碼

```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

接著開啟新的終端機輸入

```
cd 資料夾名稱 // 移動到指定資料夾
```

或輸入

```
mkdir 資料夾名稱 // 創建新資料夾
```

並在此資料夾中依序輸入

```
git clone https://github.com/F-Kibatodos/todo-SQL.git    // 將此專案下載到資料夾
cd todo-SQL                                              // 移動到專案資料夾
npm install                                              // 下載相關npm套件
```

接著到根目錄/config/config.js 更改以下

```
"password": Workbench密碼,
"database": "todo_sequelize"
```

繼續在終端機輸入

```
npx sequelize db:migrate
```

## 環境變數設定

請於專案資料夾根目錄下，新增一`.env`檔案
並且寫入

```
FACEBOOK_ID='個人的facebook開發專案id'
FACEBOOK_SECRET='個人的facebook開發專案secret'
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```

## 執行

終端機輸入`npm run dev`，接著就可以在網頁輸入http://localhost:3000見到頁面

## 功能說明

- 新增、查看、修改、刪除一筆 todo
- 選則是否以經完成

### 作者

[F-Kibatodos](https://github.com/F-Kibatodos)
