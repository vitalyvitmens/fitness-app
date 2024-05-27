### Чтобы создать подобное приложение
- npx create-next-app@latest fitness-app --typescript
- npm install @prisma/client
- npx prisma init
- В файле prisma/schema.prisma определи свои модели данных
- создай файл docker-compose.yml:
```
version: "3"

services:
  db:
    image: postgres
    restart: always
    ports:
      - 5433:5432
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
```
- docker-compose up -d
- docker ps
- чтобы удалить контейнер: docker-compose down
- npx prisma migrate dev
