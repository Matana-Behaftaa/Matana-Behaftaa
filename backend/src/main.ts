import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    allowedHeaders: [
      "origin",
      "x-requested-with",
      "content-type",
      "accept",
      "authorization",
    ],
    credentials: true,
    origin: [process.env.CLIENT_ORIGIN],
  };

  app.enableCors(corsOptions);

  const PORT = process.env.NODE_DOCKER_PORT || 8080;
  await app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
  });
}
bootstrap();
