
FROM node:16 as dependencies
WORKDIR /drjosiascostaneto.com.br
COPY package.json ./
RUN npm install

FROM node:16 as builder

WORKDIR /drjosiascostaneto.com.br

COPY . .
COPY --from=dependencies /drjosiascostaneto.com.br/node_modules ./node_modules

# RUN npm install npm@latest -g  # Removido

RUN npm run build

FROM node:16 as runner

WORKDIR /drjosiascostaneto.com.br

COPY --from=builder /drjosiascostaneto.com.br/public ./public

COPY --from=builder /drjosiascostaneto.com.br/dist ./dist

COPY --from=builder /drjosiascostaneto.com.br/node_modules ./node_modules

COPY --from=builder /drjosiascostaneto.com.br/package.json ./package.json

EXPOSE 80

CMD ["yarn", "start"]

