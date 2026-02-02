module.exports = {
  devServer: (devServerConfig) => {
    // Eliminar las opciones obsoletas
    delete devServerConfig.onBeforeSetupMiddleware
    delete devServerConfig.onAfterSetupMiddleware

    // Usar setupMiddlewares en su lugar
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      // Aquí puedes agregar middlewares personalizados si los necesitas
      // middlewares.unshift(...);
      // middlewares.push(...);

      return middlewares
    }

    return devServerConfig
  }
}
