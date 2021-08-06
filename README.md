## Setup Backend
1. Clone this repo
2. Run npm install
3. Create database in your mysql server named "dominopizza"
4. In config/database.js change config based on your local machine and add "dominopizza" on key "database"
5. Run npx sequelize-cli db:migrate
6. to start -> npm run dev
7. Use node v16+ for the app to function properly