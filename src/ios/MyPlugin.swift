@objc(MyPlugin) class MyPlugin : CDVPlugin {
  @objc(greet:)
  func greet(command: CDVInvokedUrlCommand) {
    let name = command.argument(at: 0) as? String ?? "Guest"
    let pluginResult = CDVPluginResult(status: .ok, messageAs: "Hello, \(name)!")
    self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
}
