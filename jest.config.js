// jest.config.js
const nextJest = require('next/jest');

// Providencia o caminho para a sua aplicação Next.js
const createJestConfig = nextJest({
  dir: './',
});

// Adiciona configurações customizadas que o Jest usará
const customJestConfig = {
  // Configurações do ambiente de teste
  testEnvironment: 'jest-environment-jsdom',
  // Padrão de arquivo para encontrar os testes
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // Padrão de arquivo para os testes
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
  // Mapeamento de módulos para lidar com arquivos CSS e imagens
  moduleNameMapper: {
    // Lida com imports de CSS modules (ex: import styles from './styles.module.css')
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Lida com assets como imagens e fontes
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // Habilita o ts-jest para processar arquivos .ts, .tsx, .js e .jsx
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }]
  },
  // Pasta onde o Jest buscará os testes
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // Necessário para o ts-jest
  preset: 'ts-jest',
};

// Cria o Jest config de forma assíncrona
module.exports = createJestConfig(customJestConfig);
