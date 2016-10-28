const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/maktab',
  port: process.env.PORT || 3000,
  secret: "mehdi!jorjor@rocks#4815$"
};

export default config;
